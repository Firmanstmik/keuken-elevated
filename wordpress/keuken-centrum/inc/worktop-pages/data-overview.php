<?php
/**
 * Keukenbladen overview data (React worktopOverview parity).
 *
 * Asset note: all React remote uploads under keuken-centrum.nl return HTTP 404.
 * Overview uses verified Cosentino manufacturer stills for Silestone where recovered,
 * plus project-local material photography for remaining materials/styles.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_keukenbladen_overview_data(): array {
	$phone = (string) kc_get_option('contact_phone', '030 241 5122');

	return [
		'meta' => [
			'title'       => __('Keukenbladen · Werkbladen op maat | Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Ontdek keukenbladen van Silestone, Dekton, Neolith en Sensa bij Keuken-Centrum Utrecht. Natuursteen, composiet, keramiek, betonlook en marmerlook op maat.', 'keuken-centrum'),
		],
		'hero' => [
			'image'     => kc_worktop_img('hero-keukenbladen.webp') ?: kc_theme_img('why/why-materialen.webp'),
			'eyebrow'   => __('Keukenbladen op maat', 'keuken-centrum'),
			'title'     => __('Keukenbladen', 'keuken-centrum'),
			'highlight' => __('die de toon zetten.', 'keuken-centrum'),
			'subtitle'  => __('Het aanrechtblad is praktisch én bepalend voor de uitstraling van uw keuken. Wij leveren (natuur)stenen en staal keukenwerkbladen in elk mogelijk design, formaat, kleur, dikte en randafwerking.', 'keuken-centrum'),
			'badges'    => [
				[ 'value' => '100%', 'label' => __('Op maat', 'keuken-centrum') ],
				[ 'value' => '50+', 'label' => __('Kleuren', 'keuken-centrum') ],
				[ 'value' => __('Beste', 'keuken-centrum'), 'label' => __('Prijs', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'    => __('Keuken-Bladen', 'keuken-centrum'),
			'title'      => __('Materiaal, kleur, dikte en randafwerking in balans', 'keuken-centrum'),
			'paragraphs' => [
				__('Bent u op zoek naar een nieuw keukenwerkblad? Keuken-Centrum is gespecialiseerd in het leveren van (natuur)stenen en staal keukenwerkbladen in elk mogelijk design en formaat.', 'keuken-centrum'),
				__('Het aanrechtblad is een essentieel onderdeel van de keuken. Ten eerste vanuit praktisch oogpunt, omdat een aanrecht met name dient voor de bereiding van eten. Daarnaast is de uitstraling minstens zo belangrijk: hiermee zet u de toon voor uw keukenstijl.', 'keuken-centrum'),
				__('Wij hebben keukenbladen in alle soorten en maten, variërend in materiaal, kleur, dikte, formaat en randafwerking. Onze adviseurs geven tips en inspiratie, zodat u precies weet waar u op moet letten bij het kiezen van uw nieuwe keukenblad.', 'keuken-centrum'),
			],
		],
		'materials' => [
			[
				'id'          => 'silestone',
				'name'        => 'Silestone',
				'country'     => 'Cosentino',
				'tagline'     => __('Kwartscomposiet · vlek- en krasbestendig', 'keuken-centrum'),
				'description' => __('Silestone is een vrijwel niet-poreus oppervlak dat bestand is tegen dagelijkse vlekkenmakers zoals koffie, wijn en citroensap. Het natuurlijke kwarts zorgt voor hoge krasbestendigheid en vertrouwen in dagelijks gebruik.', 'keuken-centrum'),
				'image'       => kc_worktop_img('silestone-card.webp') ?: kc_worktop_img('silestone-desert-silver-kitchen.webp'),
				'href'        => home_url('/keukenbladen/silestone/'),
			],
			[
				'id'          => 'dekton',
				'name'        => 'Dekton',
				'country'     => 'Cosentino',
				'tagline'     => __('Ultracompact · hitte- en krasbestendig', 'keuken-centrum'),
				'description' => __('Dekton is een ultracompact materiaal, ontwikkeld door Cosentino. Onder hoge druk en temperatuur ontstaat een sterk oppervlak met natuursteen- en betonlooks, bestand tegen krassen, vlekken en hoge temperaturen.', 'keuken-centrum'),
				'image'       => kc_worktop_img('dekton-card.webp'),
				'href'        => home_url('/keukenbladen/dekton/'),
			],
			[
				'id'          => 'neolith',
				'name'        => 'Neolith',
				'country'     => 'Kitchen Lounge',
				'tagline'     => __('Keramiek · design en robuustheid', 'keuken-centrum'),
				'description' => __('Neolith combineert design en functionaliteit, elegantie en robuustheid. Het oppervlak is extreem bestand tegen krassen, hoge temperaturen, chemicaliën en uv-stralen, met een porositeit van bijna 0%.', 'keuken-centrum'),
				'image'       => kc_worktop_img('neolith-card.webp'),
				'href'        => home_url('/keukenbladen/neolith/'),
			],
			[
				'id'          => 'sensa',
				'name'        => 'Sensa',
				'country'     => 'Cosentino',
				'tagline'     => __('Natuursteen · 15 jaar bescherming', 'keuken-centrum'),
				'description' => __('Sensa by Cosentino kwartsiet en graniet zijn behandeld met een anti-vlekbehandeling. Zo geniet u van natuurlijke schoonheid, duurzaamheid en weerstand zonder zorgen over vlekken.', 'keuken-centrum'),
				'image'       => kc_worktop_img('sensa-card.webp'),
				'href'        => home_url('/keukenbladen/sensa/'),
			],
		],
		'styles' => [
			[
				'title' => __('Marmer', 'keuken-centrum'),
				'body'  => __('Uw marmer keukenblad in alle mogelijke kleuren en designs. Geef uw keuken een exclusieve, klassieke uitstraling.', 'keuken-centrum'),
				'image' => kc_worktop_img('style-marmer.webp'),
			],
			[
				'title' => __('Betonlook', 'keuken-centrum'),
				'body'  => __('Een betonnen aanrechtblad heeft een stoere uitstraling. Vooral voor industriële keukens is betonlook een krachtige toevoeging.', 'keuken-centrum'),
				'image' => kc_worktop_img('style-beton.webp'),
			],
			[
				'title' => __('Keramiek', 'keuken-centrum'),
				'body'  => __('Keramiek is hittebestendig, vlekbestendig en krasbestendig. Bladen vanaf 12 mm zijn betaalbaarder dan ooit, met persoonlijke begeleiding.', 'keuken-centrum'),
				'image' => kc_worktop_img('style-keramiek.webp'),
			],
		],
		'customNote' => [
			__('Graniet, composiet en hardstenen keukenbladen geven uw keuken een prachtige en unieke uitstraling. Keuken-Centrum beschikt over een zeer gevarieerd assortiment.', 'keuken-centrum'),
			__('Graniet keukenbladen zijn beschikbaar in diverse maten, met of zonder natuursteen spoelbak. Wij maken uw hardstenen keukenblad voor u op maat en adviseren over de juiste afwerkingstechnieken.', 'keuken-centrum'),
			__('Composiet keukenbladen combineren gemakkelijk met elke stijl keuken die u maar wenst.', 'keuken-centrum'),
		],
		'faq'   => kc_worktop_faq(),
		'phone' => $phone,
	];
}
