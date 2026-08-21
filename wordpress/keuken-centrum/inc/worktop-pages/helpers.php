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

/**
 * Shared worktop custom band (React worktopCustomBlock).
 *
 * @return array<string, string>
 */
function kc_worktop_custom_block(): array {
	return [
		'eyebrow'        => __('Op maat', 'keuken-centrum'),
		'titleBefore'    => __('Écht', 'keuken-centrum'),
		'titleHighlight' => __('alles', 'keuken-centrum'),
		'titleAfter'     => __('is mogelijk', 'keuken-centrum'),
		'body'           => __('Een uitdagende moderne designkeuken, een robuuste industrielook of de nostalgische intimiteit van een landelijk klassiek werkblad: bij Keuken-Centrum Utrecht koopt u het keukenwerkblad van uw dromen voor een verrassend betaalbare prijs.', 'keuken-centrum'),
		'secondary'      => __('Graniet, composiet, hardsteen, keramiek, betonlook of marmerlook: wij adviseren over materiaal, kleur, dikte, formaat, randafwerking en praktische eigenschappen zodat het blad perfect past bij uw keukenstijl.', 'keuken-centrum'),
	];
}

/**
 * Shared worktop partnership stats (React baseWorktopStats).
 *
 * @return array<int, array{icon:string,label:string,value:string}>
 */
function kc_worktop_partnership_stats(): array {
	return [
		[ 'icon' => 'factory', 'label' => __('Materiaaladvies', 'keuken-centrum'), 'value' => __('Op maat', 'keuken-centrum') ],
		[ 'icon' => 'shield', 'label' => __('CBW zekerheid', 'keuken-centrum'), 'value' => __('Garantie', 'keuken-centrum') ],
		[ 'icon' => 'clock', 'label' => __('Heldere planning', 'keuken-centrum'), 'value' => __('Advies', 'keuken-centrum') ],
		[ 'icon' => 'award', 'label' => __('Geselecteerde merken', 'keuken-centrum'), 'value' => __('Kwaliteit', 'keuken-centrum') ],
	];
}
