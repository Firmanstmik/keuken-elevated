(() => {
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const header = document.querySelector("[data-site-header]");
	const navToggle = document.querySelector("[data-nav-toggle]");
	const navPanel = document.querySelector("[data-nav-panel]");
	const navClose = document.querySelector("[data-nav-close]");
	const topbar = document.querySelector("[data-nav-topbar]");

	let lastY = window.scrollY;
	let ticking = false;

	const syncHeaderState = () => {
		if (!header) return;
		const y = window.scrollY;
		const scrolled = y > 24;
		header.classList.toggle("is-scrolled", scrolled);
		header.classList.toggle("is-elevated", scrolled);

		const navigationIsOpen = document.body.classList.contains("nav-open") || document.querySelector(".has-mega.is-open");
		if (!navigationIsOpen && y > 96 && y > lastY + 6) {
			header.classList.add("is-hidden");
		} else if (y < lastY - 6 || y < 48) {
			header.classList.remove("is-hidden");
		}
		lastY = y;
	};

	const onScroll = () => {
		if (ticking) return;
		ticking = true;
		window.requestAnimationFrame(() => {
			syncHeaderState();
			ticking = false;
		});
	};

	const MEGA_HIDE_MS = 380;

	const preloadPanelImages = (panel) => {
		panel.querySelectorAll("img").forEach((img) => {
			if (img.loading === "lazy") img.loading = "eager";
			if (img.dataset.src && !img.getAttribute("src")) {
				img.src = img.dataset.src;
			}
		});
	};

	const closeAllMegas = (except = null) => {
		document.querySelectorAll("[data-mega-trigger]").forEach((item) => {
			if (item === except) return;
			item.classList.remove("is-open");
			const btn = item.querySelector(".nav-link--btn");
			const panel = item.querySelector("[data-mega-panel]");
			if (btn) btn.setAttribute("aria-expanded", "false");
			if (!panel) return;
			window.clearTimeout(panel._kcHideTimer);
			panel._kcHideTimer = window.setTimeout(() => {
				if (!item.classList.contains("is-open")) panel.hidden = true;
			}, MEGA_HIDE_MS);
		});
	};

	const closeNav = () => {
		if (!navToggle || !navPanel) return;
		navToggle.setAttribute("aria-expanded", "false");
		navPanel.hidden = true;
		navPanel.classList.remove("is-open");
		document.body.classList.remove("nav-open");
	};

	const openNav = () => {
		if (!navToggle || !navPanel) return;
		navToggle.setAttribute("aria-expanded", "true");
		navPanel.hidden = false;
		navPanel.classList.add("is-open");
		document.body.classList.add("nav-open");
	};

	if (navToggle && navPanel) {
		navToggle.addEventListener("click", () => {
			const isOpen = navToggle.getAttribute("aria-expanded") === "true";
			if (isOpen) closeNav();
			else openNav();
		});
		navClose?.addEventListener("click", closeNav);
		navPanel.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", closeNav);
		});
		window.addEventListener("resize", () => {
			if (window.innerWidth >= 1280) closeNav();
		});
	}

	document.addEventListener("keydown", (event) => {
		if (event.key !== "Escape") return;
		closeNav();
		closeAllMegas();
	});

	document.querySelectorAll("[data-mega-trigger]").forEach((item) => {
		const btn = item.querySelector(".nav-link--btn");
		const panel = item.querySelector("[data-mega-panel]");
		if (!btn || !panel) return;

		let closeTimer = 0;

		const open = () => {
			window.clearTimeout(closeTimer);
			window.clearTimeout(panel._kcHideTimer);
			closeAllMegas(item);
			panel.hidden = false;
			void panel.offsetWidth;
			item.classList.add("is-open");
			btn.setAttribute("aria-expanded", "true");
			preloadPanelImages(panel);
		};
		const close = () => {
			item.classList.remove("is-open");
			btn.setAttribute("aria-expanded", "false");
			window.clearTimeout(panel._kcHideTimer);
			panel._kcHideTimer = window.setTimeout(() => {
				if (!item.classList.contains("is-open")) panel.hidden = true;
			}, MEGA_HIDE_MS);
		};
		const scheduleClose = () => {
			window.clearTimeout(closeTimer);
			closeTimer = window.setTimeout(close, 140);
		};

		item.addEventListener("mouseenter", open);
		item.addEventListener("mouseleave", scheduleClose);
		btn.addEventListener("click", (event) => {
			event.preventDefault();
			const openNow = btn.getAttribute("aria-expanded") === "true";
			if (openNow) close();
			else open();
		});
		btn.addEventListener("focus", open);
	});

	document.querySelectorAll("[data-kitchens-mega]").forEach((mega) => {
		const categories = [...mega.querySelectorAll("[data-kitchen-category]")];
		const panels = [...mega.querySelectorAll("[data-kitchen-panel]")];
		const activate = (index) => {
			categories.forEach((category) => {
				const active = category.dataset.kitchenCategory === index;
				category.classList.toggle("is-active", active);
				category.setAttribute("aria-pressed", active ? "true" : "false");
			});
			panels.forEach((panel) => {
				const on = panel.dataset.kitchenPanel === index;
				panel.classList.toggle("is-active", on);
				if (on) preloadPanelImages(panel);
			});
		};
		categories.forEach((category) => {
			const onActivate = () => activate(category.dataset.kitchenCategory);
			category.addEventListener("mouseenter", onActivate);
			category.addEventListener("focus", onActivate);
			category.addEventListener("click", onActivate);
		});
	});

	document.addEventListener("click", (event) => {
		if (!event.target.closest("[data-mega-trigger]")) closeAllMegas();
	});

	/* Hero slideshow + partner brand + video card + entrance */
	const hero = document.querySelector("[data-home-hero]");
	if (hero) {
		const slides = [...hero.querySelectorAll("[data-hero-slide]")];
		const dots = [...hero.querySelectorAll("button[data-hero-dot]")];
		const brandLabel = hero.querySelector("[data-hero-brand-label]");
		const accentLayer = hero.querySelector("[data-hero-accent]");
		let index = 0;
		let timer;

		const setSlide = (next) => {
			if (!slides.length) return;
			index = (next + slides.length) % slides.length;
			const active = slides[index];
			slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
			dots.forEach((dot, i) => {
				const on = i === index;
				dot.classList.toggle("is-active", on);
				dot.setAttribute("aria-pressed", on ? "true" : "false");
				const color = active.getAttribute("data-hero-dot-color") || "";
				dot.style.backgroundColor = on && color ? color : "";
			});
			if (brandLabel) {
				const brand = active.getAttribute("data-hero-brand") || "";
				if (brand && brandLabel.textContent !== brand) {
					brandLabel.classList.add("is-swap");
					window.setTimeout(() => {
						brandLabel.textContent = brand;
						brandLabel.classList.remove("is-swap");
					}, 180);
				}
			}
			if (accentLayer) {
				const soft = active.getAttribute("data-hero-soft") || "rgba(198,163,107,0.18)";
				accentLayer.style.background = `radial-gradient(circle at 22% 28%, ${soft}, transparent 30%)`;
			}
		};

		const start = () => {
			if (reduceMotion || slides.length < 2) return;
			timer = window.setInterval(() => setSlide(index + 1), 4000);
		};

		dots.forEach((dot) => {
			dot.addEventListener("click", () => {
				window.clearInterval(timer);
				setSlide(Number(dot.getAttribute("data-hero-dot") || 0));
				start();
			});
		});

		setSlide(0);
		start();

		const readyHero = () => hero.classList.add("is-ready");
		if (reduceMotion) readyHero();
		else window.requestAnimationFrame(() => window.setTimeout(readyHero, 40));

		// Mirror React's subtle hero pointer parallax. Keep the values on the
		// section so the media, active-slide accent, and video card stay in sync.
		if (!reduceMotion) {
			hero.addEventListener("mousemove", (event) => {
				const bounds = hero.getBoundingClientRect();
				const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 20;
				const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 20;
				hero.style.setProperty("--hero-pointer-x", x.toFixed(3));
				hero.style.setProperty("--hero-pointer-y", y.toFixed(3));
			});
			hero.addEventListener("mouseleave", () => {
				hero.style.setProperty("--hero-pointer-x", "0");
				hero.style.setProperty("--hero-pointer-y", "0");
			});
		}

		const video = hero.querySelector("[data-hero-video]");
		const videoToggle = hero.querySelector("[data-hero-video-toggle]");
		const videoToggleLabel = hero.querySelector("[data-hero-video-toggle-label]");
		const videoCard = hero.querySelector("[data-hero-video-card]");
		const videoFs = hero.querySelector("[data-hero-video-fs]");

		// React keeps this state local to the toggle, so the control starts in the
		// "playing" look even when the browser blocks autoplay.
		let videoPaused = false;

		const syncVideoUi = () => {
			if (!video || !videoToggleLabel) return;
			videoToggleLabel.textContent = videoPaused ? "Klik om af te spelen" : "Klik om te pauzeren";
			if (videoCard) videoCard.classList.toggle("is-paused", videoPaused);
			if (videoToggle) {
				videoToggle.setAttribute("aria-label", videoPaused ? "Video afspelen" : "Video pauzeren");
			}
		};

		const toggleVideo = () => {
			if (!video) return;
			if (video.paused) video.play().catch(() => {});
			else video.pause();
			videoPaused = !videoPaused;
			syncVideoUi();
		};

		if (video && reduceMotion) {
			video.removeAttribute("autoplay");
			video.pause();
		}

		if (videoToggle) {
			videoToggle.addEventListener("click", (event) => {
				event.stopPropagation();
				toggleVideo();
			});
		}

		if (videoFs && video) {
			videoFs.addEventListener("click", (event) => {
				event.stopPropagation();
				if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
			});
		}

		if (videoCard) {
			videoCard.addEventListener("click", (event) => {
				if (event.target.closest("[data-hero-video-toggle], [data-hero-video-fs]")) return;
				toggleVideo();
			});
			videoCard.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					toggleVideo();
				}
			});
			videoCard.setAttribute("tabindex", "0");
			videoCard.setAttribute("role", "button");
			videoCard.setAttribute("aria-label", "Videopreview van de showroom");
		}

		if (video) syncVideoUi();
	}

	/* Reveal on scroll */
	const revealNodes = document.querySelectorAll("[data-reveal]");
	if (revealNodes.length) {
		if (reduceMotion || !("IntersectionObserver" in window)) {
			revealNodes.forEach((node) => node.classList.add("is-visible"));
		} else {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (!entry.isIntersecting) return;
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					});
				},
				{ threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
			);
			revealNodes.forEach((node) => observer.observe(node));
		}
	}

	document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
		anchor.addEventListener("click", (event) => {
			const href = anchor.getAttribute("href");
			if (!href) return;
			const url = new URL(href, window.location.href);
			if (url.pathname !== window.location.pathname || !url.hash) return;
			const target = document.querySelector(url.hash);
			if (!target) return;
			event.preventDefault();
			target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
			history.replaceState(null, "", url.hash);
			closeNav();
		});
	});

	syncHeaderState();
	window.addEventListener("scroll", onScroll, { passive: true });
	void topbar;
})();

(() => {
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	const stickyBar = document.querySelector("[data-sticky-conversion]");
	if (stickyBar) {
		const syncStickyBar = () => {
			const visible = window.scrollY > 280;
			stickyBar.hidden = false;
			stickyBar.classList.toggle("is-visible", visible);
		};
		syncStickyBar();
		window.addEventListener("scroll", syncStickyBar, { passive: true });
	}

	document.querySelectorAll("[data-collections-gallery]").forEach((gallery) => {
		const viewport = gallery.querySelector("[data-collections-viewport]") || gallery;
		const track = gallery.querySelector("[data-collections-track]") || gallery.querySelector(".collections-gallery__track");
		if (!viewport || !track) return;

		const mobileQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
		const speed = 26;
		const drag = { active: false, startX: 0, startOffset: 0, pointerId: null };
		let isMobile = mobileQuery.matches;
		let raf = 0;
		let last = 0;
		let offset = 0;
		let pausedUntil = 0;

		const loopWidth = () => track.scrollWidth / 3;
		const setDragging = (active) => {
			gallery.classList.toggle("is-dragging", active);
			viewport.style.cursor = isMobile ? "auto" : active ? "grabbing" : "grab";
		};

		const render = () => {
			if (isMobile) {
				track.style.transform = "";
				return;
			}
			track.style.transform = `translateX(${-offset}px)`;
		};

		const syncMode = () => {
			isMobile = mobileQuery.matches;
			offset = 0;
			last = 0;
			viewport.scrollLeft = 0;
			drag.active = false;
			drag.pointerId = null;
			viewport.style.touchAction = isMobile ? "pan-x pan-y" : "pan-y";
			setDragging(false);
			render();
		};

		const animate = (time) => {
			if (!last) last = time;
			const dt = Math.min((time - last) / 1000, 0.05);
			last = time;

			if (!isMobile && !reduceMotion && !drag.active && time > pausedUntil) {
				offset += speed * dt;
			}

			const width = loopWidth();
			if (!isMobile && width > 0) {
				offset = ((offset % width) + width) % width;
			}

			render();
			raf = window.requestAnimationFrame(animate);
		};

		const onPointerDown = (event) => {
			if (isMobile || event.button !== 0) return;
			drag.active = true;
			drag.startX = event.clientX;
			drag.startOffset = offset;
			drag.pointerId = event.pointerId;
			pausedUntil = Number.POSITIVE_INFINITY;
			viewport.setPointerCapture(event.pointerId);
			setDragging(true);
		};

		const onPointerMove = (event) => {
			if (!drag.active || isMobile) return;
			offset = drag.startOffset - (event.clientX - drag.startX);
			render();
		};

		const finishDrag = (event) => {
			if (!drag.active) return;
			drag.active = false;
			pausedUntil = performance.now() + 1200;
			if (drag.pointerId !== null && viewport.hasPointerCapture?.(drag.pointerId)) {
				viewport.releasePointerCapture(drag.pointerId);
			}
			drag.pointerId = null;
			setDragging(false);
		};

		syncMode();
		mobileQuery.addEventListener("change", syncMode);

		viewport.addEventListener("pointerdown", onPointerDown);
		viewport.addEventListener("pointermove", onPointerMove);
		viewport.addEventListener("pointerup", finishDrag);
		viewport.addEventListener("pointercancel", finishDrag);
		viewport.addEventListener("mouseenter", () => {
			if (!isMobile) pausedUntil = Number.POSITIVE_INFINITY;
		});
		viewport.addEventListener("mouseleave", () => {
			if (!isMobile && !drag.active) pausedUntil = performance.now() + 250;
		});
		viewport.addEventListener("focusin", () => {
			if (!isMobile) pausedUntil = Number.POSITIVE_INFINITY;
		});
		viewport.addEventListener("focusout", () => {
			if (!isMobile && !drag.active) pausedUntil = performance.now() + 250;
		});

		if (!reduceMotion) {
			raf = window.requestAnimationFrame(animate);
		} else {
			render();
		}

		window.addEventListener("beforeunload", () => {
			mobileQuery.removeEventListener("change", syncMode);
			if (raf) window.cancelAnimationFrame(raf);
		}, { once: true });
	});

	document.querySelectorAll("[data-consultation-gallery]").forEach((gallery) => {
		const track = gallery.querySelector(".consultation-gallery__track");
		if (!track || reduceMotion) return;

		let paused = false;
		let raf = 0;
		let last = 0;
		let offset = 0;
		const loopWidth = () => track.scrollWidth / 2;

		const animate = (time) => {
			if (!last) last = time;
			const dt = Math.min((time - last) / 1000, 0.05);
			last = time;

			if (!paused) offset += 26 * dt;

			const width = loopWidth();
			if (width > 0) {
				offset = ((offset % width) + width) % width;
				track.style.transform = `translateX(${-offset}px)`;
			}

			raf = window.requestAnimationFrame(animate);
		};

		gallery.addEventListener("mouseenter", () => { paused = true; });
		gallery.addEventListener("mouseleave", () => { paused = false; });
		gallery.addEventListener("focusin", () => { paused = true; });
		gallery.addEventListener("focusout", () => { paused = false; });

		raf = window.requestAnimationFrame(animate);

		window.addEventListener("beforeunload", () => {
			if (raf) window.cancelAnimationFrame(raf);
		}, { once: true });
	});

	document.querySelectorAll("[data-testimonials-marquee]").forEach((section) => {
		if (reduceMotion || window.innerWidth < 768) return;
		section.querySelectorAll(".testimonials-column").forEach((column, index) => {
			const marquee = column.querySelector(".testimonials-marquee");
			if (!marquee) return;
			let paused = false;
			let offset = 0;
			let last = 0;
			const direction = index ? 1 : -1;
			const animate = (time) => {
				if (!last) last = time;
				const elapsed = time - last;
				last = time;
				const loopAt = marquee.scrollHeight / 2;
				if (!paused && loopAt) {
					offset += direction * elapsed * 0.012;
					if (offset <= -loopAt) offset = 0;
					if (offset >= 0 && direction > 0) offset = -loopAt;
					marquee.style.transform = `translateY(${offset}px)`;
				}
				window.requestAnimationFrame(animate);
			};
			column.addEventListener("mouseenter", () => { paused = true; });
			column.addEventListener("mouseleave", () => { paused = false; });
			window.requestAnimationFrame(animate);
		});
	});
})();

(() => {
	const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	document.querySelectorAll("[data-brands-carousel]").forEach((carousel) => {
		const slides = [...carousel.querySelectorAll("[data-brands-slide]")];
		const dots = [...carousel.querySelectorAll("[data-brands-dot]")];
		const previous = carousel.querySelector("[data-brands-prev]");
		const next = carousel.querySelector("[data-brands-next]");
		const panel = carousel.querySelector("[data-brands-panel]");
		const eyebrow = carousel.querySelector("[data-brands-eyebrow]");
		const origin = carousel.querySelector("[data-brands-origin]");
		const since = carousel.querySelector("[data-brands-since]");
		const copy = carousel.querySelector("[data-brands-copy]");
		const logo = carousel.querySelector("[data-brands-logo]");
		const count = carousel.querySelector("[data-brands-count]");
		const cta = carousel.querySelector("[data-brands-cta]");
		const ctaLabel = carousel.querySelector("[data-brands-cta-label]");
		const link = carousel.querySelector("[data-brands-link]");
		let active = 0;
		let timer;

		const select = (index) => {
			active = (index + slides.length) % slides.length;
			const total = slides.length;
			slides.forEach((slide, i) => {
				const offset = (i - active + total) % total;
				slide.classList.toggle("is-active", offset === 0);
				slide.classList.toggle("is-next", offset === 1);
				slide.classList.toggle("is-prev", offset === total - 1);
				slide.classList.toggle("is-far-next", offset === 2);
				slide.setAttribute("aria-hidden", offset === 0 ? "false" : "true");
				const img = slide.querySelector("img");
				if (img) img.alt = offset === 0 ? `${dots[i]?.dataset.brandName || ""} keuken` : "";
			});

			dots.forEach((dot, i) => {
				const selected = i === active;
				dot.classList.toggle("is-active", selected);
				dot.setAttribute("aria-pressed", selected ? "true" : "false");
				const progress = dot.querySelector(".brands-pager__progress");
				if (progress) {
					progress.style.animation = "none";
					if (selected && !reduceMotion) {
						void progress.offsetWidth;
						progress.style.animation = "";
					}
				}
			});

			const dot = dots[active];
			if (!dot) return;

			const applyCopy = () => {
				if (eyebrow) eyebrow.textContent = dot.dataset.brandEyebrow || "";
				if (origin) origin.textContent = dot.dataset.brandOrigin || "";
				if (since) since.textContent = dot.dataset.brandSince || "";
				if (copy) copy.textContent = dot.dataset.brandCopy || "";
				if (logo) {
					logo.src = dot.dataset.brandLogo || "";
					logo.alt = dot.dataset.brandName || "";
					logo.setAttribute("data-brand-logo-name", dot.dataset.brandName || "");
				}
				if (cta) cta.href = dot.dataset.brandHref || cta.href;
				if (link) link.href = dot.dataset.brandHref || link.href;
				if (ctaLabel) ctaLabel.textContent = `Ontdek ${dot.dataset.brandName || ""}`;
				if (count) count.textContent = `${String(active + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;
			};

			if (panel && !reduceMotion) {
				panel.classList.add("is-swapping");
				window.setTimeout(() => {
					applyCopy();
					panel.classList.remove("is-swapping");
				}, 180);
			} else {
				applyCopy();
			}
		};

		const start = () => {
			if (!reduceMotion && slides.length > 1) timer = window.setInterval(() => select(active + 1), 5600);
		};
		const restart = () => {
			window.clearInterval(timer);
			start();
		};

		dots.forEach((dot, i) =>
			dot.addEventListener("click", () => {
				select(i);
				restart();
			})
		);
		previous?.addEventListener("click", () => {
			select(active - 1);
			restart();
		});
		next?.addEventListener("click", () => {
			select(active + 1);
			restart();
		});
		carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
		carousel.addEventListener("mouseleave", start);
		select(0);
		start();
	});

	document.querySelectorAll("[data-why-pillars]").forEach((section) => {
		const buttons = [...section.querySelectorAll("[data-why-pillar]")];
		const stage = section.querySelector(".why-stage");
		// Scope to stage — pillar buttons also carry data-why-* attrs for sync payloads.
		const image = stage?.querySelector("[data-why-image]");
		const title = stage?.querySelector("[data-why-title]");
		const accent = stage?.querySelector("[data-why-accent]");
		const number = stage?.querySelector("[data-why-number]");
		const featureIndex = stage?.querySelector("[data-why-feature-index]");
		const progress = [...(stage?.querySelectorAll("[data-why-progress]") || [])];
		if (!buttons.length) return;

		let pinnedId = buttons.find((button) => button.classList.contains("is-active"))?.dataset.whyId || buttons[0].dataset.whyId;
		let hoveredId = null;
		let imageSwapTimer = 0;

		const syncStage = (button) => {
			if (!button) return;
			buttons.forEach((item) => {
				const selected = item === button;
				item.classList.toggle("is-active", selected);
				item.setAttribute("aria-pressed", selected ? "true" : "false");
			});

			progress.forEach((bar) => {
				bar.classList.toggle("is-active", bar.dataset.whyProgress === button.dataset.whyId);
			});

			if (title) title.textContent = button.dataset.pillarTitle || "";
			if (accent) accent.textContent = button.dataset.pillarAccent || "";
			if (number) number.textContent = button.dataset.pillarNumber || "";
			if (featureIndex) featureIndex.textContent = String(buttons.indexOf(button) + 1);

			if (!image) return;
			const nextSrc = button.dataset.pillarImage || image.getAttribute("src") || "";
			const nextAlt = button.dataset.pillarImageAlt || image.getAttribute("alt") || "";
			if (image.getAttribute("src") === nextSrc) {
				image.setAttribute("alt", nextAlt);
				return;
			}

			window.clearTimeout(imageSwapTimer);
			image.classList.add("is-swapping");
			imageSwapTimer = window.setTimeout(() => {
				image.setAttribute("src", nextSrc);
				image.setAttribute("alt", nextAlt);
				image.classList.remove("is-swapping");
			}, reduceMotion ? 0 : 180);
		};

		const render = () => {
			const activeId = hoveredId || pinnedId;
			syncStage(buttons.find((button) => button.dataset.whyId === activeId) || buttons[0]);
		};

		buttons.forEach((button) => {
			button.addEventListener("mouseenter", () => {
				hoveredId = button.dataset.whyId || null;
				render();
			});
			button.addEventListener("mouseleave", () => {
				if (hoveredId === button.dataset.whyId) hoveredId = null;
				render();
			});
			button.addEventListener("focus", () => {
				pinnedId = button.dataset.whyId || pinnedId;
				render();
			});
			button.addEventListener("click", () => {
				pinnedId = button.dataset.whyId || pinnedId;
				render();
			});
		});

		render();
	});

	document.querySelectorAll("[data-process-timeline]").forEach((timeline) => {
		const steps = [...timeline.querySelectorAll("[data-process-step]")];
		const progress = timeline.querySelector("[data-process-progress]");
		const dot = timeline.querySelector("[data-process-dot]");
		if (!steps.length) return;

		const syncState = () => {
			if (reduceMotion) {
				steps.forEach((step) => step.classList.add("is-active"));
				if (progress) progress.style.transform = "scaleX(1)";
				if (dot) {
					dot.style.left = "100%";
					dot.style.opacity = "1";
				}
				return;
			}

			let activeIndex = 0;
			const isMobile = window.innerWidth < 768;

			if (isMobile) {
				const timelineRect = timeline.getBoundingClientRect();
				const focusX = timelineRect.left + (timelineRect.width * 0.42);
				let bestDistance = Number.POSITIVE_INFINITY;
				steps.forEach((step, index) => {
					const rect = step.getBoundingClientRect();
					const center = rect.left + (rect.width / 2);
					const distance = Math.abs(center - focusX);
					if (distance < bestDistance) {
						bestDistance = distance;
						activeIndex = index;
					}
				});
			} else {
				const threshold = window.innerHeight * 0.52;
				steps.forEach((step, index) => {
					const rect = step.getBoundingClientRect();
					if (rect.top <= threshold) activeIndex = index;
				});
			}

			steps.forEach((step, index) => {
				step.classList.toggle("is-active", index <= activeIndex);
			});

			const ratio = steps.length > 1 ? activeIndex / (steps.length - 1) : 1;
			if (progress) progress.style.transform = `scaleX(${ratio})`;
			if (dot) {
				dot.style.left = `${ratio * 100}%`;
				dot.style.opacity = ratio > 0 ? "1" : "0";
			}
		};

		let tickingProcess = false;
		const requestSync = () => {
			if (tickingProcess) return;
			tickingProcess = true;
			window.requestAnimationFrame(() => {
				syncState();
				tickingProcess = false;
			});
		};

		syncState();
		window.addEventListener("scroll", requestSync, { passive: true });
		window.addEventListener("resize", requestSync);
		timeline.addEventListener("scroll", requestSync, { passive: true });
	});

	document.querySelectorAll("[data-journey-hotspots]").forEach((mockup) => {
		const url = mockup.dataset.hotspotsUrl;
		const categories = JSON.parse(mockup.dataset.categories || "[]");
		const initialSelections = JSON.parse(mockup.dataset.selections || "{}");
		const layer = mockup.querySelector(".journey-config-hotspots");
		const tabs = [...mockup.querySelectorAll("[data-journey-tab]")];
		const currentLabel = mockup.querySelector("[data-journey-current-label]");
		const optionsWrap = mockup.querySelector("[data-journey-options]");
		if (!url || !layer || !categories.length || !optionsWrap) return;

		const keyMap = {
			front: "front",
			werkblad: "worktop",
			spoelbak: "sink",
			apparatuur: "appliances",
			quooker: "quooker",
			bora: "bora",
			grepen: "handles",
			verlichting: "lighting",
		};

		const categoryMap = new Map(categories.map((category) => [category.id, category]));
		const selections = { ...initialSelections };
		let hotspotsData = [];
		let activeCategoryId = categories[0]?.id || null;
		let hoveredCategoryId = null;

		const escapeHtml = (value) =>
			String(value ?? "")
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#39;");

		const getCategory = (id) => categoryMap.get(id) || null;
		const getSelection = (id) => {
			const category = getCategory(id);
			if (!category) return null;
			const selected = selections[id];
			return (
				category.options.find((option) => option.id === selected?.id) ||
				category.options[0] ||
				null
			);
		};

		const renderTabs = () => {
			tabs.forEach((tab) => {
				const categoryId = tab.dataset.categoryId || "";
				const active = categoryId === activeCategoryId;
				const dot = tab.querySelector(".journey-config-sidebar__tab-dot");
				const selection = getSelection(categoryId);
				tab.classList.toggle("is-active", active);
				tab.setAttribute("aria-pressed", active ? "true" : "false");
				if (dot) {
					dot.style.setProperty("--journey-swatch", selection?.color || "#F7F5F2");
				}
			});
		};

		const bindOptionEvents = () => {
			optionsWrap.querySelectorAll("[data-journey-option]").forEach((button) => {
				button.addEventListener("click", () => {
					const categoryId = button.dataset.categoryId || "";
					const optionId = button.dataset.optionId || "";
					const category = getCategory(categoryId);
					const option = category?.options.find((item) => item.id === optionId);
					if (!category || !option) return;
					selections[categoryId] = { id: option.id, color: option.color, name: option.name };
					activeCategoryId = categoryId;
					render();
				});
			});
		};

		const renderOptions = () => {
			const category = getCategory(activeCategoryId);
			if (!category) return;
			if (currentLabel) currentLabel.textContent = category.label || "";
			optionsWrap.innerHTML = category.options
				.map((option) => {
					const selected = getSelection(activeCategoryId)?.id === option.id;
					return `
						<button
							type="button"
							class="journey-config-option${selected ? " is-selected" : ""}"
							data-journey-option
							data-category-id="${escapeHtml(category.id)}"
							data-option-id="${escapeHtml(option.id)}"
						>
							<span class="journey-config-option__swatch" style="background-color:${escapeHtml(option.color)}"></span>
							<span class="journey-config-option__name">${escapeHtml(option.name)}</span>
							<span class="journey-config-option__desc">${escapeHtml(option.description || "")}</span>
						</button>
					`;
				})
				.join("");
			bindOptionEvents();
		};

		const renderHotspots = () => {
			const visibleId = hoveredCategoryId || activeCategoryId;
			layer.innerHTML = "";

			hotspotsData.forEach((hotspot) => {
				const category = getCategory(hotspot.id);
				const selection = getSelection(hotspot.id);
				if (!category || !selection) return;

				const selectedOption =
					category.options.find((option) => option.id === selection.id) || category.options[0];
				const active = hotspot.id === visibleId;
				const wrapper = document.createElement("div");
				wrapper.className = `journey-config-hotspot${active ? " is-active" : ""}`;
				wrapper.style.left = hotspot.x;
				wrapper.style.top = hotspot.y;

				wrapper.innerHTML = `
					<button
						type="button"
						class="journey-config-hotspot__button"
						aria-label="Configureer ${escapeHtml(category.label)}"
					>
						<span class="journey-config-hotspot__halo"></span>
						<span class="journey-config-hotspot__ring"></span>
						<span class="journey-config-hotspot__dot" style="background-color:${escapeHtml(selectedOption.color)}"></span>
					</button>
					<div class="journey-config-hotspot__tooltip">
						<span class="journey-config-hotspot__tooltip-label">Configuratie</span>
						<strong>${escapeHtml(category.label)}</strong>
						<p>${escapeHtml(selectedOption.description || selectedOption.name)}</p>
					</div>
				`;

				const button = wrapper.querySelector(".journey-config-hotspot__button");
				button?.addEventListener("mouseenter", () => {
					hoveredCategoryId = hotspot.id;
					renderHotspots();
				});
				button?.addEventListener("mouseleave", () => {
					hoveredCategoryId = null;
					renderHotspots();
				});
				button?.addEventListener("focus", () => {
					hoveredCategoryId = hotspot.id;
					renderHotspots();
				});
				button?.addEventListener("blur", () => {
					hoveredCategoryId = null;
					renderHotspots();
				});
				button?.addEventListener("click", () => {
					activeCategoryId = hotspot.id;
					hoveredCategoryId = null;
					render();
				});

				layer.appendChild(wrapper);
			});
		};

		const render = () => {
			renderTabs();
			renderOptions();
			renderHotspots();
		};

		tabs.forEach((tab) => {
			tab.addEventListener("click", () => {
				activeCategoryId = tab.dataset.categoryId || activeCategoryId;
				hoveredCategoryId = null;
				render();
			});
		});

		fetch(url)
			.then((response) => (response.ok ? response.json() : Promise.reject()))
			.then((hotspots) => {
				hotspotsData = Object.entries(hotspots)
					.map(([key, point]) => ({
						id: keyMap[key] || key,
						x: point.x,
						y: point.y,
					}))
					.filter((hotspot) => categoryMap.has(hotspot.id));
				if (hotspotsData.length && !categoryMap.has(activeCategoryId)) activeCategoryId = hotspotsData[0].id;
				render();
			})
			.catch(() => {
				render();
			});
	});
})();
