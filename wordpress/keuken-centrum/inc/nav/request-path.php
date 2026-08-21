<?php
/**
 * Active path helper for mobile bottom nav.
 *
 * @package Keuken_Centrum
 */

/**
 * Current request path relative to home, e.g. /keukens or /.
 */
function kc_request_path(): string {
	$uri  = (string) ( $_SERVER['REQUEST_URI'] ?? '/' );
	$path = (string) ( wp_parse_url( $uri, PHP_URL_PATH ) ?: '/' );
	$home = (string) ( wp_parse_url( home_url( '/' ), PHP_URL_PATH ) ?: '/' );
	$home = untrailingslashit( $home );
	if ( $home && '/' !== $home && str_starts_with( $path, $home ) ) {
		$path = substr( $path, strlen( $home ) ) ?: '/';
	}
	$path = '/' . ltrim( $path, '/' );
	$path = untrailingslashit( $path );
	return '' === $path ? '/' : $path;
}
