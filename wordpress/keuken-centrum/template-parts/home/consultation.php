<?php
/**
 * Home consultation section.
 *
 * @package Keuken_Centrum
 */

$phone     = kc_get_option('contact_phone', '030 241 5122');
$email     = kc_get_option('contact_email', 'info@keuken-centrum.nl');
$hours     = kc_get_option('contact_hours', 'Ma t/m za op afspraak, met uitgebreid showroomadvies.');
$cta_label = kc_get_option('consultation_cta_label', 'Plan vrijblijvend advies');
$cta_url   = kc_get_option('consultation_cta_url', home_url('/contact'));
?>
<section class="section-shell">
	<div class="site-shell consultation-panel">
		<div class="consultation-panel__content">
			<p class="section-eyebrow"><?php esc_html_e('Persoonlijk advies', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Plan een gesprek waarin wensen, stijl en praktische keuzes samenkomen.', 'keuken-centrum'); ?></h2>
			<p><?php esc_html_e('Ideaal voor wie nog aan het oriënteren is of al concrete plattegronden heeft. We denken mee over opstelling, materiaal, ergonomie en apparatuur.', 'keuken-centrum'); ?></p>
		</div>
		<div class="consultation-panel__card">
			<p><strong><?php esc_html_e('Bel', 'keuken-centrum'); ?></strong><br><a href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a></p>
			<p><strong><?php esc_html_e('Mail', 'keuken-centrum'); ?></strong><br><a href="<?php echo esc_url('mailto:' . $email); ?>"><?php echo esc_html($email); ?></a></p>
			<p><strong><?php esc_html_e('Beschikbaar', 'keuken-centrum'); ?></strong><br><?php echo esc_html($hours); ?></p>
			<a class="btn btn--primary consultation-panel__cta" href="<?php echo esc_url($cta_url); ?>"><?php echo esc_html($cta_label); ?></a>
		</div>
	</div>
</section>
