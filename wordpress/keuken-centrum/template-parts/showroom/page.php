<?php
/**
 * Showroom Keukens page (React ShowroomKeukensPage parity).
 *
 * @package Keuken_Centrum
 *
 * @var array<string, mixed> $args
 */

$data = is_array( $args['data'] ?? null ) ? $args['data'] : ( function_exists( 'kc_showroom_keukens_page_data' ) ? kc_showroom_keukens_page_data() : [] );
if ( ! $data ) {
	return;
}

$hero     = is_array( $data['hero'] ?? null ) ? $data['hero'] : [];
$intro    = is_array( $data['intro'] ?? null ) ? $data['intro'] : [];
$gallery  = is_array( $data['gallery'] ?? null ) ? $data['gallery'] : [];
$services = is_array( $data['services'] ?? null ) ? $data['services'] : [];
$reasons  = is_array( $data['reasons'] ?? null ) ? $data['reasons'] : [];
$quotes   = is_array( $data['testimonials'] ?? null ) ? $data['testimonials'] : [];
$cta      = is_array( $data['cta'] ?? null ) ? $data['cta'] : [];
$mosaic   = array_slice( $gallery, 0, 5 );
$row      = array_slice( $gallery, 5 );
?>
<div class="brand-page brand-page--showroom-keukens">
	<section class="brand-page-hero brand-page-hero--showroom" data-brand-hero>
		<div class="brand-page-hero__media" data-brand-hero-parallax aria-hidden="true">
			<?php if ( ! empty( $hero['image'] ) ) : ?>
				<img
					src="<?php echo esc_url( (string) $hero['image'] ); ?>"
					alt="<?php esc_attr_e( 'Showroom Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>"
					width="1600"
					height="1200"
					decoding="async"
					fetchpriority="high"
				>
			<?php endif; ?>
			<div class="brand-page-hero__gradient brand-page-hero__gradient--showroom"></div>
			<div class="brand-page-hero__radial"></div>
			<div class="brand-page-hero__vignette"></div>
		</div>
		<div class="brand-page-hero__fade brand-page-hero__fade--showroom" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container brand-page-hero__content--showroom">
			<div class="brand-page-hero__inner brand-page-hero__inner--showroom" data-reveal>
				<?php kc_brand_eyebrow( (string) ( $hero['eyebrow'] ?? '' ), true ); ?>
				<h1 class="brand-page-hero__title brand-page-hero__title--showroom">
					<?php echo esc_html( (string) ( $hero['title'] ?? '' ) ); ?>
					<em><?php echo esc_html( (string) ( $hero['highlight'] ?? '' ) ); ?></em>
				</h1>
				<p class="brand-page-hero__lede brand-page-hero__lede--showroom"><?php echo esc_html( (string) ( $hero['subtitle'] ?? '' ) ); ?></p>
				<div class="brand-page-hero__actions">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url( (string) ( $hero['primary']['href'] ?? kc_consultation_url() ) ); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $hero['primary']['label'] ?? '' ) ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url( (string) ( $hero['secondary']['href'] ?? '#' ) ); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $hero['secondary']['label'] ?? '' ) ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container showroom-intro-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow( (string) ( $intro['eyebrow'] ?? '' ) ); ?>
				<h2 class="keukens-section-title showroom-intro-title">
					<?php echo esc_html( (string) ( $intro['title'] ?? '' ) ); ?>
					<br>
					<em><?php echo esc_html( (string) ( $intro['highlight'] ?? '' ) ); ?></em>
				</h2>
				<div class="showroom-intro-copy">
					<?php foreach ( (array) ( $intro['paragraphs'] ?? [] ) as $paragraph ) : ?>
						<p class="keukens-body-copy"><?php echo esc_html( (string) $paragraph ); ?></p>
					<?php endforeach; ?>
				</div>
				<div class="showroom-intro-cta">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url( (string) ( $intro['cta']['href'] ?? home_url( '/contact/' ) ) ); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $intro['cta']['label'] ?? '' ) ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>

			<div class="showroom-mosaic">
				<?php foreach ( $mosaic as $index => $item ) : ?>
					<figure class="showroom-mosaic__item showroom-mosaic__item--<?php echo esc_attr( (string) ( $index + 1 ) ); ?>" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.07 ) ); ?>">
						<img src="<?php echo esc_url( (string) ( $item['src'] ?? '' ) ); ?>" alt="<?php echo esc_attr( (string) ( $item['alt'] ?? '' ) ); ?>" loading="lazy" decoding="async" width="800" height="600">
						<figcaption class="showroom-mosaic__caption"><?php echo esc_html( (string) ( $item['label'] ?? '' ) ); ?></figcaption>
					</figure>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell section-shell--flush-top">
		<div class="site-container">
			<div class="showroom-section-head" data-reveal>
				<?php kc_brand_eyebrow( __( 'In de showroom', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e( 'Live te', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'ervaren', 'keuken-centrum' ); ?></em>
				</h2>
			</div>
			<div class="showroom-gallery-row">
				<?php foreach ( $row as $index => $item ) : ?>
					<figure class="showroom-gallery-row__item" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.06 ) ); ?>">
						<img src="<?php echo esc_url( (string) ( $item['src'] ?? '' ) ); ?>" alt="<?php echo esc_attr( (string) ( $item['alt'] ?? '' ) ); ?>" loading="lazy" decoding="async" width="600" height="750">
						<figcaption><?php echo esc_html( (string) ( $item['label'] ?? '' ) ); ?></figcaption>
					</figure>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell section-shell--flush-top">
		<div class="site-container">
			<div class="showroom-section-head showroom-section-head--services" data-reveal>
				<?php kc_brand_eyebrow( __( 'Onze services', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e( 'Van A tot Z hulp bij het', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'samenstellen', 'keuken-centrum' ); ?></em>
					<?php esc_html_e( 'van uw keuken', 'keuken-centrum' ); ?>
				</h2>
			</div>
			<div class="showroom-services-grid">
				<?php foreach ( $services as $index => $service ) : ?>
					<a class="showroom-service-card group" href="<?php echo esc_url( (string) ( $service['href'] ?? '#' ) ); ?>" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.07 ) ); ?>">
						<div class="showroom-service-card__media">
							<img src="<?php echo esc_url( (string) ( $service['image'] ?? '' ) ); ?>" alt="<?php echo esc_attr( (string) ( $service['title'] ?? '' ) ); ?>" loading="lazy" decoding="async" width="640" height="440">
						</div>
						<div class="showroom-service-card__body">
							<div class="showroom-service-card__title-row">
								<h3><?php echo esc_html( (string) ( $service['title'] ?? '' ) ); ?></h3>
								<span class="showroom-service-card__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
							</div>
							<p><?php echo esc_html( (string) ( $service['description'] ?? '' ) ); ?></p>
						</div>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell section-shell--flush-top">
		<div class="site-container">
			<div class="showroom-section-head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Waarom voor ons kiezen?', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e( 'Vier redenen', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'om langs te komen', 'keuken-centrum' ); ?></em>
				</h2>
			</div>
			<div class="showroom-reasons-grid">
				<?php foreach ( $reasons as $index => $reason ) : ?>
					<article class="keukens-value-card<?php echo 1 === $index ? ' keukens-value-card--dark' : ''; ?>" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.07 ) ); ?>">
						<span class="keukens-value-card__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
						<h3><?php echo esc_html( (string) ( $reason['title'] ?? '' ) ); ?></h3>
						<p><?php echo esc_html( (string) ( $reason['body'] ?? '' ) ); ?></p>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell section-shell--flush-top">
		<div class="site-container">
			<div class="showroom-quotes-head" data-reveal>
				<div class="showroom-section-head">
					<?php kc_brand_eyebrow( __( 'Wat klanten vertellen', 'keuken-centrum' ) ); ?>
					<h2 class="keukens-section-title">
						<?php esc_html_e( 'Ervaringen uit', 'keuken-centrum' ); ?>
						<em><?php esc_html_e( 'onze showroom', 'keuken-centrum' ); ?></em>
					</h2>
				</div>
				<span class="showroom-reviews-pill">
					<?php echo kc_icon_brand( 'sparkles' ); ?>
					4,9 Google Reviews
				</span>
			</div>
			<div class="showroom-quotes-grid">
				<?php foreach ( $quotes as $index => $item ) : ?>
					<blockquote class="showroom-quote" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.08 ) ); ?>">
						<span class="showroom-quote__icon" aria-hidden="true"><?php echo kc_icon_brand( 'quote' ); ?></span>
						<p class="showroom-quote__text">“<?php echo esc_html( (string) ( $item['quote'] ?? '' ) ); ?>”</p>
						<footer class="showroom-quote__name"><?php echo esc_html( (string) ( $item['name'] ?? '' ) ); ?></footer>
					</blockquote>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="brand-showroom-cta">
		<div class="site-container">
			<div class="brand-showroom-cta__inner">
				<div class="brand-showroom-cta__copy" data-reveal>
					<?php kc_brand_eyebrow( __( 'Zonnebaan 8, Utrecht', 'keuken-centrum' ), true ); ?>
					<h2 class="keukens-section-title keukens-section-title--light">
						<?php echo esc_html( (string) ( $cta['title'] ?? '' ) ); ?>
						<em><?php echo esc_html( (string) ( $cta['highlight'] ?? '' ) ); ?></em>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html( (string) ( $cta['body'] ?? '' ) ); ?></p>
				</div>
				<div class="brand-showroom-cta__actions">
					<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url( (string) ( $cta['primaryHref'] ?? kc_consultation_url() ) ); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $cta['primaryLabel'] ?? '' ) ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--xl" href="<?php echo esc_url( (string) ( $cta['secondaryHref'] ?? home_url( '/contact/' ) ) ); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $cta['secondaryLabel'] ?? '' ) ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
