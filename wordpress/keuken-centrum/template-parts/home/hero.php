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
		'cta_primary_url'     => home_url('/consultation/'),
		'cta_secondary_label' => 'Start configurator',
		'cta_secondary_url'   => function_exists('kc_cms_configurator_url') ? kc_cms_configurator_url() : home_url('/brands/'),
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
$hero_keukenspecialist = kc_theme_img( 'keukenspecialist.png' );
$hero_cbw              = kc_theme_img( 'cbw-erkend.png' ) ?: kc_theme_img( 'cbw.svg' );
?>
<section class="home-hero" id="top" data-home-hero>
	<div class="home-hero__media" aria-hidden="true">
		<?php foreach ($slides as $index => $slide) : ?>
			<div
				class="home-hero__slide<?php echo 0 === $index ? ' is-active' : ''; ?>"
				data-hero-slide
				data-hero-brand="<?php echo esc_attr($slide['brand']); ?>"
				data-hero-soft="<?php echo esc_attr($slide['soft']); ?>"
				data-hero-dot-color="<?php echo esc_attr($slide['dot']); ?>"
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
					<span class="hero-display__line home-hero__reveal" data-hero-reveal="3"><span class="hero-display__inner"><?php echo esc_html($args['title_line_3_prefix']); ?> <span class="hero-accent"><?php echo esc_html($args['title_em']); ?></span></span></span>
				</h1>

				<p class="home-hero__subtitle home-hero__reveal" data-hero-reveal="4"><?php echo esc_html($args['subtitle']); ?></p>

				<div class="home-hero__actions home-hero__reveal" data-hero-reveal="5">
					<a class="premium-pill-button premium-pill-button--blue premium-pill-button--xl premium-pill-button--rounded home-hero__cta home-hero__cta--primary" href="<?php echo esc_url($args['cta_primary_url']); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html($args['cta_primary_label']); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--xl premium-pill-button--rounded home-hero__cta home-hero__cta--secondary" href="<?php echo esc_url($args['cta_secondary_url']); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html($args['cta_secondary_label']); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>

				<?php if ( $video_uri ) : ?>
					<div class="home-hero__mobile-video home-hero__reveal" data-hero-reveal="5b" aria-hidden="false">
						<video
							class="home-hero__mobile-video-el"
							src="<?php echo esc_url( $video_uri ); ?>"
							muted
							loop
							playsinline
							preload="metadata"
							autoplay
						></video>
						<div class="home-hero__mobile-video-scrim" aria-hidden="true"></div>
						<span class="home-hero__mobile-video-chip">
							<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 22h20"/><path d="M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45a2.01 2.01 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"/><path d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z"/><path d="m19 7-.03-3h-4.4"/></svg>
							<?php esc_html_e( 'SHOWROOM UTRECHT', 'keuken-centrum' ); ?>
						</span>
					</div>
				<?php endif; ?>

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

				<?php if ( $hero_keukenspecialist || $hero_cbw ) : ?>
					<div class="home-hero__certs home-hero__reveal" data-hero-reveal="6" aria-label="<?php esc_attr_e( 'Keurmerken', 'keuken-centrum' ); ?>">
						<?php if ( $hero_keukenspecialist ) : ?>
							<img class="home-hero__cert" src="<?php echo esc_url( $hero_keukenspecialist ); ?>" alt="<?php esc_attr_e( 'Keukenspecialist.nl keurmerk', 'keuken-centrum' ); ?>" loading="lazy" decoding="async" width="140" height="32" />
						<?php endif; ?>
						<?php if ( $hero_cbw ) : ?>
							<img class="home-hero__cert home-hero__cert--cbw" src="<?php echo esc_url( $hero_cbw ); ?>" alt="<?php esc_attr_e( 'CBW erkend keurmerk', 'keuken-centrum' ); ?>" loading="lazy" decoding="async" width="140" height="32" />
						<?php endif; ?>
					</div>
				<?php endif; ?>
			</div>

			<?php if ($video_uri) : ?>
				<div class="home-hero__aside home-hero__reveal" data-hero-reveal="7">
					<div class="home-hero__video-card" data-hero-video-card>
						<div class="home-hero__video-inner">
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
							<div class="home-hero__video-tint" aria-hidden="true"></div>
							<div class="home-hero__video-sheen" aria-hidden="true"></div>

							<div class="home-hero__video-stage">
								<div class="home-hero__video-top">
									<span class="home-hero__video-chip">
										<span class="home-hero__video-chip-icon" aria-hidden="true">
											<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22h20"/><path d="M2.95 22 3 9.97c0-.61.29-1.19.77-1.57l7-5.45a2.01 2.01 0 0 1 2.46 0l7 5.44c.49.38.77.96.77 1.58V22"/><path d="M13 17h-2c-.83 0-1.5.67-1.5 1.5V22h5v-3.5c0-.83-.67-1.5-1.5-1.5ZM9.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1ZM16.5 13.75h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1Z"/><path d="m19 7-.03-3h-4.4"/></svg>
										</span>
										<span><?php esc_html_e('SHOWROOM UTRECHT', 'keuken-centrum'); ?></span>
									</span>
								</div>
								<div class="home-hero__video-bottom">
									<button type="button" class="home-hero__video-toggle" data-hero-video-toggle aria-label="<?php esc_attr_e('Video pauzeren', 'keuken-centrum'); ?>">
										<span class="home-hero__video-toggle-icon" data-hero-video-icon aria-hidden="true">
											<svg class="home-hero__video-toggle-pause" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"><path d="M10.65 19.11V4.89c0-1.35-.57-1.89-2.01-1.89H5.01C3.57 3 3 3.54 3 4.89v14.22C3 20.46 3.57 21 5.01 21h3.63c1.44 0 2.01-.54 2.01-1.89ZM21 19.11V4.89C21 3.54 20.43 3 18.99 3h-3.63c-1.43 0-2.01.54-2.01 1.89v14.22c0 1.35.57 1.89 2.01 1.89h3.63c1.44 0 2.01-.54 2.01-1.89Z"/></svg>
											<svg class="home-hero__video-toggle-play" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12V8.44c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78C7.13 21.79 4 19.98 4 15.56V12Z"/></svg>
										</span>
										<span data-hero-video-toggle-label><?php esc_html_e('Klik om te pauzeren', 'keuken-centrum'); ?></span>
									</button>
									<span class="home-hero__video-fs-wrap">
										<button type="button" class="home-hero__video-fs" data-hero-video-fs aria-label="<?php esc_attr_e('Video vergroten', 'keuken-centrum'); ?>">
											<svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9.98V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7h-1"/><path d="m13 11 5.01-5.02H14M18.01 5.98v4.01M11 16.15v2.7C11 21.1 10.1 22 7.85 22h-2.7C2.9 22 2 21.1 2 18.85v-2.7C2 13.9 2.9 13 5.15 13h2.7c2.25 0 3.15.9 3.15 3.15Z"/></svg>
										</button>
									</span>
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
				</div>
			<?php endif; ?>
		</div>
	</div>

	<a class="hero-scroll-cue hero-scroll-cue--compact home-hero__reveal" data-hero-reveal="8" href="#brands" aria-label="<?php esc_attr_e('Ontdek meer, scroll naar beneden', 'keuken-centrum'); ?>">
		<span class="hero-scroll-cue__label"><?php esc_html_e('Ontdek meer', 'keuken-centrum'); ?></span>
		<span class="hero-scroll-cue__stack" aria-hidden="true">
			<span class="hero-scroll-cue__glow"></span>
			<span class="hero-scroll-cue__frame">
				<svg class="hero-scroll-cue__icon" viewBox="0 0 32 32" fill="none">
					<rect x="10.5" y="24.5" width="11" height="2.2" rx="1.1" fill="currentColor" opacity="0.85" />
					<path d="M15.2 24.5V13.2" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" />
					<path d="M15.2 13.2H21.2C24.2 13.2 25.8 14.8 25.8 17.2V19" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M25.8 19V21.2" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" opacity="0.55" />
					<path d="M16.8 15.2V18.4" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" />
					<circle cx="16.8" cy="19.6" r="1.05" fill="currentColor" />
					<path d="M13.2 11.2L15.2 13.2" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" opacity="0.7" />
				</svg>
			</span>
			<span class="hero-scroll-cue__track">
				<span class="hero-scroll-cue__track-line"></span>
				<span class="hero-scroll-cue__drip"></span>
			</span>
			<svg class="hero-scroll-cue__chevron" viewBox="0 0 24 24" fill="none">
				<path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</span>
	</a>
</section>
