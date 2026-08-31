<?php
/**
 * Consultation page (React /consultation parity).
 *
 * @package Keuken_Centrum
 *
 * @var array<string, mixed> $args
 */

$data = is_array( $args['data'] ?? null ) ? $args['data'] : ( function_exists( 'kc_consultation_page_data' ) ? kc_consultation_page_data() : [] );
if ( ! $data ) {
	return;
}

$hero     = is_array( $data['hero'] ?? null ) ? $data['hero'] : [];
$preview  = is_array( $data['preview'] ?? null ) ? $data['preview'] : [];
$form     = is_array( $data['form'] ?? null ) ? $data['form'] : [];
$success  = is_array( $data['success'] ?? null ) ? $data['success'] : [];
$showrooms = is_array( $data['showrooms'] ?? null ) ? $data['showrooms'] : [];
$budgets  = is_array( $data['budgets'] ?? null ) ? $data['budgets'] : [];
$features = is_array( $hero['features'] ?? null ) ? $hero['features'] : [];
$feature_icons = [ 'user', 'calendar', 'phone', 'tick-circle' ];
$ajax_url = admin_url( 'admin-ajax.php' );
$nonce    = wp_create_nonce( 'kc_consultation_submit' );
$success_lede_tpl = (string) ( $success['lede'] ?? 'Dank u, {name}. Uw persoonlijke ontwerpadviseur neemt binnen 24 uur contact met u op om de afspraak te bevestigen.' );
?>
<div class="consultation-page" data-consultation-page data-whatsapp-number="<?php echo esc_attr( function_exists( 'kc_consultation_whatsapp_number' ) ? kc_consultation_whatsapp_number() : '31302415122' ); ?>">
	<section class="consultation-layout">
		<div class="consultation-layout__grid">
			<aside class="consultation-hero" data-consultation-hero>
				<div class="consultation-hero__media">
					<div
						class="consultation-hero__bg"
						style="background-image:url('<?php echo esc_url( (string) ( $hero['image'] ?? '' ) ); ?>')"
						role="img"
						aria-label="<?php esc_attr_e( 'Showroom consultatie', 'keuken-centrum' ); ?>"
					></div>
					<div class="consultation-hero__overlay"></div>
					<div class="consultation-hero__top-fade"></div>
					<div class="consultation-hero__bottom-fade"></div>
					<div class="consultation-hero__content">
						<div class="consultation-hero__inner">
							<p class="consultation-hero__eyebrow"><?php echo esc_html( (string) ( $hero['eyebrow'] ?? '' ) ); ?></p>
							<h1 class="consultation-hero__title"><?php echo esc_html( (string) ( $hero['title'] ?? '' ) ); ?></h1>
							<p class="consultation-hero__lede"><?php echo esc_html( (string) ( $hero['lede'] ?? '' ) ); ?></p>
							<div class="consultation-hero__features">
								<?php foreach ( $features as $i => $feature ) : ?>
									<div class="consultation-hero__feature">
										<span class="consultation-hero__feature-icon" aria-hidden="true">
											<?php echo kc_icon_brand( $feature_icons[ $i ] ?? 'check' ); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
										</span>
										<span><?php echo esc_html( (string) $feature ); ?></span>
									</div>
								<?php endforeach; ?>
							</div>
						</div>
					</div>
				</div>
			</aside>

			<div class="kc-consult-panel">
				<div class="kc-consult-panel__inner">
					<div class="consultation-form-view" data-consultation-form-view>
						<button
							type="button"
							class="consultation-proposal-toggle md-only-hidden"
							data-proposal-toggle
							aria-expanded="false"
						>
							<span>
								<span class="consultation-proposal-toggle__eyebrow"><?php esc_html_e( 'Uw voorstel', 'keuken-centrum' ); ?></span>
								<span class="consultation-proposal-toggle__title"><?php esc_html_e( '0 keuzes controleren', 'keuken-centrum' ); ?></span>
							</span>
							<span class="consultation-proposal-toggle__chevron" aria-hidden="true"><?php echo kc_icon_brand( 'arrow-down' ); ?></span>
						</button>

						<div class="consultation-preview-wrap" data-proposal-panel>
							<section class="consultation-preview">
								<div class="consultation-preview__media">
									<div
										class="consultation-preview__bg"
										style="background-image:url('<?php echo esc_url( (string) ( $preview['image'] ?? '' ) ); ?>')"
										role="img"
										aria-label="<?php esc_attr_e( 'Laatste projectvoorvertoning', 'keuken-centrum' ); ?>"
									></div>
									<div class="consultation-preview__media-overlay"></div>
									<div class="consultation-preview__media-copy">
										<p class="consultation-preview__overline"><?php echo esc_html( (string) ( $preview['overline'] ?? '' ) ); ?></p>
										<h2 class="consultation-preview__media-title"><?php echo esc_html( (string) ( $preview['title'] ?? '' ) ); ?></h2>
									</div>
								</div>
								<div class="consultation-preview__body">
									<p class="consultation-preview__kicker"><?php esc_html_e( 'Ontwerpvoorstel', 'keuken-centrum' ); ?></p>
									<h3 class="consultation-preview__title"><?php echo esc_html( (string) ( $preview['title'] ?? '' ) ); ?></h3>
									<p class="consultation-preview__desc"><?php echo esc_html( (string) ( $preview['description'] ?? '' ) ); ?></p>
									<div class="consultation-preview__details">
										<?php foreach ( (array) ( $preview['details'] ?? [] ) as $detail ) : ?>
											<div class="consultation-preview__detail">
												<p class="consultation-preview__detail-label"><?php echo esc_html( (string) ( $detail['label'] ?? '' ) ); ?></p>
												<p class="consultation-preview__detail-value" data-preview-detail="<?php echo esc_attr( strtolower( (string) ( $detail['label'] ?? '' ) ) ); ?>">
													<?php echo esc_html( (string) ( $detail['value'] ?? '' ) ); ?>
												</p>
											</div>
										<?php endforeach; ?>
									</div>
									<div class="consultation-preview__materials" data-consultation-materials hidden>
										<p class="consultation-preview__materials-label"><?php esc_html_e( 'Samengestelde materialen', 'keuken-centrum' ); ?></p>
										<div class="consultation-preview__materials-list" data-consultation-materials-list></div>
									</div>
									<div class="consultation-preview__footer">
										<p><?php echo esc_html( (string) ( $preview['footerNote'] ?? '' ) ); ?></p>
									</div>
								</div>
							</section>
						</div>

						<div class="consultation-form-head">
							<p class="consultation-form-head__eyebrow"><?php echo esc_html( (string) ( $form['eyebrow'] ?? __( 'Stap 05 van 05', 'keuken-centrum' ) ) ); ?></p>
							<h1 class="consultation-form-head__title"><?php echo esc_html( (string) ( $form['title'] ?? __( 'Plan een consultatie', 'keuken-centrum' ) ) ); ?></h1>
							<p class="consultation-form-head__lede">
								<?php echo esc_html( (string) ( $form['lede'] ?? '' ) ); ?>
							</p>
						</div>

						<div class="consultation-form-card">
							<form
								class="consultation-form"
								method="post"
								action="<?php echo esc_url( $ajax_url ); ?>"
								data-consultation-form
								data-ajax-url="<?php echo esc_url( $ajax_url ); ?>"
								data-nonce="<?php echo esc_attr( $nonce ); ?>"
								novalidate
							>
								<input type="hidden" name="nonce" value="<?php echo esc_attr( $nonce ); ?>">
								<input type="hidden" name="action" value="kc_consultation_submit">
								<p class="consultation-form__error" data-consultation-error role="alert"></p>
								<div class="consultation-hp" aria-hidden="true">
									<label for="consultation-company"><?php esc_html_e( 'Website', 'keuken-centrum' ); ?></label>
									<input id="consultation-company" type="text" name="company_website" value="" tabindex="-1" autocomplete="off">
								</div>
								<div class="consultation-field">
									<label for="consultation-name">
										<?php esc_html_e( 'Volledige naam', 'keuken-centrum' ); ?>
										<span class="consultation-field__req">*</span>
									</label>
									<input id="consultation-name" class="consultation-input" type="text" name="name" autocomplete="name" placeholder="<?php esc_attr_e( 'Voor- en achternaam', 'keuken-centrum' ); ?>" required>
									<p class="consultation-field__error" data-error-for="name" hidden><?php esc_html_e( 'Vul uw naam in.', 'keuken-centrum' ); ?></p>
								</div>

								<div class="consultation-field">
									<label for="consultation-email">
										<?php esc_html_e( 'E-mailadres', 'keuken-centrum' ); ?>
										<span class="consultation-field__req">*</span>
									</label>
									<input id="consultation-email" class="consultation-input" type="email" name="email" inputmode="email" autocomplete="email" placeholder="naam@voorbeeld.nl" required>
									<p class="consultation-field__error" data-error-for="email" hidden><?php esc_html_e( 'Vul een geldig e-mailadres in.', 'keuken-centrum' ); ?></p>
								</div>

								<div class="consultation-field">
									<label for="consultation-phone">
										<?php esc_html_e( 'Telefoonnummer', 'keuken-centrum' ); ?>
										<span class="consultation-field__opt"><?php esc_html_e( '(optioneel)', 'keuken-centrum' ); ?></span>
									</label>
									<input id="consultation-phone" class="consultation-input" type="tel" name="phone" inputmode="tel" autocomplete="tel" placeholder="06 12345678">
								</div>

								<div class="consultation-field">
									<label for="consultation-showroom">
										<?php esc_html_e( 'Gewenste showroom', 'keuken-centrum' ); ?>
										<span class="consultation-field__req">*</span>
									</label>
									<select id="consultation-showroom" class="consultation-select" name="showroom" required>
										<option value=""><?php esc_html_e( 'Selecteer een showroom', 'keuken-centrum' ); ?></option>
										<?php foreach ( $showrooms as $showroom ) : ?>
											<option value="<?php echo esc_attr( (string) $showroom ); ?>"><?php echo esc_html( (string) $showroom ); ?></option>
										<?php endforeach; ?>
									</select>
									<p class="consultation-field__error" data-error-for="showroom" hidden><?php esc_html_e( 'Selecteer een showroom.', 'keuken-centrum' ); ?></p>
								</div>

								<div class="consultation-field">
									<label for="consultation-budget"><?php esc_html_e( 'Projectbudget', 'keuken-centrum' ); ?></label>
									<select id="consultation-budget" class="consultation-select" name="budget" data-budget-select>
										<option value=""><?php esc_html_e( 'Kies een budgetindicatie', 'keuken-centrum' ); ?></option>
										<?php foreach ( $budgets as $budget ) : ?>
											<option value="<?php echo esc_attr( (string) $budget ); ?>"><?php echo esc_html( (string) $budget ); ?></option>
										<?php endforeach; ?>
									</select>
								</div>

								<div class="consultation-field">
									<label for="consultation-date"><?php esc_html_e( 'Gewenste datum', 'keuken-centrum' ); ?></label>
									<input id="consultation-date" class="consultation-input" type="date" name="date">
								</div>

								<div class="consultation-field">
									<label for="consultation-notes"><?php esc_html_e( 'Uw wensen', 'keuken-centrum' ); ?></label>
									<textarea id="consultation-notes" class="consultation-textarea" name="notes" rows="5" placeholder="<?php esc_attr_e( 'Vertel ons meer over uw project, planning of specifieke wensen...', 'keuken-centrum' ); ?>"></textarea>
								</div>

								<div class="consultation-form__actions">
									<button type="submit" class="consultation-submit" data-consultation-submit disabled>
										<?php echo esc_html( (string) ( $form['submit_label'] ?? __( 'Consultatie plannen', 'keuken-centrum' ) ) ); ?>
									</button>
								</div>
								<p class="consultation-form__privacy">
									<?php echo esc_html( (string) ( $form['privacy'] ?? '' ) ); ?>
								</p>
							</form>
						</div>
					</div>

					<div
						class="consultation-success"
						data-consultation-success
						data-success-template="<?php echo esc_attr( $success_lede_tpl ); ?>"
						hidden
					>
						<div class="consultation-success__icon" aria-hidden="true"><?php echo kc_icon_brand( 'tick-circle' ); ?></div>
						<p class="consultation-success__eyebrow"><?php echo esc_html( (string) ( $success['eyebrow'] ?? __( 'Consultatie aangevraagd', 'keuken-centrum' ) ) ); ?></p>
						<h2 class="consultation-success__title"><?php echo esc_html( (string) ( $success['title'] ?? '' ) ); ?></h2>
						<p class="consultation-success__lede" data-success-lede></p>
						<div class="consultation-success__rule" aria-hidden="true"></div>
						<p class="consultation-success__meta"><?php esc_html_e( 'Showroom:', 'keuken-centrum' ); ?> <span data-success-showroom></span></p>
						<p class="consultation-success__meta" data-success-date-wrap hidden><?php esc_html_e( 'Gewenste datum:', 'keuken-centrum' ); ?> <span data-success-date></span></p>
						<p class="consultation-success__brand"><?php esc_html_e( 'Keuken Centrum Utrecht', 'keuken-centrum' ); ?></p>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
