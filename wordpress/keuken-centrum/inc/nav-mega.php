<?php
/**
 * Desktop mega menus + mobile drawer — React Nav.tsx parity.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Theme image with optional fallback.
 */
function kc_mega_img(string $primary, string $fallback = ''): string {
	$uri = kc_theme_img($primary);
	if ($uri) {
		return $uri;
	}
	return $fallback ? kc_theme_img($fallback) : '';
}

/**
 * Shared navigation defaults mirrored from src/components/site/Nav.tsx.
 * Overrides: Keuken-Centrum → Navigatie (ACF) via kc_nav_resolved_data().
 *
 * @return array<string, mixed>
 */
function kc_nav_mega_defaults(): array {
	$keukens = home_url('/keukens/');
	$bladen  = home_url('/keukenbladen/');
	$apps    = home_url('/apparatuur/');
	$config  = home_url('/configure/');

	return [
		'keukens'      => $keukens,
		'bladen'       => $bladen,
		'apps'         => $apps,
		'configure'    => $config,
		'kitchens'     => [
			[
				'label'   => __('Keukenmerken', 'keuken-centrum'),
				'eyebrow' => __('Uitgelichte keukenmerken', 'keuken-centrum'),
				'title'   => __('Europees design, geselecteerd in Utrecht', 'keuken-centrum'),
				'footer'  => __('5 premium merken', 'keuken-centrum'),
				'detail'  => __('Duitse precisie & Italiaanse finesse', 'keuken-centrum'),
				'href'    => $keukens,
				'link'    => __('Alle keukenmerken', 'keuken-centrum'),
				'cards'   => [
					[
						'label' => 'AI Küchen',
						'note'  => __('Innovatief & modern', 'keuken-centrum'),
						'href'  => home_url('/keukens/ai-kuchen/'),
						'image' => kc_mega_img('brands/aikuchen-hero.webp'),
					],
					[
						'label' => 'Leicht',
						'note'  => __('Architectonisch design', 'keuken-centrum'),
						'href'  => home_url('/keukens/leicht/'),
						'image' => kc_mega_img('brands/leicht-hero.webp'),
					],
					[
						'label' => 'Zampieri',
						'note'  => __('Italiaanse verfijning', 'keuken-centrum'),
						'href'  => home_url('/keukens/zampieri/'),
						'image' => kc_mega_img('brands/zampieri-hero.webp'),
					],
				],
			],
			[
				'label'   => __('Leicht collecties', 'keuken-centrum'),
				'eyebrow' => __('Leicht signature series', 'keuken-centrum'),
				'title'   => __('Architecturale collecties met karakter', 'keuken-centrum'),
				'footer'  => __('4 showroomseries', 'keuken-centrum'),
				'detail'  => __('Van sculpturale Bossa tot serene Kyoto', 'keuken-centrum'),
				'href'    => home_url('/keukens/leicht/'),
				'link'    => __('Alle Leicht collecties', 'keuken-centrum'),
				'cards'   => [
					[
						'label' => 'Bossa',
						'note'  => __('Verticale structuur', 'keuken-centrum'),
						'href'  => home_url('/keukens/leicht/bossa/'),
						'image' => kc_mega_img('brands/leicht-hero.webp', 'hero/hero_img1.webp'),
					],
					[
						'label' => 'Taj Mahal',
						'note'  => __('Monumentale elegantie', 'keuken-centrum'),
						'href'  => home_url('/keukens/leicht/taj-mahal/'),
						'image' => kc_mega_img('collections/klassiek-base.webp', 'hero/hero_img2.webp'),
					],
					[
						'label' => 'Kyoto',
						'note'  => __('Japandi rust', 'keuken-centrum'),
						'href'  => home_url('/keukens/leicht/kyoto/'),
						'image' => kc_mega_img('collections/modern-base.webp', 'hero/hero_img4.webp'),
					],
				],
			],
			[
				'label'   => __('Keukenstijlen', 'keuken-centrum'),
				'eyebrow' => __('Vind uw eigen stijl', 'keuken-centrum'),
				'title'   => __('Van minimalistisch tot warm en tijdloos', 'keuken-centrum'),
				'footer'  => __('Voor iedere woonstijl', 'keuken-centrum'),
				'detail'  => __('Ontdek materialen, kleuren en vormen', 'keuken-centrum'),
				'href'    => home_url('/#collections'),
				'link'    => __('Alle keukenstijlen', 'keuken-centrum'),
				'cards'   => [
					[
						'label' => __('Modern', 'keuken-centrum'),
						'note'  => __('Strak & greeploos', 'keuken-centrum'),
						'href'  => home_url('/#collections'),
						'image' => kc_mega_img('hero/hero_img1.webp'),
					],
					[
						'label' => __('Japandi', 'keuken-centrum'),
						'note'  => __('Warm & sereen', 'keuken-centrum'),
						'href'  => home_url('/#collections'),
						'image' => kc_mega_img('hero/hero_img2.webp'),
					],
					[
						'label' => __('Industrieel', 'keuken-centrum'),
						'note'  => __('Krachtig & karaktervol', 'keuken-centrum'),
						'href'  => home_url('/#collections'),
						'image' => kc_mega_img('hero/hero_img4.webp'),
					],
				],
			],
			[
				'label'   => __('Keuken op maat', 'keuken-centrum'),
				'eyebrow' => __('Persoonlijk maatwerk', 'keuken-centrum'),
				'title'   => __('Ontworpen rond uw ruimte en dagelijks leven', 'keuken-centrum'),
				'footer'  => __('Volledig persoonlijk', 'keuken-centrum'),
				'detail'  => __('Van eerste schets tot perfecte montage', 'keuken-centrum'),
				'href'    => $config,
				'link'    => __('Start uw ontwerp', 'keuken-centrum'),
				'cards'   => [
					[
						'label' => __('3D ontwerp', 'keuken-centrum'),
						'note'  => __('Uw ideeën in beeld', 'keuken-centrum'),
						'href'  => $config,
						'image' => kc_mega_img('hero/hero_img4.webp'),
					],
					[
						'label' => __('Materiaalkeuze', 'keuken-centrum'),
						'note'  => __('Voel het verschil', 'keuken-centrum'),
						'href'  => $config,
						'image' => kc_mega_img('hero/hero_img3.webp'),
					],
					[
						'label' => __('Montage', 'keuken-centrum'),
						'note'  => __('Zorgeloos geplaatst', 'keuken-centrum'),
						'href'  => $config,
						'image' => kc_mega_img('hero/hero_img5.webp'),
					],
				],
			],
			[
				'label'   => __('Showroomkeukens', 'keuken-centrum'),
				'eyebrow' => __('Direct te ervaren', 'keuken-centrum'),
				'title'   => __('Inspiratie en voordeel in onze showroom', 'keuken-centrum'),
				'footer'  => __('Showroom Utrecht', 'keuken-centrum'),
				'detail'  => __('Bekijk, voel en vergelijk in alle rust', 'keuken-centrum'),
				'href'    => home_url('/showroom-keukens/'),
				'link'    => __('Bekijk showroomkeukens', 'keuken-centrum'),
				'cards'   => [
					[
						'label' => __('Nieuwe opstellingen', 'keuken-centrum'),
						'note'  => __('Live te bekijken', 'keuken-centrum'),
						'href'  => home_url('/showroom-keukens/'),
						'image' => kc_mega_img('showroom.jpg'),
					],
					[
						'label' => __('Showroomdeals', 'keuken-centrum'),
						'note'  => __('Direct voordeel', 'keuken-centrum'),
						'href'  => home_url('/aanbiedingen/'),
						'image' => kc_mega_img('hero/hero_img2.webp'),
					],
					[
						'label' => __('Direct leverbaar', 'keuken-centrum'),
						'note'  => __('Snel in huis', 'keuken-centrum'),
						'href'  => home_url('/aanbiedingen/'),
						'image' => kc_mega_img('hero/hero_img1.webp'),
					],
				],
			],
			[
				'label'   => __('Persoonlijk advies', 'keuken-centrum'),
				'eyebrow' => __('Advies van onze specialisten', 'keuken-centrum'),
				'title'   => __('Samen maken we van uw wensen een ontwerp', 'keuken-centrum'),
				'footer'  => __('45+ jaar ervaring', 'keuken-centrum'),
				'detail'  => __('Persoonlijk advies zonder verplichtingen', 'keuken-centrum'),
				'href'    => home_url('/consultation/'),
				'link'    => __('Plan een showroombezoek', 'keuken-centrum'),
				'cards'   => [
					[
						'label' => __('Kennismaken', 'keuken-centrum'),
						'note'  => __('Vertel ons uw wensen', 'keuken-centrum'),
						'href'  => home_url('/consultation/'),
						'image' => kc_mega_img('hero/hero_img3.webp'),
					],
					[
						'label' => __('Ontwerpsessie', 'keuken-centrum'),
						'note'  => __('Samen aan tafel', 'keuken-centrum'),
						'href'  => home_url('/consultation/'),
						'image' => kc_mega_img('showroom.jpg'),
					],
					[
						'label' => __('Vrijblijvende offerte', 'keuken-centrum'),
						'note'  => __('Helder & persoonlijk', 'keuken-centrum'),
						'href'  => home_url('/consultation/'),
						'image' => kc_mega_img('hero/hero_img5.webp'),
					],
				],
			],
		],
		'editorial'    => [
			'keukenbladen' => [
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
					'image'       => kc_mega_img('marmer-img.webp', 'mat-concrete.jpg'),
				],
			],
			'apparatuur'   => [
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
					'image'       => kc_mega_img('bora-img.webp', 'hero/hero_img3.webp'),
				],
			],
		],
		'contact'      => [
			[
				'label' => __('Contact & route', 'keuken-centrum'),
				'href'  => home_url('/contact/'),
				'icon'  => 'map',
			],
			[
				'label' => __('Showroom keukens', 'keuken-centrum'),
				'href'  => home_url('/showroom-keukens/'),
				'icon'  => 'map',
			],
			[
				'label' => __('Offerte op maat', 'keuken-centrum'),
				'href'  => home_url('/consultation/'),
				'icon'  => 'file',
			],
		],
		'mobile'       => [
			[
				'label' => __('Home', 'keuken-centrum'),
				'href'  => home_url('/'),
			],
			[
				'label' => __('Keukens', 'keuken-centrum'),
				'items' => [
					['label' => 'AI Küchen', 'href' => home_url('/keukens/ai-kuchen/'), 'description' => __('Innovatieve en moderne keukens, ontworpen met AI en Duitse precisie.', 'keuken-centrum')],
					['label' => 'Leicht', 'href' => home_url('/keukens/leicht/'), 'description' => __('Duitse topkwaliteit en architectonisch design voor uw droomkeuken.', 'keuken-centrum')],
					['label' => 'Leicht Bossa', 'href' => home_url('/keukens/leicht/bossa/'), 'description' => __('Verticale structuur en Bossa Concrete, vertaald naar sculpturale showroomkeukens.', 'keuken-centrum')],
					['label' => 'Leicht Taj Mahal', 'href' => home_url('/keukens/leicht/taj-mahal/'), 'description' => __('Monumentaal Leicht-design met elegante rust in de showroom.', 'keuken-centrum')],
					['label' => 'Leicht Ronde Wangen', 'href' => home_url('/keukens/leicht/ronde-wangen/'), 'description' => __('Zachte rondingen met Duitse precisie, live te ervaren in Utrecht.', 'keuken-centrum')],
					['label' => 'Leicht Kyoto', 'href' => home_url('/keukens/leicht/kyoto/'), 'description' => __('Japandi-rust ontmoet Duitse architectuur in een serene showroomserie.', 'keuken-centrum')],
					['label' => 'Nobilia', 'href' => home_url('/keukens/nobilia/'), 'description' => __('De absolute marktleider in Europa. Veelzijdig, betrouwbaar en modern.', 'keuken-centrum')],
					['label' => 'Zampieri', 'href' => home_url('/keukens/zampieri/'), 'description' => __('Exclusief Italiaans design. Minimalistisch, verfijnd en elegant.', 'keuken-centrum')],
					['label' => 'Cucinesse', 'href' => home_url('/keukens/cucinesse/'), 'description' => __('Warme Italiaanse sfeer gecombineerd met functionaliteit en passie.', 'keuken-centrum')],
					['label' => __('Keukenstijlen', 'keuken-centrum'), 'href' => home_url('/#collections'), 'description' => __('Ontdek welke stijl bij u past: van modern tot landelijk of industrieel.', 'keuken-centrum')],
					['label' => __('Keuken op maat', 'keuken-centrum'), 'href' => $config, 'description' => __('Volledig gepersonaliseerd ontwerp, afgestemd op uw ruimte en wensen.', 'keuken-centrum')],
				],
			],
			[
				'label' => __('Keukenbladen', 'keuken-centrum'),
				'items' => [
					['label' => 'Silestone', 'href' => home_url('/keukenbladen/silestone/'), 'description' => __('Kwartscomposiet bladen met extreme hardheid en prachtige kleuren.', 'keuken-centrum')],
					['label' => 'Dekton', 'href' => home_url('/keukenbladen/dekton/'), 'description' => __('Ultra-compact oppervlak, bestand tegen hitte, krassen en vlekken.', 'keuken-centrum')],
					['label' => 'Neolith', 'href' => home_url('/keukenbladen/neolith/'), 'description' => __('Gesinterde steenbladen voor een luxueuze, natuurlijke uitstraling.', 'keuken-centrum')],
					['label' => 'Sensa', 'href' => home_url('/keukenbladen/sensa/'), 'description' => __('Exclusief natuursteen met een unieke, vlekbestendige bescherming.', 'keuken-centrum')],
				],
			],
			[
				'label' => __('Apparatuur', 'keuken-centrum'),
				'items' => [
					['label' => 'Quooker', 'href' => home_url('/apparatuur/quooker/'), 'description' => __('De kraan die alles kan: 100°C kokend, gekoeld en bruisend water.', 'keuken-centrum')],
					['label' => __('Kookplaten', 'keuken-centrum'), 'href' => home_url('/apparatuur/kookplaten/'), 'description' => __('Inductiekookplaten van topmerken voor optimaal kookcomfort.', 'keuken-centrum')],
					['label' => __('Fornuizen', 'keuken-centrum'), 'href' => home_url('/apparatuur/fornuizen/'), 'description' => __('Professionele fornuizen voor de ultieme culinaire ervaring.', 'keuken-centrum')],
					['label' => __('Afzuigkappen', 'keuken-centrum'), 'href' => home_url('/apparatuur/afzuigkappen/'), 'description' => __('Stijlvolle afzuigkappen die design en prestaties perfect combineren.', 'keuken-centrum')],
					['label' => __('Werkblad afzuiging', 'keuken-centrum'), 'href' => home_url('/apparatuur/werkblad-afzuiging/'), 'description' => __('Geavanceerde kookveldafzuiging die geuren direct bij de bron weghaalt.', 'keuken-centrum')],
					['label' => __('Koelkasten & Vriezers', 'keuken-centrum'), 'href' => home_url('/apparatuur/koelkasten-vriezers/'), 'description' => __('Geavanceerde koelapparatuur met slimme vershoudzones.', 'keuken-centrum')],
					['label' => __('Vaatwassers', 'keuken-centrum'), 'href' => home_url('/apparatuur/vaatwassers/'), 'description' => __('Stille, inbouwvaatwassers voor een perfect schone vaat.', 'keuken-centrum')],
					['label' => __('Wave afzuigkappen', 'keuken-centrum'), 'href' => home_url('/apparatuur/wave-afzuigkappen/'), 'description' => __('Exclusieve design afzuigkappen als statement in uw keuken.', 'keuken-centrum')],
				],
			],
			[
				'label' => __('Aanbiedingen', 'keuken-centrum'),
				'href'  => home_url('/aanbiedingen/'),
			],
			[
				'label' => __('Contact', 'keuken-centrum'),
				'items' => [
					['label' => __('Contact & route', 'keuken-centrum'), 'href' => home_url('/contact/'), 'description' => __('Stuur een bericht, bel ons of plan uw route naar de Zonnebaan.', 'keuken-centrum'), 'icon' => 'map'],
					['label' => __('Showroom keukens', 'keuken-centrum'), 'href' => home_url('/showroom-keukens/'), 'description' => __('Kom langs in onze showroom in Utrecht en laat u inspireren.', 'keuken-centrum'), 'icon' => 'map'],
					['label' => __('Offerte op maat', 'keuken-centrum'), 'href' => home_url('/consultation/'), 'description' => __('Vraag online een vrijblijvende offerte aan voor uw droomkeuken.', 'keuken-centrum'), 'icon' => 'file'],
				],
			],
		],
	];
}

/**
 * Resolved navigation (React defaults + CMS). Single source for desktop + mobile.
 *
 * @return array<string, mixed>
 */
function kc_nav_mega_data(): array {
	if ( function_exists( 'kc_nav_resolved_data' ) ) {
		return kc_nav_resolved_data();
	}
	return kc_nav_mega_defaults();
}

/**
 * React-parity Keukens mega: 290px rail + 3-card grid.
 */
function kc_render_kitchens_mega(): void {
	$data       = kc_nav_mega_data();
	$categories = $data['kitchens'];
	?>
	<div class="mega-kitchens" data-kitchens-mega>
		<aside class="mega-kitchens__rail">
			<p class="mega-kitchens__rail-kicker"><?php esc_html_e('Ontdek onze keukens', 'keuken-centrum'); ?></p>
			<div class="mega-kitchens__cats">
				<?php foreach ($categories as $index => $category) : ?>
					<button type="button" class="mega-kitchens__category<?php echo 0 === $index ? ' is-active' : ''; ?>" data-kitchen-category="<?php echo esc_attr((string) $index); ?>" aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>">
						<span class="mega-kitchens__icon" aria-hidden="true"><?php echo kc_icon_mega_category($index); ?></span>
						<span class="mega-kitchens__cat-label"><?php echo esc_html($category['label']); ?></span>
						<span class="mega-kitchens__arrow" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</button>
				<?php endforeach; ?>
			</div>
		</aside>
		<div class="mega-kitchens__panels">
			<?php foreach ($categories as $index => $category) : ?>
				<section class="mega-kitchens__panel<?php echo 0 === $index ? ' is-active' : ''; ?>" data-kitchen-panel="<?php echo esc_attr((string) $index); ?>">
					<header class="mega-kitchens__head">
						<div>
							<p class="mega-kitchens__eyebrow"><?php echo esc_html($category['eyebrow']); ?></p>
							<h3 class="mega-kitchens__title"><?php echo esc_html($category['title']); ?></h3>
						</div>
						<em class="mega-kitchens__curated"><?php esc_html_e('Curated by KC', 'keuken-centrum'); ?></em>
					</header>
					<div class="mega-kitchens__cards">
						<?php foreach ($category['cards'] as $card_index => $card) : ?>
							<a href="<?php echo esc_url($card['href']); ?>" class="mega-kitchens__card">
								<span class="mega-kitchens__card-media">
									<?php if ($card['image']) : ?>
										<img src="<?php echo esc_url($card['image']); ?>" alt="<?php echo esc_attr($card['label'] . ' keuken'); ?>" width="200" height="150" decoding="async" loading="<?php echo (0 === $index && $card_index < 3) ? 'eager' : 'lazy'; ?>">
									<?php endif; ?>
									<span class="mega-kitchens__card-export" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
								</span>
								<span class="mega-kitchens__card-copy">
									<strong><?php echo esc_html($card['label']); ?></strong>
									<small><?php echo esc_html($card['note']); ?></small>
								</span>
							</a>
						<?php endforeach; ?>
					</div>
					<footer class="mega-kitchens__foot">
						<span><strong><?php echo esc_html($category['footer']); ?></strong><span class="mega-kitchens__dot" aria-hidden="true">•</span><?php echo esc_html($category['detail']); ?></span>
						<a href="<?php echo esc_url($category['href']); ?>"><?php echo esc_html($category['link']); ?> <?php echo kc_icon_arrow_right(); ?></a>
					</footer>
				</section>
			<?php endforeach; ?>
		</div>
	</div>
	<?php
}

/**
 * Editorial mega used by Keukenbladen and Apparatuur.
 *
 * @param string $slug keukenbladen|apparatuur
 */
function kc_render_mega_editorial(string $slug): void {
	$data = kc_nav_mega_data();
	$args = $data['editorial'][ $slug ] ?? null;
	if (! is_array($args)) {
		return;
	}

	$title    = $args['title'] ?? '';
	$groups   = $args['groups'] ?? [];
	$featured = $args['featured'] ?? [];
	$cols     = count($groups) >= 3 ? 'mega-groups--3' : 'mega-groups--2';
	$image    = $featured['image'] ?? '';
	?>
	<div class="mega-editorial">
		<div class="mega-editorial__index">
			<div class="mega-editorial__head">
				<div class="mega-editorial__brand">
					<span class="mega-editorial__gem" aria-hidden="true"><?php echo kc_icon_gem(); ?></span>
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
									<a href="<?php echo esc_url($item['href']); ?>" role="menuitem">
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
					<img src="<?php echo esc_url($image); ?>" alt="" loading="lazy" decoding="async" width="480" height="384">
					<span class="mega-featured__badge">
						<?php echo kc_icon_award(); ?>
						<?php esc_html_e('Showroom keuze', 'keuken-centrum'); ?>
					</span>
					<div class="mega-featured__caption">
						<p class="mega-featured__title"><?php echo esc_html($featured['title'] ?? ''); ?></p>
						<p class="mega-featured__desc"><?php echo esc_html($featured['description'] ?? ''); ?></p>
					</div>
				</div>
			<?php endif; ?>

			<div class="mega-featured__stats">
				<div>
					<span class="mega-featured__stat-value">45+</span>
					<span class="mega-featured__stat-label"><?php esc_html_e('Jaar ervaring', 'keuken-centrum'); ?></span>
				</div>
				<div>
					<span class="mega-featured__stat-value mega-featured__stat-value--place"><?php echo kc_icon_map_pin(); ?> <?php esc_html_e('Utrecht', 'keuken-centrum'); ?></span>
					<span class="mega-featured__stat-label"><?php esc_html_e('Eigen showroom', 'keuken-centrum'); ?></span>
				</div>
			</div>

			<a class="mega-featured__cta" href="<?php echo esc_url($featured['button_href'] ?? '#'); ?>">
				<span><?php echo esc_html($featured['button_text'] ?? ''); ?></span>
				<span class="mega-featured__cta-icon" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
			</a>
		</aside>
	</div>
	<?php
}

/**
 * Compact Contact dropdown.
 */
function kc_render_mega_simple(): void {
	$items = kc_nav_mega_data()['contact'];
	?>
	<div class="mega-simple">
		<?php foreach ($items as $item) : ?>
			<a class="mega-simple__link" href="<?php echo esc_url($item['href']); ?>" role="menuitem">
				<span class="mega-simple__icon" aria-hidden="true"><?php echo 'file' === $item['icon'] ? kc_icon_file_text() : kc_icon_map_pin(); ?></span>
				<span class="mega-simple__label"><?php echo esc_html($item['label']); ?></span>
			</a>
		<?php endforeach; ?>
	</div>
	<?php
}

/**
 * Mobile drawer from the same IA as desktop.
 *
 * @param string $cta_url   Header CTA URL.
 * @param string $cta_label Header CTA label.
 */
function kc_render_mobile_nav(string $cta_url, string $cta_label): void {
	$items = kc_nav_mega_data()['mobile'];
	?>
	<nav aria-label="<?php esc_attr_e('Mobiel menu', 'keuken-centrum'); ?>">
		<?php foreach ($items as $item) : ?>
			<?php if (! empty($item['items'])) : ?>
				<details>
					<summary><?php echo esc_html($item['label']); ?></summary>
					<?php foreach ($item['items'] as $sub) : ?>
						<a href="<?php echo esc_url($sub['href']); ?>">
							<span class="nav-mobile__sub-icon" aria-hidden="true"><?php echo (! empty($sub['icon']) && 'file' === $sub['icon']) ? kc_icon_file_text() : kc_icon_gem(); ?></span>
							<span>
								<strong><?php echo esc_html($sub['label']); ?></strong>
								<?php if (! empty($sub['description'])) : ?>
									<small><?php echo esc_html($sub['description']); ?></small>
								<?php endif; ?>
							</span>
						</a>
					<?php endforeach; ?>
				</details>
			<?php else : ?>
				<a href="<?php echo esc_url($item['href']); ?>"><?php echo esc_html($item['label']); ?></a>
			<?php endif; ?>
		<?php endforeach; ?>
	</nav>
	<a class="nav-mobile__cta" href="<?php echo esc_url($cta_url); ?>"><?php echo esc_html($cta_label); ?></a>
	<?php
}
