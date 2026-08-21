<?php
/**
 * Mobile bottom nav data — React ContextBottomNav.tsx source of truth.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return list<array{label:string,href:string,icon:string,primary:bool}>
 */
function kc_mobile_bottom_nav_items(): array {
	$defaults = [
		[
			'label'   => __( 'Home', 'keuken-centrum' ),
			'href'    => home_url( '/' ),
			'icon'    => 'home',
			'primary' => false,
		],
		[
			'label'   => __( 'Keukens', 'keuken-centrum' ),
			'href'    => home_url( '/keukens/' ),
			'icon'    => 'shop',
			'primary' => false,
		],
		[
			'label'   => __( 'Showroom', 'keuken-centrum' ),
			'href'    => home_url( '/showroom-keukens/' ),
			'icon'    => 'gallery',
			'primary' => false,
		],
		[
			'label'   => __( 'Afspraak', 'keuken-centrum' ),
			'href'    => function_exists( 'kc_consultation_url' ) ? kc_consultation_url() : home_url( '/consultation/' ),
			'icon'    => 'calendar-tick',
			'primary' => true,
		],
	];

	if ( ! function_exists( 'get_field' ) ) {
		return $defaults;
	}

	$rows = get_field( 'mobile_bottom_nav_items', 'option' );
	if ( ! is_array( $rows ) || ! $rows ) {
		return $defaults;
	}

	$items = [];
	foreach ( $rows as $row ) {
		$label = trim( (string) ( $row['label'] ?? '' ) );
		$href  = trim( (string) ( $row['url'] ?? '' ) );
		if ( '' === $label || '' === $href ) {
			continue;
		}
		$items[] = [
			'label'   => $label,
			'href'    => $href,
			'icon'    => (string) ( $row['icon'] ?? 'home' ),
			'primary' => ! empty( $row['primary'] ),
		];
	}

	return $items ?: $defaults;
}

/**
 * Active state mirroring React matchesRoute + marketing overrides.
 */
function kc_mobile_bottom_nav_is_active( string $href ): bool {
	$current = function_exists( 'kc_request_path' ) ? kc_request_path() : '/';
	$path    = wp_parse_url( $href, PHP_URL_PATH );
	$target  = is_string( $path ) ? untrailingslashit( $path ) : '/';
	$home    = untrailingslashit( (string) ( wp_parse_url( home_url( '/' ), PHP_URL_PATH ) ?: '' ) );
	if ( $home && '/' !== $home && str_starts_with( $target, $home ) ) {
		$target = substr( $target, strlen( $home ) ) ?: '/';
	}
	$target = '/' . ltrim( $target, '/' );
	$target = untrailingslashit( $target );
	if ( '' === $target ) {
		$target = '/';
	}

	if ( '/' === $target ) {
		return '/' === $current;
	}

	if ( $current === $target || str_starts_with( $current . '/', $target . '/' ) ) {
		return true;
	}

	if ( str_contains( $target, '/keukens' ) ) {
		if ( str_starts_with( $current, '/keukenbladen' ) || str_starts_with( $current, '/apparatuur' ) ) {
			return true;
		}
	}

	if ( str_contains( $target, '/showroom-keukens' ) && ( '/contact' === $current || str_starts_with( $current, '/contact/' ) ) ) {
		return true;
	}

	return false;
}

/**
 * Hide on configurator-like routes (React flow/configure).
 */
function kc_mobile_bottom_nav_should_render(): bool {
	if ( function_exists( 'kc_is_consultation_route' ) && kc_is_consultation_route() ) {
		// React flow mode includes consultation — bottom nav hidden.
		return false;
	}
	$uri = (string) ( $_SERVER['REQUEST_URI'] ?? '' );
	foreach ( [ '/brands', '/style', '/configure', '/moodboard' ] as $flow ) {
		if ( str_contains( $uri, $flow ) ) {
			return false;
		}
	}
	return true;
}
