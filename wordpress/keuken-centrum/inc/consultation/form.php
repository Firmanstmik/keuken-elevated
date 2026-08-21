<?php
/**
 * Consultation form AJAX handler (wp_mail).
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

	$name     = sanitize_text_field( wp_unslash( (string) ( $_POST['name'] ?? '' ) ) );
	$email    = sanitize_email( wp_unslash( (string) ( $_POST['email'] ?? '' ) ) );
	$phone    = sanitize_text_field( wp_unslash( (string) ( $_POST['phone'] ?? '' ) ) );
	$showroom = sanitize_text_field( wp_unslash( (string) ( $_POST['showroom'] ?? '' ) ) );
	$budget   = sanitize_text_field( wp_unslash( (string) ( $_POST['budget'] ?? '' ) ) );
	$date     = sanitize_text_field( wp_unslash( (string) ( $_POST['date'] ?? '' ) ) );
	$notes    = sanitize_textarea_field( wp_unslash( (string) ( $_POST['notes'] ?? '' ) ) );

	if ( '' === $name || ! is_email( $email ) || '' === $showroom ) {
		wp_send_json_error( [ 'message' => 'invalid' ], 400 );
	}

	$allowed_showrooms = function_exists( 'kc_consultation_showrooms' ) ? kc_consultation_showrooms() : [];
	if ( $allowed_showrooms && ! in_array( $showroom, $allowed_showrooms, true ) ) {
		wp_send_json_error( [ 'message' => 'showroom' ], 400 );
	}

	$to = (string) kc_get_option( 'contact_email', 'info@keuken-centrum.nl' );
	$subject = sprintf( 'Consultatieaanvraag via website: %s', $name );
	$body    = "Naam: {$name}\nEmail: {$email}\nTelefoon: {$phone}\nShowroom: {$showroom}\nBudget: {$budget}\nDatum: {$date}\n\nWensen:\n{$notes}\n";

	$headers = [
		'Content-Type: text/plain; charset=UTF-8',
		'Reply-To: ' . $name . ' <' . $email . '>',
	];

	$sent = wp_mail( $to, $subject, $body, $headers );

	if ( ! $sent ) {
		// Still acknowledge UX success — delivery can be SMTP-dependent.
		wp_send_json_success( [ 'delivered' => false ] );
	}

	wp_send_json_success( [ 'delivered' => true ] );
}
add_action( 'wp_ajax_kc_consultation_submit', 'kc_consultation_submit_ajax' );
add_action( 'wp_ajax_nopriv_kc_consultation_submit', 'kc_consultation_submit_ajax' );
