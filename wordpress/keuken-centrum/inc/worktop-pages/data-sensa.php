<?php
/**
 * Sensa worktop page data (React sensaPage parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @param int $index Image pool index.
 */
function kc_sensa_img(int $index = 0): string {
	$pool = array_values(
		array_filter(
			[
				kc_worktop_img('sensa-card.webp'),
				kc_worktop_img('style-marmer.webp'),
				kc_worktop_img('hero-keukenbladen.webp'),
				kc_worktop_img('showroom-cta.webp'),
				kc_worktop_img('style-beton.webp'),
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
function kc_sensa_page_data(): array {
	return [
		'id'      => 'sensa',
		'name'    => 'Sensa',
		'country' => 'Cosentino',
		'meta'    => [
			'title'       => __('Sensa keukenbladen · Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Sensa natuurstenen werkbladen by Cosentino: vlekbestendig kwartsiet en graniet met natuurlijke schoonheid en 15 jaar garantie.', 'keuken-centrum'),
		],
		'hero' => [
			'image'     => kc_sensa_img(0),
			'eyebrow'   => __('Sensa werkbladen', 'keuken-centrum'),
			'title'     => 'Sensa',
			'highlight' => __('natuurlijke schoonheid.', 'keuken-centrum'),
			'subtitle'  => __('Vlekbestendige natuurlijke schoonheid: Sensa by Cosentino kwartsiet en graniet zijn behandeld met een anti-vlekbehandeling zodat uw werkblad er altijd als nieuw uit blijft zien.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/consultation/'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => '15 jr', 'label' => __('Garantie', 'keuken-centrum') ],
				[ 'value' => __('Graniet', 'keuken-centrum'), 'label' => __('Kwartsiet', 'keuken-centrum') ],
				[ 'value' => __('Vlek', 'keuken-centrum'), 'label' => __('Bescherming', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Keuken-Bladen', 'keuken-centrum'),
			'titleBefore'    => __('Natuursteen zonder ', 'keuken-centrum'),
			'titleHighlight' => __('zorgen', 'keuken-centrum'),
			'paragraphs'     => [
				__('Sensa keukenwerkbladen bieden ontwerp, duurzaamheid en weerstand van natuursteen zonder zorgen over vlekken.', 'keuken-centrum'),
				__('Sensa by Cosentino kwartsiet en graniet zijn behandeld met een nieuwe anti-vlekbehandeling die uw werkblad beschermt en er altijd als nieuw uit laat zien.', 'keuken-centrum'),
				__('De Premium Collection is verkrijgbaar in drie afwerkingen: gepolijst voor helder gereflecteerd licht, Caresse voor een verfijnde matte textuur en Leather voor een origineel effect.', 'keuken-centrum'),
			],
			'image'     => kc_sensa_img(1),
			'signature' => [
				[ 'value' => '15 jr', 'label' => __('Garantie', 'keuken-centrum') ],
				[ 'value' => '3', 'label' => __('Afwerkingen', 'keuken-centrum') ],
				[ 'value' => 'Stone', 'label' => __('Natuurlijk', 'keuken-centrum') ],
			],
			'roundel' => 'SENSA · COSENTINO · NATUURSTEEN ·',
			'caption' => [
				'tag'   => 'Cosentino',
				'title' => __('Gepolijst, Caresse of Leather afwerking', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Kleurwerelden', 'keuken-centrum'),
			'titleBefore'    => __('Voor elke ', 'keuken-centrum'),
			'titleHighlight' => __('smaak', 'keuken-centrum'),
			'lead'           => __('Sensa biedt natuurlijke kleuren vol persoonlijkheid, van helder wit tot krachtig zwart en warme aardetinten.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => __('Witte kleuren', 'keuken-centrum'),
					'description' => __('Natuursteen biedt unieke wittinten voor levendige, minimalistische, tijdloze of klassieke ruimtes.', 'keuken-centrum'),
					'icon'        => 'sparkles',
					'image'       => kc_sensa_img(2),
				],
				[
					'title'       => __('Krachtige zwarte kleuren', 'keuken-centrum'),
					'description' => __('Donkere tinten creëren intieme ruimtes in moderne, klassieke of minimalistische stijl.', 'keuken-centrum'),
					'icon'        => 'layers',
					'image'       => kc_sensa_img(3),
				],
				[
					'title'       => __('Voor elke smaak', 'keuken-centrum'),
					'description' => __('Crème, grijs, oranje, klassieke texturen of sterke contrasten: Cosentino biedt oneindig veel mogelijkheden.', 'keuken-centrum'),
					'icon'        => 'heart',
					'image'       => kc_sensa_img(0),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Sensa',
			'eyebrow'        => __('Beste prijs', 'keuken-centrum'),
			'titleBefore'    => __('Sensa natuursteen met ', 'keuken-centrum'),
			'titleHighlight' => __('15 jaar garantie', 'keuken-centrum'),
			'body'           => __('Sensa combineert natuurlijke uitstraling met eenvoudige reiniging en onderhoud. Wij adviseren over kleur, afwerking, toepassing en maatvoering.', 'keuken-centrum'),
			'highlights'     => [
				__('Anti-vlekbehandeling', 'keuken-centrum'),
				__('Kwartsiet en graniet', 'keuken-centrum'),
				__('Gepolijst, Caresse of Leather', 'keuken-centrum'),
				__('Eenvoudig onderhoud en reiniging', 'keuken-centrum'),
			],
			'note'  => __('Kom langs en ervaar de natuurlijke kleuren en texturen van Sensa.', 'keuken-centrum'),
			'stats' => kc_worktop_partnership_stats(),
		],
		'gallery' => [
			'eyebrow'        => __('Inspiratie', 'keuken-centrum'),
			'titleBefore'    => __('Sensa in ', 'keuken-centrum'),
			'titleHighlight' => __('beeld', 'keuken-centrum'),
			'lead'           => __('Natuursteen met karakter, bescherming en tijdloze klasse.', 'keuken-centrum'),
			'items'          => [
				[ 'src' => kc_sensa_img(0), 'title' => 'Graphite Grey', 'tag' => 'Sensa', 'span' => 'large' ],
				[ 'src' => kc_sensa_img(1), 'title' => __('Natuursteen', 'keuken-centrum'), 'tag' => 'Cosentino', 'span' => 'medium' ],
				[ 'src' => kc_sensa_img(2), 'title' => __('Witte tinten', 'keuken-centrum'), 'tag' => __('Licht', 'keuken-centrum'), 'span' => 'medium' ],
				[ 'src' => kc_sensa_img(3), 'title' => __('Donkere tinten', 'keuken-centrum'), 'tag' => 'Black', 'span' => 'wide' ],
			],
			'cta' => [
				'titleBefore'    => __('Sensa ', 'keuken-centrum'),
				'titleHighlight' => __('voelen?', 'keuken-centrum'),
				'body'           => __('Bekijk de afwerkingen en natuursteenstructuren in onze showroom.', 'keuken-centrum'),
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
			'titleBefore'    => __('Sensa ', 'keuken-centrum'),
			'titleHighlight' => __('live', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Ervaar natuursteen met anti-vlekbescherming en 15 jaar garantie.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];
}
