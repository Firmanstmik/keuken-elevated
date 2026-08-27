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
$final    = function_exists( 'kc_home_final_cta_data' ) ? kc_home_final_cta_data() : null;
$actions  = $final['actions'] ?? [
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
$final_eyebrow = $final['eyebrow'] ?? 'Begin uw reis';
$final_heading = $final['heading'] ?? 'Klaar voor uw';
$final_heading_em = $final['heading_em'] ?? 'droomkeuken?';
$final_primary_label = $final['primary_label'] ?? 'Plan showroombezoek';
$final_primary_url = $final['primary_url'] ?? home_url( '/consultation/' );
$final_secondary_label = $final['secondary_label'] ?? 'Start configurator';
$final_secondary_url = $final['secondary_url'] ?? ( function_exists( 'kc_cms_configurator_url' ) ? kc_cms_configurator_url() : home_url( '/brands/' ) );

$cta_icon = static function (string $icon): string {
	$map = [
		'house' => 'home',
		'phone' => 'phone',
		'mail'  => 'mail',
	];
	$key = $map[ $icon ] ?? 'home';
	return function_exists( 'kc_icon_brand' ) ? kc_icon_brand( $key ) : '';
};
?>
<section class="final-cta-react final-cta-react--v2" id="contact"<?php echo $concrete ? ' style="--final-concrete:url(' . esc_url($concrete) . ')"' : ''; ?>>
	<div class="site-shell final-cta-react__inner">
		<?php kc_section_chapter('08', __('Start ontwerp', 'keuken-centrum')); ?>

		<header class="final-cta-react-heading final-cta-react-heading--v2">
			<div class="final-cta-react-heading__eyebrow">
				<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
				<span><?php echo esc_html( $final_eyebrow ); ?></span>
			</div>
			<h2>
				<?php echo esc_html( $final_heading ); ?>
				<em><?php echo esc_html( $final_heading_em ); ?></em>
			</h2>
			<p><?php echo esc_html( $final['lede'] ?? __( 'Van eerste inspiratie tot installatie: wij begeleiden u persoonlijk naar een keuken die klopt in stijl, functie en afwerking.', 'keuken-centrum' ) ); ?></p>
			<div class="final-cta-react-heading__actions">
				<a class="premium-pill-button premium-pill-button--blue premium-pill-button--md" href="<?php echo esc_url( $final_secondary_url ); ?>">
					<span class="premium-pill-button__label"><?php echo esc_html( $final_secondary_label ); ?></span>
					<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
				<a class="premium-pill-button premium-pill-button--ghost-light premium-pill-button--md" href="<?php echo esc_url( $final_primary_url ); ?>">
					<span class="premium-pill-button__label"><?php echo esc_html( $final_primary_label ); ?></span>
					<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>
		</header>

		<div class="final-cta-react-cards final-cta-react-cards--v2">
			<?php foreach ($actions as $action) : ?>
				<article class="final-cta-react-card final-cta-react-card--v2">
					<span class="final-cta-react-card__line" aria-hidden="true"></span>
					<span class="final-cta-react-card__number"><?php echo esc_html($action['number']); ?></span>
					<span class="final-cta-react-card__icon" aria-hidden="true"><?php echo $cta_icon($action['icon']); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
					<h3><?php echo esc_html($action['title']); ?></h3>
					<p><?php echo esc_html($action['description']); ?></p>
					<span class="final-cta-react-card__action">
						<a class="premium-pill-button premium-pill-button--blue premium-pill-button--sm" href="<?php echo esc_url($action['href']); ?>">
							<span class="premium-pill-button__label"><?php echo esc_html($action['pill']); ?></span>
							<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
						</a>
					</span>
				</article>
			<?php endforeach; ?>
		</div>

		<div class="final-cta-react-strip">
			<p><?php printf(esc_html__('Premium showroom Utrecht · Persoonlijk advies sinds %s', 'keuken-centrum'), esc_html($founded)); ?></p>
			<a href="<?php echo esc_url(home_url('/#brands')); ?>"><?php esc_html_e('Bekijk onze merken', 'keuken-centrum'); ?></a>
		</div>
	</div>
</section>
