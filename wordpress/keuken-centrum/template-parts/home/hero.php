<?php
/**
 * Home hero — React visual parity (slides, CTAs, video card + thumbs, motion).
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
		'cta_primary_url'     => home_url('/#showroom'),
		'cta_secondary_label' => 'Start configurator',
		'cta_secondary_url'   => 'https://keuken-elevated.vercel.app/brands',
		'image_url'           => '',
		'slides'              => [],
	]
);

$raw_slides = is_array($args['slides']) ? $args['slides'] : [];
$slides     = [];

$accent_map = [
	'LEICHT'     => [ 'dot' => '#c8a96b', 'soft' => 'rgba(198,163,107,0.18)' ],
	'NOBILIA'    => [ 'dot' => '#8bc540', 'soft' => 'rgba(139,197,64,0.14)' ],
	'AI KÜCHEN'  => [ 'dot' => 'rgba(23,25,28,0.9)', 'soft' => 'rgba(200,169,107,0.14)' ],
	'ZAMPIERI'   => [ 'dot' => '#73a832', 'soft' => 'rgba(139,197,64,0.12)' ],
	'CUCINESSE'  => [ 'dot' => '#c8a96b', 'soft' => 'rgba(198,163,107,0.18)' ],
];

foreach ($raw_slides as $slide) {
	if (is_string($slide) && $slide !== '') {
		$slides[] = [
			'url'   => $slide,
			'brand' => '',
			'dot'   => '#c8a96b',
			'soft'  => 'rgba(198,163,107,0.18)',
		];
	} elseif (is_array($slide) && ! empty($slide['url'])) {
		$brand = (string) ($slide['brand'] ?? '');
		$acc   = $accent_map[ $brand ] ?? [ 'dot' => '#c8a96b', 'soft' => 'rgba(198,163,107,0.18)' ];
		$slides[] = [
			'url'   => (string) $slide['url'],
			'brand' => $brand,
			'dot'   => $acc['dot'],
			'soft'  => $acc['soft'],
		];
	}
}

if (empty($slides) && ! empty($args['image_url'])) {
	$slides = [
		[
			'url'   => (string) $args['image_url'],
			'brand' => '',
			'dot'   => '#c8a96b',
			'soft'  => 'rgba(198,163,107,0.18)',
		],
	];
}

if (empty($slides)) {
	$defaults = kc_default_hero_slides();
	foreach ($defaults as $slide) {
		$brand = (string) ($slide['brand'] ?? '');
		$acc   = $accent_map[ $brand ] ?? [ 'dot' => '#c8a96b', 'soft' => 'rgba(198,163,107,0.18)' ];
		$slides[] = [
			'url'   => (string) $slide['url'],
			'brand' => $brand,
			'dot'   => $acc['dot'],
			'soft'  => $acc['soft'],
		];
	}
}

if (empty($slides) && kc_theme_img('hero-kitchen.jpg')) {
	$slides = [
		[
			'url'   => kc_theme_img('hero-kitchen.jpg'),
			'brand' => '',
			'dot'   => '#c8a96b',
			'soft'  => 'rgba(198,163,107,0.18)',
		],
	];
}

$video_uri  = '';
$video_path = get_theme_file_path('assets/video/video_hero_section.webm');
if (file_exists($video_path)) {
	$video_uri = kc_asset('assets/video/video_hero_section.webm');
}

$thumbs = array_filter(
	[
		[
			'src' => kc_theme_img('beton-img.webp'),
			'alt' => 'Beton werkblad',
		],
		[
			'src' => kc_theme_img('bora-img.webp'),
			'alt' => 'BORA kookplaat',
		],
		[
			'src' => kc_theme_img('marmer-img.webp'),
			'alt' => 'Marmer werkblad',
		],
	],
	static fn( $t ) => ! empty( $t['src'] )
);

$first_brand = $slides[0]['brand'] ?? 'LEICHT';
$first_soft  = $slides[0]['soft'] ?? 'rgba(198,163,107,0.18)';
$first_dot   = $slides[0]['dot'] ?? '#c8a96b';
?>
<section class="home-hero" id="top" data-home-hero>
	<div class="home-hero__media" aria-hidden="true">
		<?php foreach ($slides as $index => $slide) : ?>
			<div
				class="home-hero__slide<?php echo 0 === $index ? ' is-active' : ''; ?>"
				data-hero-slide
				data-hero-brand="<?php echo esc_attr($slide['brand']); ?>"
				data-hero-soft="<?php echo esc_attr($slide['soft']); ?>"
				data-hero-dot="<?php echo esc_attr($slide['dot']); ?>"
				style="background-image:url('<?php echo esc_url($slide['url']); ?>');"
			></div>
		<?php endforeach; ?>
	</div>

	<div class="home-hero__overlays" aria-hidden="true">
		<div class="home-hero__overlay home-hero__overlay--x"></div>
		<div class="home-hero__overlay home-hero__overlay--y"></div>
		<div class="home-hero__overlay home-hero__overlay--accent" data-hero-accent style="background:radial-gradient(circle at 22% 28%, <?php echo esc_attr($first_soft); ?>, transparent 30%);"></div>
		<div class="home-hero__overlay home-hero__overlay--gold"></div>
		<div class="home-hero__overlay home-hero__overlay--bottom"></div>
	</div>

	<div class="site-shell home-hero__inner">
		<div class="home-hero__layout">
			<div class="home-hero__content">
				<div class="section-label-row home-hero__reveal" data-hero-reveal="0">
					<span class="hero-eyebrow-ornament" aria-hidden="true">
						<svg class="hero-eyebrow-ornament__icon" viewBox="0 0 28 20" fill="none" aria-hidden="true">
							<circle cx="14" cy="3.1" r="1.5" stroke="currentColor" stroke-width="1.2" />
							<path d="M4.6 14.2C4.6 9 8.8 5.6 14 5.6s9.4 3.4 9.4 8.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
							<path d="M2.2 16.6h23.6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" />
							<path d="M9.4 8.6c-1.5 1-2.4 2.4-2.7 4" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.5" />
						</svg>
					</span>
					<p class="section-eyebrow section-eyebrow--hero"><?php echo esc_html($args['eyebrow']); ?></p>
				</div>

				<h1 class="hero-display">
					<span class="hero-display__line home-hero__reveal" data-hero-reveal="1"><span class="hero-display__inner"><?php echo esc_html($args['title_line_1']); ?></span></span>
					<span class="hero-display__line hero-display__line--mid home-hero__reveal" data-hero-reveal="2"><span class="hero-display__inner"><?php echo esc_html($args['title_line_2']); ?></span></span>
					<span class="hero-display__line home-hero__reveal" data-hero-reveal="3">
						<span class="hero-display__inner">
							<?php echo esc_html($args['title_line_3_prefix']); ?>
							<span class="hero-accent"><?php echo esc_html($args['title_em']); ?></span>
						</span>
					</span>
				</h1>

				<p class="home-hero__subtitle home-hero__reveal" data-hero-reveal="4"><?php echo esc_html($args['subtitle']); ?></p>

				<div class="home-hero__actions home-hero__reveal" data-hero-reveal="5">
					<a class="premium-pill-button premium-pill-button--blue premium-pill-button--xl premium-pill-button--rounded home-hero__cta home-hero__cta--primary" href="<?php echo esc_url($args['cta_primary_url']); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html($args['cta_primary_label']); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><span class="premium-pill-button__icon">→</span></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--xl premium-pill-button--rounded home-hero__cta home-hero__cta--secondary" href="<?php echo esc_url($args['cta_secondary_url']); ?>" target="_blank" rel="noreferrer">
						<span class="premium-pill-button__label"><?php echo esc_html($args['cta_secondary_label']); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><span class="premium-pill-button__icon">→</span></span>
					</a>
				</div>

				<?php if (count($slides) > 1) : ?>
					<div class="home-hero__partner home-hero__reveal" data-hero-reveal="6" data-hero-dots>
						<div class="home-hero__partner-chip">
							<span class="home-hero__partner-brand" data-hero-brand-label><?php echo esc_html($first_brand); ?></span>
							<span class="home-hero__partner-rule" aria-hidden="true"></span>
							<div class="home-hero__partner-dots" role="tablist" aria-label="<?php esc_attr_e('Hero slides', 'keuken-centrum'); ?>">
								<?php foreach ($slides as $index => $slide) : ?>
									<button
										type="button"
										class="ui-dot home-hero__partner-dot<?php echo 0 === $index ? ' is-active' : ''; ?>"
										data-hero-dot="<?php echo esc_attr((string) $index); ?>"
										aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>"
										style="<?php echo 0 === $index ? 'background-color:' . esc_attr($first_dot) : ''; ?>"
										aria-label="<?php echo esc_attr(sprintf(/* translators: %s brand name */ __('Toon slide %s', 'keuken-centrum'), $slide['brand'] ?: (string) ($index + 1))); ?>"
									></button>
								<?php endforeach; ?>
							</div>
						</div>
					</div>
				<?php endif; ?>
			</div>

			<?php if ($video_uri) : ?>
				<div class="home-hero__aside home-hero__reveal" data-hero-reveal="7">
					<div class="home-hero__video-card" data-hero-video-card>
						<div class="home-hero__video-stage">
							<video
								class="home-hero__video"
								data-hero-video
								src="<?php echo esc_url($video_uri); ?>"
								muted
								loop
								playsinline
								preload="metadata"
								autoplay
							></video>
							<div class="home-hero__video-scrim" aria-hidden="true"></div>
							<div class="home-hero__video-top">
								<span class="home-hero__video-chip">
									<span class="home-hero__video-chip-icon" aria-hidden="true">
										<svg viewBox="0 0 24 24" width="18" height="18" fill="none"><path d="M4.5 10.5L12 4l7.5 6.5V19a1.5 1.5 0 0 1-1.5 1.5h-3.5V14h-5v6.5H6A1.5 1.5 0 0 1 4.5 19v-8.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
									</span>
									<span><?php esc_html_e('SHOWROOM UTRECHT', 'keuken-centrum'); ?></span>
								</span>
							</div>
							<div class="home-hero__video-bottom">
								<button type="button" class="home-hero__video-toggle" data-hero-video-toggle aria-label="<?php esc_attr_e('Video pauzeren', 'keuken-centrum'); ?>">
									<span class="home-hero__video-toggle-icon" data-hero-video-icon aria-hidden="true">❚❚</span>
									<span data-hero-video-toggle-label><?php esc_html_e('Klik om te pauzeren', 'keuken-centrum'); ?></span>
								</button>
								<button type="button" class="home-hero__video-fs" data-hero-video-fs aria-label="<?php esc_attr_e('Video vergroten', 'keuken-centrum'); ?>">
									<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true"><path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
								</button>
							</div>
						</div>

						<?php if ($thumbs) : ?>
							<div class="home-hero__thumbs">
								<?php foreach ($thumbs as $thumb) : ?>
									<figure class="home-hero__thumb">
										<img src="<?php echo esc_url($thumb['src']); ?>" alt="<?php echo esc_attr($thumb['alt']); ?>" loading="lazy" width="240" height="180" />
										<span class="home-hero__thumb-corner home-hero__thumb-corner--tl" aria-hidden="true"></span>
										<span class="home-hero__thumb-corner home-hero__thumb-corner--br" aria-hidden="true"></span>
									</figure>
								<?php endforeach; ?>
							</div>
						<?php endif; ?>
					</div>
				</div>
			<?php endif; ?>
		</div>
	</div>

	<a class="hero-scroll-cue home-hero__reveal" data-hero-reveal="8" href="#brands" aria-label="<?php esc_attr_e('Ontdek meer, scroll naar beneden', 'keuken-centrum'); ?>">
		<span class="hero-scroll-cue__label"><?php esc_html_e('Ontdek meer', 'keuken-centrum'); ?></span>
		<span class="hero-scroll-cue__frame" aria-hidden="true">
			<svg class="hero-scroll-cue__icon" viewBox="0 0 32 32" fill="none">
				<rect x="10.5" y="24.5" width="11" height="2.2" rx="1.1" fill="currentColor" opacity="0.85" />
				<path d="M15.2 24.5V13.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" />
				<path d="M15.2 13.2H21.2C24.2 13.2 25.8 14.8 25.8 17.2V19" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" />
				<path d="M25.8 19V21.2" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" opacity="0.55" />
				<path d="M16.8 15.2V18.4" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" />
				<circle cx="16.8" cy="19.6" r="1.05" fill="currentColor" />
			</svg>
		</span>
		<span class="hero-scroll-cue__drip" aria-hidden="true"></span>
	</a>
</section>
