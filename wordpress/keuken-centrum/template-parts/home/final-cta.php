<?php
/**
 * Home final CTA section — React CTA parity.
 *
 * @package Keuken_Centrum
 */
$concrete = kc_theme_img('mat-concrete.jpg');
$phone    = kc_get_option('contact_phone', '030 241 5122');
$email    = kc_get_option('contact_email', 'info@keuken-centrum.nl');
?>
<section class="final-cta-react"<?php echo $concrete ? ' style="--final-concrete:url(' . esc_url($concrete) . ')"' : ''; ?>>
	<div class="site-shell">
		<div class="final-cta-react-heading"><p class="section-eyebrow"><?php esc_html_e('Begin uw reis', 'keuken-centrum'); ?></p><h2><?php esc_html_e('Klaar voor uw droomkeuken?', 'keuken-centrum'); ?></h2><p><?php esc_html_e('Kies de manier die voor u het prettigst voelt. Wij zorgen voor een warm welkom.', 'keuken-centrum'); ?></p></div>
		<div class="final-cta-react-cards">
			<a href="<?php echo esc_url(home_url('/contact')); ?>" class="final-cta-react-card"><span>01</span><i>⌂</i><h3><?php esc_html_e('Bezoek de showroom', 'keuken-centrum'); ?></h3><p><?php esc_html_e('Ervaar materialen en opstellingen in Utrecht.', 'keuken-centrum'); ?></p><b><?php esc_html_e('Plan een afspraak', 'keuken-centrum'); ?> →</b></a>
			<a href="tel:<?php echo esc_attr(preg_replace('/[^0-9+]/', '', $phone)); ?>" class="final-cta-react-card"><span>02</span><i>↗</i><h3><?php esc_html_e('Bel ons', 'keuken-centrum'); ?></h3><p><?php echo esc_html($phone); ?></p><b><?php esc_html_e('Neem direct contact op', 'keuken-centrum'); ?> →</b></a>
			<a href="mailto:<?php echo esc_attr(antispambot($email)); ?>" class="final-cta-react-card"><span>03</span><i>✉</i><h3><?php esc_html_e('Stuur een e-mail', 'keuken-centrum'); ?></h3><p><?php echo esc_html(antispambot($email)); ?></p><b><?php esc_html_e('Vertel ons uw wensen', 'keuken-centrum'); ?> →</b></a>
		</div>
	</div>
</section>
