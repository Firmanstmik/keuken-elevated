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

	document.addEventListener("click", (event) => {
		if (!event.target.closest("[data-mega-trigger]")) closeAllMegas();
	});

	/* Hero slideshow */
	const hero = document.querySelector("[data-home-hero]");
	if (hero) {
		const slides = [...hero.querySelectorAll("[data-hero-slide]")];
		const dots = [...hero.querySelectorAll("[data-hero-dot]")];
		let index = 0;
		let timer;

		const setSlide = (next) => {
			if (!slides.length) return;
			index = (next + slides.length) % slides.length;
			slides.forEach((slide, i) => slide.classList.toggle("is-active", i === index));
			dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
		};

		const start = () => {
			if (reduceMotion || slides.length < 2) return;
			timer = window.setInterval(() => setSlide(index + 1), 4000);
		};

		dots.forEach((dot) => {
			dot.addEventListener("click", () => {
				window.clearInterval(timer);
				setSlide(Number(dot.dataset.heroDot || 0));
				start();
			});
		});

		start();
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
