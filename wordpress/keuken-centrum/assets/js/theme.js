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

		if (y > 96 && y > lastY + 6) {
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
		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				closeNav();
				closeAllMegas();
			}
		});
	}

	const closeAllMegas = () => {
		document.querySelectorAll("[data-mega-trigger]").forEach((item) => {
			item.classList.remove("is-open");
			const btn = item.querySelector(".nav-link--btn");
			const panel = item.querySelector("[data-mega-panel]");
			if (btn) btn.setAttribute("aria-expanded", "false");
			if (panel) panel.hidden = true;
		});
	};

	document.querySelectorAll("[data-mega-trigger]").forEach((item) => {
		const btn = item.querySelector(".nav-link--btn");
		const panel = item.querySelector("[data-mega-panel]");
		if (!btn || !panel) return;

		let closeTimer = 0;

		const open = () => {
			window.clearTimeout(closeTimer);
			closeAllMegas();
			item.classList.add("is-open");
			btn.setAttribute("aria-expanded", "true");
			panel.hidden = false;
		};
		const close = () => {
			item.classList.remove("is-open");
			btn.setAttribute("aria-expanded", "false");
			panel.hidden = true;
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
				panel.classList.toggle("is-active", panel.dataset.kitchenPanel === index);
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
		const track = gallery.querySelector(".collections-gallery__track");
		if (!track || reduceMotion) return;
		let raf = 0;
		let paused = false;
		let last = 0;
		const animate = (time) => {
			if (!last) last = time;
			const elapsed = time - last;
			last = time;
			if (!paused && gallery.scrollWidth > gallery.clientWidth) {
				gallery.scrollLeft += elapsed * 0.022;
				if (gallery.scrollLeft >= (gallery.scrollWidth - gallery.clientWidth) / 2) gallery.scrollLeft = 0;
			}
			raf = window.requestAnimationFrame(animate);
		};
		gallery.addEventListener("mouseenter", () => { paused = true; });
		gallery.addEventListener("mouseleave", () => { paused = false; });
		gallery.addEventListener("focusin", () => { paused = true; });
		gallery.addEventListener("focusout", () => { paused = false; });
		raf = window.requestAnimationFrame(animate);
		void raf;
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
		const country = carousel.querySelector("[data-brands-country]");
		const copy = carousel.querySelector("[data-brands-copy]");
		const logo = carousel.querySelector("[data-brands-logo]");
		const count = carousel.querySelector("[data-brands-count]");
		let active = 0;
		let timer;
		const select = (index) => {
			active = (index + slides.length) % slides.length;
			slides.forEach((slide, i) => {
				slide.classList.toggle("is-active", i === active);
				slide.classList.toggle("is-next", i === (active + 1) % slides.length);
				slide.classList.toggle("is-prev", i === (active - 1 + slides.length) % slides.length);
				slide.setAttribute("aria-hidden", i === active ? "false" : "true");
			});
			dots.forEach((dot, i) => {
				const selected = i === active;
				dot.classList.toggle("is-active", selected);
				dot.setAttribute("aria-selected", selected ? "true" : "false");
			});
			const dot = dots[active];
			if (!dot) return;
			if (country) country.textContent = dot.dataset.brandCountry || "";
			if (copy) copy.textContent = dot.dataset.brandCopy || "";
			if (logo) { logo.src = dot.dataset.brandLogo || ""; logo.alt = dot.dataset.brandName || ""; }
			if (count) count.textContent = `${String(active + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
		};
		const start = () => { if (!reduceMotion && slides.length > 1) timer = window.setInterval(() => select(active + 1), 5600); };
		const restart = () => { window.clearInterval(timer); start(); };
		dots.forEach((dot, i) => dot.addEventListener("click", () => { select(i); restart(); }));
		previous?.addEventListener("click", () => { select(active - 1); restart(); });
		next?.addEventListener("click", () => { select(active + 1); restart(); });
		carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
		carousel.addEventListener("mouseleave", start);
		select(0); start();
	});

	document.querySelectorAll("[data-why-pillars]").forEach((section) => {
		const image = section.querySelector("[data-why-image]");
		const title = section.querySelector("[data-why-title]");
		const copy = section.querySelector("[data-why-copy]");
		section.querySelectorAll("[data-why-pillar]").forEach((button) => {
			button.addEventListener("click", () => {
				section.querySelectorAll("[data-why-pillar]").forEach((item) => {
					const selected = item === button;
					item.classList.toggle("is-active", selected);
					item.setAttribute("aria-selected", selected ? "true" : "false");
				});
				if (image) { image.style.opacity = "0"; window.setTimeout(() => { image.src = button.dataset.whyImage || image.src; image.style.opacity = ""; }, reduceMotion ? 0 : 180); }
				if (title) title.textContent = button.dataset.whyTitle || "";
				if (copy) copy.textContent = button.dataset.whyCopy || "";
			});
		});
	});

	document.querySelectorAll("[data-process-timeline]").forEach((timeline) => {
		const steps = [...timeline.querySelectorAll(".process-timeline-step")];
		if (reduceMotion || !("IntersectionObserver" in window)) return;
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) entry.target.classList.add("is-active");
		}), { threshold: .55 });
		steps.forEach((step) => observer.observe(step));
	});

	document.querySelectorAll("[data-journey-hotspots]").forEach((mockup) => {
		const url = mockup.dataset.hotspotsUrl;
		const layer = mockup.querySelector(".journey-config-hotspots");
		const label = mockup.querySelector("[data-journey-label]");
		if (!url || !layer) return;
		fetch(url).then((response) => response.ok ? response.json() : Promise.reject()).then((hotspots) => {
			Object.entries(hotspots).forEach(([name, point]) => {
				const button = document.createElement("button");
				button.type = "button";
				button.style.left = point.x;
				button.style.top = point.y;
				button.setAttribute("aria-label", `Ontdek ${name}`);
				button.textContent = "+";
				button.addEventListener("click", () => { if (label) label.textContent = name.charAt(0).toUpperCase() + name.slice(1); });
				layer.appendChild(button);
			});
		}).catch(() => {});
	});
})();
