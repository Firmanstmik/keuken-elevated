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
				[
					'key'           => 'field_kc_cms_founded',
					'label'         => 'Opgericht (jaar)',
					'name'          => 'founded_year',
					'type'          => 'text',
					'default_value' => '1978',
				],
				[
					'key'           => 'field_kc_cms_hours_rows',
					'label'         => 'Openingstijden (rijen)',
					'name'          => 'contact_hours_rows',
					'type'          => 'textarea',
					'rows'          => 4,
					'instructions'  => 'Eén regel per rij: Dag|Tijden',
					'default_value' => "Maandag tot Vrijdag|09:00 tot 18:00\nZaterdag|09:00 tot 17:00\nZondag|Gesloten",
				],
				[
					'key'   => 'field_kc_cms_maps',
					'label' => 'Google Maps URL',
					'name'  => 'contact_maps_url',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_cms_facebook',
					'label' => 'Facebook URL',
					'name'  => 'social_facebook',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_cms_instagram',
					'label' => 'Instagram URL',
					'name'  => 'social_instagram',
					'type'  => 'url',
				],
				[
					'key'          => 'field_kc_cms_configurator',
					'label'        => 'Configurator URL',
					'name'         => 'configurator_url',
					'type'         => 'url',
					'instructions' => 'React SoT: /brands (SPA). Op WordPress bestaat /brands nog niet (404). Default tot funnel: homepage /#brands. Optioneel: externe React configurator-URL.',
					'default_value'=> '',
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

	acf_add_local_field_group(
		[
			'key'      => 'group_kc_cms_footer',
			'title'    => 'Footer',
			'fields'   => [
				[
					'key'   => 'field_kc_footer_hero_eyebrow',
					'label' => 'Hero eyebrow',
					'name'  => 'footer_hero_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_footer_hero_title',
					'label' => 'Hero titel',
					'name'  => 'footer_hero_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_footer_hero_em',
					'label' => 'Hero titel (accent)',
					'name'  => 'footer_hero_title_em',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_footer_hero_copy',
					'label' => 'Hero tekst',
					'name'  => 'footer_hero_copy',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_footer_cta1_label',
					'label' => 'Primary CTA label',
					'name'  => 'footer_cta_primary_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_footer_cta1_url',
					'label' => 'Primary CTA URL',
					'name'  => 'footer_cta_primary_url',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_footer_cta2_label',
					'label' => 'Secondary CTA label',
					'name'  => 'footer_cta_secondary_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_footer_cta2_url',
					'label' => 'Secondary CTA URL',
					'name'  => 'footer_cta_secondary_url',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_footer_brand_eyebrow',
					'label' => 'Brand eyebrow',
					'name'  => 'footer_brand_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_footer_brand_copy',
					'label' => 'Brand beschrijving',
					'name'  => 'footer_brand_copy',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'           => 'field_kc_footer_stat_projects',
					'label'         => 'Stat: Projecten',
					'name'          => 'footer_stat_projects',
					'type'          => 'text',
					'default_value' => '150+',
				],
				[
					'key'           => 'field_kc_footer_stat_exp',
					'label'         => 'Stat: Ervaring',
					'name'          => 'footer_stat_experience',
					'type'          => 'text',
					'default_value' => '45+',
				],
				[
					'key'          => 'field_kc_footer_col_collections',
					'label'        => 'Kolom Collecties (Label|URL per regel)',
					'name'         => 'footer_col_collections',
					'type'         => 'textarea',
					'rows'         => 5,
					'instructions' => 'React Collecties links',
				],
				[
					'key'   => 'field_kc_footer_col_digital',
					'label' => 'Kolom Digitaal Ontwerp (Label|URL per regel)',
					'name'  => 'footer_col_digital',
					'type'  => 'textarea',
					'rows'  => 5,
				],
				[
					'key'   => 'field_kc_footer_col_about',
					'label' => 'Kolom Over ons (Label|URL per regel)',
					'name'  => 'footer_col_about',
					'type'  => 'textarea',
					'rows'  => 6,
				],
				[
					'key'   => 'field_kc_footer_col_service',
					'label' => 'Kolom Klantenservice (Label|URL per regel)',
					'name'  => 'footer_col_service',
					'type'  => 'textarea',
					'rows'  => 4,
				],
			],
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-footer',
					],
				],
			],
		]
	);

	acf_add_local_field_group(
		[
			'key'      => 'group_kc_cms_nav',
			'title'    => 'Navigatie / Mega menu',
			'fields'   => [
				[
					'key'   => 'field_kc_nav_tab_primary',
					'label' => 'Primaire labels',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_nav_label_home',
					'label' => 'Label Home',
					'name'  => 'nav_label_home',
					'type'  => 'text',
					'default_value' => 'Home',
				],
				[
					'key'   => 'field_kc_nav_label_keukens',
					'label' => 'Label Keukens',
					'name'  => 'nav_label_keukens',
					'type'  => 'text',
					'default_value' => 'Keukens',
				],
				[
					'key'   => 'field_kc_nav_label_bladen',
					'label' => 'Label Keukenbladen',
					'name'  => 'nav_label_keukenbladen',
					'type'  => 'text',
					'default_value' => 'Keukenbladen',
				],
				[
					'key'   => 'field_kc_nav_label_apps',
					'label' => 'Label Apparatuur',
					'name'  => 'nav_label_apparatuur',
					'type'  => 'text',
					'default_value' => 'Apparatuur',
				],
				[
					'key'   => 'field_kc_nav_label_offers',
					'label' => 'Label Aanbiedingen',
					'name'  => 'nav_label_aanbiedingen',
					'type'  => 'text',
					'default_value' => 'Aanbiedingen',
				],
				[
					'key'   => 'field_kc_nav_url_offers',
					'label' => 'URL Aanbiedingen',
					'name'  => 'nav_url_aanbiedingen',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_nav_label_contact',
					'label' => 'Label Contact',
					'name'  => 'nav_label_contact',
					'type'  => 'text',
					'default_value' => 'Contact',
				],
				[
					'key'   => 'field_kc_nav_tab_contact',
					'label' => 'Contact dropdown',
					'type'  => 'tab',
				],
				[
					'key'          => 'field_kc_nav_contact_items',
					'label'        => 'Contact menu items',
					'name'         => 'nav_contact_items',
					'type'         => 'repeater',
					'layout'       => 'table',
					'button_label' => 'Item toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_nav_ci_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
						[ 'key' => 'field_kc_nav_ci_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[
							'key'           => 'field_kc_nav_ci_icon',
							'label'         => 'Icon',
							'name'          => 'icon',
							'type'          => 'select',
							'choices'       => [ 'map' => 'Map', 'file' => 'File' ],
							'default_value' => 'map',
						],
					],
					'instructions' => 'Leeg = React defaults',
				],
				[
					'key'   => 'field_kc_nav_tab_editorial',
					'label' => 'Keukenbladen / Apparatuur mega',
					'type'  => 'tab',
				],
				[
					'key'   => 'field_kc_nav_ed_bladen_title',
					'label' => 'Keukenbladen — titel',
					'name'  => 'nav_editorial_keukenbladen_title',
					'type'  => 'text',
				],
				[
					'key'          => 'field_kc_nav_ed_bladen_groups',
					'label'        => 'Keukenbladen — groepen',
					'name'         => 'nav_editorial_keukenbladen_groups',
					'type'         => 'textarea',
					'rows'         => 8,
					'instructions' => "## Materialen\nSilestone|/keukenbladen/silestone/\n## Advies\nAlle keukenbladen|/keukenbladen/",
				],
				[
					'key'   => 'field_kc_nav_ed_bladen_ft',
					'label' => 'Keukenbladen featured titel',
					'name'  => 'nav_editorial_keukenbladen_featured_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_nav_ed_bladen_fd',
					'label' => 'Keukenbladen featured tekst',
					'name'  => 'nav_editorial_keukenbladen_featured_desc',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_nav_ed_bladen_fb',
					'label' => 'Keukenbladen featured knop',
					'name'  => 'nav_editorial_keukenbladen_featured_btn',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_nav_ed_bladen_fu',
					'label' => 'Keukenbladen featured URL',
					'name'  => 'nav_editorial_keukenbladen_featured_url',
					'type'  => 'url',
				],
				[
					'key'           => 'field_kc_nav_ed_bladen_fi',
					'label'         => 'Keukenbladen featured image',
					'name'          => 'nav_editorial_keukenbladen_featured_image',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'   => 'field_kc_nav_ed_apps_title',
					'label' => 'Apparatuur — titel',
					'name'  => 'nav_editorial_apparatuur_title',
					'type'  => 'text',
				],
				[
					'key'          => 'field_kc_nav_ed_apps_groups',
					'label'        => 'Apparatuur — groepen',
					'name'         => 'nav_editorial_apparatuur_groups',
					'type'         => 'textarea',
					'rows'         => 10,
					'instructions' => 'Zelfde formaat als keukenbladen groepen',
				],
				[
					'key'   => 'field_kc_nav_ed_apps_ft',
					'label' => 'Apparatuur featured titel',
					'name'  => 'nav_editorial_apparatuur_featured_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_nav_ed_apps_fd',
					'label' => 'Apparatuur featured tekst',
					'name'  => 'nav_editorial_apparatuur_featured_desc',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_nav_ed_apps_fb',
					'label' => 'Apparatuur featured knop',
					'name'  => 'nav_editorial_apparatuur_featured_btn',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_nav_ed_apps_fu',
					'label' => 'Apparatuur featured URL',
					'name'  => 'nav_editorial_apparatuur_featured_url',
					'type'  => 'url',
				],
				[
					'key'           => 'field_kc_nav_ed_apps_fi',
					'label'         => 'Apparatuur featured image',
					'name'          => 'nav_editorial_apparatuur_featured_image',
					'type'          => 'image',
					'return_format' => 'array',
				],
				[
					'key'   => 'field_kc_nav_tab_kitchens',
					'label' => 'Keukens mega',
					'type'  => 'tab',
				],
				[
					'key'          => 'field_kc_nav_kitchen_cats',
					'label'        => 'Keuken categorieën',
					'name'         => 'nav_kitchen_categories',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Categorie toevoegen',
					'instructions' => 'Leeg laten = React defaults. Invullen = volledige vervanging.',
					'sub_fields'   => [
						[ 'key' => 'field_kc_nk_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
						[ 'key' => 'field_kc_nk_eyebrow', 'label' => 'Eyebrow', 'name' => 'eyebrow', 'type' => 'text' ],
						[ 'key' => 'field_kc_nk_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_nk_footer', 'label' => 'Footer tekst', 'name' => 'footer', 'type' => 'text' ],
						[ 'key' => 'field_kc_nk_detail', 'label' => 'Detail', 'name' => 'detail', 'type' => 'text' ],
						[ 'key' => 'field_kc_nk_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[ 'key' => 'field_kc_nk_link', 'label' => 'Link label', 'name' => 'link_label', 'type' => 'text' ],
						[
							'key'          => 'field_kc_nk_cards',
							'label'        => 'Cards',
							'name'         => 'cards',
							'type'         => 'repeater',
							'layout'       => 'table',
							'button_label' => 'Card',
							'sub_fields'   => [
								[ 'key' => 'field_kc_nkc_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
								[ 'key' => 'field_kc_nkc_note', 'label' => 'Note', 'name' => 'note', 'type' => 'text' ],
								[ 'key' => 'field_kc_nkc_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
								[ 'key' => 'field_kc_nkc_img', 'label' => 'Image', 'name' => 'image', 'type' => 'image', 'return_format' => 'array' ],
							],
						],
					],
				],
				[
					'key'   => 'field_kc_nav_tab_mobile',
					'label' => 'Mobiel menu',
					'type'  => 'tab',
				],
				[
					'key'          => 'field_kc_nav_mobile_items',
					'label'        => 'Mobiele navigatie',
					'name'         => 'nav_mobile_items',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Item toevoegen',
					'instructions' => 'Zelfde bron als desktop. Leeg = React defaults.',
					'sub_fields'   => [
						[ 'key' => 'field_kc_nm_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
						[ 'key' => 'field_kc_nm_url', 'label' => 'URL (alleen als geen children)', 'name' => 'url', 'type' => 'url' ],
						[
							'key'          => 'field_kc_nm_children',
							'label'        => 'Subitems',
							'name'         => 'children',
							'type'         => 'repeater',
							'layout'       => 'table',
							'button_label' => 'Subitem',
							'sub_fields'   => [
								[ 'key' => 'field_kc_nmc_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
								[ 'key' => 'field_kc_nmc_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
								[ 'key' => 'field_kc_nmc_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'text' ],
								[
									'key'     => 'field_kc_nmc_icon',
									'label'   => 'Icon',
									'name'    => 'icon',
									'type'    => 'select',
									'choices' => [ '' => 'Default', 'map' => 'Map', 'file' => 'File' ],
								],
							],
						],
					],
				],
				[
					'key'   => 'field_kc_nav_tab_bottom',
					'label' => 'Mobiele bottom nav',
					'type'  => 'tab',
				],
				[
					'key'          => 'field_kc_mobile_bottom_nav',
					'label'        => 'Bottom navigation items',
					'name'         => 'mobile_bottom_nav_items',
					'type'         => 'repeater',
					'layout'       => 'table',
					'button_label' => 'Item toevoegen',
					'instructions' => 'React: Home / Keukens / Showroom / Afspraak. Leeg = defaults.',
					'sub_fields'   => [
						[ 'key' => 'field_kc_mbn_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
						[ 'key' => 'field_kc_mbn_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[
							'key'           => 'field_kc_mbn_icon',
							'label'         => 'Icon',
							'name'          => 'icon',
							'type'          => 'select',
							'choices'       => [
								'home'          => 'Home',
								'shop'          => 'Shop',
								'gallery'       => 'Gallery',
								'calendar-tick' => 'Calendar',
							],
							'default_value' => 'home',
						],
						[
							'key'   => 'field_kc_mbn_primary',
							'label' => 'Primary',
							'name'  => 'primary',
							'type'  => 'true_false',
							'ui'    => 1,
						],
					],
				],
			],
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-nav',
					],
				],
			],
		]
	);

	// —— Opties: Homepage ————————————————————————————————————
	acf_add_local_field_group(
		[
			'key'                   => 'group_kc_cms_homepage',
			'title'                 => 'Homepage secties',
			'fields'                => [
				[
					'key'     => 'field_kc_home_msg',
					'label'   => 'Instructie',
					'type'    => 'message',
					'message' => 'Lege velden en lege repeaters gebruiken automatisch de React-standaardinhoud. Alleen invullen wat u wilt overschrijven. Hero-velden staan op de voorpagina zelf.',
				],
				// Partners
				[ 'key' => 'field_kc_home_tab_partners', 'label' => 'Partners', 'type' => 'tab' ],
				[
					'key'           => 'field_kc_home_partners_scene',
					'label'         => 'Achtergrondafbeelding',
					'name'          => 'home_partners_scene',
					'type'          => 'image',
					'return_format' => 'array',
					'preview_size'  => 'medium',
				],
				[
					'key'          => 'field_kc_home_partners',
					'label'        => 'Partnerkaarten',
					'name'         => 'home_partners',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Partner toevoegen',
					'instructions' => 'Leeg = React defaults (Leicht, AI Küchen, Nobilia, Zampieri, Cucinesse).',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hp_name', 'label' => 'Naam', 'name' => 'name', 'type' => 'text' ],
						[ 'key' => 'field_kc_hp_eyebrow', 'label' => 'Eyebrow', 'name' => 'eyebrow', 'type' => 'text' ],
						[ 'key' => 'field_kc_hp_origin', 'label' => 'Herkomst', 'name' => 'origin', 'type' => 'text' ],
						[ 'key' => 'field_kc_hp_since', 'label' => 'Sinds / label', 'name' => 'since', 'type' => 'text' ],
						[ 'key' => 'field_kc_hp_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'textarea', 'rows' => 3 ],
						[ 'key' => 'field_kc_hp_sig', 'label' => 'Signature', 'name' => 'signature', 'type' => 'text' ],
						[ 'key' => 'field_kc_hp_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[ 'key' => 'field_kc_hp_logo', 'label' => 'Logo', 'name' => 'logo', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'thumbnail' ],
						[ 'key' => 'field_kc_hp_image', 'label' => 'Hero-afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
						[ 'key' => 'field_kc_hp_enabled', 'label' => 'Actief', 'name' => 'enabled', 'type' => 'true_false', 'ui' => 1, 'default_value' => 1 ],
					],
				],
				[
					'key'          => 'field_kc_home_partner_logos',
					'label'        => 'Marquee-logo’s',
					'name'         => 'home_partner_logos',
					'type'         => 'repeater',
					'layout'       => 'table',
					'button_label' => 'Logo toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hpl_name', 'label' => 'Naam', 'name' => 'name', 'type' => 'text' ],
						[ 'key' => 'field_kc_hpl_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'text' ],
						[ 'key' => 'field_kc_hpl_logo', 'label' => 'Logo', 'name' => 'logo', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'thumbnail' ],
					],
				],
				// Why
				[ 'key' => 'field_kc_home_tab_why', 'label' => 'Waarom Keuken-Centrum', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_why_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_why_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_why_heading', 'label' => 'Titel', 'name' => 'home_why_heading', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_why_heading_em', 'label' => 'Titel accent', 'name' => 'home_why_heading_em', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_why_lede', 'label' => 'Beschrijving', 'name' => 'home_why_lede', 'type' => 'textarea', 'rows' => 3 ],
				[
					'key'          => 'field_kc_home_why_features',
					'label'        => 'Kenmerken',
					'name'         => 'home_why_features',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Kenmerk toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hwy_num', 'label' => 'Nummer', 'name' => 'number', 'type' => 'text' ],
						[ 'key' => 'field_kc_hwy_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_hwy_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'textarea', 'rows' => 3 ],
						[ 'key' => 'field_kc_hwy_accent', 'label' => 'Accentlabel', 'name' => 'accent', 'type' => 'text' ],
						[
							'key'     => 'field_kc_hwy_icon',
							'label'   => 'Icoon',
							'name'    => 'icon',
							'type'    => 'select',
							'choices' => [ 'settings' => 'Settings', 'heart' => 'Heart', 'diamond' => 'Diamond', 'people' => 'People' ],
						],
						[ 'key' => 'field_kc_hwy_image', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
						[ 'key' => 'field_kc_hwy_alt', 'label' => 'Alt-tekst', 'name' => 'image_alt', 'type' => 'text' ],
					],
				],
				// Journey
				[ 'key' => 'field_kc_home_tab_journey', 'label' => 'Onze aanpak', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_journey_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_journey_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_journey_heading', 'label' => 'Titel', 'name' => 'home_journey_heading', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_journey_heading_em', 'label' => 'Titel accent', 'name' => 'home_journey_heading_em', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_journey_lede', 'label' => 'Beschrijving', 'name' => 'home_journey_lede', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_home_journey_cta_label', 'label' => 'CTA tekst', 'name' => 'home_journey_cta_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_journey_cta_url', 'label' => 'CTA URL', 'name' => 'home_journey_cta_url', 'type' => 'url', 'instructions' => 'React SoT: /brands (SPA). WP default tot funnel: /#brands.' ],
				// Showcase
				[ 'key' => 'field_kc_home_tab_showcase', 'label' => 'Showroom', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_showcase_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_showcase_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_showcase_title_1', 'label' => 'Titel regel 1', 'name' => 'home_showcase_title_1', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_showcase_title_2', 'label' => 'Titel accent', 'name' => 'home_showcase_title_2', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_showcase_copy', 'label' => 'Beschrijving', 'name' => 'home_showcase_copy', 'type' => 'textarea', 'rows' => 4 ],
				[ 'key' => 'field_kc_home_showcase_copy_secondary', 'label' => 'Secundaire zin (na highlights)', 'name' => 'home_showcase_copy_secondary', 'type' => 'textarea', 'rows' => 2 ],
				[ 'key' => 'field_kc_home_showcase_highlights', 'label' => 'Highlights (één per regel)', 'name' => 'home_showcase_highlights', 'type' => 'textarea', 'rows' => 4 ],
				[ 'key' => 'field_kc_home_showcase_cta_label', 'label' => 'Primaire CTA', 'name' => 'home_showcase_cta_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_showcase_cta_url', 'label' => 'Primaire CTA URL', 'name' => 'home_showcase_cta_url', 'type' => 'url' ],
				[ 'key' => 'field_kc_home_showcase_cta_secondary_label', 'label' => 'Secundaire CTA', 'name' => 'home_showcase_cta_secondary_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_showcase_cta_secondary_url', 'label' => 'Secundaire CTA URL', 'name' => 'home_showcase_cta_secondary_url', 'type' => 'url' ],
				[
					'key'          => 'field_kc_home_showcase_stats',
					'label'        => 'Statistieken',
					'name'         => 'home_showcase_stats',
					'type'         => 'repeater',
					'layout'       => 'table',
					'button_label' => 'Stat toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hss_num', 'label' => 'Getal', 'name' => 'number', 'type' => 'text' ],
						[ 'key' => 'field_kc_hss_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
						[ 'key' => 'field_kc_hss_sub', 'label' => 'Sub', 'name' => 'sub', 'type' => 'text' ],
					],
				],
				// Experience
				[ 'key' => 'field_kc_home_tab_experience', 'label' => 'Ervaring', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_experience_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_experience_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_experience_heading', 'label' => 'Titel', 'name' => 'home_experience_heading', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_experience_heading_em', 'label' => 'Titel accent', 'name' => 'home_experience_heading_em', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_experience_lede', 'label' => 'Beschrijving', 'name' => 'home_experience_lede', 'type' => 'textarea', 'rows' => 3 ],
				[
					'key'          => 'field_kc_home_experience_cards',
					'label'        => 'Kaarten',
					'name'         => 'home_experience_cards',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Kaart toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hec_num', 'label' => 'Nummer', 'name' => 'number', 'type' => 'text' ],
						[ 'key' => 'field_kc_hec_featured', 'label' => 'Featured', 'name' => 'featured', 'type' => 'true_false', 'ui' => 1 ],
						[ 'key' => 'field_kc_hec_tag', 'label' => 'Tag', 'name' => 'tag', 'type' => 'text' ],
						[ 'key' => 'field_kc_hec_kicker', 'label' => 'Kicker', 'name' => 'kicker', 'type' => 'text' ],
						[ 'key' => 'field_kc_hec_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_hec_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'textarea', 'rows' => 2 ],
						[ 'key' => 'field_kc_hec_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[ 'key' => 'field_kc_hec_image', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
					],
				],
				// Collections
				[ 'key' => 'field_kc_home_tab_collections', 'label' => 'Collecties', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_collections_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_collections_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_collections_heading', 'label' => 'Titel', 'name' => 'home_collections_heading', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_collections_heading_em', 'label' => 'Titel accent', 'name' => 'home_collections_heading_em', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_collections_lede', 'label' => 'Beschrijving', 'name' => 'home_collections_lede', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_home_collections_cta_label', 'label' => 'CTA tekst', 'name' => 'home_collections_cta_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_collections_cta_url', 'label' => 'CTA URL', 'name' => 'home_collections_cta_url', 'type' => 'url' ],
				[
					'key'          => 'field_kc_home_collections',
					'label'        => 'Collectiekaarten',
					'name'         => 'home_collections',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Collectie toevoegen',
					'instructions' => 'Kaartformaat blijft 300×450 (React SoT).',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hc_num', 'label' => 'Nummer', 'name' => 'number', 'type' => 'text' ],
						[ 'key' => 'field_kc_hc_label', 'label' => 'Label', 'name' => 'label', 'type' => 'text' ],
						[ 'key' => 'field_kc_hc_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_hc_desc_short', 'label' => 'Descriptor', 'name' => 'descriptor', 'type' => 'text' ],
						[ 'key' => 'field_kc_hc_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'textarea', 'rows' => 2 ],
						[ 'key' => 'field_kc_hc_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[ 'key' => 'field_kc_hc_image', 'label' => 'Afbeelding', 'name' => 'image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium' ],
						[ 'key' => 'field_kc_hc_enabled', 'label' => 'Actief', 'name' => 'enabled', 'type' => 'true_false', 'ui' => 1, 'default_value' => 1 ],
					],
				],
				// Process
				[ 'key' => 'field_kc_home_tab_process', 'label' => 'Werkwijze', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_process_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_process_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_process_heading', 'label' => 'Titel', 'name' => 'home_process_heading', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_process_heading_em', 'label' => 'Titel accent', 'name' => 'home_process_heading_em', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_process_lede', 'label' => 'Beschrijving', 'name' => 'home_process_lede', 'type' => 'textarea', 'rows' => 2 ],
				[ 'key' => 'field_kc_home_process_cta_label', 'label' => 'CTA tekst', 'name' => 'home_process_cta_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_process_cta_url', 'label' => 'CTA URL', 'name' => 'home_process_cta_url', 'type' => 'url' ],
				[
					'key'          => 'field_kc_home_process_steps',
					'label'        => 'Stappen',
					'name'         => 'home_process_steps',
					'type'         => 'repeater',
					'layout'       => 'table',
					'button_label' => 'Stap toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hps_num', 'label' => 'Nummer', 'name' => 'number', 'type' => 'text' ],
						[ 'key' => 'field_kc_hps_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_hps_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'text' ],
						[
							'key'     => 'field_kc_hps_icon',
							'label'   => 'Icoon',
							'name'    => 'icon',
							'type'    => 'select',
							'choices' => [ 'shop' => 'Shop', 'brush' => 'Brush', 'layers' => 'Layers', 'gallery' => 'Gallery', 'people' => 'People' ],
						],
					],
				],
				// Final CTA
				[ 'key' => 'field_kc_home_tab_final', 'label' => 'Eind CTA', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_final_cta_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_final_cta_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_final_cta_heading', 'label' => 'Titel', 'name' => 'home_final_cta_heading', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_final_cta_heading_em', 'label' => 'Titel accent', 'name' => 'home_final_cta_heading_em', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_final_cta_lede', 'label' => 'Beschrijving', 'name' => 'home_final_cta_lede', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_home_final_cta_primary_label', 'label' => 'Primaire CTA', 'name' => 'home_final_cta_primary_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_final_cta_primary_url', 'label' => 'Primaire CTA URL', 'name' => 'home_final_cta_primary_url', 'type' => 'url' ],
				[ 'key' => 'field_kc_home_final_cta_secondary_label', 'label' => 'Secundaire CTA', 'name' => 'home_final_cta_secondary_label', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_final_cta_secondary_url', 'label' => 'Secundaire CTA URL', 'name' => 'home_final_cta_secondary_url', 'type' => 'url' ],
				[
					'key'          => 'field_kc_home_final_cta_actions',
					'label'        => 'Actiekaarten',
					'name'         => 'home_final_cta_actions',
					'type'         => 'repeater',
					'layout'       => 'block',
					'button_label' => 'Actie toevoegen',
					'sub_fields'   => [
						[ 'key' => 'field_kc_hfa_num', 'label' => 'Nummer', 'name' => 'number', 'type' => 'text' ],
						[ 'key' => 'field_kc_hfa_title', 'label' => 'Titel', 'name' => 'title', 'type' => 'text' ],
						[ 'key' => 'field_kc_hfa_desc', 'label' => 'Beschrijving', 'name' => 'description', 'type' => 'textarea', 'rows' => 2 ],
						[ 'key' => 'field_kc_hfa_pill', 'label' => 'Pill', 'name' => 'pill', 'type' => 'text' ],
						[ 'key' => 'field_kc_hfa_url', 'label' => 'URL', 'name' => 'url', 'type' => 'url' ],
						[
							'key'     => 'field_kc_hfa_icon',
							'label'   => 'Icoon',
							'name'    => 'icon',
							'type'    => 'select',
							'choices' => [ 'house' => 'House', 'phone' => 'Phone', 'mail' => 'Mail' ],
						],
					],
				],
				// Consultation home
				[ 'key' => 'field_kc_home_tab_consultation', 'label' => 'Consultatie', 'type' => 'tab' ],
				[ 'key' => 'field_kc_home_consultation_eyebrow', 'label' => 'Eyebrow', 'name' => 'home_consultation_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_consultation_heading', 'label' => 'Titel', 'name' => 'home_consultation_heading', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_consultation_heading_em', 'label' => 'Titel accent', 'name' => 'home_consultation_heading_em', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_consultation_lede', 'label' => 'Beschrijving', 'name' => 'home_consultation_lede', 'type' => 'textarea', 'rows' => 3 ],
				[ 'key' => 'field_kc_home_consultation_form_eyebrow', 'label' => 'Formulier eyebrow', 'name' => 'home_consultation_form_eyebrow', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_consultation_form_title', 'label' => 'Formulier titel', 'name' => 'home_consultation_form_title', 'type' => 'text' ],
				[ 'key' => 'field_kc_home_consultation_cta_label', 'label' => 'Verzendknop', 'name' => 'home_consultation_cta_label', 'type' => 'text' ],
			],
			'location'              => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-cms-homepage',
					],
				],
			],
			'menu_order'            => 0,
			'position'              => 'normal',
			'label_placement'       => 'top',
			'instruction_placement' => 'label',
			'active'                => true,
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
