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
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-keukens"><?php esc_html_e('Keukens', 'keuken-centrum'); ?></button>
						<div class="mega-panel mega-panel--editorial" id="mega-keukens" data-mega-panel hidden role="menu">
							<?php
							kc_render_mega_editorial(
								[
									'title'    => __('Duitse en Italiaanse keukenmerken', 'keuken-centrum'),
									'groups'   => [
										[
											'title' => __('Merken', 'keuken-centrum'),
											'items' => [
												['label' => 'AI Küchen', 'href' => home_url('/keukens/ai-kuchen/')],
												['label' => 'Leicht', 'href' => $leicht],
												['label' => 'Nobilia', 'href' => home_url('/keukens/nobilia/')],
												['label' => 'Zampieri', 'href' => home_url('/keukens/zampieri/')],
												['label' => 'Cucinesse', 'href' => home_url('/keukens/cucinesse/')],
											],
										],
										[
											'title' => __('Leicht series', 'keuken-centrum'),
											'items' => [
												['label' => 'Bossa', 'href' => $leicht],
												['label' => 'Taj Mahal', 'href' => $leicht],
												['label' => 'Ronde Wangen', 'href' => $leicht],
												['label' => 'Kyoto', 'href' => $leicht],
											],
										],
										[
											'title' => __('Ontdekken', 'keuken-centrum'),
											'items' => [
												['label' => __('Keukenstijlen', 'keuken-centrum'), 'href' => home_url('/#collections')],
												['label' => __('Keuken op maat', 'keuken-centrum'), 'href' => $config],
												['label' => __('Showroom keukens', 'keuken-centrum'), 'href' => home_url('/#showroom')],
											],
										],
									],
									'featured' => [
										'title'       => __('Duitse & Italiaanse Kwaliteit', 'keuken-centrum'),
										'description' => __('Ervaar vakmanschap in onze showroom te Utrecht. Al meer dan 45 jaar uw keukenspecialist.', 'keuken-centrum'),
										'button_text' => __('Alle keukenmerken', 'keuken-centrum'),
										'button_href' => $keukens,
										'image'       => kc_theme_img('showroom.jpg') ?: kc_theme_img('brands/leicht-hero.webp'),
									],
								]
							);
							?>
						</div>
					</li>

					<li class="has-mega" data-mega-trigger>
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-bladen"><?php esc_html_e('Keukenbladen', 'keuken-centrum'); ?></button>
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
						<button class="nav-link nav-link--btn" type="button" aria-expanded="false" aria-haspopup="true" aria-controls="mega-apps"><?php esc_html_e('Apparatuur', 'keuken-centrum'); ?></button>
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
												['label' => __('Ovens', 'keuken-centrum'), 'href' => home_url('/apparatuur/ovens/')],
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
