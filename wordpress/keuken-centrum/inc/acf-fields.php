<?php
/**
 * Local ACF field groups.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Registers local ACF field groups when ACF is available.
 */
function kc_register_acf_fields(): void {
	if (! function_exists('acf_add_local_field_group')) {
		return;
	}

	if (function_exists('acf_add_options_page')) {
		acf_add_options_page(
			[
				'page_title' => __('Site Settings', 'keuken-centrum'),
				'menu_title' => __('Site Settings', 'keuken-centrum'),
				'menu_slug'  => 'kc-site-settings',
				'capability' => 'edit_theme_options',
				'redirect'   => false,
				'position'   => 59,
			]
		);
	}

	acf_add_local_field_group(
		[
			'key'                   => 'group_kc_front_page',
			'title'                 => __('Homepage Hero', 'keuken-centrum'),
			'fields'                => [
				[
					'key'   => 'field_kc_hero_eyebrow',
					'label' => __('Hero Eyebrow', 'keuken-centrum'),
					'name'  => 'hero_eyebrow',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_hero_title',
					'label' => __('Hero Title', 'keuken-centrum'),
					'name'  => 'hero_title',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_hero_title_em',
					'label' => __('Hero Title Highlight', 'keuken-centrum'),
					'name'  => 'hero_title_em',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_hero_subtitle',
					'label' => __('Hero Subtitle', 'keuken-centrum'),
					'name'  => 'hero_subtitle',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_hero_cta_primary_label',
					'label' => __('Hero Primary CTA Label', 'keuken-centrum'),
					'name'  => 'hero_cta_primary_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_hero_cta_primary_url',
					'label' => __('Hero Primary CTA URL', 'keuken-centrum'),
					'name'  => 'hero_cta_primary_url',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_hero_cta_secondary_label',
					'label' => __('Hero Secondary CTA Label', 'keuken-centrum'),
					'name'  => 'hero_cta_secondary_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_hero_cta_secondary_url',
					'label' => __('Hero Secondary CTA URL', 'keuken-centrum'),
					'name'  => 'hero_cta_secondary_url',
					'type'  => 'url',
				],
				[
					'key'           => 'field_kc_hero_image',
					'label'         => __('Hero Image', 'keuken-centrum'),
					'name'          => 'hero_image',
					'type'          => 'image',
					'return_format' => 'array',
					'preview_size'  => 'large',
					'library'       => 'all',
				],
			],
			'location'              => [
				[
					[
						'param'    => 'page_type',
						'operator' => '==',
						'value'    => 'front_page',
					],
				],
			],
			'menu_order'            => 0,
			'position'              => 'acf_after_title',
			'label_placement'       => 'top',
			'instruction_placement' => 'label',
		]
	);

	acf_add_local_field_group(
		[
			'key'    => 'group_kc_site_settings',
			'title'  => __('Site Settings Details', 'keuken-centrum'),
			'fields' => [
				[
					'key'   => 'field_kc_contact_address',
					'label' => __('Adres', 'keuken-centrum'),
					'name'  => 'contact_address',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_contact_postal',
					'label' => __('Postcode en plaats', 'keuken-centrum'),
					'name'  => 'contact_postal',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_contact_phone',
					'label' => __('Telefoon', 'keuken-centrum'),
					'name'  => 'contact_phone',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_contact_email',
					'label' => __('E-mail', 'keuken-centrum'),
					'name'  => 'contact_email',
					'type'  => 'email',
				],
				[
					'key'   => 'field_kc_contact_hours',
					'label' => __('Openingstijden', 'keuken-centrum'),
					'name'  => 'contact_hours',
					'type'  => 'textarea',
					'rows'  => 3,
				],
				[
					'key'   => 'field_kc_consultation_cta_label',
					'label' => __('Consultation CTA label', 'keuken-centrum'),
					'name'  => 'consultation_cta_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_consultation_cta_url',
					'label' => __('Consultation CTA URL', 'keuken-centrum'),
					'name'  => 'consultation_cta_url',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_header_cta_label',
					'label' => __('Header CTA label', 'keuken-centrum'),
					'name'  => 'header_cta_label',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_header_cta_url',
					'label' => __('Header CTA URL', 'keuken-centrum'),
					'name'  => 'header_cta_url',
					'type'  => 'url',
				],
				[
					'key'   => 'field_kc_seo_meta_description',
					'label' => __('Default meta description', 'keuken-centrum'),
					'name'  => 'seo_meta_description',
					'type'  => 'textarea',
					'rows'  => 3,
				],
			],
			'location' => [
				[
					[
						'param'    => 'options_page',
						'operator' => '==',
						'value'    => 'kc-site-settings',
					],
				],
			],
		]
	);

	acf_add_local_field_group(
		[
			'key'    => 'group_kc_testimonial',
			'title'  => __('Review Details', 'keuken-centrum'),
			'fields' => [
				[
					'key'   => 'field_kc_testimonial_author',
					'label' => __('Auteur', 'keuken-centrum'),
					'name'  => 'author',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_testimonial_location',
					'label' => __('Locatie', 'keuken-centrum'),
					'name'  => 'location',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_testimonial_quote',
					'label' => __('Quote', 'keuken-centrum'),
					'name'  => 'quote',
					'type'  => 'textarea',
					'rows'  => 4,
				],
				[
					'key'   => 'field_kc_testimonial_brand_tag',
					'label' => __('Merk label', 'keuken-centrum'),
					'name'  => 'brand_tag',
					'type'  => 'text',
				],
			],
			'location' => [
				[
					[
						'param'    => 'post_type',
						'operator' => '==',
						'value'    => 'testimonial',
					],
				],
			],
		]
	);

	acf_add_local_field_group(
		[
			'key'    => 'group_kc_brand',
			'title'  => __('Merk Details', 'keuken-centrum'),
			'fields' => [
				[
					'key'   => 'field_kc_brand_country',
					'label' => __('Land', 'keuken-centrum'),
					'name'  => 'country',
					'type'  => 'text',
				],
				[
					'key'   => 'field_kc_brand_short_story',
					'label' => __('Kort verhaal', 'keuken-centrum'),
					'name'  => 'short_story',
					'type'  => 'textarea',
					'rows'  => 4,
				],
				[
					'key'           => 'field_kc_brand_logo',
					'label'         => __('Logo', 'keuken-centrum'),
					'name'          => 'logo',
					'type'          => 'image',
					'return_format' => 'array',
					'preview_size'  => 'medium',
					'library'       => 'all',
				],
				[
					'key'           => 'field_kc_brand_hero_image',
					'label'         => __('Hero afbeelding', 'keuken-centrum'),
					'name'          => 'hero_image',
					'type'          => 'image',
					'return_format' => 'array',
					'preview_size'  => 'large',
					'library'       => 'all',
				],
				[
					'key'   => 'field_kc_brand_cta_label',
					'label' => __('CTA label', 'keuken-centrum'),
					'name'  => 'cta_label',
					'type'  => 'text',
				],
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
		]
	);
}
add_action('acf/init', 'kc_register_acf_fields');
