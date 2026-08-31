<?php
/**
 * Consultation page data — React defaults + ACF CMS overrides.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_consultation_page_data(): array {
	$page_id = get_queried_object_id();
	if ( ! $page_id ) {
		$page = get_page_by_path( 'consultation' );
		$page_id = $page ? (int) $page->ID : 0;
	}

	$default_image = kc_theme_img( 'consultation/showroom.webp' );
	$hero_image    = function_exists( 'kc_cms_image_url' )
		? kc_cms_image_url( kc_get_field_value( 'kc_cons_hero_image', $page_id, null ), $default_image )
		: $default_image;

	$features_raw = kc_cms_text( 'kc_cons_features', $page_id, '' );
	$features     = $features_raw
		? kc_cms_lines( $features_raw )
		: [
			__( 'Persoonlijk ontwerpadvies', 'keuken-centrum' ),
			__( 'Flexibele afspraakplanning', 'keuken-centrum' ),
			__( 'Showroom of online consultatie', 'keuken-centrum' ),
			__( '0 details samengesteld', 'keuken-centrum' ),
		];

	$showrooms_raw = kc_cms_text( 'kc_cons_showrooms', $page_id, '' );
	$budgets_raw   = kc_cms_text( 'kc_cons_budgets', $page_id, '' );

	return [
		'meta' => [
			'title'       => kc_cms_text( 'kc_seo_title', $page_id, __( 'Plan een consultatie · Keuken-Centrum Utrecht', 'keuken-centrum' ) ),
			'description' => kc_cms_text( 'kc_seo_description', $page_id, __( 'Plan een vrijblijvende showroom- of online consultatie bij Keuken-Centrum Utrecht. Vul het formulier in en ontvang binnen 24 uur persoonlijk advies.', 'keuken-centrum' ) ),
			'og_image'    => function_exists( 'kc_cms_image_url' )
				? kc_cms_image_url( kc_get_field_value( 'kc_og_image', $page_id, null ), $hero_image )
				: $hero_image,
		],
		'hero' => [
			'image'    => $hero_image,
			'eyebrow'  => kc_cms_text( 'kc_cons_hero_eyebrow', $page_id, __( 'Ontwerpconsultatie', 'keuken-centrum' ) ),
			'title'    => kc_cms_text( 'kc_cons_hero_title', $page_id, __( 'Uw keukenvoorstel', 'keuken-centrum' ) ),
			'lede'     => kc_cms_text( 'kc_cons_hero_lede', $page_id, __( 'Uw configuratie is klaar voor de laatste bespreking. Plan uw afspraak en ontvang een verfijnd ontwerpvoorstel dat aansluit op uw gekozen materialen en stijl.', 'keuken-centrum' ) ),
			'features' => $features,
		],
		'preview' => [
			'overline'    => kc_cms_text( 'kc_cons_preview_overline', $page_id, __( 'Stap 05 laatste controle', 'keuken-centrum' ) ),
			'title'       => kc_cms_text( 'kc_cons_preview_title', $page_id, __( 'Uw keukenconsultatie', 'keuken-centrum' ) ),
			'description' => kc_cms_text( 'kc_cons_preview_desc', $page_id, __( 'Controleer uw merk, stijl en geselecteerde materialen. Alles hieronder vormt de basis voor uw persoonlijke ontwerpgesprek.', 'keuken-centrum' ) ),
			'image'       => $hero_image,
			'footerNote'  => kc_cms_text( 'kc_cons_preview_footer', $page_id, __( 'Met het formulier hieronder verstuurt u uw keukenvoorstel naar ons consultatieteam.', 'keuken-centrum' ) ),
			'details'     => [
				[ 'label' => __( 'Merk', 'keuken-centrum' ), 'value' => __( 'Niet gekozen', 'keuken-centrum' ) ],
				[ 'label' => __( 'Stijl', 'keuken-centrum' ), 'value' => __( 'Niet gekozen', 'keuken-centrum' ) ],
				[ 'label' => __( 'Samengestelde onderdelen', 'keuken-centrum' ), 'value' => __( '0 gekozen details', 'keuken-centrum' ) ],
				[ 'label' => __( 'Google beoordeling', 'keuken-centrum' ), 'value' => __( '9,8 · 125 ervaringen', 'keuken-centrum' ) ],
			],
		],
		'form' => [
			'eyebrow'      => kc_cms_text( 'kc_cons_form_eyebrow', $page_id, __( 'Stap 05 van 05', 'keuken-centrum' ) ),
			'title'        => kc_cms_text( 'kc_cons_form_title', $page_id, __( 'Plan een consultatie', 'keuken-centrum' ) ),
			'lede'         => kc_cms_text( 'kc_cons_form_lede', $page_id, __( 'Vul het formulier in en uw persoonlijke ontwerpadviseur neemt binnen 24 uur contact met u op om uw project verder uit te werken.', 'keuken-centrum' ) ),
			'submit_label' => kc_cms_text( 'kc_cons_submit_label', $page_id, __( 'Consultatie plannen', 'keuken-centrum' ) ),
			'privacy'      => kc_cms_text( 'kc_cons_privacy', $page_id, __( 'Uw gegevens worden volledig discreet behandeld. Wij delen uw informatie nooit met derden.', 'keuken-centrum' ) ),
		],
		'success' => [
			'eyebrow' => kc_cms_text( 'kc_cons_success_eyebrow', $page_id, __( 'Consultatie aangevraagd', 'keuken-centrum' ) ),
			'title'   => kc_cms_text( 'kc_cons_success_title', $page_id, __( 'Wij kijken ernaar uit uw droomkeuken te ontwerpen', 'keuken-centrum' ) ),
			'lede'    => kc_cms_text( 'kc_cons_success_lede', $page_id, __( 'Dank u, {name}. Uw persoonlijke ontwerpadviseur neemt binnen 24 uur contact met u op om de afspraak te bevestigen.', 'keuken-centrum' ) ),
		],
		'showrooms' => $showrooms_raw ? kc_cms_lines( $showrooms_raw, kc_consultation_showrooms() ) : kc_consultation_showrooms(),
		'budgets'   => $budgets_raw ? kc_cms_lines( $budgets_raw, kc_consultation_budgets() ) : kc_consultation_budgets(),
	];
}
