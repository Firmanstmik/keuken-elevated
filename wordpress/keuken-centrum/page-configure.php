<?php
/**
 * Page: /configure/ — configurator step 3 (React dark split layout).
 *
 * @package Keuken_Centrum
 */

$step = 'configure';
$seo  = kc_configurator_seo_for_step( $step );
add_filter(
	'pre_get_document_title',
	static function () use ( $seo ) {
		return $seo['title'];
	},
	99
);

get_header();
$catalog  = kc_configurator_catalog();
$fallback = '';
foreach ( (array) ( $catalog['styles'] ?? [] ) as $style_row ) {
	if ( ! empty( $style_row['base'] ) ) {
		$fallback = (string) $style_row['base'];
		break;
	}
}
$logo = kc_theme_img( 'logo-keuken-1-1.webp' ) ?: kc_theme_img( 'logo-keuken.webp' );
$total_cats = count( (array) ( $catalog['categories'] ?? [] ) );
?>
<main id="main-content" class="site-main site-main--configurator site-main--configure" data-cfg-step="configure">
	<div class="kc-cfg-progress" data-cfg-progress aria-hidden="true"><span data-cfg-progress-fill></span></div>

	<header class="kc-cfg-app-header">
		<a href="<?php echo esc_url( home_url( '/style/' ) ); ?>" class="kc-cfg-app-header__back" data-cfg-back-link>
			<?php echo kc_icon_brand( 'arrow-left' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
			<?php esc_html_e( 'Terug', 'keuken-centrum' ); ?>
		</a>
		<?php if ( $logo ) : ?>
			<img src="<?php echo esc_url( $logo ); ?>" alt="KeukenCentrum.nl" class="kc-cfg-app-header__logo" width="120" height="28">
		<?php endif; ?>
		<p class="kc-cfg-app-header__label"><?php esc_html_e( 'Samenstellen', 'keuken-centrum' ); ?></p>
	</header>

	<section class="kc-cfg-configure kc-cfg-configure--react">
		<div class="kc-cfg-configure__stage" data-cfg-canvas-wrap>
			<div class="kc-cfg-configure__canvas" data-cfg-canvas>
				<img
					data-cfg-base
					src="<?php echo esc_url( $fallback ); ?>"
					alt=""
					class="kc-cfg-configure__img"
					width="1200"
					height="900"
					loading="eager"
					fetchpriority="high"
					decoding="async"
				>
				<div class="kc-cfg-configure__hotspots" data-cfg-hotspots></div>
				<div class="kc-cfg-configure__vignette" aria-hidden="true"></div>
				<div class="kc-cfg-configure__badge">
					<p><?php esc_html_e( 'Stap 03 van 05', 'keuken-centrum' ); ?></p>
					<p data-cfg-stage-progress>0/<?php echo (int) $total_cats; ?> <?php esc_html_e( 'opties samengesteld', 'keuken-centrum' ); ?></p>
				</div>
			</div>
		</div>

		<aside class="kc-cfg-configure__panel">
			<div class="kc-cfg-configure__rail" data-cfg-cats>
				<?php foreach ( $catalog['categories'] as $cat ) : ?>
					<button type="button" class="kc-cfg-chip" data-cfg-cat="<?php echo esc_attr( (string) $cat['id'] ); ?>">
						<span class="kc-cfg-chip__dot" data-cfg-chip-dot hidden aria-hidden="true"></span>
						<span><?php echo esc_html( (string) $cat['label'] ); ?></span>
					</button>
				<?php endforeach; ?>
			</div>

			<div class="kc-cfg-configure__options-wrap">
				<div class="kc-cfg-configure__options" data-cfg-options-panel>
					<div class="kc-cfg-configure__empty" data-cfg-empty>
						<p class="kc-cfg-configure__empty-over"><?php esc_html_e( 'Configuratie', 'keuken-centrum' ); ?></p>
						<p class="kc-cfg-configure__empty-title"><?php esc_html_e( 'Klik op een hotspot of categorie om uw keuken samen te stellen', 'keuken-centrum' ); ?></p>
					</div>
					<div class="kc-cfg-configure__options-inner" data-cfg-options-inner hidden>
						<div class="kc-cfg-configure__options-head">
							<div>
								<p class="kc-cfg-configure__options-over"><?php esc_html_e( 'Kies', 'keuken-centrum' ); ?></p>
								<h2 class="kc-cfg-configure__options-title" data-cfg-cat-label></h2>
							</div>
							<button type="button" class="kc-cfg-configure__close" data-cfg-close-cat><?php esc_html_e( 'Sluiten', 'keuken-centrum' ); ?></button>
						</div>
						<div class="kc-cfg-options" data-cfg-options></div>
					</div>
				</div>
			</div>

			<div class="kc-cfg-configure__summary" data-cfg-summary-panel>
				<p class="kc-cfg-configure__summary-over"><?php esc_html_e( 'Uw configuratie', 'keuken-centrum' ); ?></p>
				<div class="kc-cfg-configure__summary-rows" data-cfg-summary-rows></div>
				<div class="kc-cfg-configure__budget">
					<p><?php esc_html_e( 'Budgetindicatie', 'keuken-centrum' ); ?></p>
					<p data-cfg-summary-budget>—</p>
				</div>
				<button type="button" class="kc-cfg-configure__mood-btn" data-cfg-mood-btn>
					<?php esc_html_e( 'Moodboard genereren', 'keuken-centrum' ); ?>
				</button>
			</div>
		</aside>
	</section>

	<div class="flow-action-bar kc-cfg-action kc-cfg-action--dark" data-cfg-action hidden>
		<div class="kc-cfg-action__mobile">
			<button type="button" class="kc-cfg-action__icon" data-cfg-back aria-label="<?php esc_attr_e( 'Terug', 'keuken-centrum' ); ?>">←</button>
			<div class="kc-cfg-action__copy">
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Voortgang', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title></p>
			</div>
			<button type="button" class="kc-cfg-action__go" data-cfg-continue><?php esc_html_e( 'Verder naar moodboard', 'keuken-centrum' ); ?></button>
		</div>
		<div class="kc-cfg-action__desktop">
			<div>
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Voortgang', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title-d></p>
				<p class="kc-cfg-action__sub" data-cfg-action-sub></p>
			</div>
			<div class="kc-cfg-action__btns">
				<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost-dark" data-cfg-back><?php esc_html_e( 'Terug', 'keuken-centrum' ); ?></button>
				<button type="button" class="kc-cfg-btn kc-cfg-btn--primary" data-cfg-continue><?php esc_html_e( 'Verder naar moodboard', 'keuken-centrum' ); ?></button>
			</div>
		</div>
	</div>
</main>
<?php
wp_footer();
?>
</body>
</html>
