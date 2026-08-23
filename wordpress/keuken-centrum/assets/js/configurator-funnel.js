/**
 * Configurator funnel — React-compatible localStorage key `kc-master-config`.
 * Schema: { brand, brandName, style, styleName, selections: { [categoryId]: { id, name, color } }, budget }
 */
(function () {
	"use strict";

	const cfg = window.kcConfigurator || {};
	const KEY = cfg.storageKey || "kc-master-config";
	const urls = cfg.urls || {};
	const catalog = cfg.catalog || {};
	const step = cfg.step || "";

	const emptyState = {
		brand: null,
		brandName: null,
		style: null,
		styleName: null,
		selections: {},
		budget: null,
	};

	function loadState() {
		try {
			const raw = window.localStorage.getItem(KEY);
			if (!raw) return { ...emptyState, selections: {} };
			const parsed = JSON.parse(raw);
			return {
				...emptyState,
				...parsed,
				selections: parsed.selections && typeof parsed.selections === "object" ? parsed.selections : {},
			};
		} catch (_e) {
			return { ...emptyState, selections: {} };
		}
	}

	function saveState(state) {
		window.localStorage.setItem(KEY, JSON.stringify(state));
	}

	function brandById(id) {
		return (catalog.brands || []).find((b) => b.id === id) || null;
	}

	function styleById(id) {
		return (catalog.styles || []).find((s) => s.id === id) || null;
	}

	function categoryById(id) {
		return (catalog.categories || []).find((c) => c.id === id) || null;
	}

	function applyBudget(state) {
		if (!state.brand) {
			state.budget = state.budget || null;
			return state;
		}
		const range = (catalog.budgetRanges || {})[state.brand];
		if (range) state.budget = range;
		return state;
	}

	let state = applyBudget(loadState());

	function setTitles(text, sub) {
		document.querySelectorAll("[data-cfg-action-title]").forEach((el) => {
			el.textContent = text || "";
		});
		document.querySelectorAll("[data-cfg-action-title-d]").forEach((el) => {
			el.textContent = text || "";
		});
		document.querySelectorAll("[data-cfg-action-sub]").forEach((el) => {
			if (typeof sub === "string") el.textContent = sub;
		});
	}

	function showAction(show) {
		const bar = document.querySelector("[data-cfg-action]");
		if (!bar) return;
		bar.hidden = !show;
	}

	function wireNav(backUrl, continueUrl, canContinue) {
		document.querySelectorAll("[data-cfg-back]").forEach((btn) => {
			btn.addEventListener("click", () => {
				window.location.href = backUrl;
			});
		});
		document.querySelectorAll("[data-cfg-continue]").forEach((btn) => {
			btn.disabled = !canContinue;
			btn.addEventListener("click", () => {
				if (btn.disabled) return;
				window.location.href = continueUrl;
			});
		});
	}

	function gate() {
		if (step === "style" && !state.brand) {
			window.location.replace(urls.brands || "/brands/");
			return false;
		}
		if ((step === "configure" || step === "moodboard") && !state.brand) {
			window.location.replace(urls.brands || "/brands/");
			return false;
		}
		if ((step === "configure" || step === "moodboard") && !state.style) {
			window.location.replace(urls.style || "/style/");
			return false;
		}
		return true;
	}

	if (!gate()) return;

	if (step === "brands") {
		const cards = document.querySelectorAll("[data-cfg-brand]");
		function paint() {
			cards.forEach((card) => {
				const selected = card.getAttribute("data-cfg-brand") === state.brand;
				card.classList.toggle("is-selected", selected);
				const check = card.querySelector(".kc-cfg-card__check");
				if (check) check.hidden = !selected;
			});
			const brand = brandById(state.brand);
			showAction(Boolean(brand));
			if (brand) setTitles(brand.name);
			document.querySelectorAll("[data-cfg-continue]").forEach((btn) => {
				btn.disabled = !brand;
			});
		}
		cards.forEach((card) => {
			card.addEventListener("click", () => {
				const id = card.getAttribute("data-cfg-brand");
				const name = card.getAttribute("data-cfg-name") || "";
				state.brand = id;
				state.brandName = name;
				applyBudget(state);
				saveState(state);
				paint();
			});
		});
		wireNav(urls.home || "/", urls.style || "/style/", Boolean(state.brand));
		paint();
	}

	if (step === "style") {
		const cards = document.querySelectorAll("[data-cfg-style]");
		function paint() {
			cards.forEach((card) => {
				const selected = card.getAttribute("data-cfg-style") === state.style;
				card.classList.toggle("is-selected", selected);
				const check = card.querySelector(".kc-cfg-card__check");
				if (check) check.hidden = !selected;
			});
			const style = styleById(state.style);
			document.querySelectorAll("[data-cfg-continue]").forEach((btn) => {
				btn.disabled = !style;
			});
			if (style) {
				setTitles(style.name, style.description || "");
			} else {
				setTitles("Kies uw stijl", "Kies eerst een stijl om door te gaan naar stap 3");
			}
		}
		cards.forEach((card) => {
			card.addEventListener("click", () => {
				state.style = card.getAttribute("data-cfg-style");
				state.styleName = card.getAttribute("data-cfg-name") || "";
				saveState(state);
				paint();
			});
		});
		wireNav(urls.brands || "/brands/", urls.configure || "/configure/", Boolean(state.style));
		paint();
	}

	if (step === "configure") {
		const style = styleById(state.style);
		const img = document.querySelector("[data-cfg-base]");
		if (img && style && style.base) {
			img.src = style.base;
			img.alt = style.name || "";
		}

		const hotspotRoot = document.querySelector("[data-cfg-hotspots]");
		const spots = (catalog.hotspots || {})[state.style] || {};
		if (hotspotRoot) {
			Object.keys(spots).forEach((catId) => {
				const pos = spots[catId];
				const btn = document.createElement("button");
				btn.type = "button";
				btn.className = "kc-cfg-hotspot";
				btn.setAttribute("data-cfg-hotspot", catId);
				btn.style.left = pos.x;
				btn.style.top = pos.y;
				btn.setAttribute("aria-label", (categoryById(catId) || {}).label || catId);
				hotspotRoot.appendChild(btn);
			});
		}

		let activeCat = (catalog.categories && catalog.categories[0] && catalog.categories[0].id) || "front";

		function countSelections() {
			return Object.keys(state.selections || {}).length;
		}

		function renderOptions() {
			const cat = categoryById(activeCat);
			const box = document.querySelector("[data-cfg-options]");
			const label = document.querySelector("[data-cfg-cat-label]");
			if (label && cat) label.textContent = cat.label;
			document.querySelectorAll("[data-cfg-cat]").forEach((chip) => {
				chip.classList.toggle("is-active", chip.getAttribute("data-cfg-cat") === activeCat);
			});
			if (!box || !cat) return;
			box.innerHTML = "";
			(cat.options || []).forEach((opt) => {
				const selected = state.selections[cat.id] && state.selections[cat.id].id === opt.id;
				const btn = document.createElement("button");
				btn.type = "button";
				btn.className = "kc-cfg-opt" + (selected ? " is-selected" : "");
				btn.innerHTML =
					'<span class="kc-cfg-swatch" style="background:' +
					opt.color +
					'"></span><strong>' +
					opt.name +
					"</strong><span>" +
					(opt.description || "") +
					"</span>";
				btn.addEventListener("click", () => {
					state.selections[cat.id] = { id: opt.id, name: opt.name, color: opt.color };
					saveState(state);
					renderOptions();
					renderSummary();
				});
				box.appendChild(btn);
			});
		}

		function renderSummary() {
			const el = document.querySelector("[data-cfg-summary]");
			if (!el) return;
			const n = countSelections();
			const total = (catalog.categories || []).length;
			el.innerHTML = "<p>" + n + " van " + total + " onderdelen gekozen</p>";
			setTitles(n + " van " + total + " onderdelen", "U kunt doorgaan zonder alle keuzes in te vullen.");
		}

		document.querySelectorAll("[data-cfg-cat]").forEach((chip) => {
			chip.addEventListener("click", () => {
				activeCat = chip.getAttribute("data-cfg-cat") || activeCat;
				renderOptions();
			});
		});
		document.querySelectorAll("[data-cfg-hotspot]").forEach((hot) => {
			hot.addEventListener("click", () => {
				activeCat = hot.getAttribute("data-cfg-hotspot") || activeCat;
				renderOptions();
			});
		});

		wireNav(urls.style || "/style/", urls.moodboard || "/moodboard/", true);
		renderOptions();
		renderSummary();
	}

	if (step === "moodboard") {
		const style = styleById(state.style);
		const brand = brandById(state.brand);
		const img = document.querySelector("[data-cfg-mood-img]");
		if (img && style && style.base) {
			img.src = style.base;
			img.alt = style.name || "";
		}
		const brandEl = document.querySelector("[data-cfg-mood-brand]");
		const styleEl = document.querySelector("[data-cfg-mood-style]");
		if (brandEl) brandEl.textContent = (brand && brand.name) || state.brandName || "Niet gekozen";
		if (styleEl) styleEl.textContent = (style && style.name) || state.styleName || "Niet gekozen";
		const budgetEl = document.querySelector("[data-cfg-mood-budget]");
		if (budgetEl) budgetEl.textContent = state.budget || "";
		const list = document.querySelector("[data-cfg-mood-sels]");
		if (list) {
			list.innerHTML = "";
			(catalog.categories || []).forEach((cat) => {
				const sel = state.selections[cat.id];
				if (!sel) return;
				const row = document.createElement("div");
				row.className = "kc-cfg-sel";
				row.innerHTML =
					"<i style=\"background:" +
					sel.color +
					"\"></i><div><strong>" +
					cat.label +
					"</strong><p>" +
					sel.name +
					"</p></div>";
				list.appendChild(row);
			});
		}

		document.querySelector("[data-cfg-print]")?.addEventListener("click", () => window.print());
		document.querySelector("[data-cfg-save]")?.addEventListener("click", () => {
			window.localStorage.setItem("kc-saved-moodboard", JSON.stringify(state));
		});
		document.querySelector("[data-cfg-share]")?.addEventListener("click", async () => {
			const shareUrl = window.location.href;
			if (navigator.share) {
				try {
					await navigator.share({ title: document.title, url: shareUrl });
				} catch (_e) {
					/* cancelled */
				}
			} else if (navigator.clipboard) {
				await navigator.clipboard.writeText(shareUrl);
			}
		});

		wireNav(urls.configure || "/configure/", urls.consultation || "/consultation/", true);
		setTitles((brand && brand.name) || "Uw keuken");
	}

	if (step === "consultation") {
		const brand = brandById(state.brand);
		const style = styleById(state.style);
		const merk = document.querySelector('[data-preview-detail="merk"]');
		const stijl = document.querySelector('[data-preview-detail="stijl"]');
		const parts = document.querySelector('[data-preview-detail="samengestelde onderdelen"]');
		const budgetDetail = document.querySelector('[data-preview-detail="budget"]');
		if (merk) merk.textContent = (brand && brand.name) || state.brandName || "Niet gekozen";
		if (stijl) stijl.textContent = (style && style.name) || state.styleName || "Niet gekozen";
		const n = Object.keys(state.selections || {}).length;
		if (parts) parts.textContent = n + " gekozen details";
		if (budgetDetail && state.budget) budgetDetail.textContent = state.budget;
		const budgetSelect = document.querySelector("[data-budget-select]");
		if (budgetSelect && state.budget) {
			const exists = Array.from(budgetSelect.options).some((o) => o.value === state.budget);
			if (!exists) {
				const opt = document.createElement("option");
				opt.value = state.budget;
				opt.textContent = state.budget;
				budgetSelect.appendChild(opt);
			}
			budgetSelect.value = state.budget;
		}
		const toggleTitle = document.querySelector(".consultation-proposal-toggle__title");
		if (toggleTitle) toggleTitle.textContent = n + " keuzes controleren";
	}
})();
