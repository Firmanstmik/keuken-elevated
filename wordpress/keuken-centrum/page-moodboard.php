<?php
/**
 * Page: /moodboard/ — configurator step 4.
 *
 * @package Keuken_Centrum
 */

$step = 'moodboard';
$seo  = kc_configurator_seo_for_step( $step );
add_filter(
	'pre_get_document_title',
	static function () use ( $seo ) {
		return $seo['title'];
	},
	99
);

get_header();
$catalog  = function_exists( 'kc_configurator_catalog' ) ? kc_configurator_catalog() : [];
$fallback = '';
foreach ( (array) ( $catalog['styles'] ?? [] ) as $style_row ) {
	if ( ! empty( $style_row['base'] ) ) {
		$fallback = (string) $style_row['base'];
		break;
	}
}
?>
<main id="main-content" class="site-main site-main--configurator" data-cfg-step="moodboard">
	<?php get_template_part( 'template-parts/configurator/flow-nav', null, [ 'step' => $step ] ); ?>
	<section class="kc-cfg-section kc-cfg-mood">
		<div class="kc-cfg-wrap kc-cfg-mood__grid">
			<div>
				<p class="kc-cfg-overline"><?php esc_html_e( 'Uw ontwerpvoorstel', 'keuken-centrum' ); ?></p>
				<h1 class="kc-cfg-title"><?php esc_html_e( 'Uw keuken', 'keuken-centrum' ); ?> <em><?php esc_html_e( 'persoonlijk samengesteld', 'keuken-centrum' ); ?></em></h1>
				<div class="kc-cfg-mood__media">
					<img data-cfg-mood-img src="<?php echo esc_url( $fallback ); ?>" alt="<?php esc_attr_e( 'Moodboardvoorbeeld', 'keuken-centrum' ); ?>" class="kc-cfg-mood__img" width="1200" height="900">
				</div>
				<div class="kc-cfg-mood__tools">
					<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-print><?php esc_html_e( 'Afdrukken', 'keuken-centrum' ); ?></button>
					<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-save><?php esc_html_e( 'Project opslaan', 'keuken-centrum' ); ?></button>
					<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-share><?php esc_html_e( 'Project delen', 'keuken-centrum' ); ?></button>
				</div>
				<p class="kc-cfg-mood__note"><?php esc_html_e( 'Pdf-export uit React (jsPDF) is in WordPress nog niet nagebouwd. Afdrukken gebruikt de browserprint. Delen deelt de pagina-URL, net als React.', 'keuken-centrum' ); ?></p>
			</div>
			<div>
				<h2 class="kc-cfg-h2"><?php esc_html_e( 'Merk en stijl', 'keuken-centrum' ); ?></h2>
				<p><span class="kc-cfg-muted"><?php esc_html_e( 'Merk', 'keuken-centrum' ); ?></span> <strong data-cfg-mood-brand><?php esc_html_e( 'Niet gekozen', 'keuken-centrum' ); ?></strong></p>
				<p><span class="kc-cfg-muted"><?php esc_html_e( 'Stijl', 'keuken-centrum' ); ?></span> <strong data-cfg-mood-style><?php esc_html_e( 'Niet gekozen', 'keuken-centrum' ); ?></strong></p>
				<h2 class="kc-cfg-h2"><?php esc_html_e( 'Materialen en afwerkingen', 'keuken-centrum' ); ?></h2>
				<div data-cfg-mood-sels></div>
				<div class="kc-cfg-budget">
					<p class="kc-cfg-overline"><?php esc_html_e( 'Geschatte investering', 'keuken-centrum' ); ?></p>
					<p class="kc-cfg-budget__value" data-cfg-mood-budget></p>
					<p class="kc-cfg-muted"><?php esc_html_e( 'Indicatieve inschatting. De definitieve offerte ontvangt u tijdens de consultatie.', 'keuken-centrum' ); ?></p>
				</div>
				<div class="kc-cfg-next">
					<p class="kc-cfg-overline"><?php esc_html_e( 'Volgende stap', 'keuken-centrum' ); ?></p>
					<h2 class="kc-cfg-h2"><?php esc_html_e( 'Plan uw ontwerpconsultatie', 'keuken-centrum' ); ?></h2>
					<p><?php esc_html_e( 'Bespreek uw concept met een persoonlijke ontwerpadviseur.', 'keuken-centrum' ); ?></p>
					<button type="button" class="kc-cfg-btn kc-cfg-btn--primary" data-cfg-continue><?php esc_html_e( 'Consultatie plannen', 'keuken-centrum' ); ?></button>
					<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-back><?php esc_html_e( 'Ga terug naar de configurator', 'keuken-centrum' ); ?></button>
				</div>
			</div>
		</div>
	</section>
	<div class="flow-action-bar kc-cfg-action" data-cfg-action>
		<div class="kc-cfg-action__mobile">
			<button type="button" class="kc-cfg-action__icon" data-cfg-back aria-label="<?php esc_attr_e( 'Terug', 'keuken-centrum' ); ?>">←</button>
			<div class="kc-cfg-action__copy">
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Voorstel gereed', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title><?php esc_html_e( 'Uw keuken', 'keuken-centrum' ); ?></p>
			</div>
			<button type="button" class="kc-cfg-action__go" data-cfg-continue><?php esc_html_e( 'Verder naar consultatie', 'keuken-centrum' ); ?></button>
		</div>
		<div class="kc-cfg-action__desktop">
			<div>
				<p class="kc-cfg-action__over"><?php esc_html_e( 'Voorstel gereed', 'keuken-centrum' ); ?></p>
				<p class="kc-cfg-action__title" data-cfg-action-title-d><?php esc_html_e( 'Uw keuken', 'keuken-centrum' ); ?></p>
			</div>
			<div class="kc-cfg-action__btns">
				<button type="button" class="kc-cfg-btn kc-cfg-btn--ghost" data-cfg-back><?php esc_html_e( 'Terug', 'keuken-centrum' ); ?></button>
				<button type="button" class="kc-cfg-btn kc-cfg-btn--primary" data-cfg-continue><?php esc_html_e( 'Verder naar consultatie', 'keuken-centrum' ); ?></button>
			</div>
		</div>
	</div>
</main>
<?php
wp_footer();
?>
</body>
</html>
