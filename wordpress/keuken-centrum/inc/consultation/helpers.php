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
