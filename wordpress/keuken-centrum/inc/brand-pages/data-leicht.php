<?php
/**
 * Leicht brand page data (React leicht.ts parity).
 *
 * Images prefer theme-bundled assets — remote keuken-centrum.nl uploads 404 on production.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Rotating local kitchen imagery for series/gallery cards.
 *
 * @return array<int, string>
 */
function kc_leicht_local_pool(): array {
	static $pool = null;
	if (null !== $pool) {
		return $pool;
	}
	$candidates = [
		'brands/leicht-hero.webp',
		'hero/hero_img1.webp',
		'hero/hero_img2.webp',
		'hero/hero_img3.webp',
		'hero/hero_img4.webp',
		'hero/hero_img5.webp',
		'experience/Design_keukens.webp',
		'experience/Modern_keukens.webp',
		'experience/modern.webp',
		'experience/design.webp',
		'collections/modern-base.webp',
		'collections/industrieel-base.webp',
		'collections/klassiek-base.webp',
		'collections/landelijk-base.webp',
		'showroom.webp',
		'craftsmanship.webp',
	];
	$pool = [];
	foreach ($candidates as $rel) {
		$uri = kc_theme_img($rel);
		if ($uri) {
			$pool[] = $uri;
		}
	}
	return $pool;
}

/**
 * @param int $index Pool index.
 */
function kc_leicht_pool_img(int $index): string {
	$pool = kc_leicht_local_pool();
	if (! $pool) {
		return kc_brand_hero('leicht');
	}
	return $pool[ $index % count($pool) ];
}

/**
 * @return array<string, mixed>
 */
function kc_leicht_page_data(): array {
	$hero = kc_brand_hero('leicht');
	$logo = kc_brand_logo('leicht');

	$series_defs = [
		[ 'kyoto', 'Kyoto', 'Showroom', '/keukens/leicht/kyoto/', true ],
		[ 'ronde-wangen', 'Ronde Wangen', 'Showroom', '/keukens/leicht/ronde-wangen/', true ],
		[ 'bossa', 'Bossa Concrete', 'Showroom', '/keukens/leicht/bossa/', true ],
		[ 'taj-mahal', 'Taj Mahal', 'Showroom', '/keukens/leicht/taj-mahal/', true ],
		[ 'bossa-e-kera-e-madero', 'BOSSA-E, KERA-E, MADERO', 'Leicht', '', false ],
		[ 'bossa-f-45c', 'BOSSA F 45c', 'Leicht', '', false ],
		[ 'concrete-a', 'CONCRETE-A', 'Leicht', '', false ],
		[ 'largo-fg-ios-m', 'LARGO-FG | IOS-M', 'Leicht', '', false ],
		[ 'orlando-k-pur-fg-k', 'ORLANDO-K | PUR-FG-K', 'Leicht', '', false ],
		[ 'synthia-ios-largo', 'SYNTHIA IOS-LARGO', 'Leicht', '', false ],
		[ 'classic-fs-ios-m', 'CLASSIC-FS | IOS-M', 'Leicht', '', false ],
		[ 'topos-stone', 'TOPOS | STONE', 'Leicht', '', false ],
		[ 'bondi-classic-fs', 'BONDI | CLASSIC-FS', 'Leicht', '', false ],
		[ 'topos-concrete', 'TOPOS | CONCRETE', 'Leicht', '', false ],
		[ 'synthia-c-ceres', 'SYNTHIA-C-CERES', 'Leicht', '', false ],
		[ 'avenida', 'AVENIDA', 'Leicht', '', false ],
		[ 'bondi', 'BONDI', 'Leicht', '', false ],
		[ 'classic-fs-xylo', 'CLASSIC-FS | XYLO', 'Leicht', '', false ],
		[ 'bondi-valais', 'BONDI VALAIS', 'Leicht', '', false ],
	];

	$series_items = [];
	foreach ($series_defs as $i => $def) {
		[ $id, $name, $tag, $href, $featured ] = $def;
		$item = [
			'id'       => $id,
			'name'     => $name,
			'image'    => kc_leicht_pool_img($i),
			'tag'      => $tag,
			'featured' => $featured,
		];
		if ('' !== $href) {
			$item['href'] = home_url($href);
		}
		$series_items[] = $item;
	}

	return [
		'id'         => 'leicht',
		'name'       => 'Leicht',
		'country'    => __('Duitsland', 'keuken-centrum'),
		'founded'    => '1928',
		'legacyName' => 'LEICHT',
		'meta'       => [
			'title'       => __('Leicht Keukens · Officiële dealer in Utrecht | Keuken-Centrum', 'keuken-centrum'),
			'description' => __('Officiële Leicht dealer in Utrecht. Ontdek Kyoto, Taj Mahal, Bossa Concrete en Ronde Wangen in onze showroom, met Duits vakmanschap en actuele collecties.', 'keuken-centrum'),
		],
		'logo' => $logo,
		'hero' => [
			'image'     => $hero,
			'eyebrow'   => __('Officiële Leicht dealer', 'keuken-centrum'),
			'title'     => 'Leicht',
			'highlight' => __('Architectuur in de keuken.', 'keuken-centrum'),
			'subtitle'  => __('Duits vakmanschap, tijdloze vormgeving en ongeëvenaarde kwaliteit. Als erkende Leicht-dealer in Utrecht werken wij rechtstreeks met de fabrikant. Beleef de collectie live in onze showroom aan de Zonnebaan.', 'keuken-centrum'),
			'cta'       => [
				'primary'        => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'    => home_url('/consultation/'),
				'secondary'      => __('Bel direct', 'keuken-centrum'),
				'secondaryHref'  => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => 'Dealer', 'label' => __('Erkend', 'keuken-centrum') ],
				[ 'value' => 'Duitsland', 'label' => __('Vakmanschap', 'keuken-centrum') ],
				[ 'value' => '6 tot 8 wkn', 'label' => __('Levertijd', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Officiële dealer', 'keuken-centrum'),
			'titleBefore'    => __('Erkende ', 'keuken-centrum'),
			'titleHighlight' => 'Leicht',
			'titleAfter'     => __(' specialist in Utrecht', 'keuken-centrum'),
			'paragraphs'     => [
				__('Keuken-Centrum Utrecht is een officiële aanbieder van Leicht keukens in Nederland. Als erkende Leicht-dealer werken wij rechtstreeks samen met de fabrikant, zodat u verzekerd bent van originele producten, actuele collecties en de nieuwste innovaties op het gebied van keukendesign.', 'keuken-centrum'),
				__('In onze showroom aan de Zonnebaan 10 in Utrecht vindt u meerdere Leicht-opstellingen, waaronder de populaire series Kyoto, Taj Mahal, Bossa Concrete en Ronde Wangen. Hier kunt u de materialen zien, de afwerking voelen en ervaren wat Leicht onderscheidt: Duits vakmanschap, tijdloze vormgeving en ongeëvenaarde kwaliteit.', 'keuken-centrum'),
				__('Onze adviseurs staan klaar om samen met u een keuken te ontwerpen die perfect past bij uw woning, smaak en budget. Bezoek onze showroom of plan een afspraak en ontdek waarom Keuken-Centrum Utrecht dé Leicht-specialist van de regio Utrecht is.', 'keuken-centrum'),
			],
			'image'     => kc_leicht_pool_img(1),
			'signature' => [
				[ 'value' => '1928', 'label' => __('Opgericht', 'keuken-centrum') ],
				[ 'value' => 'DE', 'label' => __('Duitsland', 'keuken-centrum') ],
				[ 'value' => 'Dealer', 'label' => __('Erkend', 'keuken-centrum') ],
			],
			'roundel' => 'LEICHT · DUITSLAND · SINDS 1928 ·',
			'caption' => [
				'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
				'title' => __('Kyoto, Taj Mahal, Bossa Concrete & Ronde Wangen live te ervaren', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Waarom Leicht', 'keuken-centrum'),
			'titleBefore'    => __('Duits design met ', 'keuken-centrum'),
			'titleHighlight' => __('karakter', 'keuken-centrum'),
			'lead'           => __('Leicht keukens geven uw ruimte een individueel karakter waarin u plezierig kunt koken, eten en praten met familie en vrienden. Deze maatwerk designkeukens betrekken ook aangrenzende woongedeelten bij de keuken.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => __('Modern design', 'keuken-centrum'),
					'description' => __('De kracht van Leicht zit in het moderne design: maatwerk keukens met duurzaamheid en hoge kwaliteit in product en service. Van royale eilandkeukens tot functionele keukens op een klein oppervlak, voor ieder wat wils.', 'keuken-centrum'),
					'icon'        => 'sparkles',
					'image'       => kc_leicht_pool_img(2),
				],
				[
					'title'       => __('Erkend leverancier', 'keuken-centrum'),
					'description' => __('Wij zijn een erkend leverancier van dit Duitse keukenmerk. Onze keukenspecialisten kennen de collectie door en door en begeleiden u van eerste idee tot definitieve keuze, rechtstreeks via de fabrikant.', 'keuken-centrum'),
					'icon'        => 'shield',
					'image'       => kc_leicht_pool_img(3),
				],
				[
					'title'       => __('Designlijnen', 'keuken-centrum'),
					'description' => __('Leicht onderscheidt zich in drie stijlen: Modern Style, Traditional Style en greeploze keukens, waaronder Avance, Contino en Avance Pro. Diverse designlijnen bieden mogelijkheden voor elk budget.', 'keuken-centrum'),
					'icon'        => 'grid',
					'image'       => kc_leicht_pool_img(4),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'LEICHT',
			'eyebrow'        => __('Erkende dealer', 'keuken-centrum'),
			'titleBefore'    => __('Geen wachttijden, ', 'keuken-centrum'),
			'titleHighlight' => __('snelle levering', 'keuken-centrum'),
			'titleAfter'     => __(' en de beste prijs', 'keuken-centrum'),
			'body'           => __('Als erkende Leicht-dealer werken wij direct samen met de fabrikant. Geen tussenpersonen of onnodige wachttijden, maar wel originele Leicht keukens, actuele collecties en de scherpste prijs via onze inkooporganisatie. Heeft u al een offerte? Wij bieden vrijwel altijd een betere prijs.', 'keuken-centrum'),
			'highlights'     => [
				__('Rechtstreekse samenwerking met Leicht', 'keuken-centrum'),
				__('Originele producten en actuele collecties', 'keuken-centrum'),
				__('Snelle levering binnen 6 tot 8 weken', 'keuken-centrum'),
				__('Wij verslaan vrijwel elke offerte', 'keuken-centrum'),
			],
			'note'  => __('Direct contact met onze Leicht-specialisten. Plan een vrijblijvend adviesgesprek in onze showroom.', 'keuken-centrum'),
			'stats' => [
				[ 'icon' => 'factory', 'label' => __('Directe fabriek', 'keuken-centrum'), 'value' => __('Beste prijs', 'keuken-centrum') ],
				[ 'icon' => 'shield', 'label' => __('CBW + 10 jaar', 'keuken-centrum'), 'value' => __('Garantie', 'keuken-centrum') ],
				[ 'icon' => 'clock', 'label' => __('Gemiddelde levertijd', 'keuken-centrum'), 'value' => __('6 tot 8 weken', 'keuken-centrum') ],
				[ 'icon' => 'award', 'label' => __('ISO 9001 gecertificeerd', 'keuken-centrum'), 'value' => __('Kwaliteit', 'keuken-centrum') ],
			],
		],
		'series' => [
			'eyebrow'        => __('Collectie', 'keuken-centrum'),
			'titleBefore'    => __('Leicht ', 'keuken-centrum'),
			'titleHighlight' => __('series', 'keuken-centrum'),
			'lead'           => __('Ontdek het volledige Leicht-assortiment, van populaire showroommodellen tot exclusieve designlijnen. De eerste vier series staan live opgesteld in onze showroom.', 'keuken-centrum'),
			'items'          => $series_items,
		],
		'catalogs' => [
			[
				'title'    => 'Modern Style',
				'subtitle' => __('Leicht catalogus 2022', 'keuken-centrum'),
				'href'     => 'https://caisy.io/assets/c5b98fcc-5e23-4df0-a5cd-2a7527d26cff/NPbev0X5kC/ff9d65c7-56a0-46e2-8dea-70059fa1fed4200312LEICHTKuechenModernStyle2022Hompage150dpi.pdf',
			],
			[
				'title'    => 'Interior Values',
				'subtitle' => __('Leicht interieurwaarden', 'keuken-centrum'),
				'href'     => 'https://assets.caisy.io/assets/c5b98fcc-5e23-4df0-a5cd-2a7527d26cff/ePpX0FdZqL/a224b4bf-1a0e-426b-8ae1-3f0a0fa493e1InteriorValues2022Inhalt.pdf',
			],
			[
				'title'    => 'Architecture + Kitchen IV',
				'subtitle' => __('Leicht architectuur & keuken', 'keuken-centrum'),
				'href'     => 'https://caisy.io/assets/c5b98fcc-5e23-4df0-a5cd-2a7527d26cff/cp72xvXXTO/9f1759c9-b7d9-4abb-b911-41fb570ddeecLEICHTArchitectureKitchenIV2020Einzelseiten.pdf',
			],
			[
				'title'    => 'Traditional Style',
				'subtitle' => __('Leicht catalogus 2021', 'keuken-centrum'),
				'href'     => 'https://caisy.io/assets/c5b98fcc-5e23-4df0-a5cd-2a7527d26cff/6Rkoboa9tk/ba6c50ed-5630-4b84-8964-12d005d00226TraditionalStyle2021Hompage150dpiDoppelseiten.pdf',
			],
		],
		'gallery' => [
			'eyebrow'        => __('Inspiratie', 'keuken-centrum'),
			'titleBefore'    => __('Leicht in ', 'keuken-centrum'),
			'titleHighlight' => __('beeld', 'keuken-centrum'),
			'lead'           => __('Van donkere Bossa-concrete tot lichte architectuurkeukens: een selectie uit onze showroom en de Leicht collectie.', 'keuken-centrum'),
			'items'          => [
				[
					'src'   => kc_leicht_pool_img(0),
					'title' => __('Architectuurkeuken', 'keuken-centrum'),
					'tag'   => __('Leicht design', 'keuken-centrum'),
					'span'  => 'large',
					'href'  => home_url('/keukens/leicht/kyoto/'),
				],
				[
					'src'   => kc_leicht_pool_img(5),
					'title' => __('Modern vakmanschap', 'keuken-centrum'),
					'tag'   => __('Kwaliteit', 'keuken-centrum'),
					'span'  => 'medium',
				],
				[
					'src'   => kc_leicht_pool_img(6),
					'title' => __('Bossa Concrete', 'keuken-centrum'),
					'tag'   => __('Donker decor', 'keuken-centrum'),
					'span'  => 'medium',
					'href'  => home_url('/keukens/leicht/bossa/'),
				],
				[
					'src'   => kc_leicht_pool_img(7),
					'title' => __('Showroom Utrecht', 'keuken-centrum'),
					'tag'   => __('Live te ervaren', 'keuken-centrum'),
					'span'  => 'wide',
					'href'  => home_url('/consultation/'),
				],
			],
			'cta' => [
				'titleBefore'    => __('Leicht ', 'keuken-centrum'),
				'titleHighlight' => __('live', 'keuken-centrum'),
				'body'           => __('Meerdere series staan opgesteld in onze showroom aan de Zonnebaan. Plan een vrijblijvend bezoek en ervaar materialen en afwerking in het echt.', 'keuken-centrum'),
				'label'          => __('Boek een afspraak', 'keuken-centrum'),
				'href'           => home_url('/consultation/'),
			],
		],
		'custom' => [
			'eyebrow'        => __('Op maat', 'keuken-centrum'),
			'titleBefore'    => __('Écht', 'keuken-centrum'),
			'titleHighlight' => __('alles', 'keuken-centrum'),
			'titleAfter'     => __('is mogelijk', 'keuken-centrum'),
			'body'           => __('Een uitdagende moderne designkeuken, een robuuste industrielook of de nostalgische intimiteit van een landelijk klassieke keuken: bij Keuken-Centrum Utrecht koopt u de keuken van uw dromen voor een verrassend betaalbare prijs.', 'keuken-centrum'),
			'secondary'      => __('Wij leveren de kwaliteitskeuken van uw dromen die naadloos past bij uw portemonnee. Compleet met topmerk-apparatuur, zorgeloze garantie en uitstekende service, zonder opdringerig gedoe.', 'keuken-centrum'),
		],
		'faq' => [
			'titleBefore'    => __('Veel ', 'keuken-centrum'),
			'titleHighlight' => __('gestelde vragen', 'keuken-centrum'),
			'items'          => kc_brand_shared_faq(),
		],
		'advisors'    => array_slice(kc_brand_shared_advisors(), 0, 2),
		'showroomCta' => [
			'eyebrow'        => __('In de showroom', 'keuken-centrum'),
			'titleBefore'    => __('Leicht ', 'keuken-centrum'),
			'titleHighlight' => __('in het echt', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Kyoto, Ronde Wangen, Bossa Concrete en Taj Mahal staan live opgesteld. Kom langs in Utrecht.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];
}
