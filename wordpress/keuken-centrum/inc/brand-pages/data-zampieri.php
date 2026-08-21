<?php
/**
 * Zampieri brand page data (React zampieri.ts parity).
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
 * Zampieri image pool.
 *
 * React remotes (all HTTP 404 / not in live SPA / not in Wayback / not in WP media):
 * - cucina3.webp
 * - fbef50e…-grey-kitchens-contemporary-kitchens.webp
 * - unnamed.webp
 *
 * Verified local substitutes from the React repo (brand-scoped only — not dimension-matched guesses):
 * - brands/zampieri-hero.webp      (src/assets/brands/zampieri-hero.webp)
 * - brands/zampieri-brand-card.webp (public/brand-zampieri.webp)
 *
 * These are authentic Keuken-Centrum Zampieri brand stills, but NOT proven byte-equal to the missing remotes.
 */
function kc_zampieri_pool_img(int $index): string {
	$pool = array_values(
		array_filter(
			[
				kc_brand_hero('zampieri'),
				kc_theme_img('brands/zampieri-brand-card.webp'),
				kc_brand_hero('zampieri'),
			]
		)
	);
	if (! $pool) {
		return kc_brand_hero('zampieri');
	}
	return $pool[ $index % count($pool) ];
}

/**
 * @return array<string, mixed>
 */
function kc_zampieri_page_data(): array {
	$hero = kc_brand_hero('zampieri');
	$logo = kc_brand_logo('zampieri');

	$data = [
		'id'      => 'zampieri',
		'name'    => 'Zampieri',
		'country' => __('Italië', 'keuken-centrum'),
		'meta'    => [
			'title'       => __('Zampieri keukens · Italiaans design bij Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Ontdek Zampieri bij Keuken-Centrum Utrecht. Italiaanse keukens en kasten met comfort, ergonomie en schoonheid, made in Italy, tegen een gegarandeerd lage prijs en met een eigen montagedienst.', 'keuken-centrum'),
		],
		'logo' => $logo,
		'hero' => [
			'image'     => $hero,
			'eyebrow'   => __('Gemaakt in Italië', 'keuken-centrum'),
			'title'     => 'Zampieri',
			'highlight' => __('Comfort. Ergonomie. Schoonheid.', 'keuken-centrum'),
			'subtitle'  => __('Het Italiaanse merk Zampieri verrast met stijlvolle, functionele meubels, made in Italy en in vele kleuren, maten en configuraties volledig naar uw smaak samen te stellen.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/consultation/'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => 'IT', 'label' => __('Kwaliteit', 'keuken-centrum') ],
				[ 'value' => 'Beste', 'label' => __('Prijs', 'keuken-centrum') ],
				[ 'value' => '5 jr', 'label' => __('Garantie', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Het merk', 'keuken-centrum'),
			'titleBefore'    => __('De keuken die u verrast met ', 'keuken-centrum'),
			'titleHighlight' => __('comfort', 'keuken-centrum'),
			'titleAfter'     => __(', ergonomie en schoonheid', 'keuken-centrum'),
			'paragraphs'     => [
				__('Zampieri zal u verrassen met het comfort, de ergonomie en de schoonheid van de keuken. Het bekende Italiaanse bedrijf maakt stijlvolle, functionele en betrouwbare meubels voor een van de belangrijkste kamers van elk appartement of elke woning.', 'keuken-centrum'),
				__('In de catalogus worden verschillende oplossingen \'made in Italy\' gepresenteerd in diverse kleuren, maten en configuraties. Ze helpen om van uw keuken de perfecte ruimte te maken om te koken, maar passen ook naadloos in het interieur van compacte studio-appartementen.', 'keuken-centrum'),
				__('Een grote verscheidenheid aan modellen en de mogelijkheid van individuele bestellingen maken het kopen van Zampieri-meubels gemakkelijk en plezierig. Zelfs de kleinste details kunnen worden aangepast aan uw smaak en behoeften.', 'keuken-centrum'),
			],
			'image'     => kc_zampieri_pool_img(1),
			'signature' => [
				[ 'value' => '100%', 'label' => __('Made in Italy', 'keuken-centrum') ],
				[ 'value' => '∞', 'label' => __('Configuraties', 'keuken-centrum') ],
				[ 'value' => 'IT', 'label' => __('Design', 'keuken-centrum') ],
			],
			'roundel' => 'ZAMPIERI · GEMAAKT IN ITALIË · KEUKENS & KASTEN ·',
			'caption' => [
				'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
				'title' => __('Italiaanse stijl live te ervaren', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Drie pijlers', 'keuken-centrum'),
			'titleBefore'    => __('Italiaanse kwaliteit, maatwerk en ', 'keuken-centrum'),
			'titleHighlight' => __('stijl', 'keuken-centrum'),
			'titleAfter'     => __(' in balans', 'keuken-centrum'),
			'lead'           => __('Zampieri combineert hoogwaardige functionaliteit met een stijlvolle uitstraling die volledig aanpasbaar is tot in het kleinste detail.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => __('Comfort & ergonomie', 'keuken-centrum'),
					'description' => __('Zampieri verrast met comfort en ergonomie. De keukens zijn ontworpen voor dagelijks gebruik, waarin koken een genot wordt.', 'keuken-centrum'),
					'icon'        => 'heart',
					'image'       => kc_zampieri_pool_img(0),
				],
				[
					'title'       => __('Individuele details', 'keuken-centrum'),
					'description' => __('Zelfs de kleinste details kunnen worden aangepast om aan de smaak en behoeften van elke klant te voldoen.', 'keuken-centrum'),
					'icon'        => 'layers',
					'image'       => kc_zampieri_pool_img(1),
				],
				[
					'title'       => __('Made in Italy', 'keuken-centrum'),
					'description' => __('Hoogwaardige, functionele en zeer stijlvolle meubels, met een grote verscheidenheid aan modellen in diverse kleuren, maten en configuraties.', 'keuken-centrum'),
					'icon'        => 'sparkles',
					'image'       => kc_zampieri_pool_img(2),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Zampieri',
			'eyebrow'        => __('Direct van fabrikant', 'keuken-centrum'),
			'titleBefore'    => __('Zampieri keukens voor de ', 'keuken-centrum'),
			'titleHighlight' => __('scherpste prijs', 'keuken-centrum'),
			'titleAfter'     => '',
			'body'           => __('U koopt een Zampieri keuken via ons voor gegarandeerd de laagste prijs van topkwaliteit en met topservice. Zampieri heeft een uitermate breed assortiment. Wij nodigen u van harte uit om in onze showroom te komen kijken.', 'keuken-centrum'),
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
			'titleBefore'    => __('Zampieri ', 'keuken-centrum'),
			'titleHighlight' => __('in beeld', 'keuken-centrum'),
			'lead'           => __('Italiaanse keukenopstellingen die stijlvol, functioneel en volledig aanpasbaar zijn.', 'keuken-centrum'),
			'items'          => [
				[
					'src'   => kc_zampieri_pool_img(0),
					'title' => __('Italiaanse elegantie', 'keuken-centrum'),
					'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
					'span'  => 'large',
				],
				[
					'src'   => kc_zampieri_pool_img(1),
					'title' => __('Contemporary kitchens', 'keuken-centrum'),
					'tag'   => __('Design', 'keuken-centrum'),
					'span'  => 'medium',
				],
				[
					'src'   => kc_zampieri_pool_img(2),
					'title' => __('Detail & afwerking', 'keuken-centrum'),
					'tag'   => __('Maatwerk', 'keuken-centrum'),
					'span'  => 'medium',
				],
			],
			'cta' => [
				'titleBefore'    => __('Liever ', 'keuken-centrum'),
				'titleHighlight' => __('in het echt', 'keuken-centrum'),
				'body'           => __('Zampieri opstellingen staan voor u klaar op de Zonnebaan. Ontdek het assortiment in onze showroom.', 'keuken-centrum'),
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
			'titleHighlight' => 'Zampieri',
			'items'          => kc_brand_shared_faq(),
		],
		'advisors'    => array_slice(kc_brand_shared_advisors(), 0, 2),
		'showroomCta' => [
			'eyebrow'        => __('In de showroom', 'keuken-centrum'),
			'titleBefore'    => __('Zampieri ', 'keuken-centrum'),
			'titleHighlight' => __('in het echt', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Italiaanse keukens en kasten in onze showroom. Kom langs in Utrecht.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];

	return function_exists('kc_cms_apply_brand_page') ? kc_cms_apply_brand_page($data, 'zampieri') : $data;
}
