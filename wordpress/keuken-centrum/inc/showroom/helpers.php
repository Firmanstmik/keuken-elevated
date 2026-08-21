<?php
/**
 * Showroom Keukens helpers.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * True on Showroom Keukens page.
 */
function kc_is_showroom_keukens_route(): bool {
	return is_page( 'showroom-keukens' );
}

/**
 * Canonical consultation URL (React /consultation).
 */
function kc_consultation_url(): string {
	return home_url( '/consultation/' );
}
