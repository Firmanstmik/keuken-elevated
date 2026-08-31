<?php
/**
 * Consultation helpers.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * True on Consultation page.
 */
function kc_is_consultation_route(): bool {
	return is_page( 'consultation' );
}

/**
 * Showroom options (React masterShowrooms).
 *
 * @return list<string>
 */
function kc_consultation_showrooms(): array {
	return [
		'Amsterdam, P.C. Hooftstraat',
		'Rotterdam, Coolsingel',
		'Utrecht, Vredenburg',
		'Den Haag, Noordeinde',
		'Antwerpen, Meir',
	];
}

/**
 * Budget options (React masterConsultationBudgets).
 *
 * @return list<string>
 */
function kc_consultation_budgets(): array {
	return [
		'€20,000 tot €40,000',
		'€40,000 tot €70,000',
		'€70,000 tot €120,000',
		'€120,000 tot €200,000',
		'€200,000+',
	];
}

/**
 * WhatsApp business number (digits only) for consultatie follow-up.
 */
function kc_consultation_whatsapp_number(): string {
	$raw = (string) kc_get_option( 'sticky_cta_whatsapp_url', '' );
	if ( preg_match( '/wa\.me\/(\d+)/', $raw, $matches ) ) {
		return $matches[1];
	}
	return '31302415122';
}

/**
 * Human-readable configurator summary for email / notifications.
 *
 * @param array<string, mixed> $config Normalized configurator state.
 * @return string
 */
function kc_consultation_format_config_summary( array $config ): string {
	$catalog    = function_exists( 'kc_configurator_catalog' ) ? kc_configurator_catalog() : [ 'categories' => [] ];
	$cat_labels = [];
	foreach ( (array) ( $catalog['categories'] ?? [] ) as $cat ) {
		if ( ! empty( $cat['id'] ) ) {
			$cat_labels[ (string) $cat['id'] ] = (string) ( $cat['label'] ?? $cat['id'] );
		}
	}

	$lines   = [];
	$lines[] = 'Merk: ' . ( $config['brandName'] ?: ( $config['brand'] ?: 'niet gekozen' ) );
	$lines[] = 'Stijl: ' . ( $config['styleName'] ?: ( $config['style'] ?: 'niet gekozen' ) );
	if ( ! empty( $config['budget'] ) ) {
		$lines[] = 'Budget: ' . (string) $config['budget'];
	}

	foreach ( (array) ( $config['selections'] ?? [] ) as $cat_id => $sel ) {
		if ( ! is_array( $sel ) ) {
			continue;
		}
		$label = $cat_labels[ (string) $cat_id ] ?? (string) $cat_id;
		$name  = (string) ( $sel['name'] ?? '' );
		$lines[] = '- ' . $label . ': ' . ( $name !== '' ? $name : 'niet gekozen' );
	}

	return implode( "\n", $lines );
}
