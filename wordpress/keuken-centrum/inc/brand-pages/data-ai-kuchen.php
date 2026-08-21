<?php
/**
 * AI Küchen brand page data (React AiKuchenPage / ai-kuchen.ts parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @param int $index Pool index.
 */
function kc_ai_kuchen_pool_img(int $index): string {
	/*
	 * Original React remotes (…/AI-KUCHEN-…utrecht0|L|nll…) return HTTP 404.
	 * Recovered authentic showroom photos from keuken-centrum.nl (__l5e) live site.
	 */
	$pool = array_values(
		array_filter(
			[
				kc_theme_img('brands/aikuchen-showroom-1.webp') ?: kc_brand_hero('ai-kuchen'),
				kc_theme_img('brands/aikuchen-showroom-2.webp'),
				kc_theme_img('brands/aikuchen-showroom-1.webp'),
				kc_theme_img('brands/aikuchen-showroom-2.webp'),
				kc_theme_img('brands/aikuchen-showroom-1.webp'),
			]
		)
	);
	if (! $pool) {
		return kc_brand_hero('ai-kuchen');
	}
	return $pool[ $index % count($pool) ];
}

/**
 * @return array<string, mixed>
 */
function kc_ai_kuchen_page_data(): array {
	$hero = kc_theme_img('brands/aikuchen-showroom-1.webp') ?: kc_brand_hero('ai-kuchen');
	$logo = kc_brand_logo('ai-kuchen');

	$data = [
		'id'         => 'ai-kuchen',
		'name'       => 'AI Küchen',
		'legacyName' => 'Häcker',
		'country'    => __('Duitsland', 'keuken-centrum'),
		'founded'    => '1938',
		'meta'       => [
			'title'       => __('AI Küchen keukens · Häcker bij Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Ontdek AI Küchen (Häcker) bij Keuken-Centrum Utrecht. Ambitieuze systeemkeukens met Duitse precisie, maatwerk en de scherpste prijs via directe fabrieksrelatie.', 'keuken-centrum'),
		],
		'logo' => $logo,
		'hero' => [
			'image'     => $hero,
			'eyebrow'   => __('Duitse systeemkeukens', 'keuken-centrum'),
			'title'     => 'AI Küchen',
			'highlight' => __('Design dat leeft.', 'keuken-centrum'),
			'subtitle'  => __('Een ambitieus, designgericht systeemkeukenconcept dat creatief doordacht, technisch verfijnd en volledig op maat samen te stellen is.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/consultation/'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => 'ISO 9001', 'label' => __('Kwaliteitsnorm', 'keuken-centrum') ],
				[ 'value' => '6 tot 8 wkn', 'label' => __('Levertijd', 'keuken-centrum') ],
				[ 'value' => '10 jr', 'label' => __('Garantie keuken', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Het merk', 'keuken-centrum'),
			'titleBefore'    => __('Moderne architectuur met ', 'keuken-centrum'),
			'titleHighlight' => __('innovatie', 'keuken-centrum'),
			'titleAfter'     => __(' in elk detail', 'keuken-centrum'),
			'paragraphs'     => [
				__('Een ambitieus, designgerichte systeemkeukenconcept. Dat zijn de eigenschappen van de AI Küchen keukens. Een keukenontwerp waarbij het design creatief én goed doordacht is.', 'keuken-centrum'),
				__('Door de speciale indeling van vormen die AI Küchen toepast, krijgen alle vormen de vrijheid om geproduceerd te worden. Daardoor kunnen ze gemakkelijk belast worden en bevatten de meeste ook uittrekbare elementen of bijzondere schap- en kastoplossingen, zodat u alles uit uw opbergruimte haalt.', 'keuken-centrum'),
				__('De AI Küchen keukens voldoen aan de hoogste eisen. Een bijzondere combinatie van moderne architectuur die rekening houdt met innovatie, duurzaamheid en functionaliteit.', 'keuken-centrum'),
			],
			'image'     => kc_ai_kuchen_pool_img(1),
			'signature' => [
				[ 'value' => '100%', 'label' => __('Maatwerk', 'keuken-centrum') ],
				[ 'value' => 'DE', 'label' => __('Productie', 'keuken-centrum') ],
				[ 'value' => '1978', 'label' => __('Partner sinds', 'keuken-centrum') ],
			],
			'roundel' => 'AI KÜCHEN · SINDS 1938 · DUITSE PRECISIE ·',
			'caption' => [
				'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
				'title' => __('Meerdere modellen live te ervaren', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Drie pijlers', 'keuken-centrum'),
			'titleBefore'    => __('Kwaliteit, maatwerk en ', 'keuken-centrum'),
			'titleHighlight' => __('innovatie', 'keuken-centrum'),
			'titleAfter'     => __(' in balans', 'keuken-centrum'),
			'lead'           => __('Elke AI Küchen keuken wordt gebouwd op drie fundamenten die samen het verschil maken.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => 'AI Küchen',
					'description' => __('AI Küchen produceert moderne inbouwkeukens die voldoen aan de hoogste eisen op het gebied van kwaliteit, functionaliteit, duurzaamheid en design.', 'keuken-centrum'),
					'icon'        => 'sparkles',
					'image'       => kc_ai_kuchen_pool_img(0),
				],
				[
					'title'       => __('AI Küchen Keukens', 'keuken-centrum'),
					'description' => __('Zelfs de kleinste details kunnen worden aangepast om aan de smaak en behoeften van elke klant te voldoen.', 'keuken-centrum'),
					'icon'        => 'layers',
					'image'       => kc_ai_kuchen_pool_img(1),
				],
				[
					'title'       => __('Keukens', 'keuken-centrum'),
					'description' => __('Trendy decors, een grote variatie aan ontwerpen, unieke doorlopende lijnvoering en innovatieve kwaliteitsverbeteringen tot in detail.', 'keuken-centrum'),
					'icon'        => 'grid',
					'image'       => kc_ai_kuchen_pool_img(2),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Häcker',
			'eyebrow'        => __('Direct van fabrikant', 'keuken-centrum'),
			'titleBefore'    => __('AI Küchen keukens voor de ', 'keuken-centrum'),
			'titleHighlight' => __('scherpste prijs', 'keuken-centrum'),
			'titleAfter'     => '',
			'body'           => __('Ben je op zoek naar een keuken van AI Küchen? AI Küchen staat bekend als het ambitieuze, designgerichte systeemkeukenconcept dat voldoet aan de hoogste eisen. Keuken-Centrum verkoopt al jaren AI Küchen keukens. Omdat wij direct met de fabrikant samenwerken, leveren wij de beste prijzen zonder concessies aan kwaliteit.', 'keuken-centrum'),
			'highlights'     => [
				__('Betrouwbare service en gedreven procesorganisatie', 'keuken-centrum'),
				__('Snelle en flexibele leveringstermijnen', 'keuken-centrum'),
				__('Directe samenwerking met de fabrikant', 'keuken-centrum'),
				__('Wij verslaan vrijwel elke offerte', 'keuken-centrum'),
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
			'titleBefore'    => __('AI Küchen ', 'keuken-centrum'),
			'titleHighlight' => __('in beeld', 'keuken-centrum'),
			'lead'           => __('Officiële keukenopstellingen uit onze showroom. Elk ontwerp is volledig aanpasbaar.', 'keuken-centrum'),
			'items'          => [
				[
					'src'   => kc_ai_kuchen_pool_img(0),
					'title' => __('Moderne lijnvoering', 'keuken-centrum'),
					'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
					'span'  => 'large',
				],
				[
					'src'   => kc_ai_kuchen_pool_img(1),
					'title' => __('Op maat samengesteld', 'keuken-centrum'),
					'tag'   => __('Maatwerk', 'keuken-centrum'),
					'span'  => 'medium',
				],
				[
					'src'   => kc_ai_kuchen_pool_img(3),
					'title' => __('Detail & afwerking', 'keuken-centrum'),
					'tag'   => __('Kwaliteit', 'keuken-centrum'),
					'span'  => 'medium',
				],
				[
					'src'   => kc_ai_kuchen_pool_img(4),
					'title' => __('Systeemoplossingen', 'keuken-centrum'),
					'tag'   => __('Functionaliteit', 'keuken-centrum'),
					'span'  => 'wide',
				],
			],
			'cta' => [
				'titleBefore'    => __('Liever ', 'keuken-centrum'),
				'titleHighlight' => __('in het echt', 'keuken-centrum'),
				'titleAfter'     => __(' ervaren?', 'keuken-centrum'),
				'body'           => __('Meerdere AI Küchen opstellingen staan voor u klaar op de Zonnebaan.', 'keuken-centrum'),
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
			'titleHighlight' => 'AI Küchen',
			'items'          => kc_brand_shared_faq(),
		],
		'advisors' => [
			[
				'name'  => 'Hans',
				'role'  => __('Keukenadviseur', 'keuken-centrum'),
				'email' => 'hans@keuken-centrum.nl',
				'bio'   => __('Mijn kracht is om al luisterend en adviserend samen met de klant tot een keukenkeuze te komen die recht doet aan de woonwensen.', 'keuken-centrum'),
			],
			[
				'name'  => 'Danny',
				'role'  => __('Keukenadviseur', 'keuken-centrum'),
				'email' => 'memis@keuken-centrum.nl',
				'bio'   => __('Samen maken we uw woonwensen zo concreet en helder mogelijk en passen daar de keuken op aan, zodat u nog jaren kunt genieten.', 'keuken-centrum'),
			],
		],
		'showroomCta' => [
			'eyebrow'        => __('In de showroom', 'keuken-centrum'),
			'titleBefore'    => __('AI Küchen ', 'keuken-centrum'),
			'titleHighlight' => __('in het echt', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Meerdere modellen in onze showroom. Kom langs in Utrecht.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];

	return function_exists('kc_cms_apply_brand_page') ? kc_cms_apply_brand_page($data, 'ai-kuchen') : $data;
}
