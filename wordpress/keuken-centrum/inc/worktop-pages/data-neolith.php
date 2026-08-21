<?php
/**
 * Neolith worktop page data (React neolithPage parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @param int $index Image pool index.
 */
function kc_neolith_img(int $index = 0): string {
	$pool = array_values(
		array_filter(
			[
				kc_worktop_img('neolith-card.webp'),
				kc_worktop_img('style-keramiek.webp'),
				kc_worktop_img('collection-minimal.webp') ?: kc_theme_img('collection-minimal.webp'),
				kc_worktop_img('style-marmer.webp'),
				kc_worktop_img('hero-keukenbladen.webp'),
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
function kc_neolith_page_data(): array {
	return [
		'id'      => 'neolith',
		'name'    => 'Neolith',
		'country' => 'Kitchen Lounge',
		'meta'    => [
			'title'       => __('Neolith keukenbladen · Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Neolith werkbladen op maat: extreem kras-, hitte-, chemie- en uv-bestendig, vlekresistent en bijna nul porositeit.', 'keuken-centrum'),
		],
		'hero' => [
			'image'     => kc_neolith_img(0),
			'eyebrow'   => __('Neolith werkbladen', 'keuken-centrum'),
			'title'     => 'Neolith',
			'highlight' => __('minimalistisch sterk.', 'keuken-centrum'),
			'subtitle'  => __('NEOLITH Kitchen Lounge ziet de keuken als een omgeving waar design en functionaliteit, elegantie en robuustheid, esthetiek en techniek samenkomen.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/#consultation'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => '0%', 'label' => __('Bijna porositeit', 'keuken-centrum') ],
				[ 'value' => '50+', 'label' => __('Modellen', 'keuken-centrum') ],
				[ 'value' => '10 jr', 'label' => __('Fabrieksgarantie', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Keuken-Bladen', 'keuken-centrum'),
			'titleBefore'    => __('Design en ', 'keuken-centrum'),
			'titleHighlight' => __('robuustheid', 'keuken-centrum'),
			'titleAfter'     => __(' hand in hand', 'keuken-centrum'),
			'paragraphs'     => [
				__('De lijn Kitchen Lounge van Neolith ziet de keuken als een omgeving waarin design en functionaliteit, elegantie en robuustheid, esthetische details en technische eigenschappen hand in hand gaan.', 'keuken-centrum'),
				__('Neolith heeft een oppervlak gecreëerd dat extreem bestand is tegen krassen, hoge temperaturen, chemicaliën en uv-stralen. Het is vlekresistent en de absorptiegraad is praktisch nul dankzij de porositeit van bijna 0%.', 'keuken-centrum'),
				__('Met meer dan 50 modellen en verschillende afwerklagen is er keuze voor uiteenlopende smaken, wensen en trends. Neolith Sinks maakt bovendien geïntegreerde, minimalistische spoelbakken mogelijk.', 'keuken-centrum'),
			],
			'image'     => kc_neolith_img(1),
			'signature' => [
				[ 'value' => '50+', 'label' => __('Modellen', 'keuken-centrum') ],
				[ 'value' => '0%', 'label' => __('Porositeit', 'keuken-centrum') ],
				[ 'value' => '10 jr', 'label' => __('Garantie', 'keuken-centrum') ],
			],
			'roundel' => 'NEOLITH · KITCHEN LOUNGE · KERAMIEK ·',
			'caption' => [
				'tag'   => 'Kitchen Lounge',
				'title' => __('Meer dan 150.000 werkbladen sinds 2010', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Eigenschappen', 'keuken-centrum'),
			'titleBefore'    => __('Het materiaal van de ', 'keuken-centrum'),
			'titleHighlight' => __('toekomst', 'keuken-centrum'),
			'lead'           => __('Neolith is onderhoudsvriendelijk, niet-poreus en ideaal voor moderne consumenten die strakke afwerking en sterke prestaties zoeken.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => 'NEOLITH Skins',
					'description' => __('Bijpassende spoelbakken kunnen uit hetzelfde materiaal worden gemaakt voor een integraal en minimalistisch design.', 'keuken-centrum'),
					'icon'        => 'layers',
					'image'       => kc_neolith_img(2),
				],
				[
					'title'       => __('Krasvrij', 'keuken-centrum'),
					'description' => __('Keramiek is krasbestendig, hittebestendig, vlekbestendig en bovendien niet poreus.', 'keuken-centrum'),
					'icon'        => 'shield',
					'image'       => kc_neolith_img(3),
				],
				[
					'title'       => __('10 jaar garantie', 'keuken-centrum'),
					'description' => __('Wereldwijd zijn er meer dan 150.000 keukenwerkbladen geïnstalleerd sinds 2010, met 10 jaar fabrieksgarantie.', 'keuken-centrum'),
					'icon'        => 'award',
					'image'       => kc_neolith_img(4),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Neolith',
			'eyebrow'        => __('Beste prijs', 'keuken-centrum'),
			'titleBefore'    => __('Neolith keukenbladen voor ', 'keuken-centrum'),
			'titleHighlight' => __('lange termijn', 'keuken-centrum'),
			'body'           => __('Neolith biedt een sterk, onderhoudsvriendelijk en minimalistisch oppervlak voor hoogwaardige keukens. Wij helpen u de juiste afwerking, kleur en toepassing kiezen.', 'keuken-centrum'),
			'highlights'     => [
				__('Extreem bestand tegen krassen en hitte', 'keuken-centrum'),
				__('Bestand tegen chemicaliën en uv-stralen', 'keuken-centrum'),
				__('Vlekresistent en bijna nul absorptie', 'keuken-centrum'),
				__('Meer dan 50 modellen en afwerklagen', 'keuken-centrum'),
			],
			'note'  => __('Bekijk de Neolith-mogelijkheden in onze showroom in Utrecht.', 'keuken-centrum'),
			'stats' => kc_worktop_partnership_stats(),
		],
		'gallery' => [
			'eyebrow'        => __('Inspiratie', 'keuken-centrum'),
			'titleBefore'    => __('Neolith in ', 'keuken-centrum'),
			'titleHighlight' => __('beeld', 'keuken-centrum'),
			'lead'           => __('Robuust, strak en architectonisch: Neolith past bij een minimalistische keukenbeleving.', 'keuken-centrum'),
			'items'          => [
				[ 'src' => kc_neolith_img(0), 'title' => 'Kitchen Lounge', 'tag' => 'Neolith', 'span' => 'large' ],
				[ 'src' => kc_neolith_img(1), 'title' => 'Gallery 53', 'tag' => __('Werkblad', 'keuken-centrum'), 'span' => 'medium' ],
				[ 'src' => kc_neolith_img(2), 'title' => 'Gallery 00', 'tag' => __('Minimalistisch', 'keuken-centrum'), 'span' => 'medium' ],
				[ 'src' => kc_neolith_img(3), 'title' => 'Gallery 35', 'tag' => 'Design', 'span' => 'wide' ],
			],
			'cta' => [
				'titleBefore'    => __('Neolith ', 'keuken-centrum'),
				'titleHighlight' => __('ontdekken?', 'keuken-centrum'),
				'body'           => __('Laat u adviseren over de juiste afwerking en toepassing.', 'keuken-centrum'),
				'label'          => __('Boek een afspraak', 'keuken-centrum'),
				'href'           => home_url('/#consultation'),
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
			'titleBefore'    => __('Neolith ', 'keuken-centrum'),
			'titleHighlight' => __('live', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Ontdek de combinatie van elegantie, robuustheid en minimaal onderhoud.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/#consultation'),
		],
	];
}
