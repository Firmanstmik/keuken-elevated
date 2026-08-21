<?php
/**
 * Kookplaten category data (React kookplatenPage).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_kookplaten_page_data(): array {
	$phone = (string) kc_get_option( 'contact_phone', '030 241 5122' );

	return [
		'slug'  => 'kookplaten',
		'name'  => __( 'Kookplaten', 'keuken-centrum' ),
		'phone' => $phone,
		'meta'  => [
			'title'       => __( 'Kookplaten · Inductie, keramisch & met afzuiging | Keuken-Centrum', 'keuken-centrum' ),
			'description' => __( 'Kookplaten van Siemens, Miele, Bosch, Gaggenau en meer. Inductie, keramisch, domino-elementen en kookplaten met afzuiging.', 'keuken-centrum' ),
		],
		'hero'  => [
			'image'     => kc_apparatuur_img( 'inductie-kookplaat.webp' ),
			'eyebrow'   => __( 'Kookcomfort', 'keuken-centrum' ),
			'title'     => __( 'Kookplaten', 'keuken-centrum' ),
			'highlight' => __( 'op maat.', 'keuken-centrum' ),
			'subtitle'  => __( 'Inductie, keramisch, domino of met geïntegreerde afzuiging: topmerken inbouwapparatuur voor optimaal kookcomfort in elke keuken.', 'keuken-centrum' ),
			'badges'    => [
				[ 'value' => __( 'Inductie', 'keuken-centrum' ), 'label' => __( 'Snel & veilig', 'keuken-centrum' ) ],
				[ 'value' => __( 'Flex', 'keuken-centrum' ), 'label' => __( 'Zones', 'keuken-centrum' ) ],
				[ 'value' => __( 'Top', 'keuken-centrum' ), 'label' => __( 'Merken', 'keuken-centrum' ) ],
			],
		],
		'intro' => [
			'eyebrow'    => __( 'Inbouw kookplaten', 'keuken-centrum' ),
			'title'      => __( 'De juiste plaat voor uw manier van koken', 'keuken-centrum' ),
			'paragraphs' => [
				__( 'Wij bieden een breed assortiment inbouwapparatuur van bekende merken zoals Bosch, Siemens, Miele, ATAG, Gaggenau, Pelgrim, Neff, AEG, AGA, Falcon en KitchenAid.', 'keuken-centrum' ),
				__( 'Of u nu flexzones, bridge-functies, wokbranders of een kookplaat met geïntegreerde afzuiging zoekt: wij adviseren over vermogen, aansluiting en passend design.', 'keuken-centrum' ),
			],
		],
		'types' => [
			[
				'title' => __( 'Inductie kookplaten', 'keuken-centrum' ),
				'body'  => __( 'Snel, veilig en energiezuinig. Precisie per zone, met modern design in zwart glas of rvs.', 'keuken-centrum' ),
				'image' => kc_apparatuur_img( 'inductie-kookplaat.webp' ),
			],
			[
				'title' => __( 'Keramische kookplaten', 'keuken-centrum' ),
				'body'  => __( 'Klassieke warmte-overdracht met strak glasoppervlak. Bekend, betaalbaar en eenvoudig te onderhouden.', 'keuken-centrum' ),
				'image' => kc_apparatuur_img( 'keramisch.webp' ),
			],
			[
				'title' => __( 'Domino elementen', 'keuken-centrum' ),
				'body'  => __( 'Modulaire zones om inductie, teppanyaki, wok of grill te combineren tot een persoonlijk kooklandschap.', 'keuken-centrum' ),
				'image' => kc_apparatuur_img( 'domino.webp' ),
			],
			[
				'title' => __( 'Kookplaten met afzuiging', 'keuken-centrum' ),
				'body'  => __( 'Alles-in-één: koken en afzuigen in het werkblad. Vrij zicht, stil vermogen en een clean eilandontwerp.', 'keuken-centrum' ),
				'image' => kc_apparatuur_img( 'kookplaat-afzuiging.webp' ),
			],
		],
		'faq'         => kc_apparatuur_faq(),
		'related'     => kc_apparatuur_related( 'kookplaten' ),
		'brands'      => kc_apparatuur_brands(),
		'showroomCta' => [
			'title'          => __( 'Kookplaten vergelijken', 'keuken-centrum' ),
			'highlight'      => __( 'in Utrecht?', 'keuken-centrum' ),
			'body'           => __( 'Bekijk de apparatuur live in onze showroom op de Zonnebaan, met persoonlijk advies, een scherpe prijs en snelle levering.', 'keuken-centrum' ),
			'primaryLabel'   => __( 'Boek een afspraak', 'keuken-centrum' ),
			'secondaryLabel' => __( 'Bel direct', 'keuken-centrum' ),
		],
	];
}
