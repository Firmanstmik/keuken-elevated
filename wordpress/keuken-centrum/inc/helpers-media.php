<?php
/**
 * Media helpers for visual parity assets.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Returns a theme image URI if the file exists.
 */
function kc_theme_img(string $relative): string {
	$relative = ltrim($relative, '/');
	if (preg_match('/\.(jpe?g|png)$/i', $relative)) {
		$webp_rel = preg_replace('/\.(jpe?g|png)$/i', '.webp', $relative);
		if (is_string($webp_rel) && file_exists(get_theme_file_path('assets/img/' . $webp_rel))) {
			$relative = $webp_rel;
		}
	}
	$path = get_theme_file_path('assets/img/' . $relative);
	if (! file_exists($path)) {
		return '';
	}
	return kc_asset('assets/img/' . $relative);
}

/**
 * Maps kitchen brand slug to bundled hero/logo assets.
 *
 * @return array{hero:string,logo:string}
 */
function kc_brand_bundle(string $slug): array {
	$map = [
		/* Original remotes 404; showroom-1 = recovered AI-KUCHEN-…utrecht2-scaled.webp */
		'ai-kuchen'  => ['hero' => 'brands/aikuchen-showroom-1.webp', 'logo' => 'logos/aiKuchen_Logo.webp'],
		'aikuchen'   => ['hero' => 'brands/aikuchen-showroom-1.webp', 'logo' => 'logos/aiKuchen_Logo.webp'],
		'leicht'     => ['hero' => 'brands/leicht-hero.webp', 'logo' => 'logos/Leicht_Logo.webp'],
		'nobilia'    => ['hero' => 'brands/nobilia-hero.webp', 'logo' => 'logos/Nobilia_Logo.webp'],
		'zampieri'   => ['hero' => 'brands/zampieri-hero.webp', 'logo' => 'logos/Zampieri_Logo.webp'],
		'cucinesse'  => ['hero' => 'brands/cucinesse-hero.webp', 'logo' => 'logos/Cucinesse_Logo_Official.png'],
	];

	$key = strtolower($slug);
	if (! isset($map[ $key ])) {
		return ['hero' => '', 'logo' => ''];
	}

	return [
		'hero' => kc_theme_img($map[ $key ]['hero']),
		'logo' => kc_theme_img($map[ $key ]['logo']),
	];
}

/**
 * Default hero slideshow images (React parity).
 *
 * @return array<int, array{url:string,brand:string}>
 */
function kc_default_hero_slides(): array {
	if (function_exists('kc_official_hero_slides')) {
		$official = kc_official_hero_slides();
		if ($official) {
			return $official;
		}
	}

	$brands = [
		1 => 'LEICHT',
		2 => 'NOBILIA',
		3 => 'AI KÜCHEN',
		4 => 'ZAMPIERI',
		5 => 'CUCINESSE',
	];
	$slides = [];
	foreach ($brands as $n => $brand) {
		$uri = kc_theme_img('hero/hero_img' . $n . '.webp');
		if ($uri) {
			$slides[] = [
				'url'   => $uri,
				'brand' => $brand,
			];
		}
	}
	return $slides;
}
