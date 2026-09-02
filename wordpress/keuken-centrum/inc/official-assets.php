<?php
/**
 * Official Keuken-Centrum photography — curated with brand + copy metadata.
 *
 * Images sourced from keuken-centrum.nl; each entry documents what the photo
 * actually shows so sections never mislabel a showroom shot.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Curated catalog: path, brand, alt, and intended editorial use.
 *
 * @return array<string, array{path:string,brand:string,alt:string,use:string}>
 */
function kc_official_catalog(): array {
	return [
		'modern-showroom' => [
			'path'  => 'collections/official/modern-leicht-showroom.jpg',
			'brand' => 'Leicht',
			'alt'   => 'Leicht showroomkeuken met architecturale lijnen in Utrecht',
			'use'   => 'modern',
		],
		'klassiek-aluro' => [
			'path'  => 'collections/official/klassiek-leicht-aluro.JPG',
			'brand' => 'Leicht',
			'alt'   => 'Leicht Aluro keuken met warme, verfijnde afwerking',
			'use'   => 'klassiek',
		],
		'showroom-island' => [
			'path'  => 'collections/official/landelijk-showroom-island.jpg',
			'brand' => 'Keuken-Centrum',
			'alt'   => 'Keukeneiland in de showroom van Keuken-Centrum Utrecht',
			'use'   => 'showroom',
		],
		'industrieel-aikuchen' => [
			'path'  => 'collections/official/industrieel-ai-kuchen.webp',
			'brand' => 'Ai Küchen',
			'alt'   => 'Ai Küchen keuken met industrieel karakter in de showroom',
			'use'   => 'industrieel',
		],
		'keuken-indeling' => [
			'path'  => 'collections/official/extras/keuken-indeling.jpg',
			'brand' => 'Keuken-Centrum',
			'alt'   => 'Keukenindeling met doordachte werkzones in de showroom',
			'use'   => 'indeling',
		],
		'showroom-breed' => [
			'path'  => 'collections/official/extras/showroom-breed.jpg',
			'brand' => 'Keuken-Centrum',
			'alt'   => 'Breed overzicht van de showroom van Keuken-Centrum Utrecht',
			'use'   => 'showroom',
		],
		'leicht-keuken' => [
			'path'  => 'collections/official/extras/leicht-keuken.webp',
			'brand' => 'Leicht',
			'alt'   => 'Leicht keuken met premium materiaal- en lichtdetails',
			'use'   => 'design',
		],
		'keuken-op-maat' => [
			'path'  => 'collections/official/extras/keuken-op-maat.webp',
			'brand' => 'Leicht',
			'alt'   => 'Op-maat keuken van vloer tot plafond',
			'use'   => 'maatwerk',
		],
		'leicht-aluro-actie' => [
			'path'  => 'collections/official/extras/leicht-aluro-actie.jpg',
			'brand' => 'Leicht',
			'alt'   => 'Leicht Aluro actiekeuken in de showroom',
			'use'   => 'klassiek',
		],
		'showroom-card' => [
			'path'  => 'showroom-keukens/official/showroom-keuken.png',
			'brand' => 'Keuken-Centrum',
			'alt'   => 'Showroomkeuken direct leverbaar uit Utrecht',
			'use'   => 'showroom',
		],
	];
}

/**
 * Resolve a catalog entry to a public URI.
 */
function kc_official_asset(string $key): string {
	$catalog = kc_official_catalog();
	if (! isset($catalog[ $key ])) {
		return '';
	}
	return kc_theme_img($catalog[ $key ]['path']);
}

/**
 * Alt text for an official asset.
 */
function kc_official_alt(string $key): string {
	$catalog = kc_official_catalog();
	return $catalog[ $key ]['alt'] ?? '';
}

/**
 * Brand label for an official asset (e.g. "Leicht").
 */
function kc_official_brand(string $key): string {
	$catalog = kc_official_catalog();
	return $catalog[ $key ]['brand'] ?? '';
}

/**
 * Collection cards: image + copy aligned with what each official photo shows.
 *
 * @return list<array<string, string>>
 */
function kc_official_collection_items(): array {
	$img = static function (string $key, string $fallback_rel): string {
		return kc_official_asset($key) ?: kc_theme_img($fallback_rel);
	};

	return [
		[
			'number'      => '01',
			'label'       => 'LEICHT · MODERNE COLLECTIE',
			'title'       => 'Modern Wonen',
			'descriptor'  => 'Architecturaal · Leicht · Minimalistisch',
			'description' => 'Slanke Leicht-lijnen en functionele elegantie — zoals te zien in onze Utrecht showroom.',
			'image'       => $img('modern-showroom', 'collections/modern-base.webp'),
			'image_alt'   => kc_official_alt('modern-showroom'),
			'brand_tag'   => 'Leicht',
		],
		[
			'number'      => '02',
			'label'       => 'LEICHT ALURO · KLASSIEKE COLLECTIE',
			'title'       => 'Klassieke Elegantie',
			'descriptor'  => 'Warm · Elegant · Verfijnd',
			'description' => 'De Leicht Aluro-lijn met rijke materialen en tijdloze verhoudingen.',
			'image'       => $img('klassiek-aluro', 'collections/klassiek-base.webp'),
			'image_alt'   => kc_official_alt('klassiek-aluro'),
			'brand_tag'   => 'Leicht Aluro',
		],
		[
			'number'      => '03',
			'label'       => 'LANDELIJKE COLLECTIE',
			'title'       => 'Landelijk Erfgoed',
			'descriptor'  => 'Natuurlijk · Authentiek · Uitnodigend',
			'description' => 'Warme texturen en ambachtelijke details — onze adviseurs tonen passende landelijke stijlen in de showroom.',
			'image'       => kc_theme_img('collections/landelijk-base.webp') ?: kc_theme_img('collections/landelijk.jpg'),
			'image_alt'   => 'Landelijke keuken met warme hout- en natuurtonen',
			'brand_tag'   => 'Diverse merken',
		],
		[
			'number'      => '04',
			'label'       => 'AI KÜCHEN · INDUSTRIËLE COLLECTIE',
			'title'       => 'Industrieel Atelier',
			'descriptor'  => 'Krachtig · Karaktervol · Hedendaags',
			'description' => 'Ai Küchen in de showroom: rauwe materialen en een eigenzinnig, industrieel karakter.',
			'image'       => $img('industrieel-aikuchen', 'collections/industrieel-base.webp'),
			'image_alt'   => kc_official_alt('industrieel-aikuchen'),
			'brand_tag'   => 'Ai Küchen',
		],
	];
}

/**
 * @deprecated Use kc_official_collection_items().
 * @return list<string>
 */
function kc_official_collection_images(): array {
	return array_column(kc_official_collection_items(), 'image');
}

/**
 * Consultation gallery — editorial sequence of the showroom visit journey.
 *
 * @return list<array{src:string,label:string,tag:string,alt:string}>
 */
function kc_official_consultation_gallery(): array {
	$slides = [
		[
			'key'   => 'showroom-breed',
			'label' => 'Showroom Utrecht',
			'tag'   => '5.000 m² inspiratie',
		],
		[
			'key'   => 'showroom-island',
			'label' => 'Keukeneiland',
			'tag'   => 'Live in showroom',
		],
		[
			'key'   => 'modern-showroom',
			'label' => 'Leicht Collectie',
			'tag'   => 'Architecturaal design',
		],
		[
			'key'   => 'klassiek-aluro',
			'label' => 'Leicht Aluro',
			'tag'   => 'Warm & verfijnd',
		],
		[
			'key'   => 'industrieel-aikuchen',
			'label' => 'Ai Küchen',
			'tag'   => 'Industrieel karakter',
		],
		[
			'key'   => 'leicht-keuken',
			'label' => 'Materiaal & Detail',
			'tag'   => 'Premium afwerking',
		],
		[
			'key'   => 'keuken-indeling',
			'label' => 'Slimme Indeling',
			'tag'   => 'Werkzones & routing',
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
			'alt'   => kc_official_alt($slide['key']),
		];
	}

	return $out;
}

/**
 * Pick a testimonial thumbnail that matches the project brand mentioned in the tag.
 */
function kc_official_testimonial_image(string $brand_tag): string {
	$tag = strtoupper($brand_tag);

	if (str_contains($tag, 'LEICHT')) {
		return kc_official_asset('klassiek-aluro')
			?: kc_official_asset('leicht-keuken')
			?: kc_theme_img('brands/leicht-hero.webp');
	}
	if (str_contains($tag, 'NOBILIA')) {
		return kc_theme_img('brands/nobilia-hero.webp') ?: kc_theme_img('collections/klassiek-base.webp');
	}
	if (str_contains($tag, 'AI') || str_contains($tag, 'KÜCHEN') || str_contains($tag, 'KUCHEN')) {
		return kc_official_asset('industrieel-aikuchen') ?: kc_theme_img('brands/aikuchen-showroom-1.webp');
	}
	if (str_contains($tag, 'ZAMPIERI')) {
		return kc_theme_img('brands/zampieri-hero.webp') ?: kc_theme_img('experience/Design_keukens.webp');
	}
	if (str_contains($tag, 'CUCINESSE')) {
		return kc_theme_img('brands/cucinesse-hero.webp') ?: kc_theme_img('experience/Design_keukens.webp');
	}

	return kc_official_asset('showroom-breed') ?: kc_theme_img('showroom.jpg');
}

/**
 * Experience cards with copy matched to official photography.
 *
 * @return list<array<string, mixed>>
 */
function kc_official_experience_cards(): array {
	$keukens_url = get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens');

	return [
		[
			'number'      => '01',
			'featured'    => true,
			'tag'         => 'Leicht signatuur',
			'kicker'      => 'Design Collectie',
			'title'       => 'Design Keukens',
			'description' => 'Leicht-keukens met verfijnde materialen en architecturale verhoudingen — te bezichtigen in Utrecht.',
			'image'       => kc_official_asset('leicht-keuken') ?: kc_theme_img('experience/Design_keukens.webp'),
			'image_alt'   => kc_official_alt('leicht-keuken'),
			'href'        => $keukens_url,
		],
		[
			'number'      => '02',
			'featured'    => false,
			'tag'         => 'Leicht showroom',
			'kicker'      => 'Modern Wonen',
			'title'       => 'Moderne Keukens',
			'description' => 'Hedendaagse Leicht-opstellingen met slanke lijnen en intelligente indeling.',
			'image'       => kc_official_asset('modern-showroom') ?: kc_theme_img('experience/Modern_keukens.webp'),
			'image_alt'   => kc_official_alt('modern-showroom'),
			'href'        => home_url('/#collections'),
		],
		[
			'number'      => '03',
			'featured'    => false,
			'tag'         => 'Showroom Utrecht',
			'kicker'      => 'Voor elk budget',
			'title'       => 'Keukens voor elke prijs',
			'description' => 'Leicht, Nobilia en Ai Küchen onder één dak — persoonlijk advies voor elk budget.',
			'image'       => kc_official_asset('showroom-breed') ?: kc_theme_img('experience/Keukens_voor_elke_prijs.webp'),
			'image_alt'   => kc_official_alt('showroom-breed'),
			'href'        => home_url('/consultation/'),
		],
	];
}

/**
 * Why pillars with imagery that supports each promise.
 *
 * @return array<string, array{image:string,image_alt:string}>
 */
function kc_official_why_images(): array {
	return [
		'vakmanschap' => [
			'image'     => kc_official_asset('leicht-keuken') ?: kc_theme_img('why/why-vakmanschap.webp'),
			'image_alt' => kc_official_alt('leicht-keuken') ?: 'Europees vakmanschap met precisie en kwaliteit',
		],
		'persoonlijk' => [
			'image'     => kc_official_asset('showroom-breed') ?: kc_theme_img('why/why-persoonlijk.webp'),
			'image_alt' => kc_official_alt('showroom-breed') ?: 'Persoonlijke consultatie in de showroom',
		],
		'materialen' => [
			'image'     => kc_official_asset('klassiek-aluro') ?: kc_theme_img('why/why-materialen.webp'),
			'image_alt' => kc_official_alt('klassiek-aluro') ?: 'Premium materialen en afwerkingen',
		],
		'service' => [
			'image'     => kc_official_asset('keuken-op-maat') ?: kc_theme_img('why/why-service.webp'),
			'image_alt' => kc_official_alt('keuken-op-maat') ?: 'Op-maat keuken en vakkundige montage',
		],
	];
}

/**
 * Hero slides: official photos only when the brand label is truthful.
 *
 * @return array<int, array{url:string,brand:string}>
 */
function kc_official_hero_slides(): array {
	$brand_official = [
		[ 'key' => 'modern-showroom', 'brand' => 'LEICHT' ],
		[ 'key' => 'leicht-keuken', 'brand' => 'LEICHT' ],
		[ 'key' => 'industrieel-aikuchen', 'brand' => 'AI KÜCHEN' ],
	];

	$out = [];
	foreach ($brand_official as $slide) {
		$url = kc_official_asset($slide['key']);
		if ('' === $url) {
			continue;
		}
		$out[] = [
			'url'   => $url,
			'brand' => $slide['brand'],
		];
	}

	$have = array_column($out, 'brand');
	$theme_heroes = [
		[ 'path' => 'brands/nobilia-hero.webp', 'brand' => 'NOBILIA' ],
		[ 'path' => 'brands/zampieri-hero.webp', 'brand' => 'ZAMPIERI' ],
		[ 'path' => 'brands/cucinesse-hero.webp', 'brand' => 'CUCINESSE' ],
	];

	foreach ($theme_heroes as $hero) {
		if (in_array($hero['brand'], $have, true)) {
			continue;
		}
		$url = kc_theme_img($hero['path']);
		if ('' === $url) {
			continue;
		}
		$out[] = [
			'url'   => $url,
			'brand' => $hero['brand'],
		];
		$have[] = $hero['brand'];
	}

	// Showroom island as neutral Keuken-Centrum slide (no false brand claim).
	$island = kc_official_asset('showroom-island');
	if ($island) {
		$out[] = [
			'url'   => $island,
			'brand' => 'KEUKEN-CENTRUM',
		];
	}

	return $out;
}
