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
function kc_icon_map_pin( int $size = 16 ): string {
	$s = (string) max( 10, min( 24, $size ) );
	return '<svg class="kc-icon-map-pin" viewBox="0 0 24 24" width="' . esc_attr( $s ) . '" height="' . esc_attr( $s ) . '" fill="none" aria-hidden="true"><path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="currentColor" stroke-width="1.5"/><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="currentColor" stroke-width="1.5"/></svg>';
}

/**
 * Iconsax Linear Sms — footer / contact email.
 */
function kc_icon_sms( int $size = 18 ): string {
	$s = (string) max( 10, min( 24, $size ) );
	return '<svg class="kc-icon-sms" viewBox="0 0 24 24" width="' . esc_attr( $s ) . '" height="' . esc_attr( $s ) . '" fill="none" aria-hidden="true"><path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/**
 * Iconsax Linear Call — footer contact phone.
 */
function kc_icon_call( int $size = 16 ): string {
	$s = (string) max( 10, min( 24, $size ) );
	return '<svg class="kc-icon-call" viewBox="0 0 24 24" width="' . esc_attr( $s ) . '" height="' . esc_attr( $s ) . '" fill="none" aria-hidden="true"><path d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/></svg>';
}

/**
 * Iconsax Linear ArrowRight2 — footer nav disc (12px).
 */
function kc_icon_footer_link_arrow(): string {
	return '<svg class="kc-icon-footer-link-arrow" viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true"><path d="M8.91 19.92 15.43 13.4c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>';
}

/**
 * Iconsax Linear ArrowRight2 — mobile footer accordion chevron (18px).
 */
function kc_icon_footer_accordion_arrow(): string {
	return '<svg class="kc-icon-footer-accordion-arrow" viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M8.91 19.92 15.43 13.4c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>';
}

/**
 * Brand Facebook glyph (React Footer parity).
 */
function kc_icon_facebook_brand(): string {
	return '<svg class="kc-icon-facebook" viewBox="0 0 24 24" width="17.6" height="17.6" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
}

/**
 * Brand Instagram glyph (React Footer parity).
 */
function kc_icon_instagram_brand(): string {
	return '<svg class="kc-icon-instagram" viewBox="0 0 24 24" width="17.6" height="17.6" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>';
}

/**
 * Footer social tile icon by tone.
 */
function kc_footer_social_icon( string $tone ): string {
	return match ( $tone ) {
		'facebook'  => kc_icon_facebook_brand(),
		'instagram' => kc_icon_instagram_brand(),
		'email'     => kc_icon_sms(),
		default     => '',
	};
}

/**
 * Iconsax Linear Home2 — showroom card CTA.
 */
function kc_icon_home(): string {
	return '<svg class="kc-icon-home" viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true"><path d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17.99v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/**
 * Iconsax Linear Map1 — showroom route CTA.
 */
function kc_icon_map(): string {
	return '<svg class="kc-icon-map" viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true"><path d="M2.29 7.78v9.73c0 1.09.92 1.69 2.01 1.35l2.44-.81c.35-.11.74-.07 1.06.12l4.16 2.49c.45.27 1.06.27 1.51 0l4.16-2.49c.32-.19.71-.23 1.06-.12l2.44.81c1.09.36 2.01-.24 2.01-1.35V7.78c0-.72-.46-1.38-1.15-1.61l-2.74-.91c-.4-.13-.84-.09-1.21.12l-4.16 2.49c-.34.2-.79.2-1.13 0L7.1 5.38c-.37-.21-.81-.25-1.21-.12l-2.74.91c-.69.23-1.15.89-1.15 1.61Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.56 5.34v12.87M15.94 5.34v12.87" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
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
		'phone' => '<path d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"></path>',
		'mail' => '<path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>',
		'quote'    => '<path d="M9.62 5.5H4.88c-1.3 0-1.88.72-1.88 1.88v3.24c0 1.16.58 1.88 1.88 1.88h2.55c-.08 2.1-.96 3.2-2.55 3.9-.42.18-.58.46-.4.88l.48 1.1c.18.42.5.54.94.36 2.68-1.12 4.22-3.16 4.22-7.2V7.38c0-1.16-.58-1.88-1.88-1.88ZM20.12 5.5h-4.74c-1.3 0-1.88.72-1.88 1.88v3.24c0 1.16.58 1.88 1.88 1.88h2.55c-.08 2.1-.96 3.2-2.55 3.9-.42.18-.58.46-.4.88l.48 1.1c.18.42.5.54.94.36 2.68-1.12 4.22-3.16 4.22-7.2V7.38c0-1.16-.58-1.88-1.88-1.88Z" fill="currentColor"/>',
		'map-pin'  => '<path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z" stroke="currentColor" stroke-width="1.5"/><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z" stroke="currentColor" stroke-width="1.5"/>',
		'user'     => '<path d="M12 12a4.25 4.25 0 1 0 0-8.5A4.25 4.25 0 0 0 12 12ZM20.5 20.5c0-3.59-3.81-6.5-8.5-6.5s-8.5 2.91-8.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'calendar' => '<path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
		'calendar-tick' => '<path d="M8 2v3M16 2v3M3.5 9.09h17M21 8.5V17c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m9.5 14.5 1.8 1.8 3.7-3.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'home' => '<path d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',
		'shop' => '<path d="M3.01 11.22v4.49C3.01 20.2 4.81 22 9.3 22h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12ZM18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'gallery' => '<path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 15.34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'messages' => '<path d="M17.98 10.79v2.97c0 .3-.02.59-.06.87-.36 2.83-2.03 4.3-5.03 4.3h-.3c-.19 0-.37.09-.48.24l-.9 1.2c-.4.53-1.04.53-1.44 0l-.9-1.2a.643.643 0 0 0-.48-.24H8.11c-3.4 0-5.11-1.14-5.11-5.11V8.11C3 4.71 4.71 3 8.11 3h3.76" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M17.98 3h-3.76c-2.76 0-4.36 1.14-4.64 3.47-.06.47.32.89.8.89h7.6c.48 0 .86-.42.8-.89C18.52 4.14 16.92 3 14.16 3h3.82ZM21.24 7.74v3.7c0 2.06-1.05 3.11-3.11 3.11h-.29c-.19 0-.37.09-.48.24l-.55.73c-.4.53-1.04.53-1.44 0l-.55-.73a.643.643 0 0 0-.48-.24h-.29c-2.06 0-3.11-1.05-3.11-3.11v-3.7c0-2.06 1.05-3.11 3.11-3.11h3.97c2.06 0 3.22 1.05 3.22 3.11Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'close-circle' => '<path d="M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10ZM9.17 14.83l5.66-5.66M14.83 14.83 9.17 9.17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',
		'arrow-right-sm' => '<path d="M8.91 19.92 15.43 13.4c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>',
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

/**
 * Process timeline step icons — exact Iconsax TwoTone glyphs (React Process.tsx).
 */
function kc_icon_process_step(string $name): string {
	$map = [
		'shop'    => '<path d="M12 12c1.83 0 3.18-1.49 3-3.32L14.34 2H9.67L9 8.68C8.82 10.51 10.17 12 12 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.31 12c2.02 0 3.5-1.64 3.3-3.65l-.28-2.75C20.97 3 19.97 2 17.35 2H14.3l.7 7.01c.17 1.65 1.66 2.99 3.31 2.99ZM5.64 12c1.65 0 3.14-1.34 3.3-2.99l.22-2.21.48-4.8H6.59C3.97 2 2.97 3 2.61 5.6l-.27 2.75C2.14 10.36 3.62 12 5.64 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><g opacity=".4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3.01 11.219v4.49c0 4.49 1.8 6.29 6.29 6.29h5.39c4.49 0 6.29-1.8 6.29-6.29v-4.49"></path><path d="M12 17c-1.67 0-2.5.83-2.5 2.5V22h5v-2.5c0-1.67-.83-2.5-2.5-2.5Z"></path></g>',
		'brush'   => '<path d="M21.81 3.942c-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64.59-.22 1.16-.06 1.52.31.38.37.56.94.32 1.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.43 17.619c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16l-2.46.27c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M14.24 14.468c0-2.61-2.12-4.73-4.73-4.73" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',
		'brush2'  => '<path d="M21.81 3.942c-1.54 3.84-5.4 9.06-8.63 11.65l-1.97 1.58c-.25.18-.5.34-.78.45 0-.18-.01-.38-.04-.57-.11-.84-.49-1.62-1.16-2.29-.68-.68-1.51-1.08-2.36-1.19-.2-.01-.4-.03-.6-.01.11-.31.28-.6.49-.84l1.56-1.97c2.58-3.23 7.82-7.11 11.65-8.64.59-.22 1.16-.06 1.52.31.38.37.56.94.32 1.52Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.43 17.619c0 1.1-.42 2.15-1.21 2.95-.61.61-1.44 1.03-2.43 1.16l-2.46.27c-1.34.15-2.49-.99-2.33-2.35l.27-2.46c.24-2.19 2.07-3.59 4.01-3.63.2-.01.41 0 .6.01.85.11 1.68.5 2.36 1.19.67.67 1.05 1.45 1.16 2.29.01.19.03.38.03.57Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M14.24 14.468c0-2.61-2.12-4.73-4.73-4.73" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',
		'layers'  => '<path d="m13.01 2.92 5.9 2.62c1.7.75 1.7 1.99 0 2.74l-5.9 2.62c-.67.3-1.77.3-2.44 0l-5.9-2.62c-1.7-.75-1.7-1.99 0-2.74l5.9-2.62c.67-.3 1.77-.3 2.44 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M3 11c0 .84.63 1.81 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.77-.34 1.4-1.31 1.4-2.15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M3 16c0 .93.55 1.77 1.4 2.15l6.79 3.02c.52.23 1.11.23 1.62 0l6.79-3.02c.85-.38 1.4-1.22 1.4-2.15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',
		'gallery' => '<path d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path opacity=".4" d="M9 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.672 18.949l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0l1.63 1.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',
		'people'  => '<path opacity=".4" d="M17.998 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58 2.589 2.589 0 0 1-2.49 2.58ZM16.968 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.967 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58c0-1.43-1.15-2.58-2.58-2.58a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM6.997 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.998 14.629a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.089 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>',
	];
	$inner = $map[$name] ?? $map['shop'];
	return '<svg class="kc-icon-process kc-icon-' . esc_attr($name) . '" viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">' . $inner . '</svg>';
}

/**
 * Iconsax Bold Star1 — testimonial rating stars.
 */
function kc_icon_star(int $size = 14): string {
	$s = (string) max(10, min(24, $size));
	return '<svg class="kc-icon-star" viewBox="0 0 24 24" width="' . esc_attr($s) . '" height="' . esc_attr($s) . '" fill="none" aria-hidden="true"><path d="M5.74 16c.11-.49-.09-1.19-.44-1.54l-2.43-2.43c-.76-.76-1.06-1.57-.84-2.27.23-.7.94-1.18 2-1.36l3.12-.52c.45-.08 1-.48 1.21-.89l1.72-3.45C10.58 2.55 11.26 2 12 2s1.42.55 1.92 1.54l1.72 3.45c.13.26.4.51.69.68L5.56 18.44c-.14.14-.38.01-.34-.19L5.74 16ZM18.7 14.462c-.36.36-.56 1.05-.44 1.54l.69 3.01c.29 1.25.11 2.19-.51 2.64a1.5 1.5 0 0 1-.9.27c-.51 0-1.11-.19-1.77-.58l-2.93-1.74c-.46-.27-1.22-.27-1.68 0l-2.93 1.74c-1.11.65-2.06.76-2.67.31-.23-.17-.4-.4-.51-.7l12.16-12.16c.46-.46 1.11-.67 1.74-.56l1.01.17c1.06.18 1.77.66 2 1.36.22.7-.08 1.51-.84 2.27l-2.42 2.43Z" fill="currentColor"></path></svg>';
}

/**
 * Iconsax Linear QuoteDown — testimonial quote mark.
 */
function kc_icon_quote_down(int $size = 14): string {
	$s = (string) max(10, min(24, $size));
	return '<svg class="kc-icon-quote-down" viewBox="0 0 24 24" width="' . esc_attr($s) . '" height="' . esc_attr($s) . '" fill="none" aria-hidden="true"><path d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22 11.65c0 6.05-1.13 7.05-4.53 9.07M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
}

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
