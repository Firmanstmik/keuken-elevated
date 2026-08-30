<?php
/**
 * Brand pages routing (Leicht series + redirects).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Registers rewrite rules for React parity URLs.
 */
function kc_brand_pages_rewrite_rules(): void {
	add_rewrite_rule('keukens/hacker/?$', 'index.php?kc_brand_redirect=ai-kuchen', 'top');
	add_rewrite_rule('keukens/leicht/([^/]+)/?$', 'index.php?kc_leicht_series=$matches[1]', 'top');
	add_rewrite_rule('silestone/?$', 'index.php?kc_worktop_redirect=silestone', 'top');
	add_rewrite_rule('dekton/?$', 'index.php?kc_worktop_redirect=dekton', 'top');
	add_rewrite_rule('neolith/?$', 'index.php?kc_worktop_redirect=neolith', 'top');
	add_rewrite_rule('sensa/?$', 'index.php?kc_worktop_redirect=sensa', 'top');
	add_rewrite_rule('keukenbladen/composiet/?$', 'index.php?kc_worktop_redirect=composiet', 'top');
}
add_action('init', 'kc_brand_pages_rewrite_rules');

/**
 * @param array<int, string> $vars Query vars.
 * @return array<int, string>
 */
function kc_brand_pages_query_vars(array $vars): array {
	$vars[] = 'kc_leicht_series';
	$vars[] = 'kc_brand_redirect';
	$vars[] = 'kc_worktop_redirect';
	return $vars;
}
add_filter('query_vars', 'kc_brand_pages_query_vars');

/**
 * Handles hacker → ai-kuchen redirect.
 */
function kc_brand_pages_redirects(): void {
	$redirect = get_query_var('kc_brand_redirect');
	if ('ai-kuchen' === $redirect) {
		wp_safe_redirect(home_url('/keukens/ai-kuchen/'), 301);
		exit;
	}

	$worktop = get_query_var('kc_worktop_redirect');
	$allowed = [ 'silestone', 'dekton', 'neolith', 'sensa', 'composiet' ];
	if (is_string($worktop) && in_array($worktop, $allowed, true)) {
		$target = 'composiet' === $worktop ? '/keukenbladen/' : '/keukenbladen/' . $worktop . '/';
		wp_safe_redirect(home_url($target), 301);
		exit;
	}
}
add_action('template_redirect', 'kc_brand_pages_redirects', 1);

/**
 * Loads Leicht series shell when rewrite matches.
 */
function kc_brand_pages_template_include(string $template): string {
	$slug = get_query_var('kc_leicht_series');
	if (is_string($slug) && '' !== $slug) {
		return get_template_directory() . '/page-keukens-leicht-series.php';
	}
	return $template;
}
add_filter('template_include', 'kc_brand_pages_template_include', 99);

/**
 * Flush rewrite rules once after brand routing is added.
 */
function kc_brand_pages_maybe_flush_rewrites(): void {
	if ('1' === get_option('kc_brand_pages_routing_v4')) {
		return;
	}
	flush_rewrite_rules(false);
	update_option('kc_brand_pages_routing_v4', '1');
}
add_action('init', 'kc_brand_pages_maybe_flush_rewrites', 99);
