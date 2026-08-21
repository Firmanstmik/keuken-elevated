<?php
/**
 * Contact page data (React ContactPage + route meta).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_contact_page_data(): array {
	$phone   = (string) kc_get_option( 'contact_phone', '030 241 5122' );
	$email   = (string) kc_get_option( 'contact_email', 'info@keuken-centrum.nl' );
	$address = (string) kc_get_option( 'contact_address', 'Zonnebaan 8' );
	$postal  = (string) kc_get_option( 'contact_postal', '3542 EC Utrecht' );
	$maps    = 'https://www.google.com/maps/place/Keuken-centrum.nl/';

	return [
		'phone'      => $phone,
		'phone_href' => 'tel:+31302415122',
		'email'      => $email,
		'address'    => $address,
		'postal'     => $postal,
		'maps'       => $maps,
		'meta'       => [
			'title'       => __( 'Contact · Keuken-Centrum Utrecht | Zonnebaan 8', 'keuken-centrum' ),
			'description' => __( 'Neem contact op met Keuken-Centrum Utrecht. Bel 030 241 5122, mail info@keuken-centrum.nl of bezoek onze showroom op Zonnebaan 8, 3542 EC Utrecht.', 'keuken-centrum' ),
		],
		'hero'       => [
			'image'    => kc_contact_hero_img(),
			'eyebrow'  => __( 'Contact', 'keuken-centrum' ),
			'title'    => __( 'Kom in', 'keuken-centrum' ),
			'highlight'=> __( 'contact', 'keuken-centrum' ),
			'subtitle' => __( 'Heb je vragen over een keuken? Laat een bericht achter. Wij staan je graag te woord en nemen vaak dezelfde werkdag nog contact op.', 'keuken-centrum' ),
		],
		'hours'      => kc_contact_hours_rows(),
		'channels'   => [
			[
				'icon'     => 'map-pin',
				'label'    => __( 'Adres', 'keuken-centrum' ),
				'value'    => $address . ', ' . $postal,
				'href'     => $maps,
				'external' => true,
			],
			[
				'icon'     => 'phone',
				'label'    => __( 'Telefoonnummer', 'keuken-centrum' ),
				'value'    => $phone,
				'href'     => 'tel:+31302415122',
				'external' => false,
			],
			[
				'icon'     => 'mail',
				'label'    => __( 'Email', 'keuken-centrum' ),
				'value'    => $email,
				'href'     => 'mailto:' . $email,
				'external' => false,
			],
		],
	];
}
