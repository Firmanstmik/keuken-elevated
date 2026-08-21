<?php
/**
 * Theme bootstrap for Keuken-Centrum Utrecht.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

require_once get_template_directory() . '/inc/cpt.php';
require_once get_template_directory() . '/inc/customizer.php';
require_once get_template_directory() . '/inc/acf-fields.php';
require_once get_template_directory() . '/inc/setup-content.php';
require_once get_template_directory() . '/inc/helpers-media.php';
require_once get_template_directory() . '/inc/icons.php';
require_once get_template_directory() . '/inc/nav-mega.php';
require_once get_template_directory() . '/inc/section-chapter.php';
require_once get_template_directory() . '/inc/seo.php';
require_once get_template_directory() . '/inc/brand-pages/helpers.php';
require_once get_template_directory() . '/inc/brand-pages/data-keukens-overview.php';
require_once get_template_directory() . '/inc/brand-pages/data-leicht.php';
require_once get_template_directory() . '/inc/brand-pages/data-leicht-series.php';
require_once get_template_directory() . '/inc/brand-pages/data-nobilia.php';
require_once get_template_directory() . '/inc/brand-pages/data-ai-kuchen.php';
require_once get_template_directory() . '/inc/brand-pages/data-zampieri.php';
require_once get_template_directory() . '/inc/brand-pages/data-cucinesse.php';
require_once get_template_directory() . '/inc/brand-pages/routing.php';
require_once get_template_directory() . '/inc/worktop-pages/helpers.php';
require_once get_template_directory() . '/inc/worktop-pages/data-overview.php';


if (! defined('KC_THEME_VERSION')) {
	$kc_theme       = wp_get_theme();
	$kc_theme_ver   = $kc_theme instanceof WP_Theme ? $kc_theme->get('Version') : '';
	$kc_theme_value = is_string($kc_theme_ver) && '' !== $kc_theme_ver ? $kc_theme_ver : '1.0.0';
	define('KC_THEME_VERSION', $kc_theme_value);
}

/**
 * Sets up theme defaults and registers support for WordPress features.
 */
function kc_theme_setup(): void {
	add_theme_support('title-tag');
	add_theme_support('post-thumbnails');
	add_theme_support(
		'html5',
		[
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		]
	);
	add_theme_support(
		'custom-logo',
		[
			'height'      => 72,
			'width'       => 240,
			'flex-height' => true,
			'flex-width'  => true,
		]
	);

	register_nav_menus(
		[
			'primary' => __('Primair menu', 'keuken-centrum'),
			'footer'  => __('Footer menu', 'keuken-centrum'),
		]
	);
}
add_action('after_setup_theme', 'kc_theme_setup');

/**
 * Enqueues the theme assets.
 */
function kc_enqueue_assets(): void {
	$fonts_url = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap';

	wp_enqueue_style('keuken-centrum-fonts', $fonts_url, [], null);

	$style_ver      = KC_THEME_VERSION;
	$live_css_rel   = 'assets/css/kc-live-' . $style_ver . '.css';
	$live_css_path  = get_theme_file_path($live_css_rel);
	$theme_css_rel  = file_exists($live_css_path) ? $live_css_rel : 'assets/css/theme.css';
	$style_path     = get_theme_file_path($theme_css_rel);
	$style_mtime    = file_exists($style_path) ? (string) filemtime($style_path) : '0';
	wp_enqueue_style(
		'keuken-centrum-theme',
		kc_asset($theme_css_rel),
		['keuken-centrum-fonts'],
		$style_ver . '.' . $style_mtime
	);

	$script_ver     = KC_THEME_VERSION;
	$live_js_rel    = 'assets/js/kc-live-' . $script_ver . '.js';
	$live_js_path   = get_theme_file_path($live_js_rel);
	$theme_js_rel   = file_exists($live_js_path) ? $live_js_rel : 'assets/js/theme.js';
	$script_path    = get_theme_file_path($theme_js_rel);
	$script_mtime   = file_exists($script_path) ? (string) filemtime($script_path) : '0';
	wp_enqueue_script(
		'keuken-centrum-theme',
		kc_asset($theme_js_rel),
		[],
		$script_ver . '.' . $script_mtime,
		true
	);

	$needs_brand_css = ( function_exists( 'kc_is_keukens_route' ) && kc_is_keukens_route() )
		|| ( function_exists( 'kc_is_worktops_route' ) && kc_is_worktops_route() );

	if ( $needs_brand_css ) {
		$brand_css_rel  = 'assets/css/keukens-brand-pages.css';
		$brand_css_path = get_theme_file_path( $brand_css_rel );
		$brand_mtime    = file_exists( $brand_css_path ) ? (string) filemtime( $brand_css_path ) : '0';
		wp_enqueue_style(
			'keuken-centrum-keukens-brand',
			kc_asset( $brand_css_rel ),
			[ 'keuken-centrum-theme' ],
			$style_ver . '.' . $brand_mtime
		);
	}

	if ( function_exists( 'kc_is_worktops_route' ) && kc_is_worktops_route() ) {
		$wb_css_rel  = 'assets/css/keukenbladen-pages.css';
		$wb_css_path = get_theme_file_path( $wb_css_rel );
		$wb_mtime    = file_exists( $wb_css_path ) ? (string) filemtime( $wb_css_path ) : '0';
		wp_enqueue_style(
			'keuken-centrum-keukenbladen',
			kc_asset( $wb_css_rel ),
			[ 'keuken-centrum-keukens-brand' ],
			$style_ver . '.' . $wb_mtime
		);
	}
}
add_action('wp_enqueue_scripts', 'kc_enqueue_assets');

/**
 * Preconnect to Google Fonts and keep theme CSS/JS out of LiteSpeed combine/UCSS.
 */
function kc_resource_hints(array $urls, string $relation_type): array {
	if ('preconnect' === $relation_type) {
		$urls[] = 'https://fonts.googleapis.com';
		$urls[] = [
			'href'        => 'https://fonts.gstatic.com',
			'crossorigin' => 'anonymous',
		];
	}
	return $urls;
}
add_filter('wp_resource_hints', 'kc_resource_hints', 10, 2);

/**
 * Keep theme CSS/JS out of LiteSpeed combine/UCSS so homepage parity rules are not stripped.
 */
function kc_litespeed_exclude_theme_assets(string $html, string $handle): string {
	if ( ! in_array( $handle, [ 'keuken-centrum-theme', 'keuken-centrum-keukens-brand', 'keuken-centrum-keukenbladen' ], true ) || str_contains( $html, 'data-no-optimize' ) ) {
		return $html;
	}

	return str_replace('<link ', '<link data-no-optimize="1" ', str_replace('<script ', '<script data-no-optimize="1" ', $html));
}
add_filter('style_loader_tag', 'kc_litespeed_exclude_theme_assets', 10, 2);
add_filter('script_loader_tag', 'kc_litespeed_exclude_theme_assets', 10, 2);

/**
 * Body class for keukens routes (layout + cache hints).
 *
 * @param array<int, string> $classes Body classes.
 * @return array<int, string>
 */
function kc_keukens_body_class(array $classes): array {
	if (function_exists('kc_is_keukens_route') && kc_is_keukens_route()) {
		$classes[] = 'kc-keukens-route';
	}
	if (function_exists('kc_is_worktops_route') && kc_is_worktops_route()) {
		$classes[] = 'kc-keukenbladen-route';
	}
	return $classes;
}
add_filter('body_class', 'kc_keukens_body_class');

/**
 * Recovery: LiteSpeed full-page cache was hanging anonymous homepage requests.
 * Origin PHP renders in ~2s; bypass cache for the front page until revalidated.
 */
function kc_litespeed_front_page_nocache(): void {
	if (is_admin() || ! is_front_page()) {
		return;
	}

	do_action('litespeed_control_set_nocache', 'kc_front_page_recovery');
}
add_action('wp', 'kc_litespeed_front_page_nocache', 1);

/**
 * Reads a site setting from ACF options or theme mods.
 *
 * @param string $key     Setting key.
 * @param mixed  $default Fallback value.
 * @return mixed
 */
function kc_get_option(string $key, $default = '') {
	if (function_exists('get_field')) {
		$acf_value = get_field($key, 'option');
		if (null !== $acf_value && '' !== $acf_value) {
			return $acf_value;
		}
	}

	$theme_mod = get_theme_mod($key, null);
	if (null !== $theme_mod && '' !== $theme_mod) {
		return $theme_mod;
	}

	return $default;
}

/**
 * Returns the URI for a theme asset.
 */
function kc_asset(string $path): string {
	$trimmed = ltrim($path, '/');
	return trailingslashit(get_template_directory_uri()) . $trimmed;
}

/**
 * Returns a field value from ACF or post meta.
 *
 * @param string          $key     Field key.
 * @param int|string|bool $post_id Post object identifier.
 * @param mixed           $default Fallback value.
 * @return mixed
 */
function kc_get_field_value(string $key, $post_id = false, $default = '') {
	if (function_exists('get_field')) {
		$value = get_field($key, $post_id ?: false);
		if (null !== $value && '' !== $value) {
			return $value;
		}
	}

	$meta_value = get_post_meta($post_id ?: get_the_ID(), $key, true);
	if (null !== $meta_value && '' !== $meta_value) {
		return $meta_value;
	}

	return $default;
}

/**
 * Seeds the initial content and refreshes rewrite rules after activation.
 */
function kc_handle_theme_switch(): void {
	if (function_exists('kc_register_content_types')) {
		kc_register_content_types();
	}

	if (! get_option('kc_seeded')) {
		kc_seed_content();
		update_option('kc_seeded', (string) time());
	}

	flush_rewrite_rules();
}
add_action('after_switch_theme', 'kc_handle_theme_switch');
