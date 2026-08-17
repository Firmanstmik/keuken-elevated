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
$logo_uri = kc_theme_img('logo-keuken-1-1.webp') ?: kc_theme_img('logo-keuken.webp');
if (! $logo_uri) {
	$logo_path = get_theme_file_path('assets/img/logo.png');
	$logo_uri  = file_exists($logo_path) ? kc_asset('assets/img/logo.png') : '';
}

$is_home = is_front_page();
$keukens = home_url('/keukens/');
$bladen  = home_url('/keukenbladen/');
$apps    = home_url('/apparatuur/');
$config  = 'https://keuken-elevated.vercel.app/brands';
$leicht  = home_url('/keukens/leicht/');

/**
 * Renders a React-parity editorial mega panel.
 *
 * @param array $args Panel configuration.
 */
if (! function_exists('kc_render_mega_editorial')) {
	function kc_render_mega_editorial(array $args): void {
		$title      = $args['title'] ?? '';
		$groups     = $args['groups'] ?? [];
		$featured   = $args['featured'] ?? [];
		$cols       = count($groups) >= 3 ? 'mega-groups--3' : 'mega-groups--2';
		$image      = $featured['image'] ?? '';
		$feat_title = $featured['title'] ?? '';
		$feat_desc  = $featured['description'] ?? '';
		$feat_btn   = $featured['button_text'] ?? '';
		$feat_href  = $featured['button_href'] ?? '#';
		?>
	<div class="mega-editorial">
		<div class="mega-editorial__index">
			<div class="mega-editorial__head">
				<div class="mega-editorial__brand">
					<span class="mega-editorial__gem" aria-hidden="true">
						<svg viewBox="0 0 24 24" width="16" height="16" fill="none"><path d="M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88ZM3.5 8h17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
					</span>
					<div>
						<span class="mega-editorial__kicker"><?php esc_html_e('Premium collectie', 'keuken-centrum'); ?></span>
						<span class="mega-editorial__subkicker"><?php esc_html_e('Met zorg geselecteerd in Utrecht', 'keuken-centrum'); ?></span>
					</div>
				</div>
				<span class="mega-editorial__curated"><?php esc_html_e('Curated by KC', 'keuken-centrum'); ?></span>
			</div>
			<p class="mega-editorial__title"><?php echo esc_html($title); ?></p>
			<div class="mega-editorial__rule" aria-hidden="true"></div>

			<div class="mega-groups <?php echo esc_attr($cols); ?>">
				<?php foreach ($groups as $index => $group) : ?>
					<div class="mega-group">
						<div class="mega-group__head">
							<span class="mega-group__num">0<?php echo esc_html((string) ($index + 1)); ?></span>
							<span class="mega-group__label"><?php echo esc_html($group['title']); ?></span>
						</div>
						<ul class="mega-group__list">
							<?php foreach ($group['items'] as $item) : ?>
								<li>
									<a href="<?php echo esc_url($item['href']); ?>">
										<span><?php echo esc_html($item['label']); ?></span>
										<span class="mega-group__arrow" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
									</a>
								</li>
							<?php endforeach; ?>
						</ul>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<aside class="mega-featured">
			<?php if ($image) : ?>
				<div class="mega-featured__media">
					<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" width="480" height="384" />
					<span class="mega-featured__badge"><?php esc_html_e('Showroom keuze', 'keuken-centrum'); ?></span>
					<div class="mega-featured__caption">
						<p class="mega-featured__title"><?php echo esc_html($feat_title); ?></p>
						<p class="mega-featured__desc"><?php echo esc_html($feat_desc); ?></p>
					</div>
				</div>
			<?php endif; ?>

			<div class="mega-featured__stats">
				<div>
					<span class="mega-featured__stat-value">45+</span>
					<span class="mega-featured__stat-label"><?php esc_html_e('Jaar ervaring', 'keuken-centrum'); ?></span>
				</div>
				<div>
					<span class="mega-featured__stat-value mega-featured__stat-value--place"><?php esc_html_e('Utrecht', 'keuken-centrum'); ?></span>
					<span class="mega-featured__stat-label"><?php esc_html_e('Eigen showroom', 'keuken-centrum'); ?></span>
				</div>
			</div>

			<a class="mega-featured__cta" href="<?php echo esc_url($feat_href); ?>">
				<span><?php echo esc_html($feat_btn); ?></span>
				<span class="mega-featured__cta-icon" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
			</a>
		</aside>
	</div>
		<?php
	}
}

/**
 * React-parity Keukens mega menu: dark category rail and brand cards.
 */
if (! function_exists('kc_render_kitchens_mega')) {
	function kc_render_kitchens_mega(): void {
		$categories = [
			[
				'label' => __('Keukenmerken', 'keuken-centrum'),
				'eyebrow' => __('Uitgelichte keukenmerken', 'keuken-centrum'),
				'title' => __('Europees design, geselecteerd in Utrecht', 'keuken-centrum'),
				'footer' => __('5 premium merken', 'keuken-centrum'),
				'detail' => __('Duitse precisie & Italiaanse finesse', 'keuken-centrum'),
				'url' => home_url('/keukens/'),
				'link' => __('Alle keukenmerken', 'keuken-centrum'),
				'cards' => [
					['AI Küchen', __('Innovatief & modern', 'keuken-centrum'), home_url('/keukens/ai-kuchen/'), kc_theme_img('brands/aikuchen-hero.webp')],
					['Leicht', __('Architectonisch design', 'keuken-centrum'), home_url('/keukens/leicht/'), kc_theme_img('brands/leicht-hero.webp')],
					['Zampieri', __('Italiaanse verfijning', 'keuken-centrum'), home_url('/keukens/zampieri/'), kc_theme_img('brands/zampieri-hero.webp')],
				],
			],
			[
				'label' => __('Leicht collecties', 'keuken-centrum'),
				'eyebrow' => __('Leicht signature series', 'keuken-centrum'),
				'title' => __('Architecturale collecties met karakter', 'keuken-centrum'),
				'footer' => __('4 showroomseries', 'keuken-centrum'),
				'detail' => __('Van sculpturale Bossa tot serene Kyoto', 'keuken-centrum'),
				'url' => home_url('/keukens/leicht/'),
				'link' => __('Alle Leicht collecties', 'keuken-centrum'),
				'cards' => [
					['Bossa', __('Verticale structuur', 'keuken-centrum'), home_url('/keukens/leicht/bossa/'), 'https://keuken-centrum.nl/wp-content/uploads/Leicht-Bossa-showroom--scaled.webp'],
					['Taj Mahal', __('Monumentale elegantie', 'keuken-centrum'), home_url('/keukens/leicht/taj-mahal/'), 'https://keuken-centrum.nl/wp-content/uploads/Leicht-keukens.webp'],
					['Kyoto', __('Japandi rust', 'keuken-centrum'), home_url('/keukens/leicht/kyoto/'), 'https://keuken-centrum.nl/wp-content/uploads/Leicht-Kyoto-showroom.webp'],
				],
			],
			[
				'label' => __('Keukenstijlen', 'keuken-centrum'),
				'eyebrow' => __('Vind uw eigen stijl', 'keuken-centrum'),
				'title' => __('Van minimalistisch tot warm en tijdloos', 'keuken-centrum'),
				'footer' => __('Voor iedere woonstijl', 'keuken-centrum'),
				'detail' => __('Ontdek materialen, kleuren en vormen', 'keuken-centrum'),
				'url' => home_url('/#collections'),
				'link' => __('Alle keukenstijlen', 'keuken-centrum'),
				'cards' => [
					[__('Modern', 'keuken-centrum'), __('Strak & greeploos', 'keuken-centrum'), home_url('/#collections'), kc_theme_img('hero/hero_img1.webp')],
					[__('Japandi', 'keuken-centrum'), __('Warm & sereen', 'keuken-centrum'), home_url('/#collections'), kc_theme_img('hero/hero_img2.webp')],
					[__('Industrieel', 'keuken-centrum'), __('Krachtig & karaktervol', 'keuken-centrum'), home_url('/#collections'), kc_theme_img('hero/hero_img4.webp')],
				],
			],
			[
				'label' => __('Keuken op maat', 'keuken-centrum'),
				'eyebrow' => __('Persoonlijk maatwerk', 'keuken-centrum'),
				'title' => __('Ontworpen rond uw ruimte en dagelijks leven', 'keuken-centrum'),
				'footer' => __('Volledig persoonlijk', 'keuken-centrum'),
				'detail' => __('Van eerste schets tot perfecte montage', 'keuken-centrum'),
				'url' => home_url('/configure/'),
				'link' => __('Start uw ontwerp', 'keuken-centrum'),
				'cards' => [
					[__('3D ontwerp', 'keuken-centrum'), __('Uw ideeën in beeld', 'keuken-centrum'), home_url('/configure/'), kc_theme_img('hero/hero_img4.webp')],
					[__('Materiaalkeuze', 'keuken-centrum'), __('Voel het verschil', 'keuken-centrum'), home_url('/configure/'), kc_theme_img('hero/hero_img3.webp')],
					[__('Montage', 'keuken-centrum'), __('Zorgeloos geplaatst', 'keuken-centrum'), home_url('/configure/'), kc_theme_img('hero/hero_img5.webp')],
				],
			],
			[
				'label' => __('Showroomkeukens', 'keuken-centrum'),
				'eyebrow' => __('Direct te ervaren', 'keuken-centrum'),
				'title' => __('Inspiratie en voordeel in onze showroom', 'keuken-centrum'),
				'footer' => __('Showroom Utrecht', 'keuken-centrum'),
				'detail' => __('Bekijk, voel en vergelijk in alle rust', 'keuken-centrum'),
				'url' => home_url('/showroom-keukens/'),
				'link' => __('Bekijk showroomkeukens', 'keuken-centrum'),
				'cards' => [
					[__('Nieuwe opstellingen', 'keuken-centrum'), __('Live te bekijken', 'keuken-centrum'), home_url('/showroom-keukens/'), kc_theme_img('showroom.jpg')],
					[__('Showroomdeals', 'keuken-centrum'), __('Direct voordeel', 'keuken-centrum'), home_url('/aanbiedingen/'), kc_theme_img('hero/hero_img2.webp')],
					[__('Direct leverbaar', 'keuken-centrum'), __('Snel in huis', 'keuken-centrum'), home_url('/aanbiedingen/'), kc_theme_img('hero/hero_img1.webp')],
				],
			],
			[
				'label' => __('Persoonlijk advies', 'keuken-centrum'),
				'eyebrow' => __('Advies van onze specialisten', 'keuken-centrum'),
				'title' => __('Samen maken we van uw wensen een ontwerp', 'keuken-centrum'),
				'footer' => __('45+ jaar ervaring', 'keuken-centrum'),
				'detail' => __('Persoonlijk advies zonder verplichtingen', 'keuken-centrum'),
				'url' => home_url('/contact/'),
				'link' => __('Plan een showroombezoek', 'keuken-centrum'),
				'cards' => [
					[__('Kennismaken', 'keuken-centrum'), __('Vertel ons uw wensen', 'keuken-centrum'), home_url('/consultation/'), kc_theme_img('hero/hero_img3.webp')],
					[__('Ontwerpsessie', 'keuken-centrum'), __('Samen aan tafel', 'keuken-centrum'), home_url('/consultation/'), kc_theme_img('showroom.jpg')],
					[__('Vrijblijvende offerte', 'keuken-centrum'), __('Helder & persoonlijk', 'keuken-centrum'), home_url('/consultation/'), kc_theme_img('hero/hero_img5.webp')],
				],
			],
		];
		?>
		<div class="mega-kitchens" data-kitchens-mega>
			<aside class="mega-kitchens__rail">
				<p><?php esc_html_e('Ontdek onze keukens', 'keuken-centrum'); ?></p>
				<?php foreach ($categories as $index => $category) : ?>
					<button type="button" class="mega-kitchens__category<?php echo 0 === $index ? ' is-active' : ''; ?>" data-kitchen-category="<?php echo esc_attr((string) $index); ?>" aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>">
						<span class="mega-kitchens__icon" aria-hidden="true"><?php echo kc_icon_mega_category($index); ?></span><span><?php echo esc_html($category['label']); ?></span><b aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></b>
					</button>
				<?php endforeach; ?>
			</aside>
			<div class="mega-kitchens__panels">
				<?php foreach ($categories as $index => $category) : ?>
					<section class="mega-kitchens__panel<?php echo 0 === $index ? ' is-active' : ''; ?>" data-kitchen-panel="<?php echo esc_attr((string) $index); ?>">
						<header><div><p><?php echo esc_html($category['eyebrow']); ?></p><h3><?php echo esc_html($category['title']); ?></h3></div><em><?php esc_html_e('Curated by KC', 'keuken-centrum'); ?></em></header>
						<div class="mega-kitchens__cards">
							<?php foreach ($category['cards'] as $card) : ?>
								<a href="<?php echo esc_url($card[2]); ?>" class="mega-kitchens__card"><span><?php if ($card[3]) : ?><img src="<?php echo esc_url($card[3]); ?>" alt="" loading="lazy"><?php endif; ?></span><strong><?php echo esc_html($card[0]); ?></strong><small><?php echo esc_html($card[1]); ?></small></a>
							<?php endforeach; ?>
						</div>
						<footer><span><strong><?php echo esc_html($category['footer']); ?></strong> · <?php echo esc_html($category['detail']); ?></span><a href="<?php echo esc_url($category['url']); ?>"><?php echo esc_html($category['link']); ?> <?php echo kc_icon_arrow_right(); ?></a></footer>
					</section>
				<?php endforeach; ?>
			</div>
		</div>
		<?php
	}
}
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
					<span class="nav-topbar__rating">4,9</span>
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
					<li><a class="nav-link" href="<?php echo esc_url(home_url('/')); ?>"<?php echo $is_home ? ' aria-current="page"' : ''; ?>><?php esc_html_e('Home', 'keuken-centrum'); ?></a></li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-keukens">
							<span><?php esc_html_e('Keukens', 'keuken-centrum'); ?></span>
							<svg class="nav-chevron" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</button>
						<div class="mega-panel mega-panel--kitchens" id="mega-keukens" data-mega-panel hidden role="menu">
							<?php kc_render_kitchens_mega(); ?>
						</div>
					</li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-bladen">
							<span><?php esc_html_e('Keukenbladen', 'keuken-centrum'); ?></span>
							<svg class="nav-chevron" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</button>
						<div class="mega-panel mega-panel--editorial" id="mega-bladen" data-mega-panel hidden role="menu">
							<?php
							kc_render_mega_editorial(
								[
									'title'    => __('Stijlvolle en duurzame keukenbladen', 'keuken-centrum'),
									'groups'   => [
										[
											'title' => __('Materialen', 'keuken-centrum'),
											'items' => [
												['label' => 'Silestone', 'href' => home_url('/keukenbladen/silestone/')],
												['label' => 'Dekton', 'href' => home_url('/keukenbladen/dekton/')],
												['label' => 'Neolith', 'href' => home_url('/keukenbladen/neolith/')],
												['label' => 'Sensa', 'href' => home_url('/keukenbladen/sensa/')],
											],
										],
										[
											'title' => __('Advies', 'keuken-centrum'),
											'items' => [
												['label' => __('Alle keukenbladen', 'keuken-centrum'), 'href' => $bladen],
												['label' => __('Offerte op maat', 'keuken-centrum'), 'href' => home_url('/consultation/')],
											],
										],
									],
									'featured' => [
										'title'       => __('Natuursteen & Composiet', 'keuken-centrum'),
										'description' => __('Kies uit honderden kleuren en afwerkingen. Van hittebestendig Dekton tot luxe marmerlook.', 'keuken-centrum'),
										'button_text' => __('Ontdek Materialen', 'keuken-centrum'),
										'button_href' => $bladen,
										'image'       => kc_theme_img('marmer-img.webp') ?: kc_theme_img('mat-concrete.jpg'),
									],
								]
							);
							?>
						</div>
					</li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-apps">
							<span><?php esc_html_e('Apparatuur', 'keuken-centrum'); ?></span>
							<svg class="nav-chevron" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</button>
						<div class="mega-panel mega-panel--editorial" id="mega-apps" data-mega-panel hidden role="menu">
							<?php
							kc_render_mega_editorial(
								[
									'title'    => __('Hoogwaardige inbouwapparatuur', 'keuken-centrum'),
									'groups'   => [
										[
											'title' => __('Koken', 'keuken-centrum'),
											'items' => [
												['label' => __('Kookplaten', 'keuken-centrum'), 'href' => home_url('/apparatuur/kookplaten/')],
												['label' => __('Fornuizen', 'keuken-centrum'), 'href' => home_url('/apparatuur/fornuizen/')],
												['label' => 'Quooker', 'href' => home_url('/apparatuur/quooker/')],
											],
										],
										[
											'title' => __('Ventilatie', 'keuken-centrum'),
											'items' => [
												['label' => __('Afzuigkappen', 'keuken-centrum'), 'href' => home_url('/apparatuur/afzuigkappen/')],
												['label' => __('Werkblad afzuiging', 'keuken-centrum'), 'href' => home_url('/apparatuur/werkblad-afzuiging/')],
												['label' => __('Wave afzuigkappen', 'keuken-centrum'), 'href' => home_url('/apparatuur/wave-afzuigkappen/')],
											],
										],
										[
											'title' => __('Koelen & vaat', 'keuken-centrum'),
											'items' => [
												['label' => __('Koelkasten & Vriezers', 'keuken-centrum'), 'href' => home_url('/apparatuur/koelkasten-vriezers/')],
												['label' => __('Vaatwassers', 'keuken-centrum'), 'href' => home_url('/apparatuur/vaatwassers/')],
											],
										],
									],
									'featured' => [
										'title'       => __('Hoogwaardige Inbouwapparatuur', 'keuken-centrum'),
										'description' => __('Ontdek de nieuwste systemen van Miele, Bora en Quooker geïntegreerd in onze showroom.', 'keuken-centrum'),
										'button_text' => __('Bekijk Apparatuur', 'keuken-centrum'),
										'button_href' => $apps,
										'image'       => kc_theme_img('bora-img.webp') ?: kc_theme_img('hero/hero_img3.webp'),
									],
								]
							);
							?>
						</div>
					</li>

					<li><a class="nav-link" href="<?php echo esc_url(home_url('/aanbiedingen/')); ?>"><?php esc_html_e('Aanbiedingen', 'keuken-centrum'); ?></a></li>
					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-contact">
							<span><?php esc_html_e('Contact', 'keuken-centrum'); ?></span>
							<svg class="nav-chevron" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</button>
						<div class="mega-panel mega-panel--simple" id="mega-contact" data-mega-panel hidden role="menu">
							<a class="mega-simple__link" href="<?php echo esc_url(home_url('/contact/')); ?>" role="menuitem">
								<span class="mega-simple__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"/><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"/></svg></span>
								<span class="mega-simple__label"><?php esc_html_e('Contact & route', 'keuken-centrum'); ?></span>
							</a>
							<a class="mega-simple__link" href="<?php echo esc_url(home_url('/showroom-keukens/')); ?>" role="menuitem">
								<span class="mega-simple__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"/><path d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"/></svg></span>
								<span class="mega-simple__label"><?php esc_html_e('Showroom keukens', 'keuken-centrum'); ?></span>
							</a>
							<a class="mega-simple__link" href="<?php echo esc_url(home_url('/consultation/')); ?>" role="menuitem">
								<span class="mega-simple__icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"/><path d="M14.5 4.5v2c0 1.1.9 2 2 2h2M8 13h4M8 17h8"/></svg></span>
								<span class="mega-simple__label"><?php esc_html_e('Offerte op maat', 'keuken-centrum'); ?></span>
							</a>
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
					<a href="<?php echo esc_url(home_url('/#collections')); ?>"><?php esc_html_e('Keukenstijlen', 'keuken-centrum'); ?></a>
				</details>
				<details>
					<summary><?php esc_html_e('Keukenbladen', 'keuken-centrum'); ?></summary>
					<a href="<?php echo esc_url($bladen); ?>"><?php esc_html_e('Alle keukenbladen', 'keuken-centrum'); ?></a>
					<a href="<?php echo esc_url(home_url('/keukenbladen/silestone/')); ?>">Silestone</a>
					<a href="<?php echo esc_url(home_url('/keukenbladen/dekton/')); ?>">Dekton</a>
					<a href="<?php echo esc_url(home_url('/keukenbladen/neolith/')); ?>">Neolith</a>
					<a href="<?php echo esc_url(home_url('/keukenbladen/sensa/')); ?>">Sensa</a>
				</details>
				<details>
					<summary><?php esc_html_e('Apparatuur', 'keuken-centrum'); ?></summary>
					<a href="<?php echo esc_url($apps); ?>"><?php esc_html_e('Alle apparatuur', 'keuken-centrum'); ?></a>
					<a href="<?php echo esc_url(home_url('/apparatuur/kookplaten/')); ?>"><?php esc_html_e('Kookplaten', 'keuken-centrum'); ?></a>
					<a href="<?php echo esc_url(home_url('/apparatuur/quooker/')); ?>">Quooker</a>
					<a href="<?php echo esc_url(home_url('/apparatuur/afzuigkappen/')); ?>"><?php esc_html_e('Afzuigkappen', 'keuken-centrum'); ?></a>
				</details>
				<a href="<?php echo esc_url(home_url('/aanbiedingen/')); ?>"><?php esc_html_e('Aanbiedingen', 'keuken-centrum'); ?></a>
				<a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact', 'keuken-centrum'); ?></a>
				<a href="<?php echo esc_url($config); ?>" target="_blank" rel="noreferrer"><?php esc_html_e('Start configurator', 'keuken-centrum'); ?></a>
			</nav>
			<a class="nav-mobile__cta" href="<?php echo esc_url($header_url); ?>"><?php echo esc_html($header_label); ?></a>
		</div>
	</div>
</header>
