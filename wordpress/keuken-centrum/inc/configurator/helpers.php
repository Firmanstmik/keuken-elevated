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
/**
 * Cache-proof interaction rules — LiteSpeed may strip ?ver= and browsers cache CSS for 1y.
 */
function kc_configurator_critical_interaction_css(): void {
	if ( ! kc_is_configurator_route() ) {
		return;
	}
	?>
<style id="kc-cfg-critical-interaction">
@media (min-width:768px){.kc-configurator-route .configurator-mobile-header,.kc-configurator-route .kc-cfg-mobile-header,.kc-configurator-route .kc-cfg-mobile-only{display:none!important}}
.kc-cfg-action{pointer-events:none!important}.kc-cfg-action[hidden]{display:none!important;pointer-events:none!important}
.kc-cfg-action__mobile,.kc-cfg-action__desktop{pointer-events:none!important}.kc-cfg-action button{pointer-events:auto}
.kc-cfg-card__media,.kc-cfg-card__img,.kc-cfg-card__scrim,.kc-cfg-card__logo,.kc-cfg-card__meta,.kc-cfg-card__check{pointer-events:none}
.kc-cfg-card__check[hidden]{display:none!important}
</style>
	<?php
}
add_action( 'wp_head', 'kc_configurator_critical_interaction_css', 100 );

/**
 * Preload the first configurator card image on funnel steps (LCP).
 */
function kc_configurator_preload_card_image(): void {
	if ( ! kc_is_configurator_route() ) {
		return;
	}
	$catalog = kc_configurator_catalog();
	$step    = kc_configurator_current_step();
	$url     = '';
	if ( 'brands' === $step && ! empty( $catalog['brands'][0]['image'] ) ) {
		$url = (string) $catalog['brands'][0]['image'];
	} elseif ( 'style' === $step && ! empty( $catalog['styles'][0]['image'] ) ) {
		$url = (string) $catalog['styles'][0]['image'];
	}
	if ( '' === $url ) {
		return;
	}
	printf(
		'<link rel="preload" as="image" href="%s" type="image/webp" fetchpriority="high" />' . "\n",
		esc_url( $url )
	);
}
add_action( 'wp_head', 'kc_configurator_preload_card_image', 5 );

/**
 * Inline config payload before funnel JS — LiteSpeed delays wp_localize_script output.
 */
function kc_configurator_js_bootstrap(): void {
	if ( ! kc_is_configurator_route() && ! ( function_exists( 'kc_is_consultation_route' ) && kc_is_consultation_route() ) ) {
		return;
	}
	$payload = wp_json_encode( kc_configurator_js_payload() );
	if ( ! is_string( $payload ) || '' === $payload ) {
		return;
	}
	printf(
		'<script id="kc-configurator-bootstrap" data-no-optimize="1">window.kcConfigurator=%s;</script>' . "\n",
		$payload // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- wp_json_encode
	);
}
add_action( 'wp_head', 'kc_configurator_js_bootstrap', 99 );

/**
 * Bypass LiteSpeed full-page cache on configurator funnel pages.
 */
function kc_configurator_litespeed_nocache(): void {
	if ( is_admin() || ! kc_is_configurator_route() ) {
		return;
	}
	do_action( 'litespeed_control_set_nocache', 'kc_configurator_interaction' );
}
add_action( 'wp', 'kc_configurator_litespeed_nocache', 1 );

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
