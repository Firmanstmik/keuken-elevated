/**
 * Guest/public cache-bust for theme.js.
 * LiteSpeed strips ?ver= from logged-out HTML; this uniquely named loader
 * injects theme.js with an in-script query the CDN cannot strip from HTML.
 */
(function (doc) {
	var loader = doc.currentScript;
	if (!loader || !loader.src) {
		return;
	}

	var themeSrc = loader.src.replace(/kc-live-[^/?#]+\.js(?:\?.*)?$/, "theme.js?kc=1.4.26");
	var script = doc.createElement("script");
	script.src = themeSrc;
	script.async = false;
	script.setAttribute("data-no-optimize", "1");
	script.setAttribute("data-kc-theme-live", "1.4.26");
	doc.head.appendChild(script);
})(document);
