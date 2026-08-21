<?php
/**
 * Contact page helpers.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * True on Contact page.
 */
function kc_is_contact_route(): bool {
	return is_page( 'contact' );
}

/**
 * Contact hero image (exact React src/assets/showroom.jpg).
 */
function kc_contact_hero_img(): string {
	return kc_theme_img( 'contact/showroom.jpg' );
}

/**
 * Structured contact hours (React kc.contact.hours).
 *
 * @return array<int, array{d:string,h:string}>
 */
function kc_contact_hours_rows(): array {
	return [
		[ 'd' => __( 'Maandag tot Vrijdag', 'keuken-centrum' ), 'h' => '09:00 tot 18:00' ],
		[ 'd' => __( 'Zaterdag', 'keuken-centrum' ), 'h' => '09:00 tot 17:00' ],
		[ 'd' => __( 'Zondag', 'keuken-centrum' ), 'h' => __( 'Gesloten', 'keuken-centrum' ) ],
	];
}
