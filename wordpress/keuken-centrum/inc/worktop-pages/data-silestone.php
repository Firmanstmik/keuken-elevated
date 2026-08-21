<?php
/**
 * Silestone worktop page data (React silestonePage parity).
 *
 * Asset note: original React remotes under keuken-centrum.nl/wp-content/uploads
 * return HTTP 404. Silestone visuals use verified Cosentino Desert Silver kitchen
 * stills bundled in theme assets/img/worktops/.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @param int $index Image pool index.
 */
function kc_silestone_img(int $index = 0): string {
	$pool = array_values(
		array_filter(
			[
				kc_worktop_img('silestone-desert-silver-kitchen.webp'),
				kc_worktop_img('silestone-carroll.webp'),
				kc_worktop_img('silestone-textures.webp'),
				kc_worktop_img('silestone-card.webp'),
				kc_worktop_img('style-marmer.webp'),
			]
		)
	);
	if (! $pool) {
		return kc_theme_img('why/why-materialen.webp') ?: '';
	}
	return $pool[ $index % count($pool) ];
}

/**
 * @return array<string, mixed>
 */
function kc_silestone_page_data(): array {
	$hero = kc_silestone_img(0);

	return [
		'id'      => 'silestone',
		'name'    => 'Silestone',
		'country' => 'Cosentino',
		'meta'    => [
			'title'       => __('Silestone keukenbladen · Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Silestone werkbladen op maat bij Keuken-Centrum Utrecht. Kwartscomposiet, vrijwel niet-poreus, vlekbestendig en krasbestendig.', 'keuken-centrum'),
		],
		'hero' => [
			'image'     => $hero,
			'eyebrow'   => __('Silestone werkbladen', 'keuken-centrum'),
			'title'     => 'Silestone',
			'highlight' => __('kwarts met karakter.', 'keuken-centrum'),
			'subtitle'  => __('Een vrijwel niet-poreus oppervlak dat bestand is tegen dagelijkse vlekkenmakers zoals koffie, wijn en citroensap, met de kracht en krasbestendigheid van natuurlijk kwarts.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/consultation/'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => 'Quartz', 'label' => __('Natuurlijk kwarts', 'keuken-centrum') ],
				[ 'value' => __('Vlek', 'keuken-centrum'), 'label' => __('Bestendig', 'keuken-centrum') ],
				[ 'value' => __('Op maat', 'keuken-centrum'), 'label' => __('Randafwerking', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Keuken-Bladen', 'keuken-centrum'),
			'titleBefore'    => __('Silestone voor ', 'keuken-centrum'),
			'titleHighlight' => __('dagelijks', 'keuken-centrum'),
			'titleAfter'     => __(' gebruik', 'keuken-centrum'),
			'paragraphs'     => [
				__('Bent u op zoek naar een nieuw keukenwerkblad van Silestone? Keuken-Centrum levert Silestone werkbladen in elk mogelijk design en formaat.', 'keuken-centrum'),
				__('Het aanrechtblad is een essentieel onderdeel van de keuken: praktisch voor de bereiding van eten en visueel bepalend voor de keukenstijl.', 'keuken-centrum'),
				__('Silestone is verkrijgbaar in uiteenlopende kleuren, diktes, formaten en randafwerkingen. Wij helpen u kiezen wat past bij uw keuken, smaak en budget.', 'keuken-centrum'),
			],
			'image'     => kc_silestone_img(1),
			'signature' => [
				[ 'value' => 'Quartz', 'label' => __('Materiaal', 'keuken-centrum') ],
				[ 'value' => __('Vlek', 'keuken-centrum'), 'label' => __('Bestendig', 'keuken-centrum') ],
				[ 'value' => __('Maat', 'keuken-centrum'), 'label' => __('Gemaakt', 'keuken-centrum') ],
			],
			'roundel' => 'SILESTONE · COSENTINO · KWARTSCOMPOSIET ·',
			'caption' => [
				'tag'   => 'Cosentino',
				'title' => __('Vlekbestendig, schokbestendig en krasbestendig', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Eigenschappen', 'keuken-centrum'),
			'titleBefore'    => __('Rustig mooi, ', 'keuken-centrum'),
			'titleHighlight' => __('sterk', 'keuken-centrum'),
			'titleAfter'     => __(' in gebruik', 'keuken-centrum'),
			'lead'           => __('Silestone combineert esthetiek met praktische zekerheid voor intensief dagelijks keukengebruik.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => __('Vrijwel niet-poreus', 'keuken-centrum'),
					'description' => __('Bestand tegen dagelijkse vlekkenmakers zoals koffie, wijn en citroensap.', 'keuken-centrum'),
					'icon'        => 'shield',
					'image'       => kc_silestone_img(2),
				],
				[
					'title'       => __('Schokbestendig', 'keuken-centrum'),
					'description' => __('De hoge schokbestendigheid geeft vertrouwen bij pannen, dienbladen en dagelijks gebruik.', 'keuken-centrum'),
					'icon'        => 'award',
					'image'       => kc_silestone_img(3),
				],
				[
					'title'       => __('Krasbestendig', 'keuken-centrum'),
					'description' => __('Omdat Silestone vervaardigd is uit natuurlijk kwarts, is het een zeer krasbestendig materiaal.', 'keuken-centrum'),
					'icon'        => 'sparkles',
					'image'       => kc_silestone_img(0),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Silestone',
			'eyebrow'        => __('Beste prijs', 'keuken-centrum'),
			'titleBefore'    => __('Silestone keukenbladen voor de ', 'keuken-centrum'),
			'titleHighlight' => __('scherpste prijs', 'keuken-centrum'),
			'body'           => __('Wij leveren Silestone op maat en adviseren over kleur, dikte, formaat en randafwerking. Heeft u al een offerte? Neem deze mee. Wij kijken graag hoe wij een betere prijs kunnen bieden.', 'keuken-centrum'),
			'highlights'     => [
				__('Vrijwel niet-poreus oppervlak', 'keuken-centrum'),
				__('Bestand tegen koffie, wijn en citroensap', 'keuken-centrum'),
				__('Hoge schok- en krasbestendigheid', 'keuken-centrum'),
				__('Advies in materiaal, kleur en afwerking', 'keuken-centrum'),
			],
			'note'  => __('Silestone live bekijken? Kom langs in onze showroom in Utrecht.', 'keuken-centrum'),
			'stats' => kc_worktop_partnership_stats(),
		],
		'gallery' => [
			'eyebrow'        => __('Inspiratie', 'keuken-centrum'),
			'titleBefore'    => __('Silestone in ', 'keuken-centrum'),
			'titleHighlight' => __('beeld', 'keuken-centrum'),
			'lead'           => __('Van rustige marmerlook tot karaktervolle kleuren: Silestone zet de toon voor uw keukenstijl.', 'keuken-centrum'),
			'items'          => [
				[ 'src' => kc_silestone_img(0), 'title' => 'Desert Silver', 'tag' => 'Silestone', 'span' => 'large' ],
				[ 'src' => kc_silestone_img(1), 'title' => 'Calacatta Gold', 'tag' => __('Marmerlook', 'keuken-centrum'), 'span' => 'medium' ],
				[ 'src' => kc_silestone_img(2), 'title' => __('Royale keuken', 'keuken-centrum'), 'tag' => 'Cosentino', 'span' => 'medium' ],
				[ 'src' => kc_silestone_img(3), 'title' => 'Arden Blue', 'tag' => __('Kleur', 'keuken-centrum'), 'span' => 'wide' ],
			],
			'cta' => [
				'titleBefore'    => __('Silestone ', 'keuken-centrum'),
				'titleHighlight' => __('ervaren?', 'keuken-centrum'),
				'body'           => __('Bekijk kleuren en afwerkingen in onze showroom.', 'keuken-centrum'),
				'label'          => __('Boek een afspraak', 'keuken-centrum'),
				'href'           => home_url('/consultation/'),
			],
		],
		'custom'   => kc_worktop_custom_block(),
		'faq'      => [
			'titleBefore'    => __('Veel ', 'keuken-centrum'),
			'titleHighlight' => __('gestelde vragen', 'keuken-centrum'),
			'items'          => kc_worktop_faq(),
		],
		'advisors' => array_slice(kc_brand_shared_advisors(), 0, 2),
		'showroomCta' => [
			'eyebrow'        => __('Showroom Utrecht', 'keuken-centrum'),
			'titleBefore'    => __('Silestone ', 'keuken-centrum'),
			'titleHighlight' => __('live', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Neem uw wensen mee. Wij adviseren over kleur, dikte, rand en prijs.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];
}
