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
require_once get_template_directory() . '/inc/seo.php';


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
	$fonts_url = 'https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400&family=Hanken+Grotesk:wght@300;400;500;600;700&display=swap';

	wp_enqueue_style('keuken-centrum-fonts', $fonts_url, [], null);

	$style_path = get_theme_file_path('assets/css/theme.css');
	$style_ver  = file_exists($style_path) ? (string) filemtime($style_path) : KC_THEME_VERSION;
	wp_enqueue_style(
		'keuken-centrum-theme',
		kc_asset('assets/css/theme.css'),
		['keuken-centrum-fonts'],
		$style_ver
	);

	$script_path = get_theme_file_path('assets/js/theme.js');
	$script_ver  = file_exists($script_path) ? (string) filemtime($script_path) : KC_THEME_VERSION;
	wp_enqueue_script(
		'keuken-centrum-theme',
		kc_asset('assets/js/theme.js'),
		[],
		$script_ver,
		true
	);
}
add_action('wp_enqueue_scripts', 'kc_enqueue_assets');

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
