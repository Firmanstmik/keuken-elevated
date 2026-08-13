<?php
/**
 * Theme customizer settings.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Registers theme customizer panels and settings.
 */
function kc_customize_register(WP_Customize_Manager $wp_customize): void {
	$wp_customize->add_section(
		'kc_site_identity_extras',
		[
			'title'       => __('Site Identity Extra\'s', 'keuken-centrum'),
			'description' => __('Aanvullende branding in de header en hero.', 'keuken-centrum'),
			'priority'    => 35,
		]
	);

	$wp_customize->add_section(
		'kc_contact',
		[
			'title'       => __('Contact', 'keuken-centrum'),
			'description' => __('Contactinformatie voor header, footer en contactpagina.', 'keuken-centrum'),
			'priority'    => 36,
		]
	);

	$wp_customize->add_section(
		'kc_hero_defaults',
		[
			'title'       => __('Hero Defaults', 'keuken-centrum'),
			'description' => __('Standaard homepage hero-copy wanneer ACF nog niet is ingevuld.', 'keuken-centrum'),
			'priority'    => 37,
		]
	);

	$wp_customize->add_section(
		'kc_ctas',
		[
			'title'       => __('CTA\'s', 'keuken-centrum'),
			'description' => __('Globale call-to-actions door de hele site.', 'keuken-centrum'),
			'priority'    => 38,
		]
	);

	$text_controls = [
		'header_badge' => [
			'label'   => __('Header badge', 'keuken-centrum'),
			'section' => 'kc_site_identity_extras',
			'default' => 'Premium showroom Utrecht',
		],
		'header_cta_label' => [
			'label'   => __('Header CTA label', 'keuken-centrum'),
			'section' => 'kc_site_identity_extras',
			'default' => 'Plan showroombezoek',
		],
		'contact_address' => [
			'label'   => __('Straat en nummer', 'keuken-centrum'),
			'section' => 'kc_contact',
			'default' => 'Zonnebaan 8',
		],
		'contact_postal' => [
			'label'   => __('Postcode en plaats', 'keuken-centrum'),
			'section' => 'kc_contact',
			'default' => '3542 EC Utrecht',
		],
		'contact_phone' => [
			'label'   => __('Telefoonnummer', 'keuken-centrum'),
			'section' => 'kc_contact',
			'default' => '030 241 5122',
		],
		'contact_email' => [
			'label'   => __('E-mailadres', 'keuken-centrum'),
			'section' => 'kc_contact',
			'default' => 'info@keuken-centrum.nl',
		],
		'contact_hours' => [
			'label'   => __('Openingstijden', 'keuken-centrum'),
			'section' => 'kc_contact',
			'default' => 'Ma t/m za op afspraak, met uitgebreid showroomadvies.',
		],
		'hero_eyebrow_default' => [
			'label'   => __('Hero eyebrow', 'keuken-centrum'),
			'section' => 'kc_hero_defaults',
			'default' => 'SINDS 1978 · PREMIUM SHOWROOM UTRECHT',
		],
		'hero_title_default' => [
			'label'   => __('Hero titel', 'keuken-centrum'),
			'section' => 'kc_hero_defaults',
			'default' => 'De Premium Keukenbestemming van',
		],
		'hero_title_em_default' => [
			'label'   => __('Hero highlight', 'keuken-centrum'),
			'section' => 'kc_hero_defaults',
			'default' => 'Utrecht.',
		],
		'hero_subtitle_default' => [
			'label'   => __('Hero subtitel', 'keuken-centrum'),
			'section' => 'kc_hero_defaults',
			'default' => 'Ontdek een curated collectie keukens met Duitse precisie, Italiaanse elegantie en begeleiding van adviseurs die luisteren, ontwerpen en leveren.',
		],
		'hero_cta_primary_label_default' => [
			'label'   => __('Hero primaire CTA label', 'keuken-centrum'),
			'section' => 'kc_ctas',
			'default' => 'Plan Showroombezoek',
		],
		'hero_cta_secondary_label_default' => [
			'label'   => __('Hero secundaire CTA label', 'keuken-centrum'),
			'section' => 'kc_ctas',
			'default' => 'Start Configurator',
		],
		'consultation_cta_label' => [
			'label'   => __('Consultation CTA label', 'keuken-centrum'),
			'section' => 'kc_ctas',
			'default' => 'Plan vrijblijvend advies',
		],
	];

	foreach ($text_controls as $setting_key => $args) {
		$wp_customize->add_setting(
			$setting_key,
			[
				'default'           => $args['default'],
				'sanitize_callback' => 'sanitize_text_field',
				'transport'         => 'refresh',
			]
		);

		$wp_customize->add_control(
			$setting_key,
			[
				'label'   => $args['label'],
				'section' => $args['section'],
				'type'    => 'text',
			]
		);
	}

	$textarea_controls = [
		'contact_hours_note' => [
			'label'   => __('Extra contactnotitie', 'keuken-centrum'),
			'section' => 'kc_contact',
			'default' => 'Persoonlijk advies, heldere planningen en één vast aanspreekpunt van oriëntatie tot oplevering.',
		],
	];

	foreach ($textarea_controls as $setting_key => $args) {
		$wp_customize->add_setting(
			$setting_key,
			[
				'default'           => $args['default'],
				'sanitize_callback' => 'sanitize_textarea_field',
			]
		);

		$wp_customize->add_control(
			$setting_key,
			[
				'label'   => $args['label'],
				'section' => $args['section'],
				'type'    => 'textarea',
			]
		);
	}

	$url_controls = [
		'header_cta_url' => [
			'label'   => __('Header CTA link', 'keuken-centrum'),
			'section' => 'kc_site_identity_extras',
			'default' => home_url('/contact'),
		],
		'hero_cta_primary_url_default' => [
			'label'   => __('Hero primaire CTA link', 'keuken-centrum'),
			'section' => 'kc_ctas',
			'default' => home_url('/contact'),
		],
		'hero_cta_secondary_url_default' => [
			'label'   => __('Hero secundaire CTA link', 'keuken-centrum'),
			'section' => 'kc_ctas',
			'default' => 'https://keuken-elevated.vercel.app/brands',
		],
		'consultation_cta_url' => [
			'label'   => __('Consultation CTA link', 'keuken-centrum'),
			'section' => 'kc_ctas',
			'default' => home_url('/contact'),
		],
	];

	foreach ($url_controls as $setting_key => $args) {
		$wp_customize->add_setting(
			$setting_key,
			[
				'default'           => $args['default'],
				'sanitize_callback' => 'esc_url_raw',
			]
		);

		$wp_customize->add_control(
			$setting_key,
			[
				'label'   => $args['label'],
				'section' => $args['section'],
				'type'    => 'url',
			]
		);
	}
}
add_action('customize_register', 'kc_customize_register');
