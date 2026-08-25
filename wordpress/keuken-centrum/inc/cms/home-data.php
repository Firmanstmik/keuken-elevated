<?php
/**
 * Homepage CMS data — ACF options with React-equivalent defaults.
 *
 * Empty ACF → React defaults. Filled ACF → CMS values.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @param array<string,mixed> $row
 * @param string              $key
 * @param string              $default
 */
function kc_home_row_text( array $row, string $key, string $default = '' ): string {
	$value = $row[ $key ] ?? null;
	if ( null === $value || false === $value || '' === $value ) {
		return $default;
	}
	return is_string( $value ) ? $value : $default;
}

/**
 * Partners (Brands) carousel + marquee defaults.
 *
 * @return array{brands:list<array<string,mixed>>,marquee:list<array<string,mixed>>,scene:string}
 */
function kc_home_partners_data(): array {
	$defaults = [
		[
			'name'        => 'Leicht',
			'logo'        => 'Leicht_Logo.webp',
			'image'       => 'brands/leicht-hero.webp',
			'origin'      => 'Duitsland',
			'since'       => 'Sinds 1928',
			'href'        => home_url( '/keukens/leicht/' ),
			'eyebrow'     => 'Hoofdpartner',
			'description' => 'Architecturaal Duits design, gevormd door meer dan 90 jaar vakmanschap en compromisloze materiaalkeuze.',
			'signature'   => 'Bauhaus-erfgoed · Maatwerk',
			'enabled'     => true,
		],
		[
			'name'        => 'AI Küchen',
			'logo'        => 'aiKuchen_Logo.webp',
			'image'       => 'brands/aikuchen-hero.webp',
			'origin'      => 'Duitsland',
			'since'       => 'Premium partner',
			'href'        => home_url( '/keukens/ai-kuchen/' ),
			'eyebrow'     => 'Duitse innovatie',
			'description' => 'Moderne keukens met intelligente indelingen, sterke techniek en een persoonlijke uitstraling voor iedere ruimte.',
			'signature'   => 'Innovatief · Persoonlijk',
			'enabled'     => true,
		],
		[
			'name'        => 'Nobilia',
			'logo'        => 'Nobilia_Logo.webp',
			'image'       => 'brands/nobilia-hero.webp',
			'origin'      => 'Duitsland',
			'since'       => 'Made in Germany',
			'href'        => home_url( '/keukens/nobilia/' ),
			'eyebrow'     => 'Europese marktleider',
			'description' => 'Betrouwbare Duitse precisie, verrassend veel mogelijkheden en een afwerking die dagelijks comfort centraal stelt.',
			'signature'   => 'Veelzijdig · Betrouwbaar',
			'enabled'     => true,
		],
		[
			'name'        => 'Zampieri',
			'logo'        => 'Zampieri_Logo.webp',
			'image'       => 'brands/zampieri-hero.webp',
			'origin'      => 'Italië',
			'since'       => 'Italiaans design',
			'href'        => home_url( '/keukens/zampieri/' ),
			'eyebrow'     => 'Sculpturale collectie',
			'description' => 'Italiaanse finesse in haar puurste vorm: elegante volumes, rijke materialen en een uitgesproken architectonische rust.',
			'signature'   => 'Minimalistisch · Verfijnd',
			'enabled'     => true,
		],
		[
			'name'        => 'Cucinesse',
			'logo'        => 'Cucinesse_Logo_Official.png',
			'image'       => 'brands/cucinesse-hero.webp',
			'origin'      => 'Italië',
			'since'       => 'Volledig op maat',
			'href'        => home_url( '/keukens/cucinesse/' ),
			'eyebrow'     => 'Italiaans maatwerk',
			'description' => 'Warme Italiaanse sfeer en praktisch maatwerk komen samen in keukens die uitnodigen om dagelijks te leven.',
			'signature'   => 'Warm · Karaktervol',
			'enabled'     => true,
		],
	];

	$rows = kc_cms_repeater( 'home_partners' );
	$out  = [];
	foreach ( $rows as $row ) {
		if ( isset( $row['enabled'] ) && ! $row['enabled'] ) {
			continue;
		}
		$name = kc_home_row_text( $row, 'name' );
		if ( '' === $name ) {
			continue;
		}
		$def = null;
		foreach ( $defaults as $d ) {
			if ( strcasecmp( $d['name'], $name ) === 0 ) {
				$def = $d;
				break;
			}
		}
		$logo_url  = kc_cms_image_url( $row['logo'] ?? null, $def ? ( kc_theme_img( $def['logo'] ) ?: '' ) : '' );
		$image_url = kc_cms_image_url( $row['image'] ?? null, $def ? ( kc_theme_img( $def['image'] ) ?: '' ) : '' );
		$out[]     = [
			'name'        => $name,
			'logo'        => $logo_url ?: ( $def['logo'] ?? '' ),
			'logo_url'    => $logo_url,
			'image'       => $image_url ?: ( $def['image'] ?? '' ),
			'image_url'   => $image_url,
			'origin'      => kc_home_row_text( $row, 'origin', $def['origin'] ?? '' ),
			'since'       => kc_home_row_text( $row, 'since', $def['since'] ?? '' ),
			'href'        => kc_home_row_text( $row, 'url', $def['href'] ?? home_url( '/keukens/' ) ),
			'eyebrow'     => kc_home_row_text( $row, 'eyebrow', $def['eyebrow'] ?? '' ),
			'description' => kc_home_row_text( $row, 'description', $def['description'] ?? '' ),
			'signature'   => kc_home_row_text( $row, 'signature', $def['signature'] ?? '' ),
			'cms'         => true,
		];
	}

	$brands = $out ?: array_map(
		static function ( array $b ): array {
			$b['logo_url']  = kc_theme_img( $b['logo'] );
			$b['image_url'] = kc_theme_img( $b['image'] );
			$b['cms']       = false;
			return $b;
		},
		$defaults
	);

	$marquee_defaults = [
		[ 'name' => 'Leicht', 'logo' => 'Leicht_Logo.webp', 'description' => 'Architecturale Duitse keukens sinds 1928.' ],
		[ 'name' => 'AI Küchen', 'logo' => 'aiKuchen_Logo.webp', 'description' => 'Duitse innovatie met persoonlijk maatwerk.' ],
		[ 'name' => 'Nobilia', 'logo' => 'Nobilia_Logo.webp', 'description' => 'Veelzijdige kwaliteit, volledig Made in Germany.' ],
		[ 'name' => 'Zampieri', 'logo' => 'Zampieri_Logo.webp', 'description' => 'Sculpturaal Italiaans design met karakter.' ],
		[ 'name' => 'Cucinesse', 'logo' => 'Cucinesse_Logo_Official.png', 'description' => 'Warme Italiaanse keukens, volledig op maat.' ],
		[ 'name' => 'Bora', 'logo' => 'Bora_Logo.webp', 'description' => 'Innovatieve kookveldafzuiging bij de bron.' ],
		[ 'name' => 'Miele', 'logo' => 'Miele_Logo.webp', 'description' => 'Premium apparatuur gebouwd voor jarenlang gebruik.' ],
		[ 'name' => 'Quooker', 'logo' => 'Quooker_Logo.webp', 'description' => 'Kokend, gekoeld en bruisend water uit één kraan.' ],
		[ 'name' => 'Gaggenau', 'logo' => 'Gaggenau_Logo.webp', 'description' => 'Professionele keukenapparatuur sinds 1683.' ],
	];

	$marquee_rows = kc_cms_repeater( 'home_partner_logos' );
	$marquee      = [];
	foreach ( $marquee_rows as $row ) {
		$name = kc_home_row_text( $row, 'name' );
		if ( '' === $name ) {
			continue;
		}
		$logo = kc_cms_image_url( $row['logo'] ?? null, '' );
		$marquee[] = [
			'name'        => $name,
			'logo'        => $logo,
			'logo_url'    => $logo,
			'description' => kc_home_row_text( $row, 'description' ),
			'cms'         => true,
		];
	}
	if ( empty( $marquee ) ) {
		$marquee = array_map(
			static function ( array $m ): array {
				$m['logo_url'] = kc_theme_img( $m['logo'] );
				$m['cms']      = false;
				return $m;
			},
			$marquee_defaults
		);
	}

	return [
		'brands'  => $brands,
		'marquee' => $marquee,
		'scene'   => kc_cms_image_url( get_field( 'home_partners_scene', 'option' ), kc_theme_img( 'brands/brands-dark-bg.webp' ) ?: '' ),
	];
}

/**
 * Why section.
 *
 * @return array{eyebrow:string,heading:string,heading_em:string,lede:string,pillars:list<array<string,mixed>>}
 */
function kc_home_why_data(): array {
	$pillars_default = [
		[
			'id'          => 'vakmanschap',
			'number'      => '01',
			'title'       => 'Europees Vakmanschap',
			'description' => 'Elk detail van uw keuken wordt met uiterste precisie en vakmanschap vervaardigd door onze Europese producenten.',
			'image'       => kc_theme_img( 'why/why-vakmanschap.webp' ),
			'image_alt'   => 'Europees vakmanschap met precisie en kwaliteit',
			'accent'      => 'Precisie',
			'icon'        => 'settings',
		],
		[
			'id'          => 'persoonlijk',
			'number'      => '02',
			'title'       => 'Persoonlijke Aanpak',
			'description' => 'Onze adviseurs luisteren naar uw wensen en vertalen deze naar een uniek keukenontwerp dat perfect aansluit bij uw woning.',
			'image'       => kc_theme_img( 'why/why-persoonlijk.webp' ),
			'image_alt'   => 'Persoonlijke consultatie in de showroom',
			'accent'      => 'Begeleiding',
			'icon'        => 'heart',
		],
		[
			'id'          => 'materialen',
			'number'      => '03',
			'title'       => 'Luxe & Duurzame Materialen',
			'description' => 'Voor uw keuken gebruiken we alleen geselecteerde premium materialen, van Carrara marmer tot gerookt eiken.',
			'image'       => kc_theme_img( 'why/why-materialen.webp' ),
			'image_alt'   => 'Premium materialen met marmer en eiken afwerkingen',
			'accent'      => 'Afwerking',
			'icon'        => 'diamond',
		],
		[
			'id'          => 'service',
			'number'      => '04',
			'title'       => 'Premium Service & Montage',
			'description' => 'Van 3D-ontwerp tot vakkundige montage bij u thuis: wij begeleiden en ontzorgen u volledig door het gehele proces.',
			'image'       => kc_theme_img( 'why/why-service.webp' ),
			'image_alt'   => 'Vakkundig gemonteerde keuken bij de klant thuis',
			'accent'      => 'Ontzorging',
			'icon'        => 'people',
		],
	];

	$rows    = kc_cms_repeater( 'home_why_features' );
	$pillars = [];
	$i       = 1;
	foreach ( $rows as $row ) {
		$title = kc_home_row_text( $row, 'title' );
		if ( '' === $title ) {
			continue;
		}
		$def = $pillars_default[ $i - 1 ] ?? null;
		$pillars[] = [
			'id'          => sanitize_title( $title ),
			'number'      => kc_home_row_text( $row, 'number', sprintf( '%02d', $i ) ),
			'title'       => $title,
			'description' => kc_home_row_text( $row, 'description', $def['description'] ?? '' ),
			'image'       => kc_cms_image_url( $row['image'] ?? null, $def['image'] ?? '' ),
			'image_alt'   => kc_home_row_text( $row, 'image_alt', $title ),
			'accent'      => kc_home_row_text( $row, 'accent', $def['accent'] ?? '' ),
			'icon'        => kc_home_row_text( $row, 'icon', $def['icon'] ?? 'settings' ),
		];
		++$i;
	}

	return [
		'eyebrow'    => kc_cms_text( 'home_why_eyebrow', 'option', 'Onze belofte' ),
		'heading'    => kc_cms_text( 'home_why_heading', 'option', 'Waarom Kiest U' ),
		'heading_em' => kc_cms_text( 'home_why_heading_em', 'option', 'Voor Ons?' ),
		'lede'       => kc_cms_text( 'home_why_lede', 'option', 'Vier beloftes die elke ontmoeting, elk ontwerp en elke montage dragen.' ),
		'pillars'    => $pillars ?: $pillars_default,
	];
}

/**
 * Journey teaser copy + CTA (interactive hotspots remain PHP defaults).
 *
 * @return array{eyebrow:string,heading:string,heading_em:string,lede:string,cta_label:string,cta_url:string}
 */
function kc_home_journey_data(): array {
	return [
		'eyebrow'     => kc_cms_text( 'home_journey_eyebrow', 'option', 'De beleving' ),
		'heading'     => kc_cms_text( 'home_journey_heading', 'option', 'Een showroom die naar u toe komt' ),
		'heading_em'  => kc_cms_text( 'home_journey_heading_em', 'option', '' ),
		'lede'        => kc_cms_text( 'home_journey_lede', 'option', 'Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm. Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog voordat u onze showroom bezoekt.' ),
		'cta_label'   => kc_cms_text( 'home_journey_cta_label', 'option', 'Start uw ontwerp' ),
		'cta_url'     => kc_cms_normalize_configurator_cta_url( kc_cms_text( 'home_journey_cta_url', 'option', '' ) ),
	];
}

/**
 * Showcase / showroom section.
 *
 * @return array{eyebrow:string,title_1:string,title_2:string,copy:string,copy_secondary:string,cta_label:string,cta_url:string,cta_secondary_label:string,cta_secondary_url:string,highlights:list<string>,stats:list<array{number:string,label:string,sub:string}>}
 */
function kc_home_showcase_data(): array {
	$stats_default = [
		[ 'number' => '45+', 'label' => 'Jaar ervaring', 'sub' => 'Premium vakmanschap' ],
		[ 'number' => '1978', 'label' => 'Opgericht', 'sub' => 'Showroom Utrecht' ],
		[ 'number' => '1000+', 'label' => 'Combinaties', 'sub' => 'Materiaal & afwerking' ],
	];
	$stats_rows = kc_cms_repeater( 'home_showcase_stats' );
	$stats      = [];
	foreach ( $stats_rows as $row ) {
		$number = kc_home_row_text( $row, 'number' );
		if ( '' === $number ) {
			continue;
		}
		$stats[] = [
			'number' => $number,
			'label'  => kc_home_row_text( $row, 'label' ),
			'sub'    => kc_home_row_text( $row, 'sub' ),
		];
	}

	$highlights_raw = kc_cms_text( 'home_showcase_highlights', 'option', '' );
	$highlights     = $highlights_raw
		? kc_cms_lines( $highlights_raw, [] )
		: [ 'A-merken inbouwapparatuur', 'werkbladen', 'keukenkranen', 'keukenaccessoires' ];

	return [
		'eyebrow'             => kc_cms_text( 'home_showcase_eyebrow', 'option', 'Sinds 1978 · Utrecht Showroom' ),
		'title_1'             => kc_cms_text( 'home_showcase_title_1', 'option', 'Keuken-Centrum' ),
		'title_2'             => kc_cms_text( 'home_showcase_title_2', 'option', 'Utrecht' ),
		'copy'                => kc_cms_text( 'home_showcase_copy', 'option', 'De talloze keukenopstellingen in onze showroom geven u genoeg inspiratie. Doordat we met meerdere keukenfabrikanten werken, bieden we een groot en breed assortiment aan. Zo is er voor elk budget een droomkeuken.' ),
		'copy_secondary'      => kc_cms_text( 'home_showcase_copy_secondary', 'option', 'tot verlichting: alles wat met keukens te maken heeft, is bij ons verkrijgbaar.' ),
		'cta_label'           => kc_cms_text( 'home_showcase_cta_label', 'option', 'Plan showroombezoek' ),
		'cta_url'             => kc_cms_text( 'home_showcase_cta_url', 'option', home_url( '/consultation/' ) ),
		'cta_secondary_label' => kc_cms_text( 'home_showcase_cta_secondary_label', 'option', 'Bekijk merken' ),
		'cta_secondary_url'   => kc_cms_normalize_configurator_cta_url( kc_cms_text( 'home_showcase_cta_secondary_url', 'option', '' ) ),
		'highlights'          => $highlights,
		'stats'               => $stats ?: $stats_default,
	];
}

/**
 * Experience cards.
 *
 * @return array{eyebrow:string,heading:string,heading_em:string,lede:string,cards:list<array<string,mixed>>}
 */
function kc_home_experience_data(): array {
	$cards_default = [
		[
			'number'      => '01',
			'featured'    => true,
			'tag'         => 'Signature collectie',
			'kicker'      => 'Design Collectie',
			'title'       => 'Design Keukens',
			'description' => 'Architecturale keukens met verfijnde materialen en tijdloze verhoudingen.',
			'image'       => kc_theme_img( 'experience/Design_keukens.webp' ) ?: kc_theme_img( 'experience/design.webp' ),
			'href'        => get_post_type_archive_link( 'kitchen_brand' ) ?: home_url( '/keukens' ),
		],
		[
			'number'      => '02',
			'featured'    => false,
			'tag'         => 'Ontdek de collectie',
			'kicker'      => 'Modern Wonen',
			'title'       => 'Moderne Keukens',
			'description' => 'Hedendaags wonen met slanke lijnen, warme texturen en intelligente indeling.',
			'image'       => kc_theme_img( 'experience/Modern_keukens.webp' ) ?: kc_theme_img( 'experience/modern.webp' ),
			'href'        => home_url( '/#collections' ),
		],
		[
			'number'      => '03',
			'featured'    => false,
			'tag'         => 'Ontdek de collectie',
			'kicker'      => 'Slim Budget',
			'title'       => 'Keukens voor elke prijs',
			'description' => 'Topkwaliteit en persoonlijk advies voor elk budget, zonder compromis.',
			'image'       => kc_theme_img( 'experience/Keukens_voor_elke_prijs.webp' ) ?: kc_theme_img( 'experience/budget.webp' ),
			'href'        => home_url( '/consultation/' ),
		],
	];

	$rows  = kc_cms_repeater( 'home_experience_cards' );
	$cards = [];
	$i     = 1;
	foreach ( $rows as $row ) {
		$title = kc_home_row_text( $row, 'title' );
		if ( '' === $title ) {
			continue;
		}
		$def     = $cards_default[ $i - 1 ] ?? null;
		$cards[] = [
			'number'      => kc_home_row_text( $row, 'number', sprintf( '%02d', $i ) ),
			'featured'    => ! empty( $row['featured'] ) || ( 1 === $i && ! isset( $row['featured'] ) ),
			'tag'         => kc_home_row_text( $row, 'tag', $def['tag'] ?? 'Ontdek de collectie' ),
			'kicker'      => kc_home_row_text( $row, 'kicker', $def['kicker'] ?? '' ),
			'title'       => $title,
			'description' => kc_home_row_text( $row, 'description', $def['description'] ?? '' ),
			'image'       => kc_cms_image_url( $row['image'] ?? null, $def['image'] ?? '' ),
			'href'        => kc_home_row_text( $row, 'url', $def['href'] ?? home_url( '/keukens/' ) ),
		];
		++$i;
	}

	return [
		'eyebrow'    => kc_cms_text( 'home_experience_eyebrow', 'option', 'Keukeninspiratie' ),
		'heading'    => kc_cms_text( 'home_experience_heading', 'option', 'Eén plaats voor' ),
		'heading_em' => kc_cms_text( 'home_experience_heading_em', 'option', 'al uw wensen' ),
		'lede'       => kc_cms_text( 'home_experience_lede', 'option', 'Van architecturaal design tot slimme luxe: ontdek een keukenwereld die zorgvuldig wordt afgestemd op uw ruimte, smaak en manier van leven.' ),
		'cards'      => $cards ?: $cards_default,
	];
}

/**
 * Collections gallery.
 *
 * @return array{eyebrow:string,heading:string,heading_em:string,lede:string,cta_label:string,cta_url:string,items:list<array<string,mixed>>}
 */
function kc_home_collections_data(): array {
	// Prefer bundled theme assets — remote keuken-centrum.nl/uploads URLs 404.
	$defaults = [
		[
			'number'      => '01',
			'label'       => 'MODERNE COLLECTIE',
			'title'       => 'Modern Wonen',
			'descriptor'  => 'Architecturaal · Minimaal · Tijdloos',
			'description' => 'Slanke lijnen en functionele elegantie voor het hedendaagse leven.',
			'image'       => kc_theme_img( 'collections/modern-base.webp' ) ?: kc_theme_img( 'collections/modern.jpg' ),
		],
		[
			'number'      => '02',
			'label'       => 'KLASSIEKE COLLECTIE',
			'title'       => 'Klassieke Elegantie',
			'descriptor'  => 'Warm · Elegant · Verfijnd',
			'description' => 'Tijdloze proporties en rijke materialen die generaties meegaan.',
			'image'       => kc_theme_img( 'collections/klassiek-base.webp' ) ?: kc_theme_img( 'collections/klassiek.jpg' ),
		],
		[
			'number'      => '03',
			'label'       => 'LANDELIJKE COLLECTIE',
			'title'       => 'Landelijk Erfgoed',
			'descriptor'  => 'Natuurlijk · Authentiek · Uitnodigend',
			'description' => 'Warme texturen en ambachtelijke details voor een thuis gevoel.',
			'image'       => kc_theme_img( 'collections/landelijk-base.webp' ) ?: kc_theme_img( 'collections/landelijk.jpg' ),
		],
		[
			'number'      => '04',
			'label'       => 'INDUSTRIËLE COLLECTIE',
			'title'       => 'Industrieel Atelier',
			'descriptor'  => 'Krachtig · Karaktervol · Hedendaags',
			'description' => 'Rauwe materialen en grafische vormen met een eigenzinnig karakter.',
			'image'       => kc_theme_img( 'collections/industrieel-base.webp' ) ?: kc_theme_img( 'collections/industrieel.jpg' ),
		],
	];

	$rows  = kc_cms_repeater( 'home_collections' );
	$items = [];
	$i     = 1;
	foreach ( $rows as $row ) {
		if ( isset( $row['enabled'] ) && ! $row['enabled'] ) {
			continue;
		}
		$title = kc_home_row_text( $row, 'title' );
		if ( '' === $title ) {
			continue;
		}
		$def     = $defaults[ $i - 1 ] ?? null;
		$cms_img = kc_cms_image_url( $row['image'] ?? null, '' );
		// Ignore dead remote uploads host; keep Media Library / theme URLs.
		if ( $cms_img && preg_match( '#keuken-centrum\.nl/wp-content/uploads#i', $cms_img ) ) {
			$cms_img = '';
		}
		$items[] = [
			'number'      => kc_home_row_text( $row, 'number', sprintf( '%02d', $i ) ),
			'label'       => kc_home_row_text( $row, 'label', $def['label'] ?? '' ),
			'title'       => $title,
			'descriptor'  => kc_home_row_text( $row, 'descriptor', $def['descriptor'] ?? '' ),
			'description' => kc_home_row_text( $row, 'description', $def['description'] ?? '' ),
			'image'       => $cms_img ?: ( $def['image'] ?? '' ),
			'url'         => kc_home_row_text( $row, 'url', home_url( '/#showroom' ) ),
		];
		++$i;
	}

	return [
		'eyebrow'    => kc_cms_text( 'home_collections_eyebrow', 'option', 'Onze Collecties' ),
		'heading'    => kc_cms_text( 'home_collections_heading', 'option', 'Ontdek uw' ),
		'heading_em' => kc_cms_text( 'home_collections_heading_em', 'option', 'Droomkeuken' ),
		'lede'       => kc_cms_text( 'home_collections_lede', 'option', 'Vier zorgvuldig samengestelde stijlwerelden, elk met een unieke architectonische taal van materiaal, compositie en sfeer.' ),
		'cta_label'  => kc_cms_text( 'home_collections_cta_label', 'option', 'Alle keukens bekijken' ),
		'cta_url'    => kc_cms_text( 'home_collections_cta_url', 'option', get_post_type_archive_link( 'kitchen_brand' ) ?: home_url( '/keukens' ) ),
		'items'      => $items ?: $defaults,
	];
}

/**
 * Process steps.
 *
 * @return array{eyebrow:string,heading:string,heading_em:string,lede:string,cta_label:string,cta_url:string,steps:list<array<string,mixed>>}
 */
function kc_home_process_data(): array {
	$steps_default = [
		[ 'number' => '01', 'title' => 'Kies merk', 'copy' => 'Selecteer uit de mooiste keukenmerken van Europa', 'icon' => 'shop' ],
		[ 'number' => '02', 'title' => 'Kies stijl', 'copy' => 'Bepaal de architectonische uitstraling', 'icon' => 'brush' ],
		[ 'number' => '03', 'title' => 'Samenstellen', 'copy' => 'Personaliseer elk materiaal en iedere afwerking', 'icon' => 'layers' ],
		[ 'number' => '04', 'title' => 'Moodboard', 'copy' => 'Ontvang uw persoonlijk ontwerpvoorstel', 'icon' => 'gallery' ],
		[ 'number' => '05', 'title' => 'Consultatie', 'copy' => 'Bespreek alles met uw persoonlijke ontwerpadviseur', 'icon' => 'people' ],
	];

	$rows  = kc_cms_repeater( 'home_process_steps' );
	$steps = [];
	$i     = 1;
	foreach ( $rows as $row ) {
		$title = kc_home_row_text( $row, 'title' );
		if ( '' === $title ) {
			continue;
		}
		$def     = $steps_default[ $i - 1 ] ?? null;
		$steps[] = [
			'number' => kc_home_row_text( $row, 'number', sprintf( '%02d', $i ) ),
			'title'  => $title,
			'copy'   => kc_home_row_text( $row, 'description', $def['copy'] ?? '' ),
			'icon'   => kc_home_row_text( $row, 'icon', $def['icon'] ?? 'shop' ),
		];
		++$i;
	}

	return [
		'eyebrow'    => kc_cms_text( 'home_process_eyebrow', 'option', 'Het proces' ),
		'heading'    => kc_cms_text( 'home_process_heading', 'option', 'Van concept tot' ),
		'heading_em' => kc_cms_text( 'home_process_heading_em', 'option', 'creatie' ),
		'lede'       => kc_cms_text( 'home_process_lede', 'option', 'Vijf zorgvuldig uitgedachte stappen naar uw droomkeuken.' ),
		'cta_label'  => kc_cms_text( 'home_process_cta_label', 'option', 'Start configurator' ),
		'cta_url'    => kc_cms_normalize_configurator_cta_url( kc_cms_text( 'home_process_cta_url', 'option', '' ) ),
		'steps'      => $steps ?: $steps_default,
	];
}

/**
 * Final CTA.
 *
 * @return array{eyebrow:string,heading:string,heading_em:string,lede:string,primary_label:string,primary_url:string,secondary_label:string,secondary_url:string,actions:list<array<string,mixed>>}
 */
function kc_home_final_cta_data(): array {
	$phone = (string) kc_get_option( 'contact_phone', '030 241 5122' );
	$email = (string) kc_get_option( 'contact_email', 'info@keuken-centrum.nl' );

	$actions_default = [
		[
			'number'      => '01',
			'title'       => 'Plan showroombezoek',
			'description' => 'Bezoek onze showroom in Utrecht en bespreek uw keukenwensen met een specialist die met u meedenkt.',
			'href'        => home_url( '/consultation/' ),
			'pill'        => 'Maak afspraak',
			'icon'        => 'house',
		],
		[
			'number'      => '02',
			'title'       => 'Bel direct met een adviseur',
			'description' => $phone,
			'href'        => 'tel:' . preg_replace( '/[^0-9+]/', '', $phone ),
			'pill'        => 'Bel nu',
			'icon'        => 'phone',
		],
		[
			'number'      => '03',
			'title'       => 'Vraag een voorstel aan',
			'description' => 'Deel uw wensen of bestaande offerte en ontvang een zorgvuldig voorbereid voorstel.',
			'href'        => 'mailto:' . $email,
			'pill'        => 'Stuur e-mail',
			'icon'        => 'mail',
		],
	];

	$rows    = kc_cms_repeater( 'home_final_cta_actions' );
	$actions = [];
	$i       = 1;
	foreach ( $rows as $row ) {
		$title = kc_home_row_text( $row, 'title' );
		if ( '' === $title ) {
			continue;
		}
		$def       = $actions_default[ $i - 1 ] ?? null;
		$actions[] = [
			'number'      => kc_home_row_text( $row, 'number', sprintf( '%02d', $i ) ),
			'title'       => $title,
			'description' => kc_home_row_text( $row, 'description', $def['description'] ?? '' ),
			'href'        => kc_home_row_text( $row, 'url', $def['href'] ?? home_url( '/consultation/' ) ),
			'pill'        => kc_home_row_text( $row, 'pill', $def['pill'] ?? '' ),
			'icon'        => kc_home_row_text( $row, 'icon', $def['icon'] ?? 'house' ),
		];
		++$i;
	}

	return [
		'eyebrow'          => kc_cms_text( 'home_final_cta_eyebrow', 'option', 'Begin uw reis' ),
		'heading'          => kc_cms_text( 'home_final_cta_heading', 'option', 'Klaar voor uw' ),
		'heading_em'       => kc_cms_text( 'home_final_cta_heading_em', 'option', 'droomkeuken?' ),
		'lede'             => kc_cms_text( 'home_final_cta_lede', 'option', 'Van eerste inspiratie tot installatie: wij begeleiden u persoonlijk naar een keuken die klopt in stijl, functie en afwerking.' ),
		'primary_label'    => kc_cms_text( 'home_final_cta_primary_label', 'option', 'Boek consultatie' ),
		'primary_url'      => kc_cms_text( 'home_final_cta_primary_url', 'option', home_url( '/consultation/' ) ),
		'secondary_label'  => kc_cms_text( 'home_final_cta_secondary_label', 'option', 'Start configurator' ),
		'secondary_url'    => kc_cms_normalize_configurator_cta_url( kc_cms_text( 'home_final_cta_secondary_url', 'option', '' ) ),
		'actions'          => $actions ?: $actions_default,
	];
}

/**
 * Homepage consultation strip (not standalone /consultation/ page).
 *
 * @return array{eyebrow:string,heading:string,heading_em:string,lede:string,form_eyebrow:string,form_title:string,cta_label:string}
 */
function kc_home_consultation_data(): array {
	return [
		'eyebrow'       => kc_cms_text( 'home_consultation_eyebrow', 'option', 'Persoonlijk Ontwerpgesprek' ),
		'heading'       => kc_cms_text( 'home_consultation_heading', 'option', 'Boek uw persoonlijk' ),
		'heading_em'    => kc_cms_text( 'home_consultation_heading_em', 'option', 'ontwerpconsult.' ),
		'lede'          => kc_cms_text( 'home_consultation_lede', 'option', 'Neem uw eerste keuzes mee naar de showroom in Utrecht en bespreek ze met een adviseur die materiaal, routing, apparatuur en budget zorgvuldig met u doorneemt.' ),
		'form_eyebrow'  => kc_cms_text( 'home_consultation_form_eyebrow', 'option', 'Consultatie aanvraag' ),
		'form_title'    => kc_cms_text( 'home_consultation_form_title', 'option', 'Vertel ons kort wat u wilt bespreken.' ),
		'cta_label'     => kc_cms_text( 'home_consultation_cta_label', 'option', (string) kc_get_option( 'consultation_cta_label', 'Plan consultatie' ) ),
	];
}
