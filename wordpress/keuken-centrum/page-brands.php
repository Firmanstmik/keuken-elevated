<?php
/**
 * Page: /brands/ — configurator step 1.
 *
 * @package Keuken_Centrum
 */

$step = 'brands';
$seo  = kc_configurator_seo_for_step( $step );
add_filter(
	'pre_get_document_title',
	static function () use ( $seo ) {
		return $seo['title'];
	},
	99
);

get_header();
$catalog = kc_configurator_catalog();
?>
<main id="main-content" class="site-main site-main--configurator" data-cfg-step="brands">
	<?php get_template_part( 'template-parts/configurator/flow-nav', null, [ 'step' => $step ] ); ?>
	<section class="kc-cfg-section">
		<div class="kc-cfg-wrap">
			<header class="kc-cfg-page-header">
				<p class="kc-cfg-overline"><?php esc_html_e( 'Stap 01 van 05', 'keuken-centrum' ); ?></p>
				<h1 class="kc-cfg-title"><?php esc_html_e( 'Kies uw merk', 'keuken-centrum' ); ?></h1>
				<p class="kc-cfg-subtitle"><?php esc_html_e( 'Selecteer de Europese keukenfabrikant die past bij uw visie. Elk merk brengt een eigen ontwerpfilosofie en erfgoed mee.', 'keuken-centrum' ); ?></p>
			</header>
			<div class="kc-cfg-brand-grid">
				<?php foreach ( $catalog['brands'] as $brand_index => $brand ) : ?>
					<button
						type="button"
						class="kc-cfg-card"
						data-cfg-brand="<?php echo esc_attr( (string) $brand['id'] ); ?>"
						data-cfg-name="<?php echo esc_attr( (string) $brand['name'] ); ?>"
					>
						<img
							class="kc-cfg-card__img"
							src="<?php echo esc_url( (string) $brand['image'] ); ?>"
							alt="<?php echo esc_attr( (string) $brand['name'] ); ?>"
							width="960"
							height="524"
							loading="<?php echo 0 === (int) $brand_index ? 'eager' : 'lazy'; ?>"
							decoding="async"
							<?php echo 0 === (int) $brand_index ? 'fetchpriority="high"' : ''; ?>
						>
						<span class="kc-cfg-card__scrim"></span>
						<?php if ( ! empty( $brand['logo'] ) ) : ?>
							<img class="kc-cfg-card__logo" src="<?php echo esc_url( (string) $brand['logo'] ); ?>" alt="<?php echo esc_attr( (string) $brand['name'] . ' logo' ); ?>" width="92" height="28">
						<?php endif; ?>
						<span class="kc-cfg-card__check" hidden aria-hidden="true">✓</span>
						<span class="kc-cfg-card__meta">
							<span class="kc-cfg-card__origin"><?php echo esc_html( (string) $brand['origin'] ); ?></span>
							<span class="kc-cfg-card__name<?php echo 'leicht' === $brand['id'] ? ' is-uppercase' : ''; ?>"><?php echo esc_html( (string) $brand['name'] ); ?></span>
							<span class="kc-cfg-card__tag"><?php echo esc_html( (string) $brand['tagline'] ); ?></span>
							<span class="kc-cfg-card__desc"><?php echo esc_html( (string) $brand['description'] ); ?></span>
						</span>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
	<div class="flow-action-bar kc-cfg-action" data-cfg-action hidden>
		<div class="kc-cfg-action__mobile">
			<button type="button" class="kc-cfg-action__icon" data-cfg-back aria-label="<?php esc_attr_e( 'Terug', 'keuken-centrum' ); ?>">←</button>
			<div class="kc-cfg-action__copy">
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Geselecteerd', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title></p>
			</div>
			<button type="button" class="kc-cfg-action__go" data-cfg-continue><?php esc_html_e( 'Verder naar stijl', 'keuken-centrum' ); ?></button>
		</div>
		<div class="kc-cfg-action__desktop">
			<div>
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Geselecteerd', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title-d></p>
			</div>
			<div class="kc-cfg-action__btns">
				<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-back><?php esc_html_e( 'Terug', 'keuken-centrum' ); ?></button>
				<button type="button" class="kc-cfg-btn kc-cfg-btn--primary" data-cfg-continue><?php esc_html_e( 'Verder naar stijl', 'keuken-centrum' ); ?></button>
			</div>
		</div>
	</div>
</main>
<?php
wp_footer();
?>
</body>
</html>
