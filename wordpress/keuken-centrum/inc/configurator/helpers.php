<?php
/**
 * Configurator helpers, pages, validation.
 *
 * State schema (React `kc-master-config`):
 * { brand, brandName, style, styleName, selections: { [categoryId]: { id, name, color } }, budget }
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Funnel page slugs.
 *
 * @return list<string>
 */
function kc_configurator_slugs(): array {
	return [ 'brands', 'style', 'configure', 'moodboard' ];
}

function kc_is_configurator_route(): bool {
	return is_page( kc_configurator_slugs() );
}

function kc_configurator_current_step(): string {
	if ( is_page( 'brands' ) ) {
		return 'brands';
	}
	if ( is_page( 'style' ) ) {
		return 'style';
	}
	if ( is_page( 'configure' ) ) {
		return 'configure';
	}
	if ( is_page( 'moodboard' ) ) {
		return 'moodboard';
	}
	if ( is_page( 'consultation' ) ) {
		return 'consultation';
	}
	return '';
}

/**
 * Publish funnel pages (idempotent).
 */
function kc_configurator_ensure_pages(): void {
	if ( ! function_exists( 'kc_upsert_page' ) ) {
		return;
	}
	$pages = [
		[ 'post_name' => 'brands', 'post_title' => __( 'Kies uw merk', 'keuken-centrum' ) ],
		[ 'post_name' => 'style', 'post_title' => __( 'Kies uw stijl', 'keuken-centrum' ) ],
		[ 'post_name' => 'configure', 'post_title' => __( 'Stel uw keuken samen', 'keuken-centrum' ) ],
		[ 'post_name' => 'moodboard', 'post_title' => __( 'Uw keukenvoorstel', 'keuken-centrum' ) ],
	];
	foreach ( $pages as $page ) {
		kc_upsert_page( $page );
	}
}
add_action( 'init', 'kc_configurator_ensure_pages', 30 );

/**
 * @return array<string, mixed>|null
 */
function kc_configurator_brand_by_id( string $id ): ?array {
	foreach ( kc_configurator_catalog()['brands'] as $brand ) {
		if ( ( $brand['id'] ?? '' ) === $id ) {
			return $brand;
		}
	}
	return null;
}

function kc_configurator_style_by_id( string $id ): ?array {
	foreach ( kc_configurator_catalog()['styles'] as $style ) {
		if ( ( $style['id'] ?? '' ) === $id ) {
			return $style;
		}
	}
	return null;
}

/**
 * Normalize and validate client JSON against the catalog.
 *
 * @param mixed $raw
 * @return array<string, mixed>
 */
function kc_configurator_normalize_state( $raw ): array {
	$empty = [
		'brand'      => null,
		'brandName'  => null,
		'style'      => null,
		'styleName'  => null,
		'selections' => [],
		'budget'     => null,
	];
	if ( ! is_array( $raw ) ) {
		return $empty;
	}

	$brand_id = isset( $raw['brand'] ) ? sanitize_key( (string) $raw['brand'] ) : '';
	$style_id = isset( $raw['style'] ) ? sanitize_key( (string) $raw['style'] ) : '';
	$brand    = $brand_id ? kc_configurator_brand_by_id( $brand_id ) : null;
	$style    = $style_id ? kc_configurator_style_by_id( $style_id ) : null;

	$catalog  = kc_configurator_catalog();
	$allowed  = [];
	foreach ( $catalog['categories'] as $cat ) {
		$opts = [];
		foreach ( $cat['options'] as $opt ) {
			$opts[ $opt['id'] ] = $opt;
		}
		$allowed[ $cat['id'] ] = $opts;
	}

	$selections = [];
	$incoming   = is_array( $raw['selections'] ?? null ) ? $raw['selections'] : [];
	foreach ( $incoming as $cat_id => $sel ) {
		$cat_id = sanitize_key( (string) $cat_id );
		if ( ! isset( $allowed[ $cat_id ] ) || ! is_array( $sel ) ) {
			continue;
		}
		$opt_id = sanitize_key( (string) ( $sel['id'] ?? '' ) );
		if ( ! isset( $allowed[ $cat_id ][ $opt_id ] ) ) {
			continue;
		}
		$opt = $allowed[ $cat_id ][ $opt_id ];
		$selections[ $cat_id ] = [
			'id'    => $opt['id'],
			'name'  => $opt['name'],
			'color' => $opt['color'],
		];
	}

	$budget = null;
	if ( $brand ) {
		$budget = $catalog['budgetRanges'][ $brand['id'] ] ?? null;
	}
	$posted_budget = isset( $raw['budget'] ) ? sanitize_text_field( (string) $raw['budget'] ) : '';
	$consult_ok    = function_exists( 'kc_consultation_budgets' ) ? kc_consultation_budgets() : [];
	if ( $posted_budget && ( in_array( $posted_budget, $consult_ok, true ) || ( $budget && $posted_budget === $budget ) ) ) {
		$budget = $posted_budget;
	}

	return [
		'brand'      => $brand ? $brand['id'] : null,
		'brandName'  => $brand ? $brand['name'] : null,
		'style'      => $style ? $style['id'] : null,
		'styleName'  => $style ? $style['name'] : null,
		'selections' => $selections,
		'budget'     => $budget,
	];
}

/**
 * @return array<string, mixed>
 */
function kc_configurator_js_payload(): array {
	$catalog = kc_configurator_catalog();
	return [
		'storageKey' => 'kc-master-config',
		'urls'       => [
			'home'         => home_url( '/' ),
			'brands'       => home_url( '/brands/' ),
			'style'        => home_url( '/style/' ),
			'configure'    => home_url( '/configure/' ),
			'moodboard'    => home_url( '/moodboard/' ),
			'consultation' => home_url( '/consultation/' ),
		],
		'step'       => kc_configurator_current_step(),
		'catalog'    => $catalog,
	];
}

/**
 * @return array{title:string,description:string}
 */
function kc_configurator_seo_for_step( string $step ): array {
	$catalog = kc_configurator_catalog();
	$seo     = $catalog['seo'][ $step ] ?? null;
	if ( is_array( $seo ) ) {
		return [
			'title'       => (string) $seo['title'],
			'description' => (string) $seo['description'],
		];
	}
	return [
		'title'       => get_bloginfo( 'name' ),
		'description' => '',
	];
}
