<?php
/**
 * Home testimonials section.
 *
 * @package Keuken_Centrum
 */

$media = [
	kc_theme_img('collection-modern.jpg'),
	kc_theme_img('collection-warm.jpg'),
	kc_theme_img('showroom.jpg'),
	kc_theme_img('hero-kitchen.jpg'),
	kc_theme_img('craftsmanship.jpg'),
	kc_theme_img('collection-scandi.jpg'),
];

$fallback_testimonials = [
	['quote' => 'Van de eerste schets tot de montage voelde elke keuze helder en persoonlijk. Onze keuken klopt nu tot in de details.', 'author' => 'Marieke & Jeroen', 'location' => 'Utrecht', 'tag' => 'LEICHT keuken'],
	['quote' => 'De adviseur luisterde echt naar hoe wij leven. Daardoor is het geen mooie keuken geworden, maar ónze keuken.', 'author' => 'Sophie van Dijk', 'location' => 'De Meern', 'tag' => 'Showroomadvies'],
	['quote' => 'Een rustig proces, mooie materialen en een resultaat waar we elke ochtend opnieuw blij van worden.', 'author' => 'Familie Van Leeuwen', 'location' => 'Houten', 'tag' => 'Nobilia keuken'],
	['quote' => 'We kwamen voor inspiratie en gingen naar huis met een plan dat precies paste bij onze verbouwing.', 'author' => 'Pieter & Anne', 'location' => 'Zeist', 'tag' => 'Ontwerp op maat'],
	['quote' => 'De combinatie van Italiaanse uitstraling en praktische oplossingen heeft onze verwachtingen overtroffen.', 'author' => 'Laura Meijer', 'location' => 'Nieuwegein', 'tag' => 'Zampieri keuken'],
	['quote' => 'Vakkundig, betrokken en verrassend ontspannen. Ook na oplevering was de service uitstekend.', 'author' => 'Rik de Boer', 'location' => 'Bilthoven', 'tag' => 'Persoonlijke service'],
];

$testimonial_query = new WP_Query(
	[
		'post_type'      => 'testimonial',
		'posts_per_page' => 6,
		'orderby'        => 'date',
		'order'          => 'DESC',
	]
);

$testimonials = [];
if ($testimonial_query->have_posts()) {
	while ($testimonial_query->have_posts()) {
		$testimonial_query->the_post();
		$testimonials[] = [
			'quote'    => kc_get_field_value('quote', get_the_ID(), get_the_excerpt()),
			'author'   => kc_get_field_value('author', get_the_ID(), get_the_title()),
			'location' => kc_get_field_value('location', get_the_ID(), 'Utrecht'),
			'tag'      => kc_get_field_value('brand_tag', get_the_ID(), __('Persoonlijk advies', 'keuken-centrum')),
		];
	}
	wp_reset_postdata();
}

if (! $testimonials) {
	$testimonials = $fallback_testimonials;
}
?>
<section class="section-shell section-shell--dark testimonials-section" id="testimonials">
	<div class="site-shell">
		<div class="testimonials-heading">
			<?php kc_section_chapter('06', __('Ervaringen', 'keuken-centrum'), true); ?>
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Ervaringen', 'keuken-centrum'); ?></p>
			<h2 class="section-title section-title--light"><?php esc_html_e('Reviews van klanten die hun keukenproject met rust en vertrouwen hebben doorlopen.', 'keuken-centrum'); ?></h2>
			<div class="testimonials-rating" aria-label="<?php esc_attr_e('Google beoordeling 4.8 uit 5', 'keuken-centrum'); ?>">
				<span class="testimonials-rating__google">G</span>
				<span class="testimonials-rating__stars" aria-hidden="true">★★★★★</span>
				<strong>4.8</strong>
				<span><?php esc_html_e('op Google', 'keuken-centrum'); ?></span>
			</div>
		</div>

		<div class="testimonials-columns" data-testimonials-marquee>
			<?php foreach (array_chunk($testimonials, (int) ceil(count($testimonials) / 2)) as $column_index => $column) : ?>
				<div class="testimonials-column<?php echo 1 === $column_index ? ' testimonials-column--reverse' : ''; ?>">
					<div class="testimonials-marquee">
						<?php foreach (array_merge($column, $column) as $index => $testimonial) : ?>
							<?php $image = $media[($index + ($column_index * 3)) % count($media)]; ?>
							<article class="testimonial-card">
								<?php if ($image) : ?>
									<div class="testimonial-card__media">
										<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async" />
										<span class="testimonial-card__media-scrim" aria-hidden="true"></span>
										<span class="testimonial-card__tag"><?php echo esc_html($testimonial['tag']); ?></span>
									</div>
								<?php endif; ?>
								<div class="testimonial-card__body">
									<div class="testimonial-card__stars" aria-label="<?php esc_attr_e('5 uit 5 sterren', 'keuken-centrum'); ?>">★★★★★</div>
									<blockquote class="testimonial-card__quote">“<?php echo esc_html($testimonial['quote']); ?>”</blockquote>
									<div class="testimonial-card__author-row">
										<span class="testimonial-card__avatar"><?php echo esc_html(function_exists('mb_substr') ? mb_substr((string) $testimonial['author'], 0, 1) : substr((string) $testimonial['author'], 0, 1)); ?></span>
										<p><strong class="testimonial-card__author"><?php echo esc_html($testimonial['author']); ?></strong><span class="testimonial-card__location"><?php echo esc_html($testimonial['location']); ?></span></p>
										<span class="testimonial-card__google" aria-label="<?php esc_attr_e('Google review', 'keuken-centrum'); ?>">G</span>
									</div>
								</div>
							</article>
						<?php endforeach; ?>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>
