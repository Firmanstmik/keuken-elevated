<?php
/**
 * Contact page (React ContactPage parity).
 *
 * @package Keuken_Centrum
 *
 * @var array<string, mixed> $args
 */

$data = is_array( $args['data'] ?? null ) ? $args['data'] : ( function_exists( 'kc_contact_page_data' ) ? kc_contact_page_data() : [] );
if ( ! $data ) {
	return;
}

$phone      = (string) ( $data['phone'] ?? '030 241 5122' );
$phone_href = (string) ( $data['phone_href'] ?? 'tel:+31302415122' );
$email      = (string) ( $data['email'] ?? 'info@keuken-centrum.nl' );
$address    = (string) ( $data['address'] ?? 'Zonnebaan 8' );
$postal     = (string) ( $data['postal'] ?? '3542 EC Utrecht' );
$hero_img   = (string) ( $data['hero']['image'] ?? '' );
?>
<div class="brand-page brand-page--contact">
	<section class="brand-page-hero brand-page-hero--contact" data-brand-hero>
		<div class="brand-page-hero__media" aria-hidden="true">
			<?php if ( $hero_img ) : ?>
				<img
					src="<?php echo esc_url( $hero_img ); ?>"
					alt="<?php esc_attr_e( 'Showroom Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>"
					width="1600"
					height="1067"
					decoding="async"
					fetchpriority="high"
				>
			<?php endif; ?>
			<div class="brand-page-hero__gradient brand-page-hero__gradient--contact"></div>
			<div class="brand-page-hero__radial brand-page-hero__radial--contact"></div>
		</div>
		<div class="brand-page-hero__fade brand-page-hero__fade--contact" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container brand-page-hero__content--contact">
			<div class="brand-page-hero__inner brand-page-hero__inner--contact" data-reveal>
				<?php kc_brand_eyebrow( (string) ( $data['hero']['eyebrow'] ?? '' ), true ); ?>
				<h1 class="brand-page-hero__title brand-page-hero__title--contact">
					<?php echo esc_html( (string) ( $data['hero']['title'] ?? '' ) ); ?>
					<em><?php echo esc_html( (string) ( $data['hero']['highlight'] ?? '' ) ); ?></em>
				</h1>
				<p class="brand-page-hero__lede brand-page-hero__lede--contact"><?php echo esc_html( (string) ( $data['hero']['subtitle'] ?? '' ) ); ?></p>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container contact-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow( __( 'Stuur een bericht', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--contact-form"><?php esc_html_e( 'Laat een bericht achter', 'keuken-centrum' ); ?></h2>
				<p class="keukens-body-copy contact-form-lede"><?php esc_html_e( 'Wij nemen vaak dezelfde werkdag nog contact op.', 'keuken-centrum' ); ?></p>

				<form class="contact-form" data-contact-form data-contact-email="<?php echo esc_attr( $email ); ?>" novalidate>
					<label class="visually-hidden" for="kc-contact-name"><?php esc_html_e( 'Naam', 'keuken-centrum' ); ?></label>
					<input
						id="kc-contact-name"
						class="contact-form__input"
						type="text"
						name="name"
						placeholder="<?php esc_attr_e( 'Naam', 'keuken-centrum' ); ?>"
						autocomplete="name"
						required
					>

					<div class="contact-form__row">
						<label class="visually-hidden" for="kc-contact-phone"><?php esc_html_e( 'Telefoonnummer', 'keuken-centrum' ); ?></label>
						<input
							id="kc-contact-phone"
							class="contact-form__input"
							type="tel"
							name="phone"
							placeholder="<?php esc_attr_e( 'Telefoonnummer', 'keuken-centrum' ); ?>"
							autocomplete="tel"
						>
						<label class="visually-hidden" for="kc-contact-email"><?php esc_html_e( 'Email', 'keuken-centrum' ); ?></label>
						<input
							id="kc-contact-email"
							class="contact-form__input"
							type="email"
							name="email"
							placeholder="<?php esc_attr_e( 'Email', 'keuken-centrum' ); ?>"
							autocomplete="email"
						>
					</div>

					<label class="visually-hidden" for="kc-contact-message"><?php esc_html_e( 'Bericht', 'keuken-centrum' ); ?></label>
					<textarea
						id="kc-contact-message"
						class="contact-form__textarea"
						name="message"
						rows="6"
						placeholder="<?php esc_attr_e( 'Bericht', 'keuken-centrum' ); ?>"
						required
					></textarea>

					<div class="contact-form__actions">
						<button type="submit" class="premium-pill-button premium-pill-button--lg contact-form__submit is-disabled" disabled>
							<span class="premium-pill-button__label"><?php esc_html_e( 'Verstuur', 'keuken-centrum' ); ?></span>
							<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
						</button>
					</div>
				</form>
			</div>

			<div class="contact-aside" data-reveal>
				<div class="contact-info-card">
					<?php kc_brand_eyebrow( __( 'Vragen?', 'keuken-centrum' ) ); ?>
					<h3 class="contact-info-card__title"><?php esc_html_e( 'Wij staan je graag te woord', 'keuken-centrum' ); ?></h3>
					<div class="contact-channels">
						<?php foreach ( (array) ( $data['channels'] ?? [] ) as $index => $channel ) : ?>
							<a
								class="contact-channel group"
								href="<?php echo esc_url( (string) ( $channel['href'] ?? '#' ) ); ?>"
								<?php echo ! empty( $channel['external'] ) ? ' target="_blank" rel="noopener noreferrer"' : ''; ?>
								data-reveal
								data-reveal-delay="<?php echo esc_attr( (string) ( $index * 0.08 ) ); ?>"
							>
								<span class="contact-channel__icon" aria-hidden="true">
									<?php
									$icon = (string) ( $channel['icon'] ?? 'phone' );
									if ( 'map-pin' === $icon ) {
										echo kc_icon_map_pin(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									} else {
										echo kc_icon_brand( $icon ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
									}
									?>
								</span>
								<span class="contact-channel__body">
									<span class="contact-channel__label"><?php echo esc_html( (string) ( $channel['label'] ?? '' ) ); ?></span>
									<span class="contact-channel__value"><?php echo esc_html( (string) ( $channel['value'] ?? '' ) ); ?></span>
								</span>
								<span class="contact-channel__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
							</a>
						<?php endforeach; ?>
					</div>
				</div>

				<div class="contact-hours-card">
					<span class="contact-hours-card__ghost" aria-hidden="true">9 tot 18</span>
					<div class="contact-hours-card__inner">
						<div class="contact-hours-card__head">
							<span class="contact-hours-card__icon" aria-hidden="true"><?php echo kc_icon_brand( 'clock' ); ?></span>
							<h3><?php esc_html_e( 'Openingstijden', 'keuken-centrum' ); ?></h3>
						</div>
						<dl class="contact-hours-list">
							<?php foreach ( (array) ( $data['hours'] ?? [] ) as $row ) : ?>
								<div class="contact-hours-list__row">
									<dt><?php echo esc_html( (string) ( $row['d'] ?? '' ) ); ?></dt>
									<dd><?php echo esc_html( (string) ( $row['h'] ?? '' ) ); ?></dd>
								</div>
							<?php endforeach; ?>
						</dl>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="section-shell contact-map-section">
		<div class="site-container">
			<div class="contact-map-section__head" data-reveal>
				<?php kc_brand_eyebrow( __( 'Adres', 'keuken-centrum' ) ); ?>
				<h2 class="keukens-section-title keukens-section-title--contact-map">
					<?php echo esc_html( $address ); ?>,
					<em><?php echo esc_html( $postal ); ?></em>
				</h2>
			</div>
			<div class="contact-map" data-reveal>
				<iframe
					title="<?php echo esc_attr( sprintf( 'Keuken-Centrum Utrecht, %s, %s', $address, $postal ) ); ?>"
					src="https://www.google.com/maps?q=Keuken-centrum.nl,+Zonnebaan+8,+3542+EC+Utrecht&amp;output=embed"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</section>

	<section class="brand-showroom-cta">
		<div class="site-container">
			<div class="brand-showroom-cta__inner">
				<div class="brand-showroom-cta__copy brand-showroom-cta__copy--contact" data-reveal>
					<?php kc_brand_eyebrow( __( 'Showroom Utrecht', 'keuken-centrum' ), true ); ?>
					<h2 class="keukens-section-title keukens-section-title--light keukens-section-title--contact-cta">
						<?php esc_html_e( 'Liever', 'keuken-centrum' ); ?>
						<em><?php esc_html_e( 'persoonlijk', 'keuken-centrum' ); ?></em>
						<?php esc_html_e( 'langskomen?', 'keuken-centrum' ); ?>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php esc_html_e( 'Bezoek onze showroom op de Zonnebaan voor persoonlijk advies bij een goede kop koffie.', 'keuken-centrum' ); ?></p>
				</div>
				<div class="brand-showroom-cta__actions">
					<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url( home_url( '/consultation/' ) ); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php esc_html_e( 'Plan showroombezoek', 'keuken-centrum' ); ?></span>
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
