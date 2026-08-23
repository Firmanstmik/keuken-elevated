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

	if (is_post_type_archive('kitchen_brand') && function_exists('kc_keukens_overview_data')) {
		$data = kc_keukens_overview_data();
		if (! empty($data['meta']['title'])) {
			$parts['title'] = $data['meta']['title'];
			unset($parts['tagline'], $parts['site']);
		}
	}

	if (is_post_type_archive('worktop') && function_exists('kc_keukenbladen_overview_data')) {
		$data = kc_keukenbladen_overview_data();
		if (! empty($data['meta']['title'])) {
			$parts['title'] = $data['meta']['title'];
			unset($parts['tagline'], $parts['site']);
		}
	}

	if (is_singular('kitchen_brand')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'leicht'    => 'kc_leicht_page_data',
			'nobilia'   => 'kc_nobilia_page_data',
			'ai-kuchen' => 'kc_ai_kuchen_page_data',
			'zampieri'  => 'kc_zampieri_page_data',
			'cucinesse' => 'kc_cucinesse_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['meta']['title'])) {
				$parts['title'] = (string) $data['meta']['title'];
				unset($parts['tagline'], $parts['site']);
			}
		}
	}

	if (is_singular('worktop')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'silestone' => 'kc_silestone_page_data',
			'dekton'    => 'kc_dekton_page_data',
			'neolith'   => 'kc_neolith_page_data',
			'sensa'     => 'kc_sensa_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['meta']['title'])) {
				$parts['title'] = (string) $data['meta']['title'];
				unset($parts['tagline'], $parts['site']);
			}
		}
	}

	if (is_singular('appliance_category')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'kookplaten' => 'kc_kookplaten_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['meta']['title'])) {
				$parts['title'] = (string) $data['meta']['title'];
				unset($parts['tagline'], $parts['site']);
			}
		}
	}

	if (is_page('aanbiedingen') && function_exists('kc_aanbiedingen_page_data')) {
		$data = kc_aanbiedingen_page_data();
		if (is_array($data) && ! empty($data['meta']['title'])) {
			$parts['title'] = (string) $data['meta']['title'];
			unset($parts['tagline'], $parts['site']);
		}
	}

	if (is_page('contact') && function_exists('kc_contact_page_data')) {
		$data = kc_contact_page_data();
		if (is_array($data) && ! empty($data['meta']['title'])) {
			$parts['title'] = (string) $data['meta']['title'];
			unset($parts['tagline'], $parts['site']);
		}
	}

	if (is_page('showroom-keukens') && function_exists('kc_showroom_keukens_page_data')) {
		$data = kc_showroom_keukens_page_data();
		if (is_array($data) && ! empty($data['meta']['title'])) {
			$parts['title'] = (string) $data['meta']['title'];
			unset($parts['tagline'], $parts['site']);
		}
	}

	if (is_page('consultation') && function_exists('kc_consultation_page_data')) {
		$data = kc_consultation_page_data();
		if (is_array($data) && ! empty($data['meta']['title'])) {
			$parts['title'] = (string) $data['meta']['title'];
			unset($parts['tagline'], $parts['site']);
		}
	}

	if ( function_exists( 'kc_is_configurator_route' ) && kc_is_configurator_route() && function_exists( 'kc_configurator_seo_for_step' ) ) {
		$seo = kc_configurator_seo_for_step( kc_configurator_current_step() );
		if ( ! empty( $seo['title'] ) ) {
			$parts['title'] = (string) $seo['title'];
			unset( $parts['tagline'], $parts['site'] );
		}
	}

	$series_slug = get_query_var('kc_leicht_series');
	if (is_string($series_slug) && '' !== $series_slug && function_exists('kc_leicht_series_data')) {
		$series = kc_leicht_series_data($series_slug);
		if ($series) {
			$parts['title'] = ! empty( $series['seo_title'] )
				? (string) $series['seo_title']
				: ( $series['name'] . ' · Keuken-Centrum Utrecht' );
			unset($parts['tagline'], $parts['site']);
		}
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

	if (is_singular('kitchen_brand')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'leicht'    => 'kc_leicht_page_data',
			'nobilia'   => 'kc_nobilia_page_data',
			'ai-kuchen' => 'kc_ai_kuchen_page_data',
			'zampieri'  => 'kc_zampieri_page_data',
			'cucinesse' => 'kc_cucinesse_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['meta']['description'])) {
				return (string) $data['meta']['description'];
			}
		}
	}

	if (is_singular('worktop')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'silestone' => 'kc_silestone_page_data',
			'dekton'    => 'kc_dekton_page_data',
			'neolith'   => 'kc_neolith_page_data',
			'sensa'     => 'kc_sensa_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['meta']['description'])) {
				return (string) $data['meta']['description'];
			}
		}
	}

	if (is_singular('appliance_category')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'kookplaten' => 'kc_kookplaten_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['meta']['description'])) {
				return (string) $data['meta']['description'];
			}
		}
	}

	if (is_page('aanbiedingen') && function_exists('kc_aanbiedingen_page_data')) {
		$data = kc_aanbiedingen_page_data();
		if (is_array($data) && ! empty($data['meta']['description'])) {
			return (string) $data['meta']['description'];
		}
	}

	if (is_page('contact') && function_exists('kc_contact_page_data')) {
		$data = kc_contact_page_data();
		if (is_array($data) && ! empty($data['meta']['description'])) {
			return (string) $data['meta']['description'];
		}
	}

	if (is_page('showroom-keukens') && function_exists('kc_showroom_keukens_page_data')) {
		$data = kc_showroom_keukens_page_data();
		if (is_array($data) && ! empty($data['meta']['description'])) {
			return (string) $data['meta']['description'];
		}
	}

	if (is_page('consultation') && function_exists('kc_consultation_page_data')) {
		$data = kc_consultation_page_data();
		if (is_array($data) && ! empty($data['meta']['description'])) {
			return (string) $data['meta']['description'];
		}
	}

	if ( function_exists( 'kc_is_configurator_route' ) && kc_is_configurator_route() && function_exists( 'kc_configurator_seo_for_step' ) ) {
		$seo = kc_configurator_seo_for_step( kc_configurator_current_step() );
		if ( ! empty( $seo['description'] ) ) {
			return (string) $seo['description'];
		}
	}

	if (is_singular()) {
		$excerpt = get_the_excerpt();
		if (is_string($excerpt) && '' !== trim(wp_strip_all_tags($excerpt))) {
			return wp_strip_all_tags($excerpt);
		}
	}

	if (is_post_type_archive('kitchen_brand') && function_exists('kc_keukens_overview_data')) {
		$data = kc_keukens_overview_data();
		if (! empty($data['meta']['description'])) {
			return $data['meta']['description'];
		}
	}

	$series_slug = get_query_var('kc_leicht_series');
	if (is_string($series_slug) && '' !== $series_slug && function_exists('kc_leicht_series_data')) {
		$series = kc_leicht_series_data($series_slug);
		if ($series && ! empty( $series['seo_description'] )) {
			return (string) $series['seo_description'];
		}
		if ($series && ! empty($series['description'][0])) {
			return (string) $series['description'][0];
		}
	}

	if (is_post_type_archive('worktop') && function_exists('kc_keukenbladen_overview_data')) {
		$data = kc_keukenbladen_overview_data();
		if (! empty($data['meta']['description'])) {
			return (string) $data['meta']['description'];
		}
	}

	if (is_post_type_archive('worktop')) {
		return 'Keukenbladen van Silestone, Dekton, Neolith en Sensa — materiaaladvies in onze showroom in Utrecht.';
	}

	if (is_post_type_archive('appliance_category')) {
		return 'Hoogwaardige inbouwapparatuur: kookplaten, afzuiging, Quooker, ovens en meer bij Keuken-Centrum Utrecht.';
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
	if (is_post_type_archive('worktop')) {
		$url = home_url('/keukenbladen/');
	}
	if (is_post_type_archive('kitchen_brand')) {
		$url = home_url('/keukens/');
	}

	$series_slug = get_query_var('kc_leicht_series');
	if (is_string($series_slug) && '' !== $series_slug) {
		$url = home_url('/keukens/leicht/' . rawurlencode($series_slug) . '/');
	}

	$image = '';
	if (is_string($series_slug) && '' !== $series_slug && function_exists('kc_leicht_series_data')) {
		$series = kc_leicht_series_data($series_slug);
		if ($series && ! empty($series['heroImage'])) {
			$image = (string) $series['heroImage'];
		}
	}
	if ('' === $image && is_singular('kitchen_brand')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'leicht'    => 'kc_leicht_page_data',
			'nobilia'   => 'kc_nobilia_page_data',
			'ai-kuchen' => 'kc_ai_kuchen_page_data',
			'zampieri'  => 'kc_zampieri_page_data',
			'cucinesse' => 'kc_cucinesse_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['hero']['image'])) {
				$image = (string) $data['hero']['image'];
			}
		}
	}
	if ('' === $image && is_singular('worktop')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'silestone' => 'kc_silestone_page_data',
			'dekton'    => 'kc_dekton_page_data',
			'neolith'   => 'kc_neolith_page_data',
			'sensa'     => 'kc_sensa_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['hero']['image'])) {
				$image = (string) $data['hero']['image'];
			}
		}
	}
	if ('' === $image && is_singular('appliance_category')) {
		$slug = get_post_field('post_name', get_queried_object_id());
		$map  = [
			'kookplaten' => 'kc_kookplaten_page_data',
		];
		if (is_string($slug) && isset($map[ $slug ]) && function_exists($map[ $slug ])) {
			$data = call_user_func($map[ $slug ]);
			if (is_array($data) && ! empty($data['hero']['image'])) {
				$image = (string) $data['hero']['image'];
			}
		}
	}
	if ('' === $image && is_page('aanbiedingen') && function_exists('kc_aanbiedingen_page_data')) {
		$data = kc_aanbiedingen_page_data();
		if (is_array($data) && ! empty($data['hero']['image'])) {
			$image = (string) $data['hero']['image'];
		}
	}
	if ('' === $image && is_page('contact') && function_exists('kc_contact_page_data')) {
		$data = kc_contact_page_data();
		if (is_array($data) && ! empty($data['hero']['image'])) {
			$image = (string) $data['hero']['image'];
		}
	}
	if ('' === $image && is_page('showroom-keukens') && function_exists('kc_showroom_keukens_page_data')) {
		$data = kc_showroom_keukens_page_data();
		if (is_array($data) && ! empty($data['hero']['image'])) {
			$image = (string) $data['hero']['image'];
		}
	}
	if ('' === $image && is_page('consultation') && function_exists('kc_consultation_page_data')) {
		$data = kc_consultation_page_data();
		if (is_array($data) && ! empty($data['hero']['image'])) {
			$image = (string) $data['hero']['image'];
		}
	}
	if ('' === $image && is_post_type_archive('worktop') && function_exists('kc_keukenbladen_overview_data')) {
		$data = kc_keukenbladen_overview_data();
		if (is_array($data) && ! empty($data['hero']['image'])) {
			$image = (string) $data['hero']['image'];
		}
	}
	if ('' === $image && is_singular() && has_post_thumbnail()) {
		$image = (string) get_the_post_thumbnail_url(null, 'full');
	}
	if ('' === $image) {
		$image = kc_theme_img('logo-keuken.webp') ?: kc_theme_img('hero/hero_img1.webp');
	}

	echo '<meta name="description" content="' . esc_attr($description) . '">' . "\n";
	echo '<link rel="canonical" href="' . esc_url($url) . '">' . "\n";

	// Favicon fallback when no Customizer site icon is set.
	if (! function_exists('has_site_icon') || ! has_site_icon()) {
		$icon = kc_theme_img('logo-keuken.webp') ?: kc_theme_img('logo.png');
		if ($icon) {
			echo '<link rel="icon" href="' . esc_url($icon) . '">' . "\n";
			echo '<link rel="apple-touch-icon" href="' . esc_url($icon) . '">' . "\n";
		}
	}

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
 * Builds the standard public robots.txt body used by WordPress.
 */
function kc_get_robots_txt_body(bool $public): string {
	if (! $public) {
		return "User-agent: *\nDisallow: /\n";
	}

	$sitemap = home_url('/wp-sitemap.xml');
	return "User-agent: *\nDisallow: /wp-admin/\nAllow: /wp-admin/admin-ajax.php\n\nSitemap: {$sitemap}\n";
}

/**
 * Ensures public indexing defaults for production (virtual robots_txt filter).
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

/**
 * Some hosts (including this LiteSpeed/hws stack) return 404 for /robots.txt
 * when no physical file exists, before WordPress can serve the virtual one.
 * Create a sensible physical robots.txt in the web root when missing.
 */
function kc_ensure_physical_robots_txt(): void {
	$path = trailingslashit(ABSPATH) . 'robots.txt';

	if (file_exists($path)) {
		return;
	}

	if (! wp_is_writable(ABSPATH)) {
		return;
	}

	$public  = ( '0' !== (string) get_option('blog_public') );
	$content = kc_get_robots_txt_body($public);

	// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_file_put_contents
	file_put_contents($path, $content);
}
add_action('init', 'kc_ensure_physical_robots_txt', 1);
