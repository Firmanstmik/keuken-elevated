<?php
/**
 * Brand page shared data + media helpers.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * Remote uploads base used by React brand pages (may 404 on some hosts).
 */
function kc_brand_upload(string $filename): string {
	return 'https://keuken-centrum.nl/wp-content/uploads/' . ltrim($filename, '/');
}

/**
 * Prefer a theme-bundled image; fall back to remote upload URL only if needed.
 * Production currently cannot load many keuken-centrum.nl upload paths (HTTP 404),
 * so theme assets are the reliable source of truth for visual parity.
 */
function kc_brand_img(string $theme_relative, string $remote_filename = ''): string {
	$local = kc_theme_img($theme_relative);
	if ($local) {
		return $local;
	}
	if ('' !== $remote_filename) {
		return kc_brand_upload($remote_filename);
	}
	return '';
}

/**
 * Brand logo URI with theme fallback.
 */
function kc_brand_logo(string $slug): string {
	$bundle = kc_brand_bundle($slug);
	return $bundle['logo'] ?: '';
}

/**
 * Brand hero URI with theme fallback.
 */
function kc_brand_hero(string $slug): string {
	$bundle = kc_brand_bundle($slug);
	return $bundle['hero'] ?: kc_theme_img('hero/hero_img1.webp');
}

/**
 * Shared kitchen FAQ items (React sharedKitchenFaq).
 *
 * @return array<int, array{q:string,a:string}>
 */
function kc_brand_shared_faq(): array {
	return [
		[
			'q' => __('Hoe kan ik een afspraak maken?', 'keuken-centrum'),
			'a' => __('Op onze contactpagina kunt u uw gegevens achterlaten en vermelden wanneer u wilt komen. Een medewerker neemt zo snel mogelijk contact op. U kunt ons ook bellen via 030 241 5122.', 'keuken-centrum'),
		],
		[
			'q' => __('Hoe kan Keuken-Centrum kwaliteit garanderen?', 'keuken-centrum'),
			'a' => __('Wij werken alleen met geselecteerde fabrikanten. Onze Duitse keukenfabrieken beschikken over moderne technologie en produceren volgens de ISO 9001:2000-norm, met gegarandeerde klantgerichtheid en proceskwaliteit.', 'keuken-centrum'),
		],
		[
			'q' => __('Wat kost een nieuwe keuken?', 'keuken-centrum'),
			'a' => __('De prijs hangt af van smaak, ruimte, gebruiksgemak, merk- en materiaalkeuze. Iedere keuken is anders. Wij nodigen u graag uit voor een vrijblijvend gesprek in onze showroom voor een gerichte schatting of concrete opgave.', 'keuken-centrum'),
		],
		[
			'q' => __('Wat is de levertijd?', 'keuken-centrum'),
			'a' => __('De levertijd hangt af van fabrikant, apparatuur en werkbladen. In de meeste gevallen leveren wij binnen 6 tot 8 weken.', 'keuken-centrum'),
		],
		[
			'q' => __('Hoe zit het met de garantie?', 'keuken-centrum'),
			'a' => __('Keuken-Centrum is CBW-erkend (2 jaar via CBW). Daarnaast bieden wij kosteloos tien jaar productgarantie op keukenmeubelen en werkbladen.', 'keuken-centrum'),
		],
		[
			'q' => __('Hoe kan Keuken-Centrum de beste prijs bieden?', 'keuken-centrum'),
			'a' => __('Wij maken deel uit van een van de grootste inkooporganisaties van Europa. Heeft u al een offerte? Neem die mee. Wij bieden u vrijwel altijd een betere prijs.', 'keuken-centrum'),
		],
	];
}

/**
 * Shared advisor cards for keukens overview.
 *
 * @return array<int, array{name:string,role:string,email:string,bio:string}>
 */
function kc_brand_shared_advisors(): array {
	return [
		[
			'name'  => 'Hans',
			'role'  => __('Keukenadviseur', 'keuken-centrum'),
			'email' => 'hans@keuken-centrum.nl',
			'bio'   => __('Mijn kracht is om al luisterend en adviserend samen met de klant tot een keukenkeuze te komen die recht doet aan de woonwensen.', 'keuken-centrum'),
		],
		[
			'name'  => 'Danny',
			'role'  => __('Keukenadviseur', 'keuken-centrum'),
			'email' => 'danny@keuken-centrum.nl',
			'bio'   => __('Samen maken we uw woonwensen zo concreet en helder mogelijk en passen daar de keuken op aan, zodat u nog jaren kunt genieten.', 'keuken-centrum'),
		],
		[
			'name'  => 'Frank',
			'role'  => __('Apparatuuradviseur', 'keuken-centrum'),
			'email' => 'frank@keuken-centrum.nl',
			'bio'   => __('Ik ben een vakidioot, liefhebber van A-merken apparatuur. Ik hou van mijn werk en vind het leuk om anderen te laten zien wat er allemaal mogelijk is met de nieuwste gadgets op de markt. Kom langs en laat mij u inspireren.', 'keuken-centrum'),
		],
	];
}

/**
 * Kitchen eyebrow mark (React KitchenEyebrow).
 */
function kc_brand_eyebrow(string $label, bool $light = false, bool $hero_stagger = false): void {
	$class = 'brand-eyebrow' . ($light ? ' brand-eyebrow--light' : '');
	$attrs = $hero_stagger ? ' data-hero-stagger' : '';
	?>
	<span class="<?php echo esc_attr($class); ?>"<?php echo $attrs; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- static attr only ?>>
		<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
		<span><?php echo esc_html($label); ?></span>
	</span>
	<?php
}

/**
 * Returns true when the current request is a keukens/brand page.
 */
function kc_is_keukens_route(): bool {
	if (is_post_type_archive('kitchen_brand')) {
		return true;
	}
	if (is_singular('kitchen_brand')) {
		return true;
	}
	$series = get_query_var('kc_leicht_series');
	return is_string($series) && '' !== $series;
}
