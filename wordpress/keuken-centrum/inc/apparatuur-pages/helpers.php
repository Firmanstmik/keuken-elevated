<?php
/**
 * Apparatuur category page helpers.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Theme apparatuur image URI.
 */
function kc_apparatuur_img( string $filename ): string {
	return kc_theme_img( 'apparatuur/' . ltrim( $filename, '/' ) );
}

/**
 * True on Apparatuur archive / singles.
 */
function kc_is_apparatuur_route(): bool {
	return is_post_type_archive( 'appliance_category' ) || is_singular( 'appliance_category' );
}

/**
 * Appliance FAQ = shared kitchen FAQ + appliance-specific items (React applianceFaq).
 *
 * @return array<int, array{q:string,a:string}>
 */
function kc_apparatuur_faq(): array {
	$extra = [
		[
			'q' => __( 'Welke merken keukenapparatuur levert Keuken-Centrum?', 'keuken-centrum' ),
			'a' => __( 'Wij leveren onder andere Miele, Siemens, Bosch, Gaggenau, Neff, AEG, SMEG, ATAG, Pelgrim, BORA, AGA, Falcon, La Cornue, Lofra, Viking, KitchenAid en Quooker. Ziet u uw model niet? Wij bestellen vrijwel alles.', 'keuken-centrum' ),
		],
		[
			'q' => __( 'Kunnen jullie apparatuur ook apart leveren?', 'keuken-centrum' ),
			'a' => __( 'Ja. Wij verkopen keukeninbouwapparatuur ook apart tegen zeer voordelige prijzen en combineren bekende topmerken met kwalitatieve, scherp geprijsde alternatieven.', 'keuken-centrum' ),
		],
	];

	return array_merge( kc_brand_shared_faq(), $extra );
}

/**
 * Related categories for a slug (React: filter !== slug, slice 0,3).
 *
 * @return array<int, array{id:string,name:string,tagline:string,image:string,href:string}>
 */
function kc_apparatuur_related( string $slug ): array {
	$all = [
		[
			'id'      => 'afzuigkappen',
			'name'    => __( 'Afzuigkappen', 'keuken-centrum' ),
			'tagline' => __( 'Eiland · Schouw · Inbouw · Plafond · BORA', 'keuken-centrum' ),
			'image'   => kc_apparatuur_img( 'afzuigkappen.webp' ),
			'href'    => home_url( '/apparatuur/afzuigkappen/' ),
		],
		[
			'id'      => 'werkblad-afzuiging',
			'name'    => __( 'Werkblad afzuiging', 'keuken-centrum' ),
			'tagline' => __( 'BORA · kookveldafzuiging', 'keuken-centrum' ),
			'image'   => kc_apparatuur_img( 'kookplaat-afzuiging.webp' ),
			'href'    => home_url( '/apparatuur/werkblad-afzuiging/' ),
		],
		[
			'id'      => 'kookplaten',
			'name'    => __( 'Kookplaten', 'keuken-centrum' ),
			'tagline' => __( 'Inductie · Keramisch · Domino · Afzuiging', 'keuken-centrum' ),
			'image'   => kc_apparatuur_img( 'inductie-kookplaat.webp' ),
			'href'    => home_url( '/apparatuur/kookplaten/' ),
		],
		[
			'id'      => 'fornuizen',
			'name'    => __( 'Fornuizen', 'keuken-centrum' ),
			'tagline' => __( 'AGA · Falcon · La Cornue · Lofra', 'keuken-centrum' ),
			'image'   => kc_apparatuur_img( 'fornuizen.webp' ),
			'href'    => home_url( '/apparatuur/fornuizen/' ),
		],
	];

	$out = [];
	foreach ( $all as $item ) {
		if ( $item['id'] === $slug ) {
			continue;
		}
		$out[] = $item;
		if ( count( $out ) >= 3 ) {
			break;
		}
	}

	return $out;
}

/**
 * Brand marquee logos (React applianceBrands) — local verified replacements.
 *
 * @return array<int, array{name:string,logo:string}>
 */
function kc_apparatuur_brands(): array {
	return [
		[ 'name' => 'Miele', 'logo' => kc_apparatuur_img( 'Miele_Logo.webp' ) ],
		[ 'name' => 'Siemens', 'logo' => kc_apparatuur_img( 'Siemens_Logo.webp' ) ],
		[ 'name' => 'Bosch', 'logo' => kc_apparatuur_img( 'wordmark-bosch.svg' ) ],
		[ 'name' => 'Gaggenau', 'logo' => kc_apparatuur_img( 'Gaggenau_Logo.webp' ) ],
		[ 'name' => 'Neff', 'logo' => kc_apparatuur_img( 'wordmark-neff.svg' ) ],
		[ 'name' => 'AEG', 'logo' => kc_apparatuur_img( 'wordmark-aeg.svg' ) ],
		[ 'name' => 'SMEG', 'logo' => kc_apparatuur_img( 'wordmark-smeg.svg' ) ],
		[ 'name' => 'Pelgrim', 'logo' => kc_apparatuur_img( 'wordmark-pelgrim.svg' ) ],
		[ 'name' => 'BORA', 'logo' => kc_apparatuur_img( 'Bora_Logo.webp' ) ],
		[ 'name' => 'Quooker', 'logo' => kc_apparatuur_img( 'Quooker_Logo.webp' ) ],
	];
}
