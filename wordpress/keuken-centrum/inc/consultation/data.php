<?php
/**
 * Consultation page data (React /consultation defaults without configurator).
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
	return [
		'meta' => [
			'title'       => __( 'Plan een consultatie · Keuken-Centrum Utrecht', 'keuken-centrum' ),
			'description' => __( 'Plan een vrijblijvende showroom- of online consultatie bij Keuken-Centrum Utrecht. Vul het formulier in en ontvang binnen 24 uur persoonlijk advies.', 'keuken-centrum' ),
		],
		'hero' => [
			'image'   => kc_theme_img( 'consultation/showroom.webp' ),
			'eyebrow' => __( 'Ontwerpconsultatie', 'keuken-centrum' ),
			'title'   => __( 'Uw keukenvoorstel', 'keuken-centrum' ),
			'lede'    => __( 'Uw configuratie is klaar voor de laatste bespreking. Plan uw afspraak en ontvang een verfijnd ontwerpvoorstel dat aansluit op uw gekozen materialen en stijl.', 'keuken-centrum' ),
			'features'=> [
				__( 'Persoonlijk ontwerpadvies', 'keuken-centrum' ),
				__( 'Flexibele afspraakplanning', 'keuken-centrum' ),
				__( 'Showroom of online consultatie', 'keuken-centrum' ),
				__( '0 details samengesteld', 'keuken-centrum' ),
			],
		],
		'preview' => [
			'overline'    => __( 'Stap 05 laatste controle', 'keuken-centrum' ),
			'title'       => __( 'Uw keukenconsultatie', 'keuken-centrum' ),
			'description' => __( 'Controleer uw merk, stijl, budget en geselecteerde materialen. Alles hieronder vormt de basis voor uw persoonlijke ontwerpgesprek.', 'keuken-centrum' ),
			'image'       => kc_theme_img( 'consultation/showroom.webp' ),
			'footerNote'  => __( 'Met het formulier hieronder verstuurt u uw keukenvoorstel naar ons consultatieteam.', 'keuken-centrum' ),
			'details'     => [
				[ 'label' => __( 'Merk', 'keuken-centrum' ), 'value' => __( 'Niet gekozen', 'keuken-centrum' ) ],
				[ 'label' => __( 'Stijl', 'keuken-centrum' ), 'value' => __( 'Niet gekozen', 'keuken-centrum' ) ],
				[ 'label' => __( 'Samengestelde onderdelen', 'keuken-centrum' ), 'value' => __( '0 gekozen details', 'keuken-centrum' ) ],
				[ 'label' => __( 'Budget', 'keuken-centrum' ), 'value' => __( 'Kies uw budget', 'keuken-centrum' ) ],
			],
		],
		'showrooms' => kc_consultation_showrooms(),
		'budgets'   => kc_consultation_budgets(),
	];
}
