/**
 * Configurator funnel — React-compatible localStorage key `kc-master-config`.
 * Schema: { brand, brandName, style, styleName, selections: { [categoryId]: { id, name, color } }, budget }
 */
(function () {
	"use strict";

	function readStep(cfg) {
		if (cfg.step) return cfg.step;
		const root = document.querySelector("[data-cfg-step]");
		return (root && root.getAttribute("data-cfg-step")) || "";
	}

	let booted = false;

	function boot() {
		if (booted) return;
		booted = true;
	const cfg = window.kcConfigurator || {};
	const KEY = cfg.storageKey || "kc-master-config";
	const urls = cfg.urls || {};
	const catalog = cfg.catalog || {};
	const step = readStep(cfg);

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

	function pdfEscape(value) {
		return String(value || "")
			.replace(/\\/g, "\\\\")
			.replace(/\(/g, "\\(")
			.replace(/\)/g, "\\)")
			.replace(/[^\x20-\x7e]/g, "");
	}

	function downloadProposalPdf(state) {
		const brand = brandById(state.brand);
		const style = styleById(state.style);
		const selected = Object.keys(state.selections || {}).map((id) => {
			const category = categoryById(id);
			const item = state.selections[id] || {};
			return `${category ? category.label : id}: ${item.name || "Gekozen"}`;
		});
		const lines = [
			"Keuken Centrum Utrecht",
			"Persoonlijk keukenvoorstel",
			"",
			`Merk: ${(brand && brand.name) || state.brandName || "Niet gekozen"}`,
			`Stijl: ${(style && style.name) || state.styleName || "Niet gekozen"}`,
			`Budgetindicatie: ${state.budget || "Niet gekozen"}`,
			`Samengestelde onderdelen: ${selected.length}`,
			"",
			"Materialen en afwerkingen",
			...(selected.length ? selected : ["Nog geen materialen samengesteld."]),
			"",
			"Plan uw ontwerpconsultatie",
			"Bespreek materialen, technische details en ontvang een uitgewerkt voorstel in onze showroom.",
		];
		const content = [
			"BT",
			"/F1 18 Tf",
			"50 790 Td",
			`(${pdfEscape(lines[0])}) Tj`,
			"0 -28 Td",
			"/F1 14 Tf",
			`(${pdfEscape(lines[1])}) Tj`,
			"0 -35 Td",
			"/F1 10 Tf",
			...lines.slice(3).flatMap((line) => [`(${pdfEscape(line)}) Tj`, "0 -16 Td"]),
			"ET",
		].join("\n");
		const objects = [
			"<< /Type /Catalog /Pages 2 0 R >>",
			"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
			"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
			`<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
			"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
		];
		let pdf = "%PDF-1.4\n";
		const offsets = [0];
		objects.forEach((object, index) => {
			offsets[index + 1] = pdf.length;
			pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
		});
		const xref = pdf.length;
		pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
		offsets.slice(1).forEach((offset) => {
			pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
		});
		pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
		const blob = new Blob([pdf], { type: "application/pdf" });
		const url = URL.createObjectURL(blob);
		const anchor = document.createElement("a");
		const filename = `keuken-voorstel-${((brand && brand.name) || state.brandName || "project")
			.toLowerCase()
			.replace(/\s+/g, "-")}.pdf`;
		anchor.href = url;
		anchor.download = filename;
		anchor.click();
		window.setTimeout(() => URL.revokeObjectURL(url), 1000);
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
		document.body.classList.toggle("is-cfg-action-open", Boolean(show));
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
		if (step === "consultation" && !state.brand) {
			window.location.replace(urls.brands || "/brands/");
			return false;
		}
		if (step === "consultation" && !state.style) {
			window.location.replace(urls.style || "/style/");
			return false;
		}
		return true;
	}

	if (!gate()) return;

	if (step === "brands") {
		const grid = document.querySelector(".kc-cfg-brand-grid") || document;
		const cards = document.querySelectorAll("[data-cfg-brand]");
		function paint() {
			cards.forEach((card) => {
				const selected = card.getAttribute("data-cfg-brand") === state.brand;
				card.classList.toggle("is-selected", selected);
				card.setAttribute("aria-pressed", selected ? "true" : "false");
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
		grid.addEventListener("click", (event) => {
			const card = event.target && event.target.closest ? event.target.closest("[data-cfg-brand]") : null;
			if (!card || (grid !== document && !grid.contains(card))) return;
			const id = card.getAttribute("data-cfg-brand");
			if (!id) return;
			const name = card.getAttribute("data-cfg-name") || "";
			state.brand = id;
			state.brandName = name;
			applyBudget(state);
			saveState(state);
			paint();
		});
		wireNav(urls.home || "/", urls.style || "/style/", Boolean(state.brand));
		paint();
	}

	if (step === "style") {
		const grid = document.querySelector(".kc-cfg-style-grid") || document;
		const cards = document.querySelectorAll("[data-cfg-style]");
		function paint() {
			cards.forEach((card) => {
				const selected = card.getAttribute("data-cfg-style") === state.style;
				card.classList.toggle("is-selected", selected);
				card.setAttribute("aria-pressed", selected ? "true" : "false");
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
			showAction(true);
		}
		grid.addEventListener("click", (event) => {
			const card = event.target && event.target.closest ? event.target.closest("[data-cfg-style]") : null;
			if (!card || (grid !== document && !grid.contains(card))) return;
			state.style = card.getAttribute("data-cfg-style");
			state.styleName = card.getAttribute("data-cfg-name") || "";
			saveState(state);
			paint();
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
		const canvas = document.querySelector("[data-cfg-canvas]");
		const zoomLayer = document.querySelector("[data-cfg-zoom-layer]");
		const zoomHint = document.querySelector("[data-cfg-zoom-hint]");
		const spots = (catalog.hotspots || {})[state.style] || {};
		let activeCat = null;
		let hoveredHotspot = null;
		let isTouch = window.matchMedia("(pointer: coarse)").matches;
		let zoomLevel = 1;
		let panOffset = { x: 0, y: 0 };
		let isDragging = false;
		let hasDragged = false;
		let dragStart = { x: 0, y: 0 };
		let panStart = { x: 0, y: 0 };

		const optionsPanel = document.querySelector("[data-cfg-options-panel]");
		const optionsInner = document.querySelector("[data-cfg-options-inner]");
		const emptyState = document.querySelector("[data-cfg-empty]");
		const progressFill = document.querySelector("[data-cfg-progress-fill]");
		const railProgressFill = document.querySelector("[data-cfg-rail-progress-fill]");
		const categoryRail = document.querySelector("[data-cfg-cats]");
		const stageProgress = document.querySelector("[data-cfg-stage-progress]");
		const summaryRows = document.querySelector("[data-cfg-summary-rows]");
		const summaryBudget = document.querySelector("[data-cfg-summary-budget]");
		const total = (catalog.categories || []).length;

		function tooltipPlacement(px, py) {
			const top = py;
			const bottom = 100 - py;
			const left = px;
			const right = 100 - px;
			let dir = "top";
			let max = top;
			if (bottom > max) {
				max = bottom;
				dir = "bottom";
			}
			if (left > max) {
				max = left;
				dir = "left";
			}
			if (right > max) {
				dir = "right";
			}
			return dir;
		}

		function tooltipOffsets(px, py) {
			const cardWidth = 210;
			const margin = 12;
			const vw = canvas ? canvas.clientWidth : 800;
			const vh = canvas ? canvas.clientHeight : 600;
			const hx = (px / 100) * vw;
			const hy = (py / 100) * vh;
			const placement = tooltipPlacement(px, py);
			let offsetX = 0;
			let offsetY = 0;

			if (placement === "top" || placement === "bottom") {
				const halfW = cardWidth / 2;
				if (hx - halfW < margin) offsetX = margin - (hx - halfW);
				else if (hx + halfW > vw - margin) offsetX = vw - margin - (hx + halfW);
			} else {
				const halfH = 50;
				if (hy - halfH < margin) offsetY = margin - (hy - halfH);
				else if (hy + halfH > vh - margin) offsetY = vh - margin - (hy + halfH);
			}

			return { placement, offsetX, offsetY };
		}

		function connectorPath(placement, offsetX, offsetY) {
			const cardOffset = 40;
			const mid = 24;
			let pathD = "";
			let dotCX = 0;
			let dotCY = 0;

			if (placement === "top") {
				dotCY = -cardOffset;
				dotCX = offsetX;
				const R = Math.min(6, Math.abs(offsetX) / 2);
				if (R < 1) {
					pathD = "M 0 0 V -" + cardOffset;
				} else {
					const dir = offsetX > 0 ? 1 : -1;
					pathD =
						"M 0 0 V -" +
						(mid - R) +
						" Q 0 -" +
						mid +
						" " +
						dir * R +
						" -" +
						mid +
						" H " +
						(offsetX - dir * R) +
						" Q " +
						offsetX +
						" -" +
						mid +
						" " +
						offsetX +
						" " +
						(-mid - R) +
						" V -" +
						cardOffset;
				}
			} else if (placement === "bottom") {
				dotCY = cardOffset;
				dotCX = offsetX;
				const R = Math.min(6, Math.abs(offsetX) / 2);
				if (R < 1) {
					pathD = "M 0 0 V " + cardOffset;
				} else {
					const dir = offsetX > 0 ? 1 : -1;
					pathD =
						"M 0 0 V " +
						(mid - R) +
						" Q 0 " +
						mid +
						" " +
						dir * R +
						" " +
						mid +
						" H " +
						(offsetX - dir * R) +
						" Q " +
						offsetX +
						" " +
						mid +
						" " +
						offsetX +
						" " +
						(mid + R) +
						" V " +
						cardOffset;
				}
			} else if (placement === "left") {
				dotCX = -cardOffset;
				dotCY = offsetY;
				const R = Math.min(6, Math.abs(offsetY) / 2);
				if (R < 1) {
					pathD = "M 0 0 H -" + cardOffset;
				} else {
					const dir = offsetY > 0 ? 1 : -1;
					pathD =
						"M 0 0 H -" +
						(mid - R) +
						" Q -" +
						mid +
						" 0 -" +
						mid +
						" " +
						dir * R +
						" V " +
						(offsetY - dir * R) +
						" Q -" +
						mid +
						" " +
						offsetY +
						" " +
						(-mid - R) +
						" " +
						offsetY +
						" H -" +
						cardOffset;
				}
			} else {
				dotCX = cardOffset;
				dotCY = offsetY;
				const R = Math.min(6, Math.abs(offsetY) / 2);
				if (R < 1) {
					pathD = "M 0 0 H " + cardOffset;
				} else {
					const dir = offsetY > 0 ? 1 : -1;
					pathD =
						"M 0 0 H " +
						(mid - R) +
						" Q " +
						mid +
						" 0 " +
						mid +
						" " +
						dir * R +
						" V " +
						(offsetY - dir * R) +
						" Q " +
						mid +
						" " +
						offsetY +
						" " +
						(mid + R) +
						" " +
						offsetY +
						" H " +
						cardOffset;
				}
			}

			return { pathD, dotCX, dotCY };
		}

		function hotspotDescription(catId) {
			const cat = categoryById(catId);
			const sel = state.selections[catId];
			if (!cat) return "";
			if (sel) {
				const opt = (cat.options || []).find((o) => o.id === sel.id);
				return (opt && opt.description) || sel.name;
			}
			const label = (cat.label || catId).toLowerCase();
			return "Klik om de mogelijkheden voor uw " + label + " te ontdekken.";
		}

		function updateHotspotVisuals() {
			if (!hotspotRoot) return;
			hotspotRoot.classList.toggle("is-any-hovered", Boolean(hoveredHotspot));
			hotspotRoot.querySelectorAll("[data-cfg-hotspot-wrap]").forEach((wrap) => {
				const catId = wrap.getAttribute("data-cfg-hotspot-wrap");
				const sel = catId ? state.selections[catId] : null;
				const isHovered = hoveredHotspot === catId;
				const isActive = activeCat === catId;
				wrap.classList.toggle("is-hovered", isHovered);
				wrap.classList.toggle("is-active", isActive);
				if (sel && sel.color) {
					wrap.style.setProperty("--kc-hotspot-color", sel.color);
				} else {
					wrap.style.removeProperty("--kc-hotspot-color");
				}
				const tip = wrap.querySelector("[data-cfg-hotspot-tip]");
				const tipDesc = wrap.querySelector("[data-cfg-hotspot-tip-desc]");
				const tipTitle = wrap.querySelector("[data-cfg-hotspot-tip-title]");
				const cat = categoryById(catId);
				if (tipTitle && cat) tipTitle.textContent = cat.label;
				if (tipDesc) tipDesc.textContent = hotspotDescription(catId);
				if (tip && spots[catId]) {
					const showTip = isHovered && !isTouch;
					const px = parseFloat(String(spots[catId].x));
					const py = parseFloat(String(spots[catId].y));
					const offsets = tooltipOffsets(px, py);
					const conn = connectorPath(offsets.placement, offsets.offsetX, offsets.offsetY);

					tip.className =
						"kc-cfg-hotspot-tip kc-cfg-hotspot-tip--" +
						offsets.placement +
						(showTip ? " is-visible" : "");
					tip.style.setProperty("--kc-tip-offset-x", offsets.offsetX + "px");
					tip.style.setProperty("--kc-tip-offset-y", offsets.offsetY + "px");

					const pathEl = tip.querySelector("[data-cfg-hotspot-tip-path]");
					const dotEl = tip.querySelector("[data-cfg-hotspot-tip-dot]");
					if (pathEl) pathEl.setAttribute("d", conn.pathD);
					if (dotEl) {
						dotEl.setAttribute("cx", String(conn.dotCX));
						dotEl.setAttribute("cy", String(conn.dotCY));
					}
				}
			});
		}

		function buildHotspots() {
			if (!hotspotRoot) return;
			hotspotRoot.innerHTML = "";
			Object.keys(spots).forEach((catId, index) => {
				const pos = spots[catId];
				const cat = categoryById(catId);
				const wrap = document.createElement("div");
				wrap.className = "kc-cfg-hotspot-wrap";
				wrap.setAttribute("data-cfg-hotspot-wrap", catId);
				wrap.style.left = pos.x;
				wrap.style.top = pos.y;
				wrap.style.setProperty("--kc-hotspot-i", String(index));

				const btn = document.createElement("button");
				btn.type = "button";
				btn.className = "kc-cfg-hotspot";
				btn.setAttribute("data-cfg-hotspot", catId);
				btn.setAttribute("aria-label", "Configureer " + ((cat && cat.label) || catId));
				btn.innerHTML =
					'<span class="kc-cfg-hotspot__stack">' +
					'<span class="kc-cfg-hotspot__halo" aria-hidden="true"></span>' +
					'<span class="kc-cfg-hotspot__ring" aria-hidden="true"></span>' +
					'<span class="kc-cfg-hotspot__dot" aria-hidden="true"></span>' +
					"</span>";

				const tip = document.createElement("div");
				tip.className = "kc-cfg-hotspot-tip kc-cfg-hotspot-tip--top";
				tip.setAttribute("data-cfg-hotspot-tip", "");
				tip.innerHTML =
					'<svg class="kc-cfg-hotspot-tip__line" aria-hidden="true" width="0" height="0">' +
					'<path data-cfg-hotspot-tip-path fill="none" stroke="#D4AF37" stroke-width="1.2" stroke-opacity="0.55" stroke-linecap="round" />' +
					'<circle data-cfg-hotspot-tip-dot r="1.5" fill="#D4AF37" fill-opacity="0.6" />' +
					"</svg>" +
					'<div class="kc-cfg-hotspot-tip__card" data-cfg-hotspot-tip-card>' +
					'<span class="kc-cfg-hotspot-tip__over">CONFIGURATIE</span>' +
					'<h4 class="kc-cfg-hotspot-tip__title" data-cfg-hotspot-tip-title>' +
					((cat && cat.label) || catId) +
					"</h4>" +
					'<hr class="kc-cfg-hotspot-tip__rule" />' +
					'<p class="kc-cfg-hotspot-tip__desc" data-cfg-hotspot-tip-desc></p>' +
					"</div>";

				wrap.appendChild(btn);
				wrap.appendChild(tip);
				hotspotRoot.appendChild(wrap);

				wrap.addEventListener("mouseenter", () => {
					if (isTouch) return;
					hoveredHotspot = catId;
					updateHotspotVisuals();
				});
				wrap.addEventListener("mouseleave", () => {
					hoveredHotspot = null;
					updateHotspotVisuals();
				});
				btn.addEventListener("click", (event) => {
					event.stopPropagation();
					selectCategory(catId);
				});
			});
			updateHotspotVisuals();
		}

		function clampPan(nextX, nextY, scale) {
			if (!canvas || scale <= 1) return { x: 0, y: 0 };
			const maxX = (canvas.clientWidth * scale - canvas.clientWidth) / 2;
			const maxY = (canvas.clientHeight * scale - canvas.clientHeight) / 2;
			return {
				x: Math.min(Math.max(nextX, -maxX), maxX),
				y: Math.min(Math.max(nextY, -maxY), maxY),
			};
		}

		function applyZoomTransform() {
			if (!zoomLayer) return;
			zoomLayer.style.transform =
				"translate(" + panOffset.x + "px," + panOffset.y + "px) scale(" + zoomLevel + ")";
			if (zoomHint) zoomHint.hidden = zoomLevel <= 1.001;
			if (canvas) {
				canvas.style.cursor = isDragging ? "grabbing" : zoomLevel > 1.001 ? "zoom-out" : "zoom-in";
			}
		}

		function updateZoom(nextScale, clientX, clientY) {
			const clamped = Math.min(Math.max(nextScale, 1), 2.6);
			if (clientX != null && clientY != null && canvas && clamped > 1) {
				const rect = canvas.getBoundingClientRect();
				const offsetX = clientX - rect.left - rect.width / 2;
				const offsetY = clientY - rect.top - rect.height / 2;
				panOffset = clampPan(-offsetX * (clamped - 1), -offsetY * (clamped - 1), clamped);
			} else {
				panOffset = clampPan(panOffset.x, panOffset.y, clamped);
			}
			zoomLevel = clamped;
			if (zoomLevel <= 1) {
				panOffset = { x: 0, y: 0 };
				zoomLevel = 1;
			}
			applyZoomTransform();
		}

		function resetZoom() {
			zoomLevel = 1;
			panOffset = { x: 0, y: 0 };
			isDragging = false;
			applyZoomTransform();
		}

		if (canvas && zoomLayer) {
			canvas.addEventListener(
				"wheel",
				(event) => {
					event.preventDefault();
					updateZoom(zoomLevel + (event.deltaY < 0 ? 0.14 : -0.14));
				},
				{ passive: false }
			);
			canvas.addEventListener("pointerdown", (event) => {
				if (event.target.closest("[data-cfg-hotspot]")) return;
				hasDragged = false;
				dragStart = { x: event.clientX, y: event.clientY };
				panStart = panOffset;
				if (zoomLevel <= 1 && !isTouch) {
					updateZoom(1.6, event.clientX, event.clientY);
					return;
				}
				isDragging = true;
				zoomLayer.classList.add("is-dragging");
			});
			canvas.addEventListener("pointermove", (event) => {
				if (!isDragging || zoomLevel <= 1) return;
				hasDragged = true;
				const nextX = panStart.x + (event.clientX - dragStart.x);
				const nextY = panStart.y + (event.clientY - dragStart.y);
				panOffset = clampPan(nextX, nextY, zoomLevel);
				applyZoomTransform();
			});
			const endDrag = (event) => {
				if (event && event.target && event.target.closest && event.target.closest("[data-cfg-hotspot]")) {
					isDragging = false;
					zoomLayer.classList.remove("is-dragging");
					return;
				}
				if (zoomLevel > 1.001 && !hasDragged) resetZoom();
				isDragging = false;
				zoomLayer.classList.remove("is-dragging");
			};
			canvas.addEventListener("pointerup", endDrag);
			canvas.addEventListener("pointercancel", endDrag);
			canvas.addEventListener("pointerleave", endDrag);
		}

		document.querySelectorAll("[data-cfg-zoom-in]").forEach((btn) => {
			btn.addEventListener("click", () => updateZoom(zoomLevel + 0.2));
		});
		document.querySelectorAll("[data-cfg-zoom-out]").forEach((btn) => {
			btn.addEventListener("click", () => updateZoom(zoomLevel - 0.2));
		});
		document.querySelectorAll("[data-cfg-zoom-reset]").forEach((btn) => {
			btn.addEventListener("click", resetZoom);
		});

		window.addEventListener(
			"touchstart",
			() => {
				isTouch = true;
				hoveredHotspot = null;
				updateHotspotVisuals();
			},
			{ once: true, passive: true }
		);

		buildHotspots();

		function countSelections() {
			return Object.keys(state.selections || {}).length;
		}

		function updateProgress() {
			const n = countSelections();
			const pct = total ? n / total : 0;
			if (progressFill) progressFill.style.transform = "scaleX(" + pct + ")";
			if (railProgressFill) railProgressFill.style.transform = "scaleX(" + pct + ")";
			if (stageProgress) {
				stageProgress.textContent = n + "/" + total + " opties samengesteld";
			}
			showAction(n > 0);
			const brand = brandById(state.brand);
			const styleObj = styleById(state.style);
			setTitles(
				n + " van " + total + " keuzes samengesteld",
				(brand && brand.name ? brand.name : state.brandName || "Merk") +
					" met " +
					(styleObj && styleObj.name ? styleObj.name : state.styleName || "stijl") +
					" is klaar om verder te gaan"
			);
		}

		function setCategoryOpen(open) {
			if (optionsPanel) optionsPanel.classList.toggle("kc-cfg-configure__options--open", Boolean(open));
			if (emptyState) emptyState.hidden = Boolean(open);
			if (optionsInner) optionsInner.hidden = !open;
		}

		function renderOptions() {
			const cat = activeCat ? categoryById(activeCat) : null;
			const box = document.querySelector("[data-cfg-options]");
			const label = document.querySelector("[data-cfg-cat-label]");
			document.querySelectorAll("[data-cfg-cat]").forEach((chip) => {
				const id = chip.getAttribute("data-cfg-cat");
				const selected = state.selections[id];
				chip.classList.toggle("is-active", id === activeCat);
				chip.classList.toggle("has-selection", Boolean(selected));
				const dot = chip.querySelector("[data-cfg-chip-dot]");
				if (dot) {
					if (selected && selected.color) {
						dot.hidden = false;
						dot.style.backgroundColor = selected.color;
					} else {
						dot.hidden = true;
					}
				}
			});
			updateHotspotVisuals();
			if (!cat) {
				setCategoryOpen(false);
				return;
			}
			setCategoryOpen(true);
			if (label) label.textContent = cat.label;
			if (!box) return;
			box.innerHTML = "";
			(cat.options || []).forEach((opt, index) => {
				const selected = state.selections[cat.id] && state.selections[cat.id].id === opt.id;
				const btn = document.createElement("button");
				btn.type = "button";
				btn.className = "kc-cfg-opt" + (selected ? " is-selected" : "");
				btn.style.setProperty("--kc-opt-i", String(index));
				btn.innerHTML =
					'<span class="kc-cfg-swatch" style="background:' +
					opt.color +
					'"></span><strong>' +
					opt.name +
					'</strong><span class="kc-cfg-opt__desc">' +
					(opt.description || "") +
					"</span>";
				btn.addEventListener("click", () => {
					state.selections[cat.id] = { id: opt.id, name: opt.name, color: opt.color };
					state = applyBudget(state);
					saveState(state);
					renderOptions();
					renderSummary();
					updateProgress();
				});
				box.appendChild(btn);
			});
		}

		function renderSummary() {
			if (!summaryRows) return;
			const brand = brandById(state.brand);
			const styleObj = styleById(state.style);
			const rows = [];
			if (brand || state.brandName) {
				rows.push({ label: "Merk", value: (brand && brand.name) || state.brandName });
			}
			if (styleObj || state.styleName) {
				rows.push({ label: "Stijl", value: (styleObj && styleObj.name) || state.styleName });
			}
			Object.keys(state.selections || {}).forEach((catId) => {
				const cat = categoryById(catId);
				const sel = state.selections[catId];
				if (!sel) return;
				rows.push({ label: (cat && cat.label) || catId, value: sel.name, color: sel.color });
			});
			summaryRows.innerHTML = rows
				.map(
					(row) =>
						'<div class="kc-cfg-configure__summary-row"><p>' +
						row.label +
						'</p><span>' +
						(row.color ? '<i style="background:' + row.color + '"></i>' : "") +
						row.value +
						"</span></div>"
				)
				.join("");
			if (summaryBudget) summaryBudget.textContent = state.budget || "—";
		}

		function scrollActiveChipIntoView() {
			if (!activeCat || !categoryRail) return;
			const chip = categoryRail.querySelector('[data-cfg-cat="' + activeCat + '"]');
			if (chip && typeof chip.scrollIntoView === "function") {
				chip.scrollIntoView({ behavior: "smooth", inline: "nearest", block: "nearest" });
			}
		}

		function selectCategory(catId) {
			activeCat = activeCat === catId ? null : catId;
			renderOptions();
			scrollActiveChipIntoView();
		}

		document.querySelectorAll("[data-cfg-cat]").forEach((chip) => {
			chip.addEventListener("click", () => {
				selectCategory(chip.getAttribute("data-cfg-cat") || activeCat);
			});
		});
		document.querySelectorAll("[data-cfg-close-cat]").forEach((btn) => {
			btn.addEventListener("click", () => {
				activeCat = null;
				renderOptions();
			});
		});
		document.querySelectorAll("[data-cfg-mood-btn]").forEach((btn) => {
			btn.addEventListener("click", () => {
				window.location.href = urls.moodboard || "/moodboard/";
			});
		});

		wireNav(urls.style || "/style/", urls.moodboard || "/moodboard/", true);
		renderOptions();
		renderSummary();
		updateProgress();
		applyZoomTransform();
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

		document.querySelector("[data-cfg-print]")?.addEventListener("click", () => downloadProposalPdf(state));
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
		const brandName = (brand && brand.name) || state.brandName || "Uw";
		const styleName = (style && style.name) || state.styleName || "";
		const heroTitle = document.querySelector(".consultation-hero__title");
		const previewTitle = document.querySelector(".consultation-preview__title");
		const previewMediaTitle = document.querySelector(".consultation-preview__media-title");
		const titleText =
			brandName + (styleName ? " " + styleName.toLowerCase() : "") + " keukenvoorstel";
		if (heroTitle) heroTitle.textContent = titleText;
		if (previewTitle) previewTitle.textContent = brandName + " keukenconsultatie";
		if (previewMediaTitle) previewMediaTitle.textContent = brandName + " keukenconsultatie";
		if (style && style.base) {
			const heroBg = document.querySelector(".consultation-hero__bg");
			const previewBg = document.querySelector(".consultation-preview__bg");
			if (heroBg) heroBg.style.backgroundImage = "url('" + style.base + "')";
			if (previewBg) previewBg.style.backgroundImage = "url('" + style.base + "')";
		}
		const merk = document.querySelector('[data-preview-detail="merk"]');
		const stijl = document.querySelector('[data-preview-detail="stijl"]');
		const parts = document.querySelector('[data-preview-detail="samengestelde onderdelen"]');
		const budgetDetail = document.querySelector('[data-preview-detail="budget"]');
		if (merk) merk.textContent = brandName === "Uw" ? "Niet gekozen" : brandName;
		if (stijl) stijl.textContent = styleName || "Niet gekozen";
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
		const materialsWrap = document.querySelector("[data-consultation-materials]");
		const materialsList = document.querySelector("[data-consultation-materials-list]");
		if (materialsList) {
			materialsList.innerHTML = "";
			(catalog.categories || []).forEach((cat) => {
				const sel = state.selections[cat.id];
				if (!sel) return;
				const row = document.createElement("div");
				row.className = "consultation-preview__material";
				row.innerHTML =
					'<div class="consultation-preview__material-copy">' +
					'<p class="consultation-preview__material-label">' +
					cat.label +
					"</p>" +
					'<p class="consultation-preview__material-value">' +
					sel.name +
					"</p></div>" +
					(sel.color
						? '<span class="consultation-preview__material-swatch" style="background:' +
							sel.color +
							'"></span>'
						: "");
				materialsList.appendChild(row);
			});
			if (materialsWrap) materialsWrap.hidden = materialsList.children.length === 0;
		}
		const heroFeatures = document.querySelectorAll(".consultation-hero__feature span:last-child");
		if (heroFeatures.length >= 4) {
			heroFeatures[3].textContent = n + " details samengesteld";
		}
	}
	}

	function scheduleBoot() {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", boot);
			document.addEventListener("DOMContentLiteSpeedLoaded", boot);
			return;
		}
		boot();
	}

	scheduleBoot();
})();
