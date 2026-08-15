<?php
/**
 * Editorial chapter marker used by homepage sections.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Outputs an editorial chapter marker.
 */
function kc_section_chapter(string $index, string $label, bool $light = false): void {
	$classes = 'chapter-mark' . ($light ? ' chapter-mark--light' : '');
	?>
	<div class="<?php echo esc_attr($classes); ?>" aria-hidden="true">
		<span class="chapter-mark__index"><?php echo esc_html($index); ?></span>
		<span class="chapter-mark__rule"></span>
		<span class="chapter-mark__label"><?php echo esc_html($label); ?></span>
	</div>
	<?php
}
