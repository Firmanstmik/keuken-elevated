<?php
/**
 * Cucinesse brand page data (React cucinesse.ts parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @param int $index Pool index.
 */
/**
 * Cucinesse image pool.
 *
 * React remotes (all HTTP 404 / not in live SPA / not in theme uploads):
 * - cucinesse-cucina-LAB-3-3.webp
 * - cucinesse-cucina-lab-4-5.webp
 * - 3d-ontwerp-1.3.webp
 * - 3d-ontwerp-2.3.webp
 * - 10-1.webp
 *
 * Verified Cucinesse-specific locals from the React repo only:
 * - brands/cucinesse-hero.webp       (src/assets/brands/cucinesse-hero.webp)
 * - brands/cucinesse-brand-card.webp (public/brand-cucinesse.webp)
 *
 * Original React assets unavailable; verified Cucinesse local equivalents used.
 * No unrelated kitchen/collection imagery.
 */
function kc_cucinesse_pool_img(int $index): string {
	$pool = array_values(
		array_filter(
			[
				kc_brand_hero('cucinesse'),
				kc_theme_img('brands/cucinesse-brand-card.webp'),
				kc_brand_hero('cucinesse'),
				kc_theme_img('brands/cucinesse-brand-card.webp'),
				kc_brand_hero('cucinesse'),
			]
		)
	);
	if (! $pool) {
		return kc_brand_hero('cucinesse');
	}
	return $pool[ $index % count($pool) ];
}

/**
 * @return array<string, mixed>
 */
function kc_cucinesse_page_data(): array {
	$hero = kc_brand_hero('cucinesse');
	$logo = kc_brand_logo('cucinesse');

	$data = [
		'id'      => 'cucinesse',
		'name'    => 'Cucinesse',
		'country' => __('Italië', 'keuken-centrum'),
		'founded' => '1979',
		'meta'    => [
			'title'       => __('Cucinesse keukens · Italiaans maatwerk bij Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Ontdek Cucinesse bij Keuken-Centrum Utrecht. Modulaire Italiaanse keukens sinds 1979, met oneindig veel oplossingen, bijpassende livingmeubels en meer dan 25 jaar ervaring bij Keuken-Centrum.', 'keuken-centrum'),
		],
		'logo' => $logo,
		'hero' => [
			'image'     => $hero,
			'eyebrow'   => __('Gemaakt in Italië · sinds 1979', 'keuken-centrum'),
			'title'     => 'Cucinesse',
			'highlight' => __('Modulair. Uniek. Tijdloos.', 'keuken-centrum'),
			'subtitle'  => __('Modulaire keukens met oneindig veel oplossingen: handgrepen, werkbladen en fronts in vele vormen en afwerkingen, aangevuld met bijpassende livingmeubels op maat.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/consultation/'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => '1979', 'label' => __('Opgericht', 'keuken-centrum') ],
				[ 'value' => 'IT', 'label' => __('Maatwerk', 'keuken-centrum') ],
				[ 'value' => '5 jr', 'label' => __('Garantie', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Het merk', 'keuken-centrum'),
			'titleBefore'    => __('Van Sergio Pazzaglia\'s werkplaats tot ', 'keuken-centrum'),
			'titleHighlight' => __('wereldspeler', 'keuken-centrum'),
			'titleAfter'     => __(' in modulaire keukens', 'keuken-centrum'),
			'paragraphs'     => [
				__('Het verhaal van het Italiaanse keukenmerk Cucinesse begint in 1979, wanneer de jonge Sergio Pazzaglia zijn werkervaring in hout wilde benutten om zijn eigen werkplaats te openen voor de productie en montage van meubels.', 'keuken-centrum'),
				__('Ruim veertig jaar later is Cucinesse getransformeerd tot een hoofdrolspeler in de productie van modulaire keukens met klanten over de hele wereld. Cucinesse biedt oneindig veel oplossingen om uw keuken uniek te maken, zoals handgrepen op kasten en lades, werkbladen en fronts in vele vormen en afwerkingen.', 'keuken-centrum'),
				__('Bijpassend bij de keukens kunnen ook maatwerk meubels van Cucinesse voor de living in uw ontwerp worden meegenomen: audio meubels, salontafels en wandmeubels op maat, helemaal in stijl met de keuken voor meer rust en eenheid.', 'keuken-centrum'),
			],
			'image'     => kc_cucinesse_pool_img(1),
			'signature' => [
				[ 'value' => '1979', 'label' => __('Opgericht', 'keuken-centrum') ],
				[ 'value' => '25+', 'label' => __('Jaar KC-partner', 'keuken-centrum') ],
				[ 'value' => 'IT', 'label' => __('Modulair', 'keuken-centrum') ],
			],
			'roundel' => 'CUCINESSE · GEMAAKT IN ITALIË · MODULAIRE KEUKENS ·',
			'caption' => [
				'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
				'title' => __('Modulaire keukens en 3D-ontwerp', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Drie pijlers', 'keuken-centrum'),
			'titleBefore'    => __('Creativiteit, vakmanschap en ', 'keuken-centrum'),
			'titleHighlight' => __('ervaring', 'keuken-centrum'),
			'titleAfter'     => __(' van A tot Z', 'keuken-centrum'),
			'lead'           => __('Uw unieke keuken vraagt om creativiteit en vakmanschap. Bij Keuken-Centrum combineren wij dat met ruim 25 jaar ervaring sinds 1997.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => __('Modulaire vrijheid', 'keuken-centrum'),
					'description' => __('Oneindig veel oplossingen om uw keuken uniek te maken: handgrepen, werkbladen en fronts in vele vormen en afwerkingen, volledig naar wens.', 'keuken-centrum'),
					'icon'        => 'grid',
					'image'       => kc_cucinesse_pool_img(0),
				],
				[
					'title'       => __('Living in stijl', 'keuken-centrum'),
					'description' => __('Bijpassende maatwerk meubels voor de living, zoals audio meubels, salontafels en wandmeubels op maat, helemaal in stijl met de keuken voor tijdloze eenheid.', 'keuken-centrum'),
					'icon'        => 'layers',
					'image'       => kc_cucinesse_pool_img(1),
				],
				[
					'title'       => __('Vakmanschap & service', 'keuken-centrum'),
					'description' => __('Creativiteit om het ideale ontwerp te maken en vakmanschap om een prachtig plan om te zetten in resultaat. Van A tot Z wordt u op uw wenken bediend, binnen budget en volgens planning.', 'keuken-centrum'),
					'icon'        => 'award',
					'image'       => kc_cucinesse_pool_img(2),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Cucinesse',
			'eyebrow'        => __('Direct van fabrikant', 'keuken-centrum'),
			'titleBefore'    => __('Cucinesse keukens voor de ', 'keuken-centrum'),
			'titleHighlight' => __('scherpste prijs', 'keuken-centrum'),
			'titleAfter'     => '',
			'body'           => __('U koopt een Cucinesse keuken via ons voor gegarandeerd de laagste prijs van topkwaliteit en met topservice. Cucinesse heeft een uitermate breed assortiment. Wij nodigen u van harte uit om in onze showroom te komen kijken. Ons gevoel en ruim 25 jaar ervaring sinds 1997 spelen daarbij een grote rol.', 'keuken-centrum'),
			'highlights'     => [
				__('Italiaanse kwaliteit en degelijkheid', 'keuken-centrum'),
				__('Gegarandeerd de laagste prijs', 'keuken-centrum'),
				__('Geen zorgen over installatie dankzij onze eigen montagedienst', 'keuken-centrum'),
				__('Standaard vijf jaar garantie', 'keuken-centrum'),
				__('Altijd één jaar garantie op montagewerkzaamheden', 'keuken-centrum'),
			],
			'note'  => __('Al een offerte elders? Neem deze mee. Wij bieden vrijwel altijd beter.', 'keuken-centrum'),
			'stats' => [
				[ 'icon' => 'factory', 'label' => __('Directe fabriek', 'keuken-centrum'), 'value' => __('Beste prijs', 'keuken-centrum') ],
				[ 'icon' => 'shield', 'label' => __('CBW + 10 jaar', 'keuken-centrum'), 'value' => __('Garantie', 'keuken-centrum') ],
				[ 'icon' => 'clock', 'label' => __('Gemiddelde levertijd', 'keuken-centrum'), 'value' => __('6 tot 8 weken', 'keuken-centrum') ],
				[ 'icon' => 'award', 'label' => __('ISO 9001 gecertificeerd', 'keuken-centrum'), 'value' => __('Kwaliteit', 'keuken-centrum') ],
			],
		],
		'gallery' => [
			'eyebrow'        => __('Inspiratie', 'keuken-centrum'),
			'titleBefore'    => __('Cucinesse ', 'keuken-centrum'),
			'titleHighlight' => __('in beeld', 'keuken-centrum'),
			'lead'           => __('Modulaire keukenopstellingen en 3D-ontwerpen, volledig op maat samen te stellen.', 'keuken-centrum'),
			'items'          => [
				[
					'src'   => kc_cucinesse_pool_img(0),
					'title' => __('Cucina LAB', 'keuken-centrum'),
					'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
					'span'  => 'large',
				],
				[
					'src'   => kc_cucinesse_pool_img(1),
					'title' => __('Modulaire opstelling', 'keuken-centrum'),
					'tag'   => __('Design', 'keuken-centrum'),
					'span'  => 'medium',
				],
				[
					'src'   => kc_cucinesse_pool_img(2),
					'title' => __('3D-ontwerp', 'keuken-centrum'),
					'tag'   => __('Maatwerk', 'keuken-centrum'),
					'span'  => 'medium',
				],
				[
					'src'   => kc_cucinesse_pool_img(3),
					'title' => __('Stap voor stap ontwerpen', 'keuken-centrum'),
					'tag'   => __('3D-software', 'keuken-centrum'),
					'span'  => 'wide',
				],
				[
					'src'   => kc_cucinesse_pool_img(4),
					'title' => __('Detail & afwerking', 'keuken-centrum'),
					'tag'   => __('Kwaliteit', 'keuken-centrum'),
					'span'  => 'medium',
				],
			],
			'cta' => [
				'titleBefore'    => __('Liever ', 'keuken-centrum'),
				'titleHighlight' => __('in het echt', 'keuken-centrum'),
				'body'           => __('Cucinesse opstellingen en 3D-ontwerpen staan voor u klaar. Kom langs op de Zonnebaan.', 'keuken-centrum'),
				'label'          => __('Boek een afspraak', 'keuken-centrum'),
				'href'           => home_url('/consultation/'),
			],
		],
		'custom' => [
			'eyebrow'        => __('Op maat', 'keuken-centrum'),
			'titleBefore'    => __('Écht ', 'keuken-centrum'),
			'titleHighlight' => __('alles', 'keuken-centrum'),
			'titleAfter'     => __(' is mogelijk', 'keuken-centrum'),
			'body'           => __('Een uitdagende moderne designkeuken, een robuuste industrielook of de nostalgische intimiteit van een landelijk klassieke keuken: bij Keuken-Centrum Utrecht koopt u de keuken van uw dromen voor een verrassend betaalbare prijs.', 'keuken-centrum'),
			'secondary'      => __('Wij leveren de kwaliteitskeuken van uw dromen die naadloos past bij uw portemonnee. Compleet met topmerk-apparatuur, zorgeloze garantie en uitstekende service, zonder opdringerig gedoe.', 'keuken-centrum'),
		],
		'faq' => [
			'titleBefore'    => __('Alles wat u wilt weten over ', 'keuken-centrum'),
			'titleHighlight' => 'Cucinesse',
			'items'          => kc_brand_shared_faq(),
		],
		'advisors'    => array_slice(kc_brand_shared_advisors(), 0, 2),
		'showroomCta' => [
			'eyebrow'        => __('In de showroom', 'keuken-centrum'),
			'titleBefore'    => __('Cucinesse ', 'keuken-centrum'),
			'titleHighlight' => __('in het echt', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Modulaire Italiaanse keukens en 3D-ontwerp in onze showroom. Kom langs in Utrecht.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];

	return function_exists('kc_cms_apply_brand_page') ? kc_cms_apply_brand_page($data, 'cucinesse') : $data;
}
