<?php
/**
 * Footer template.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

$address = kc_get_option('contact_address', 'Zonnebaan 8');
$postal  = kc_get_option('contact_postal', '3542 EC Utrecht');
$phone   = kc_get_option('contact_phone', '030 241 5122');
$email   = kc_get_option('contact_email', 'info@keuken-centrum.nl');
$hours   = kc_get_option('contact_hours', 'Ma t/m za op afspraak, met uitgebreid showroomadvies.');
$founded = kc_get_option('founded_year', '1978');
$reviews = kc_get_option('google_reviews_count', '127');
$showroom_image = kc_theme_img('showroom.jpg');
$showroom_logo  = kc_theme_img('logo-keuken-1-1.webp') ?: kc_theme_img('logo-keuken.webp');
$phone_link = preg_replace('/[^0-9+]/', '', $phone);
$whatsapp_link = 'https://wa.me/' . preg_replace('/\D+/', '', $phone_link);
$years_active  = max(1, (int) gmdate('Y') - (int) $founded);
$footer_links  = [
	[
		'title' => __('Collecties', 'keuken-centrum'),
		'links' => [
			[__('Moderne Keukens', 'keuken-centrum'), home_url('/#collections')],
			[__('Landelijke Keukens', 'keuken-centrum'), home_url('/#collections')],
			[__('Klassieke Keukens', 'keuken-centrum'), home_url('/#collections')],
			[__('Industriële Keukens', 'keuken-centrum'), home_url('/#collections')],
		],
	],
	[
		'title' => __('Ontwerptraject', 'keuken-centrum'),
		'links' => [
			[__('Start configurator', 'keuken-centrum'), home_url('/#brands')],
			[__('Kies uw stijl', 'keuken-centrum'), home_url('/#collections')],
			[__('Plan consultatie', 'keuken-centrum'), home_url('/#consultation')],
			[__('Bekijk showroom', 'keuken-centrum'), home_url('/#showroom')],
		],
	],
	[
		'title' => __('Meer informatie', 'keuken-centrum'),
		'links' => [
			[__('Ons verhaal', 'keuken-centrum'), home_url('/')],
			[__('Onze merken', 'keuken-centrum'), home_url('/#brands')],
			[__('Projecten', 'keuken-centrum'), home_url('/#reviews')],
			[__('Contact', 'keuken-centrum'), home_url('/contact')],
		],
	],
];
?>
<footer class="site-footer site-footer--react">
	<div class="site-footer__wash" aria-hidden="true"></div>

	<div class="site-shell site-footer__trust-row site-footer__trust-row--react">
		<div><span><?php echo esc_html($founded); ?></span><p><?php esc_html_e('Opgericht', 'keuken-centrum'); ?></p></div>
		<div><span>4.9★</span><p><?php esc_html_e('Google Reviews', 'keuken-centrum'); ?></p></div>
		<div><span><?php echo esc_html($reviews); ?>+</span><p><?php esc_html_e('Beoordelingen', 'keuken-centrum'); ?></p></div>
		<div><span><?php echo esc_html($years_active); ?>+</span><p><?php esc_html_e('Jaar ervaring', 'keuken-centrum'); ?></p></div>
	</div>

	<div class="site-shell site-footer__hero">
		<p class="site-footer__hero-eyebrow"><?php esc_html_e('Persoonlijk ontwerptraject', 'keuken-centrum'); ?></p>
		<h2 class="site-footer__hero-title"><?php esc_html_e('Klaar voor een keuken die echt bij uw', 'keuken-centrum'); ?> <em><?php esc_html_e('woning past?', 'keuken-centrum'); ?></em></h2>
		<p class="site-footer__hero-copy"><?php esc_html_e('Bezoek de showroom of start eerst online. Rustig, verfijnd en volledig in lijn met onze premium keukenbeleving.', 'keuken-centrum'); ?></p>
		<div class="site-footer__hero-actions">
			<a class="btn btn--primary btn--pill" href="<?php echo esc_url(home_url('/#brands')); ?>"><?php esc_html_e('Start configurator', 'keuken-centrum'); ?></a>
			<a class="btn btn--secondary btn--pill" href="<?php echo esc_url(home_url('/#contact')); ?>"><?php esc_html_e('Plan showroombezoek', 'keuken-centrum'); ?></a>
		</div>
	</div>

	<div class="site-shell site-footer__grid site-footer__grid--react">
		<div class="site-footer__column site-footer__brand">
			<div class="site-footer__logo site-footer__logo--react">
				<?php if (has_custom_logo()) : ?>
					<?php the_custom_logo(); ?>
				<?php elseif ($showroom_logo) : ?>
					<img src="<?php echo esc_url($showroom_logo); ?>" alt="<?php esc_attr_e('Keuken-Centrum Utrecht', 'keuken-centrum'); ?>" loading="lazy" decoding="async">
				<?php else : ?>
					<span>KEUKEN-CENTRUM</span>
				<?php endif; ?>
			</div>
			<p class="site-footer__eyebrow"><?php esc_html_e('Duitse precisie · Italiaanse elegantie', 'keuken-centrum'); ?></p>
			<h2 class="site-footer__title"><?php printf(esc_html__('Verfijnde Europese designkeukens en compromisloze kwaliteit sinds %s.', 'keuken-centrum'), esc_html($founded)); ?></h2>
			<div class="site-footer__socials">
				<a href="https://www.facebook.com/keukencentrumutrecht" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e('Facebook', 'keuken-centrum'); ?>">
					<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.43H7.08v-3.5h3.05V9.41c0-3.03 1.79-4.71 4.54-4.71 1.31 0 2.68.24 2.68.24v2.99h-1.52c-1.5 0-1.97.93-1.97 1.89v2.27h3.35l-.54 3.5h-2.81V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
					<span><?php esc_html_e('Facebook', 'keuken-centrum'); ?></span>
				</a>
				<a href="https://www.instagram.com/keukencentrum_utrecht/" target="_blank" rel="noopener noreferrer" aria-label="<?php esc_attr_e('Instagram', 'keuken-centrum'); ?>">
					<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.7 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.24-1.68 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.25-.15-4.77-1.69-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85.15-3.24 1.69-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zm0 5.67A4.17 4.17 0 1 0 12 16.17a4.17 4.17 0 0 0 0-8.34zm0 6.84A2.67 2.67 0 1 1 12 9.33a2.67 2.67 0 0 1 0 5.34zm5.31-7.01a.97.97 0 1 0 0-1.94.97.97 0 0 0 0 1.94z"/></svg>
					<span><?php esc_html_e('Instagram', 'keuken-centrum'); ?></span>
				</a>
				<a href="<?php echo esc_url('mailto:' . $email); ?>" aria-label="<?php esc_attr_e('E-mail', 'keuken-centrum'); ?>">
					<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm.8 1.6l7.2 5.4 7.2-5.4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4"/></svg>
					<span><?php echo esc_html(antispambot($email)); ?></span>
				</a>
			</div>
		</div>

		<?php foreach ($footer_links as $group) : ?>
			<div class="site-footer__column">
				<h3 class="site-footer__heading"><?php echo esc_html($group['title']); ?></h3>
				<ul class="site-footer__nav-list">
					<?php foreach ($group['links'] as $link) : ?>
						<li><a href="<?php echo esc_url($link[1]); ?>"><?php echo esc_html($link[0]); ?></a></li>
					<?php endforeach; ?>
				</ul>
			</div>
		<?php endforeach; ?>

		<div class="site-footer__column site-footer__column--contact">
			<h3 class="site-footer__heading"><?php esc_html_e('Contact & showroom', 'keuken-centrum'); ?></h3>
			<ul class="site-footer__contact-list site-footer__contact-list--react">
				<li><?php echo esc_html($address); ?></li>
				<li><?php echo esc_html($postal); ?></li>
				<li><a href="<?php echo esc_url('tel:' . $phone_link); ?>"><?php echo esc_html($phone); ?></a></li>
				<li><a href="<?php echo esc_url('mailto:' . $email); ?>"><?php echo esc_html(antispambot($email)); ?></a></li>
				<li><?php echo esc_html($hours); ?></li>
			</ul>

			<?php if ($showroom_image) : ?>
				<a class="site-footer__showroom site-footer__showroom--react" href="<?php echo esc_url(home_url('/#showroom')); ?>">
					<img src="<?php echo esc_url($showroom_image); ?>" alt="<?php esc_attr_e('Showroom Keuken-Centrum Utrecht', 'keuken-centrum'); ?>" loading="lazy" decoding="async">
					<span><small><?php esc_html_e('Premium showroom', 'keuken-centrum'); ?></small><?php esc_html_e('Zonnebaan 8, Utrecht', 'keuken-centrum'); ?> <b aria-hidden="true">→</b></span>
				</a>
			<?php endif; ?>
		</div>
	</div>

	<div class="site-shell site-footer__bottom site-footer__bottom--react">
		<p>&copy; <?php echo esc_html(date_i18n('Y')); ?> <?php esc_html_e('Keuken-Centrum Utrecht. Alle rechten voorbehouden.', 'keuken-centrum'); ?></p>
		<p><?php esc_html_e('Ontworpen voor generaties', 'keuken-centrum'); ?></p>
		<div class="site-footer__legal">
			<a href="<?php echo esc_url(home_url('/privacybeleid')); ?>"><?php esc_html_e('Privacybeleid', 'keuken-centrum'); ?></a>
			<a href="<?php echo esc_url(home_url('/cookiebeleid')); ?>"><?php esc_html_e('Cookiebeleid', 'keuken-centrum'); ?></a>
			<a href="<?php echo esc_url(home_url('/algemene-voorwaarden')); ?>"><?php esc_html_e('Algemene voorwaarden', 'keuken-centrum'); ?></a>
		</div>
	</div>
</footer>
<aside class="kc-sticky-bar" data-sticky-conversion hidden aria-label="<?php esc_attr_e('Snelle contactmogelijkheden', 'keuken-centrum'); ?>">
	<p><span><?php esc_html_e('Klaar voor uw keuken?', 'keuken-centrum'); ?></span><strong><?php esc_html_e('Plan uw showroombezoek', 'keuken-centrum'); ?></strong></p>
	<div class="kc-sticky-bar__actions">
		<a class="kc-sticky-bar__primary" href="<?php echo esc_url(home_url('/#showroom')); ?>"><?php esc_html_e('Plan showroom', 'keuken-centrum'); ?> <span aria-hidden="true">→</span></a>
		<a href="<?php echo esc_url('tel:' . $phone_link); ?>"><?php esc_html_e('Bel', 'keuken-centrum'); ?></a>
		<a href="<?php echo esc_url($whatsapp_link); ?>" target="_blank" rel="noopener"><?php esc_html_e('WhatsApp', 'keuken-centrum'); ?></a>
	</div>
</aside>
<?php wp_footer(); ?>
</body>
</html>
