<?php
/**
 * Home hero section.
 *
 * @package Keuken_Centrum
 */

$args = wp_parse_args(
	$args ?? [],
	[
		'eyebrow'             => 'SINDS 1978 · PREMIUM SHOWROOM UTRECHT',
		'title'               => 'De Premium Keukenbestemming van',
		'title_em'            => 'Utrecht.',
		'subtitle'            => 'Ontdek een curated collectie keukens met Duitse precisie, Italiaanse elegantie en begeleiding van adviseurs die luisteren, ontwerpen en leveren.',
		'cta_primary_label'   => 'Plan Showroombezoek',
		'cta_primary_url'     => home_url('/contact'),
		'cta_secondary_label' => 'Start Configurator',
		'cta_secondary_url'   => 'https://keuken-elevated.vercel.app/brands',
		'image_url'           => '',
	]
);

?>
<section class="home-hero"<?php if ($args['image_url']) : ?> style="<?php echo esc_attr('background-image:url(' . esc_url_raw($args['image_url']) . ');'); ?>"<?php endif; ?>>
	<div class="home-hero__overlay"></div>
	<div class="site-shell home-hero__inner">
		<div class="home-hero__content">
			<p class="section-eyebrow section-eyebrow--gold"><?php echo esc_html($args['eyebrow']); ?></p>
			<h1 class="home-hero__title">
				<?php echo esc_html($args['title']); ?>
				<span><?php echo esc_html($args['title_em']); ?></span>
			</h1>
			<p class="home-hero__subtitle"><?php echo esc_html($args['subtitle']); ?></p>
			<div class="home-hero__actions">
				<a class="btn btn--primary" href="<?php echo esc_url($args['cta_primary_url']); ?>"><?php echo esc_html($args['cta_primary_label']); ?></a>
				<a class="btn btn--ghost" href="<?php echo esc_url($args['cta_secondary_url']); ?>" target="_blank" rel="noreferrer"><?php echo esc_html($args['cta_secondary_label']); ?></a>
			</div>
			<ul class="home-hero__metrics" aria-label="<?php esc_attr_e('Sterke punten', 'keuken-centrum'); ?>">
				<li><strong>45+</strong><span><?php esc_html_e('jaar ervaring', 'keuken-centrum'); ?></span></li>
				<li><strong>5</strong><span><?php esc_html_e('premium merken', 'keuken-centrum'); ?></span></li>
				<li><strong>1</strong><span><?php esc_html_e('showroom, vast team', 'keuken-centrum'); ?></span></li>
			</ul>
		</div>
	</div>
</section>
