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
$showroom_image = kc_theme_img('showroom.jpg');
$phone_link = preg_replace('/[^0-9+]/', '', $phone);
$whatsapp_link = 'https://wa.me/' . preg_replace('/\D+/', '', $phone_link);
?>
<footer class="site-footer">
	<div class="site-shell site-footer__trust-row">
		<div><span>45+</span><p><?php esc_html_e('jaar keukenvakmanschap', 'keuken-centrum'); ?></p></div>
		<div><span>4.8/5</span><p><?php esc_html_e('Google beoordeling', 'keuken-centrum'); ?></p></div>
		<div><span>1</span><p><?php esc_html_e('vast aanspreekpunt', 'keuken-centrum'); ?></p></div>
		<div><span>Utrecht</span><p><?php esc_html_e('showroom onder één dak', 'keuken-centrum'); ?></p></div>
	</div>
	<div class="site-shell site-footer__grid">
		<div class="site-footer__column site-footer__brand">
			<div class="site-footer__logo">
				<?php if (has_custom_logo()) : ?>
					<?php the_custom_logo(); ?>
				<?php else : ?>
					<span>KEUKEN-CENTRUM</span>
				<?php endif; ?>
			</div>
			<p class="site-footer__eyebrow"><?php esc_html_e('Keuken-Centrum Utrecht', 'keuken-centrum'); ?></p>
			<h2 class="site-footer__title"><?php esc_html_e('Premium keukens, persoonlijke begeleiding en showroomadvies sinds 1978.', 'keuken-centrum'); ?></h2>
		</div>

		<div class="site-footer__column">
			<h3 class="site-footer__heading"><?php esc_html_e('Contact', 'keuken-centrum'); ?></h3>
			<ul class="site-footer__contact-list">
				<li><?php echo esc_html($address); ?></li>
				<li><?php echo esc_html($postal); ?></li>
				<li><a href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a></li>
				<li><a href="<?php echo esc_url('mailto:' . $email); ?>"><?php echo esc_html($email); ?></a></li>
				<li><?php echo esc_html($hours); ?></li>
			</ul>
		</div>

		<div class="site-footer__column">
			<h3 class="site-footer__heading"><?php esc_html_e('Snel naar', 'keuken-centrum'); ?></h3>
			<?php
			wp_nav_menu(
				[
					'theme_location' => 'footer',
					'container'      => 'nav',
					'container_class'=> 'footer-nav',
					'menu_class'     => 'footer-nav__list',
					'fallback_cb'    => false,
				]
			);
			?>
		</div>

		<?php if ($showroom_image) : ?>
			<a class="site-footer__showroom" href="<?php echo esc_url(home_url('/#showroom')); ?>">
				<img src="<?php echo esc_url($showroom_image); ?>" alt="<?php esc_attr_e('Showroom Keuken-Centrum Utrecht', 'keuken-centrum'); ?>" loading="lazy" decoding="async">
				<span><small><?php esc_html_e('Bezoek onze showroom', 'keuken-centrum'); ?></small><?php esc_html_e('Zonnebaan 8, Utrecht', 'keuken-centrum'); ?> <b aria-hidden="true">→</b></span>
			</a>
		<?php endif; ?>
	</div>

	<div class="site-shell site-footer__bottom">
		<p>&copy; <?php echo esc_html(date_i18n('Y')); ?> <?php esc_html_e('Keuken-Centrum Utrecht, sinds 1978.', 'keuken-centrum'); ?></p>
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
