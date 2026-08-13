<?php
/**
 * Header template.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

$header_badge = kc_get_option('header_badge', 'Premium showroom Utrecht');
$header_label = kc_get_option('header_cta_label', 'Plan showroombezoek');
$header_url   = kc_get_option('header_cta_url', home_url('/contact'));
$logo_path    = get_theme_file_path('assets/img/logo.png');
$logo_uri     = file_exists($logo_path) ? kc_asset('assets/img/logo.png') : '';
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="screen-reader-text skip-link" href="#main-content"><?php esc_html_e('Ga naar de inhoud', 'keuken-centrum'); ?></a>
<header class="site-header" data-site-header>
	<div class="site-header__inner site-shell">
		<div class="site-header__brand">
			<div class="site-header__logo">
				<?php if (has_custom_logo()) : ?>
					<?php echo wp_kses_post(get_custom_logo()); ?>
				<?php elseif ($logo_uri) : ?>
					<a href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php echo esc_attr(get_bloginfo('name')); ?>">
						<img src="<?php echo esc_url($logo_uri); ?>" alt="<?php echo esc_attr(get_bloginfo('name')); ?>">
					</a>
				<?php else : ?>
					<a class="site-header__logo-text" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php echo esc_attr(get_bloginfo('name')); ?>"><?php bloginfo('name'); ?></a>
				<?php endif; ?>
			</div>
			<div class="site-header__badge"><?php echo esc_html($header_badge); ?></div>
		</div>

		<button class="site-header__toggle" type="button" data-nav-toggle aria-expanded="false" aria-controls="site-navigation">
			<span class="site-header__toggle-line"></span>
			<span class="site-header__toggle-line"></span>
			<span class="site-header__toggle-line"></span>
			<span class="screen-reader-text"><?php esc_html_e('Open menu', 'keuken-centrum'); ?></span>
		</button>

		<div class="site-header__nav" id="site-navigation" data-nav-panel>
			<?php
			wp_nav_menu(
				[
					'theme_location' => 'primary',
					'container'      => 'nav',
					'container_class'=> 'primary-nav',
					'menu_class'     => 'primary-nav__list',
					'fallback_cb'    => false,
				]
			);
			?>

			<a class="btn btn--primary site-header__cta" href="<?php echo esc_url($header_url); ?>">
				<?php echo esc_html($header_label); ?>
			</a>
		</div>
	</div>
</header>
