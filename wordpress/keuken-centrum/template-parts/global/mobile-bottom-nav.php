<?php
/**
 * Mobile bottom nav — React ContextBottomNav parity (≤767px only).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! function_exists( 'kc_mobile_bottom_nav_should_render' ) || ! kc_mobile_bottom_nav_should_render() ) {
	return;
}

$items = function_exists( 'kc_mobile_bottom_nav_items' ) ? kc_mobile_bottom_nav_items() : [];
if ( ! $items ) {
	return;
}
?>
<nav class="mobile-app-bottom-nav" aria-label="<?php esc_attr_e( 'Mobiele hoofdnavigatie', 'keuken-centrum' ); ?>">
	<div class="mobile-app-bottom-nav__inner">
		<?php foreach ( $items as $item ) : ?>
			<?php
			$href    = (string) ( $item['href'] ?? '#' );
			$label   = (string) ( $item['label'] ?? '' );
			$icon    = (string) ( $item['icon'] ?? 'home' );
			$primary = ! empty( $item['primary'] );
			$active  = function_exists( 'kc_mobile_bottom_nav_is_active' ) && kc_mobile_bottom_nav_is_active( $href );
			$classes = 'mobile-app-bottom-nav__item';
			if ( $active ) {
				$classes .= ' mobile-app-bottom-nav__item--active';
			}
			if ( $primary ) {
				$classes .= ' mobile-app-bottom-nav__item--primary';
			}
			?>
			<a
				class="<?php echo esc_attr( $classes ); ?>"
				href="<?php echo esc_url( $href ); ?>"
				<?php echo $active ? 'aria-current="page"' : ''; ?>
			>
				<span class="mobile-app-bottom-nav__icon" aria-hidden="true">
					<?php echo kc_icon_brand( $icon ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
				</span>
				<span><?php echo esc_html( $label ); ?></span>
			</a>
		<?php endforeach; ?>
	</div>
</nav>
