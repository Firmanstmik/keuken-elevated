<?php
/**
 * Sticky conversion bar data (React StickyConversionBar).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_sticky_conversion_data(): array {
	$phone      = (string) kc_get_option( 'contact_phone', '030 241 5122' );
	$phone_href = (string) kc_get_option( 'contact_phone_href', 'tel:+31302415122' );
	if ( '' === $phone_href || ! str_starts_with( $phone_href, 'tel:' ) ) {
		$digits     = preg_replace( '/\D+/', '', $phone );
		$phone_href = 'tel:+' . ( str_starts_with( (string) $digits, '31' ) ? $digits : '31' . ltrim( (string) $digits, '0' ) );
	}

	$default_wa = 'https://wa.me/31302415122?text=' . rawurlencode( 'Hallo Keuken-Centrum, ik heb een vraag over een showroombezoek.' );

	$primary_href = (string) kc_get_option( 'sticky_cta_primary_url', '' );
	if ( '' === $primary_href ) {
		$primary_href = function_exists( 'kc_consultation_url' ) ? kc_consultation_url() : home_url( '/consultation/' );
	}

	return [
		'enabled'      => (bool) kc_get_option( 'sticky_cta_enabled', true ),
		'badge'        => (string) kc_get_option( 'sticky_cta_badge', 'KC Concierge' ),
		'aria_label'   => (string) kc_get_option( 'sticky_cta_aria', __( 'Direct contact met Keuken-Centrum Utrecht', 'keuken-centrum' ) ),
		'close_label'  => (string) kc_get_option( 'sticky_cta_close_label', __( 'Sluit contactbalk', 'keuken-centrum' ) ),
		'actions'      => [
			[
				'label' => (string) kc_get_option( 'sticky_cta_primary_label', __( 'Plan showroombezoek', 'keuken-centrum' ) ),
				'meta'  => (string) kc_get_option( 'sticky_cta_primary_meta', __( 'Vrijblijvend advies in Utrecht', 'keuken-centrum' ) ),
				'href'  => $primary_href,
				'icon'  => 'calendar-tick',
				'tone'  => 'primary',
			],
			[
				'label' => (string) kc_get_option( 'sticky_cta_phone_label', __( 'Bel een adviseur', 'keuken-centrum' ) ),
				'meta'  => (string) kc_get_option( 'sticky_cta_phone_meta', $phone ),
				'href'  => $phone_href,
				'icon'  => 'phone',
				'tone'  => 'neutral',
			],
			[
				'label' => (string) kc_get_option( 'sticky_cta_whatsapp_label', __( 'WhatsApp', 'keuken-centrum' ) ),
				'meta'  => (string) kc_get_option( 'sticky_cta_whatsapp_meta', __( 'Persoonlijk & snel antwoord', 'keuken-centrum' ) ),
				'href'  => (string) kc_get_option( 'sticky_cta_whatsapp_url', $default_wa ),
				'icon'  => 'messages',
				'tone'  => 'chat',
			],
		],
	];
}
