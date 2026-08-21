<?php
/**
 * Keukens CMS merge layer — ACF overlays on React-equivalent PHP defaults.
 *
 * Empty ACF → keep defaults. Filled ACF → override.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Resolve kitchen_brand post ID by slug.
 */
function kc_cms_brand_post_id( string $slug ): int {
	$posts = get_posts(
		[
			'post_type'      => 'kitchen_brand',
			'name'           => $slug,
			'posts_per_page' => 1,
			'post_status'    => [ 'publish', 'draft', 'private' ],
		]
	);
	return $posts ? (int) $posts[0]->ID : 0;
}

/**
 * @param mixed $value
 */
function kc_cms_filled( $value ): bool {
	if ( null === $value || false === $value || '' === $value ) {
		return false;
	}
	if ( is_array( $value ) && empty( $value ) ) {
		return false;
	}
	return true;
}

/**
 * Apply Keukens overview option fields.
 *
 * @param array<string,mixed> $data Defaults.
 * @return array<string,mixed>
 */
function kc_cms_apply_keukens_overview( array $data ): array {
	$pid = 'option';

	$data['meta']['title']       = kc_cms_text( 'keukens_ov_seo_title', $pid, (string) ( $data['meta']['title'] ?? '' ) );
	$data['meta']['description'] = kc_cms_text( 'keukens_ov_seo_desc', $pid, (string) ( $data['meta']['description'] ?? '' ) );

	$data['hero']['eyebrow']   = kc_cms_text( 'keukens_ov_hero_eyebrow', $pid, (string) ( $data['hero']['eyebrow'] ?? '' ) );
	$data['hero']['title']     = kc_cms_text( 'keukens_ov_hero_title', $pid, (string) ( $data['hero']['title'] ?? '' ) );
	$data['hero']['highlight'] = kc_cms_text( 'keukens_ov_hero_highlight', $pid, (string) ( $data['hero']['highlight'] ?? '' ) );
	$data['hero']['subtitle']  = kc_cms_text( 'keukens_ov_hero_subtitle', $pid, (string) ( $data['hero']['subtitle'] ?? '' ) );

	$hero_img = kc_cms_image_url( function_exists( 'get_field' ) ? get_field( 'keukens_ov_hero_image', $pid ) : null, '' );
	if ( $hero_img ) {
		$data['hero']['image'] = $hero_img;
		$images                = $data['hero']['images'] ?? [];
		if ( is_array( $images ) && $images ) {
			$images[0] = $hero_img;
		} else {
			$images = [ $hero_img ];
		}
		$data['hero']['images'] = $images;
	}

	$data['hero']['cta_primary_label']   = kc_cms_text( 'keukens_ov_cta_primary_label', $pid, (string) ( $data['hero']['cta_primary_label'] ?? __( 'Plan showroombezoek', 'keuken-centrum' ) ) );
	$data['hero']['cta_primary_url']     = kc_cms_text( 'keukens_ov_cta_primary_url', $pid, (string) ( $data['hero']['cta_primary_url'] ?? home_url( '/consultation/' ) ) );
	$data['hero']['cta_secondary_label'] = kc_cms_text( 'keukens_ov_cta_secondary_label', $pid, (string) ( $data['hero']['cta_secondary_label'] ?? __( 'Ontdek Leicht', 'keuken-centrum' ) ) );
	$data['hero']['cta_secondary_url']   = kc_cms_text( 'keukens_ov_cta_secondary_url', $pid, (string) ( $data['hero']['cta_secondary_url'] ?? home_url( '/keukens/leicht/' ) ) );

	$data['intro']['eyebrow'] = kc_cms_text( 'keukens_ov_intro_eyebrow', $pid, (string) ( $data['intro']['eyebrow'] ?? '' ) );
	$data['intro']['title']   = kc_cms_text( 'keukens_ov_intro_title', $pid, (string) ( $data['intro']['title'] ?? '' ) );
	$intro_raw                = kc_cms_text( 'keukens_ov_intro_paragraphs', $pid, '' );
	if ( '' !== $intro_raw ) {
		$data['intro']['paragraphs'] = kc_cms_lines( $intro_raw, $data['intro']['paragraphs'] ?? [] );
	}

	$brand_rows = kc_cms_repeater( 'keukens_ov_brands' );
	if ( $brand_rows ) {
		$brands = [];
		foreach ( $brand_rows as $row ) {
			if ( isset( $row['enabled'] ) && ! $row['enabled'] ) {
				continue;
			}
			$name = is_string( $row['name'] ?? null ) ? $row['name'] : '';
			if ( '' === $name ) {
				continue;
			}
			$id = sanitize_title( is_string( $row['id'] ?? null ) && $row['id'] ? $row['id'] : $name );
			$brands[] = [
				'id'          => $id,
				'name'        => $name,
				'country'     => kc_home_row_text( $row, 'country' ),
				'tagline'     => kc_home_row_text( $row, 'tagline' ),
				'description' => kc_home_row_text( $row, 'description' ),
				'image'       => kc_cms_image_url( $row['image'] ?? null, '' ),
				'href'        => kc_home_row_text( $row, 'url', home_url( '/keukens/' . $id . '/' ) ),
				'logo'        => kc_cms_image_url( $row['logo'] ?? null, '' ),
			];
		}
		if ( $brands ) {
			// Fill missing images from defaults by id match.
			$defaults_by_id = [];
			foreach ( $data['brands'] ?? [] as $b ) {
				$defaults_by_id[ (string) ( $b['id'] ?? '' ) ] = $b;
			}
			foreach ( $brands as &$b ) {
				$def = $defaults_by_id[ $b['id'] ] ?? null;
				if ( ! $b['image'] && $def ) {
					$b['image'] = $def['image'];
				}
				if ( ! $b['country'] && $def ) {
					$b['country'] = $def['country'];
				}
				if ( ! $b['tagline'] && $def ) {
					$b['tagline'] = $def['tagline'];
				}
				if ( ! $b['description'] && $def ) {
					$b['description'] = $def['description'];
				}
			}
			unset( $b );
			$data['brands'] = $brands;
		}
	}

	$faq_rows = kc_cms_repeater( 'keukens_ov_faq' );
	if ( $faq_rows ) {
		$faq = [];
		foreach ( $faq_rows as $row ) {
			if ( isset( $row['enabled'] ) && ! $row['enabled'] ) {
				continue;
			}
			$q = kc_home_row_text( $row, 'question' );
			$a = kc_home_row_text( $row, 'answer' );
			if ( '' === $q || '' === $a ) {
				continue;
			}
			$faq[] = [ 'q' => $q, 'a' => $a ];
		}
		if ( $faq ) {
			$data['faq'] = $faq;
		}
	}

	$adv_rows = kc_cms_repeater( 'keukens_ov_advisors' );
	if ( $adv_rows ) {
		$advisors = [];
		foreach ( $adv_rows as $row ) {
			$name = kc_home_row_text( $row, 'name' );
			if ( '' === $name ) {
				continue;
			}
			$advisors[] = [
				'name'  => $name,
				'role'  => kc_home_row_text( $row, 'role' ),
				'image' => kc_cms_image_url( $row['image'] ?? null, '' ),
				'email' => kc_home_row_text( $row, 'email' ),
				'phone' => kc_home_row_text( $row, 'phone' ),
			];
		}
		if ( $advisors ) {
			$data['advisors'] = $advisors;
		}
	}

	$data['bottom_cta'] = [
		'eyebrow' => kc_cms_text( 'keukens_ov_bottom_eyebrow', $pid, (string) ( $data['bottom_cta']['eyebrow'] ?? __( 'Persoonlijk advies', 'keuken-centrum' ) ) ),
		'title'   => kc_cms_text( 'keukens_ov_bottom_title', $pid, (string) ( $data['bottom_cta']['title'] ?? __( 'Plan uw showroombezoek', 'keuken-centrum' ) ) ),
		'body'    => kc_cms_text( 'keukens_ov_bottom_body', $pid, (string) ( $data['bottom_cta']['body'] ?? __( 'Ontdek alle A-merken in Utrecht en ontvang vrijblijvend advies.', 'keuken-centrum' ) ) ),
		'label'   => kc_cms_text( 'keukens_ov_bottom_cta_label', $pid, (string) ( $data['bottom_cta']['label'] ?? __( 'Plan showroombezoek', 'keuken-centrum' ) ) ),
		'url'     => kc_cms_text( 'keukens_ov_bottom_cta_url', $pid, (string) ( $data['bottom_cta']['url'] ?? home_url( '/consultation/' ) ) ),
	];

	return $data;
}

/**
 * Apply CPT ACF overlays to a brand page data array.
 *
 * @param array<string,mixed> $data Defaults from PHP data file.
 * @param string              $slug Brand slug.
 * @return array<string,mixed>
 */
function kc_cms_apply_brand_page( array $data, string $slug ): array {
	$post_id = kc_cms_brand_post_id( $slug );
	if ( ! $post_id ) {
		return $data;
	}

	// Reuse legacy CPT fields.
	$legacy_logo = kc_cms_image_url( function_exists( 'get_field' ) ? get_field( 'logo', $post_id ) : null, '' );
	$legacy_hero = kc_cms_image_url( function_exists( 'get_field' ) ? get_field( 'hero_image', $post_id ) : null, '' );
	$country     = kc_cms_text( 'country', $post_id, (string) ( $data['country'] ?? '' ) );
	if ( $country ) {
		$data['country'] = $country;
	}
	if ( $legacy_logo ) {
		$data['logo'] = $legacy_logo;
	}
	if ( $legacy_hero ) {
		$data['hero']['image'] = $legacy_hero;
	}

	$data['meta']['title']       = kc_cms_text( 'kc_brand_seo_title', $post_id, (string) ( $data['meta']['title'] ?? '' ) );
	$data['meta']['description'] = kc_cms_text( 'kc_brand_seo_desc', $post_id, (string) ( $data['meta']['description'] ?? '' ) );

	$data['hero']['eyebrow']   = kc_cms_text( 'kc_brand_hero_eyebrow', $post_id, (string) ( $data['hero']['eyebrow'] ?? '' ) );
	$data['hero']['title']     = kc_cms_text( 'kc_brand_hero_title', $post_id, (string) ( $data['hero']['title'] ?? '' ) );
	$data['hero']['highlight'] = kc_cms_text( 'kc_brand_hero_highlight', $post_id, (string) ( $data['hero']['highlight'] ?? '' ) );
	$data['hero']['subtitle']  = kc_cms_text( 'kc_brand_hero_subtitle', $post_id, (string) ( $data['hero']['subtitle'] ?? '' ) );

	$cta_primary = kc_cms_text( 'kc_brand_cta_primary', $post_id, '' );
	if ( $cta_primary ) {
		$data['hero']['cta']['primary'] = $cta_primary;
	} else {
		$legacy_cta = kc_cms_text( 'cta_label', $post_id, '' );
		if ( $legacy_cta ) {
			$data['hero']['cta']['primary'] = $legacy_cta;
		}
	}
	$cta_primary_url = kc_cms_text( 'kc_brand_cta_primary_url', $post_id, '' );
	if ( $cta_primary_url ) {
		$data['hero']['cta']['primaryHref'] = $cta_primary_url;
	}
	$cta_secondary = kc_cms_text( 'kc_brand_cta_secondary', $post_id, '' );
	if ( $cta_secondary ) {
		$data['hero']['cta']['secondary'] = $cta_secondary;
	}
	$cta_secondary_url = kc_cms_text( 'kc_brand_cta_secondary_url', $post_id, '' );
	if ( $cta_secondary_url ) {
		$data['hero']['cta']['secondaryHref'] = $cta_secondary_url;
	}

	$data['intro']['eyebrow']        = kc_cms_text( 'kc_brand_intro_eyebrow', $post_id, (string) ( $data['intro']['eyebrow'] ?? '' ) );
	$data['intro']['titleBefore']    = kc_cms_text( 'kc_brand_intro_title_before', $post_id, (string) ( $data['intro']['titleBefore'] ?? '' ) );
	$data['intro']['titleHighlight'] = kc_cms_text( 'kc_brand_intro_title_highlight', $post_id, (string) ( $data['intro']['titleHighlight'] ?? '' ) );
	$intro_paras                     = kc_cms_text( 'kc_brand_intro_paragraphs', $post_id, '' );
	if ( '' !== $intro_paras ) {
		$data['intro']['paragraphs'] = kc_cms_lines( $intro_paras, $data['intro']['paragraphs'] ?? [] );
	}
	$intro_img = kc_cms_image_url( function_exists( 'get_field' ) ? get_field( 'kc_brand_intro_image', $post_id ) : null, '' );
	if ( $intro_img ) {
		$data['intro']['image'] = $intro_img;
	}

	$pillar_rows = function_exists( 'get_field' ) ? get_field( 'kc_brand_pillars', $post_id ) : null;
	if ( is_array( $pillar_rows ) && $pillar_rows ) {
		$items = [];
		foreach ( $pillar_rows as $row ) {
			$title = kc_home_row_text( $row, 'title' );
			if ( '' === $title ) {
				continue;
			}
			$items[] = [
				'title'       => $title,
				'description' => kc_home_row_text( $row, 'description' ),
				'icon'        => kc_home_row_text( $row, 'icon', 'sparkles' ),
				'image'       => kc_cms_image_url( $row['image'] ?? null, '' ),
			];
		}
		if ( $items ) {
			$data['pillars']['items'] = $items;
		}
	}

	$series_rows = function_exists( 'get_field' ) ? get_field( 'kc_brand_series', $post_id ) : null;
	if ( is_array( $series_rows ) && $series_rows && isset( $data['series'] ) ) {
		$items = [];
		foreach ( $series_rows as $row ) {
			if ( isset( $row['enabled'] ) && ! $row['enabled'] ) {
				continue;
			}
			$name = kc_home_row_text( $row, 'title' );
			if ( '' === $name ) {
				continue;
			}
			$id = sanitize_title( kc_home_row_text( $row, 'slug', $name ) );
			$items[] = [
				'id'       => $id,
				'name'     => $name,
				'image'    => kc_cms_image_url( $row['image'] ?? null, '' ),
				'tag'      => kc_home_row_text( $row, 'badge' ),
				'href'     => kc_home_row_text( $row, 'url' ),
				'featured' => ! empty( $row['featured'] ),
			];
		}
		if ( $items ) {
			foreach ( $items as &$item ) {
				if ( ! $item['image'] ) {
					foreach ( $data['series']['items'] ?? [] as $def ) {
						if ( ( $def['id'] ?? '' ) === $item['id'] ) {
							$item['image'] = $def['image'];
							break;
						}
					}
				}
			}
			unset( $item );
			$data['series']['items'] = $items;
		}
	}

	$gallery_rows = function_exists( 'get_field' ) ? get_field( 'kc_brand_gallery', $post_id ) : null;
	if ( is_array( $gallery_rows ) && $gallery_rows ) {
		$items = [];
		foreach ( $gallery_rows as $row ) {
			$src = kc_cms_image_url( $row['image'] ?? null, '' );
			if ( ! $src ) {
				continue;
			}
			$items[] = [
				'src'   => $src,
				'title' => kc_home_row_text( $row, 'title', kc_home_row_text( $row, 'caption' ) ),
				'tag'   => kc_home_row_text( $row, 'tag' ),
				'span'  => kc_home_row_text( $row, 'span', 'medium' ),
				'href'  => kc_home_row_text( $row, 'url' ),
			];
		}
		if ( $items ) {
			$data['gallery']['items'] = $items;
		}
	}

	$faq_rows = function_exists( 'get_field' ) ? get_field( 'kc_brand_faq', $post_id ) : null;
	if ( is_array( $faq_rows ) && $faq_rows ) {
		$faq = [];
		foreach ( $faq_rows as $row ) {
			if ( isset( $row['enabled'] ) && ! $row['enabled'] ) {
				continue;
			}
			$q = kc_home_row_text( $row, 'question' );
			$a = kc_home_row_text( $row, 'answer' );
			if ( '' === $q || '' === $a ) {
				continue;
			}
			$faq[] = [ 'q' => $q, 'a' => $a ];
		}
		if ( $faq ) {
			$data['faq']['items'] = $faq;
		}
	}

	$catalog_rows = function_exists( 'get_field' ) ? get_field( 'kc_brand_catalogs', $post_id ) : null;
	if ( is_array( $catalog_rows ) && $catalog_rows ) {
		$catalogs = [];
		foreach ( $catalog_rows as $row ) {
			$title = kc_home_row_text( $row, 'title' );
			if ( '' === $title ) {
				continue;
			}
			$file = $row['file'] ?? null;
			$href = '';
			if ( is_array( $file ) && ! empty( $file['url'] ) ) {
				$href = (string) $file['url'];
			} elseif ( is_numeric( $file ) ) {
				$href = (string) ( wp_get_attachment_url( (int) $file ) ?: '' );
			}
			$href = $href ?: kc_home_row_text( $row, 'url' );
			$catalogs[] = [
				'title'    => $title,
				'href'     => $href,
				'subtitle' => kc_home_row_text( $row, 'description' ),
			];
		}
		if ( $catalogs ) {
			$data['catalogs'] = $catalogs;
		}
	}

	$showroom_btn = kc_cms_text( 'kc_brand_showroom_cta_label', $post_id, '' );
	$showroom_url = kc_cms_text( 'kc_brand_showroom_cta_url', $post_id, '' );
	if ( isset( $data['showroomCta'] ) && is_array( $data['showroomCta'] ) ) {
		if ( $showroom_btn ) {
			$data['showroomCta']['button'] = $showroom_btn;
		}
		if ( $showroom_url ) {
			$data['showroomCta']['href'] = $showroom_url;
		}
		$data['showroomCta']['subtitle'] = kc_cms_text( 'kc_brand_showroom_cta_body', $post_id, (string) ( $data['showroomCta']['subtitle'] ?? '' ) );
	}

	$og = kc_cms_image_url( function_exists( 'get_field' ) ? get_field( 'kc_brand_og_image', $post_id ) : null, '' );
	if ( $og ) {
		$data['meta']['og_image'] = $og;
	}

	return $data;
}

/**
 * Apply Leicht series option overlays.
 *
 * @param array<string,mixed> $data Series defaults.
 * @param string              $slug Series slug.
 * @return array<string,mixed>
 */
function kc_cms_apply_leicht_series( array $data, string $slug ): array {
	$prefix = 'leicht_series_' . sanitize_key( $slug ) . '_';
	$pid    = 'option';

	$data['name']    = kc_cms_text( $prefix . 'name', $pid, (string) ( $data['name'] ?? '' ) );
	$data['tagline'] = kc_cms_text( $prefix . 'tagline', $pid, (string) ( $data['tagline'] ?? '' ) );

	$desc = kc_cms_text( $prefix . 'description', $pid, '' );
	if ( '' !== $desc ) {
		$data['description'] = kc_cms_lines( $desc, $data['description'] ?? [] );
	}

	$hero = kc_cms_image_url( function_exists( 'get_field' ) ? get_field( $prefix . 'hero', $pid ) : null, '' );
	if ( $hero ) {
		$data['heroImage'] = $hero;
	}

	$seo_title = kc_cms_text( $prefix . 'seo_title', $pid, '' );
	$seo_desc  = kc_cms_text( $prefix . 'seo_desc', $pid, '' );
	if ( $seo_title ) {
		$data['seo_title'] = $seo_title;
	}
	if ( $seo_desc ) {
		$data['seo_description'] = $seo_desc;
	}

	$gallery_rows = function_exists( 'get_field' ) ? get_field( $prefix . 'gallery', $pid ) : null;
	if ( is_array( $gallery_rows ) && $gallery_rows ) {
		$gallery = [];
		foreach ( $gallery_rows as $row ) {
			$src = kc_cms_image_url( $row['image'] ?? null, '' );
			if ( ! $src ) {
				continue;
			}
			$gallery[] = [
				'src'   => $src,
				'title' => kc_home_row_text( $row, 'title', kc_home_row_text( $row, 'caption' ) ),
			];
		}
		if ( $gallery ) {
			$data['gallery'] = $gallery;
		}
	}

	$data['cta_label'] = kc_cms_text( $prefix . 'cta_label', $pid, (string) ( $data['cta_label'] ?? __( 'Plan showroombezoek', 'keuken-centrum' ) ) );
	$data['cta_url']   = kc_cms_text( $prefix . 'cta_url', $pid, (string) ( $data['cta_url'] ?? home_url( '/consultation/' ) ) );

	return $data;
}
