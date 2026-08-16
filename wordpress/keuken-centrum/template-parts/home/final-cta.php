<?php
/**
 * Home final CTA section — React CTA parity.
 *
 * @package Keuken_Centrum
 */

$concrete = kc_theme_img('mat-concrete.jpg');
$phone    = (string) kc_get_option('contact_phone', '030 241 5122');
$email    = (string) kc_get_option('contact_email', 'info@keuken-centrum.nl');
$founded  = (string) kc_get_option('founded_year', '1978');
$actions  = [
	[
		'number'      => '01',
		'title'       => __('Plan showroombezoek', 'keuken-centrum'),
		'description' => __('Bezoek onze showroom in Utrecht en bespreek uw keukenwensen met een specialist die met u meedenkt.', 'keuken-centrum'),
		'href'        => home_url('/#showroom'),
		'pill'        => __('Maak afspraak', 'keuken-centrum'),
		'icon'        => 'house',
	],
	[
		'number'      => '02',
		'title'       => __('Bel direct met een adviseur', 'keuken-centrum'),
		'description' => $phone,
		'href'        => 'tel:' . preg_replace('/[^0-9+]/', '', $phone),
		'pill'        => __('Bel nu', 'keuken-centrum'),
		'icon'        => 'phone',
	],
	[
		'number'      => '03',
		'title'       => __('Vraag een voorstel aan', 'keuken-centrum'),
		'description' => __('Deel uw wensen of bestaande offerte en ontvang een zorgvuldig voorbereid voorstel.', 'keuken-centrum'),
		'href'        => 'mailto:' . $email,
		'pill'        => __('Stuur e-mail', 'keuken-centrum'),
		'icon'        => 'mail',
	],
];

$cta_icon = static function (string $icon): string {
	switch ($icon) {
		case 'house':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 11.2L12 5l7.5 6.2v7.3a1 1 0 0 1-1 1h-4.4v-5.4H9.9v5.4H5.5a1 1 0 0 1-1-1z"/></svg>';
		case 'phone':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 4.8h2.7l1.1 4.2-1.6 1.6a15 15 0 0 0 3.4 3.4l1.6-1.6 4.2 1.1v2.7c0 .6-.4 1-.9 1A13.8 13.8 0 0 1 6.8 5.7c0-.5.4-.9 1-.9z"/></svg>';
		default:
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 7.2A1.7 1.7 0 0 1 6.2 5.5h11.6a1.7 1.7 0 0 1 1.7 1.7v9.6a1.7 1.7 0 0 1-1.7 1.7H6.2a1.7 1.7 0 0 1-1.7-1.7zm1.5.5l5.9 4.7 5.9-4.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/></svg>';
	}
};
?>
<section class="final-cta-react final-cta-react--v2" id="contact"<?php echo $concrete ? ' style="--final-concrete:url(' . esc_url($concrete) . ')"' : ''; ?>>
	<div class="site-shell final-cta-react__inner">
		<?php kc_section_chapter('08', __('Start ontwerp', 'keuken-centrum')); ?>

		<header class="final-cta-react-heading final-cta-react-heading--v2">
			<div class="final-cta-react-heading__pills">
				<span><?php esc_html_e('Begin uw reis', 'keuken-centrum'); ?></span>
				<span><?php esc_html_e('Persoonlijk ontwerp', 'keuken-centrum'); ?></span>
			</div>
			<h2>
				<?php esc_html_e('Klaar voor uw', 'keuken-centrum'); ?>
				<em><?php esc_html_e('droomkeuken?', 'keuken-centrum'); ?></em>
			</h2>
			<p><?php esc_html_e('Van eerste inspiratie tot installatie: wij begeleiden u persoonlijk naar een keuken die klopt in stijl, functie en afwerking.', 'keuken-centrum'); ?></p>
			<div class="final-cta-react-heading__actions">
				<a class="btn btn--primary btn--pill" href="<?php echo esc_url(home_url('/#brands')); ?>"><?php esc_html_e('Start configurator', 'keuken-centrum'); ?></a>
				<a class="btn btn--secondary btn--pill" href="<?php echo esc_url(home_url('/#consultation')); ?>"><?php esc_html_e('Boek consultatie', 'keuken-centrum'); ?></a>
			</div>
		</header>

		<div class="final-cta-react-cards final-cta-react-cards--v2">
			<?php foreach ($actions as $action) : ?>
				<a href="<?php echo esc_url($action['href']); ?>" class="final-cta-react-card final-cta-react-card--v2">
					<span class="final-cta-react-card__line" aria-hidden="true"></span>
					<span class="final-cta-react-card__number"><?php echo esc_html($action['number']); ?></span>
					<span class="final-cta-react-card__icon" aria-hidden="true"><?php echo $cta_icon($action['icon']); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
					<h3><?php echo esc_html($action['title']); ?></h3>
					<p><?php echo esc_html($action['description']); ?></p>
					<span class="final-cta-react-card__pill"><?php echo esc_html($action['pill']); ?></span>
				</a>
			<?php endforeach; ?>
		</div>

		<div class="final-cta-react-strip">
			<p><?php printf(esc_html__('Premium showroom Utrecht · Persoonlijk advies sinds %s', 'keuken-centrum'), esc_html($founded)); ?></p>
			<a href="<?php echo esc_url(home_url('/#brands')); ?>"><?php esc_html_e('Bekijk onze merken', 'keuken-centrum'); ?></a>
		</div>
	</div>
</section>
