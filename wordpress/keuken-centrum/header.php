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
					<span class="mega-editorial__gem" aria-hidden="true"></span>
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
										<span class="mega-group__arrow" aria-hidden="true">→</span>
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
				<span class="mega-featured__cta-icon" aria-hidden="true">↗</span>
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
				'title' => __('Europees design, geselecteerd in Utrecht.', 'keuken-centrum'),
				'footer' => __('45+ jaar vakmanschap', 'keuken-centrum'),
				'detail' => __('persoonlijk advies in onze showroom', 'keuken-centrum'),
				'url' => home_url('/keukens/'),
				'link' => __('Alle keukenmerken', 'keuken-centrum'),
				'cards' => [
					['AI Küchen', __('Innovatief & modern', 'keuken-centrum'), home_url('/keukens/ai-kuchen/'), kc_theme_img('hero/hero_img3.webp')],
					['Leicht', __('Architectonisch design', 'keuken-centrum'), home_url('/keukens/leicht/'), kc_theme_img('brands/leicht-hero.webp') ?: kc_theme_img('showroom.jpg')],
					['Zampieri', __('Italiaanse verfijning', 'keuken-centrum'), home_url('/keukens/zampieri/'), kc_theme_img('hero/hero_img4.webp')],
				],
			],
			[
				'label' => __('Leicht collecties', 'keuken-centrum'),
				'eyebrow' => __('Leicht collectie', 'keuken-centrum'),
				'title' => __('Architectuur voor het dagelijks leven.', 'keuken-centrum'),
				'footer' => __('Duitse precisie', 'keuken-centrum'),
				'detail' => __('ontdek de Leicht signatuur', 'keuken-centrum'),
				'url' => home_url('/keukens/leicht/'),
				'link' => __('Ontdek Leicht', 'keuken-centrum'),
				'cards' => [
					['Bossa', __('Warme textuur', 'keuken-centrum'), home_url('/keukens/leicht/'), kc_theme_img('brands/leicht-hero.webp')],
					['Taj Mahal', __('Natuursteen', 'keuken-centrum'), home_url('/keukens/leicht/'), kc_theme_img('marmer-img.webp')],
					['Kyoto', __('Verfijnde rust', 'keuken-centrum'), home_url('/keukens/leicht/'), kc_theme_img('showroom.jpg')],
				],
			],
			[
				'label' => __('Keukenstijlen', 'keuken-centrum'),
				'eyebrow' => __('Stijlen', 'keuken-centrum'),
				'title' => __('Een stijlwereld die bij u past.', 'keuken-centrum'),
				'footer' => __('Persoonlijk samengesteld', 'keuken-centrum'),
				'detail' => __('van materiaal tot indeling', 'keuken-centrum'),
				'url' => home_url('/#collections'),
				'link' => __('Bekijk stijlen', 'keuken-centrum'),
				'cards' => [
					[__('Modern wonen', 'keuken-centrum'), __('Slank & tijdloos', 'keuken-centrum'), home_url('/#collections'), kc_theme_img('hero/hero_img1.webp')],
					[__('Klassieke elegantie', 'keuken-centrum'), __('Warm & verfijnd', 'keuken-centrum'), home_url('/#collections'), kc_theme_img('hero/hero_img2.webp')],
					[__('Industrieel atelier', 'keuken-centrum'), __('Krachtig & karaktervol', 'keuken-centrum'), home_url('/#collections'), kc_theme_img('hero/hero_img4.webp')],
				],
			],
			[
				'label' => __('Keuken op maat', 'keuken-centrum'),
				'eyebrow' => __('Uw ontwerp', 'keuken-centrum'),
				'title' => __('Van eerste idee naar uw eigen keuken.', 'keuken-centrum'),
				'footer' => __('Ontwerp met aandacht', 'keuken-centrum'),
				'detail' => __('maak het persoonlijk', 'keuken-centrum'),
				'url' => 'https://keuken-elevated.vercel.app/brands',
				'link' => __('Start configurator', 'keuken-centrum'),
				'cards' => [
					[__('Indeling', 'keuken-centrum'), __('Slim ontworpen', 'keuken-centrum'), 'https://keuken-elevated.vercel.app/brands', kc_theme_img('hero/hero_img5.webp')],
					[__('Materialen', 'keuken-centrum'), __('Voel het verschil', 'keuken-centrum'), 'https://keuken-elevated.vercel.app/brands', kc_theme_img('beton-img.webp')],
					[__('Apparatuur', 'keuken-centrum'), __('Perfect geïntegreerd', 'keuken-centrum'), 'https://keuken-elevated.vercel.app/brands', kc_theme_img('bora-img.webp')],
				],
			],
			[
				'label' => __('Showroomkeukens', 'keuken-centrum'),
				'eyebrow' => __('Showroom Utrecht', 'keuken-centrum'),
				'title' => __('Ervaar materialen en verhoudingen in het echt.', 'keuken-centrum'),
				'footer' => __('Zonnebaan 8, Utrecht', 'keuken-centrum'),
				'detail' => __('op afspraak, zonder haast', 'keuken-centrum'),
				'url' => home_url('/showroom-keukens/'),
				'link' => __('Bekijk showroom', 'keuken-centrum'),
				'cards' => [
					[__('Showroom', 'keuken-centrum'), __('Kom binnenkijken', 'keuken-centrum'), home_url('/showroom-keukens/'), kc_theme_img('showroom.jpg')],
					[__('Werkbladen', 'keuken-centrum'), __('Raak materialen aan', 'keuken-centrum'), home_url('/keukenbladen/'), kc_theme_img('marmer-img.webp')],
					[__('Advies', 'keuken-centrum'), __('Een vaste adviseur', 'keuken-centrum'), home_url('/contact/'), kc_theme_img('hero/hero_img2.webp')],
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
					[__('Kennismaken', 'keuken-centrum'), __('Vertel ons uw wensen', 'keuken-centrum'), home_url('/contact/'), kc_theme_img('hero/hero_img3.webp')],
					[__('Showroombezoek', 'keuken-centrum'), __('Ervaar materialen', 'keuken-centrum'), home_url('/#showroom'), kc_theme_img('showroom.jpg')],
					[__('Ontwerptraject', 'keuken-centrum'), __('Van idee tot montage', 'keuken-centrum'), home_url('/contact/'), kc_theme_img('hero/hero_img5.webp')],
				],
			],
		];
		?>
		<div class="mega-kitchens" data-kitchens-mega>
			<aside class="mega-kitchens__rail">
				<p><?php esc_html_e('Ontdek onze keukens', 'keuken-centrum'); ?></p>
				<?php foreach ($categories as $index => $category) : ?>
					<button type="button" class="mega-kitchens__category<?php echo 0 === $index ? ' is-active' : ''; ?>" data-kitchen-category="<?php echo esc_attr((string) $index); ?>" aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>">
						<span class="mega-kitchens__icon" aria-hidden="true"><?php echo 0 === $index ? '⌂' : '◇'; ?></span><span><?php echo esc_html($category['label']); ?></span><b aria-hidden="true">›</b>
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
						<footer><span><strong><?php echo esc_html($category['footer']); ?></strong> · <?php echo esc_html($category['detail']); ?></span><a href="<?php echo esc_url($category['url']); ?>"><?php echo esc_html($category['link']); ?> →</a></footer>
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
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 8.5h13.5a4.5 4.5 0 0 1 0 9H14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M3 12.5h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="18.5" cy="17.5" r="1.7" stroke="currentColor" stroke-width="1.5"/><circle cx="8.5" cy="17.5" r="1.7" stroke="currentColor" stroke-width="1.5"/></svg>
					<?php esc_html_e('Snelle levering', 'keuken-centrum'); ?>
				</span>
				<span class="nav-topbar__sep" aria-hidden="true"></span>
				<span class="nav-topbar__item">
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3z" stroke="currentColor" stroke-width="1.5"/><path d="M9.2 12.1l1.9 1.9 3.7-3.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
					<?php esc_html_e('+5 jaar garantie', 'keuken-centrum'); ?>
				</span>
				<span class="nav-topbar__sep" aria-hidden="true"></span>
				<a class="nav-topbar__item" href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>">
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.2 4.8c.4-.4 1-.5 1.5-.3l2.1.8c.6.2 1 .8.9 1.4l-.3 1.8a1.2 1.2 0 0 1-.7 1l-1.1.5a10.4 10.4 0 0 0 4.7 4.7l.5-1.1c.2-.4.6-.6 1-.7l1.8-.3c.6-.1 1.2.3 1.4.9l.8 2.1c.2.5.1 1.1-.3 1.5l-1.2 1.2c-.4.4-1 .6-1.6.5-3.3-.5-6.4-2.3-8.8-4.7S4.1 9.6 3.6 6.3c-.1-.6.1-1.2.5-1.6l1.1-1z" stroke="currentColor" stroke-width="1.4"/></svg>
					<?php echo esc_html($phone); ?>
				</a>
				<span class="nav-topbar__sep" aria-hidden="true"></span>
				<a class="nav-topbar__item" href="<?php echo esc_url('mailto:' . $email); ?>">
					<svg class="nav-topbar__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M4.5 7.5L12 13l7.5-5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
												['label' => __('Offerte op maat', 'keuken-centrum'), 'href' => home_url('/contact/')],
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
												['label' => __('Ovens', 'keuken-centrum'), 'href' => home_url('/apparatuur/ovens/')],
												['label' => __('Alle apparatuur', 'keuken-centrum'), 'href' => $apps],
											],
										],
										[
											'title' => __('Koelen & vaat', 'keuken-centrum'),
											'items' => [
												['label' => __('Koelkasten', 'keuken-centrum'), 'href' => home_url('/apparatuur/koelkasten/')],
												['label' => __('Vaatwassers', 'keuken-centrum'), 'href' => home_url('/apparatuur/vaatwassers/')],
												['label' => __('Wijnklimaat', 'keuken-centrum'), 'href' => home_url('/apparatuur/wijnklimaat/')],
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
								<span class="mega-simple__label"><?php esc_html_e('Contact & route', 'keuken-centrum'); ?></span>
								<span class="mega-simple__desc"><?php esc_html_e('Stuur een bericht, bel ons of plan uw route naar de Zonnebaan.', 'keuken-centrum'); ?></span>
							</a>
							<a class="mega-simple__link" href="<?php echo esc_url(home_url('/showroom-keukens/')); ?>" role="menuitem">
								<span class="mega-simple__label"><?php esc_html_e('Showroom keukens', 'keuken-centrum'); ?></span>
								<span class="mega-simple__desc"><?php esc_html_e('Kom langs in onze showroom in Utrecht en laat u inspireren.', 'keuken-centrum'); ?></span>
							</a>
							<a class="mega-simple__link" href="<?php echo esc_url(home_url('/consultation/')); ?>" role="menuitem">
								<span class="mega-simple__label"><?php esc_html_e('Offerte op maat', 'keuken-centrum'); ?></span>
								<span class="mega-simple__desc"><?php esc_html_e('Vraag online een vrijblijvende offerte aan voor uw droomkeuken.', 'keuken-centrum'); ?></span>
							</a>
						</div>
					</li>
				</ul>
			</nav>

			<div class="nav-actions">
				<span class="nav-divider" aria-hidden="true"></span>
				<a class="nav-cta" href="<?php echo esc_url($header_url); ?>">
					<span><?php echo esc_html($header_label); ?></span>
					<span class="nav-cta__arrow" aria-hidden="true">→</span>
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
