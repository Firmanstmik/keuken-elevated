<?php
/**
 * Lightweight SEO foundation (no extra SEO plugin required).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Homepage-focused document title.
 */
function kc_document_title_parts(array $parts): array {
	if (is_front_page()) {
		$parts['title']   = 'Keuken-Centrum Utrecht';
		$parts['tagline'] = 'De Premium Keukenbestemming van Utrecht';
	}
	return $parts;
}
add_filter('document_title_parts', 'kc_document_title_parts');

/**
 * Returns a sensible meta description for the current view.
 */
function kc_get_meta_description(): string {
	if (is_front_page()) {
		$custom = (string) kc_get_option('seo_meta_description', '');
		if ('' !== trim($custom)) {
			return $custom;
		}
		return 'Premium Duitse en Italiaanse keukenshowroom in Utrecht sinds 1978. Persoonlijk showroomadvies, geselecteerde topmerken en een verfijnde keukenervaring.';
	}

	if (is_singular()) {
		$excerpt = get_the_excerpt();
		if (is_string($excerpt) && '' !== trim(wp_strip_all_tags($excerpt))) {
			return wp_strip_all_tags($excerpt);
		}
	}

	if (is_post_type_archive('kitchen_brand')) {
		return 'Ontdek Duitse en Italiaanse keukenmerken bij Keuken-Centrum Utrecht: Leicht, Nobilia, AI Küchen, Zampieri en Cucinesse.';
	}

	if (is_post_type_archive('worktop')) {
		return 'Keukenbladen van Silestone, Dekton, Neolith en Sensa — materiaaladvies in onze showroom in Utrecht.';
	}

	if (is_post_type_archive('appliance_category')) {
		return 'Hoogwaardige inbouwapparatuur: kookplaten, afzuiging, Quooker, ovens en meer bij Keuken-Centrum Utrecht.';
	}

	if (is_page('contact')) {
		return 'Plan een showroombezoek of adviesgesprek bij Keuken-Centrum Utrecht — Zonnebaan 8, 3542 EC Utrecht.';
	}

	$tagline = get_bloginfo('description', 'display');
	return is_string($tagline) && '' !== $tagline
		? $tagline
		: 'Keuken-Centrum Utrecht — premium keukenshowroom sinds 1978.';
}

/**
 * Prints core meta, social and structured data tags.
 */
function kc_output_seo_tags(): void {
	if (is_admin()) {
		return;
	}

	$description = kc_get_meta_description();
	$title       = wp_get_document_title();
	$url         = is_singular() ? get_permalink() : home_url(add_query_arg([]));
	if (is_front_page()) {
		$url = home_url('/');
	}

	$image = '';
	if (is_singular() && has_post_thumbnail()) {
		$image = (string) get_the_post_thumbnail_url(null, 'full');
	}
	if ('' === $image) {
		$image = kc_theme_img('logo-keuken.webp') ?: kc_theme_img('hero/hero_img1.webp');
	}

	echo '<meta name="description" content="' . esc_attr($description) . '">' . "\n";
	echo '<link rel="canonical" href="' . esc_url($url) . '">' . "\n";

	echo '<meta property="og:locale" content="nl_NL">' . "\n";
	echo '<meta property="og:type" content="' . esc_attr(is_front_page() ? 'website' : 'article') . '">' . "\n";
	echo '<meta property="og:title" content="' . esc_attr($title) . '">' . "\n";
	echo '<meta property="og:description" content="' . esc_attr($description) . '">' . "\n";
	echo '<meta property="og:url" content="' . esc_url($url) . '">' . "\n";
	echo '<meta property="og:site_name" content="' . esc_attr(get_bloginfo('name')) . '">' . "\n";
	if ($image) {
		echo '<meta property="og:image" content="' . esc_url($image) . '">' . "\n";
	}

	echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
	echo '<meta name="twitter:title" content="' . esc_attr($title) . '">' . "\n";
	echo '<meta name="twitter:description" content="' . esc_attr($description) . '">' . "\n";
	if ($image) {
		echo '<meta name="twitter:image" content="' . esc_url($image) . '">' . "\n";
	}

	if (is_front_page()) {
		$phone   = (string) kc_get_option('contact_phone', '030 241 5122');
		$email   = (string) kc_get_option('contact_email', 'info@keuken-centrum.nl');
		$address = (string) kc_get_option('contact_address', 'Zonnebaan 8');
		$schema  = [
			'@context' => 'https://schema.org',
			'@type'    => 'LocalBusiness',
			'name'     => 'Keuken-Centrum Utrecht',
			'url'      => home_url('/'),
			'image'    => $image,
			'telephone'=> $phone,
			'email'    => $email,
			'address'  => [
				'@type'           => 'PostalAddress',
				'streetAddress'   => $address,
				'postalCode'      => '3542 EC',
				'addressLocality' => 'Utrecht',
				'addressCountry'  => 'NL',
			],
			'openingHours' => [ 'Mo-Fr 09:00-18:00', 'Sa 09:00-17:00' ],
			'priceRange'   => '€€€',
		];
		echo '<script type="application/ld+json">' . wp_json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . '</script>' . "\n";
	}
}
add_action('wp_head', 'kc_output_seo_tags', 1);

/**
 * Ensures public indexing defaults for production.
 */
function kc_robots_txt(string $output, bool $public): string {
	if (! $public) {
		return $output;
	}

	$sitemap = home_url('/wp-sitemap.xml');
	if (false === strpos($output, 'Sitemap:')) {
		$output .= "\nSitemap: {$sitemap}\n";
	}
	return $output;
}
add_filter('robots_txt', 'kc_robots_txt', 10, 2);
