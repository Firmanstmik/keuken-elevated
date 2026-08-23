(() => {
	const page = document.querySelector("[data-consultation-page]");
	if (!page) return;

	const form = page.querySelector("[data-consultation-form]");
	const formView = page.querySelector("[data-consultation-form-view]");
	const success = page.querySelector("[data-consultation-success]");
	const submitBtn = page.querySelector("[data-consultation-submit]");
	const toggle = page.querySelector("[data-proposal-toggle]");
	const proposal = page.querySelector("[data-proposal-panel]");
	const budgetSelect = page.querySelector("[data-budget-select]");
	const budgetDetail = page.querySelector('[data-preview-detail="budget"]');
	const hero = page.querySelector("[data-consultation-hero]");

	const nameEl = form?.querySelector('[name="name"]');
	const emailEl = form?.querySelector('[name="email"]');
	const phoneEl = form?.querySelector('[name="phone"]');
	const showroomEl = form?.querySelector('[name="showroom"]');
	const dateEl = form?.querySelector('[name="date"]');
	const notesEl = form?.querySelector('[name="notes"]');

	let attempted = false;

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
		if (budgetSelect && budgetDetail) {
			budgetDetail.textContent = budgetSelect.value || "Kies uw budget";
		}
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

		const payload = new FormData();
		payload.append("action", "kc_consultation_submit");
		payload.append("nonce", form.getAttribute("data-nonce") || "");
		payload.append("name", (nameEl?.value || "").trim());
		payload.append("email", (emailEl?.value || "").trim());
		payload.append("phone", (phoneEl?.value || "").trim());
		payload.append("showroom", showroomEl?.value || "");
		payload.append("budget", budgetSelect?.value || "");
		payload.append("date", dateEl?.value || "");
		payload.append("notes", (notesEl?.value || "").trim());
		payload.append("company_website", form.querySelector('[name="company_website"]')?.value || "");

		const storageKey = (window.kcConfigurator && window.kcConfigurator.storageKey) || "kc-master-config";
		try {
			payload.append("config_json", window.localStorage.getItem(storageKey) || "{}");
		} catch (_e) {
			payload.append("config_json", "{}");
		}

		submitBtn.disabled = true;
		submitBtn.classList.remove("is-ready");

		const fail = (message) => {
			if (errorBox) {
				errorBox.textContent =
					message ||
					"Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw of bel de showroom.";
				errorBox.classList.add("is-visible");
			}
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

		const firstName = ((nameEl?.value || "").trim().split(/\s+/)[0]) || "";
		const lede = page.querySelector("[data-success-lede]");
		const showroomOut = page.querySelector("[data-success-showroom]");
		const dateWrap = page.querySelector("[data-success-date-wrap]");
		const dateOut = page.querySelector("[data-success-date]");
		const tpl = success?.getAttribute("data-success-template") || "Dank u, {name}. Uw persoonlijke ontwerpadviseur neemt binnen 24 uur contact met u op om de afspraak te bevestigen.";

		if (lede) {
			lede.textContent = tpl.replace(/\{name\}/g, firstName);
		}
		if (showroomOut) showroomOut.textContent = showroomEl?.value || "";
		if (dateEl?.value && dateWrap && dateOut) {
			dateWrap.hidden = false;
			dateOut.textContent = dateEl.value;
		}

		if (formView) formView.hidden = true;
		if (success) success.hidden = false;
		if (hero) hero.classList.add("is-submitted");
	});
})();
