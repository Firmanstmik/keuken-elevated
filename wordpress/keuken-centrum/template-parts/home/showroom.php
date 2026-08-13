<?php
/**
 * Home showroom section.
 *
 * @package Keuken_Centrum
 */

$address = kc_get_option('contact_address', 'Zonnebaan 8');
$postal  = kc_get_option('contact_postal', '3542 EC Utrecht');
$hours   = kc_get_option('contact_hours', 'Ma t/m za op afspraak, met uitgebreid showroomadvies.');
?>
<section class="section-shell">
	<div class="site-shell showroom-panel">
		<div class="showroom-panel__content">
			<p class="section-eyebrow"><?php esc_html_e('Showroom Utrecht', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Beleef materialen, fronten en opstellingen in een premium setting.', 'keuken-centrum'); ?></h2>
			<p><?php esc_html_e('Onze showroom helpt keuzes tastbaar te maken: van warme houttinten en verfijnde lakken tot werkbladen, apparatuur en ergonomische routing in de ruimte.', 'keuken-centrum'); ?></p>
		</div>
		<div class="showroom-panel__meta">
			<div class="showroom-stat">
				<span class="showroom-stat__label"><?php esc_html_e('Adres', 'keuken-centrum'); ?></span>
				<strong><?php echo esc_html($address); ?><br><?php echo esc_html($postal); ?></strong>
			</div>
			<div class="showroom-stat">
				<span class="showroom-stat__label"><?php esc_html_e('Bezoek op afspraak', 'keuken-centrum'); ?></span>
				<strong><?php echo esc_html($hours); ?></strong>
			</div>
		</div>
	</div>
</section>
