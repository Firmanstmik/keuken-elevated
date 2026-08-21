<?php
/**
 * Showroom Keukens page data (React showroomKeukens).
 *
 * Remote React uploads return 404 — theme-local authentic showroom/kitchen
 * imagery is used (ACCEPTED ASSET LIMITATION).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_showroom_keukens_page_data(): array {
	$phone      = (string) kc_get_option( 'contact_phone', '030 241 5122' );
	$phone_href = 'tel:+' . preg_replace( '/\D+/', '', $phone );
	$page_id    = get_queried_object_id();
	if ( ! $page_id ) {
		$page    = get_page_by_path( 'showroom-keukens' );
		$page_id = $page ? (int) $page->ID : 0;
	}

	$default_hero = kc_theme_img( 'showroom-keukens/hero.webp' );
	$hero_image   = function_exists( 'kc_cms_image_url' )
		? kc_cms_image_url( kc_get_field_value( 'kc_sr_hero_image', $page_id, null ), $default_hero )
		: $default_hero;

	$intro_raw = function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_intro_paragraphs', $page_id, '' ) : '';
	$intro_paragraphs = $intro_raw
		? array_values( array_filter( array_map( 'trim', preg_split( '/\n\s*\n/', $intro_raw ) ?: [] ) ) )
		: [
			__( 'Wij begrijpen het belang van investeren in hoogwaardige keukenapparatuur en -functies, en daarom bieden wij een selectie van eersteklas keukens aan tegen ongelooflijk betaalbare prijzen.', 'keuken-centrum' ),
			__( 'Ons team van experts is toegewijd aan het leveren van het best mogelijke product en service. Wij geloven dat niemand kwaliteit zou moeten opofferen voor betaalbaarheid. Daarom zijn wij er trots op een breed scala aan keuzemogelijkheden te bieden die zowel functionaliteit als stijl bevatten, voor een prijs die uw portemonnee niet breekt.', 'keuken-centrum' ),
			__( 'Wij nodigen u graag uit om een kijkje te nemen in onze collectie en zelf te zien welke ongelofelijke waarde wij te bieden hebben. Met onze toewijding aan klanttevredenheid en onverslaanbare prijzen, zult u geen betere keuze vinden voor uw keukenbehoeften.', 'keuken-centrum' ),
		];

	$gallery = [
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-1.webp' ),
			'alt'   => __( 'Leicht Bossa showroomkeuken in Utrecht', 'keuken-centrum' ),
			'label' => 'Leicht Bossa',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-2.webp' ),
			'alt'   => __( 'Aluro keukenopstelling in de showroom', 'keuken-centrum' ),
			'label' => 'Aluro',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-3.webp' ),
			'alt'   => __( 'Leicht Kyoto showroomkeuken', 'keuken-centrum' ),
			'label' => 'Kyoto',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-4.webp' ),
			'alt'   => __( 'Leicht Japandi keuken in de showroom', 'keuken-centrum' ),
			'label' => 'Japandi',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-5.webp' ),
			'alt'   => __( 'Moderne showroomkeuken met lichte houtaccenten', 'keuken-centrum' ),
			'label' => 'Modern',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-6.webp' ),
			'alt'   => __( 'Showroomkeuken met matte fronten', 'keuken-centrum' ),
			'label' => 'Matte fronts',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-7.webp' ),
			'alt'   => __( 'Showroomopstelling Keuken-Centrum Utrecht', 'keuken-centrum' ),
			'label' => 'Showroom',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-8.webp' ),
			'alt'   => __( 'Premium keukenopstelling in Utrecht', 'keuken-centrum' ),
			'label' => 'Premium',
		],
		[
			'src'   => kc_theme_img( 'showroom-keukens/gallery-9.webp' ),
			'alt'   => __( 'Detail van een showroomkeuken', 'keuken-centrum' ),
			'label' => 'Detail',
		],
	];

	foreach ( $gallery as $i => $item ) {
		$field = 'kc_sr_gallery_' . ( $i + 1 );
		$url   = function_exists( 'kc_cms_image_url' )
			? kc_cms_image_url( kc_get_field_value( $field, $page_id, null ), '' )
			: '';
		if ( $url ) {
			$gallery[ $i ]['src'] = $url;
		}
	}

	$primary_href = function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_cta_primary_url', $page_id, '' ) : '';
	if ( '' === $primary_href && function_exists( 'kc_consultation_url' ) ) {
		$primary_href = kc_consultation_url();
	}

	return [
		'meta'     => [
			'title'       => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_seo_title', $page_id, __( 'Showroom keukens · Bezoek onze showroom in Utrecht | Keuken-Centrum', 'keuken-centrum' ) ) : __( 'Showroom keukens · Bezoek onze showroom in Utrecht | Keuken-Centrum', 'keuken-centrum' ),
			'description' => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_seo_description', $page_id, __( 'Bezoek de showroom van Keuken-Centrum Utrecht op Zonnebaan 8. Ontdek eersteklas keukens, werkbladen en A-merk apparatuur tegen betaalbare prijzen, inclusief persoonlijk advies.', 'keuken-centrum' ) ) : __( 'Bezoek de showroom van Keuken-Centrum Utrecht op Zonnebaan 8. Ontdek eersteklas keukens, werkbladen en A-merk apparatuur tegen betaalbare prijzen, inclusief persoonlijk advies.', 'keuken-centrum' ),
			'og_image'    => function_exists( 'kc_cms_image_url' )
				? kc_cms_image_url( kc_get_field_value( 'kc_og_image', $page_id, null ), $hero_image )
				: $hero_image,
		],
		'hero'     => [
			'image'     => $hero_image,
			'eyebrow'   => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_hero_eyebrow', $page_id, __( 'Showroom Utrecht', 'keuken-centrum' ) ) : __( 'Showroom Utrecht', 'keuken-centrum' ),
			'title'     => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_hero_title', $page_id, __( 'Showroom', 'keuken-centrum' ) ) : __( 'Showroom', 'keuken-centrum' ),
			'highlight' => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_hero_highlight', $page_id, __( 'keukens', 'keuken-centrum' ) ) : __( 'keukens', 'keuken-centrum' ),
			'subtitle'  => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_hero_subtitle', $page_id, __( 'Kom langs op de Zonnebaan en ervaar eersteklas keukens, materialen en apparatuur live tegen ongelooflijk betaalbare prijzen.', 'keuken-centrum' ) ) : __( 'Kom langs op de Zonnebaan en ervaar eersteklas keukens, materialen en apparatuur live tegen ongelooflijk betaalbare prijzen.', 'keuken-centrum' ),
			'primary'   => [
				'label' => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_cta_primary_label', $page_id, __( 'Plan showroombezoek', 'keuken-centrum' ) ) : __( 'Plan showroombezoek', 'keuken-centrum' ),
				'href'  => $primary_href ?: kc_consultation_url(),
			],
			'secondary' => [
				'label' => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_cta_secondary_label', $page_id, sprintf( __( 'Bel %s', 'keuken-centrum' ), $phone ) ) : sprintf( __( 'Bel %s', 'keuken-centrum' ), $phone ),
				'href'  => $phone_href,
			],
		],
		'intro'    => [
			'eyebrow'    => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_intro_eyebrow', $page_id, __( 'De showroom', 'keuken-centrum' ) ) : __( 'De showroom', 'keuken-centrum' ),
			'title'      => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_intro_title', $page_id, __( 'Eersteklas keukens,', 'keuken-centrum' ) ) : __( 'Eersteklas keukens,', 'keuken-centrum' ),
			'highlight'  => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_intro_highlight', $page_id, __( 'zonder de prijs', 'keuken-centrum' ) ) : __( 'zonder de prijs', 'keuken-centrum' ),
			'paragraphs' => $intro_paragraphs,
			'cta'        => [
				'label' => __( 'Contact opnemen', 'keuken-centrum' ),
				'href'  => home_url( '/contact/' ),
			],
		],
		'gallery'  => $gallery,
		'services' => [
			[
				'title'       => __( 'Keukenbladen', 'keuken-centrum' ),
				'href'        => home_url( '/keukenbladen/' ),
				'image'       => kc_theme_img( 'showroom-keukens/service-keukenbladen.webp' ),
				'description' => __( 'Silestone, Dekton, Neolith en Sensa: duurzame, stijlvolle werkbladen die uw keuken naar een hoger niveau tillen.', 'keuken-centrum' ),
			],
			[
				'title'       => __( 'Keukens', 'keuken-centrum' ),
				'href'        => home_url( '/keukens/' ),
				'image'       => kc_theme_img( 'showroom-keukens/service-keukens.webp' ),
				'description' => __( 'Van AI Küchen tot Leicht, Nobilia, Zampieri en Cucinesse. Deze premium merken kunt u live in onze showroom ervaren.', 'keuken-centrum' ),
			],
			[
				'title'       => 'BORA',
				'href'        => home_url( '/apparatuur/werkblad-afzuiging/' ),
				'image'       => kc_theme_img( 'showroom-keukens/service-bora.webp' ),
				'description' => __( 'Koken zonder afzuigkap met krachtige werkblad-afzuiging van BORA: stil, elegant en ruimtebesparend.', 'keuken-centrum' ),
			],
			[
				'title'       => 'Quooker',
				'href'        => home_url( '/apparatuur/quooker/' ),
				'image'       => kc_theme_img( 'showroom-keukens/service-quooker.webp' ),
				'description' => __( 'Direct kokend, koud en bruisend water uit één kraan. Ontdek Quooker in onze showroom.', 'keuken-centrum' ),
			],
		],
		'reasons'  => [
			[
				'title' => __( 'Scherpe prijs', 'keuken-centrum' ),
				'body'  => __( 'Complete keukens voor de scherpste prijs, zonder concessies aan kwaliteit of afwerking.', 'keuken-centrum' ),
			],
			[
				'title' => __( 'Zelf samenstellen', 'keuken-centrum' ),
				'body'  => __( 'Onze keukens zijn naar wens samen te stellen, met de keuze uit A-merkapparatuur.', 'keuken-centrum' ),
			],
			[
				'title' => __( 'Nieuwste trends', 'keuken-centrum' ),
				'body'  => __( 'Onze adviseurs staan voor je klaar in de winkel om je te inspireren en persoonlijk advies te geven.', 'keuken-centrum' ),
			],
			[
				'title' => __( 'Compleet met apparatuur', 'keuken-centrum' ),
				'body'  => __( 'Een keuken waarbij alle keukenapparatuur op elkaar is afgestemd en van goede kwaliteit is.', 'keuken-centrum' ),
			],
		],
		'testimonials' => [
			[
				'quote' => __( 'Ik had eerlijk gezegd nog niet eerder van Leicht keukens gehoord maar toen ik de showroom binnenstapte werd ik al snel enthousiast: prachtige keukens die kwaliteit uitstralen met een gave styling!', 'keuken-centrum' ),
				'name'  => 'Adam',
			],
			[
				'quote' => __( 'Perfect; er werd nergens zo goed met ons mee gedacht als bij Keuken Centrum Utrecht. Direct een scherpe prijs, ipv te moeten onderhandelen. Dankzij Hans hebben wij nu een droomkeuken!', 'keuken-centrum' ),
				'name'  => 'Mila',
			],
			[
				'quote' => __( 'Goede prijs en snelle levering. Maar veel belangrijker: geduldig en vakkundig personeel! Door een fout aan mijn kant stond de chauffeur op een verkeerd adres, samen met hem snel kunnen oplossen.', 'keuken-centrum' ),
				'name'  => 'Mike',
			],
		],
		'cta'      => [
			'title'          => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_bottom_title', $page_id, __( 'Klaar om de showroom', 'keuken-centrum' ) ) : __( 'Klaar om de showroom', 'keuken-centrum' ),
			'highlight'      => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_bottom_highlight', $page_id, __( 'te bezoeken?', 'keuken-centrum' ) ) : __( 'te bezoeken?', 'keuken-centrum' ),
			'body'           => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_bottom_body', $page_id, __( 'Plan een vrijblijvend showroombezoek of bel ons direct voor persoonlijk advies bij een goede kop koffie.', 'keuken-centrum' ) ) : __( 'Plan een vrijblijvend showroombezoek of bel ons direct voor persoonlijk advies bij een goede kop koffie.', 'keuken-centrum' ),
			'primaryLabel'   => function_exists( 'kc_cms_text' ) ? kc_cms_text( 'kc_sr_cta_primary_label', $page_id, __( 'Plan showroombezoek', 'keuken-centrum' ) ) : __( 'Plan showroombezoek', 'keuken-centrum' ),
			'primaryHref'    => $primary_href ?: kc_consultation_url(),
			'secondaryLabel' => __( 'Contact opnemen', 'keuken-centrum' ),
			'secondaryHref'  => home_url( '/contact/' ),
		],
	];
}
