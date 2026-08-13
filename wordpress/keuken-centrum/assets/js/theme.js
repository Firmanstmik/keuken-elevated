document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector("[data-site-header]");
	const navToggle = document.querySelector("[data-nav-toggle]");
	const navPanel = document.querySelector("[data-nav-panel]");

	const syncHeaderState = () => {
		if (!header) {
			return;
		}

		header.classList.toggle("is-scrolled", window.scrollY > 12);
	};

	const closeNav = () => {
		if (!navToggle || !navPanel) {
			return;
		}

		navToggle.setAttribute("aria-expanded", "false");
		navPanel.classList.remove("is-open");
		document.body.classList.remove("nav-open");
	};

	if (navToggle && navPanel) {
		navToggle.addEventListener("click", () => {
			const isOpen = navToggle.getAttribute("aria-expanded") === "true";
			navToggle.setAttribute("aria-expanded", String(!isOpen));
			navPanel.classList.toggle("is-open", !isOpen);
			document.body.classList.toggle("nav-open", !isOpen);
		});

		navPanel.querySelectorAll("a").forEach((link) => {
			link.addEventListener("click", closeNav);
		});

		window.addEventListener("resize", () => {
			if (window.innerWidth > 1024) {
				closeNav();
			}
		});
	}

	document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
		anchor.addEventListener("click", (event) => {
			const href = anchor.getAttribute("href");
			if (!href) {
				return;
			}

			const url = new URL(href, window.location.href);
			if (url.pathname !== window.location.pathname || !url.hash) {
				return;
			}

			const target = document.querySelector(url.hash);
			if (!target) {
				return;
			}

			event.preventDefault();
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			history.replaceState(null, "", url.hash);
			closeNav();
		});
	});

	syncHeaderState();
	window.addEventListener("scroll", syncHeaderState, { passive: true });
});
