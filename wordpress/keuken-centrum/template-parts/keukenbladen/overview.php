<?php
/**
 * Keukenbladen overview (React KeukenbladenOverviewPage parity).
 *
 * @package Keuken_Centrum
 */

$data       = kc_keukenbladen_overview_data();
$phone      = (string) ( $data['phone'] ?? kc_get_option( 'contact_phone', '030 241 5122' ) );
$phone_href = 'tel:+31' . preg_replace( '/\D+/', '', $phone );
$hero       = (string) ( $data['hero']['image'] ?? '' );
?>
<div class="brand-page brand-page--keukenbladen brand-page--overview">
	<section class="brand-page-hero brand-page-hero--worktops" data-keukenbladen-hero>
		<div class="brand-page-hero__media" aria-hidden="true">
			<?php if ( $hero ) : ?>
				<img
					src="<?php echo esc_url( $hero ); ?>"
					alt="<?php esc_attr_e( 'Keukenbladen Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>"
					width="1920"
					height="1080"
					decoding="async"
					fetchpriority="high"
				>
			<?php endif; ?>
			<div class="brand-page-hero__gradient brand-page-hero__gradient--worktops"></div>
			<div class="brand-page-hero__radial"></div>
		</div>
		<div class="brand-page-hero__fade" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container brand-page-hero__content--worktops">
			<div class="brand-page-hero__inner brand-page-hero__inner--worktops" data-reveal>
				<?php kc_brand_eyebrow( $data['hero']['eyebrow'], true ); ?>
				<h1 class="brand-page-hero__title brand-page-hero__title--worktops">
					<?php echo esc_html( $data['hero']['title'] ); ?>
					<br>
					<em><?php echo esc_html( $data['hero']['highlight'] ); ?></em>
				</h1>
				<p class="brand-page-hero__lede brand-page-hero__lede--worktops"><?php echo esc_html( $data['hero']['subtitle'] ); ?></p>
				<div class="brand-page-hero__actions">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url( home_url( '/#consultation' ) ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Plan showroombezoek', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url( home_url( '/keukenbladen/dekton/' ) ); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e( 'Ontdek Dekton', 'keuken-centrum' ); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
				<?php if ( ! empty( $data['hero']['badges'] ) ) : ?>
					<div class="brand-page-hero__badge-strip-wrap">
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
				<?php kc_brand_eyebrow( $data['intro']['eyebrow'] ); ?>
				<h2 class="keukens-section-title"><?php echo esc_html( $data['intro']['title'] ); ?></h2>
			</div>
			<div data-reveal>
				<?php foreach ( $data['intro']['paragraphs'] as $paragraph ) : ?>
					<p class="keukens-body-copy"><?php echo esc_html( $paragraph ); ?></p>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell keukens-brands-section">
		<div class="site-container">
			<div class="keukens-brands-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Materialen', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e( 'Werkbladen met', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'prestatie', 'keuken-centrum' ); ?></em>
					<?php esc_html_e( 'en uitstraling', 'keuken-centrum' ); ?>
				</h2>
			</div>

			<div class="keukens-brand-grid">
				<?php foreach ( $data['materials'] as $index => $material ) : ?>
					<div data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.08 ) ); ?>">
						<a class="keukens-brand-card" href="<?php echo esc_url( $material['href'] ); ?>">
							<div class="keukens-brand-card__media">
								<img
									class="keukens-brand-card__image"
									src="<?php echo esc_url( $material['image'] ); ?>"
									alt="<?php echo esc_attr( $material['name'] ); ?>"
									loading="lazy"
									decoding="async"
									width="640"
									height="400"
								>
							</div>
							<div class="keukens-brand-card__body">
								<div class="keukens-brand-card__meta">
									<span class="keukens-brand-card__country"><?php echo esc_html( $material['country'] ); ?></span>
									<span class="keukens-brand-card__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
								</div>
								<h3 class="keukens-brand-card__name"><?php echo esc_html( $material['name'] ); ?></h3>
								<p class="keukens-brand-card__tagline"><?php echo esc_html( $material['tagline'] ); ?></p>
								<p class="keukens-brand-card__desc"><?php echo esc_html( $material['description'] ); ?></p>
							</div>
						</a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container">
			<div class="keukens-brands-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Stijlen', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--worktops-styles">
					<?php esc_html_e( 'Marmer, betonlook en', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'keramiek', 'keuken-centrum' ); ?></em>
				</h2>
			</div>
			<div class="keukenbladen-styles-grid">
				<?php foreach ( $data['styles'] as $index => $style ) : ?>
					<article class="brand-pillar-card" data-reveal data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.1 ) ); ?>">
						<div class="brand-pillar-card__media">
							<img
								class="brand-pillar-card__photo"
								src="<?php echo esc_url( $style['image'] ); ?>"
								alt="<?php echo esc_attr( $style['title'] ); ?>"
								loading="lazy"
								decoding="async"
								width="640"
								height="480"
							>
							<span class="brand-pillar-card__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
						</div>
						<div class="brand-pillar-card__body">
							<h3><?php echo esc_html( $style['title'] ); ?></h3>
							<p><?php echo esc_html( $style['body'] ); ?></p>
						</div>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="brand-custom-band">
		<span class="brand-custom-band__ghost" aria-hidden="true">Werkblad</span>
		<div class="site-container brand-custom-band__inner brand-custom-band__inner--worktops" data-reveal>
			<?php kc_brand_eyebrow( __( 'Op maat bladen', 'keuken-centrum' ), true ); ?>
			<h2 class="keukens-section-title keukens-section-title--light keukens-section-title--worktops-custom">
				<?php esc_html_e( 'Elk blad', 'keuken-centrum' ); ?>
				<em><?php esc_html_e( 'op maat', 'keuken-centrum' ); ?></em>
			</h2>
			<div class="keukenbladen-custom-copy">
				<?php foreach ( $data['customNote'] as $paragraph ) : ?>
					<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html( $paragraph ); ?></p>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container keukens-faq-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow( __( 'Veelgestelde vragen', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e( 'Alles over', 'keuken-centrum' ); ?>
					<em><?php esc_html_e( 'keukenbladen', 'keuken-centrum' ); ?></em>
				</h2>
				<div class="brand-faq__contact-card">
					<span class="brand-faq__contact-ghost" aria-hidden="true">?</span>
					<div class="brand-faq__contact-inner">
						<span class="brand-faq__contact-icon" aria-hidden="true">☎</span>
						<div>
							<span class="brand-faq__contact-label"><?php esc_html_e( 'Direct contact', 'keuken-centrum' ); ?></span>
							<a href="<?php echo esc_url( $phone_href ); ?>" class="brand-faq__contact-phone"><?php echo esc_html( $phone ); ?></a>
						</div>
					</div>
				</div>
			</div>
			<div class="brand-faq" data-brand-faq data-reveal>
				<?php foreach ( $data['faq'] as $index => $item ) : ?>
					<details class="brand-faq__item">
						<summary class="brand-faq__trigger">
							<span class="brand-faq__num"><?php echo esc_html( str_pad( (string) ( $index + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
							<span class="brand-faq__question"><?php echo esc_html( $item['q'] ); ?></span>
							<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</summary>
						<div class="brand-faq__content"><?php echo esc_html( $item['a'] ); ?></div>
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
					<h2 class="keukens-section-title keukens-section-title--light keukens-section-title--worktops-cta">
						<?php esc_html_e( 'Kies uw', 'keuken-centrum' ); ?>
						<em><?php esc_html_e( 'perfecte werkblad', 'keuken-centrum' ); ?></em>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php esc_html_e( 'Bekijk materialen, kleuren en afwerkingen in onze showroom. Wij helpen u graag met persoonlijk advies.', 'keuken-centrum' ); ?></p>
				</div>
				<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url( home_url( '/#consultation' ) ); ?>" data-reveal>
					<span class="premium-pill-button__label"><?php esc_html_e( 'Boek een afspraak', 'keuken-centrum' ); ?></span>
					<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>
		</div>
	</section>
</div>
