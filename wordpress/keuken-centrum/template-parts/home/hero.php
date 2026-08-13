<?php
/**
 * Home hero — React visual parity (full-bleed slides + editorial stack).
 *
 * @package Keuken_Centrum
 */

$args = wp_parse_args(
	$args ?? [],
	[
		'eyebrow'             => 'SINDS 1978 • PREMIUM SHOWROOM UTRECHT',
		'title_line_1'        => 'De Premium',
		'title_line_2'        => 'Keukenbestemming',
		'title_line_3_prefix' => 'van',
		'title_em'            => 'Utrecht.',
		'subtitle'            => 'Ontdek Duitse precisie en Italiaanse elegantie onder één dak. Persoonlijk showroomadvies, premium apparatuur en een doordachte configurator voor uw eerste ontwerpkeuze.',
		'cta_primary_label'   => 'Plan Showroombezoek',
		'cta_primary_url'     => home_url('/contact'),
		'cta_secondary_label' => 'Start configurator',
		'cta_secondary_url'   => 'https://keuken-elevated.vercel.app/brands',
		'image_url'           => '',
		'slides'              => [],
	]
);

$slides = is_array($args['slides']) ? array_filter($args['slides']) : [];
if (empty($slides) && ! empty($args['image_url'])) {
	$slides = [ $args['image_url'] ];
}
if (empty($slides)) {
	$slides = kc_default_hero_slides();
}
if (empty($slides) && kc_theme_img('hero-kitchen.jpg')) {
	$slides = [ kc_theme_img('hero-kitchen.jpg') ];
}
?>
<section class="home-hero" id="top" data-home-hero>
	<div class="home-hero__media" aria-hidden="true">
		<?php foreach ($slides as $index => $slide) : ?>
			<div class="home-hero__slide<?php echo 0 === $index ? ' is-active' : ''; ?>" data-hero-slide style="background-image:url('<?php echo esc_url($slide); ?>');"></div>
		<?php endforeach; ?>
		<div class="home-hero__overlay"></div>
	</div>

	<div class="site-shell home-hero__inner">
		<div class="home-hero__content" data-reveal>
			<div class="section-label-row">
				<span class="hero-eyebrow-ornament" aria-hidden="true"></span>
				<p class="section-eyebrow section-eyebrow--hero"><?php echo esc_html($args['eyebrow']); ?></p>
			</div>

			<h1 class="hero-display">
				<span class="hero-display__line"><?php echo esc_html($args['title_line_1']); ?></span>
				<span class="hero-display__line"><?php echo esc_html($args['title_line_2']); ?></span>
				<span class="hero-display__line">
					<?php echo esc_html($args['title_line_3_prefix']); ?>
					<span class="hero-accent"><?php echo esc_html($args['title_em']); ?></span>
				</span>
			</h1>

			<p class="home-hero__subtitle"><?php echo esc_html($args['subtitle']); ?></p>

			<div class="home-hero__actions">
				<a class="btn btn--primary btn--pill" href="<?php echo esc_url($args['cta_primary_url']); ?>"><?php echo esc_html($args['cta_primary_label']); ?></a>
				<a class="btn btn--ghost btn--pill" href="<?php echo esc_url($args['cta_secondary_url']); ?>" target="_blank" rel="noreferrer"><?php echo esc_html($args['cta_secondary_label']); ?></a>
			</div>

			<?php if (count($slides) > 1) : ?>
				<div class="home-hero__partner" data-hero-dots>
					<span class="home-hero__partner-label"><?php esc_html_e('Showroomimpressie', 'keuken-centrum'); ?></span>
					<div class="home-hero__dots" role="tablist" aria-label="<?php esc_attr_e('Hero slides', 'keuken-centrum'); ?>">
						<?php foreach ($slides as $index => $slide) : ?>
							<button
								type="button"
								class="ui-dot<?php echo 0 === $index ? ' is-active' : ''; ?>"
								data-hero-dot="<?php echo esc_attr((string) $index); ?>"
								aria-label="<?php echo esc_attr(sprintf(/* translators: %d slide number */ __('Slide %d', 'keuken-centrum'), $index + 1)); ?>"
							></button>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
	</div>

	<a class="hero-scroll-cue" href="#brands" aria-label="<?php esc_attr_e('Scroll naar merken', 'keuken-centrum'); ?>">
		<span></span>
	</a>
</section>
