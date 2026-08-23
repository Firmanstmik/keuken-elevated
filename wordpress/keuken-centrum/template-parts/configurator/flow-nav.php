<?php
/**
 * Configurator mobile flow header (React FlowNav).
 *
 * @package Keuken_Centrum
 *
 * @var array<string, mixed> $args
 */

$step      = (string) ( $args['step'] ?? kc_configurator_current_step() );
$steps     = [
	'brands'       => [ 'short' => __( 'Merk', 'keuken-centrum' ), 'index' => 1, 'back' => home_url( '/' ) ],
	'style'        => [ 'short' => __( 'Stijl', 'keuken-centrum' ), 'index' => 2, 'back' => home_url( '/brands/' ) ],
	'configure'    => [ 'short' => __( 'Samenstellen', 'keuken-centrum' ), 'index' => 3, 'back' => home_url( '/style/' ) ],
	'moodboard'    => [ 'short' => __( 'Voorstel', 'keuken-centrum' ), 'index' => 4, 'back' => home_url( '/configure/' ) ],
	'consultation' => [ 'short' => __( 'Afspraak', 'keuken-centrum' ), 'index' => 5, 'back' => home_url( '/moodboard/' ) ],
];
$meta      = $steps[ $step ] ?? $steps['brands'];
$progress  = ( (int) $meta['index'] / 5 ) * 100;
$logo      = kc_theme_img( 'logo-keuken-1-1.webp' ) ?: kc_theme_img( 'logo-keuken.webp' );
?>
<header class="configurator-mobile-header kc-cfg-mobile-header md:hidden">
	<div class="configurator-mobile-header__row">
		<a href="<?php echo esc_url( (string) $meta['back'] ); ?>" class="configurator-mobile-header__action" aria-label="<?php esc_attr_e( 'Ga terug', 'keuken-centrum' ); ?>">
			<?php echo kc_icon_brand( 'arrow-left' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</a>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="min-w-0" aria-label="<?php esc_attr_e( 'Naar de homepage', 'keuken-centrum' ); ?>">
			<?php if ( $logo ) : ?>
				<img src="<?php echo esc_url( $logo ); ?>" alt="KeukenCentrum.nl" class="kc-cfg-mobile-logo" width="120" height="24">
			<?php endif; ?>
		</a>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="configurator-mobile-header__action" aria-label="<?php esc_attr_e( 'Configuratie sluiten', 'keuken-centrum' ); ?>">
			<?php echo kc_icon_brand( 'close-circle' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
		</a>
	</div>
	<div class="configurator-mobile-header__progress">
		<span><?php echo esc_html( sprintf( /* translators: 1: step */ __( 'Stap %d van 5', 'keuken-centrum' ), (int) $meta['index'] ) ); ?></span>
		<strong><?php echo esc_html( (string) $meta['short'] ); ?></strong>
		<span class="configurator-mobile-header__progress-bar" aria-hidden="true" style="--flow-progress: <?php echo esc_attr( (string) $progress ); ?>%;"></span>
	</div>
</header>
