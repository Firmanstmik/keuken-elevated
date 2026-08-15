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
$form_shortcode = (string) kc_get_option('consultation_form_shortcode', '');
$gallery_images = array_filter(
	[
		kc_theme_img('collection-modern.jpg'),
		kc_theme_img('collection-warm.jpg'),
		kc_theme_img('collection-minimal.jpg'),
		kc_theme_img('collection-scandi.jpg'),
	]
);
?>
<section class="section-shell consultation-section" id="consultation">
	<div class="consultation-section__texture" aria-hidden="true"></div>
	<div class="site-shell consultation-section__grid">
		<div class="consultation-section__content">
			<?php kc_section_chapter('07', __('Adviesgesprek', 'keuken-centrum')); ?>
			<p class="section-eyebrow"><?php esc_html_e('Persoonlijk advies', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Plan een gesprek waarin wensen, stijl en praktische keuzes samenkomen.', 'keuken-centrum'); ?></h2>
			<p class="consultation-section__lede"><?php esc_html_e('Ideaal voor wie nog oriënteert of al met een plattegrond komt. We vertalen uw wensen naar een keuken die mooi voelt én slim werkt.', 'keuken-centrum'); ?></p>
			<ul class="consultation-benefits">
				<li><span>01</span><?php esc_html_e('Vrijblijvend advies van een vaste keukenadviseur', 'keuken-centrum'); ?></li>
				<li><span>02</span><?php esc_html_e('Materialen, apparatuur en indeling naast elkaar ervaren', 'keuken-centrum'); ?></li>
				<li><span>03</span><?php esc_html_e('Heldere vervolgstappen en een voorstel op maat', 'keuken-centrum'); ?></li>
			</ul>
			<div class="consultation-metrics">
				<div><strong>45+</strong><span><?php esc_html_e('jaar ervaring', 'keuken-centrum'); ?></span></div>
				<div><strong>4.8/5</strong><span><?php esc_html_e('Google beoordeling', 'keuken-centrum'); ?></span></div>
				<div><strong>1</strong><span><?php esc_html_e('vast aanspreekpunt', 'keuken-centrum'); ?></span></div>
			</div>
		</div>

		<div class="consultation-form-card">
			<p class="consultation-form-card__eyebrow"><?php esc_html_e('Uw afspraak', 'keuken-centrum'); ?></p>
			<h3><?php esc_html_e('Vertel ons waar u staat.', 'keuken-centrum'); ?></h3>
			<p class="consultation-form-card__intro"><?php esc_html_e('We nemen binnen één werkdag contact met u op voor een passend moment.', 'keuken-centrum'); ?></p>
			<?php if ($form_shortcode && shortcode_exists(str_replace(['[', ']'], '', strtok($form_shortcode, ' ')))) : ?>
				<div class="consultation-form-card__cf7"><?php echo do_shortcode($form_shortcode); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
			<?php else : ?>
				<form class="consultation-lead-form" action="<?php echo esc_url('mailto:' . $email); ?>" method="post" enctype="text/plain">
					<label><?php esc_html_e('Naam', 'keuken-centrum'); ?><input type="text" name="naam" autocomplete="name" required></label>
					<label><?php esc_html_e('E-mailadres', 'keuken-centrum'); ?><input type="email" name="email" autocomplete="email" required></label>
					<label><?php esc_html_e('Telefoonnummer', 'keuken-centrum'); ?><input type="tel" name="telefoon" autocomplete="tel"></label>
					<label><?php esc_html_e('Waar kunnen we mee helpen?', 'keuken-centrum'); ?><textarea name="bericht" rows="3"></textarea></label>
					<button class="btn btn--primary" type="submit"><?php echo esc_html($cta_label); ?></button>
				</form>
			<?php endif; ?>
			<p class="consultation-form-card__contact"><?php esc_html_e('Liever direct contact?', 'keuken-centrum'); ?> <a href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a><br><?php echo esc_html($hours); ?></p>
		</div>
	</div>
	<?php if ($gallery_images) : ?>
		<div class="consultation-gallery" aria-label="<?php esc_attr_e('Keukeninspiratie', 'keuken-centrum'); ?>">
			<div class="consultation-gallery__track">
				<?php foreach (array_merge($gallery_images, $gallery_images) as $image) : ?>
					<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async">
				<?php endforeach; ?>
			</div>
		</div>
	<?php endif; ?>
</section>
