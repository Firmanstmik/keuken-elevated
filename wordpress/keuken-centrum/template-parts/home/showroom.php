<?php
/**
 * Home premium showroom — React PremiumShowcase parity.
 *
 * @package Keuken_Centrum
 */

$address = kc_get_option('contact_address', 'Zonnebaan 8');
$postal  = kc_get_option('contact_postal', '3542 EC Utrecht');
$hours   = kc_get_option('contact_hours', 'Ma t/m za op afspraak, met uitgebreid showroomadvies.');
$image   = kc_theme_img('showroom.jpg') ?: kc_theme_img('hero/hero_img2.webp');
?>
<section class="section-shell showroom-section" id="showroom">
	<div class="site-shell showroom-panel showroom-panel--media">
		<?php if ($image) : ?>
			<figure class="showroom-panel__media" data-reveal>
				<img src="<?php echo esc_url($image); ?>" alt="<?php esc_attr_e('Keuken-Centrum Utrecht showroom', 'keuken-centrum'); ?>" loading="lazy" decoding="async" />
			</figure>
		<?php endif; ?>

		<div class="showroom-panel__content" data-reveal>
			<p class="section-eyebrow"><?php esc_html_e('Showroom Utrecht', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Beleef materialen, fronten en opstellingen in een premium setting.', 'keuken-centrum'); ?></h2>
			<p><?php esc_html_e('Onze showroom helpt keuzes tastbaar te maken: van warme houttinten en verfijnde lakken tot werkbladen, apparatuur en ergonomische routing in de ruimte.', 'keuken-centrum'); ?></p>

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

			<div class="split-panel__actions">
				<a class="btn btn--primary btn--pill" href="<?php echo esc_url(home_url('/contact')); ?>"><?php esc_html_e('Plan Showroombezoek', 'keuken-centrum'); ?></a>
			</div>
		</div>
	</div>
</section>
