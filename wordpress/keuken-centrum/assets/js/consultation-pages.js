(() => {
	const page = document.querySelector("[data-consultation-page]");
	if (!page) return;

	const form = page.querySelector("[data-consultation-form]");
	const formView = page.querySelector("[data-consultation-form-view]");
	const success = page.querySelector("[data-consultation-success]");
	const submitBtn = page.querySelector("[data-consultation-submit]");
	const toggle = page.querySelector("[data-proposal-toggle]");
	const proposal = page.querySelector("[data-proposal-panel]");
	const hero = page.querySelector("[data-consultation-hero]");

	const nameEl = form?.querySelector('[name="name"]');
	const emailEl = form?.querySelector('[name="email"]');
	const phoneEl = form?.querySelector('[name="phone"]');
	const showroomEl = form?.querySelector('[name="showroom"]');
	const dateEl = form?.querySelector('[name="date"]');
	const notesEl = form?.querySelector('[name="notes"]');

	let attempted = false;

	const storageKey = () =>
		(window.kcConfigurator && window.kcConfigurator.storageKey) || "kc-master-config";

	function loadConfiguratorState() {
		try {
			const raw = window.localStorage.getItem(storageKey());
			if (!raw) return { selections: {} };
			const parsed = JSON.parse(raw);
			return parsed && typeof parsed === "object" ? parsed : { selections: {} };
		} catch (_e) {
			return { selections: {} };
		}
	}

	function selectionLines(state, catalog) {
		const lines = [];
		(catalog.categories || []).forEach((cat) => {
			const sel = state.selections && state.selections[cat.id];
			if (!sel) return;
			lines.push({ label: cat.label, value: sel.name, color: sel.color });
		});
		return lines;
	}

	function styleImageUrl(state, catalog) {
		if (!state || !state.style) return "";
		const style = (catalog.styles || []).find((item) => item.id === state.style);
		return (style && style.base) || "";
	}

	async function kitchenImageFile(imageUrl) {
		if (!imageUrl) return null;
		try {
			const response = await fetch(imageUrl, { credentials: "same-origin" });
			if (!response.ok) return null;
			const blob = await response.blob();
			if (!blob || !blob.size) return null;
			const extension = imageUrl.includes(".webp")
				? "webp"
				: imageUrl.includes(".png")
					? "png"
					: "jpg";
			const mime = blob.type || "image/" + extension;
			return new File([blob], "mijn-keukenvoorstel." + extension, { type: mime });
		} catch (_error) {
			return null;
		}
	}

	function buildWhatsAppMessage(formData, state, catalog) {
		const selections = selectionLines(state, catalog);
		const imageUrl = styleImageUrl(state, catalog);
		const parts = [
			"Hallo Keuken-Centrum, ik heb zojuist mijn keukenconfiguratie samengesteld via jullie configurator.",
			"",
			"Naam: " + formData.name,
			"E-mail: " + formData.email,
		];
		if (formData.phone) parts.push("Telefoon: " + formData.phone);
		parts.push("Showroom: " + formData.showroom);
		if (formData.date) parts.push("Gewenste datum: " + formData.date);
		parts.push("", "Mijn keukenconfiguratie:");
		if (state.brandName || state.brand) {
			parts.push("Merk: " + (state.brandName || state.brand));
		}
		if (state.styleName || state.style) {
			parts.push("Stijl: " + (state.styleName || state.style));
		}
		if (selections.length) {
			parts.push("");
			selections.forEach((row) => parts.push("- " + row.label + ": " + row.value));
		}
		if (imageUrl) {
			parts.push("", "Keukenvoorbeeld (afbeelding):", imageUrl);
		}
		if (formData.notes) {
			parts.push("", "Wensen:", formData.notes);
		}
		return parts.join("\n");
	}

	async function openWhatsApp(message, state, catalog) {
		const cfg = window.kcConfigurator || {};
		const number =
			page.getAttribute("data-whatsapp-number") || cfg.whatsappNumber || "31628096340";
		const imageUrl = styleImageUrl(state, catalog);
		const imageFile = imageUrl ? await kitchenImageFile(imageUrl) : null;

		if (imageFile && navigator.share) {
			try {
				const shareData = { text: message, files: [imageFile] };
				if (!navigator.canShare || navigator.canShare(shareData)) {
					await navigator.share(shareData);
					return;
				}
			} catch (error) {
				if (error && error.name === "AbortError") return;
			}
		}

		const url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
		window.open(url, "_blank", "noopener,noreferrer");
	}

	const emailValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	const isValid = () =>
		Boolean(
			(nameEl?.value || "").trim() &&
				emailValid((emailEl?.value || "").trim()) &&
				(showroomEl?.value || "")
		);

	const syncSubmit = () => {
		if (!submitBtn) return;
		const ok = isValid();
		submitBtn.disabled = !ok;
		submitBtn.classList.toggle("is-ready", ok);
	};

	const setFieldError = (name, show) => {
		const field = form?.querySelector(`[name="${name}"]`)?.closest(".consultation-field");
		const err = form?.querySelector(`[data-error-for="${name}"]`);
		if (field) field.classList.toggle("is-invalid", show);
		if (err) err.hidden = !show;
	};

	const showErrors = () => {
		setFieldError("name", !(nameEl?.value || "").trim());
		setFieldError("email", !emailValid((emailEl?.value || "").trim()));
		setFieldError("showroom", !(showroomEl?.value || ""));
	};

	form?.addEventListener("input", () => {
		if (attempted) showErrors();
		syncSubmit();
	});
	form?.addEventListener("change", () => {
		if (attempted) showErrors();
		syncSubmit();
	});
	syncSubmit();

	toggle?.addEventListener("click", () => {
		const open = !(toggle.getAttribute("aria-expanded") === "true");
		toggle.setAttribute("aria-expanded", open ? "true" : "false");
		toggle.classList.toggle("is-open", open);
		proposal?.classList.toggle("is-open", open);
	});

	form?.addEventListener("submit", async (event) => {
		event.preventDefault();
		attempted = true;
		showErrors();
		if (!isValid()) return;

		const errorBox = page.querySelector("[data-consultation-error]");
		if (errorBox) {
			errorBox.classList.remove("is-visible");
			errorBox.textContent = "";
		}

		const formData = {
			name: (nameEl?.value || "").trim(),
			email: (emailEl?.value || "").trim(),
			phone: (phoneEl?.value || "").trim(),
			showroom: showroomEl?.value || "",
			date: dateEl?.value || "",
			notes: (notesEl?.value || "").trim(),
		};

		const payload = new FormData();
		payload.append("action", "kc_consultation_submit");
		payload.append(
			"nonce",
			form.querySelector('[name="nonce"]')?.value || form.getAttribute("data-nonce") || "",
		);
		payload.append("name", formData.name);
		payload.append("email", formData.email);
		payload.append("phone", formData.phone);
		payload.append("showroom", formData.showroom);
		payload.append("date", formData.date);
		payload.append("notes", formData.notes);
		payload.append("company_website", form.querySelector('[name="company_website"]')?.value || "");

		const state = loadConfiguratorState();
		try {
			payload.append("config_json", JSON.stringify(state));
		} catch (_e) {
			payload.append("config_json", "{}");
		}

		submitBtn.disabled = true;
		submitBtn.classList.remove("is-ready");
		const defaultLabel = submitBtn.textContent;
		submitBtn.textContent = "Aanvraag verzenden...";

		const fail = (message) => {
			if (errorBox) {
				errorBox.textContent =
					message ||
					"Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw of bel de showroom.";
				errorBox.classList.add("is-visible");
			}
			submitBtn.textContent = defaultLabel;
			submitBtn.disabled = false;
			syncSubmit();
		};

		try {
			const res = await fetch(form.getAttribute("data-ajax-url") || "/wp-admin/admin-ajax.php", {
				method: "POST",
				body: payload,
				credentials: "same-origin",
			});
			const json = await res.json().catch(() => ({ success: false }));
			if (!json?.success || !json.data?.delivered) {
				fail(json?.data?.message || "");
				return;
			}
		} catch (_err) {
			fail("");
			return;
		}

		const catalog = (window.kcConfigurator && window.kcConfigurator.catalog) || { categories: [] };
		const message = buildWhatsAppMessage(formData, state, catalog);
		void openWhatsApp(message, state, catalog);

		const firstName = (formData.name.split(/\s+/)[0] || "");
		const lede = page.querySelector("[data-success-lede]");
		const showroomOut = page.querySelector("[data-success-showroom]");
		const dateWrap = page.querySelector("[data-success-date-wrap]");
		const dateOut = page.querySelector("[data-success-date]");
		const tpl =
			success?.getAttribute("data-success-template") ||
			"Dank u, {name}. Uw persoonlijke ontwerpadviseur neemt binnen 24 uur contact met u op om de afspraak te bevestigen.";

		if (lede) {
			lede.textContent = tpl.replace(/\{name\}/g, firstName);
		}
		if (showroomOut) showroomOut.textContent = formData.showroom;
		if (formData.date && dateWrap && dateOut) {
			dateWrap.hidden = false;
			dateOut.textContent = formData.date;
		}

		if (formView) formView.hidden = true;
		if (success) success.hidden = false;
		if (hero) hero.classList.add("is-submitted");
	});
})();
