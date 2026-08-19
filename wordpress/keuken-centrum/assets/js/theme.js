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
				panel.classList.add("is-exiting");
				window.setTimeout(() => {
					applyCopy();
					panel.classList.remove("is-exiting");
					panel.classList.add("is-entering");
					void panel.offsetWidth;
					panel.classList.remove("is-entering");
				}, 310);
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
		const viewport = stage?.querySelector(".why-stage__viewport");
		const title = stage?.querySelector("[data-why-title]");
		const accent = stage?.querySelector("[data-why-accent]");
		const number = stage?.querySelector("[data-why-number]");
		const featureIndex = stage?.querySelector("[data-why-feature-index]");
		const caption = stage?.querySelector("[data-why-caption]");
		const progress = [...(stage?.querySelectorAll("[data-why-progress]") || [])];
		const motionNodes = [...section.querySelectorAll("[data-why-motion]")];
		if (!buttons.length) return;

		let pinnedId = buttons.find((button) => button.classList.contains("is-active"))?.dataset.whyId || buttons[0].dataset.whyId;
		let hoveredId = null;
		let captionTimer = 0;
		let swapToken = 0;
		let activeImageSrc = viewport?.querySelector(".why-stage__image.is-active")?.getAttribute("src") || "";

		const warmImages = () => {
			buttons.forEach((button) => {
				if (!button.dataset.pillarImage) return;
				const img = new Image();
				img.src = button.dataset.pillarImage;
			});
		};

		if (motionNodes.length) {
			if (reduceMotion || !("IntersectionObserver" in window)) {
				motionNodes.forEach((node) => node.classList.add("is-visible"));
			} else {
				const revealSection = () => {
					motionNodes.forEach((node) => node.classList.add("is-visible"));
				};
				const motionObserver = new IntersectionObserver(
					(entries) => {
						if (!entries.some((entry) => entry.isIntersecting)) return;
						revealSection();
						motionObserver.disconnect();
					},
					{ threshold: 0.16, rootMargin: "0px 0px -4% 0px" }
				);
				motionObserver.observe(section);
			}
		}

		if ("IntersectionObserver" in window) {
			const warmer = new IntersectionObserver((entries) => {
				if (!entries.some((entry) => entry.isIntersecting)) return;
				warmImages();
				warmer.disconnect();
			}, { rootMargin: "400px" });
			warmer.observe(section);
		} else {
			warmImages();
		}

		const normalizeSrc = (src) => {
			if (!src) return "";
			try {
				return new URL(src, window.location.href).href;
			} catch (error) {
				return src;
			}
		};

		const getActiveImage = () => viewport?.querySelector(".why-stage__image.is-active") || null;

		const runImageActivate = (incoming, current, token, nextSrc) => {
			if (token !== swapToken || !incoming.isConnected) {
				incoming.remove();
				return;
			}

			const commit = () => {
				if (token !== swapToken || !incoming.isConnected) {
					incoming.remove();
					return;
				}

				void incoming.offsetWidth;
				incoming.classList.add("is-active");
				activeImageSrc = nextSrc;
				if (current && current.isConnected && current !== incoming) {
					current.classList.remove("is-active");
					current.classList.add("is-exiting");
					window.setTimeout(() => {
						if (current.isConnected) current.remove();
					}, reduceMotion ? 0 : 780);
				}
			};

			if (reduceMotion) {
				commit();
				return;
			}

			requestAnimationFrame(() => {
				requestAnimationFrame(commit);
			});
		};

		const swapImage = (nextSrc, nextAlt) => {
			if (!viewport || !nextSrc) return;

			const current = getActiveImage();
			const currentSrc = current?.getAttribute("src") || activeImageSrc || "";
			if (normalizeSrc(nextSrc) === normalizeSrc(currentSrc)) return;

			swapToken += 1;
			const token = swapToken;

			viewport.querySelectorAll(".why-stage__image:not(.is-active):not(.is-exiting)").forEach((node) => node.remove());

			const incoming = document.createElement("img");
			incoming.className = "why-stage__image";
			incoming.alt = nextAlt || "";
			incoming.width = 900;
			incoming.height = 810;
			incoming.setAttribute("data-why-image", "");
			incoming.decoding = "async";
			viewport.insertBefore(incoming, viewport.firstChild);

			let activated = false;
			const activate = () => {
				if (activated || token !== swapToken) return;
				activated = true;
				runImageActivate(incoming, current, token, nextSrc);
			};

			incoming.addEventListener("load", activate, { once: true });
			incoming.addEventListener("error", () => {
				if (token !== swapToken) return;
				incoming.remove();
			}, { once: true });

			incoming.src = nextSrc;
			void incoming.offsetWidth;

			if (incoming.complete) {
				requestAnimationFrame(activate);
			}
		};

		const syncCaption = (button) => {
			if (!button) return;
			const nextTitle = button.dataset.pillarTitle || "";
			const nextAccent = button.dataset.pillarAccent || "";
			const nextNumber = button.dataset.pillarNumber || "";
			const nextIndex = String(buttons.indexOf(button) + 1);
			const apply = () => {
				if (title) title.textContent = nextTitle;
				if (accent) accent.textContent = nextAccent;
				if (number) number.textContent = nextNumber;
				if (featureIndex) featureIndex.textContent = nextIndex;
			};

			if (!caption || reduceMotion || (title && title.textContent === nextTitle)) {
				apply();
				return;
			}

			window.clearTimeout(captionTimer);
			caption.classList.remove("is-entering");
			caption.classList.add("is-leaving");
			captionTimer = window.setTimeout(() => {
				apply();
				caption.classList.remove("is-leaving");
				caption.classList.add("is-entering");
				requestAnimationFrame(() => {
					requestAnimationFrame(() => caption.classList.remove("is-entering"));
				});
			}, 450);
		};

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

			syncCaption(button);
			swapImage(button.dataset.pillarImage || "", button.dataset.pillarImageAlt || "");
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
		const categories = JSON.parse(mockup.dataset.categories || "[]");
		const initialSelections = JSON.parse(mockup.dataset.selections || "{}");
		const inlineHotspots = JSON.parse(mockup.dataset.hotspots || "[]");
		const layer = mockup.querySelector(".journey-config-hotspots");
		const tabs = [...mockup.querySelectorAll("[data-journey-tab]")];
		const currentLabel = mockup.querySelector("[data-journey-current-label]");
		const optionsWrap = mockup.querySelector("[data-journey-options]");
		if (!layer || !categories.length || !optionsWrap) return;

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
		let hotspotsData = Array.isArray(inlineHotspots)
			? inlineHotspots.filter((hotspot) => categoryMap.has(hotspot.id))
			: [];
		let activeCategoryId = categories[0]?.id || null;
		let hoveredCategoryId = null;

		const escapeHtml = (value) =>
			String(value ?? "")
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#39;");

		const tooltipPlacement = (x, y) => {
			const px = parseFloat(x) || 50;
			const py = parseFloat(y) || 50;
			const sides = [
				["top", py],
				["bottom", 100 - py],
				["left", px],
				["right", 100 - px],
			];
			sides.sort((a, b) => b[1] - a[1]);
			return sides[0][0];
		};

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
				tab.classList.toggle("has-selection", Boolean(selection));
				tab.setAttribute("aria-pressed", active ? "true" : "false");
				if (dot) {
					dot.style.setProperty("--journey-swatch", selection?.color || "#F7F5F2");
					dot.hidden = !selection;
				}
			});
		};

		const renderOptions = () => {
			const category = getCategory(activeCategoryId);
			if (!category) return;
			if (currentLabel) currentLabel.textContent = category.label || "";
			optionsWrap.innerHTML = category.options
				.slice(0, 4)
				.map((option) => {
					const selected = getSelection(activeCategoryId)?.id === option.id;
					return `
						<button
							type="button"
							class="journey-config-option is-entering${selected ? " is-selected" : ""}"
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
		};

		const syncHotspotState = () => {
			const anyHovered = hoveredCategoryId !== null;
			layer.classList.toggle("is-hovering", anyHovered);
			layer.querySelectorAll(".journey-config-hotspot").forEach((wrapper) => {
				const id = wrapper.dataset.hotspotId || "";
				const hovered = id === hoveredCategoryId;
				const active = id === activeCategoryId;
				wrapper.classList.toggle("is-hovered", hovered);
				wrapper.classList.toggle("is-active", active);
				const selection = getSelection(id);
				const dot = wrapper.querySelector(".journey-config-hotspot__dot");
				const desc = wrapper.querySelector("[data-hotspot-desc]");
				if (dot && selection) dot.style.backgroundColor = selection.color;
				if (desc && selection) desc.textContent = selection.description || selection.name || "";
			});
		};

		const connectorPath = (place) => {
			const offset = 36;
			const mid = 20;
			if (place === "top") return `M 0 0 V -${offset}`;
			if (place === "bottom") return `M 0 0 V ${offset}`;
			if (place === "left") return `M 0 0 H -${offset}`;
			return `M 0 0 H ${offset}`;
		};

		const connectorDot = (place) => {
			const offset = 36;
			if (place === "top") return { cx: 0, cy: -offset };
			if (place === "bottom") return { cx: 0, cy: offset };
			if (place === "left") return { cx: -offset, cy: 0 };
			return { cx: offset, cy: 0 };
		};

		const buildHotspots = () => {
			layer.replaceChildren();
			hotspotsData.forEach((hotspot) => {
				const category = getCategory(hotspot.id);
				const selection = getSelection(hotspot.id);
				if (!category || !selection) return;
				const wrapper = document.createElement("div");
				wrapper.className = "journey-config-hotspot";
				wrapper.dataset.hotspotId = hotspot.id;
				wrapper.style.left = hotspot.x;
				wrapper.style.top = hotspot.y;
				const place = tooltipPlacement(hotspot.x, hotspot.y);
				const tip = connectorDot(place);
				wrapper.innerHTML = `
					<button type="button" class="journey-config-hotspot__button" aria-label="Configureer ${escapeHtml(category.label)}">
						<span class="journey-config-hotspot__mark">
							<span class="journey-config-hotspot__halo"></span>
							<span class="journey-config-hotspot__ring"></span>
							<span class="journey-config-hotspot__dot" style="background-color:${escapeHtml(selection.color)}"></span>
						</span>
					</button>
					<svg class="journey-config-hotspot__connector" aria-hidden="true" overflow="visible">
						<path pathLength="1" d="${connectorPath(place)}"></path>
						<circle cx="${tip.cx}" cy="${tip.cy}" r="1.5"></circle>
					</svg>
					<div class="journey-config-hotspot__tooltip is-${place}">
						<span class="journey-config-hotspot__tooltip-label">Configuratie</span>
						<strong>${escapeHtml(category.label)}</strong>
						<div class="journey-config-hotspot__tooltip-rule"></div>
						<p data-hotspot-desc>${escapeHtml(selection.description || selection.name)}</p>
					</div>
				`;
				layer.appendChild(wrapper);
			});
			syncHotspotState();
		};

		const render = () => {
			renderTabs();
			renderOptions();
			syncHotspotState();
		};

		layer.addEventListener("mouseover", (event) => {
			const hotspot = event.target.closest(".journey-config-hotspot");
			if (!hotspot || !layer.contains(hotspot)) return;
			hoveredCategoryId = hotspot.dataset.hotspotId || null;
			syncHotspotState();
		});
		layer.addEventListener("mouseout", (event) => {
			const next = event.relatedTarget;
			if (next && layer.contains(next)) return;
			hoveredCategoryId = null;
			syncHotspotState();
		});
		layer.addEventListener("click", (event) => {
			const hotspot = event.target.closest(".journey-config-hotspot");
			if (!hotspot) return;
			activeCategoryId = hotspot.dataset.hotspotId || activeCategoryId;
			hoveredCategoryId = null;
			render();
		});
		layer.addEventListener("focusin", (event) => {
			const hotspot = event.target.closest(".journey-config-hotspot");
			if (!hotspot) return;
			hoveredCategoryId = hotspot.dataset.hotspotId || null;
			syncHotspotState();
		});
		layer.addEventListener("focusout", (event) => {
			const next = event.relatedTarget;
			if (next && layer.contains(next)) return;
			hoveredCategoryId = null;
			syncHotspotState();
		});

		optionsWrap.addEventListener("click", (event) => {
			const button = event.target.closest("[data-journey-option]");
			if (!button) return;
			const categoryId = button.dataset.categoryId || "";
			const optionId = button.dataset.optionId || "";
			const category = getCategory(categoryId);
			const option = category?.options.find((item) => item.id === optionId);
			if (!category || !option) return;
			selections[categoryId] = { id: option.id, color: option.color, name: option.name };
			activeCategoryId = categoryId;
			render();
		});

		tabs.forEach((tab) => {
			tab.addEventListener("click", () => {
				activeCategoryId = tab.dataset.categoryId || activeCategoryId;
				hoveredCategoryId = null;
				render();
			});
		});

		const boot = () => {
			if (hotspotsData.length && !categoryMap.has(activeCategoryId)) {
				activeCategoryId = hotspotsData[0].id;
			}
			buildHotspots();
			render();
		};

		if (hotspotsData.length) {
			boot();
			return;
		}

		const url = mockup.dataset.hotspotsUrl;
		if (!url) {
			boot();
			return;
		}

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
				boot();
			})
			.catch(() => {
				boot();
			});
	});
})();
