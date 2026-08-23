<?php
/**
 * Page: /configure/ — configurator step 3.
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
$catalog = kc_configurator_catalog();
?>
<main id="main-content" class="site-main site-main--configurator site-main--configure" data-cfg-step="configure">
	<?php get_template_part( 'template-parts/configurator/flow-nav', null, [ 'step' => $step ] ); ?>
	<section class="kc-cfg-configure">
		<div class="kc-cfg-configure__stage">
			<div class="kc-cfg-configure__canvas" data-cfg-canvas>
				<img data-cfg-base alt="" class="kc-cfg-configure__img">
				<div data-cfg-hotspots></div>
			</div>
			<div class="kc-cfg-configure__cats" data-cfg-cats>
				<?php foreach ( $catalog['categories'] as $cat ) : ?>
					<button type="button" class="kc-cfg-chip" data-cfg-cat="<?php echo esc_attr( (string) $cat['id'] ); ?>">
						<?php echo esc_html( (string) $cat['label'] ); ?>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
		<aside class="kc-cfg-configure__panel">
			<p class="kc-cfg-overline"><?php esc_html_e( 'Stap 03 van 05', 'keuken-centrum' ); ?></p>
			<h1 class="kc-cfg-title kc-cfg-title--sm"><?php esc_html_e( 'Samenstellen', 'keuken-centrum' ); ?></h1>
			<p class="kc-cfg-subtitle" data-cfg-cat-label><?php esc_html_e( 'Klik op een hotspot of categorie om uw keuken samen te stellen', 'keuken-centrum' ); ?></p>
			<div class="kc-cfg-options" data-cfg-options></div>
			<div class="kc-cfg-summary" data-cfg-summary></div>
		</aside>
	</section>
	<div class="flow-action-bar kc-cfg-action" data-cfg-action>
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
				<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-back><?php esc_html_e( 'Terug', 'keuken-centrum' ); ?></button>
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
