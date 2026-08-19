/**
 * Guest/public cache-bust for theme.js.
 */
(function (doc) {
	var loader = doc.currentScript;
	if (!loader || !loader.src) {
		return;
	}

	var themeSrc = loader.src.replace(/kc-live-[^/?#]+\.js(?:\?.*)?$/, "theme.js?kc=1.4.27");
	var script = doc.createElement("script");
	script.src = themeSrc;
	script.async = false;
	script.setAttribute("data-no-optimize", "1");
	script.setAttribute("data-kc-theme-live", "1.4.27");
	doc.head.appendChild(script);
})(document);
