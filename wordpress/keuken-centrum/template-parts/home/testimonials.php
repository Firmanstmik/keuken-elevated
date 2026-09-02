<?php
/**
 * Home testimonials section — React testimonials parity.
 *
 * @package Keuken_Centrum
 */

$media = function_exists( 'kc_official_testimonial_media' ) ? kc_official_testimonial_media() : [];
if ( ! $media ) {
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
}

$fallback_testimonials = [
	[
		'quote'    => __('We wilden geen standaard keuken, maar een ruimte die rust, precisie en luxe uitstraalt. Het ontwerp voelde vanaf de eerste presentatie architectonisch doordacht, en de uitvoering was even zorgvuldig.', 'keuken-centrum'),
		'author'   => 'Familie Van Deurzen',
		'location' => 'Utrecht',
		'tag'      => 'LEICHT  ·  Leicht Residence Project',
		'year'     => '2025',
	],
	[
		'quote'    => __('Vanaf het eerste moodboard tot de plaatsing was alles coherent. Materialen, belijning en apparatuur sloten precies aan op de architectuur van onze woning.', 'keuken-centrum'),
		'author'   => 'Mevr. de Jong',
		'location' => 'Bilthoven',
		'tag'      => 'NOBILIA  ·  Nobilia Family Loft',
		'year'     => '2024',
	],
	[
		'quote'    => __('De begeleiding voelde internationaal en volwassen. Geen verkoopdruk, maar een ontwerpgesprek op niveau met veel aandacht voor verhoudingen en afwerking.', 'keuken-centrum'),
		'author'   => 'Bouwbedrijf Vreeburg',
		'location' => 'Nieuwegein',
		'tag'      => 'ZAMPIERI  ·  Zampieri Loft Line',
		'year'     => '2025',
	],
	[
		'quote'    => __('De keuken voelt alsof hij altijd onderdeel van het huis is geweest. Juist die vanzelfsprekende luxe en het dagelijkse gebruiksgemak maken dit project bijzonder.', 'keuken-centrum'),
		'author'   => 'Dhr. & Mevr. Jaspers',
		'location' => 'Houten',
		'tag'      => 'CUCINESSE  ·  Cucinesse Binnenplaatskeuken',
		'year'     => '2024',
	],
	[
		'quote'    => __('Er is slim meegedacht over licht, routing en werkruimte. Het eindresultaat oogt stil en luxe, maar werkt dagelijks ook gewoon perfect.', 'keuken-centrum'),
		'author'   => 'Familie Keizer',
		'location' => 'Zeist',
		'tag'      => 'LEICHT  ·  Leicht Tuinvilla',
		'year'     => '2025',
	],
	[
		'quote'    => __('De verfijning zit in de details: voeglijnen, materiaalovergangen en de rust van het totaalbeeld. Dat zie je niet vaak zo consequent uitgevoerd.', 'keuken-centrum'),
		'author'   => 'Familie Hesselink',
		'location' => 'Amersfoort',
		'tag'      => 'NOBILIA  ·  Premium Atelierkeuken',
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
$display_count  = preg_match('/^\d+$/', $reviews_count) ? $reviews_count . '+' : $reviews_count;
$recommended    = '98%';
$showcase_stats = [
	[
		'label' => __('Beoordelingen', 'keuken-centrum'),
		'value' => $display_count,
	],
	[
		'label' => __('Jaar Vakmanschap', 'keuken-centrum'),
		'value' => '45+',
	],
	[
		'label' => __('Aanbevolen', 'keuken-centrum'),
		'value' => $recommended,
	],
];

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

$testimonial_stars = static function (): string {
	$out = '';
	for ( $i = 0; $i < 5; $i++ ) {
		$out .= function_exists( 'kc_icon_star' ) ? kc_icon_star( 14 ) : '★';
	}
	return $out;
};

$testimonial_stars_sm = static function (): string {
	$out = '';
	for ( $i = 0; $i < 5; $i++ ) {
		$out .= function_exists( 'kc_icon_star' ) ? kc_icon_star( 12 ) : '★';
	}
	return $out;
};

$testimonial_stars_md = static function (): string {
	$out = '';
	for ( $i = 0; $i < 5; $i++ ) {
		$out .= function_exists( 'kc_icon_star' ) ? kc_icon_star( 13 ) : '★';
	}
	return $out;
};

$render_testimonial_card = static function (array $testimonial, string $image, bool $mobile = false) use ($testimonial_initials, $testimonial_stars): void {
	$location = trim((string) ($testimonial['location'] ?? ''));
	$year     = trim((string) ($testimonial['year'] ?? ''));
	$meta     = trim($location . ($location && $year ? ' · ' : '') . $year);
	?>
	<article class="testimonial-card testimonial-card--react<?php echo $mobile ? ' testimonial-card--mobile' : ''; ?>">
		<div class="testimonial-card__hover-glow" aria-hidden="true"></div>
		<div class="testimonial-card__head">
			<div class="testimonial-card__stars" aria-label="<?php esc_attr_e('5 uit 5 sterren', 'keuken-centrum'); ?>"><?php echo $testimonial_stars(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
			<?php if ($image) : ?>
				<div class="testimonial-card__thumb">
					<img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr((string) ($testimonial['tag'] ?? $testimonial['author'] ?? '')); ?>" loading="lazy" decoding="async" />
					<span aria-hidden="true"></span>
				</div>
			<?php endif; ?>
		</div>
		<span class="testimonial-card__tag">
			<span class="testimonial-card__tag-dot" aria-hidden="true"></span>
			<span class="testimonial-card__tag-text"><?php echo esc_html((string) ($testimonial['tag'] ?? '')); ?></span>
		</span>
		<blockquote class="testimonial-card__quote"><?php echo function_exists( 'kc_icon_quote_down' ) ? kc_icon_quote_down( 14 ) : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?><?php echo esc_html((string) ($testimonial['quote'] ?? '')); ?></blockquote>
		<div class="testimonial-card__author-row">
			<div class="testimonial-card__identity">
				<span class="testimonial-card__avatar"><?php echo esc_html($testimonial_initials((string) ($testimonial['author'] ?? 'KC'))); ?></span>
				<div>
					<strong class="testimonial-card__author"><?php echo esc_html((string) ($testimonial['author'] ?? '')); ?></strong>
					<span class="testimonial-card__location">
						<span class="testimonial-card__location-icon" aria-hidden="true"><?php echo function_exists( 'kc_icon_brand' ) ? kc_icon_brand( 'map-pin' ) : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
						<?php echo esc_html($meta); ?>
					</span>
				</div>
			</div>
			<span class="testimonial-card__check" aria-hidden="true"><?php echo function_exists( 'kc_icon_brand' ) ? kc_icon_brand( 'tick-circle' ) : ''; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
		</div>
	</article>
	<?php
};
?>
<section class="section-shell section-shell--dark testimonials-section testimonials-section--react" id="reviews">
	<div class="testimonials-section__glow" aria-hidden="true"></div>
	<div class="testimonials-section__edge testimonials-section__edge--top" aria-hidden="true"></div>
	<div class="testimonials-section__edge testimonials-section__edge--bottom" aria-hidden="true"></div>
	<div class="site-shell testimonials-section__shell testimonials-section__shell--header">
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
	</div>

	<div class="site-shell testimonials-section__shell testimonials-section__shell--triptych">
		<div class="testimonials-triptych">
			<div class="testimonials-column testimonials-column--left">
				<div class="testimonials-marquee testimonials-marquee--up">
					<?php foreach (array_merge($left_column, $left_column) as $index => $testimonial) : ?>
						<?php $image = $media ? $media[$index % count($media)] : ''; ?>
						<?php $render_testimonial_card($testimonial, $image); ?>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="testimonials-showcase">
				<div class="testimonials-showcase__ambient testimonials-showcase__ambient--primary" aria-hidden="true"></div>
				<div class="testimonials-showcase__ambient testimonials-showcase__ambient--secondary" aria-hidden="true"></div>
				<div class="testimonials-showcase__float">
					<div class="testimonials-showcase__frame">
						<div class="testimonials-showcase__surface">
							<div class="testimonials-showcase__top">
								<div class="testimonials-showcase__top-light" aria-hidden="true"></div>
								<div class="testimonials-showcase__verified-wrap">
									<div class="testimonials-showcase__verified">
										<span class="testimonials-showcase__verified-dot" aria-hidden="true"></span>
										<span><?php esc_html_e('Google Reviews · Geverifieerd', 'keuken-centrum'); ?></span>
									</div>
								</div>
								<div class="testimonials-showcase__ring">
									<svg viewBox="0 0 200 200" class="testimonials-showcase__ring-track" aria-hidden="true">
										<circle cx="100" cy="100" r="88" fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="2"></circle>
									</svg>
									<svg viewBox="0 0 200 200" class="testimonials-showcase__ring-arc" aria-hidden="true">
										<defs>
											<linearGradient id="kc-testimonials-arc-gradient" x1="0" y1="0" x2="1" y2="1">
												<stop offset="0%" stop-color="#F1DDA6"></stop>
												<stop offset="100%" stop-color="#B8924A"></stop>
											</linearGradient>
										</defs>
										<circle cx="100" cy="100" r="88" fill="none" stroke="url(#kc-testimonials-arc-gradient)" stroke-width="3" stroke-linecap="round" stroke-dasharray="552.9203070318035" stroke-dashoffset="11.05840614063608"></circle>
									</svg>
									<div class="testimonials-showcase__ring-core">
										<strong>4.9</strong>
										<span><?php esc_html_e('van 5.0', 'keuken-centrum'); ?></span>
										<div class="testimonial-card__stars testimonials-showcase__stars" aria-hidden="true"><?php echo $testimonial_stars_sm(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
									</div>
								</div>
							</div>
							<div class="testimonials-showcase__seam" aria-hidden="true"></div>
							<div class="testimonials-showcase__bottom">
								<div class="testimonials-showcase__stats">
									<?php foreach ($showcase_stats as $stat) : ?>
										<div>
											<span><?php echo esc_html($stat['label']); ?></span>
											<strong><?php echo esc_html($stat['value']); ?></strong>
										</div>
									<?php endforeach; ?>
								</div>
								<div class="testimonials-showcase__google">
									<div>
										<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"/></svg>
										<span><?php esc_html_e('Google Reviews', 'keuken-centrum'); ?></span>
									</div>
									<div class="testimonial-card__stars testimonials-showcase__google-stars" aria-hidden="true"><?php echo $testimonial_stars_md(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="testimonials-column testimonials-column--right">
				<div class="testimonials-marquee testimonials-marquee--down">
					<?php foreach (array_merge($right_column, $right_column) as $index => $testimonial) : ?>
						<?php $image = $media ? $media[($index + 3) % count($media)] : ''; ?>
						<?php $render_testimonial_card($testimonial, $image); ?>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

		<div class="testimonials-mobile-marquees">
			<div class="testimonials-mobile-marquee-frame">
				<div class="testimonials-mobile-marquee-fade testimonials-mobile-marquee-fade--left" aria-hidden="true"></div>
				<div class="testimonials-mobile-marquee-fade testimonials-mobile-marquee-fade--right" aria-hidden="true"></div>
				<div class="testimonials-mobile-marquee-row">
				<?php foreach ($testimonials as $index => $testimonial) : ?>
					<?php $image = $media ? $media[$index % count($media)] : ''; ?>
					<?php $render_testimonial_card($testimonial, $image, true); ?>
				<?php endforeach; ?>
				</div>
			</div>
			<div class="testimonials-mobile-marquee-frame">
				<div class="testimonials-mobile-marquee-fade testimonials-mobile-marquee-fade--left" aria-hidden="true"></div>
				<div class="testimonials-mobile-marquee-fade testimonials-mobile-marquee-fade--right" aria-hidden="true"></div>
				<div class="testimonials-mobile-marquee-row testimonials-mobile-marquee-row--alt">
				<?php foreach ($row_two as $index => $testimonial) : ?>
					<?php $image = $media ? $media[($index + 2) % count($media)] : ''; ?>
					<?php $render_testimonial_card($testimonial, $image, true); ?>
				<?php endforeach; ?>
				</div>
			</div>
		</div>
	</div>

	<div class="site-shell testimonials-section__shell testimonials-section__shell--footer">
		<div class="testimonials-footer-cta">
			<div class="testimonials-footer-cta__ornament" aria-hidden="true">
				<span></span>
				<svg viewBox="0 0 10 10" fill="none" aria-hidden="true">
					<path d="M5 0L6.18 3.82L10 5L6.18 6.18L5 10L3.82 6.18L0 5L3.82 3.82Z" fill="#C8A96B" opacity="0.40"></path>
				</svg>
				<span></span>
			</div>
			<p><?php esc_html_e('Ontdek wat dit voor uw woning betekent.', 'keuken-centrum'); ?></p>
			<a href="<?php echo esc_url(home_url('/consultation/')); ?>">
				<?php esc_html_e('Maak kennis met ons team', 'keuken-centrum'); ?>
				<span aria-hidden="true">→</span>
			</a>
		</div>
	</div>
</section>
