<?php
/**
 * Home testimonials section — React testimonials parity.
 *
 * @package Keuken_Centrum
 */

$media = array_values(
	array_filter(
		[
			kc_theme_img('collection-minimal.jpg'),
			kc_theme_img('collection-warm.jpg'),
			kc_theme_img('collection-modern.jpg'),
			kc_theme_img('hero-kitchen.jpg'),
			kc_theme_img('showroom.jpg'),
			kc_theme_img('collection-scandi.jpg'),
		]
	)
);

$fallback_testimonials = [
	[
		'quote'    => __('We wilden geen standaard keuken, maar een ruimte die rust, precisie en luxe uitstraalt. Het ontwerp voelde vanaf de eerste presentatie architectonisch doordacht.', 'keuken-centrum'),
		'author'   => 'Familie Van Deurzen',
		'location' => 'Utrecht',
		'tag'      => 'LEICHT Residence',
		'year'     => '2025',
	],
	[
		'quote'    => __('Vanaf het eerste moodboard tot de plaatsing was alles coherent. Materialen, belijning en apparatuur sloten precies aan op de architectuur van onze woning.', 'keuken-centrum'),
		'author'   => 'Mevr. de Jong',
		'location' => 'Bilthoven',
		'tag'      => 'Nobilia Family Loft',
		'year'     => '2024',
	],
	[
		'quote'    => __('De begeleiding voelde internationaal en volwassen. Geen verkoopdruk, maar een ontwerpgesprek op niveau met veel aandacht voor verhoudingen en afwerking.', 'keuken-centrum'),
		'author'   => 'Bouwbedrijf Vreeburg',
		'location' => 'Nieuwegein',
		'tag'      => 'Zampieri Loft Line',
		'year'     => '2025',
	],
	[
		'quote'    => __('De keuken voelt alsof hij altijd onderdeel van het huis is geweest. Juist die vanzelfsprekende luxe en het dagelijkse gebruiksgemak maken dit project bijzonder.', 'keuken-centrum'),
		'author'   => 'Dhr. & Mevr. Jaspers',
		'location' => 'Houten',
		'tag'      => 'Cucinesse Binnenplaats',
		'year'     => '2024',
	],
	[
		'quote'    => __('Er is slim meegedacht over licht, routing en werkruimte. Het eindresultaat oogt stil en luxe, maar werkt dagelijks ook gewoon perfect.', 'keuken-centrum'),
		'author'   => 'Familie Keizer',
		'location' => 'Zeist',
		'tag'      => 'Leicht Tuinvilla',
		'year'     => '2025',
	],
	[
		'quote'    => __('De verfijning zit in de details: voeglijnen, materiaalovergangen en de rust van het totaalbeeld. Dat zie je niet vaak zo consequent uitgevoerd.', 'keuken-centrum'),
		'author'   => 'Familie Hesselink',
		'location' => 'Amersfoort',
		'tag'      => 'Premium Atelier',
		'year'     => '2025',
	],
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
			'quote'    => (string) kc_get_field_value('quote', get_the_ID(), get_the_excerpt()),
			'author'   => (string) kc_get_field_value('author', get_the_ID(), get_the_title()),
			'location' => (string) kc_get_field_value('location', get_the_ID(), 'Utrecht'),
			'tag'      => (string) kc_get_field_value('brand_tag', get_the_ID(), __('Persoonlijk advies', 'keuken-centrum')),
			'year'     => (string) kc_get_field_value('year', get_the_ID(), get_the_date('Y')),
		];
	}
	wp_reset_postdata();
}

if (! $testimonials) {
	$testimonials = $fallback_testimonials;
}

while (count($testimonials) < 6) {
	$testimonials[] = $fallback_testimonials[count($testimonials) % count($fallback_testimonials)];
}

$testimonials = array_slice($testimonials, 0, 6);
$left_column  = array_slice($testimonials, 0, 3);
$right_column = array_slice($testimonials, 3, 3);
$row_two      = array_merge($right_column, $left_column);

$reviews_count  = (string) kc_get_option('google_reviews_count', '127');
$founded_year   = (int) kc_get_option('founded_year', '1978');
$years_active   = max(1, (int) gmdate('Y') - $founded_year);
$display_count  = preg_match('/^\d+$/', $reviews_count) ? $reviews_count . '+' : $reviews_count;
$recommended    = '98%';

$testimonial_initials = static function (string $name): string {
	$parts = preg_split('/\s+/', trim($name)) ?: [];
	if (! $parts) {
		return 'KC';
	}
	if (1 === count($parts)) {
		return strtoupper(substr($parts[0], 0, 2));
	}
	return strtoupper(substr($parts[0], 0, 1) . substr((string) end($parts), 0, 1));
};
?>
<section class="section-shell section-shell--dark testimonials-section testimonials-section--react" id="reviews">
	<div class="testimonials-section__glow" aria-hidden="true"></div>
	<div class="site-shell testimonials-section__inner">
		<header class="testimonials-heading testimonials-heading--react">
			<?php kc_section_chapter('09', __('Reviews', 'keuken-centrum'), true); ?>
			<div class="section-label-row section-label-row--center">
				<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
				<div class="testimonials-heading__google-pill">
					<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"/></svg>
					<span><?php esc_html_e('Google Beoordelingen', 'keuken-centrum'); ?></span>
				</div>
			</div>
			<h2 class="section-title section-title--light">
				<?php esc_html_e('Ervaringen van klanten', 'keuken-centrum'); ?>
				<em><?php esc_html_e('uit Utrecht en omgeving', 'keuken-centrum'); ?></em>
			</h2>
			<p><?php esc_html_e('Persoonlijk ontwerpadvies, Duitse precisie en Italiaanse elegantie komen samen in een installatie die generaties meegaat.', 'keuken-centrum'); ?></p>
		</header>

		<div class="testimonials-triptych" data-testimonials-marquee>
			<div class="testimonials-column testimonials-column--left">
				<div class="testimonials-marquee">
					<?php foreach (array_merge($left_column, $left_column) as $index => $testimonial) : ?>
						<?php $image = $media ? $media[$index % count($media)] : ''; ?>
						<article class="testimonial-card testimonial-card--react">
							<div class="testimonial-card__head">
								<div class="testimonial-card__stars" aria-label="<?php esc_attr_e('5 uit 5 sterren', 'keuken-centrum'); ?>">★★★★★</div>
								<?php if ($image) : ?>
									<div class="testimonial-card__thumb">
										<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async" />
										<span aria-hidden="true"></span>
									</div>
								<?php endif; ?>
							</div>
							<span class="testimonial-card__tag"><?php echo esc_html($testimonial['tag']); ?></span>
							<blockquote class="testimonial-card__quote">“<?php echo esc_html($testimonial['quote']); ?>”</blockquote>
							<div class="testimonial-card__author-row">
								<span class="testimonial-card__avatar"><?php echo esc_html($testimonial_initials($testimonial['author'])); ?></span>
								<div>
									<strong class="testimonial-card__author"><?php echo esc_html($testimonial['author']); ?></strong>
									<span class="testimonial-card__location"><?php echo esc_html($testimonial['location'] . ' · ' . $testimonial['year']); ?></span>
								</div>
								<span class="testimonial-card__check" aria-hidden="true">●</span>
							</div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="testimonials-showcase">
				<div class="testimonials-showcase__frame">
					<div class="testimonials-showcase__top">
						<div class="testimonials-showcase__verified">
							<span></span>
							<?php esc_html_e('Google Reviews · Geverifieerd', 'keuken-centrum'); ?>
						</div>
						<div class="testimonials-showcase__ring">
							<div class="testimonials-showcase__ring-core">
								<strong>4.9</strong>
								<span><?php esc_html_e('van 5.0', 'keuken-centrum'); ?></span>
								<div aria-hidden="true">★★★★★</div>
							</div>
						</div>
					</div>
					<div class="testimonials-showcase__bottom">
						<div class="testimonials-showcase__stats">
							<div><span><?php esc_html_e('Beoordelingen', 'keuken-centrum'); ?></span><strong><?php echo esc_html($display_count); ?></strong></div>
							<div><span><?php esc_html_e('Jaar Vakmanschap', 'keuken-centrum'); ?></span><strong><?php echo esc_html($years_active . '+'); ?></strong></div>
							<div><span><?php esc_html_e('Aanbevolen', 'keuken-centrum'); ?></span><strong><?php echo esc_html($recommended); ?></strong></div>
						</div>
						<div class="testimonials-showcase__google">
							<div>
								<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"/></svg>
								<span><?php esc_html_e('Google Reviews', 'keuken-centrum'); ?></span>
							</div>
							<div aria-hidden="true">★★★★★</div>
						</div>
					</div>
				</div>
			</div>

			<div class="testimonials-column testimonials-column--right">
				<div class="testimonials-marquee">
					<?php foreach (array_merge($right_column, $right_column) as $index => $testimonial) : ?>
						<?php $image = $media ? $media[($index + 3) % count($media)] : ''; ?>
						<article class="testimonial-card testimonial-card--react">
							<div class="testimonial-card__head">
								<div class="testimonial-card__stars" aria-label="<?php esc_attr_e('5 uit 5 sterren', 'keuken-centrum'); ?>">★★★★★</div>
								<?php if ($image) : ?>
									<div class="testimonial-card__thumb">
										<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async" />
										<span aria-hidden="true"></span>
									</div>
								<?php endif; ?>
							</div>
							<span class="testimonial-card__tag"><?php echo esc_html($testimonial['tag']); ?></span>
							<blockquote class="testimonial-card__quote">“<?php echo esc_html($testimonial['quote']); ?>”</blockquote>
							<div class="testimonial-card__author-row">
								<span class="testimonial-card__avatar"><?php echo esc_html($testimonial_initials($testimonial['author'])); ?></span>
								<div>
									<strong class="testimonial-card__author"><?php echo esc_html($testimonial['author']); ?></strong>
									<span class="testimonial-card__location"><?php echo esc_html($testimonial['location'] . ' · ' . $testimonial['year']); ?></span>
								</div>
								<span class="testimonial-card__check" aria-hidden="true">●</span>
							</div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

		<div class="testimonials-mobile-marquees">
			<div class="testimonials-mobile-marquee-row">
				<?php foreach ($testimonials as $index => $testimonial) : ?>
					<?php $image = $media ? $media[$index % count($media)] : ''; ?>
					<article class="testimonial-card testimonial-card--react testimonial-card--mobile">
						<div class="testimonial-card__head">
							<div class="testimonial-card__stars" aria-hidden="true">★★★★★</div>
							<?php if ($image) : ?>
								<div class="testimonial-card__thumb">
									<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async" />
									<span aria-hidden="true"></span>
								</div>
							<?php endif; ?>
						</div>
						<span class="testimonial-card__tag"><?php echo esc_html($testimonial['tag']); ?></span>
						<blockquote class="testimonial-card__quote">“<?php echo esc_html($testimonial['quote']); ?>”</blockquote>
						<div class="testimonial-card__author-row">
							<span class="testimonial-card__avatar"><?php echo esc_html($testimonial_initials($testimonial['author'])); ?></span>
							<div>
								<strong class="testimonial-card__author"><?php echo esc_html($testimonial['author']); ?></strong>
								<span class="testimonial-card__location"><?php echo esc_html($testimonial['location']); ?></span>
							</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
			<div class="testimonials-mobile-marquee-row testimonials-mobile-marquee-row--alt">
				<?php foreach ($row_two as $index => $testimonial) : ?>
					<?php $image = $media ? $media[($index + 2) % count($media)] : ''; ?>
					<article class="testimonial-card testimonial-card--react testimonial-card--mobile">
						<div class="testimonial-card__head">
							<div class="testimonial-card__stars" aria-hidden="true">★★★★★</div>
							<?php if ($image) : ?>
								<div class="testimonial-card__thumb">
									<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async" />
									<span aria-hidden="true"></span>
								</div>
							<?php endif; ?>
						</div>
						<span class="testimonial-card__tag"><?php echo esc_html($testimonial['tag']); ?></span>
						<blockquote class="testimonial-card__quote">“<?php echo esc_html($testimonial['quote']); ?>”</blockquote>
						<div class="testimonial-card__author-row">
							<span class="testimonial-card__avatar"><?php echo esc_html($testimonial_initials($testimonial['author'])); ?></span>
							<div>
								<strong class="testimonial-card__author"><?php echo esc_html($testimonial['author']); ?></strong>
								<span class="testimonial-card__location"><?php echo esc_html($testimonial['location']); ?></span>
							</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="testimonials-footer-cta">
			<div class="testimonials-footer-cta__rule" aria-hidden="true"></div>
			<p><?php esc_html_e('Ontdek wat dit voor uw woning betekent.', 'keuken-centrum'); ?></p>
			<a href="<?php echo esc_url(home_url('/#consultation')); ?>">
				<?php esc_html_e('Maak kennis met ons team', 'keuken-centrum'); ?>
				<span aria-hidden="true">→</span>
			</a>
		</div>
	</div>
</section>
