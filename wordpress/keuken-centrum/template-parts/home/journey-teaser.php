<?php
/**
 * Home journey teaser — React ShowroomJourneySection parity.
 *
 * @package Keuken_Centrum
 */
$showroom_page = get_page_by_path('showroom-keukens');
$base          = kc_theme_img('configurator/klassiek-base.webp');
$hotspots      = get_template_directory_uri() . '/assets/data/hotspots/klassiek.json';
?>
<section class="journey-config-scene">
	<div class="site-shell journey-config-grid">
		<div class="journey-config-copy">
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Uw keukenreis', 'keuken-centrum'); ?></p>
			<h2><?php esc_html_e('Zie uw ideeën samenkomen, nog vóór de eerste tekening.', 'keuken-centrum'); ?></h2>
			<p><?php esc_html_e('Verken indelingen, materialen en apparatuur in onze configurator. Daarna maken we uw ontwerp persoonlijk in de showroom.', 'keuken-centrum'); ?></p>
			<div class="journey-config-actions">
				<a class="btn btn--primary" href="<?php echo esc_url(home_url('/configurator')); ?>"><?php esc_html_e('Start de configurator', 'keuken-centrum'); ?></a>
				<a class="btn btn--ghost" href="<?php echo esc_url($showroom_page ? get_permalink($showroom_page) : home_url('/showroom-keukens')); ?>"><?php esc_html_e('Bezoek de showroom', 'keuken-centrum'); ?></a>
			</div>
		</div>
		<div class="journey-config-mockup" data-journey-hotspots data-hotspots-url="<?php echo esc_url($hotspots); ?>">
			<div class="journey-config-topbar"><span></span><span></span><span></span><b><?php esc_html_e('Uw klassieke keuken', 'keuken-centrum'); ?></b></div>
			<?php if ($base) : ?><img src="<?php echo esc_url($base); ?>" alt="<?php esc_attr_e('Interactieve klassieke keukenconfigurator', 'keuken-centrum'); ?>" loading="lazy" width="1200" height="800"><?php endif; ?>
			<div class="journey-config-hotspots" aria-live="polite"></div>
			<div class="journey-config-caption"><span><?php esc_html_e('Klik op een detail', 'keuken-centrum'); ?></span><strong data-journey-label><?php esc_html_e('Ontdek de materialen', 'keuken-centrum'); ?></strong></div>
		</div>
	</div>
</section>
