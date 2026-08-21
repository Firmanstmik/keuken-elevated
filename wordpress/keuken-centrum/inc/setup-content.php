<?php
/**
 * Starter content seeding.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Seeds theme mod defaults when they are still empty.
 */
function kc_seed_theme_mod_defaults(): void {
	$defaults = [
		'header_badge'                    => 'Premium showroom Utrecht',
		'header_cta_label'                => 'Plan showroombezoek',
		'header_cta_url'                  => home_url('/consultation/'),
		'contact_address'                 => 'Zonnebaan 8',
		'contact_postal'                  => '3542 EC Utrecht',
		'contact_phone'                   => '030 241 5122',
		'contact_email'                   => 'info@keuken-centrum.nl',
		'contact_hours'                   => 'Ma t/m za op afspraak, met uitgebreid showroomadvies.',
		'contact_hours_note'              => 'Persoonlijk advies, heldere planningen en één vast aanspreekpunt van oriëntatie tot oplevering.',
		'hero_eyebrow_default'            => 'SINDS 1978 • PREMIUM SHOWROOM UTRECHT',
		'hero_title_default'              => 'De Premium Keukenbestemming van',
		'hero_title_em_default'           => 'Utrecht.',
		'hero_subtitle_default'           => 'Ontdek Duitse precisie en Italiaanse elegantie onder één dak. Persoonlijk showroomadvies, premium apparatuur en een doordachte configurator voor uw eerste ontwerpkeuze.',
		'hero_cta_primary_label_default'  => 'Plan Showroombezoek',
		'hero_cta_primary_url_default'    => home_url('/#showroom'),
		'hero_cta_secondary_label_default' => 'Start configurator',
		'hero_cta_secondary_url_default'  => 'https://keuken-elevated.vercel.app/brands',
		'consultation_cta_label'          => 'Plan vrijblijvend advies',
		'consultation_cta_url'            => home_url('/consultation/'),
	];

	foreach ($defaults as $key => $value) {
		$current = get_theme_mod($key, null);
		if (null === $current || '' === $current) {
			set_theme_mod($key, $value);
		}
	}
}

/**
 * Creates or updates a page with a predictable slug.
 */
function kc_upsert_page(array $args): int {
	$existing = get_page_by_path($args['post_name']);

	$postarr = [
		'post_type'    => 'page',
		'post_status'  => 'publish',
		'post_title'   => $args['post_title'],
		'post_name'    => $args['post_name'],
		'post_content' => $args['post_content'] ?? '',
		'post_parent'  => $args['post_parent'] ?? 0,
	];

	if ($existing instanceof WP_Post) {
		$postarr['ID'] = $existing->ID;
		$result        = wp_update_post($postarr, true);
		return is_wp_error($result) ? 0 : (int) $result;
	}

	$result = wp_insert_post($postarr, true);
	return is_wp_error($result) ? 0 : (int) $result;
}

/**
 * Creates or updates a custom post item by slug.
 */
function kc_upsert_seed_post(array $args): int {
	$existing = get_page_by_path($args['post_name'], OBJECT, $args['post_type']);

	$postarr = [
		'post_type'    => $args['post_type'],
		'post_status'  => 'publish',
		'post_title'   => $args['post_title'],
		'post_name'    => $args['post_name'],
		'post_content' => $args['post_content'] ?? '',
		'post_excerpt' => $args['post_excerpt'] ?? '',
	];

	if ($existing instanceof WP_Post) {
		$postarr['ID'] = $existing->ID;
		$result        = wp_update_post($postarr, true);
		return is_wp_error($result) ? 0 : (int) $result;
	}

	$result = wp_insert_post($postarr, true);
	return is_wp_error($result) ? 0 : (int) $result;
}

/**
 * Returns an existing menu id by name or creates it.
 */
function kc_get_or_create_menu(string $menu_name): int {
	$menu = wp_get_nav_menu_object($menu_name);
	if ($menu instanceof WP_Term) {
		return (int) $menu->term_id;
	}

	return (int) wp_create_nav_menu($menu_name);
}

/**
 * Adds a menu item once.
 */
function kc_add_menu_item_once(int $menu_id, array $item_args): void {
	$existing_items = wp_get_nav_menu_items($menu_id) ?: [];

	foreach ($existing_items as $item) {
		if (
			isset($item_args['menu-item-title']) &&
			$item->title === $item_args['menu-item-title'] &&
			isset($item_args['menu-item-url']) &&
			$item->url === $item_args['menu-item-url']
		) {
			return;
		}

		if (
			isset($item_args['menu-item-object-id']) &&
			(int) $item->object_id === (int) $item_args['menu-item-object-id']
		) {
			return;
		}
	}

	wp_update_nav_menu_item($menu_id, 0, $item_args);
}

/**
 * Seeds pages, menus and starter posts.
 */
function kc_seed_content(): void {
	kc_seed_theme_mod_defaults();

	$home_id = kc_upsert_page(
		[
			'post_title'   => 'Home',
			'post_name'    => 'home',
			'post_content' => 'Welkom bij Keuken-Centrum Utrecht. Deze homepage gebruikt het aangepaste front-page template van het thema.',
		]
	);

	$contact_id = kc_upsert_page(
		[
			'post_title'   => 'Contact',
			'post_name'    => 'contact',
			'post_content' => 'Plan een showroombezoek of neem contact op voor advies op maat. Gebruik deze pagina voor contactinhoud of een formulier-shortcode.',
		]
	);

	$offers_id = kc_upsert_page(
		[
			'post_title'   => 'Aanbiedingen',
			'post_name'    => 'aanbiedingen',
			'post_content' => 'Hier verschijnen lopende showroomaanbiedingen, seizoensacties en geselecteerde premium deals.',
		]
	);

	$showroom_id = kc_upsert_page(
		[
			'post_title'   => 'Showroom Keukens',
			'post_name'    => 'showroom-keukens',
			'post_content' => 'Bezoek onze premium showroom in Utrecht en ontdek keukenmerken, materialen en apparatuur in complete opstellingen.',
		]
	);

	$consultation_id = kc_upsert_page(
		[
			'post_title'   => 'Consultatie',
			'post_name'    => 'consultation',
			'post_content' => 'Plan een vrijblijvende showroom- of online consultatie bij Keuken-Centrum Utrecht.',
		]
	);

	update_option('show_on_front', 'page');
	update_option('page_on_front', $home_id);

	$brands = [
		[
			'post_title'   => 'Leicht',
			'post_name'    => 'leicht',
			'post_excerpt' => 'Duitse maatwerkkeukens met architectonische rust en verfijnde materialisatie.',
			'post_content' => 'Leicht staat voor uitgebalanceerd design, verfijnde detaillering en een keukenarchitectuur die jarenlang actueel blijft.',
			'meta'         => [
				'country'     => 'Duitsland',
				'short_story' => 'Minimalistische precisie en slimme indelingen voor verfijnde woonkeukens.',
				'cta_label'   => 'Ontdek Leicht',
			],
		],
		[
			'post_title'   => 'AI Küchen',
			'post_name'    => 'ai-kuchen',
			'post_excerpt' => 'Stoere Duitse degelijkheid met veel vrijheid in fronten, kleuren en praktische details.',
			'post_content' => 'AI Küchen combineert betrouwbaarheid met een frisse uitstraling en is sterk in slimme, gezinsvriendelijke keukenopstellingen.',
			'meta'         => [
				'country'     => 'Duitsland',
				'short_story' => 'Doordachte functionaliteit met een moderne prijs-kwaliteitbalans.',
				'cta_label'   => 'Bekijk AI Küchen',
			],
		],
		[
			'post_title'   => 'Nobilia',
			'post_name'    => 'nobilia',
			'post_excerpt' => 'Veelzijdige keukenconcepten met betrouwbare techniek en tijdloos comfort.',
			'post_content' => 'Nobilia biedt een breed programma waarmee woonwensen, ergonomie en slimme opbergoplossingen perfect samenkomen.',
			'meta'         => [
				'country'     => 'Duitsland',
				'short_story' => 'Toegankelijke premium kwaliteit voor stijlvolle leefkeukens.',
				'cta_label'   => 'Ervaar Nobilia',
			],
		],
		[
			'post_title'   => 'Zampieri',
			'post_name'    => 'zampieri',
			'post_excerpt' => 'Italiaanse keukenesthetiek met sculpturale lijnen en zachte luxe.',
			'post_content' => 'Zampieri vertaalt Italiaans design naar karaktervolle keukens waarin verfijning, textuur en sfeer centraal staan.',
			'meta'         => [
				'country'     => 'Italië',
				'short_story' => 'Expressieve vormtaal voor interieurs met elegantie en persoonlijkheid.',
				'cta_label'   => 'Ontdek Zampieri',
			],
		],
		[
			'post_title'   => 'Cucinesse',
			'post_name'    => 'cucinesse',
			'post_excerpt' => 'Karaktervolle Italiaanse sfeerkeukens met een warme, luxe uitstraling.',
			'post_content' => 'Cucinesse brengt mediterrane finesse, rijke materialen en verfijnde details samen in keukens die gastvrij aanvoelen.',
			'meta'         => [
				'country'     => 'Italië',
				'short_story' => 'Elegante lifestyle-keukens voor liefhebbers van warm design.',
				'cta_label'   => 'Bekijk Cucinesse',
			],
		],
	];

	foreach ($brands as $brand) {
		$brand_id = kc_upsert_seed_post(
			[
				'post_type'    => 'kitchen_brand',
				'post_title'   => $brand['post_title'],
				'post_name'    => $brand['post_name'],
				'post_content' => $brand['post_content'],
				'post_excerpt' => $brand['post_excerpt'],
			]
		);

		foreach ($brand['meta'] as $meta_key => $meta_value) {
			update_post_meta($brand_id, $meta_key, $meta_value);
		}

		kc_upsert_page(
			[
				'post_title'   => $brand['post_title'] . ' Keukens',
				'post_name'    => $brand['post_name'],
				'post_parent'  => $showroom_id,
				'post_content' => sprintf(
					'Placeholder pagina voor %1$s. Gebruik deze pagina voor merkgerichte showroomcontent, terwijl het hoofdarchief via %2$s loopt.',
					$brand['post_title'],
					get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens')
				),
			]
		);
	}

	$worktops = [
		[
			'post_title'   => 'Silestone',
			'post_name'    => 'silestone',
			'post_excerpt' => 'Kwartscomposiet met rijke kleurdiepte en dagelijks gebruiksgemak.',
			'post_content' => 'Silestone is geliefd om zijn onderhoudsvriendelijke eigenschappen, strakke uitstraling en brede kleurcollectie.',
		],
		[
			'post_title'   => 'Dekton',
			'post_name'    => 'dekton',
			'post_excerpt' => 'Ultra-compact materiaal voor wie compromisloze prestaties zoekt.',
			'post_content' => 'Dekton is hittebestendig, krasvast en zeer geschikt voor opvallende designkeukens met een krachtige uitstraling.',
		],
		[
			'post_title'   => 'Neolith',
			'post_name'    => 'neolith',
			'post_excerpt' => 'Sintered stone met een slanke luxe look en hoogwaardige weerstand.',
			'post_content' => 'Neolith brengt keramische elegantie en technische sterkte samen in een collectie met premium texturen.',
		],
		[
			'post_title'   => 'Sensa',
			'post_name'    => 'sensa',
			'post_excerpt' => 'Natuursteenbladen met unieke adering en een beschermde afwerking.',
			'post_content' => 'Sensa geeft iedere keuken een exclusieve signatuur dankzij echte steenpatronen en een verfijnd oppervlak.',
		],
	];

	foreach ($worktops as $worktop) {
		kc_upsert_seed_post(
			[
				'post_type'    => 'worktop',
				'post_title'   => $worktop['post_title'],
				'post_name'    => $worktop['post_name'],
				'post_content' => $worktop['post_content'],
				'post_excerpt' => $worktop['post_excerpt'],
			]
		);
	}

	$appliances = [
		'Quooker'              => 'quooker',
		'Kookplaten'           => 'kookplaten',
		'Fornuizen'            => 'fornuizen',
		'Afzuigkappen'         => 'afzuigkappen',
		'Werkblad afzuiging'   => 'werkblad-afzuiging',
		'Wave afzuigkappen'    => 'wave-afzuigkappen',
		'Ovens'                => 'ovens',
		'Koelkasten'           => 'koelkasten',
		'Koelkasten & Vriezers'=> 'koelkasten-vriezers',
		'Vaatwassers'          => 'vaatwassers',
		'Wijnklimaat'          => 'wijnklimaat',
	];

	foreach ($appliances as $title => $slug) {
		kc_upsert_seed_post(
			[
				'post_type'    => 'appliance_category',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_content' => sprintf('%s in premium uitvoeringen, geselecteerd op prestatie, design en gebruiksgemak.', $title),
				'post_excerpt' => sprintf('Verken %s voor een hoogwaardige keukenafwerking.', strtolower($title)),
			]
		);
	}

	$testimonials = [
		[
			'post_title'   => 'Warm advies en perfecte afwerking',
			'post_name'    => 'warm-advies-perfecte-afwerking',
			'post_content' => 'Vanaf het eerste ontwerpgesprek voelden we dat er echt geluisterd werd. De indeling klopt tot in detail en de oplevering verliep verrassend rustig.',
			'post_excerpt' => 'Vanaf het eerste ontwerpgesprek voelden we dat er echt geluisterd werd.',
			'meta'         => [
				'author'    => 'Hans & Marieke',
				'location'  => 'Utrecht',
				'quote'     => 'Vanaf het eerste ontwerpgesprek voelden we dat er echt geluisterd werd. De combinatie van Leicht en Dekton voelt nog iedere dag als een upgrade van ons huis.',
				'brand_tag' => 'Leicht x Dekton',
			],
		],
		[
			'post_title'   => 'Strakke planning zonder verrassingen',
			'post_name'    => 'strakke-planning-zonder-verrassingen',
			'post_content' => 'Danny hield de planning strak, communiceerde helder en schakelde snel wanneer wij nog wilden finetunen. Dat gaf veel vertrouwen in het hele traject.',
			'post_excerpt' => 'Heldere communicatie en een planning die gewoon klopte.',
			'meta'         => [
				'author'    => 'Danny & Sophie',
				'location'  => 'Nieuwegein',
				'quote'     => 'Heldere communicatie en een planning die gewoon klopte. We hebben nu een keuken die luxe oogt, praktisch werkt en helemaal bij ons past.',
				'brand_tag' => 'Nobilia x Quooker',
			],
		],
		[
			'post_title'   => 'Italiaanse sfeer, Duitse precisie',
			'post_name'    => 'italiaanse-sfeer-duitse-precisie',
			'post_content' => 'We zochten warmte en karakter, maar wilden geen concessies doen aan gebruiksgemak. Die balans is in de showroom meteen tastbaar gemaakt.',
			'post_excerpt' => 'Warm design met technisch vertrouwen.',
			'meta'         => [
				'author'    => 'Hans & Ilse',
				'location'  => 'De Meern',
				'quote'     => 'We zochten warmte en karakter, maar wilden geen concessies doen aan gebruiksgemak. Dankzij het adviestraject hebben we nu precies die mix van Italiaanse sfeer en Duitse precisie.',
				'brand_tag' => 'Zampieri x Neolith',
			],
		],
	];

	foreach ($testimonials as $testimonial) {
		$testimonial_id = kc_upsert_seed_post(
			[
				'post_type'    => 'testimonial',
				'post_title'   => $testimonial['post_title'],
				'post_name'    => $testimonial['post_name'],
				'post_content' => $testimonial['post_content'],
				'post_excerpt' => $testimonial['post_excerpt'],
			]
		);

		foreach ($testimonial['meta'] as $meta_key => $meta_value) {
			update_post_meta($testimonial_id, $meta_key, $meta_value);
		}
	}

	$primary_menu_id = kc_get_or_create_menu('Hoofdmenu');

	kc_add_menu_item_once(
		$primary_menu_id,
		[
			'menu-item-title'     => 'Home',
			'menu-item-object-id' => $home_id,
			'menu-item-object'    => 'page',
			'menu-item-type'      => 'post_type',
			'menu-item-status'    => 'publish',
		]
	);
	kc_add_menu_item_once(
		$primary_menu_id,
		[
			'menu-item-title'  => 'Keukens',
			'menu-item-url'    => get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens'),
			'menu-item-type'   => 'custom',
			'menu-item-status' => 'publish',
		]
	);
	kc_add_menu_item_once(
		$primary_menu_id,
		[
			'menu-item-title'  => 'Keukenbladen',
			'menu-item-url'    => get_post_type_archive_link('worktop') ?: home_url('/keukenbladen'),
			'menu-item-type'   => 'custom',
			'menu-item-status' => 'publish',
		]
	);
	kc_add_menu_item_once(
		$primary_menu_id,
		[
			'menu-item-title'  => 'Apparatuur',
			'menu-item-url'    => get_post_type_archive_link('appliance_category') ?: home_url('/apparatuur'),
			'menu-item-type'   => 'custom',
			'menu-item-status' => 'publish',
		]
	);
	kc_add_menu_item_once(
		$primary_menu_id,
		[
			'menu-item-title'     => 'Aanbiedingen',
			'menu-item-object-id' => $offers_id,
			'menu-item-object'    => 'page',
			'menu-item-type'      => 'post_type',
			'menu-item-status'    => 'publish',
		]
	);
	kc_add_menu_item_once(
		$primary_menu_id,
		[
			'menu-item-title'     => 'Contact',
			'menu-item-object-id' => $contact_id,
			'menu-item-object'    => 'page',
			'menu-item-type'      => 'post_type',
			'menu-item-status'    => 'publish',
		]
	);

	$footer_menu_id = kc_get_or_create_menu('Footermenu');
	kc_add_menu_item_once(
		$footer_menu_id,
		[
			'menu-item-title'     => 'Contact',
			'menu-item-object-id' => $contact_id,
			'menu-item-object'    => 'page',
			'menu-item-type'      => 'post_type',
			'menu-item-status'    => 'publish',
		]
	);
	kc_add_menu_item_once(
		$footer_menu_id,
		[
			'menu-item-title'     => 'Showroom Keukens',
			'menu-item-object-id' => $showroom_id,
			'menu-item-object'    => 'page',
			'menu-item-type'      => 'post_type',
			'menu-item-status'    => 'publish',
		]
	);

	$locations             = get_theme_mod('nav_menu_locations', []);
	$locations['primary']  = $primary_menu_id;
	$locations['footer']   = $footer_menu_id;
	set_theme_mod('nav_menu_locations', $locations);
}

/**
 * One-time upsert for appliance categories added after initial seed.
 */
function kc_seed_appliance_gaps(): void {
	if ('1' === get_option('kc_seed_appliances_v2')) {
		return;
	}

	$appliances = [
		'Werkblad afzuiging'    => 'werkblad-afzuiging',
		'Wave afzuigkappen'     => 'wave-afzuigkappen',
		'Koelkasten & Vriezers' => 'koelkasten-vriezers',
	];

	foreach ($appliances as $title => $slug) {
		kc_upsert_seed_post(
			[
				'post_type'    => 'appliance_category',
				'post_title'   => $title,
				'post_name'    => $slug,
				'post_content' => sprintf('%s in premium uitvoeringen, geselecteerd op prestatie, design en gebruiksgemak.', $title),
				'post_excerpt' => sprintf('Verken %s voor een hoogwaardige keukenafwerking.', strtolower($title)),
			]
		);
	}

	update_option('kc_seed_appliances_v2', '1');
	flush_rewrite_rules(false);
}
add_action('init', 'kc_seed_appliance_gaps', 30);

/**
 * Ensure consultation + showroom pages exist after theme sync (without full reseed).
 */
function kc_ensure_migration_pages(): void {
	if ( '1' === get_option( 'kc_ensure_pages_v166' ) ) {
		return;
	}
	if ( ! function_exists( 'kc_upsert_page' ) ) {
		return;
	}
	kc_upsert_page(
		[
			'post_title'   => 'Showroom Keukens',
			'post_name'    => 'showroom-keukens',
			'post_content' => 'Bezoek onze premium showroom in Utrecht en ontdek keukenmerken, materialen en apparatuur in complete opstellingen.',
		]
	);
	kc_upsert_page(
		[
			'post_title'   => 'Consultatie',
			'post_name'    => 'consultation',
			'post_content' => 'Plan een vrijblijvende showroom- of online consultatie bij Keuken-Centrum Utrecht.',
		]
	);
	// Point header CTA at consultation when still on legacy contact URL.
	$cta = (string) get_theme_mod( 'header_cta_url', '' );
	if ( '' === $cta || str_contains( $cta, '#consultation' ) || str_ends_with( untrailingslashit( $cta ), '/contact' ) ) {
		set_theme_mod( 'header_cta_url', home_url( '/consultation/' ) );
	}
	update_option( 'kc_ensure_pages_v166', '1' );
}
add_action( 'init', 'kc_ensure_migration_pages', 31 );

/**
 * Seed legal pages (React footer links; no React routes — WP CMS pages).
 */
function kc_ensure_legal_pages(): void {
	if ( '1' === get_option( 'kc_ensure_legal_v171' ) ) {
		return;
	}
	if ( ! function_exists( 'kc_upsert_page' ) ) {
		return;
	}

	$ids = [];
	$ids[] = kc_upsert_page(
		[
			'post_title'   => 'Privacybeleid',
			'post_name'    => 'privacybeleid',
			'post_content' => <<<'HTML'
<!-- wp:paragraph -->
<p>Keuken-Centrum Utrecht (Zonnebaan 8, 3542 EC Utrecht) respecteert uw privacy. In dit privacybeleid leggen wij uit welke persoonsgegevens wij verwerken, waarom wij dat doen en welke rechten u heeft.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2>Welke gegevens verwerken wij?</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Wij kunnen onder meer uw naam, e-mailadres, telefoonnummer, adresgegevens en projectinformatie verwerken wanneer u contact opneemt, een consultatie plant of een offerte aanvraagt.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2>Doeleinden</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Gegevens worden gebruikt voor klantcontact, showroomafspraken, offertes, service en — alleen met toestemming — marketingcommunicatie.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2>Bewaartermijn &amp; rechten</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Wij bewaren gegevens niet langer dan nodig. U heeft recht op inzage, correctie, verwijdering en bezwaar. Neem contact op via info@keuken-centrum.nl of 030 241 5122.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><em>Pas deze tekst aan via Pagina’s → Privacybeleid. Dit is een startversie voor CMS-beheer.</em></p>
<!-- /wp:paragraph -->
HTML
		]
	);

	$ids[] = kc_upsert_page(
		[
			'post_title'   => 'Cookiebeleid',
			'post_name'    => 'cookiebeleid',
			'post_content' => <<<'HTML'
<!-- wp:paragraph -->
<p>Deze website kan functionele, analytische en (indien van toepassing) marketingcookies gebruiken om de site goed te laten werken en de gebruikerservaring te verbeteren.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2>Soorten cookies</h2>
<!-- /wp:heading -->
<!-- wp:list -->
<ul><li>Functionele cookies — noodzakelijk voor navigatie en formulieren</li><li>Analytische cookies — inzicht in bezoekgedrag (geanonimiseerd waar mogelijk)</li><li>Marketingcookies — alleen met toestemming</li></ul>
<!-- /wp:list -->
<!-- wp:heading {"level":2} -->
<h2>Beheer</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>U kunt cookies beheren via uw browsersettings. Meer informatie over privacy: zie ons Privacybeleid.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><em>Bewerk deze pagina in WordPress Admin. Starttekst voor CMS.</em></p>
<!-- /wp:paragraph -->
HTML
		]
	);

	$ids[] = kc_upsert_page(
		[
			'post_title'   => 'Algemene voorwaarden',
			'post_name'    => 'algemene-voorwaarden',
			'post_content' => <<<'HTML'
<!-- wp:paragraph -->
<p>Op overeenkomsten met Keuken-Centrum Utrecht zijn onze algemene voorwaarden van toepassing, inclusief relevante CBW-regels waar van toepassing.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2>Toepasselijkheid</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Deze voorwaarden gelden op alle aanbiedingen, offertes en overeenkomsten betreffende keukens, materialen, apparatuur en gerelateerde diensten, tenzij schriftelijk anders overeengekomen.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2>Offertes &amp; overeenkomsten</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Offertes zijn vrijblijvend tenzij anders vermeld. Een overeenkomst komt tot stand na schriftelijke bevestiging.</p>
<!-- /wp:paragraph -->
<!-- wp:heading {"level":2} -->
<h2>Contact</h2>
<!-- /wp:heading -->
<!-- wp:paragraph -->
<p>Vragen over deze voorwaarden: info@keuken-centrum.nl · 030 241 5122 · Zonnebaan 8, Utrecht.</p>
<!-- /wp:paragraph -->
<!-- wp:paragraph -->
<p><em>Vervang of vul aan via Pagina’s → Algemene voorwaarden.</em></p>
<!-- /wp:paragraph -->
HTML
		]
	);

	foreach ( $ids as $pid ) {
		if ( $pid > 0 ) {
			update_post_meta( $pid, '_wp_page_template', 'page-legal.php' );
		}
	}

	update_option( 'kc_ensure_legal_v171', '1' );
}
add_action( 'init', 'kc_ensure_legal_pages', 32 );
