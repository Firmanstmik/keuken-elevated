<?php
/**
 * Page: /style/ — configurator step 2.
 *
 * @package Keuken_Centrum
 */

$step = 'style';
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
<main id="main-content" class="site-main site-main--configurator" data-cfg-step="style">
	<?php get_template_part( 'template-parts/configurator/flow-nav', null, [ 'step' => $step ] ); ?>
	<section class="kc-cfg-section">
		<div class="kc-cfg-wrap">
			<header class="kc-cfg-page-header">
				<p class="kc-cfg-overline"><?php esc_html_e( 'Stap 02 van 05', 'keuken-centrum' ); ?></p>
				<h1 class="kc-cfg-title"><?php esc_html_e( 'Kies uw stijl', 'keuken-centrum' ); ?></h1>
				<p class="kc-cfg-subtitle"><?php esc_html_e( 'Bepaal de architectonische taal van uw keuken. Elke stijl biedt een eigen sfeer en beleving.', 'keuken-centrum' ); ?></p>
			</header>
			<div class="kc-cfg-style-grid">
				<?php foreach ( $catalog['styles'] as $style_index => $style ) : ?>
					<button
						type="button"
						class="kc-cfg-card"
						data-cfg-style="<?php echo esc_attr( (string) $style['id'] ); ?>"
						data-cfg-name="<?php echo esc_attr( (string) $style['name'] ); ?>"
					>
						<img
							class="kc-cfg-card__img"
							src="<?php echo esc_url( (string) $style['image'] ); ?>"
							alt="<?php echo esc_attr( (string) $style['name'] ); ?>"
							width="960"
							height="524"
							loading="<?php echo 0 === (int) $style_index ? 'eager' : 'lazy'; ?>"
							decoding="async"
							<?php echo 0 === (int) $style_index ? 'fetchpriority="high"' : ''; ?>
						>
						<span class="kc-cfg-card__scrim"></span>
						<span class="kc-cfg-card__check" hidden aria-hidden="true">✓</span>
						<span class="kc-cfg-card__meta">
							<span class="kc-cfg-card__origin"><?php echo esc_html( (string) ( $style['keywords'][0] ?? '' ) ); ?></span>
							<span class="kc-cfg-card__name"><?php echo esc_html( (string) $style['name'] ); ?></span>
							<span class="kc-cfg-card__tag"><?php echo esc_html( implode( ', ', (array) $style['keywords'] ) ); ?></span>
							<span class="kc-cfg-card__desc"><?php echo esc_html( (string) $style['description'] ); ?></span>
						</span>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
	</section>
	<div class="flow-action-bar kc-cfg-action" data-cfg-action>
		<div class="kc-cfg-action__mobile">
			<button type="button" class="kc-cfg-action__icon" data-cfg-back aria-label="<?php esc_attr_e( 'Terug', 'keuken-centrum' ); ?>">←</button>
			<div class="kc-cfg-action__copy">
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Geselecteerd', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title><?php esc_html_e( 'Kies uw stijl', 'keuken-centrum' ); ?></p>
			</div>
			<button type="button" class="kc-cfg-action__go" data-cfg-continue disabled><?php esc_html_e( 'Verder naar stap 3', 'keuken-centrum' ); ?></button>
		</div>
		<div class="kc-cfg-action__desktop">
			<div>
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Geselecteerd', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title-d><?php esc_html_e( 'Kies uw stijl', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__sub" data-cfg-action-sub><?php esc_html_e( 'Kies eerst een stijl om door te gaan naar stap 3', 'keuken-centrum' ); ?></p>
			</div>
			<div class="kc-cfg-action__btns">
				<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-back><?php esc_html_e( 'Terug', 'keuken-centrum' ); ?></button>
				<button type="button" class="kc-cfg-btn kc-cfg-btn--primary" data-cfg-continue disabled><?php esc_html_e( 'Verder naar stap 3', 'keuken-centrum' ); ?></button>
			</div>
		</div>
	</div>
</main>
<?php
wp_footer();
?>
</body>
</html>
