<?php
/**
 * Header template — React visual parity (fixed dual-band chrome + mega menu).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

$header_label = kc_get_option('header_cta_label', 'Plan showroombezoek');
$header_url   = kc_get_option('header_cta_url', function_exists('kc_consultation_url') ? kc_consultation_url() : home_url('/consultation/'));
// Canonical consultation destination for Plan showroombezoek (React /consultation).
if ( function_exists( 'kc_consultation_url' ) && false !== stripos( (string) $header_label, 'showroombezoek' ) ) {
	$normalized = untrailingslashit( (string) $header_url );
	if (
		str_contains( $normalized, '#consultation' )
		|| str_ends_with( $normalized, '/contact' )
		|| '' === $normalized
	) {
		$header_url = kc_consultation_url();
	}
}
$phone        = kc_get_option('contact_phone', '030 241 5122');
$email        = kc_get_option('contact_email', 'info@keuken-centrum.nl');
$google_rating = kc_get_option('google_rating', '4,9');
$nav_data     = function_exists( 'kc_nav_mega_data' ) ? kc_nav_mega_data() : [];
$nav_labels   = is_array( $nav_data['labels'] ?? null ) ? $nav_data['labels'] : [];
$nav_home     = (string) ( $nav_labels['home'] ?? __( 'Home', 'keuken-centrum' ) );
$nav_keukens  = (string) ( $nav_labels['keukens'] ?? __( 'Keukens', 'keuken-centrum' ) );
$nav_bladen   = (string) ( $nav_labels['keukenbladen'] ?? __( 'Keukenbladen', 'keuken-centrum' ) );
$nav_apps     = (string) ( $nav_labels['apparatuur'] ?? __( 'Apparatuur', 'keuken-centrum' ) );
$nav_offers   = (string) ( $nav_labels['aanbiedingen'] ?? __( 'Aanbiedingen', 'keuken-centrum' ) );
$nav_contact  = (string) ( $nav_labels['contact'] ?? __( 'Contact', 'keuken-centrum' ) );
$nav_offers_url = (string) ( $nav_data['aanbiedingen_url'] ?? home_url( '/aanbiedingen/' ) );
$logo_uri     = kc_theme_img('logo-keuken-1-1.webp') ?: kc_theme_img('logo-keuken-centrum-transparent.png') ?: kc_theme_img('logo-keuken.webp');
if (! $logo_uri) {
	$logo_path = get_theme_file_path('assets/img/logo.png');
	$logo_uri  = file_exists($logo_path) ? kc_asset('assets/img/logo.png') : '';
}

$is_home = is_front_page();
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class($is_home ? 'kc-home' : ''); ?>>
<?php wp_body_open(); ?>
<a class="screen-reader-text skip-link" href="#main-content"><?php esc_html_e('Ga naar de inhoud', 'keuken-centrum'); ?></a>

<header class="site-header<?php echo $is_home ? ' site-header--hero' : ' site-header--solid'; ?>" data-site-header>
	<div class="nav-topbar" data-nav-topbar>
		<div class="site-shell nav-topbar__inner">
			<div class="nav-topbar__meta">
				<a
					class="nav-topbar__item nav-topbar__google"
					href="https://www.google.com/maps/search/?api=1&query=Keuken-Centrum+Utrecht+Zonnebaan+8"
					target="_blank"
					rel="noopener noreferrer"
				>
					<svg class="nav-topbar__google-logo" viewBox="0 0 24 24" aria-hidden="true">
						<path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 3.3 14.7 2.3 12 2.3 6.6 2.3 2.3 6.6 2.3 12S6.6 21.7 12 21.7c6.9 0 9.5-4.9 9.5-9.4 0-.6-.1-1.1-.1-1.5H12z"/>
					</svg>
					<span class="nav-topbar__rating"><?php echo esc_html( (string) $google_rating ); ?></span>
					<span class="nav-topbar__stars" aria-hidden="true">
						<?php for ( $i = 0; $i < 5; $i++ ) : ?>
							<svg viewBox="0 0 16 16"><path d="M8 1.2l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.47l-3.52 1.85.67-3.92L2.3 5.34l3.94-.57L8 1.2z"/></svg>
						<?php endfor; ?>
					</span>
					<span class="nav-topbar__reviews-label"><?php esc_html_e('Google Reviews', 'keuken-centrum'); ?></span>
				</a>
				<span class="nav-topbar__sep" aria-hidden="true"></span>
				<span class="nav-topbar__item">
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 14h1c1.1 0 2-.9 2-2V2H6c-1.5 0-2.81.83-3.49 2.05" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17c0 1.66 1.34 3 3 3h1c0-1.1.9-2 2-2s2 .9 2 2h4c0-1.1.9-2 2-2s2 .9 2 2h1c1.66 0 3-1.34 3-3v-3h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29l-1.71-2.99A2.016 2.016 0 0 0 16.84 5H15v7c0 1.1-.9 2-2 2h-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM16 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM22 12v2h-3c-.55 0-1-.45-1-1v-3c0-.55.45-1 1-1h1.29L22 12ZM2 8h6M2 11h4M2 14h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<?php esc_html_e('Snelle levering', 'keuken-centrum'); ?>
				</span>
				<span class="nav-topbar__sep" aria-hidden="true"></span>
				<span class="nav-topbar__item">
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.49 2.23 5.5 4.11c-1.15.43-2.09 1.79-2.09 3.01v7.43c0 1.18.78 2.73 1.73 3.44l4.3 3.21c1.41 1.06 3.73 1.06 5.14 0l4.3-3.21c.95-.71 1.73-2.26 1.73-3.44V7.12c0-1.23-.94-2.59-2.09-3.02l-4.99-1.87c-.85-.31-2.21-.31-3.04 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="m9.05 11.87 1.61 1.61 4.3-4.3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<?php esc_html_e('+5 jaar garantie', 'keuken-centrum'); ?>
				</span>
				<span class="nav-topbar__sep" aria-hidden="true"></span>
				<a class="nav-topbar__item" href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>">
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10"/></svg>
					<?php echo esc_html($phone); ?>
				</a>
				<span class="nav-topbar__sep" aria-hidden="true"></span>
				<a class="nav-topbar__item" href="<?php echo esc_url('mailto:' . $email); ?>">
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="m17 9-3.13 2.5c-1.03.82-2.72.82-3.75 0L7 9" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<?php echo esc_html($email); ?>
				</a>
			</div>
		</div>
	</div>

	<div class="nav-band">
		<div class="site-shell nav-shell">
			<a class="nav-logo" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php echo esc_attr(get_bloginfo('name')); ?>">
				<?php if (has_custom_logo()) : ?>
					<?php echo wp_kses_post(get_custom_logo()); ?>
				<?php elseif ($logo_uri) : ?>
					<img src="<?php echo esc_url($logo_uri); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" width="280" height="48">
				<?php else : ?>
					<span class="nav-logo__text"><?php bloginfo('name'); ?></span>
				<?php endif; ?>
			</a>

			<nav class="primary-nav" aria-label="<?php esc_attr_e('Hoofdnavigatie', 'keuken-centrum'); ?>" data-desktop-nav>
				<ul class="primary-nav__list">
					<li><a class="nav-link" href="<?php echo esc_url(home_url('/')); ?>"<?php echo $is_home ? ' aria-current="page"' : ''; ?>><?php echo esc_html( $nav_home ); ?></a></li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-keukens">
							<span><?php echo esc_html( $nav_keukens ); ?></span>
							<?php echo kc_icon_nav_chevron(); ?>
						</button>
						<div class="mega-panel mega-panel--kitchens" id="mega-keukens" data-mega-panel hidden role="menu" aria-label="<?php echo esc_attr( $nav_keukens ); ?>">
							<?php kc_render_kitchens_mega(); ?>
						</div>
					</li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-bladen">
							<span><?php echo esc_html( $nav_bladen ); ?></span>
							<?php echo kc_icon_nav_chevron(); ?>
						</button>
						<div class="mega-panel mega-panel--editorial" id="mega-bladen" data-mega-panel hidden role="menu" aria-label="<?php echo esc_attr( $nav_bladen ); ?>">
							<?php kc_render_mega_editorial('keukenbladen'); ?>
						</div>
					</li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-apps">
							<span><?php echo esc_html( $nav_apps ); ?></span>
							<?php echo kc_icon_nav_chevron(); ?>
						</button>
						<div class="mega-panel mega-panel--editorial" id="mega-apps" data-mega-panel hidden role="menu" aria-label="<?php echo esc_attr( $nav_apps ); ?>">
							<?php kc_render_mega_editorial('apparatuur'); ?>
						</div>
					</li>

					<li><a class="nav-link" href="<?php echo esc_url( $nav_offers_url ); ?>"><?php echo esc_html( $nav_offers ); ?></a></li>
					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-contact">
							<span><?php echo esc_html( $nav_contact ); ?></span>
							<?php echo kc_icon_nav_chevron(); ?>
						</button>
						<div class="mega-panel mega-panel--simple" id="mega-contact" data-mega-panel hidden role="menu" aria-label="<?php echo esc_attr( $nav_contact ); ?>">
							<?php kc_render_mega_simple(); ?>
						</div>
					</li>
				</ul>
			</nav>

			<div class="nav-actions">
				<span class="nav-divider" aria-hidden="true"></span>
				<a class="nav-cta" href="<?php echo esc_url($header_url); ?>">
					<span><?php echo esc_html($header_label); ?></span>
					<span class="nav-cta__arrow" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>

			<button class="nav-mobile-toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="mobile-navigation">
				<span class="nav-mobile-toggle__lines" aria-hidden="true">
					<span></span><span></span><span></span>
				</span>
				<span class="screen-reader-text"><?php esc_html_e('Open menu', 'keuken-centrum'); ?></span>
			</button>
		</div>
	</div>

	<div class="nav-mobile" id="mobile-navigation" data-nav-panel hidden>
		<div class="nav-mobile__inner">
			<div class="nav-mobile__head">
				<span class="nav-mobile__brand"><?php bloginfo('name'); ?></span>
				<button type="button" class="nav-mobile__close" data-nav-close aria-label="<?php esc_attr_e('Sluit menu', 'keuken-centrum'); ?>">×</button>
			</div>
			<?php kc_render_mobile_nav($header_url, $header_label); ?>
		</div>
	</div>
</header>
