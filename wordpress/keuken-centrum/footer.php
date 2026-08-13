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
?>
<footer class="site-footer">
	<div class="site-shell site-footer__grid">
		<div class="site-footer__column">
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
	</div>

	<div class="site-shell site-footer__bottom">
		<p>&copy; <?php echo esc_html(date_i18n('Y')); ?> <?php esc_html_e('Keuken-Centrum Utrecht, sinds 1978.', 'keuken-centrum'); ?></p>
	</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
