<?php
/**
 * Keukenbladen / worktop page helpers.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Theme worktop image URI.
 */
function kc_worktop_img(string $filename): string {
	return kc_theme_img('worktops/' . ltrim($filename, '/'));
}

/**
 * True on Keukenbladen archive / singles.
 */
function kc_is_worktops_route(): bool {
	return is_post_type_archive('worktop') || is_singular('worktop');
}

/**
 * Worktop FAQ = shared kitchen FAQ + worktop-specific items (React worktopFaq).
 *
 * @return array<int, array{q:string,a:string}>
 */
function kc_worktop_faq(): array {
	$extra = [
		[
			'q' => __('Welke keukenbladen kan Keuken-Centrum leveren?', 'keuken-centrum'),
			'a' => __('Keuken-Centrum levert onder andere (natuur)stenen, staal, graniet, composiet, hardsteen, keramiek, marmerlook en betonlook keukenwerkbladen in uiteenlopende kleuren, diktes, formaten en randafwerkingen.', 'keuken-centrum'),
		],
		[
			'q' => __('Kan mijn keukenblad volledig op maat worden gemaakt?', 'keuken-centrum'),
			'a' => __('Ja. Wij maken uw keukenblad op maat en adviseren over materiaalkeuze, spoelbakken, randafwerking en combinaties die passen bij uw keuken, gebruik en budget.', 'keuken-centrum'),
		],
	];

	return array_merge(kc_brand_shared_faq(), $extra);
}
