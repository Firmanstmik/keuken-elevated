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
	return '<svg class="kc-icon-arrow-right" viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true"><path d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"/></svg>';
}
