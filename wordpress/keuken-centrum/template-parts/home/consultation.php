<?php
/**
 * Home consultation section — React consultation parity.
 *
 * @package Keuken_Centrum
 */

$phone     = (string) kc_get_option('contact_phone', '030 241 5122');
$email     = (string) kc_get_option('contact_email', 'info@keuken-centrum.nl');
$home_cons = function_exists( 'kc_home_consultation_data' ) ? kc_home_consultation_data() : null;
$cta_label = __('Plan consultatie', 'keuken-centrum');
$form_shortcode = (string) kc_get_option('consultation_form_shortcode', '');
$cons_eyebrow = $home_cons['eyebrow'] ?? 'Persoonlijk Ontwerpgesprek';
$cons_heading = $home_cons['heading'] ?? 'Boek uw persoonlijk';
$cons_heading_em = $home_cons['heading_em'] ?? 'ontwerpconsult.';
$cons_lede = $home_cons['lede'] ?? 'Neem uw eerste keuzes mee naar de showroom in Utrecht en bespreek ze met een adviseur die materiaal, routing, apparatuur en budget zorgvuldig met u doorneemt.';
$cons_form_eyebrow = $home_cons['form_eyebrow'] ?? 'Consultatie aanvraag';
$cons_form_title = $home_cons['form_title'] ?? 'Vertel ons kort wat u wilt bespreken.';
$gallery_slides = function_exists( 'kc_official_consultation_gallery' ) ? kc_official_consultation_gallery() : [];
if ( ! $gallery_slides ) {
	$gallery_slides = array_values(
		array_filter(
			[
				[
					'src'   => kc_theme_img('collection-modern.jpg'),
					'label' => 'Modern Lijn',
					'tag'   => 'Greeploos',
				],
				[
					'src'   => kc_theme_img('collection-minimal.jpg'),
					'label' => 'Minimaal Design',
					'tag'   => 'Mat Wit',
				],
				[
					'src'   => kc_theme_img('collection-scandi.jpg'),
					'label' => 'Scandinavisch',
					'tag'   => 'Eiken',
				],
				[
					'src'   => kc_theme_img('collection-warm.jpg'),
					'label' => 'Warm Atelier',
					'tag'   => 'Hout',
				],
				[
					'src'   => kc_theme_img('hero-kitchen.jpg'),
					'label' => 'Signatuur Keuken',
					'tag'   => 'Premium',
				],
				[
					'src'   => kc_theme_img('craftsmanship.jpg'),
					'label' => 'Vakmanschap',
					'tag'   => 'Handwerk',
				],
				[
					'src'   => kc_theme_img('showroom.jpg'),
					'label' => 'Showroomvloer',
					'tag'   => 'Utrecht',
				],
				[
					'src'   => kc_theme_img('mat-marble.jpg'),
					'label' => 'Italiaans Marmer',
					'tag'   => 'Calacatta',
				],
			],
			static fn( $slide ) => ! empty( $slide['src'] )
		)
	);
}
$budgets = [
	'€ 10.000 tot € 20.000',
	'€ 20.000 tot € 35.000',
	'€ 35.000 tot € 55.000',
	'€ 55.000+',
];
$atelier_promises = [
	[
		'icon'  => 'clock',
		'label' => __('Reactie binnen 24 uur', 'keuken-centrum'),
	],
	[
		'icon'  => 'shield',
		'label' => __('Vrijblijvend & vertrouwelijk', 'keuken-centrum'),
	],
	[
		'icon'  => 'calendar',
		'label' => __('Op locatie of in showroom', 'keuken-centrum'),
	],
];
$atelier_benefits = [
	__('Persoonlijk ontwerpgesprek', 'keuken-centrum'),
	__('Materiaalkeuze bespreking', 'keuken-centrum'),
	__('Technische planning', 'keuken-centrum'),
	__('Budgetconsult', 'keuken-centrum'),
	__('Showroomrondleiding', 'keuken-centrum'),
];
$trust_metrics = [
	[
		'value' => '45+',
		'label' => __('Jaar ervaring', 'keuken-centrum'),
	],
	[
		'value' => '4',
		'label' => __('Premium Europese merken', 'keuken-centrum'),
	],
	[
		'value' => '1000+',
		'label' => __('Materiaalcombinaties', 'keuken-centrum'),
	],
	[
		'value' => '&lt; 24u',
		'label' => __('Reactietijd', 'keuken-centrum'),
	],
];
$next_steps = [
	['number' => '01', 'title' => __('Aanvraag ontvangen', 'keuken-centrum'), 'copy' => __('Uw aanvraag wordt persoonlijk beoordeeld', 'keuken-centrum')],
	['number' => '02', 'title' => __('Persoonlijk contact', 'keuken-centrum'), 'copy' => __('Een adviseur belt u binnen 24 uur', 'keuken-centrum')],
	['number' => '03', 'title' => __('Showroomafspraak', 'keuken-centrum'), 'copy' => __('Bezoek op een moment dat u uitkomt', 'keuken-centrum')],
	['number' => '04', 'title' => __('Ontwerpvoorstel', 'keuken-centrum'), 'copy' => __('Ontvang uw persoonlijk ontwerpvoorstel', 'keuken-centrum')],
];
?>
<section class="consultation-section consultation-section--react" id="consultation">
	<div class="consultation-section__texture" aria-hidden="true"></div>
	<div class="consultation-section__glow" aria-hidden="true"></div>

	<?php /* React: section-shell padding lives on the inner shell, not the section. */ ?>
	<div class="site-shell section-shell consultation-section__inner">
		<header class="consultation-section__header">
			<?php kc_section_chapter('10', __('Consultatie', 'keuken-centrum')); ?>
			<div class="consultation-section__badge">
				<span></span>
				<?php echo esc_html( $cons_eyebrow ); ?>
			</div>
			<h2 class="section-title">
				<?php echo esc_html( $cons_heading ); ?>
				<em class="text-accent"><?php echo esc_html( $cons_heading_em ); ?></em>
			</h2>
			<p class="consultation-section__lede"><?php echo esc_html( $cons_lede ); ?></p>
		</header>

		<?php if ($gallery_slides) : ?>
			<div class="consultation-gallery consultation-gallery--react" data-consultation-gallery aria-label="<?php esc_attr_e('Keukeninspiratie', 'keuken-centrum'); ?>">
				<div class="consultation-gallery__track">
					<?php foreach (array_merge($gallery_slides, $gallery_slides) as $slide) : ?>
						<figure class="consultation-gallery__slide">
							<img src="<?php echo esc_url( $slide['src'] ); ?>" alt="<?php echo esc_attr( $slide['label'] ); ?>" loading="lazy" decoding="async">
							<figcaption>
								<span class="consultation-gallery__tag">
									<span class="consultation-gallery__tag-dot" aria-hidden="true"></span>
									<span><?php echo esc_html( $slide['tag'] ); ?></span>
								</span>
								<span class="consultation-gallery__title"><?php echo esc_html( $slide['label'] ); ?></span>
							</figcaption>
						</figure>
					<?php endforeach; ?>
				</div>
			</div>
		<?php endif; ?>

		<div class="consultation-panel consultation-panel--react">
			<aside class="consultation-panel__atelier">
				<div class="consultation-panel__atelier-top">
					<div class="consultation-panel__atelier-pill">
						<span class="consultation-panel__atelier-pill-dot" aria-hidden="true"></span>
						<?php esc_html_e('Atelier', 'keuken-centrum'); ?>
					</div>
					<h3><?php esc_html_e('Persoonlijk', 'keuken-centrum'); ?><br><em><?php esc_html_e('ontwerpgesprek', 'keuken-centrum'); ?></em></h3>
					<p><?php esc_html_e('Een vertrouwelijk gesprek met een senior ontwerper. Zonder verkoopdruk.', 'keuken-centrum'); ?></p>
				</div>

				<div class="consultation-panel__atelier-middle">
					<ul class="consultation-panel__promises">
						<?php foreach ( $atelier_promises as $promise ) : ?>
							<li>
								<span class="consultation-panel__list-icon" aria-hidden="true"><?php echo kc_icon_brand( $promise['icon'] ); ?></span>
								<span><?php echo esc_html( $promise['label'] ); ?></span>
							</li>
						<?php endforeach; ?>
					</ul>

					<ul class="consultation-panel__benefits">
						<?php foreach ( $atelier_benefits as $benefit ) : ?>
							<li>
								<span class="consultation-panel__list-icon" aria-hidden="true"><?php echo kc_icon_brand( 'check' ); ?></span>
								<span><?php echo esc_html( $benefit ); ?></span>
							</li>
						<?php endforeach; ?>
					</ul>
				</div>

				<div class="consultation-panel__contact">
					<a href="<?php echo esc_url(home_url('/#showroom')); ?>">
						<span class="consultation-panel__contact-icon" aria-hidden="true"><?php echo kc_icon_brand( 'home' ); ?></span>
						<span><?php esc_html_e('Zonnebaan 8, Utrecht', 'keuken-centrum'); ?></span>
					</a>
					<a href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>">
						<span class="consultation-panel__contact-icon" aria-hidden="true"><?php echo kc_icon_brand( 'phone' ); ?></span>
						<span><?php echo esc_html($phone); ?></span>
					</a>
					<a href="<?php echo esc_url('mailto:' . $email); ?>">
						<span class="consultation-panel__contact-icon" aria-hidden="true"><?php echo kc_icon_brand( 'mail' ); ?></span>
						<span><?php echo esc_html(antispambot($email)); ?></span>
					</a>
				</div>
			</aside>

			<div class="consultation-form-card consultation-form-card--react">
				<div class="consultation-form-card__head">
					<p class="consultation-form-card__eyebrow"><?php echo esc_html( $cons_form_eyebrow ); ?></p>
					<h3><?php echo esc_html( $cons_form_title ); ?></h3>
				</div>

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
								<span><?php esc_html_e('Voorkeur showroom', 'keuken-centrum'); ?></span>
								<span class="consultation-lead-form__select-wrap">
									<select name="showroom">
										<option><?php esc_html_e('Utrecht, Zonnebaan 8', 'keuken-centrum'); ?></option>
										<option><?php esc_html_e('Video consultation', 'keuken-centrum'); ?></option>
										<option><?php esc_html_e('Telefonisch intakegesprek', 'keuken-centrum'); ?></option>
									</select>
									<span class="consultation-lead-form__select-icon" aria-hidden="true"><?php echo kc_icon_brand( 'arrow-down' ); ?></span>
								</span>
							</label>
							<label>
								<span><?php esc_html_e('Projectbudget', 'keuken-centrum'); ?></span>
								<span class="consultation-lead-form__select-wrap">
									<select name="budget">
										<?php foreach ($budgets as $budget) : ?>
											<option><?php echo esc_html($budget); ?></option>
										<?php endforeach; ?>
									</select>
									<span class="consultation-lead-form__select-icon" aria-hidden="true"><?php echo kc_icon_brand( 'arrow-down' ); ?></span>
								</span>
							</label>
						</div>

						<label>
							<span><?php esc_html_e('Gewenste datum', 'keuken-centrum'); ?></span>
							<input type="date" name="datum">
						</label>

						<label>
							<span><?php esc_html_e('Uw bericht', 'keuken-centrum'); ?></span>
							<textarea name="bericht" rows="4" placeholder="<?php esc_attr_e('Vertel iets over uw woning, stijlvoorkeur, planning of budgetrichting.', 'keuken-centrum'); ?>"></textarea>
						</label>

						<div class="consultation-lead-form__stats">
							<?php foreach ( $trust_metrics as $metric ) : ?>
								<div>
									<strong><?php echo wp_kses_post( $metric['value'] ); ?></strong>
									<span><?php echo esc_html( $metric['label'] ); ?></span>
								</div>
							<?php endforeach; ?>
						</div>

						<div class="consultation-lead-form__submit">
							<p><?php esc_html_e('Door te verzenden gaat u akkoord met ons vertrouwelijkheidsbeleid.', 'keuken-centrum'); ?></p>
							<button class="premium-pill-button premium-pill-button--blue premium-pill-button--sm" type="submit">
								<span class="premium-pill-button__label"><?php echo esc_html($cta_label); ?></span>
								<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
							</button>
						</div>
					</form>
				<?php endif; ?>
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
