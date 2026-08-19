<?php
/**
 * Editorial chapter marker used by homepage sections.
 *
 * React twin of SectionChapter: LABEL [faucet] .... 01 / 10
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Outputs an editorial chapter marker.
 */
function kc_section_chapter(string $index, string $label, bool $light = false, int $total = 10, string $extra_class = ''): void {
	$classes = trim('chapter-mark' . ($light ? ' chapter-mark--light' : '') . ' ' . $extra_class);
	$num     = str_pad(preg_replace('/\D+/', '', $index) ?: $index, 2, '0', STR_PAD_LEFT);
	$total_s = str_pad((string) $total, 2, '0', STR_PAD_LEFT);
	?>
	<div class="<?php echo esc_attr($classes); ?>" aria-hidden="true">
		<span class="chapter-mark__label"><?php echo esc_html($label); ?></span>
		<span class="chapter-mark__kitchen-emblem">
			<span class="chapter-mark__kitchen-glow"></span>
			<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
				<rect x="10.5" y="24.5" width="11" height="2.2" rx="1.1" fill="currentColor" opacity="0.85" />
				<path d="M15.2 24.5V13.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" />
				<path d="M15.2 13.2H21.2C24.2 13.2 25.8 14.8 25.8 17.2V19" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M25.8 19V21.2" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" opacity="0.55" />
				<path d="M16.8 15.2V18.4" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" />
				<circle cx="16.8" cy="19.6" r="1.05" fill="currentColor" />
				<path d="M13.2 11.2L15.2 13.2" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" opacity="0.7" />
			</svg>
		</span>
		<span class="chapter-mark__spacer"></span>
		<span class="chapter-mark__num">
			<?php echo esc_html($num); ?>
			<span class="chapter-mark__total"> / <?php echo esc_html($total_s); ?></span>
		</span>
	</div>
	<?php
}
