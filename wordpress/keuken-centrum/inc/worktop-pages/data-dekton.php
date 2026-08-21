<?php
/**
 * Dekton worktop page data (React dektonPage parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @param int $index Image pool index.
 */
function kc_dekton_img(int $index = 0): string {
	$pool = array_values(
		array_filter(
			[
				kc_worktop_img('dekton-card.webp'),
				kc_worktop_img('style-beton.webp'),
				kc_worktop_img('style-keramiek.webp'),
				kc_worktop_img('hero-keukenbladen.webp'),
				kc_worktop_img('showroom-cta.webp'),
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
function kc_dekton_page_data(): array {
	return [
		'id'      => 'dekton',
		'name'    => 'Dekton',
		'country' => 'Cosentino',
		'meta'    => [
			'title'       => __('Dekton keukenbladen · Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Dekton werkbladen op maat: ultracompact, krasbestendig, vlekbestendig en bestand tegen hoge temperaturen.', 'keuken-centrum'),
		],
		'hero' => [
			'image'     => kc_dekton_img(0),
			'eyebrow'   => __('Dekton werkbladen', 'keuken-centrum'),
			'title'     => 'Dekton',
			'highlight' => __('ultracompact design.', 'keuken-centrum'),
			'subtitle'  => __('Een sterk materiaal van Cosentino, verwant aan keramiek en geproduceerd met technieken uit de glas- en composietindustrie onder hoge druk en temperatuur.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/consultation/'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => 'Ultra', 'label' => __('Compact', 'keuken-centrum') ],
				[ 'value' => __('Hitte', 'keuken-centrum'), 'label' => __('Bestendig', 'keuken-centrum') ],
				[ 'value' => __('Kras', 'keuken-centrum'), 'label' => __('Bestendig', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Keuken-Bladen', 'keuken-centrum'),
			'titleBefore'    => __('Dekton: ', 'keuken-centrum'),
			'titleHighlight' => __('keramische', 'keuken-centrum'),
			'titleAfter'     => __(' kracht', 'keuken-centrum'),
			'paragraphs'     => [
				__('Dekton is ontwikkeld door Cosentino, bekend van composietmerk Silestone. Het kleurenprogramma groeit en omvat egale kleuren, natuursteenlooks en betonlooks.', 'keuken-centrum'),
				__('Dekton is sterk verwant aan keramiek. Door technieken en ingrediënten uit de glas- en composietindustrie ontstaat onder hoge druk en temperatuur een ultracompacte massa.', 'keuken-centrum'),
				__('Wij leveren Dekton keukenbladen in verschillende designs, formaten, diktes en randafwerkingen die altijd bij uw keukenstijl passen.', 'keuken-centrum'),
			],
			'image'     => kc_dekton_img(1),
			'signature' => [
				[ 'value' => 'Ultra', 'label' => __('Compact', 'keuken-centrum') ],
				[ 'value' => 'Cos', 'label' => 'Cosentino' ],
				[ 'value' => __('Maat', 'keuken-centrum'), 'label' => __('Gemaakt', 'keuken-centrum') ],
			],
			'roundel' => 'DEKTON · COSENTINO · ULTRACOMPACT ·',
			'caption' => [
				'tag'   => 'Cosentino',
				'title' => __('Sterk, modern en onderhoudsvriendelijk', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Eigenschappen', 'keuken-centrum'),
			'titleBefore'    => __('Bestand tegen ', 'keuken-centrum'),
			'titleHighlight' => __('intensief', 'keuken-centrum'),
			'titleAfter'     => __(' leven', 'keuken-centrum'),
			'lead'           => __('Dekton is gemaakt voor moderne keukens waar design, onderhoudsgemak en hoge prestaties samenkomen.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => __('Hoge krasbestendigheid', 'keuken-centrum'),
					'description' => __('Keukengerei zal Dekton niet krassen.', 'keuken-centrum'),
					'icon'        => 'shield',
					'image'       => kc_dekton_img(2),
				],
				[
					'title'       => __('Vlekbestendig', 'keuken-centrum'),
					'description' => __('Bestand tegen hardnekkige vlekken en eenvoudig schoon te maken en te onderhouden.', 'keuken-centrum'),
					'icon'        => 'sparkles',
					'image'       => kc_dekton_img(3),
				],
				[
					'title'       => __('Brand- en hittebestendig', 'keuken-centrum'),
					'description' => __('Dekton is bestand tegen hoge temperaturen en voorkomt schade aan het oppervlak.', 'keuken-centrum'),
					'icon'        => 'award',
					'image'       => kc_dekton_img(4),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Dekton',
			'eyebrow'        => __('Beste prijs', 'keuken-centrum'),
			'titleBefore'    => __('Dekton werkbladen voor de ', 'keuken-centrum'),
			'titleHighlight' => __('beste prijs', 'keuken-centrum'),
			'body'           => __('Dekton biedt een premium combinatie van natuursteenlook, betonlook en ultracompacte techniek. Wij adviseren over toepassingen, onderhoud, diktes en afwerkingen.', 'keuken-centrum'),
			'highlights'     => [
				__('Natuursteen- en betonlook mogelijk', 'keuken-centrum'),
				__('Hoge krasbestendigheid', 'keuken-centrum'),
				__('Vlek-, brand- en hittebestendig', 'keuken-centrum'),
				__('Op maat gemaakt voor uw keuken', 'keuken-centrum'),
			],
			'note'  => __('Heeft u al een offerte? Wij bieden vaak een betere prijs.', 'keuken-centrum'),
			'stats' => kc_worktop_partnership_stats(),
		],
		'gallery' => [
			'eyebrow'        => __('Inspiratie', 'keuken-centrum'),
			'titleBefore'    => __('Dekton in ', 'keuken-centrum'),
			'titleHighlight' => __('beeld', 'keuken-centrum'),
			'lead'           => __('Dekton past bij strakke, moderne en industriële keukens met krachtige materiaalexpressie.', 'keuken-centrum'),
			'items'          => [
				[ 'src' => kc_dekton_img(0), 'title' => 'Taga XGloss', 'tag' => 'Dekton', 'span' => 'large' ],
				[ 'src' => kc_dekton_img(1), 'title' => __('Arte granietlook', 'keuken-centrum'), 'tag' => 'Look-a-like', 'span' => 'medium' ],
				[ 'src' => kc_dekton_img(2), 'title' => 'Rem', 'tag' => 'Cosentino', 'span' => 'medium' ],
				[ 'src' => kc_dekton_img(3), 'title' => 'Soke', 'tag' => __('Betonlook', 'keuken-centrum'), 'span' => 'wide' ],
			],
			'cta' => [
				'titleBefore'    => __('Dekton ', 'keuken-centrum'),
				'titleHighlight' => __('kiezen?', 'keuken-centrum'),
				'body'           => __('Bekijk de mogelijkheden in kleur, dikte en randafwerking.', 'keuken-centrum'),
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
			'titleBefore'    => __('Dekton ', 'keuken-centrum'),
			'titleHighlight' => __('live', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Ontdek welke Dekton-look past bij uw keukenstijl en dagelijks gebruik.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];
}
