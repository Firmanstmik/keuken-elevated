<?php
/**
 * Aanbiedingen page (React AanbiedingenPage parity).
 *
 * @package Keuken_Centrum
 *
 * @var array<string, mixed> $args
 */

$data = is_array( $args['data'] ?? null ) ? $args['data'] : ( function_exists( 'kc_aanbiedingen_page_data' ) ? kc_aanbiedingen_page_data() : [] );
if ( ! $data ) {
	return;
}

$phone      = (string) ( $data['phone'] ?? '030 241 5122' );
$phone_href = 'tel:+31' . preg_replace( '/\D+/', '', $phone );
$address    = (string) ( $data['address'] ?? 'Zonnebaan 8' );
$postal     = (string) ( $data['postal'] ?? '3542 EC Utrecht' );
$hero_img   = (string) ( $data['hero']['image'] ?? '' );
?>
<div class="brand-page brand-page--aanbiedingen">
	<section class="brand-page-hero brand-page-hero--aanbiedingen" data-brand-hero>
		<div class="brand-page-hero__media" data-brand-hero-parallax aria-hidden="true">
			<?php if ( $hero_img ) : ?>
				<img
					src="<?php echo esc_url( $hero_img ); ?>"
					alt="<?php esc_attr_e( 'Showroomkeuken aanbiedingen Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>"
					width="1920"
					height="1080"
					decoding="async"
					fetchpriority="high"
				>
			<?php endif; ?>
			<div class="brand-page-hero__gradient brand-page-hero__gradient--aanbiedingen"></div>
			<div class="brand-page-hero__radial brand-page-hero__radial--aanbiedingen"></div>
			<div class="brand-page-hero__vignette"></div>
		</div>
		<div class="brand-page-hero__fade" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container brand-page-hero__content--aanbiedingen">
			<div class="brand-page-hero__inner brand-page-hero__inner--aanbiedingen" data-reveal>
				<?php kc_brand_eyebrow( (string) ( $data['hero']['eyebrow'] ?? '' ), true ); ?>
				<h1 class="brand-page-hero__title brand-page-hero__title--aanbiedingen">
					<?php echo esc_html( (string) ( $data['hero']['title'] ?? '' ) ); ?>
					<br>
					<em><?php echo esc_html( (string) ( $data['hero']['highlight'] ?? '' ) ); ?></em>
				</h1>
				<p class="brand-page-hero__lede brand-page-hero__lede--aanbiedingen"><?php echo esc_html( (string) ( $data['hero']['subtitle'] ?? '' ) ); ?></p>
				<div class="brand-page-hero__actions">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url( home_url( '/consultation/' ) ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Kom langs in de showroom', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url( $phone_href ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Bel direct', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
				<?php if ( ! empty( $data['hero']['badges'] ) ) : ?>
					<div class="brand-page-hero__badge-strip-wrap brand-page-hero__badge-strip-wrap--aanbiedingen">
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
				<h2 class="keukens-section-title keukens-section-title--aanbiedingen-intro"><?php echo esc_html( (string) ( $data['intro']['title'] ?? '' ) ); ?></h2>
			</div>
			<div class="aanbiedingen-intro-copy" data-reveal>
				<?php foreach ( (array) ( $data['intro']['paragraphs'] ?? [] ) as $paragraph ) : ?>
					<p class="keukens-body-copy"><?php echo esc_html( (string) $paragraph ); ?></p>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell aanbiedingen-benefits-section">
		<div class="site-container">
			<div class="aanbiedingen-benefits-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Showroomkeukens', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--aanbiedingen-benefits">
					<?php esc_html_e( 'Showroomkeukens tegen de', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'beste prijs', 'keuken-centrum' ); ?></em>
				</h2>
			</div>
			<div class="app-types-grid">
				<?php foreach ( (array) ( $data['benefits'] ?? [] ) as $index => $benefit ) : ?>
					<article class="app-type-card group" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.08 ) ); ?>">
						<div class="app-type-card__media">
							<img
								class="app-type-card__photo"
								src="<?php echo esc_url( (string) ( $benefit['image'] ?? '' ) ); ?>"
								alt="<?php echo esc_attr( (string) ( $benefit['title'] ?? '' ) ); ?>"
								loading="lazy"
								decoding="async"
								width="640"
								height="540"
							>
							<span class="app-type-card__frame" aria-hidden="true"></span>
							<span class="app-type-card__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
							<div class="app-type-card__caption">
								<h3 class="app-type-card__title"><?php echo esc_html( (string) ( $benefit['title'] ?? '' ) ); ?></h3>
								<p class="app-type-card__body"><?php echo esc_html( (string) ( $benefit['body'] ?? '' ) ); ?></p>
							</div>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container">
			<div class="brand-partnership brand-partnership--aanbiedingen-hacker" data-reveal>
				<div class="brand-partnership__copy">
					<?php kc_brand_eyebrow( (string) ( $data['hacker']['eyebrow'] ?? '' ), true ); ?>
					<h2 class="keukens-section-title keukens-section-title--light keukens-section-title--aanbiedingen-hacker">
						<?php echo esc_html( (string) ( $data['hacker']['title'] ?? '' ) ); ?>
						<em><?php echo esc_html( (string) ( $data['hacker']['highlight'] ?? '' ) ); ?></em>
					</h2>
					<div class="aanbiedingen-hacker-copy">
						<?php foreach ( (array) ( $data['hacker']['paragraphs'] ?? [] ) as $paragraph ) : ?>
							<p><?php echo esc_html( (string) $paragraph ); ?></p>
						<?php endforeach; ?>
					</div>
					<div class="aanbiedingen-hacker-stats">
						<?php foreach ( (array) ( $data['hacker']['stats'] ?? [] ) as $stat ) : ?>
							<div>
								<div class="aanbiedingen-hacker-stats__value"><?php echo esc_html( (string) ( $stat['value'] ?? '' ) ); ?></div>
								<div class="aanbiedingen-hacker-stats__label"><?php echo esc_html( (string) ( $stat['label'] ?? '' ) ); ?></div>
							</div>
						<?php endforeach; ?>
					</div>
					<div class="aanbiedingen-hacker-cta">
						<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url( home_url( '/keukens/ai-kuchen/' ) ); ?>">
							<span class="premium-pill-button__label"><?php esc_html_e( 'Ontdek AI Küchen / Häcker', 'keuken-centrum' ); ?></span>
							<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
						</a>
					</div>
				</div>
				<div class="aanbiedingen-hacker-media">
					<img
						src="<?php echo esc_url( (string) ( $data['hacker']['image'] ?? '' ) ); ?>"
						alt="<?php esc_attr_e( 'Häcker showroomkeuken in de sale', 'keuken-centrum' ); ?>"
						loading="lazy"
						decoding="async"
						width="800"
						height="600"
					>
					<span class="aanbiedingen-hacker-media__caption"><?php echo esc_html( (string) ( $data['hacker']['caption'] ?? '' ) ); ?></span>
				</div>
			</div>
		</div>
	</section>

	<section class="section-shell aanbiedingen-brands-section">
		<div class="site-container">
			<div class="aanbiedingen-brands-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Wij werken met de volgende merken', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e( 'De beste merken voor de', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'beste prijs', 'keuken-centrum' ); ?></em>
				</h2>
				<p class="keukens-body-copy aanbiedingen-brands-lede"><?php esc_html_e( 'Ergens al een offerte gehad? Wij bieden vaak een betere prijs.', 'keuken-centrum' ); ?></p>
			</div>
			<div data-reveal>
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
				<h2 class="keukens-section-title keukens-section-title--aanbiedingen-faq">
					<?php esc_html_e( 'Alles over', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'showroomkeukens', 'keuken-centrum' ); ?></em>
				</h2>
				<p class="keukens-body-copy aanbiedingen-faq-lede"><?php esc_html_e( 'Staat je antwoord er niet bij? Neem contact met ons op.', 'keuken-centrum' ); ?></p>
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

	<section class="section-shell aanbiedingen-advisors-section">
		<div class="site-container">
			<div class="aanbiedingen-advisors-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Kom in contact met ons team', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--aanbiedingen-advisors">
					<?php esc_html_e( 'Persoonlijk advies,', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'vrijblijvende offerte', 'keuken-centrum' ); ?></em>
				</h2>
			</div>
			<div class="aanbiedingen-advisors-grid">
				<?php foreach ( (array) ( $data['advisors'] ?? [] ) as $index => $advisor ) : ?>
					<article class="brand-advisor-card group" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.12 ) ); ?>">
						<div class="brand-advisor-card__head">
							<span class="brand-advisor-card__index" aria-hidden="true"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
							<span class="brand-advisor-card__role"><?php echo esc_html( (string) ( $advisor['role'] ?? '' ) ); ?></span>
						</div>
						<h3><?php echo esc_html( (string) ( $advisor['name'] ?? '' ) ); ?></h3>
						<p>“<?php echo esc_html( (string) ( $advisor['bio'] ?? '' ) ); ?>”</p>
						<a class="brand-advisor-card__email" href="<?php echo esc_url( 'mailto:' . (string) ( $advisor['email'] ?? '' ) ); ?>">
							<?php echo esc_html( (string) ( $advisor['email'] ?? '' ) ); ?>
							<span aria-hidden="true"><?php echo kc_icon_export(); ?></span>
						</a>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="brand-showroom-cta">
		<div class="site-container">
			<div class="brand-showroom-cta__inner">
				<div class="brand-showroom-cta__copy brand-showroom-cta__copy--aanbiedingen" data-reveal>
					<?php kc_brand_eyebrow( __( 'Showroom Utrecht', 'keuken-centrum' ), true ); ?>
					<h2 class="keukens-section-title keukens-section-title--light keukens-section-title--aanbiedingen-cta">
						<?php echo esc_html( (string) ( $data['cta']['title'] ?? '' ) ); ?>
						<em><?php echo esc_html( (string) ( $data['cta']['highlight'] ?? '' ) ); ?></em>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html( (string) ( $data['cta']['body'] ?? '' ) ); ?></p>
					<p class="aanbiedingen-cta-meta">
						<span><?php echo esc_html( $address . ', ' . $postal ); ?></span>
						<span class="aanbiedingen-cta-meta__divider" aria-hidden="true"></span>
						<span><?php echo esc_html( $phone ); ?></span>
					</p>
				</div>
				<div class="brand-showroom-cta__actions">
					<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url( home_url( '/consultation/' ) ); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php esc_html_e( 'Boek een afspraak', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--xl" href="<?php echo esc_url( $phone_href ); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php esc_html_e( 'Bel direct', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>
