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

/**
 * Brand accent for social handle hover (React Footer.tsx).
 */
function kc_footer_social_brand_color( string $tone ): string {
	return match ( $tone ) {
		'facebook'  => '#1877F2',
		'instagram' => '#E1306C',
		'email'     => '#EA4335',
		default     => '#A8D95A',
	};
}

/**
 * Render one social row link with Iconsax icon tile + handle underline hover.
 *
 * @param array{label?:string,handle?:string,href?:string,tone?:string,color?:string} $social
 */
function kc_footer_render_social_link( array $social ): void {
	$tone   = (string) ( $social['tone'] ?? '' );
	$href   = (string) ( $social['href'] ?? '#' );
	$color  = (string) ( $social['color'] ?? kc_footer_social_brand_color( $tone ) );
	$label  = (string) ( $social['label'] ?? '' );
	$handle = (string) ( $social['handle'] ?? '' );
	?>
	<a
		class="site-footer__social site-footer__social--<?php echo esc_attr( $tone ); ?>"
		href="<?php echo esc_url( $href ); ?>"
		style="--social-color: <?php echo esc_attr( $color ); ?>"
		<?php echo str_starts_with( $href, 'mailto:' ) ? '' : 'target="_blank" rel="noopener noreferrer"'; ?>
		aria-label="<?php echo esc_attr( $label ); ?>"
	>
		<span class="site-footer__social-icon" aria-hidden="true"><?php echo kc_footer_social_icon( $tone ); ?></span>
		<span class="site-footer__social-handle"><?php echo esc_html( $handle ); ?></span>
	</a>
	<?php
}
