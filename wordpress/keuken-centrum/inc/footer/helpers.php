<?php
/**
 * Footer render helpers — React Footer.tsx parity.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Render one footer nav link with Iconsax arrow disc.
 */
function kc_footer_render_nav_link( string $href, string $label ): void {
	?>
	<li>
		<a class="site-footer__nav-link" href="<?php echo esc_url( $href ); ?>">
			<span class="site-footer__nav-disc" aria-hidden="true"><?php echo kc_icon_footer_link_arrow(); ?></span>
			<span class="site-footer__nav-text"><?php echo esc_html( $label ); ?></span>
		</a>
	</li>
	<?php
}
