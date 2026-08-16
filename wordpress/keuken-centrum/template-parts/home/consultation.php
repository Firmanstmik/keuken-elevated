<?php
/**
 * Home consultation section — React consultation parity.
 *
 * @package Keuken_Centrum
 */

$phone     = (string) kc_get_option('contact_phone', '030 241 5122');
$email     = (string) kc_get_option('contact_email', 'info@keuken-centrum.nl');
$hours     = (string) kc_get_option('contact_hours', 'Ma t/m za op afspraak, met uitgebreid showroomadvies.');
$cta_label = (string) kc_get_option('consultation_cta_label', 'Plan vrijblijvend advies');
$cta_url   = (string) kc_get_option('consultation_cta_url', home_url('/contact'));
$form_shortcode = (string) kc_get_option('consultation_form_shortcode', '');
$gallery_images = array_filter(
	[
		kc_theme_img('collection-modern.jpg'),
		kc_theme_img('collection-warm.jpg'),
		kc_theme_img('collection-minimal.jpg'),
		kc_theme_img('collection-scandi.jpg'),
		kc_theme_img('hero-kitchen.jpg'),
		kc_theme_img('craftsmanship.jpg'),
		kc_theme_img('showroom.jpg'),
	]
);
$budgets = [
	'€ 10.000 tot € 20.000',
	'€ 20.000 tot € 35.000',
	'€ 35.000 tot € 55.000',
	'€ 55.000+',
];
$next_steps = [
	['number' => '01', 'title' => __('Aanvraag ontvangen', 'keuken-centrum'), 'copy' => __('Uw aanvraag wordt persoonlijk beoordeeld.', 'keuken-centrum')],
	['number' => '02', 'title' => __('Persoonlijk contact', 'keuken-centrum'), 'copy' => __('Een adviseur belt u binnen 24 uur.', 'keuken-centrum')],
	['number' => '03', 'title' => __('Showroomafspraak', 'keuken-centrum'), 'copy' => __('We stemmen een passend moment met u af.', 'keuken-centrum')],
	['number' => '04', 'title' => __('Ontwerpvoorstel', 'keuken-centrum'), 'copy' => __('U ontvangt een voorstel dat aansluit op uw ruimte en stijl.', 'keuken-centrum')],
];
?>
<section class="section-shell consultation-section consultation-section--react" id="consultation">
	<div class="consultation-section__texture" aria-hidden="true"></div>
	<div class="consultation-section__glow" aria-hidden="true"></div>

	<div class="site-shell consultation-section__inner">
		<header class="consultation-section__header">
			<?php kc_section_chapter('10', __('Consultatie', 'keuken-centrum')); ?>
			<div class="consultation-section__badge">
				<span></span>
				<?php esc_html_e('Persoonlijk ontwerpgesprek', 'keuken-centrum'); ?>
			</div>
			<h2 class="section-title">
				<?php esc_html_e('Boek uw persoonlijk', 'keuken-centrum'); ?>
				<em class="text-accent"><?php esc_html_e('ontwerpconsult.', 'keuken-centrum'); ?></em>
			</h2>
			<p class="consultation-section__lede"><?php esc_html_e('Neem uw eerste keuzes mee naar de showroom in Utrecht en bespreek ze met een adviseur die materiaal, routing, apparatuur en budget zorgvuldig met u doorneemt.', 'keuken-centrum'); ?></p>
		</header>

		<?php if ($gallery_images) : ?>
			<div class="consultation-gallery consultation-gallery--react" data-consultation-gallery aria-label="<?php esc_attr_e('Keukeninspiratie', 'keuken-centrum'); ?>">
				<div class="consultation-gallery__track">
					<?php foreach (array_merge($gallery_images, $gallery_images) as $index => $image) : ?>
						<figure class="consultation-gallery__slide">
							<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async">
							<figcaption><?php echo esc_html($index % 2 === 0 ? __('Showroom Selectie', 'keuken-centrum') : __('Materiaaldetail', 'keuken-centrum')); ?></figcaption>
						</figure>
					<?php endforeach; ?>
				</div>
			</div>
		<?php endif; ?>

		<div class="consultation-panel consultation-panel--react">
			<aside class="consultation-panel__atelier">
				<div>
					<div class="consultation-panel__atelier-pill"><?php esc_html_e('Atelier', 'keuken-centrum'); ?></div>
					<h3><?php esc_html_e('Persoonlijk', 'keuken-centrum'); ?><br><em><?php esc_html_e('ontwerpgesprek', 'keuken-centrum'); ?></em></h3>
					<p><?php esc_html_e('Een vertrouwelijk gesprek met een senior ontwerper. Zonder verkoopdruk, met alle ruimte voor materiaal, routing en sfeer.', 'keuken-centrum'); ?></p>
				</div>

				<ul class="consultation-panel__promises">
					<li><?php esc_html_e('Reactie binnen 24 uur', 'keuken-centrum'); ?></li>
					<li><?php esc_html_e('Vrijblijvend en vertrouwelijk', 'keuken-centrum'); ?></li>
					<li><?php esc_html_e('Op locatie of in showroom', 'keuken-centrum'); ?></li>
				</ul>

				<ul class="consultation-panel__benefits">
					<li><?php esc_html_e('Persoonlijk ontwerpgesprek', 'keuken-centrum'); ?></li>
					<li><?php esc_html_e('Materiaalkeuze bespreking', 'keuken-centrum'); ?></li>
					<li><?php esc_html_e('Technische planning', 'keuken-centrum'); ?></li>
					<li><?php esc_html_e('Budgetconsult', 'keuken-centrum'); ?></li>
					<li><?php esc_html_e('Showroomrondleiding', 'keuken-centrum'); ?></li>
				</ul>

				<div class="consultation-panel__contact">
					<a href="<?php echo esc_url(home_url('/#showroom')); ?>"><?php esc_html_e('Zonnebaan 8, Utrecht', 'keuken-centrum'); ?></a>
					<a href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a>
					<a href="<?php echo esc_url('mailto:' . $email); ?>"><?php echo esc_html(antispambot($email)); ?></a>
				</div>
			</aside>

			<div class="consultation-form-card consultation-form-card--react">
				<p class="consultation-form-card__eyebrow"><?php esc_html_e('Consultatie aanvraag', 'keuken-centrum'); ?></p>
				<h3><?php esc_html_e('Vertel ons kort wat u wilt bespreken.', 'keuken-centrum'); ?></h3>

				<?php if ($form_shortcode) : ?>
					<div class="consultation-form-card__cf7 consultation-form-card__cf7--react"><?php echo do_shortcode($form_shortcode); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
				<?php else : ?>
					<form class="consultation-lead-form consultation-lead-form--react" action="<?php echo esc_url('mailto:' . $email); ?>" method="post" enctype="text/plain">
						<div class="consultation-lead-form__grid">
							<label>
								<span><?php esc_html_e('Volledige naam', 'keuken-centrum'); ?></span>
								<input type="text" name="naam" autocomplete="name" placeholder="<?php esc_attr_e('Uw volledige naam', 'keuken-centrum'); ?>" required>
							</label>
							<label>
								<span><?php esc_html_e('E-mailadres', 'keuken-centrum'); ?></span>
								<input type="email" name="email" autocomplete="email" placeholder="naam@voorbeeld.nl" required>
							</label>
						</div>

						<label>
							<span><?php esc_html_e('Telefoonnummer', 'keuken-centrum'); ?></span>
							<input type="tel" name="telefoon" autocomplete="tel" placeholder="+31 ...">
						</label>

						<div class="consultation-lead-form__grid">
							<label>
								<span><?php esc_html_e('Voorkeur afspraak', 'keuken-centrum'); ?></span>
								<select name="showroom">
									<option><?php esc_html_e('Utrecht, Zonnebaan 8', 'keuken-centrum'); ?></option>
									<option><?php esc_html_e('Video consultation', 'keuken-centrum'); ?></option>
									<option><?php esc_html_e('Telefonisch intakegesprek', 'keuken-centrum'); ?></option>
								</select>
							</label>
							<label>
								<span><?php esc_html_e('Projectbudget', 'keuken-centrum'); ?></span>
								<select name="budget">
									<?php foreach ($budgets as $budget) : ?>
										<option><?php echo esc_html($budget); ?></option>
									<?php endforeach; ?>
								</select>
							</label>
						</div>

						<label>
							<span><?php esc_html_e('Gewenste datum', 'keuken-centrum'); ?></span>
							<input type="date" name="datum">
						</label>

						<label>
							<span><?php esc_html_e('Uw bericht', 'keuken-centrum'); ?></span>
							<textarea name="bericht" rows="5" placeholder="<?php esc_attr_e('Vertel iets over uw woning, stijlvoorkeur, planning of budgetrichting.', 'keuken-centrum'); ?>"></textarea>
						</label>

						<div class="consultation-lead-form__stats">
							<div><strong>45+</strong><span><?php esc_html_e('Jaar ervaring', 'keuken-centrum'); ?></span></div>
							<div><strong>4</strong><span><?php esc_html_e('Premium merken', 'keuken-centrum'); ?></span></div>
							<div><strong>1000+</strong><span><?php esc_html_e('Materiaalcombinaties', 'keuken-centrum'); ?></span></div>
							<div><strong>&lt; 24u</strong><span><?php esc_html_e('Reactietijd', 'keuken-centrum'); ?></span></div>
						</div>

						<div class="consultation-lead-form__submit">
							<p><?php esc_html_e('Door te verzenden gaat u akkoord met ons vertrouwelijkheidsbeleid.', 'keuken-centrum'); ?></p>
							<button class="btn btn--primary btn--pill" type="submit"><?php echo esc_html($cta_label); ?></button>
						</div>
					</form>
				<?php endif; ?>

				<p class="consultation-form-card__contact">
					<?php esc_html_e('Liever direct contact?', 'keuken-centrum'); ?>
					<a href="<?php echo esc_url($cta_url); ?>"><?php esc_html_e('Plan uw afspraak', 'keuken-centrum'); ?></a>
					<span><?php echo esc_html($hours); ?></span>
				</p>
			</div>
		</div>

		<div class="consultation-next">
			<p class="consultation-next__label"><?php esc_html_e('Wat u hierna kunt verwachten', 'keuken-centrum'); ?></p>
			<div class="consultation-next__grid">
				<?php foreach ($next_steps as $step) : ?>
					<article class="consultation-next__card">
						<span><?php echo esc_html($step['number']); ?></span>
						<h3><?php echo esc_html($step['title']); ?></h3>
						<p><?php echo esc_html($step['copy']); ?></p>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
