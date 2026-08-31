<?php
/**
 * Consultation form AJAX handler (wp_mail).
 *
 * Success is only returned when wp_mail() returns true.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Handle consultation form submission.
 */
function kc_consultation_submit_ajax(): void {
	check_ajax_referer( 'kc_consultation_submit', 'nonce' );

	$hp = sanitize_text_field( wp_unslash( (string) ( $_POST['company_website'] ?? '' ) ) );
	if ( '' !== $hp ) {
		wp_send_json_error( [ 'message' => __( 'Aanvraag kon niet worden verzonden. Probeer het later opnieuw.', 'keuken-centrum' ) ], 400 );
	}

	$ip     = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( (string) $_SERVER['REMOTE_ADDR'] ) ) : 'unknown';
	$rl_key = 'kc_consult_rl_' . md5( $ip );
	if ( get_transient( $rl_key ) ) {
		wp_send_json_error( [ 'message' => __( 'Te veel verzoeken. Wacht even en probeer opnieuw.', 'keuken-centrum' ) ], 429 );
	}
	set_transient( $rl_key, 1, 20 );

	$name     = sanitize_text_field( wp_unslash( (string) ( $_POST['name'] ?? '' ) ) );
	$email    = sanitize_email( wp_unslash( (string) ( $_POST['email'] ?? '' ) ) );
	$phone    = sanitize_text_field( wp_unslash( (string) ( $_POST['phone'] ?? '' ) ) );
	$showroom = sanitize_text_field( wp_unslash( (string) ( $_POST['showroom'] ?? '' ) ) );
	$budget   = sanitize_text_field( wp_unslash( (string) ( $_POST['budget'] ?? '' ) ) );
	$date     = sanitize_text_field( wp_unslash( (string) ( $_POST['date'] ?? '' ) ) );
	$notes    = sanitize_textarea_field( wp_unslash( (string) ( $_POST['notes'] ?? '' ) ) );

	if ( strlen( $name ) > 120 || strlen( $phone ) > 40 || strlen( $notes ) > 4000 ) {
		wp_send_json_error( [ 'message' => __( 'Controleer de ingevulde velden.', 'keuken-centrum' ) ], 400 );
	}

	if ( '' === $name || ! is_email( $email ) || '' === $showroom ) {
		wp_send_json_error( [ 'message' => __( 'Vul naam, e-mail en showroom in.', 'keuken-centrum' ) ], 400 );
	}

	$allowed_showrooms = function_exists( 'kc_consultation_showrooms' ) ? kc_consultation_showrooms() : [];
	if ( $allowed_showrooms && ! in_array( $showroom, $allowed_showrooms, true ) ) {
		wp_send_json_error( [ 'message' => __( 'Selecteer een geldige showroom.', 'keuken-centrum' ) ], 400 );
	}

	$raw_json = wp_unslash( (string) ( $_POST['config_json'] ?? '' ) );
	if ( strlen( $raw_json ) > 32768 ) {
		wp_send_json_error( [ 'message' => __( 'Configuratie is te groot.', 'keuken-centrum' ) ], 400 );
	}

	$parsed = [];
	if ( '' !== $raw_json ) {
		$decoded = json_decode( $raw_json, true );
		if ( JSON_ERROR_NONE !== json_last_error() || ! is_array( $decoded ) ) {
			wp_send_json_error( [ 'message' => __( 'Configuratie is ongeldig.', 'keuken-centrum' ) ], 400 );
		}
		$parsed = $decoded;
	}

	$config = function_exists( 'kc_configurator_normalize_state' )
		? kc_configurator_normalize_state( $parsed )
		: [
			'brand'      => null,
			'brandName'  => null,
			'style'      => null,
			'styleName'  => null,
			'selections' => [],
			'budget'     => null,
		];

	$allowed_budgets = function_exists( 'kc_consultation_budgets' ) ? kc_consultation_budgets() : [];
	$config_budget   = is_string( $config['budget'] ?? null ) ? (string) $config['budget'] : '';
	if ( $budget && $allowed_budgets && ! in_array( $budget, $allowed_budgets, true ) && $budget !== $config_budget ) {
		wp_send_json_error( [ 'message' => __( 'Selecteer een geldig budget.', 'keuken-centrum' ) ], 400 );
	}

	$email_budget = $budget !== '' ? $budget : $config_budget;

	$config_summary = function_exists( 'kc_consultation_format_config_summary' )
		? kc_consultation_format_config_summary( $config )
		: '';

	$to = kc_consultation_mail_recipient();
	if ( '' === $to ) {
		wp_send_json_error(
			[
				'message' => __( 'Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw of bel de showroom.', 'keuken-centrum' ),
				'reason'  => 'invalid_recipient',
			],
			500
		);
	}

	$subject = sprintf( 'Consultatieaanvraag via website: %s', $name );
	$stamp   = wp_date( 'Y-m-d H:i:s' );
	$body    = "Tijdstip: {$stamp}\n"
		. "Naam: {$name}\nEmail: {$email}\nTelefoon: {$phone}\nShowroom: {$showroom}\nDatum: {$date}\n"
		. 'Projectbudget: ' . ( $email_budget !== '' ? $email_budget : 'niet gekozen' ) . "\n\n"
		. "Keukenconfiguratie:\n{$config_summary}\n\n"
		. "Wensen:\n{$notes}\n";

	$headers = [
		'Content-Type: text/plain; charset=UTF-8',
		'Reply-To: ' . $email,
	];

	$mail_reason = 'wp_mail_false';
	$failed      = static function ( $wp_error ) use ( &$mail_reason ): void {
		if ( ! is_wp_error( $wp_error ) ) {
			return;
		}
		$mail_reason = kc_consultation_mail_reason_code( $wp_error );
	};
	add_action( 'wp_mail_failed', $failed, 10, 1 );

	$sent = wp_mail( $to, $subject, $body, $headers );

	remove_action( 'wp_mail_failed', $failed, 10 );

	if ( ! $sent ) {
		error_log( 'kc_consultation_submit: wp_mail failed reason=' . $mail_reason ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		wp_send_json_error(
			[
				'message' => __( 'Uw aanvraag kon niet worden verzonden. Probeer het later opnieuw of bel de showroom.', 'keuken-centrum' ),
				'reason'  => $mail_reason,
			],
			500
		);
	}

	wp_send_json_success( [ 'delivered' => true ] );
}

/**
 * Destination address for consultation mail (no credentials).
 */
function kc_consultation_mail_recipient(): string {
	$raw = kc_get_option( 'contact_email', 'info@keuken-centrum.nl' );
	if ( is_array( $raw ) ) {
		$raw = reset( $raw );
	}
	$candidate = sanitize_email( (string) $raw );
	if ( is_email( $candidate ) ) {
		return $candidate;
	}
	$fallback = sanitize_email( 'info@keuken-centrum.nl' );
	return is_email( $fallback ) ? $fallback : '';
}

/**
 * Map PHPMailer / wp_mail failure to a non-sensitive reason code.
 *
 * @param WP_Error $error Mail error from wp_mail_failed.
 */
function kc_consultation_mail_reason_code( WP_Error $error ): string {
	$phpmailer = $error->get_error_data( 'wp_mail_failed' );
	$info      = '';
	if ( is_object( $phpmailer ) && isset( $phpmailer->ErrorInfo ) ) {
		$info = strtolower( (string) $phpmailer->ErrorInfo );
	}
	$message = strtolower( (string) $error->get_error_message() );
	$text    = $info . ' ' . $message;
	$text    = preg_replace( '/[^\x20-\x7e]/', ' ', $text ) ?? '';

	if ( str_contains( $text, 'could not instantiate mail function' ) ) {
		return 'php_mail_unavailable';
	}
	if ( str_contains( $text, 'smtp connect' ) || str_contains( $text, 'smtp error' ) ) {
		return 'smtp_transport';
	}
	if ( str_contains( $text, 'invalid address' ) ) {
		return 'invalid_address';
	}
	if ( str_contains( $text, 'could not instantiate' ) ) {
		return 'mailer_instantiate';
	}
	return 'wp_mail_false';
}
add_action( 'wp_ajax_kc_consultation_submit', 'kc_consultation_submit_ajax' );
add_action( 'wp_ajax_nopriv_kc_consultation_submit', 'kc_consultation_submit_ajax' );
