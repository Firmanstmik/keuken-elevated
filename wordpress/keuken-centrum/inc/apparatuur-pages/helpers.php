<?php
/**
 * Apparatuur page helpers.
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
 * Legacy production media (React SoT assets on keuken-centrum.nl uploads).
 */
function kc_apparatuur_upload( string $relative ): string {
	return 'https://keuken-centrum.nl/wp-content/uploads/' . ltrim( $relative, '/' );
}

/**
 * Prefer a local theme file when present; otherwise the React upload URL.
 */
function kc_apparatuur_src( string $local_file, string $upload_relative ): string {
	$local_file = ltrim( $local_file, '/' );
	if ( '' !== $local_file ) {
		$path = get_theme_file_path( 'assets/img/apparatuur/' . $local_file );
		if ( is_string( $path ) && $path && file_exists( $path ) ) {
			return kc_apparatuur_img( $local_file );
		}
	}
	return kc_apparatuur_upload( $upload_relative );
}

/**
 * Canonical React category slugs.
 *
 * @return list<string>
 */
function kc_apparatuur_canonical_slugs(): array {
	return [
		'afzuigkappen',
		'werkblad-afzuiging',
		'kookplaten',
		'fornuizen',
		'koelkasten-vriezers',
		'vaatwassers',
		'quooker',
		'wave-afzuigkappen',
	];
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
 * Overview category cards (React apparatuurOverview.categories).
 *
 * @return array<int, array<string, string>>
 */
function kc_apparatuur_overview_categories(): array {
	$cats = [
		[
			'id'          => 'afzuigkappen',
			'name'        => __( 'Afzuigkappen', 'keuken-centrum' ),
			'tagline'     => __( 'Eiland · Schouw · Inbouw · Plafond · BORA', 'keuken-centrum' ),
			'description' => __( 'Breed assortiment afzuigkappen voor elke keukenstijl. Vooral eiland- en schouwkappen hangen prominent in het zicht. Daarom kiezen wij voor design én vermogen.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'afzuigkappen.webp', '2019/01/eiland-afzuigkappen-keukens.webp' ),
		],
		[
			'id'          => 'werkblad-afzuiging',
			'name'        => __( 'Werkblad afzuiging', 'keuken-centrum' ),
			'tagline'     => __( 'BORA · kookveldafzuiging', 'keuken-centrum' ),
			'description' => __( 'Geuren worden direct bij de bron weggezogen. Een overhangende kap is niet nodig, waardoor u vrij zicht, stil vermogen en een ultraminimaal keukenbeeld krijgt.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'kookplaat-afzuiging.webp', '2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp' ),
		],
		[
			'id'          => 'kookplaten',
			'name'        => __( 'Kookplaten', 'keuken-centrum' ),
			'tagline'     => __( 'Inductie · Keramisch · Domino · Afzuiging', 'keuken-centrum' ),
			'description' => __( 'Inductie, keramisch, domino-elementen en kookplaten met geïntegreerde afzuiging van topmerken zoals Siemens, Miele, Bosch en BORA.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'inductie-kookplaat.webp', 'inductie_kookplaat.webp' ),
		],
		[
			'id'          => 'fornuizen',
			'name'        => __( 'Fornuizen', 'keuken-centrum' ),
			'tagline'     => __( 'AGA · Falcon · La Cornue · Lofra', 'keuken-centrum' ),
			'description' => __( 'Exclusieve fornuizen van AGA, Falcon, Steel, La Cornue, Lofra en Viking, met strakke prijzen en in principe een korte levertijd van 2 dagen.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'fornuizen.webp', '2018/03/LaCornue.webp' ),
		],
		[
			'id'          => 'koelkasten-vriezers',
			'name'        => __( 'Koelkasten & Vriezers', 'keuken-centrum' ),
			'tagline'     => __( 'Inbouw · Vrijstaand · Wijnkoelers', 'keuken-centrum' ),
			'description' => __( 'Keeping it cool. Inbouwkoelkasten die verdwijnen in uw design, of een vrijstaande koelkast of wijnkoeler als eye-catcher.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'koelkasten-vriezers.webp', '2020/03/MCIM02473755_Siemens_Campaign_REU_cooling_modularFit_01_4_3.webp' ),
		],
		[
			'id'          => 'vaatwassers',
			'name'        => __( 'Vaatwassers', 'keuken-centrum' ),
			'tagline'     => __( 'Siemens · Bosch · Miele', 'keuken-centrum' ),
			'description' => __( 'Stille, efficiënte inbouwvaatwassers van Siemens, Bosch en Miele, volledig geïntegreerd in uw keukenfront.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'vaatwassers.webp', '2020/03/MCMI02365333_Siemens_Global_Category_Dishwashing_SN678X36TE_01_4_3.webp' ),
		],
		[
			'id'          => 'quooker',
			'name'        => __( 'Quooker', 'keuken-centrum' ),
			'tagline'     => __( '100°C · Gekoeld · Bruisend', 'keuken-centrum' ),
			'description' => __( 'De kraan die alles kan: direct kokend water, en optioneel gekoeld of bruisend. Fusion, Flex en Nordic Classic zijn altijd op voorraad in de showroom.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'quooker.webp', 'fusion_square_black_carbon_kook_model_3-1.webp' ),
		],
		[
			'id'          => 'wave-afzuigkappen',
			'name'        => __( 'Wave afzuigkappen', 'keuken-centrum' ),
			'tagline'     => __( 'Design · Maatwerk · Verlichting', 'keuken-centrum' ),
			'description' => __( 'Wave Design staat synoniem voor bijzondere afzuigkappen en verlichting. Hoogwaardige afwerking tot in het kleinste detail, volledig op maat.', 'keuken-centrum' ),
			'image'       => kc_apparatuur_src( 'wave-afzuigkappen.webp', 'Wave-Model-2119-Alphenberg.webp' ),
		],
	];

	foreach ( $cats as &$item ) {
		$item['href'] = home_url( '/apparatuur/' . $item['id'] . '/' );
	}
	unset( $item );

	return $cats;
}

/**
 * Related categories for a slug (React: filter !== slug, slice 0,3).
 *
 * @return array<int, array{id:string,name:string,tagline:string,image:string,href:string}>
 */
function kc_apparatuur_related( string $slug ): array {
	$out = [];
	foreach ( kc_apparatuur_overview_categories() as $item ) {
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

/**
 * Shared showroom CTA (React showroomBase).
 *
 * @return array{title:string,highlight:string,body:string,primaryLabel:string,secondaryLabel:string}
 */
function kc_apparatuur_showroom_cta( string $title, string $highlight ): array {
	return [
		'title'          => $title,
		'highlight'      => $highlight,
		'body'           => __( 'Bekijk de apparatuur live in onze showroom op de Zonnebaan, met persoonlijk advies, een scherpe prijs en snelle levering.', 'keuken-centrum' ),
		'primaryLabel'   => __( 'Boek een afspraak', 'keuken-centrum' ),
		'secondaryLabel' => __( 'Bel direct', 'keuken-centrum' ),
	];
}

/**
 * Attach runtime fields shared by every category page.
 *
 * @param array<string, mixed> $page Category payload.
 * @return array<string, mixed>
 */
function kc_apparatuur_hydrate_category( array $page ): array {
	$slug            = (string) ( $page['slug'] ?? '' );
	$page['phone']   = (string) kc_get_option( 'contact_phone', '030 241 5122' );
	$page['related'] = kc_apparatuur_related( $slug );
	$page['brands']  = kc_apparatuur_brands();
	if ( empty( $page['faq'] ) ) {
		$page['faq'] = kc_apparatuur_faq();
	}

	return $page;
}

/**
 * Redirect leftover CPT slugs that are not React routes.
 */
function kc_apparatuur_redirect_noncanonical(): void {
	if ( ! is_singular( 'appliance_category' ) ) {
		return;
	}

	$slug = get_post_field( 'post_name', get_queried_object_id() );
	if ( ! is_string( $slug ) || '' === $slug ) {
		return;
	}

	if ( in_array( $slug, kc_apparatuur_canonical_slugs(), true ) ) {
		return;
	}

	$aliases = [
		'koelkasten' => 'koelkasten-vriezers',
		'wijnklimaat' => 'koelkasten-vriezers',
		'ovens'      => '',
	];

	if ( isset( $aliases[ $slug ] ) ) {
		$target = '' === $aliases[ $slug ]
			? home_url( '/apparatuur/' )
			: home_url( '/apparatuur/' . $aliases[ $slug ] . '/' );
		wp_safe_redirect( $target, 301 );
		exit;
	}

	wp_safe_redirect( home_url( '/apparatuur/' ), 301 );
	exit;
}
add_action( 'template_redirect', 'kc_apparatuur_redirect_noncanonical', 20 );

/**
 * Current route data for SEO.
 *
 * @return array<string, mixed>|null
 */
function kc_apparatuur_current_data(): ?array {
	if ( is_post_type_archive( 'appliance_category' ) && function_exists( 'kc_apparatuur_overview_data' ) ) {
		return kc_apparatuur_overview_data();
	}
	if ( is_singular( 'appliance_category' ) && function_exists( 'kc_apparatuur_category_data' ) ) {
		$slug = get_post_field( 'post_name', get_queried_object_id() );
		if ( is_string( $slug ) && '' !== $slug ) {
			return kc_apparatuur_category_data( $slug );
		}
	}

	return null;
}
