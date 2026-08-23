<?php
/**
 * Apparatuur overview (React ApparatuurOverviewPage).
 *
 * @package Keuken_Centrum
 */

$data       = function_exists( 'kc_apparatuur_overview_data' ) ? kc_apparatuur_overview_data() : [];
$phone      = (string) ( $data['phone'] ?? kc_get_option( 'contact_phone', '030 241 5122' ) );
$phone_href = 'tel:+31' . preg_replace( '/\D+/', '', $phone );
$hero_img   = (string) ( $data['hero']['image'] ?? '' );
?>
<div class="brand-page brand-page--apparatuur brand-page--apparatuur-overview">
	<section class="brand-page-hero brand-page-hero--apparatuur brand-page-hero--apparatuur-overview" data-brand-hero>
		<div class="brand-page-hero__media" data-brand-hero-parallax aria-hidden="true">
			<?php if ( $hero_img ) : ?>
				<img
					src="<?php echo esc_url( $hero_img ); ?>"
					alt="<?php esc_attr_e( 'Keukenapparatuur Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>"
					width="1920"
					height="1080"
					decoding="async"
					fetchpriority="high"
				>
			<?php endif; ?>
			<div class="brand-page-hero__gradient brand-page-hero__gradient--apparatuur"></div>
			<div class="brand-page-hero__radial brand-page-hero__radial--apparatuur"></div>
		</div>
		<div class="brand-page-hero__fade" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container brand-page-hero__content--apparatuur brand-page-hero__content--apparatuur-overview">
			<div class="brand-page-hero__inner brand-page-hero__inner--apparatuur" data-reveal>
				<?php kc_brand_eyebrow( (string) ( $data['hero']['eyebrow'] ?? '' ), true ); ?>
				<h1 class="brand-page-hero__title brand-page-hero__title--apparatuur">
					<?php echo esc_html( (string) ( $data['hero']['title'] ?? '' ) ); ?>
					<br>
					<em><?php echo esc_html( (string) ( $data['hero']['highlight'] ?? '' ) ); ?></em>
				</h1>
				<p class="brand-page-hero__lede brand-page-hero__lede--apparatuur"><?php echo esc_html( (string) ( $data['hero']['subtitle'] ?? '' ) ); ?></p>
				<div class="brand-page-hero__actions">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url( home_url( '/consultation/' ) ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Plan showroombezoek', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url( home_url( '/apparatuur/afzuigkappen/' ) ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Bekijk afzuigkappen', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
				<?php if ( ! empty( $data['hero']['badges'] ) ) : ?>
					<div class="brand-page-hero__badge-strip-wrap brand-page-hero__badge-strip-wrap--apparatuur">
						<div class="brand-page-hero__badge-strip">
							<?php foreach ( (array) $data['hero']['badges'] as $index => $badge ) : ?>
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
			</div>
		</div>
	</section>

	<section class="section-shell app-types-section">
		<div class="site-container">
			<div class="app-types-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Categorieën', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--apparatuur-types">
					<?php esc_html_e( 'Alles voor een', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'complete', 'keuken-centrum' ); ?></em>
					<?php esc_html_e( 'keuken', 'keuken-centrum' ); ?>
				</h2>
			</div>
			<div class="keukens-brand-grid">
				<?php foreach ( (array) ( $data['categories'] ?? [] ) as $index => $category ) : ?>
					<div class="h-full" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.06 ) ); ?>">
						<a class="app-cat-card group" href="<?php echo esc_url( (string) ( $category['href'] ?? '' ) ); ?>">
							<div class="app-cat-card__media">
								<img
									class="app-cat-card__image"
									src="<?php echo esc_url( (string) ( $category['image'] ?? '' ) ); ?>"
									alt="<?php echo esc_attr( (string) ( $category['name'] ?? '' ) ); ?>"
									loading="lazy"
									decoding="async"
									width="640"
									height="416"
								>
								<span class="app-cat-card__chip"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
								<span class="app-cat-card__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
							</div>
							<div class="app-cat-card__body">
								<span class="app-cat-card__tag"><?php echo esc_html( (string) ( $category['tagline'] ?? '' ) ); ?></span>
								<h3><?php echo esc_html( (string) ( $category['name'] ?? '' ) ); ?></h3>
								<p><?php echo esc_html( (string) ( $category['description'] ?? '' ) ); ?></p>
							</div>
							<span class="app-cat-card__line" aria-hidden="true"></span>
						</a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container">
			<div class="mb-10" data-reveal>
				<?php kc_brand_eyebrow( __( 'Onze merken', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e( 'Vertrouwde', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'topmerken', 'keuken-centrum' ); ?></em>
				</h2>
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

	<section class="section-shell app-brands-section">
		<div class="site-container">
			<div class="app-value-grid">
				<?php foreach ( (array) ( $data['valueProps'] ?? [] ) as $index => $item ) : ?>
					<article
						class="keukens-value-card<?php echo 1 === (int) $index ? ' keukens-value-card--dark' : ''; ?>"
						data-reveal
						data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.1 ) ); ?>"
					>
						<span class="keukens-value-card__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
						<h3><?php echo esc_html( (string) ( $item['title'] ?? '' ) ); ?></h3>
						<p><?php echo esc_html( (string) ( $item['body'] ?? '' ) ); ?></p>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container keukens-faq-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow( __( 'Veelgestelde vragen', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--apparatuur-faq">
					<?php esc_html_e( 'Alles over', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'apparatuur', 'keuken-centrum' ); ?></em>
				</h2>
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

	<section class="brand-showroom-cta">
		<div class="site-container">
			<div class="brand-showroom-cta__inner">
				<div class="brand-showroom-cta__copy" data-reveal>
					<?php kc_brand_eyebrow( __( 'Showroom Utrecht', 'keuken-centrum' ), true ); ?>
					<h2 class="keukens-section-title keukens-section-title--light keukens-section-title--apparatuur-cta">
						<?php esc_html_e( 'Ervaar', 'keuken-centrum' ); ?>
						<em><?php esc_html_e( 'topapparatuur', 'keuken-centrum' ); ?></em>
						<?php esc_html_e( 'live', 'keuken-centrum' ); ?>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php esc_html_e( 'BORA, Quooker, Miele en meer. Vergelijk systemen naast elkaar met persoonlijk advies.', 'keuken-centrum' ); ?></p>
				</div>
				<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url( home_url( '/consultation/' ) ); ?>" data-reveal>
					<span class="premium-pill-button__label"><?php esc_html_e( 'Boek een afspraak', 'keuken-centrum' ); ?></span>
					<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>
		</div>
	</section>
</div>
