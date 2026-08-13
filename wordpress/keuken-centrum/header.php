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
$header_url   = kc_get_option('header_cta_url', home_url('/contact'));
$phone        = kc_get_option('contact_phone', '030 241 5122');
$email        = kc_get_option('contact_email', 'info@keuken-centrum.nl');
$logo_uri     = kc_theme_img('logo-keuken.webp');
if (! $logo_uri) {
	$logo_path = get_theme_file_path('assets/img/logo.png');
	$logo_uri  = file_exists($logo_path) ? kc_asset('assets/img/logo.png') : '';
}

$is_home = is_front_page();
$keukens = home_url('/keukens/');
$bladen  = home_url('/keukenbladen/');
$apps    = home_url('/apparatuur/');
$config  = 'https://keuken-elevated.vercel.app/brands';

$brand_highlights = [
	['label' => 'AI Küchen', 'href' => home_url('/keukens/ai-kuchen/'), 'img' => kc_theme_img('brands/aikuchen-hero.webp'), 'note' => 'Duitsland'],
	['label' => 'Leicht', 'href' => home_url('/keukens/leicht/'), 'img' => kc_theme_img('brands/leicht-hero.webp'), 'note' => 'Duitsland'],
	['label' => 'Zampieri', 'href' => home_url('/keukens/zampieri/'), 'img' => kc_theme_img('brands/zampieri-hero.webp'), 'note' => 'Italië'],
];
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
				<span><?php esc_html_e('Snelle levering', 'keuken-centrum'); ?></span>
				<span class="nav-topbar__dot" aria-hidden="true"></span>
				<span><?php esc_html_e('+5 jaar garantie', 'keuken-centrum'); ?></span>
			</div>
			<div class="nav-topbar__contact">
				<a href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a>
				<a href="<?php echo esc_url('mailto:' . $email); ?>"><?php echo esc_html($email); ?></a>
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
					<li><a class="nav-link" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'keuken-centrum'); ?></a></li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-controls="mega-keukens"><?php esc_html_e('Keukens', 'keuken-centrum'); ?></button>
						<div class="mega-panel mega-panel--wide" id="mega-keukens" data-mega-panel hidden>
							<div class="mega-panel__rail">
								<p class="mega-panel__eyebrow"><?php esc_html_e('Keukenmerken', 'keuken-centrum'); ?></p>
								<a href="<?php echo esc_url(home_url('/keukens/ai-kuchen/')); ?>">AI Küchen</a>
								<a href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>">Leicht</a>
								<a href="<?php echo esc_url(home_url('/keukens/nobilia/')); ?>">Nobilia</a>
								<a href="<?php echo esc_url(home_url('/keukens/zampieri/')); ?>">Zampieri</a>
								<a href="<?php echo esc_url(home_url('/keukens/cucinesse/')); ?>">Cucinesse</a>
								<a class="mega-panel__cta" href="<?php echo esc_url($keukens); ?>"><?php esc_html_e('Alle keukenmerken', 'keuken-centrum'); ?></a>
							</div>
							<div class="mega-panel__cards">
								<?php foreach ($brand_highlights as $card) : ?>
									<a class="mega-card" href="<?php echo esc_url($card['href']); ?>">
										<?php if ($card['img']) : ?>
											<img src="<?php echo esc_url($card['img']); ?>" alt="" loading="lazy" width="320" height="200">
										<?php endif; ?>
										<span class="mega-card__note"><?php echo esc_html($card['note']); ?></span>
										<span class="mega-card__label"><?php echo esc_html($card['label']); ?></span>
									</a>
								<?php endforeach; ?>
							</div>
						</div>
					</li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-controls="mega-bladen"><?php esc_html_e('Keukenbladen', 'keuken-centrum'); ?></button>
						<div class="mega-panel" id="mega-bladen" data-mega-panel hidden>
							<div class="mega-panel__groups">
								<div>
									<p class="mega-panel__eyebrow"><?php esc_html_e('Materialen', 'keuken-centrum'); ?></p>
									<a href="<?php echo esc_url(home_url('/keukenbladen/silestone/')); ?>">Silestone</a>
									<a href="<?php echo esc_url(home_url('/keukenbladen/dekton/')); ?>">Dekton</a>
									<a href="<?php echo esc_url(home_url('/keukenbladen/neolith/')); ?>">Neolith</a>
									<a href="<?php echo esc_url(home_url('/keukenbladen/sensa/')); ?>">Sensa</a>
								</div>
								<div>
									<p class="mega-panel__eyebrow"><?php esc_html_e('Verder', 'keuken-centrum'); ?></p>
									<a href="<?php echo esc_url($bladen); ?>"><?php esc_html_e('Alle keukenbladen', 'keuken-centrum'); ?></a>
									<a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Materiaaladvies', 'keuken-centrum'); ?></a>
								</div>
							</div>
						</div>
					</li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-controls="mega-apps"><?php esc_html_e('Apparatuur', 'keuken-centrum'); ?></button>
						<div class="mega-panel" id="mega-apps" data-mega-panel hidden>
							<div class="mega-panel__groups">
								<div>
									<p class="mega-panel__eyebrow"><?php esc_html_e('Koken', 'keuken-centrum'); ?></p>
									<a href="<?php echo esc_url(home_url('/apparatuur/kookplaten/')); ?>"><?php esc_html_e('Kookplaten', 'keuken-centrum'); ?></a>
									<a href="<?php echo esc_url(home_url('/apparatuur/fornuizen/')); ?>"><?php esc_html_e('Fornuizen', 'keuken-centrum'); ?></a>
									<a href="<?php echo esc_url(home_url('/apparatuur/quooker/')); ?>">Quooker</a>
								</div>
								<div>
									<p class="mega-panel__eyebrow"><?php esc_html_e('Afzuiging', 'keuken-centrum'); ?></p>
									<a href="<?php echo esc_url(home_url('/apparatuur/afzuigkappen/')); ?>"><?php esc_html_e('Afzuigkappen', 'keuken-centrum'); ?></a>
									<a href="<?php echo esc_url(home_url('/apparatuur/ovens/')); ?>"><?php esc_html_e('Ovens', 'keuken-centrum'); ?></a>
									<a href="<?php echo esc_url($apps); ?>"><?php esc_html_e('Alle apparatuur', 'keuken-centrum'); ?></a>
								</div>
							</div>
						</div>
					</li>

					<li><a class="nav-link" href="<?php echo esc_url(home_url('/aanbiedingen/')); ?>"><?php esc_html_e('Aanbiedingen', 'keuken-centrum'); ?></a></li>
					<li><a class="nav-link" href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact', 'keuken-centrum'); ?></a></li>
				</ul>
			</nav>

			<a class="nav-cta" href="<?php echo esc_url($header_url); ?>">
				<span><?php echo esc_html($header_label); ?></span>
				<span class="nav-cta__arrow" aria-hidden="true">→</span>
			</a>

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
			<nav aria-label="<?php esc_attr_e('Mobiel menu', 'keuken-centrum'); ?>">
				<a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'keuken-centrum'); ?></a>
				<details>
					<summary><?php esc_html_e('Keukens', 'keuken-centrum'); ?></summary>
					<a href="<?php echo esc_url($keukens); ?>"><?php esc_html_e('Alle merken', 'keuken-centrum'); ?></a>
					<a href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>">Leicht</a>
					<a href="<?php echo esc_url(home_url('/keukens/nobilia/')); ?>">Nobilia</a>
					<a href="<?php echo esc_url(home_url('/keukens/ai-kuchen/')); ?>">AI Küchen</a>
					<a href="<?php echo esc_url(home_url('/keukens/zampieri/')); ?>">Zampieri</a>
					<a href="<?php echo esc_url(home_url('/keukens/cucinesse/')); ?>">Cucinesse</a>
				</details>
				<details>
					<summary><?php esc_html_e('Keukenbladen', 'keuken-centrum'); ?></summary>
					<a href="<?php echo esc_url($bladen); ?>"><?php esc_html_e('Alle keukenbladen', 'keuken-centrum'); ?></a>
				</details>
				<details>
					<summary><?php esc_html_e('Apparatuur', 'keuken-centrum'); ?></summary>
					<a href="<?php echo esc_url($apps); ?>"><?php esc_html_e('Alle apparatuur', 'keuken-centrum'); ?></a>
				</details>
				<a href="<?php echo esc_url(home_url('/aanbiedingen/')); ?>"><?php esc_html_e('Aanbiedingen', 'keuken-centrum'); ?></a>
				<a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact', 'keuken-centrum'); ?></a>
				<a href="<?php echo esc_url($config); ?>" target="_blank" rel="noreferrer"><?php esc_html_e('Start configurator', 'keuken-centrum'); ?></a>
			</nav>
			<a class="nav-mobile__cta" href="<?php echo esc_url($header_url); ?>"><?php echo esc_html($header_label); ?></a>
		</div>
	</div>
</header>
