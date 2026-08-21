<?php
/**
 * Navigation CMS merge — ACF overrides on React Nav.tsx defaults.
 *
 * Desktop mega + mobile drawer share ONE resolved dataset.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Resolve navigation: PHP defaults (React) ← ACF Options overrides.
 *
 * @return array<string, mixed>
 */
function kc_nav_resolved_data(): array {
	static $cache = null;
	if ( null !== $cache ) {
		return $cache;
	}

	$defaults = function_exists( 'kc_nav_mega_defaults' ) ? kc_nav_mega_defaults() : [];
	$cache    = kc_nav_apply_cms_overrides( $defaults );
	return $cache;
}

/**
 * @param array<string, mixed> $data Defaults.
 * @return array<string, mixed>
 */
function kc_nav_apply_cms_overrides( array $data ): array {
	if ( ! function_exists( 'get_field' ) ) {
		return $data;
	}

	$labels = [
		'home'         => (string) kc_get_option( 'nav_label_home', __( 'Home', 'keuken-centrum' ) ),
		'keukens'      => (string) kc_get_option( 'nav_label_keukens', __( 'Keukens', 'keuken-centrum' ) ),
		'keukenbladen' => (string) kc_get_option( 'nav_label_keukenbladen', __( 'Keukenbladen', 'keuken-centrum' ) ),
		'apparatuur'   => (string) kc_get_option( 'nav_label_apparatuur', __( 'Apparatuur', 'keuken-centrum' ) ),
		'aanbiedingen' => (string) kc_get_option( 'nav_label_aanbiedingen', __( 'Aanbiedingen', 'keuken-centrum' ) ),
		'contact'      => (string) kc_get_option( 'nav_label_contact', __( 'Contact', 'keuken-centrum' ) ),
	];
	$data['labels'] = $labels;

	$aanbiedingen_url = (string) kc_get_option( 'nav_url_aanbiedingen', '' );
	if ( '' !== $aanbiedingen_url ) {
		$data['aanbiedingen_url'] = $aanbiedingen_url;
	} else {
		$data['aanbiedingen_url'] = home_url( '/aanbiedingen/' );
	}

	// Contact mega items.
	$contact_rows = get_field( 'nav_contact_items', 'option' );
	if ( is_array( $contact_rows ) && $contact_rows ) {
		$items = [];
		foreach ( $contact_rows as $row ) {
			$label = trim( (string) ( $row['label'] ?? '' ) );
			$href  = trim( (string) ( $row['url'] ?? '' ) );
			if ( '' === $label || '' === $href ) {
				continue;
			}
			$items[] = [
				'label' => $label,
				'href'  => $href,
				'icon'  => (string) ( $row['icon'] ?? 'map' ),
			];
		}
		if ( $items ) {
			$data['contact'] = $items;
		}
	}

	// Editorial featured + group link lists (textarea Label|URL).
	foreach ( [ 'keukenbladen', 'apparatuur' ] as $key ) {
		if ( empty( $data['editorial'][ $key ] ) || ! is_array( $data['editorial'][ $key ] ) ) {
			continue;
		}
		$ed = &$data['editorial'][ $key ];
		$title = (string) kc_get_option( "nav_editorial_{$key}_title", '' );
		if ( '' !== $title ) {
			$ed['title'] = $title;
		}
		$ft = (string) kc_get_option( "nav_editorial_{$key}_featured_title", '' );
		if ( '' !== $ft ) {
			$ed['featured']['title'] = $ft;
		}
		$fd = (string) kc_get_option( "nav_editorial_{$key}_featured_desc", '' );
		if ( '' !== $fd ) {
			$ed['featured']['description'] = $fd;
		}
		$fb = (string) kc_get_option( "nav_editorial_{$key}_featured_btn", '' );
		if ( '' !== $fb ) {
			$ed['featured']['button_text'] = $fb;
		}
		$fu = (string) kc_get_option( "nav_editorial_{$key}_featured_url", '' );
		if ( '' !== $fu ) {
			$ed['featured']['button_href'] = $fu;
		}
		$fi = get_field( "nav_editorial_{$key}_featured_image", 'option' );
		$img = function_exists( 'kc_cms_image_url' ) ? kc_cms_image_url( $fi, '' ) : '';
		if ( $img ) {
			$ed['featured']['image'] = $img;
		}

		$groups_raw = (string) kc_get_option( "nav_editorial_{$key}_groups", '' );
		$parsed     = kc_nav_parse_editorial_groups( $groups_raw );
		if ( $parsed ) {
			$ed['groups'] = $parsed;
		}
		unset( $ed );
	}

	// Kitchen categories (full replace when CMS has rows).
	$kitchen_rows = get_field( 'nav_kitchen_categories', 'option' );
	if ( is_array( $kitchen_rows ) && $kitchen_rows ) {
		$cats = [];
		foreach ( $kitchen_rows as $row ) {
			$cards = [];
			if ( ! empty( $row['cards'] ) && is_array( $row['cards'] ) ) {
				foreach ( $row['cards'] as $card ) {
					$clabel = trim( (string) ( $card['label'] ?? '' ) );
					$chref  = trim( (string) ( $card['url'] ?? '' ) );
					if ( '' === $clabel || '' === $chref ) {
						continue;
					}
					$cimg = function_exists( 'kc_cms_image_url' ) ? kc_cms_image_url( $card['image'] ?? null, '' ) : '';
					$cards[] = [
						'label' => $clabel,
						'note'  => (string) ( $card['note'] ?? '' ),
						'href'  => $chref,
						'image' => $cimg,
					];
				}
			}
			$cats[] = [
				'label'   => (string) ( $row['label'] ?? '' ),
				'eyebrow' => (string) ( $row['eyebrow'] ?? '' ),
				'title'   => (string) ( $row['title'] ?? '' ),
				'footer'  => (string) ( $row['footer'] ?? '' ),
				'detail'  => (string) ( $row['detail'] ?? '' ),
				'href'    => (string) ( $row['url'] ?? home_url( '/keukens/' ) ),
				'link'    => (string) ( $row['link_label'] ?? '' ),
				'cards'   => $cards,
			];
		}
		if ( $cats ) {
			$data['kitchens'] = $cats;
		}
	}

	// Mobile tree (full replace when CMS has rows).
	$mobile_rows = get_field( 'nav_mobile_items', 'option' );
	if ( is_array( $mobile_rows ) && $mobile_rows ) {
		$mobile = [];
		foreach ( $mobile_rows as $row ) {
			$label = trim( (string) ( $row['label'] ?? '' ) );
			if ( '' === $label ) {
				continue;
			}
			$children = [];
			if ( ! empty( $row['children'] ) && is_array( $row['children'] ) ) {
				foreach ( $row['children'] as $child ) {
					$cl = trim( (string) ( $child['label'] ?? '' ) );
					$cu = trim( (string) ( $child['url'] ?? '' ) );
					if ( '' === $cl || '' === $cu ) {
						continue;
					}
					$children[] = [
						'label'       => $cl,
						'href'        => $cu,
						'description' => (string) ( $child['description'] ?? '' ),
						'icon'        => (string) ( $child['icon'] ?? '' ),
					];
				}
			}
			if ( $children ) {
				$mobile[] = [ 'label' => $label, 'items' => $children ];
			} else {
				$href = trim( (string) ( $row['url'] ?? '' ) );
				if ( '' !== $href ) {
					$mobile[] = [ 'label' => $label, 'href' => $href ];
				}
			}
		}
		if ( $mobile ) {
			$data['mobile'] = $mobile;
		}
	}

	return $data;
}

/**
 * Parse editorial groups from textarea:
 * ## Group title
 * Label|URL
 *
 * @return list<array{title:string,items:list<array{label:string,href:string}>}>
 */
function kc_nav_parse_editorial_groups( string $raw ): array {
	$raw = trim( $raw );
	if ( '' === $raw ) {
		return [];
	}
	$groups = [];
	$current = null;
	foreach ( preg_split( '/\r\n|\r|\n/', $raw ) as $line ) {
		$line = trim( $line );
		if ( '' === $line ) {
			continue;
		}
		if ( str_starts_with( $line, '##' ) ) {
			if ( $current ) {
				$groups[] = $current;
			}
			$current = [
				'title' => trim( substr( $line, 2 ) ),
				'items' => [],
			];
			continue;
		}
		if ( null === $current ) {
			$current = [ 'title' => '', 'items' => [] ];
		}
		$parts = array_map( 'trim', explode( '|', $line, 2 ) );
		if ( count( $parts ) === 2 && '' !== $parts[0] && '' !== $parts[1] ) {
			$current['items'][] = [ 'label' => $parts[0], 'href' => $parts[1] ];
		}
	}
	if ( $current && ( $current['title'] || $current['items'] ) ) {
		$groups[] = $current;
	}
	return $groups;
}
