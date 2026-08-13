<?php
/**
 * Home final CTA section.
 *
 * @package Keuken_Centrum
 */

$primary_label   = kc_get_option('hero_cta_primary_label_default', 'Plan Showroombezoek');
$primary_url     = kc_get_option('hero_cta_primary_url_default', home_url('/contact'));
$secondary_label = kc_get_option('hero_cta_secondary_label_default', 'Start Configurator');
$secondary_url   = kc_get_option('hero_cta_secondary_url_default', 'https://keuken-elevated.vercel.app/brands');
?>
<section class="section-shell section-shell--accent">
	<div class="site-shell final-cta">
		<div>
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Klaar voor de volgende stap?', 'keuken-centrum'); ?></p>
			<h2 class="section-title section-title--light"><?php esc_html_e('Laat uw keukenproject starten met showroomadvies, sterke merken en een plan dat klopt.', 'keuken-centrum'); ?></h2>
		</div>
		<div class="final-cta__actions">
			<a class="btn btn--primary" href="<?php echo esc_url($primary_url); ?>"><?php echo esc_html($primary_label); ?></a>
			<a class="btn btn--ghost" href="<?php echo esc_url($secondary_url); ?>" target="_blank" rel="noreferrer"><?php echo esc_html($secondary_label); ?></a>
		</div>
	</div>
</section>
