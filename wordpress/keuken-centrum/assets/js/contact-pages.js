(() => {
	const form = document.querySelector("[data-contact-form]");
	if (!form) return;

	const emailTo = form.getAttribute("data-contact-email") || "info@keuken-centrum.nl";
	const nameEl = form.querySelector('[name="name"]');
	const phoneEl = form.querySelector('[name="phone"]');
	const emailEl = form.querySelector('[name="email"]');
	const messageEl = form.querySelector('[name="message"]');
	const submitBtn = form.querySelector(".contact-form__submit");

	const isValid = () => {
		const name = (nameEl?.value || "").trim();
		const message = (messageEl?.value || "").trim();
		const phone = (phoneEl?.value || "").trim();
		const email = (emailEl?.value || "").trim();
		return name !== "" && message !== "" && (email !== "" || phone !== "");
	};

	const syncSubmit = () => {
		if (!submitBtn) return;
		const ok = isValid();
		submitBtn.disabled = !ok;
		submitBtn.classList.toggle("is-disabled", !ok);
	};

	["input", "change"].forEach((evt) => {
		form.addEventListener(evt, syncSubmit);
	});
	syncSubmit();

	form.addEventListener("submit", (event) => {
		event.preventDefault();
		if (!isValid()) return;

		const name = (nameEl?.value || "").trim();
		const phone = (phoneEl?.value || "").trim();
		const email = (emailEl?.value || "").trim();
		const message = (messageEl?.value || "").trim();
		const subject = encodeURIComponent(`Contactaanvraag via website: ${name}`);
		const body = encodeURIComponent(
			`Naam: ${name}\nTelefoonnummer: ${phone}\nEmail: ${email}\n\nBericht:\n${message}`
		);
		window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
	});
})();
