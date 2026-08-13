<?php
/**
 * Custom post type registrations.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Registers the theme custom post types.
 */
function kc_register_content_types(): void {
	$supports = ['title', 'editor', 'thumbnail', 'excerpt'];

	register_post_type(
		'kitchen_brand',
		[
			'labels'       => [
				'name'                  => __('Keukens', 'keuken-centrum'),
				'singular_name'         => __('Keukenmerk', 'keuken-centrum'),
				'menu_name'             => __('Keukens', 'keuken-centrum'),
				'name_admin_bar'        => __('Keukenmerk', 'keuken-centrum'),
				'add_new'               => __('Nieuwe toevoegen', 'keuken-centrum'),
				'add_new_item'          => __('Nieuw keukenmerk', 'keuken-centrum'),
				'edit_item'             => __('Keukenmerk bewerken', 'keuken-centrum'),
				'new_item'              => __('Nieuw keukenmerk', 'keuken-centrum'),
				'view_item'             => __('Bekijk keukenmerk', 'keuken-centrum'),
				'view_items'            => __('Bekijk keukenmerken', 'keuken-centrum'),
				'search_items'          => __('Zoek keukenmerken', 'keuken-centrum'),
				'not_found'             => __('Geen keukenmerken gevonden', 'keuken-centrum'),
				'not_found_in_trash'    => __('Geen keukenmerken in de prullenbak', 'keuken-centrum'),
				'all_items'             => __('Alle keukenmerken', 'keuken-centrum'),
				'archives'              => __('Keukenarchief', 'keuken-centrum'),
				'attributes'            => __('Keukenmerk attributen', 'keuken-centrum'),
				'featured_image'        => __('Merkafbeelding', 'keuken-centrum'),
				'set_featured_image'    => __('Merkafbeelding instellen', 'keuken-centrum'),
				'remove_featured_image' => __('Merkafbeelding verwijderen', 'keuken-centrum'),
				'use_featured_image'    => __('Gebruik als merkafbeelding', 'keuken-centrum'),
			],
			'public'       => true,
			'has_archive'  => true,
			'menu_icon'    => 'dashicons-store',
			'rewrite'      => ['slug' => 'keukens', 'with_front' => false],
			'supports'     => $supports,
			'show_in_rest' => true,
		]
	);

	register_post_type(
		'worktop',
		[
			'labels'       => [
				'name'               => __('Keukenbladen', 'keuken-centrum'),
				'singular_name'      => __('Keukenblad', 'keuken-centrum'),
				'menu_name'          => __('Keukenbladen', 'keuken-centrum'),
				'add_new'            => __('Nieuwe toevoegen', 'keuken-centrum'),
				'add_new_item'       => __('Nieuw keukenblad', 'keuken-centrum'),
				'edit_item'          => __('Keukenblad bewerken', 'keuken-centrum'),
				'new_item'           => __('Nieuw keukenblad', 'keuken-centrum'),
				'view_item'          => __('Bekijk keukenblad', 'keuken-centrum'),
				'search_items'       => __('Zoek keukenbladen', 'keuken-centrum'),
				'not_found'          => __('Geen keukenbladen gevonden', 'keuken-centrum'),
				'not_found_in_trash' => __('Geen keukenbladen in de prullenbak', 'keuken-centrum'),
				'all_items'          => __('Alle keukenbladen', 'keuken-centrum'),
			],
			'public'       => true,
			'has_archive'  => true,
			'menu_icon'    => 'dashicons-screenoptions',
			'rewrite'      => ['slug' => 'keukenbladen', 'with_front' => false],
			'supports'     => $supports,
			'show_in_rest' => true,
		]
	);

	register_post_type(
		'appliance_category',
		[
			'labels'       => [
				'name'               => __('Apparatuur', 'keuken-centrum'),
				'singular_name'      => __('Apparaatcategorie', 'keuken-centrum'),
				'menu_name'          => __('Apparatuur', 'keuken-centrum'),
				'add_new'            => __('Nieuwe toevoegen', 'keuken-centrum'),
				'add_new_item'       => __('Nieuwe apparaatcategorie', 'keuken-centrum'),
				'edit_item'          => __('Apparaatcategorie bewerken', 'keuken-centrum'),
				'new_item'           => __('Nieuwe apparaatcategorie', 'keuken-centrum'),
				'view_item'          => __('Bekijk apparaatcategorie', 'keuken-centrum'),
				'search_items'       => __('Zoek apparatuur', 'keuken-centrum'),
				'not_found'          => __('Geen apparatuur gevonden', 'keuken-centrum'),
				'not_found_in_trash' => __('Geen apparatuur in de prullenbak', 'keuken-centrum'),
				'all_items'          => __('Alle apparatuur', 'keuken-centrum'),
			],
			'public'       => true,
			'has_archive'  => true,
			'menu_icon'    => 'dashicons-admin-tools',
			'rewrite'      => ['slug' => 'apparatuur', 'with_front' => false],
			'supports'     => $supports,
			'show_in_rest' => true,
		]
	);

	register_post_type(
		'testimonial',
		[
			'labels'       => [
				'name'               => __('Reviews', 'keuken-centrum'),
				'singular_name'      => __('Review', 'keuken-centrum'),
				'menu_name'          => __('Reviews', 'keuken-centrum'),
				'add_new'            => __('Nieuwe toevoegen', 'keuken-centrum'),
				'add_new_item'       => __('Nieuwe review', 'keuken-centrum'),
				'edit_item'          => __('Review bewerken', 'keuken-centrum'),
				'new_item'           => __('Nieuwe review', 'keuken-centrum'),
				'view_item'          => __('Bekijk review', 'keuken-centrum'),
				'search_items'       => __('Zoek reviews', 'keuken-centrum'),
				'not_found'          => __('Geen reviews gevonden', 'keuken-centrum'),
				'not_found_in_trash' => __('Geen reviews in de prullenbak', 'keuken-centrum'),
				'all_items'          => __('Alle reviews', 'keuken-centrum'),
			],
			'public'       => true,
			'has_archive'  => true,
			'menu_icon'    => 'dashicons-format-quote',
			'rewrite'      => ['slug' => 'reviews', 'with_front' => false],
			'supports'     => $supports,
			'show_in_rest' => true,
		]
	);
}
add_action('init', 'kc_register_content_types');
