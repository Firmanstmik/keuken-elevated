<?php
/**
 * Footer data — React Footer.tsx source of truth + CMS overrides.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_footer_data(): array {
	$founded = (string) kc_get_option( 'founded_year', '1978' );
	$phone   = (string) kc_get_option( 'contact_phone', '030 241 5122' );
	$email   = (string) kc_get_option( 'contact_email', 'info@keuken-centrum.nl' );
	$address = (string) kc_get_option( 'contact_address', 'Zonnebaan 8' );
	$postal  = (string) kc_get_option( 'contact_postal', '3542 EC Utrecht' );
	$rating  = (string) kc_get_option( 'google_rating', '4.9★' );
	if ( $rating && ! str_contains( $rating, '★' ) && ! str_contains( $rating, '*' ) ) {
		$rating = rtrim( str_replace( ',', '.', $rating ), '★' ) . '★';
	}

	$phone_href = (string) kc_get_option( 'contact_phone_href', 'tel:+31302415122' );
	if ( '' === $phone_href || ! str_starts_with( $phone_href, 'tel:' ) ) {
		$digits     = preg_replace( '/\D+/', '', $phone );
		$phone_href = 'tel:+' . ( str_starts_with( (string) $digits, '31' ) ? $digits : '31' . ltrim( (string) $digits, '0' ) );
	}

	$maps = (string) kc_get_option(
		'contact_maps_url',
		'https://www.google.com/maps/place/Keuken-centrum.nl/@52.1187967,5.0434307,17z'
	);

	$consultation = function_exists( 'kc_consultation_url' ) ? kc_consultation_url() : home_url( '/consultation/' );
	$brands_url   = (string) kc_get_option( 'configurator_url', home_url( '/#brands' ) );

	$hours = kc_footer_hours_rows();

	$nav_groups = [
		[
			'title' => (string) kc_get_option( 'footer_col_collections_title', __( 'Collecties', 'keuken-centrum' ) ),
			'links' => kc_footer_link_rows(
				'footer_col_collections',
				[
					[ __( 'Moderne Keukens', 'keuken-centrum' ), home_url( '/keukens/' ) ],
					[ __( 'Landelijke Keukens', 'keuken-centrum' ), home_url( '/keukens/' ) ],
					[ __( 'Klassieke Keukens', 'keuken-centrum' ), home_url( '/keukens/' ) ],
					[ __( 'Industriële Keukens', 'keuken-centrum' ), home_url( '/keukens/' ) ],
				]
			),
		],
		[
			'title' => (string) kc_get_option( 'footer_col_digital_title', __( 'Digitaal Ontwerp', 'keuken-centrum' ) ),
			'links' => kc_footer_link_rows(
				'footer_col_digital',
				[
					[ __( 'Kies uw stijl', 'keuken-centrum' ), $brands_url ],
					[ __( 'Ontdek materialen', 'keuken-centrum' ), $brands_url ],
					[ __( 'Creëer moodboard', 'keuken-centrum' ), $brands_url ],
					[ __( 'Vraag advies aan', 'keuken-centrum' ), $consultation ],
				]
			),
		],
		[
			'title' => (string) kc_get_option( 'footer_col_about_title', __( 'Over Keuken Centrum', 'keuken-centrum' ) ),
			'links' => kc_footer_link_rows(
				'footer_col_about',
				[
					[ __( 'Ons verhaal', 'keuken-centrum' ), home_url( '/' ) ],
					[ __( 'Onze merken', 'keuken-centrum' ), home_url( '/keukens/' ) ],
					[ __( 'Projecten', 'keuken-centrum' ), home_url( '/#reviews' ) ],
					[ __( 'Showroom', 'keuken-centrum' ), home_url( '/showroom-keukens/' ) ],
					[ __( 'Blog & Inspiratie', 'keuken-centrum' ), home_url( '/' ) ],
				]
			),
		],
		[
			'title' => (string) kc_get_option( 'footer_col_service_title', __( 'Klantenservice', 'keuken-centrum' ) ),
			'links' => kc_footer_link_rows(
				'footer_col_service',
				[
					[ __( 'Afspraak maken', 'keuken-centrum' ), $consultation ],
					[ __( 'Offerte aanvragen', 'keuken-centrum' ), $consultation ],
					[ __( 'Veelgestelde vragen', 'keuken-centrum' ), home_url( '/contact/' ) ],
				]
			),
		],
	];

	$mobile_groups = [
		[
			'title' => __( 'Keukens & inspiratie', 'keuken-centrum' ),
			'links' => [
				[ __( 'Alle keukens', 'keuken-centrum' ), home_url( '/keukens/' ) ],
				[ __( 'Keukenbladen', 'keuken-centrum' ), home_url( '/keukenbladen/' ) ],
				[ __( 'Apparatuur', 'keuken-centrum' ), home_url( '/apparatuur/' ) ],
				[ __( 'Showroom keukens', 'keuken-centrum' ), home_url( '/showroom-keukens/' ) ],
			],
		],
		[
			'title' => __( 'Ontwerptraject', 'keuken-centrum' ),
			'links' => [
				[ __( 'Start configurator', 'keuken-centrum' ), $brands_url ],
				[ __( 'Kies uw stijl', 'keuken-centrum' ), $brands_url ],
				[ __( 'Maak een afspraak', 'keuken-centrum' ), $consultation ],
			],
		],
		[
			'title' => __( 'Contact & showroom', 'keuken-centrum' ),
			'links' => [
				[ $phone, $phone_href ],
				[ $email, 'mailto:' . $email ],
				[ __( 'Route naar de showroom', 'keuken-centrum' ), $maps ],
			],
		],
	];

	return [
		'founded'          => $founded,
		'phone'            => $phone,
		'phone_href'       => $phone_href,
		'email'            => $email,
		'address'          => $address,
		'postal'           => $postal,
		'maps_url'         => $maps,
		'hours'            => $hours,
		'rating'           => $rating,
		'projects'         => (string) kc_get_option( 'footer_stat_projects', '150+' ),
		'experience'       => (string) kc_get_option( 'footer_stat_experience', '45+' ),
		'eyebrow'          => (string) kc_get_option( 'footer_brand_eyebrow', __( 'Duitse precisie · Italiaanse elegantie', 'keuken-centrum' ) ),
		'brand_copy'       => (string) kc_get_option(
			'footer_brand_copy',
			sprintf(
				/* translators: %s: founded year */
				__( 'Verfijnde Europese designkeukens, exclusieve materialen en compromisloze kwaliteit sinds %s.', 'keuken-centrum' ),
				$founded
			)
		),
		'hero_eyebrow'     => (string) kc_get_option( 'footer_hero_eyebrow', __( 'Persoonlijk ontwerptraject', 'keuken-centrum' ) ),
		'hero_title'       => (string) kc_get_option( 'footer_hero_title', __( 'Klaar voor een keuken die echt bij uw', 'keuken-centrum' ) ),
		'hero_title_em'    => (string) kc_get_option( 'footer_hero_title_em', __( 'woning past?', 'keuken-centrum' ) ),
		'hero_copy'        => (string) kc_get_option(
			'footer_hero_copy',
			__( 'Bezoek de showroom of start eerst online. Rustig, verfijnd en volledig in lijn met onze premium keukenbeleving.', 'keuken-centrum' )
		),
		'cta_primary'      => [
			'label' => (string) kc_get_option( 'footer_cta_primary_label', __( 'Start configurator', 'keuken-centrum' ) ),
			'url'   => (string) kc_get_option( 'footer_cta_primary_url', $brands_url ),
		],
		'cta_secondary'    => [
			'label' => (string) kc_get_option( 'footer_cta_secondary_label', __( 'Plan Showroombezoek', 'keuken-centrum' ) ),
			'url'   => (string) kc_get_option( 'footer_cta_secondary_url', $consultation ),
		],
		'social_label'     => (string) kc_get_option( 'footer_social_label', __( 'Volg ons', 'keuken-centrum' ) ),
		'socials'          => [
			[
				'label'  => 'Facebook',
				'handle' => 'Facebook',
				'href'   => (string) kc_get_option( 'social_facebook', 'https://www.facebook.com/keukencentrumutrecht' ),
				'tone'   => 'facebook',
			],
			[
				'label'  => 'Instagram',
				'handle' => (string) kc_get_option( 'social_instagram_handle', '@keukencentrum_utrecht' ),
				'href'   => (string) kc_get_option( 'social_instagram', 'https://www.instagram.com/keukencentrum_utrecht/' ),
				'tone'   => 'instagram',
			],
			[
				'label'  => 'E-mail',
				'handle' => $email,
				'href'   => 'mailto:' . $email,
				'tone'   => 'email',
			],
		],
		'nav_groups'       => $nav_groups,
		'mobile_groups'    => $mobile_groups,
		'showroom_image'   => kc_theme_img( 'showroom.jpg' ),
		'showroom_label'   => (string) kc_get_option( 'footer_showroom_label', __( 'Premium showroom', 'keuken-centrum' ) ),
		'showroom_caption' => (string) kc_get_option( 'footer_showroom_caption', $address . ', Utrecht' ),
		'copyright_tag'    => (string) kc_get_option( 'footer_copyright_tag', __( 'Ontworpen voor generaties', 'keuken-centrum' ) ),
		'legal'            => [
			[ __( 'Privacybeleid', 'keuken-centrum' ), home_url( '/privacybeleid/' ) ],
			[ __( 'Cookiebeleid', 'keuken-centrum' ), home_url( '/cookiebeleid/' ) ],
			[ __( 'Algemene Voorwaarden', 'keuken-centrum' ), home_url( '/algemene-voorwaarden/' ) ],
		],
		'logo'             => kc_theme_img( 'logo-keuken-1-1.webp' ) ?: kc_theme_img( 'logo-keuken.webp' ),
	];
}

/**
 * @return list<array{d:string,h:string}>
 */
function kc_footer_hours_rows(): array {
	$raw = (string) kc_get_option( 'contact_hours_rows', '' );
	if ( '' !== trim( $raw ) ) {
		$rows = [];
		foreach ( preg_split( '/\r\n|\r|\n/', $raw ) as $line ) {
			$line = trim( $line );
			if ( '' === $line ) {
				continue;
			}
			$parts = array_map( 'trim', explode( '|', $line, 2 ) );
			if ( count( $parts ) === 2 ) {
				$rows[] = [ 'd' => $parts[0], 'h' => $parts[1] ];
			}
		}
		if ( $rows ) {
			return $rows;
		}
	}

	return [
		[ 'd' => 'Maandag tot Vrijdag', 'h' => '09:00 tot 18:00' ],
		[ 'd' => 'Zaterdag', 'h' => '09:00 tot 17:00' ],
		[ 'd' => 'Zondag', 'h' => 'Gesloten' ],
	];
}

/**
 * Parse CMS textarea "Label|URL" lines or fall back to defaults.
 *
 * @param list<array{0:string,1:string}> $defaults Defaults.
 * @return list<array{0:string,1:string}>
 */
function kc_footer_link_rows( string $option_key, array $defaults ): array {
	$raw = (string) kc_get_option( $option_key, '' );
	if ( '' === trim( $raw ) ) {
		return $defaults;
	}
	$rows = [];
	foreach ( preg_split( '/\r\n|\r|\n/', $raw ) as $line ) {
		$line = trim( $line );
		if ( '' === $line ) {
			continue;
		}
		$parts = array_map( 'trim', explode( '|', $line, 2 ) );
		if ( count( $parts ) === 2 && '' !== $parts[0] && '' !== $parts[1] ) {
			$rows[] = [ $parts[0], $parts[1] ];
		}
	}
	return $rows ?: $defaults;
}
