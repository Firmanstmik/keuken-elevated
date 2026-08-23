<?php
/**
 * CMS helpers — ACF-backed editable content with React defaults as fallback.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Resolve an ACF image field to a URL.
 *
 * @param mixed  $image   ACF image array|ID|string.
 * @param string $fallback Fallback URL.
 */
function kc_cms_image_url( $image, string $fallback = '' ): string {
	if ( is_array( $image ) && ! empty( $image['url'] ) ) {
		return (string) $image['url'];
	}
	if ( is_numeric( $image ) ) {
		$url = wp_get_attachment_image_url( (int) $image, 'full' );
		if ( $url ) {
			return $url;
		}
	}
	if ( is_string( $image ) && '' !== $image ) {
		return $image;
	}
	return $fallback;
}

/**
 * Non-empty string from ACF page/option field, else default.
 *
 * @param string          $key     Field name.
 * @param int|string|bool $post_id Post ID or 'option'.
 * @param string          $default Default.
 */
function kc_cms_text( string $key, $post_id, string $default = '' ): string {
	$value = kc_get_field_value( $key, $post_id, null );
	if ( null === $value || false === $value || '' === $value ) {
		return $default;
	}
	return is_string( $value ) ? $value : $default;
}

/**
 * Parse newline-separated options into a clean list.
 *
 * @param string       $raw     Raw textarea.
 * @param list<string> $default Defaults.
 * @return list<string>
 */
function kc_cms_lines( string $raw, array $default = [] ): array {
	$lines = array_values(
		array_filter(
			array_map( 'trim', preg_split( '/\r\n|\r|\n/', $raw ) ?: [] ),
			static fn( $line ) => '' !== $line
		)
	);
	return $lines ?: $default;
}

/**
 * Non-empty repeater rows from ACF option, else empty array.
 *
 * @param string $key Field name.
 * @return list<array<string,mixed>>
 */
function kc_cms_repeater( string $key ): array {
	if ( ! function_exists( 'get_field' ) ) {
		return [];
	}
	$rows = get_field( $key, 'option' );
	if ( ! is_array( $rows ) || empty( $rows ) ) {
		return [];
	}
	return array_values( $rows );
}

/**
 * Configurator entry — React SoT `/brands`. Canonical WP funnel: `/brands/`.
 * Legacy `#brands` / Vercel URLs stored in ACF are remapped so CTAs are not fake funnel substitutes.
 */
function kc_cms_normalize_configurator_cta_url( string $url ): string {
	$canonical = home_url( '/brands/' );
	if ( '' === $url ) {
		return $canonical;
	}

	$fragment = (string) wp_parse_url( $url, PHP_URL_FRAGMENT );
	$path     = (string) wp_parse_url( $url, PHP_URL_PATH );
	$host     = (string) wp_parse_url( $url, PHP_URL_HOST );
	if ( 'brands' === $fragment || false !== strpos( $url, '/#brands' ) ) {
		return $canonical;
	}
	if ( ( '/brands' === $path || '/brands/' === $path ) && false !== strpos( $host, 'vercel' ) ) {
		return $canonical;
	}

	return $url;
}

function kc_cms_configurator_url(): string {
	return kc_cms_normalize_configurator_cta_url( kc_cms_text( 'configurator_url', 'option', '' ) );
}

/**
 * Register Keuken-Centrum ACF options pages (admin UX).
 */
function kc_cms_register_options_pages(): void {
	if ( ! function_exists( 'acf_add_options_page' ) ) {
		return;
	}

	acf_add_options_page(
		[
			'page_title' => 'Keuken-Centrum',
			'menu_title' => 'Keuken-Centrum',
			'menu_slug'  => 'kc-cms',
			'capability' => 'edit_theme_options',
			'redirect'   => true,
			'position'   => 3,
			'icon_url'   => 'dashicons-store',
		]
	);

	$pages = [
		[ 'kc-cms-general', 'Algemene instellingen', 'Algemeen' ],
		[ 'kc-cms-header', 'Header & navigatie', 'Header' ],
		[ 'kc-cms-nav', 'Mega menu & mobiel menu', 'Navigatie' ],
		[ 'kc-cms-homepage', 'Homepage secties', 'Homepage' ],
		[ 'kc-cms-keukens', 'Keukens overzicht', 'Keukens' ],
		[ 'kc-cms-leicht-series', 'Leicht series', 'Leicht series' ],
		[ 'kc-cms-footer', 'Footer', 'Footer' ],
		[ 'kc-cms-sticky', 'Secondary CTA / Concierge', 'Secondary CTA' ],
		[ 'kc-cms-consultation', 'Consultatie defaults', 'Consultatie' ],
		[ 'kc-cms-showroom', 'Showroom defaults', 'Showroom' ],
	];

	foreach ( $pages as $page ) {
		acf_add_options_sub_page(
			[
				'page_title'  => $page[1],
				'menu_title'  => $page[2],
				'menu_slug'   => $page[0],
				'parent_slug' => 'kc-cms',
				'capability'  => 'edit_theme_options',
			]
		);
	}
}
add_action( 'acf/init', 'kc_cms_register_options_pages', 5 );
