<?php
/**
 * ACF field groups for Consultation + Showroom pages and CMS options.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register CMS field groups.
 */
function kc_cms_register_field_groups(): void {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	// —— Pagina: Consultatie ————————————————————————————————
	acf_add_local_field_group(
		[
			'key'                   => 'group_kc_page_consultation',
			'title'                 => 'Consultatie — inhoud',
			'fields'                => [
				[
					'key'   => 'field_kc_cons_tab_seo',
					'label' => 'SEO',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_cons_seo_title',
					'label' => 'SEO titel',
					'name'  => 'kc_seo_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_seo_desc',
					'label' => 'Meta description',
					'name'  => 'kc_seo_description',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'           => 'field_kc_cons_og_image',
					'label'         => 'Open Graph afbeelding',
					'name'          => 'kc_og_image',
					'type'          => 'image',
					'return_format' => 'array',
					'preview_size'  => 'medium',
				],
				[
					'key'   => 'field_kc_cons_tab_hero',
					'label' => 'Linker paneel',
					'type'  => 'tab',
				],
				[
					'key'           => 'field_kc_cons_hero_image',
					'label'         => 'Hero afbeelding',
					'name'          => 'kc_cons_hero_image',
					'type'          => 'image',
					'return_format' => 'array',
					'preview_size'  => 'large',
				],
				[
					'key'   => 'field_kc_cons_hero_eyebrow',
					'label' => 'Eyebrow',
					'name'  => 'kc_cons_hero_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_hero_title',
					'label' => 'Titel',
					'name'  => 'kc_cons_hero_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_hero_lede',
					'label' => 'Beschrijving',
					'name'  => 'kc_cons_hero_lede',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'          => 'field_kc_cons_features',
					'label'        => 'Kenmerken (één per regel)',
					'name'         => 'kc_cons_features',
					'type'         => 'textarea',
					'rows'         => 4,
					'instructions' => 'Bijv. Persoonlijk ontwerpadvies',
				],
				[
					'key'   => 'field_kc_cons_tab_form',
					'label' => 'Formulier',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_cons_form_eyebrow',
					'label' => 'Formulier eyebrow',
					'name'  => 'kc_cons_form_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_form_title',
					'label' => 'Formulier titel',
					'name'  => 'kc_cons_form_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_form_lede',
					'label' => 'Formulier intro',
					'name'  => 'kc_cons_form_lede',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'          => 'field_kc_cons_showrooms',
					'label'        => 'Showroom-opties (één per regel)',
					'name'         => 'kc_cons_showrooms',
					'type'         => 'textarea',
					'rows'         => 6,
				],
				[
					'key'          => 'field_kc_cons_budgets',
					'label'        => 'Budget-opties (één per regel)',
					'name'         => 'kc_cons_budgets',
					'type'         => 'textarea',
					'rows'         => 6,
				],
				[
					'key'   => 'field_kc_cons_submit_label',
					'label' => 'Verstuurknop tekst',
					'name'  => 'kc_cons_submit_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_privacy',
					'label' => 'Privacytekst',
					'name'  => 'kc_cons_privacy',
					'type'  => 'textarea',
					'rows'  => 2,
				],
				[
					'key'   => 'field_kc_cons_tab_success',
					'label' => 'Succesbericht',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_cons_success_eyebrow',
					'label' => 'Succes eyebrow',
					'name'  => 'kc_cons_success_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_success_title',
					'label' => 'Succes titel',
					'name'  => 'kc_cons_success_title',
					'type'  => 'text',
				],
				[
					'key'          => 'field_kc_cons_success_lede',
					'label'        => 'Succes tekst',
					'name'         => 'kc_cons_success_lede',
					'type'         => 'textarea',
					'rows'         => 3,
					'instructions' => 'Gebruik {name} voor de voornaam.',
				],
				[
					'key'   => 'field_kc_cons_tab_preview',
					'label' => 'Voorstel-kaart',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_cons_preview_overline',
					'label' => 'Overline',
					'name'  => 'kc_cons_preview_overline',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_preview_title',
					'label' => 'Titel',
					'name'  => 'kc_cons_preview_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cons_preview_desc',
					'label' => 'Beschrijving',
					'name'  => 'kc_cons_preview_desc',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_cons_preview_footer',
					'label' => 'Voetnoot',
					'name'  => 'kc_cons_preview_footer',
					'type'  => 'textarea',
					'rows'  => 2,
				],
			],
			'location'              => [
				[
					[
						'param'    => 'page',
						'operator' => '==',
						'value'    => (string) ( get_page_by_path( 'consultation' )->ID ?? 0 ),
					],
				],
				[
					[
						'param'    => 'page_template',
						'operator' => '==',
						'value'    => 'page-consultation.php',
					],
				],
			],
			'menu_order'            => 0,
			'position'              => 'acf_after_title',
			'label_placement'       => 'top',
			'active'                => true,
		]
	);

	// Fallback location by slug when page ID unknown at register time.
	acf_add_local_field_group(
		[
			'key'      => 'group_kc_page_consultation_slug',
			'title'    => 'Consultatie — inhoud (slug)',
			'fields'   => [
				[
					'key'   => 'field_kc_cons_slug_note',
					'label' => 'Let op',
					'name'  => '',
					'type'  => 'message',
					'message' => 'Velden worden geladen via de primaire Consultatie-groep wanneer de pagina-slug consultation is.',
				],
			],
			'location' => [
				[
					[
						'param'    => 'page_type',
						'operator' => '==',
						'value'    => 'none',
					],
				],
			],
			'active'   => false,
		]
	);

	// —— Pagina: Showroom Keukens ————————————————————————————
	acf_add_local_field_group(
		[
			'key'                   => 'group_kc_page_showroom',
			'title'                 => 'Showroom Keukens — inhoud',
			'fields'                => [
				[
					'key'   => 'field_kc_sr_tab_seo',
					'label' => 'SEO',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_sr_seo_title',
					'label' => 'SEO titel',
					'name'  => 'kc_seo_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_seo_desc',
					'label' => 'Meta description',
					'name'  => 'kc_seo_description',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'           => 'field_kc_sr_og_image',
					'label'         => 'Open Graph afbeelding',
					'name'          => 'kc_og_image',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'   => 'field_kc_sr_tab_hero',
					'label' => 'Hero',
					'type'  => 'tab',
				],
				[
					'key'           => 'field_kc_sr_hero_image',
					'label'         => 'Hero afbeelding',
					'name'          => 'kc_sr_hero_image',
					'type'          => 'image',
					'return_format' => 'array',
					'preview_size'  => 'large',
				],
				[
					'key'   => 'field_kc_sr_hero_eyebrow',
					'label' => 'Eyebrow',
					'name'  => 'kc_sr_hero_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_hero_title',
					'label' => 'Titel',
					'name'  => 'kc_sr_hero_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_hero_highlight',
					'label' => 'Titel accent (cursief)',
					'name'  => 'kc_sr_hero_highlight',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_hero_subtitle',
					'label' => 'Ondertitel',
					'name'  => 'kc_sr_hero_subtitle',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_sr_cta_primary',
					'label' => 'Primaire knop tekst',
					'name'  => 'kc_sr_cta_primary_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_cta_primary_url',
					'label' => 'Primaire knop link',
					'name'  => 'kc_sr_cta_primary_url',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_sr_cta_secondary',
					'label' => 'Secundaire knop tekst',
					'name'  => 'kc_sr_cta_secondary_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_tab_intro',
					'label' => 'Intro',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_sr_intro_eyebrow',
					'label' => 'Intro eyebrow',
					'name'  => 'kc_sr_intro_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_intro_title',
					'label' => 'Intro titel',
					'name'  => 'kc_sr_intro_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_intro_highlight',
					'label' => 'Intro accent',
					'name'  => 'kc_sr_intro_highlight',
					'type'  => 'text',
				],
				[
					'key'          => 'field_kc_sr_intro_paragraphs',
					'label'        => 'Intro paragrafen (lege regel = nieuwe alinea)',
					'name'         => 'kc_sr_intro_paragraphs',
					'type'         => 'textarea',
					'rows'         => 8,
				],
				[
					'key'   => 'field_kc_sr_tab_gallery',
					'label' => 'Galerij',
					'type'  => 'tab',
				],
				[
					'key'     => 'field_kc_sr_gallery_note',
					'label'   => 'Galerij',
					'type'    => 'message',
					'message' => 'Vervang galerijafbeeldingen hieronder (max. 9). Lege velden behouden de React-standaardbeelden.',
				],
				[
					'key'           => 'field_kc_sr_gallery_1',
					'label'         => 'Galerij 1',
					'name'          => 'kc_sr_gallery_1',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_2',
					'label'         => 'Galerij 2',
					'name'          => 'kc_sr_gallery_2',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_3',
					'label'         => 'Galerij 3',
					'name'          => 'kc_sr_gallery_3',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_4',
					'label'         => 'Galerij 4',
					'name'          => 'kc_sr_gallery_4',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_5',
					'label'         => 'Galerij 5',
					'name'          => 'kc_sr_gallery_5',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_6',
					'label'         => 'Galerij 6',
					'name'          => 'kc_sr_gallery_6',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_7',
					'label'         => 'Galerij 7',
					'name'          => 'kc_sr_gallery_7',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_8',
					'label'         => 'Galerij 8',
					'name'          => 'kc_sr_gallery_8',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'           => 'field_kc_sr_gallery_9',
					'label'         => 'Galerij 9',
					'name'          => 'kc_sr_gallery_9',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'   => 'field_kc_sr_tab_cta',
					'label' => 'Onderste CTA',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_sr_bottom_title',
					'label' => 'CTA titel',
					'name'  => 'kc_sr_bottom_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_bottom_highlight',
					'label' => 'CTA accent',
					'name'  => 'kc_sr_bottom_highlight',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_sr_bottom_body',
					'label' => 'CTA tekst',
					'name'  => 'kc_sr_bottom_body',
					'type'  => 'textarea',
					'rows'  => 3,
				],
			],
			'location'              => [
				[
					[
						'param'    => 'page',
						'operator' => '==',
						'value'    => (string) ( get_page_by_path( 'showroom-keukens' )->ID ?? 0 ),
					],
				],
			],
			'menu_order'            => 0,
			'position'              => 'acf_after_title',
			'active'                => true,
		]
	);

	// —— Opties: Algemeen ————————————————————————————————————
	acf_add_local_field_group(
		[
			'key'      => 'group_kc_cms_general',
			'title'    => 'Algemene instellingen',
			'fields'   => [
				[
					'key'   => 'field_kc_cms_phone',
					'label' => 'Telefoon',
					'name'  => 'contact_phone',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cms_email',
					'label' => 'E-mail',
					'name'  => 'contact_email',
					'type'  => 'email',
				],
				[
					'key'   => 'field_kc_cms_address',
					'label' => 'Adres',
					'name'  => 'contact_address',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cms_postal',
					'label' => 'Postcode en plaats',
					'name'  => 'contact_postal',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_cms_hours',
					'label' => 'Openingstijden',
					'name'  => 'contact_hours',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_cms_google_rating',
					'label' => 'Google rating',
					'name'  => 'google_rating',
					'type'  => 'text',
					'default_value' => '4,9',
				],
			],
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-general',
					],
				],
			],
		]
	);

	// —— Opties: Header ——————————————————————————————————————
	acf_add_local_field_group(
		[
			'key'      => 'group_kc_cms_header',
			'title'    => 'Header CTA',
			'fields'   => [
				[
					'key'   => 'field_kc_cms_header_cta_label',
					'label' => 'CTA knop tekst',
					'name'  => 'header_cta_label',
					'type'  => 'text',
				],
				[
					'key'          => 'field_kc_cms_header_cta_url',
					'label'        => 'CTA knop link',
					'name'         => 'header_cta_url',
					'type'         => 'url',
					'instructions' => 'Standaard: /consultation/',
				],
			],
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-header',
					],
				],
			],
		]
	);

	acf_add_local_field_group(
		[
			'key'      => 'group_kc_cms_sticky',
			'title'    => 'Secondary CTA / KC Concierge',
			'fields'   => [
				[
					'key'           => 'field_kc_sticky_enabled',
					'label'         => 'Toon secondary CTA',
					'name'          => 'sticky_cta_enabled',
					'type'          => 'true_false',
					'default_value' => 1,
					'ui'            => 1,
				],
				[
					'key'   => 'field_kc_sticky_badge',
					'label' => 'Badge label',
					'name'  => 'sticky_cta_badge',
					'type'  => 'text',
					'default_value' => 'KC Concierge',
				],
				[
					'key'   => 'field_kc_sticky_primary_label',
					'label' => 'Primaire knop tekst',
					'name'  => 'sticky_cta_primary_label',
					'type'  => 'text',
					'default_value' => 'Plan showroombezoek',
				],
				[
					'key'   => 'field_kc_sticky_primary_meta',
					'label' => 'Primaire knop ondertitel',
					'name'  => 'sticky_cta_primary_meta',
					'type'  => 'text',
					'default_value' => 'Vrijblijvend advies in Utrecht',
				],
				[
					'key'   => 'field_kc_sticky_primary_url',
					'label' => 'Primaire knop link',
					'name'  => 'sticky_cta_primary_url',
					'type'  => 'url',
					'instructions' => 'Standaard: /consultation/',
				],
				[
					'key'   => 'field_kc_sticky_phone_label',
					'label' => 'Telefoon knop tekst',
					'name'  => 'sticky_cta_phone_label',
					'type'  => 'text',
					'default_value' => 'Bel een adviseur',
				],
				[
					'key'   => 'field_kc_sticky_phone_meta',
					'label' => 'Telefoon knop ondertitel',
					'name'  => 'sticky_cta_phone_meta',
					'type'  => 'text',
					'instructions' => 'Leeg = site telefoonnummer',
				],
				[
					'key'   => 'field_kc_sticky_wa_label',
					'label' => 'WhatsApp knop tekst',
					'name'  => 'sticky_cta_whatsapp_label',
					'type'  => 'text',
					'default_value' => 'WhatsApp',
				],
				[
					'key'   => 'field_kc_sticky_wa_meta',
					'label' => 'WhatsApp knop ondertitel',
					'name'  => 'sticky_cta_whatsapp_meta',
					'type'  => 'text',
					'default_value' => 'Persoonlijk & snel antwoord',
				],
				[
					'key'   => 'field_kc_sticky_wa_url',
					'label' => 'WhatsApp URL',
					'name'  => 'sticky_cta_whatsapp_url',
					'type'  => 'url',
					'instructions' => 'React default: https://wa.me/31302415122?text=...',
				],
			],
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-sticky',
					],
				],
			],
		]
	);
}
add_action( 'acf/init', 'kc_cms_register_field_groups', 20 );

/**
 * Attach consultation fields to any page with slug consultation (dynamic location).
 *
 * @param array<string,mixed> $field_group Field group.
 * @return array<string,mixed>
 */
function kc_cms_fix_consultation_location( array $field_group ): array {
	if ( ( $field_group['key'] ?? '' ) !== 'group_kc_page_consultation' ) {
		return $field_group;
	}
	$page = get_page_by_path( 'consultation' );
	if ( $page ) {
		$field_group['location'] = [
			[
				[
					'param'    => 'page',
					'operator' => '==',
					'value'    => (string) $page->ID,
				],
			],
		];
	}
	return $field_group;
}
add_filter( 'acf/load_field_group', 'kc_cms_fix_consultation_location' );

/**
 * Attach showroom fields dynamically.
 *
 * @param array<string,mixed> $field_group Field group.
 * @return array<string,mixed>
 */
function kc_cms_fix_showroom_location( array $field_group ): array {
	if ( ( $field_group['key'] ?? '' ) !== 'group_kc_page_showroom' ) {
		return $field_group;
	}
	$page = get_page_by_path( 'showroom-keukens' );
	if ( $page ) {
		$field_group['location'] = [
			[
				[
					'param'    => 'page',
					'operator' => '==',
					'value'    => (string) $page->ID,
				],
			],
		];
	}
	return $field_group;
}
add_filter( 'acf/load_field_group', 'kc_cms_fix_showroom_location' );
