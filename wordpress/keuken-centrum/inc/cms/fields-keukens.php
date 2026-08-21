<?php
/**
 * ACF field groups for Keukens overview, brand CPT pages, and Leicht series.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register Keukens CMS field groups.
 */
function kc_cms_register_keukens_field_groups(): void {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	// —— Opties: Keukens overzicht ——————————————————————————
	acf_add_local_field_group(
		[
			'key'    => 'group_kc_cms_keukens_overview',
			'title'  => 'Keukens — overzicht',
			'fields' => [
				[
					'key'     => 'field_kc_kov_msg',
					'label'   => 'Instructie',
					'type'    => 'message',
					'message' => 'Lege velden gebruiken de React-standaardinhoud. Merkpagina’s bewerkt u via Keukens → individueel merk (CPT).',
				],
				[ 'key' => 'field_kc_kov_tab_seo', 'label' => 'SEO', 'type' => 'tab' ],
				[ 'key' => 'field_kc_kov_seo_title', 'label' => 'SEO titel', 'name' => 'keukens_ov_seo_title', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_seo_desc', 'label' => 'Meta description', 'name' => 'keukens_ov_seo_desc', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_kov_tab_hero', 'label' => 'Hero', 'type' => 'tab' ],
				[ 'key' => 'field_kc_kov_hero_eyebrow', 'label' => 'Eyebrow', 'name' => 'keukens_ov_hero_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_hero_title', 'label' => 'Titel', 'name' => 'keukens_ov_hero_title', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_hero_highlight', 'label' => 'Titel accent', 'name' => 'keukens_ov_hero_highlight', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_hero_subtitle', 'label' => 'Beschrijving', 'name' => 'keukens_ov_hero_subtitle', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_kov_hero_image', 'label' => 'Hero afbeelding', 'name' => 'keukens_ov_hero_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
				[ 'key' => 'field_kc_kov_cta_p_label', 'label' => 'Primaire CTA', 'name' => 'keukens_ov_cta_primary_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_cta_p_url', 'label' => 'Primaire CTA URL', 'name' => 'keukens_ov_cta_primary_url', 'type' => 'url' ],
				[ 'key' => 'field_kc_kov_cta_s_label', 'label' => 'Secundaire CTA', 'name' => 'keukens_ov_cta_secondary_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_cta_s_url', 'label' => 'Secundaire CTA URL', 'name' => 'keukens_ov_cta_secondary_url', 'type' => 'url' ],
				[ 'key' => 'field_kc_kov_tab_intro', 'label' => 'Intro', 'type' => 'tab' ],
				[ 'key' => 'field_kc_kov_intro_eyebrow', 'label' => 'Eyebrow', 'name' => 'keukens_ov_intro_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_intro_title', 'label' => 'Titel', 'name' => 'keukens_ov_intro_title', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_intro_paras', 'label' => 'Paragrafen (één per regel)', 'name' => 'keukens_ov_intro_paragraphs', 'type' => 'textarea', 'rows' => 6 ],
				[ 'key' => 'field_kc_kov_tab_brands', 'label' => 'Merkkaarten', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_kov_brands',
					'label'        => 'Merken',
					'name'         => 'keukens_ov_brands',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Merk toevoegen',
					'instructions' => 'Leeg = React defaults. Volgorde = weergavevolgorde.',
					'sub_fields'   => [
						[ 'key' => 'field_kc_kov_b_id', 'label' => 'ID / slug', 'name' => 'id', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_b_name', 'label' => 'Naam', 'name' => 'name', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_b_country', 'label' => 'Land', 'name' => 'country', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_b_tagline', 'label' => 'Tagline', 'name' => 'tagline', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_b_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'textarea', 'rows' => 3 ],
						[ 'key' => 'field_kc_kov_b_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[ 'key' => 'field_kc_kov_b_image', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
						[ 'key' => 'field_kc_kov_b_logo', 'label' => 'Logo', 'name' => 'logo', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'thumbnail' ],
						[ 'key' => 'field_kc_kov_b_enabled', 'label' => 'Actief', 'name' => 'enabled', 'type' => 'true_false', 'ui' => 1, 'default_value' => 1 ],
					],
				],
				[ 'key' => 'field_kc_kov_tab_faq', 'label' => 'FAQ', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_kov_faq',
					'label'        => 'Veelgestelde vragen',
					'name'         => 'keukens_ov_faq',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Vraag toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_kov_faq_q', 'label' => 'Vraag', 'name' => 'question', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_faq_a', 'label' => 'Antwoord', 'name' => 'answer', 'type' => 'textarea', 'rows' => 3 ],
						[ 'key' => 'field_kc_kov_faq_en', 'label' => 'Actief', 'name' => 'enabled', 'type' => 'true_false', 'ui' => 1, 'default_value' => 1 ],
					],
				],
				[ 'key' => 'field_kc_kov_tab_adv', 'label' => 'Adviseurs', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_kov_advisors',
					'label'        => 'Adviseurs',
					'name'         => 'keukens_ov_advisors',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Adviseur toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_kov_adv_name', 'label' => 'Naam', 'name' => 'name', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_adv_role', 'label' => 'Rol', 'name' => 'role', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_adv_email', 'label' => 'E-mail', 'name' => 'email', 'type' => 'email' ],
						[ 'key' => 'field_kc_kov_adv_phone', 'label' => 'Telefoon', 'name' => 'phone', 'type' => 'text' ],
						[ 'key' => 'field_kc_kov_adv_image', 'label' => 'Foto', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'thumbnail' ],
					],
				],
				[ 'key' => 'field_kc_kov_tab_bottom', 'label' => 'Eind CTA', 'type' => 'tab' ],
				[ 'key' => 'field_kc_kov_bottom_eyebrow', 'label' => 'Eyebrow', 'name' => 'keukens_ov_bottom_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_bottom_title', 'label' => 'Titel', 'name' => 'keukens_ov_bottom_title', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_bottom_body', 'label' => 'Beschrijving', 'name' => 'keukens_ov_bottom_body', 'type' => 'textarea', 'rows' => 2 ],
				[ 'key' => 'field_kc_kov_bottom_label', 'label' => 'CTA tekst', 'name' => 'keukens_ov_bottom_cta_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_kov_bottom_url', 'label' => 'CTA URL', 'name' => 'keukens_ov_bottom_cta_url', 'type' => 'url' ],
			],
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-keukens',
					],
				],
			],
		]
	);

	// —— CPT: Brand page (extends Merk Details) ——————————————
	acf_add_local_field_group(
		[
			'key'    => 'group_kc_cms_brand_page',
			'title'  => 'Merkpagina — inhoud',
			'fields' => [
				[
					'key'     => 'field_kc_bp_msg',
					'label'   => 'Instructie',
					'type'    => 'message',
					'message' => 'Lege velden behouden de React-standaard. Logo/hero in “Merk Details” worden ook gebruikt.',
				],
				[ 'key' => 'field_kc_bp_tab_seo', 'label' => 'SEO', 'type' => 'tab' ],
				[ 'key' => 'field_kc_bp_seo_title', 'label' => 'SEO titel', 'name' => 'kc_brand_seo_title', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_seo_desc', 'label' => 'Meta description', 'name' => 'kc_brand_seo_desc', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_bp_og', 'label' => 'OG afbeelding', 'name' => 'kc_brand_og_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
				[ 'key' => 'field_kc_bp_tab_hero', 'label' => 'Hero', 'type' => 'tab' ],
				[ 'key' => 'field_kc_bp_hero_eyebrow', 'label' => 'Eyebrow', 'name' => 'kc_brand_hero_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_hero_title', 'label' => 'Titel', 'name' => 'kc_brand_hero_title', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_hero_highlight', 'label' => 'Titel accent', 'name' => 'kc_brand_hero_highlight', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_hero_subtitle', 'label' => 'Beschrijving', 'name' => 'kc_brand_hero_subtitle', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_bp_cta_p', 'label' => 'Primaire CTA', 'name' => 'kc_brand_cta_primary', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_cta_p_url', 'label' => 'Primaire CTA URL', 'name' => 'kc_brand_cta_primary_url', 'type' => 'url' ],
				[ 'key' => 'field_kc_bp_cta_s', 'label' => 'Secundaire CTA', 'name' => 'kc_brand_cta_secondary', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_cta_s_url', 'label' => 'Secundaire CTA URL', 'name' => 'kc_brand_cta_secondary_url', 'type' => 'url' ],
				[ 'key' => 'field_kc_bp_tab_intro', 'label' => 'Intro', 'type' => 'tab' ],
				[ 'key' => 'field_kc_bp_intro_eyebrow', 'label' => 'Eyebrow', 'name' => 'kc_brand_intro_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_intro_before', 'label' => 'Titel (voor)', 'name' => 'kc_brand_intro_title_before', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_intro_hl', 'label' => 'Titel accent', 'name' => 'kc_brand_intro_title_highlight', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_intro_paras', 'label' => 'Paragrafen (één per regel)', 'name' => 'kc_brand_intro_paragraphs', 'type' => 'textarea', 'rows' => 5 ],
				[ 'key' => 'field_kc_bp_intro_image', 'label' => 'Intro afbeelding', 'name' => 'kc_brand_intro_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
				[ 'key' => 'field_kc_bp_tab_pillars', 'label' => 'Pillars', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_bp_pillars',
					'label'        => 'Pillars',
					'name'         => 'kc_brand_pillars',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Pillar toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_bp_p_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_p_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'textarea', 'rows' => 2 ],
						[
							'key'     => 'field_kc_bp_p_icon',
							'label'   => 'Icoon',
							'name'    => 'icon',
							'type'    => 'select',
							'choices' => [
								'sparkles' => 'Sparkles',
								'layers'   => 'Layers',
								'grid'     => 'Grid',
								'shield'   => 'Shield',
								'award'    => 'Award',
								'heart'    => 'Heart',
							],
						],
						[ 'key' => 'field_kc_bp_p_image', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
					],
				],
				[ 'key' => 'field_kc_bp_tab_series', 'label' => 'Series', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_bp_series',
					'label'        => 'Series / modellen',
					'name'         => 'kc_brand_series',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Serie toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_bp_s_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_s_slug', 'label' => 'Slug', 'name' => 'slug', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_s_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[ 'key' => 'field_kc_bp_s_badge', 'label' => 'Badge', 'name' => 'badge', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_s_image', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
						[ 'key' => 'field_kc_bp_s_feat', 'label' => 'Featured', 'name' => 'featured', 'type' => 'true_false', 'ui' => 1 ],
						[ 'key' => 'field_kc_bp_s_en', 'label' => 'Actief', 'name' => 'enabled', 'type' => 'true_false', 'ui' => 1, 'default_value' => 1 ],
					],
				],
				[ 'key' => 'field_kc_bp_tab_gallery', 'label' => 'Gallery', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_bp_gallery',
					'label'        => 'Gallery',
					'name'         => 'kc_brand_gallery',
					'type'         => 'repeater',
					'layout'       => 'table',
					'button_label' => 'Afbeelding toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_bp_g_image', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'thumbnail' ],
						[ 'key' => 'field_kc_bp_g_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_g_tag', 'label' => 'Tag', 'name' => 'tag', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_g_caption', 'label' => 'Caption', 'name' => 'caption', 'type' => 'text' ],
						[
							'key'     => 'field_kc_bp_g_span',
							'label'   => 'Span',
							'name'    => 'span',
							'type'    => 'select',
							'choices' => [ 'large' => 'Large', 'medium' => 'Medium', 'wide' => 'Wide' ],
							'default_value' => 'medium',
						],
						[ 'key' => 'field_kc_bp_g_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
					],
				],
				[ 'key' => 'field_kc_bp_tab_catalogs', 'label' => 'Catalogi', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_bp_catalogs',
					'label'        => 'Catalogi / PDF',
					'name'         => 'kc_brand_catalogs',
					'type'         => 'repeater',
					'layout'       => 'table',
					'button_label' => 'Catalogus toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_bp_c_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_c_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_c_file', 'label' => 'Bestand', 'name' => 'file', 'type' => 'file', 'return_format' => 'array' ],
						[ 'key' => 'field_kc_bp_c_url', 'label' => 'URL (optioneel)', 'name' => 'url', 'type' => 'url' ],
					],
				],
				[ 'key' => 'field_kc_bp_tab_faq', 'label' => 'FAQ', 'type' => 'tab' ],
				[
					'key'          => 'field_kc_bp_faq',
					'label'        => 'FAQ',
					'name'         => 'kc_brand_faq',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Vraag toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_bp_faq_q', 'label' => 'Vraag', 'name' => 'question', 'type' => 'text' ],
						[ 'key' => 'field_kc_bp_faq_a', 'label' => 'Antwoord', 'name' => 'answer', 'type' => 'textarea', 'rows' => 3 ],
						[ 'key' => 'field_kc_bp_faq_en', 'label' => 'Actief', 'name' => 'enabled', 'type' => 'true_false', 'ui' => 1, 'default_value' => 1 ],
					],
				],
				[ 'key' => 'field_kc_bp_tab_cta', 'label' => 'Showroom CTA', 'type' => 'tab' ],
				[ 'key' => 'field_kc_bp_sr_body', 'label' => 'Beschrijving', 'name' => 'kc_brand_showroom_cta_body', 'type' => 'textarea', 'rows' => 2 ],
				[ 'key' => 'field_kc_bp_sr_label', 'label' => 'CTA tekst', 'name' => 'kc_brand_showroom_cta_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_bp_sr_url', 'label' => 'CTA URL', 'name' => 'kc_brand_showroom_cta_url', 'type' => 'url' ],
			],
			'location' => [
				[
					[
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => 'kitchen_brand',
					],
				],
			],
			'menu_order' => 10,
		]
	);

	// —— Opties: Leicht series ——————————————————————————————
	$series = [
		'kyoto'        => 'Kyoto',
		'bossa'        => 'Bossa',
		'taj-mahal'    => 'Taj Mahal',
		'ronde-wangen' => 'Ronde Wangen',
	];
	$series_fields = [
		[
			'key'     => 'field_kc_ls_msg',
			'label'   => 'Instructie',
			'type'    => 'message',
			'message' => 'Lege velden behouden React/theme defaults. Gerelateerde series worden automatisch afgeleid.',
		],
	];
	foreach ( $series as $slug => $label ) {
		$pfx = 'leicht_series_' . str_replace( '-', '_', $slug ) . '_';
		// Field names must match keukens-data.php which uses sanitize_key($slug) → hyphens become underscores? 
		// sanitize_key keeps hyphens actually... sanitize_key: lowercase, strips invalid, keeps hyphens.
		// Wait: 'leicht_series_' . sanitize_key('taj-mahal') . '_' = 'leicht_series_taj-mahal_'
		// But ACF name with hyphen is ok. Use same as apply function: sanitize_key($slug)
		$key_base = 'leicht_series_' . sanitize_key( $slug ) . '_';
		$series_fields[] = [ 'key' => 'field_kc_ls_tab_' . $slug, 'label' => $label, 'type' => 'tab' ];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_name', 'label' => 'Naam', 'name' => $key_base . 'name', 'type' => 'text' ];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_tagline', 'label' => 'Tagline', 'name' => $key_base . 'tagline', 'type' => 'text' ];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_desc', 'label' => 'Beschrijving (één alinea per regel)', 'name' => $key_base . 'description', 'type' => 'textarea', 'rows' => 4 ];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_hero', 'label' => 'Hero afbeelding', 'name' => $key_base . 'hero', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_seo_t', 'label' => 'SEO titel', 'name' => $key_base . 'seo_title', 'type' => 'text' ];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_seo_d', 'label' => 'SEO description', 'name' => $key_base . 'seo_desc', 'type' => 'textarea', 'rows' => 2 ];
		$series_fields[] = [
			'key'          => 'field_kc_ls_' . $slug . '_gallery',
			'label'        => 'Gallery',
			'name'         => $key_base . 'gallery',
			'type'         => 'repeater',
			'layout'       => 'table',
			'button_label' => 'Afbeelding toevoegen',
			'sub_fields'   => [
				[ 'key' => 'field_kc_ls_' . $slug . '_g_img', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'thumbnail' ],
				[ 'key' => 'field_kc_ls_' . $slug . '_g_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
				[ 'key' => 'field_kc_ls_' . $slug . '_g_cap', 'label' => 'Caption', 'name' => 'caption', 'type' => 'text' ],
			],
		];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_cta_l', 'label' => 'CTA tekst', 'name' => $key_base . 'cta_label', 'type' => 'text' ];
		$series_fields[] = [ 'key' => 'field_kc_ls_' . $slug . '_cta_u', 'label' => 'CTA URL', 'name' => $key_base . 'cta_url', 'type' => 'url' ];
	}

	acf_add_local_field_group(
		[
			'key'      => 'group_kc_cms_leicht_series',
			'title'    => 'Leicht series',
			'fields'   => $series_fields,
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-leicht-series',
					],
				],
			],
		]
	);
}
add_action( 'acf/init', 'kc_cms_register_keukens_field_groups', 25 );
