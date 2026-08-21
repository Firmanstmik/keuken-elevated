<?php
/**
 * Sticky conversion bar markup (React StickyConversionBar parity).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$data = function_exists( 'kc_sticky_conversion_data' ) ? kc_sticky_conversion_data() : null;
if ( ! is_array( $data ) || empty( $data['enabled'] ) ) {
	return;
}

$actions = is_array( $data['actions'] ?? null ) ? $data['actions'] : [];
?>
<aside
	class="kc-concierge"
	data-sticky-conversion
	data-concierge
	hidden
	aria-label="<?php echo esc_attr( (string) ( $data['aria_label'] ?? '' ) ); ?>"
>
	<div class="kc-concierge__shell">
		<div class="kc-concierge__badge">
			<span class="kc-concierge__badge-dot" aria-hidden="true"></span>
			<?php echo esc_html( (string) ( $data['badge'] ?? 'KC Concierge' ) ); ?>
		</div>

		<button
			type="button"
			class="kc-concierge__close"
			data-concierge-dismiss
			aria-label="<?php echo esc_attr( (string) ( $data['close_label'] ?? __( 'Sluit contactbalk', 'keuken-centrum' ) ) ); ?>"
		>
			<?php echo kc_icon_brand( 'close-circle' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</button>

		<div class="kc-concierge__card">
			<div class="kc-concierge__shine" aria-hidden="true"></div>
			<div class="kc-concierge__grid">
				<?php foreach ( $actions as $action ) : ?>
					<?php
					$tone   = (string) ( $action['tone'] ?? 'neutral' );
					$href   = (string) ( $action['href'] ?? '#' );
					$target = str_contains( $href, 'wa.me' ) ? '_blank' : '';
					$rel    = $target ? 'noopener noreferrer' : '';
					?>
					<a
						class="kc-concierge__action kc-concierge__action--<?php echo esc_attr( $tone ); ?>"
						href="<?php echo esc_url( $href ); ?>"
						<?php echo $target ? 'target="' . esc_attr( $target ) . '"' : ''; ?>
						<?php echo $rel ? 'rel="' . esc_attr( $rel ) . '"' : ''; ?>
					>
						<span class="kc-concierge__action-wash" aria-hidden="true"></span>
						<span class="kc-concierge__action-icon" aria-hidden="true">
							<?php echo kc_icon_brand( (string) ( $action['icon'] ?? 'phone' ) ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</span>
						<span class="kc-concierge__action-copy">
							<span class="kc-concierge__action-label"><?php echo esc_html( (string) ( $action['label'] ?? '' ) ); ?></span>
							<span class="kc-concierge__action-meta"><?php echo esc_html( (string) ( $action['meta'] ?? '' ) ); ?></span>
						</span>
						<span class="kc-concierge__action-arrow" aria-hidden="true">
							<?php echo kc_icon_brand( 'arrow-right-sm' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
						</span>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</aside>
