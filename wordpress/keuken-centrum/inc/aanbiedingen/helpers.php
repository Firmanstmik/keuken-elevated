<?php
/**
 * Aanbiedingen helpers.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme aanbiedingen image URI.
 */
function kc_aanbiedingen_img( string $filename ): string {
	return kc_theme_img( 'aanbiedingen/' . ltrim( $filename, '/' ) );
}

/**
 * True on Aanbiedingen page.
 */
function kc_is_aanbiedingen_route(): bool {
	return is_page( 'aanbiedingen' );
}
