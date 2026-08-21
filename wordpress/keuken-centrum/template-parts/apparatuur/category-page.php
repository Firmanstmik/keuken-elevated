<?php
/**
 * Apparatuur category page (React ApparatuurCategoryPage parity).
 *
 * @package Keuken_Centrum
 *
 * @var array<string, mixed> $args
 */

$data = is_array( $args['data'] ?? null ) ? $args['data'] : [];
if ( ! $data ) {
	return;
}

$phone      = (string) ( $data['phone'] ?? kc_get_option( 'contact_phone', '030 241 5122' ) );
$phone_href = 'tel:+31' . preg_replace( '/\D+/', '', $phone );
$hero_img   = (string) ( $data['hero']['image'] ?? '' );
$slug       = (string) ( $data['slug'] ?? 'category' );
$scope      = 'brand-page--apparatuur brand-page--apparatuur-' . sanitize_html_class( $slug );
?>
<div class="brand-page <?php echo esc_attr( $scope ); ?>">
	<section class="brand-page-hero brand-page-hero--apparatuur" data-brand-hero>
		<div class="brand-page-hero__media" data-brand-hero-parallax aria-hidden="true">
			<?php if ( $hero_img ) : ?>
				<img
					src="<?php echo esc_url( $hero_img ); ?>"
					alt="<?php echo esc_attr( sprintf( /* translators: %s category name */ __( '%s Keuken-Centrum Utrecht', 'keuken-centrum' ), (string) ( $data['name'] ?? '' ) ) ); ?>"
					width="1920"
					height="1080"
					decoding="async"
					fetchpriority="high"
				>
			<?php endif; ?>
			<div class="brand-page-hero__gradient brand-page-hero__gradient--apparatuur"></div>
			<div class="brand-page-hero__radial brand-page-hero__radial--apparatuur"></div>
			<div class="brand-page-hero__vignette"></div>
		</div>
		<div class="brand-page-hero__fade" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container brand-page-hero__content--apparatuur">
			<div class="brand-page-hero__inner brand-page-hero__inner--apparatuur" data-reveal>
				<div class="app-crumb-wrap">
					<span class="app-crumb">
						<a href="<?php echo esc_url( home_url( '/apparatuur/' ) ); ?>"><?php esc_html_e( 'Apparatuur', 'keuken-centrum' ); ?></a>
						<span class="app-crumb__sep" aria-hidden="true"></span>
						<span class="app-crumb__current"><?php echo esc_html( (string) ( $data['name'] ?? '' ) ); ?></span>
					</span>
				</div>
				<?php kc_brand_eyebrow( (string) ( $data['hero']['eyebrow'] ?? '' ), true ); ?>
				<h1 class="brand-page-hero__title brand-page-hero__title--apparatuur">
					<?php echo esc_html( (string) ( $data['hero']['title'] ?? '' ) ); ?>
					<br>
					<em><?php echo esc_html( (string) ( $data['hero']['highlight'] ?? '' ) ); ?></em>
				</h1>
				<p class="brand-page-hero__lede brand-page-hero__lede--apparatuur"><?php echo esc_html( (string) ( $data['hero']['subtitle'] ?? '' ) ); ?></p>
				<div class="brand-page-hero__actions">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url( home_url( '/#consultation' ) ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Meer informatie', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url( $phone_href ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Bel direct', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
				<?php if ( ! empty( $data['hero']['badges'] ) ) : ?>
					<div class="brand-page-hero__badge-strip-wrap brand-page-hero__badge-strip-wrap--apparatuur">
						<div class="brand-page-hero__badge-strip">
							<?php foreach ( $data['hero']['badges'] as $index => $badge ) : ?>
								<div class="brand-page-hero__badge">
									<?php if ( $index > 0 ) : ?>
										<span class="brand-page-hero__badge-divider" aria-hidden="true"></span>
									<?php endif; ?>
									<span class="brand-page-hero__badge-value"><?php echo esc_html( (string) $badge['value'] ); ?></span>
									<span class="brand-page-hero__badge-label"><?php echo esc_html( (string) $badge['label'] ); ?></span>
								</div>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container keukens-intro-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow( (string) ( $data['intro']['eyebrow'] ?? '' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--apparatuur-intro"><?php echo esc_html( (string) ( $data['intro']['title'] ?? '' ) ); ?></h2>
			</div>
			<div class="app-intro-copy" data-reveal>
				<?php foreach ( (array) ( $data['intro']['paragraphs'] ?? [] ) as $paragraph ) : ?>
					<p class="keukens-body-copy"><?php echo esc_html( (string) $paragraph ); ?></p>
				<?php endforeach; ?>
				<?php if ( ! empty( $data['brandsNote'] ) ) : ?>
					<div class="app-note-card">
						<span class="app-note-card__ghost" aria-hidden="true">&#10003;</span>
						<p class="app-note-card__text"><?php echo esc_html( (string) $data['brandsNote'] ); ?></p>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</section>

	<section class="section-shell app-types-section">
		<div class="site-container">
			<div class="app-types-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Typen & collecties', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--apparatuur-types">
					<?php esc_html_e( 'Kies het type dat bij', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'uw keuken', 'keuken-centrum' ); ?></em>
					<?php esc_html_e( 'past', 'keuken-centrum' ); ?>
				</h2>
			</div>
			<div class="app-types-grid">
				<?php foreach ( (array) ( $data['types'] ?? [] ) as $index => $type ) : ?>
					<article class="app-type-card group" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.07 ) ); ?>">
						<div class="app-type-card__media">
							<img
								class="app-type-card__photo"
								src="<?php echo esc_url( (string) ( $type['image'] ?? '' ) ); ?>"
								alt="<?php echo esc_attr( (string) ( $type['title'] ?? '' ) ); ?>"
								loading="lazy"
								decoding="async"
								width="640"
								height="540"
							>
							<span class="app-type-card__frame" aria-hidden="true"></span>
							<span class="app-type-card__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
							<div class="app-type-card__caption">
								<h3 class="app-type-card__title"><?php echo esc_html( (string) ( $type['title'] ?? '' ) ); ?></h3>
								<p class="app-type-card__body"><?php echo esc_html( (string) ( $type['body'] ?? '' ) ); ?></p>
							</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<?php if ( ! empty( $data['valueProps'] ) ) : ?>
		<section class="section-shell">
			<div class="site-container">
				<div class="mb-10" data-reveal>
					<?php kc_brand_eyebrow( __( 'Waarom Keuken-Centrum', 'keuken-centrum' ) ); ?>
					<h2 class="keukens-section-title">
						<?php esc_html_e( 'Advies met', 'keuken-centrum' ); ?>
						<em><?php esc_html_e( 'diepgang', 'keuken-centrum' ); ?></em>
					</h2>
				</div>
				<div class="app-value-grid">
					<?php foreach ( (array) $data['valueProps'] as $index => $item ) : ?>
						<article
							class="keukens-value-card<?php echo 1 === (int) $index ? ' keukens-value-card--dark' : ''; ?>"
							data-reveal
							data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.08 ) ); ?>"
						>
							<span class="keukens-value-card__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
							<h3><?php echo esc_html( (string) ( $item['title'] ?? '' ) ); ?></h3>
							<p><?php echo esc_html( (string) ( $item['body'] ?? '' ) ); ?></p>
						</article>
					<?php endforeach; ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<section class="section-shell app-brands-section">
		<div class="site-container">
			<div class="app-brands-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Topmerken', 'keuken-centrum' ) ); ?>
			</div>
			<div data-reveal data-reveal-duration="0.8">
				<?php
				$brands = (array) ( $data['brands'] ?? [] );
				$row_a  = array_slice( $brands, 0, 5 );
				$row_b  = array_slice( $brands, 5 );
				foreach ( [ [ $row_a, false ], [ $row_b, true ] ] as $row_meta ) :
					$row     = $row_meta[0];
					$reverse = $row_meta[1];
					if ( ! $row ) {
						continue;
					}
					?>
					<div class="app-brand-marquee<?php echo $reverse ? ' app-brand-marquee--reverse' : ''; ?>">
						<div class="app-brand-marquee__track">
							<?php for ( $clone = 0; $clone < 2; $clone++ ) : ?>
								<div class="app-brand-marquee__group"<?php echo $clone ? ' aria-hidden="true"' : ''; ?>>
									<?php foreach ( $row as $brand ) : ?>
										<div class="app-brand-marquee__item">
											<img
												src="<?php echo esc_url( (string) ( $brand['logo'] ?? '' ) ); ?>"
												alt="<?php echo $clone ? '' : esc_attr( (string) ( $brand['name'] ?? '' ) ); ?>"
												loading="lazy"
												decoding="async"
												width="184"
												height="99"
											>
										</div>
									<?php endforeach; ?>
								</div>
							<?php endfor; ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container keukens-faq-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow( __( 'Veelgestelde vragen', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--apparatuur-faq">
					<?php esc_html_e( 'Advies of hulp', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'nodig?', 'keuken-centrum' ); ?></em>
				</h2>
				<p class="keukens-body-copy app-faq-lede"><?php esc_html_e( 'Twijfelt u nog over uw keuze? Bekijk de antwoorden hieronder of kom langs in de showroom.', 'keuken-centrum' ); ?></p>
				<div class="brand-faq__contact-card">
					<span class="brand-faq__contact-ghost" aria-hidden="true">?</span>
					<div class="brand-faq__contact-inner">
						<span class="brand-faq__contact-icon" aria-hidden="true"><?php echo kc_icon_brand( 'phone' ); ?></span>
						<div>
							<span class="brand-faq__contact-label"><?php esc_html_e( 'Direct contact', 'keuken-centrum' ); ?></span>
							<a href="<?php echo esc_url( $phone_href ); ?>" class="brand-faq__contact-phone"><?php echo esc_html( $phone ); ?></a>
						</div>
					</div>
				</div>
			</div>
			<div class="brand-faq" data-brand-faq data-reveal>
				<?php foreach ( (array) ( $data['faq'] ?? [] ) as $index => $item ) : ?>
					<details class="brand-faq__item">
						<summary class="brand-faq__trigger">
							<span class="brand-faq__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
							<span class="brand-faq__question"><?php echo esc_html( (string) ( $item['q'] ?? '' ) ); ?></span>
							<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</summary>
						<div class="brand-faq__content"><?php echo esc_html( (string) ( $item['a'] ?? '' ) ); ?></div>
					</details>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell app-related-section">
		<div class="site-container">
			<div class="app-related-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Meer apparatuur', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title"><?php esc_html_e( 'Ook interessant', 'keuken-centrum' ); ?></h2>
			</div>
			<div class="app-related-grid">
				<?php foreach ( (array) ( $data['related'] ?? [] ) as $index => $item ) : ?>
					<a
						class="app-related-card group"
						href="<?php echo esc_url( (string) ( $item['href'] ?? '#' ) ); ?>"
						data-reveal
						data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.08 ) ); ?>"
					>
						<img
							class="app-related-card__image"
							src="<?php echo esc_url( (string) ( $item['image'] ?? '' ) ); ?>"
							alt="<?php echo esc_attr( (string) ( $item['name'] ?? '' ) ); ?>"
							loading="lazy"
							decoding="async"
							width="640"
							height="420"
						>
						<div class="app-related-card__caption">
							<div>
								<h3><?php echo esc_html( (string) ( $item['name'] ?? '' ) ); ?></h3>
								<p><?php echo esc_html( (string) ( $item['tagline'] ?? '' ) ); ?></p>
							</div>
							<span class="app-related-card__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
						</div>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="brand-showroom-cta">
		<div class="site-container">
			<div class="brand-showroom-cta__inner">
				<div class="brand-showroom-cta__copy" data-reveal>
					<?php kc_brand_eyebrow( __( 'Showroom Utrecht', 'keuken-centrum' ), true ); ?>
					<h2 class="keukens-section-title keukens-section-title--light keukens-section-title--apparatuur-cta">
						<?php echo esc_html( (string) ( $data['showroomCta']['title'] ?? '' ) ); ?>
						<em><?php echo esc_html( (string) ( $data['showroomCta']['highlight'] ?? '' ) ); ?></em>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html( (string) ( $data['showroomCta']['body'] ?? '' ) ); ?></p>
				</div>
				<div class="brand-showroom-cta__actions">
					<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url( home_url( '/#consultation' ) ); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $data['showroomCta']['primaryLabel'] ?? __( 'Boek een afspraak', 'keuken-centrum' ) ) ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--xl" href="<?php echo esc_url( $phone_href ); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $data['showroomCta']['secondaryLabel'] ?? __( 'Bel direct', 'keuken-centrum' ) ) ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
