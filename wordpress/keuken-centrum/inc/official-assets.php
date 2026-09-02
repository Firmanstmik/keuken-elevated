<?php
/**
 * Official Keuken-Centrum photography bundled from keuken-centrum.nl.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Resolve a bundled official asset path to a public URI.
 */
function kc_official_asset(string $key): string {
	static $map = null;

	if (null === $map) {
		$map = [
			'modern-showroom'    => 'collections/official/modern-leicht-showroom.jpg',
			'klassiek-aluro'     => 'collections/official/klassiek-leicht-aluro.JPG',
			'landelijk-island'   => 'collections/official/landelijk-showroom-island.jpg',
			'industrieel-aikuchen' => 'collections/official/industrieel-ai-kuchen.webp',
			'keuken-indeling'    => 'collections/official/extras/keuken-indeling.jpg',
			'showroom-breed'     => 'collections/official/extras/showroom-breed.jpg',
			'leicht-keuken'      => 'collections/official/extras/leicht-keuken.webp',
			'keuken-op-maat'     => 'collections/official/extras/keuken-op-maat.webp',
			'leicht-aluro-actie' => 'collections/official/extras/leicht-aluro-actie.jpg',
			'showroom-card'      => 'showroom-keukens/official/showroom-keuken.png',
		];
	}

	$relative = $map[ $key ] ?? '';
	if ('' === $relative) {
		return '';
	}

	return kc_theme_img($relative);
}

/**
 * Official collection card images with fallbacks.
 *
 * @return list<string>
 */
function kc_official_collection_images(): array {
	return [
		kc_official_asset('modern-showroom') ?: kc_theme_img('collections/modern-base.webp') ?: kc_theme_img('collections/modern.jpg'),
		kc_official_asset('klassiek-aluro') ?: kc_theme_img('collections/klassiek-base.webp') ?: kc_theme_img('collections/klassiek.jpg'),
		kc_official_asset('landelijk-island') ?: kc_theme_img('collections/landelijk-base.webp') ?: kc_theme_img('landelijk.jpg'),
		kc_official_asset('industrieel-aikuchen') ?: kc_theme_img('collections/industrieel-base.webp') ?: kc_theme_img('collections/industrieel.jpg'),
	];
}

/**
 * Premium consultation gallery built from official showroom photography.
 *
 * @return list<array{src:string,label:string,tag:string}>
 */
function kc_official_consultation_gallery(): array {
	$slides = [
		[
			'key'   => 'modern-showroom',
			'label' => 'Leicht Showroom',
			'tag'   => 'Architecturaal',
		],
		[
			'key'   => 'klassiek-aluro',
			'label' => 'Leicht Aluro',
			'tag'   => 'Warm & Elegant',
		],
		[
			'key'   => 'landelijk-island',
			'label' => 'Showroom Eiland',
			'tag'   => 'Utrecht',
		],
		[
			'key'   => 'industrieel-aikuchen',
			'label' => 'Ai Küchen Atelier',
			'tag'   => 'Industrieel',
		],
		[
			'key'   => 'leicht-keuken',
			'label' => 'Leicht Signatuur',
			'tag'   => 'Premium',
		],
		[
			'key'   => 'showroom-breed',
			'label' => 'Showroom Utrecht',
			'tag'   => '5.000 m²',
		],
		[
			'key'   => 'keuken-indeling',
			'label' => 'Slimme Indeling',
			'tag'   => 'Werkzones',
		],
		[
			'key'   => 'keuken-op-maat',
			'label' => 'Keuken op Maat',
			'tag'   => 'Vloer-tot-plafond',
		],
	];

	$out = [];
	foreach ($slides as $slide) {
		$src = kc_official_asset($slide['key']);
		if ('' === $src) {
			continue;
		}
		$out[] = [
			'src'   => $src,
			'label' => $slide['label'],
			'tag'   => $slide['tag'],
		];
	}

	return $out;
}

/**
 * Official imagery for testimonial cards.
 *
 * @return list<string>
 */
function kc_official_testimonial_media(): array {
	$keys = [
		'klassiek-aluro',
		'modern-showroom',
		'leicht-keuken',
		'landelijk-island',
		'showroom-breed',
		'leicht-aluro-actie',
	];

	$out = [];
	foreach ($keys as $key) {
		$src = kc_official_asset($key);
		if ('' !== $src) {
			$out[] = $src;
		}
	}

	return $out;
}

/**
 * Hero slideshow using official showroom photography where available.
 *
 * @return array<int, array{url:string,brand:string}>
 */
function kc_official_hero_slides(): array {
	$slides = [
		[ 'key' => 'modern-showroom', 'brand' => 'LEICHT' ],
		[ 'key' => 'klassiek-aluro', 'brand' => 'NOBILIA' ],
		[ 'key' => 'industrieel-aikuchen', 'brand' => 'AI KÜCHEN' ],
		[ 'key' => 'leicht-keuken', 'brand' => 'LEICHT' ],
		[ 'key' => 'landelijk-island', 'brand' => 'ZAMPIERI' ],
	];

	$out = [];
	foreach ($slides as $slide) {
		$url = kc_official_asset($slide['key']);
		if ('' === $url) {
			continue;
		}
		$out[] = [
			'url'   => $url,
			'brand' => $slide['brand'],
		];
	}

	return $out;
}
