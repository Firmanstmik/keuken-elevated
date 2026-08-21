<?php
/**
 * Inline SVG icons shared with the React twin (Iconsax paths).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Returns the premium pill / nav CTA chevron used across React buttons.
 */
function kc_icon_arrow_right(): string {
	// Adds `premium-pill-button__icon` so the arrow animates like the React `<ArrowRight className="premium-pill-button__icon" />`.
	return '<svg class="kc-icon-arrow-right premium-pill-button__icon" viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true"><path d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>';
}

/**
 * Iconsax Linear Export. This is the outward arrow used by the React mega CTA.
 */
function kc_icon_export(): string {
	return '<svg class="kc-icon-export" viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true"><path d="M9.32 6.5l2.56-2.56 2.56 2.56M11.88 14.18V4.01M4 12c0 4.42 3 8 8 8s8-3.58 8-8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>';
}

/**
 * Iconsax Linear Diamonds — editorial gem mark.
 */
function kc_icon_gem(): string {
	return '<svg class="kc-icon-gem" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88ZM3.5 8h17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/**
 * Iconsax Linear Location — Contact + showroom pin.
 */
function kc_icon_map_pin(): string {
	return '<svg class="kc-icon-map-pin" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="currentColor" stroke-width="1.5"/><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="currentColor" stroke-width="1.5"/></svg>';
}

/**
 * Iconsax Linear DocumentText — offerte / consultation.
 */
function kc_icon_file_text(): string {
	return '<svg class="kc-icon-file-text" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/**
 * Iconsax Linear Award — featured “Showroom keuze” badge.
 */
function kc_icon_award(): string {
	return '<svg class="kc-icon-award" viewBox="0 0 24 24" width="10" height="10" fill="none" aria-hidden="true"><path d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/**
 * Navbar chevron matching React ChevronDown.
 */
function kc_icon_nav_chevron(): string {
	return '<svg class="nav-chevron" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/**
 * Brand pillar / partnership icons (Iconsax Linear approximations).
 */
function kc_icon_brand(string $name): string {
	$map = [
		'sparkles' => '<path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/>',
		'shield'   => '<path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9.5 12.2l1.7 1.7 3.3-3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'grid'     => '<path d="M9 3H4.5A1.5 1.5 0 0 0 3 4.5V9M15 3h4.5A1.5 1.5 0 0 1 21 4.5V9M9 21H4.5A1.5 1.5 0 0 1 3 19.5V15M15 21h4.5a1.5 1.5 0 0 0 1.5-1.5V15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
		'layers'   => '<path d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3ZM3.5 12.5 12 17l8.5-4.5M3.5 16.5 12 21l8.5-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'award'    => '<circle cx="12" cy="9" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'heart'    => '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
		'factory'  => '<path d="M3 21h18M5 21V10l5 3V10l5 3V7h4v14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'clock'    => '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 7v5l3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
		'check'    => '<path d="M5 12.5 9.5 17 19 7.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>',
		'phone'    => '<path d="M8.5 4.5h-2A2.5 2.5 0 0 0 4 7v.5C4 15 9 20 16.5 20H17a2.5 2.5 0 0 0 2.5-2.5v-2l-3.2-1.2-1.6 1.6a12 12 0 0 1-4.6-4.6l1.6-1.6L10.5 6.5 8.5 4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
		'mail'     => '<path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
		'quote'    => '<path d="M9.62 5.5H4.88c-1.3 0-1.88.72-1.88 1.88v3.24c0 1.16.58 1.88 1.88 1.88h2.55c-.08 2.1-.96 3.2-2.55 3.9-.42.18-.58.46-.4.88l.48 1.1c.18.42.5.54.94.36 2.68-1.12 4.22-3.16 4.22-7.2V7.38c0-1.16-.58-1.88-1.88-1.88ZM20.12 5.5h-4.74c-1.3 0-1.88.72-1.88 1.88v3.24c0 1.16.58 1.88 1.88 1.88h2.55c-.08 2.1-.96 3.2-2.55 3.9-.42.18-.58.46-.4.88l.48 1.1c.18.42.5.54.94.36 2.68-1.12 4.22-3.16 4.22-7.2V7.38c0-1.16-.58-1.88-1.88-1.88Z" fill="currentColor"/>',
		'map-pin'  => '<path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="currentColor" stroke-width="1.5"/><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="currentColor" stroke-width="1.5"/>',
		'user'     => '<path d="M12 12a4.25 4.25 0 1 0 0-8.5A4.25 4.25 0 0 0 12 12ZM20.5 20.5c0-3.59-3.81-6.5-8.5-6.5s-8.5 2.91-8.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'calendar' => '<path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
		'tick-circle' => '<path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10Z" stroke="currentColor" stroke-width="1.5"/><path d="m7.75 12 2.83 2.83 5.67-5.66" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'arrow-down' => '<path d="M12 5v14M6 13l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'arrow-left' => '<path d="M19 12H5M11 6l-6 6 6 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
	];
	$path = $map[ $name ] ?? $map['sparkles'];
	return '<svg class="kc-icon-' . esc_attr($name) . '" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">' . $path . '</svg>';
}

/**
 * Exact Iconsax Linear menu category glyphs used by the React navigation.
 */
function kc_icon_mega_category(int $index): string {
	$paths = [
		'<path d="M4.26 11.02v4.97c0 1.82 0 1.82 1.72 2.98l4.73 2.73c.71.41 1.87.41 2.58 0l4.73-2.73c1.72-1.16 1.72-1.16 1.72-2.98v-4.97c0-1.82 0-1.82-1.72-2.98l-4.73-2.73c-.71-.41-1.87-.41-2.58 0L5.98 8.04C4.26 9.2 4.26 9.2 4.26 11.02Z"/><path d="M17.5 7.63V5c0-2-1-3-3-3h-5c-2 0-3 1-3 3v2.56M12.63 10.99l.57.89c.09.14.29.28.44.32l1.02.26c.63.16.8.7.39 1.2l-.67.81c-.1.13-.18.36-.17.52l.06 1.05c.04.65-.42.98-1.02.74l-.98-.39a.863.863 0 0 0-.55 0l-.98.39c-.6.24-1.06-.1-1.02-.74l.06-1.05c.01-.16-.07-.4-.17-.52l-.67-.81c-.41-.5-.24-1.04.39-1.2l1.02-.26c.16-.04.36-.19.44-.32l.57-.89c.36-.54.92-.54 1.27 0Z"/>',
		'<path d="M13.01 2.92l5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0z"/><path d="M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15"/><path d="M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15"/>',
		'<path d="M20.12 12.73l.74.73c1.49 1.49 1.49 2.96 0 4.45l-2.96 2.96c-1.47 1.47-2.96 1.47-4.43 0M3.11 10.51c-1.47-1.49-1.47-2.96 0-4.45L6.07 3.1c1.47-1.47 2.96-1.47 4.43 0l.74.74M11.25 3.85l-3.7 3.7M20.12 12.73l-2.96 2.95"/>',
		'<path d="M21.47 19V5c0-2-1-3-3-3h-4c-2 0-3 1-3 3v14c0 2 1 3 3 3h4c2 0 3-1 3-3zM11.47 6h5M11.47 18h4M11.47 13.95l5 .05M11.47 10h3M5.49 2C3.86 2 2.53 3.33 2.53 4.95v12.96c0 .45.19 1.13.42 1.52l.82 1.36c.94 1.57 2.49 1.57 3.43 0l.82-1.36c.23-.39.42-1.07.42-1.52V4.95C8.44 3.33 7.11 2 5.49 2zM8.44 7H2.53"/>',
		'<path d="M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"/><path d="M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z"/><path d="M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12ZM12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z"/>',
		'<path d="M17 9c0 3.87-3.36 7-7.5 7l-.93 1.12-.55.66c-.47.56-1.37.44-1.68-.23L5 14.6C3.18 13.32 2 11.29 2 9c0-3.87 3.36-7 7.5-7 3.02 0 5.63 1.67 6.8 4.07.45.89.7 1.88.7 2.93Z"/><path d="M22 12.86c0 2.29-1.18 4.32-3 5.6l-1.34 2.95c-.31.67-1.21.8-1.68.23l-1.48-1.78c-2.42 0-4.58-1.07-5.93-2.74L9.5 16c4.14 0 7.5-3.13 7.5-7 0-1.05-.25-2.04-.7-2.93 3.27.75 5.7 3.51 5.7 6.79ZM7 9h5"/>',
	];

	$path = $paths[$index] ?? $paths[0];
	return '<svg class="kc-icon-mega-category" viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">' . str_replace('/>', ' stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>', $path) . '</svg>';
}
