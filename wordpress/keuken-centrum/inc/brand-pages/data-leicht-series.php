<?php
/**
 * Leicht series page data (React leicht-series.ts parity).
 *
 * Remote keuken-centrum.nl uploads 404 — use curated theme-local imagery.
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @return array<string, array<string, mixed>>
 */
function kc_leicht_series_catalog(): array {
	static $catalog = null;
	if (null !== $catalog) {
		return $catalog;
	}

	$img = static function (string $rel): string {
		return kc_theme_img($rel) ?: kc_brand_hero('leicht');
	};

	$catalog = [
		'kyoto' => [
			'id'          => 'kyoto',
			'name'        => 'Leicht Kyoto',
			'slug'        => 'kyoto',
			'tagline'     => __('Japandi calm meets Duitse precisie', 'keuken-centrum'),
			'description' => [
				__('Leicht Kyoto brengt rust, horizontale lijnen en warme materialen samen in een architectonische keuken. De serie is te zien in onze showroom in Utrecht en is ideaal voor open woonkeukens met een serene, Japandi-geïnspireerde sfeer.', 'keuken-centrum'),
				__('Als officiële Leicht-dealer ontwerpen wij Kyoto volledig op maat: fronts, werkbladen, verlichting en opbergoplossingen worden afgestemd op uw woning, lichtinval en woonstijl.', 'keuken-centrum'),
			],
			'heroImage' => $img('brands/leicht-hero.webp'),
			'gallery'   => [
				[ 'src' => $img('brands/leicht-hero.webp'), 'title' => __('Kyoto showroom', 'keuken-centrum') ],
				[ 'src' => $img('experience/Design_keukens.webp'), 'title' => __('Architecturale openheid', 'keuken-centrum') ],
				[ 'src' => $img('collections/modern-base.webp'), 'title' => __('Materiaal & detail', 'keuken-centrum') ],
			],
		],
		'bossa' => [
			'id'          => 'bossa',
			'name'        => 'Leicht Bossa',
			'slug'        => 'bossa',
			'tagline'     => __('Verticale structuur. Betonnen rust.', 'keuken-centrum'),
			'description' => [
				__('Leicht Bossa, inclusief Bossa Concrete, kenmerkt zich door krachtige verticale profilering en speelse texturen. In onze showroom ervaart u hoe houtlook, betonlook en greeploze fronten samen een sculpturale keuken vormen.', 'keuken-centrum'),
				__('Van Bossa Concrete tot Bossa-E, KERA-E en BOSSA F 45c: de familie biedt talloze combinaties voor moderne, expressieve keukens met Duitse afwerkingskwaliteit.', 'keuken-centrum'),
			],
			'heroImage' => $img('collections/industrieel-base.webp'),
			'gallery'   => [
				[ 'src' => $img('collections/industrieel-base.webp'), 'title' => __('Bossa showroom', 'keuken-centrum') ],
				[ 'src' => $img('beton-img.webp'), 'title' => __('Bossa donker', 'keuken-centrum') ],
				[ 'src' => $img('mat-concrete.jpg'), 'title' => __('Bossa render', 'keuken-centrum') ],
				[ 'src' => $img('experience/Modern_keukens.webp'), 'title' => __('BOSSA F 45c', 'keuken-centrum') ],
			],
		],
		'taj-mahal' => [
			'id'          => 'taj-mahal',
			'name'        => 'Leicht Taj Mahal',
			'slug'        => 'taj-mahal',
			'tagline'     => __('Monumentaal design, elegante rust', 'keuken-centrum'),
			'description' => [
				__('Leicht Taj Mahal is een van de meest herkenbare showroomseries bij Keuken-Centrum Utrecht. Monumentale volumes, verfijnde materialen en een serene compositie geven de keuken een exclusieve allure.', 'keuken-centrum'),
				__('Onze adviseurs helpen u Taj Mahal te vertalen naar uw plattegrond, van eilandkeuken tot compacte L-opstelling. U krijgt altijd originele Leicht-componenten en de scherpste prijs via onze directe fabrieksrelatie.', 'keuken-centrum'),
			],
			'heroImage' => $img('hero/hero_img2.webp'),
			'gallery'   => [
				[ 'src' => $img('hero/hero_img2.webp'), 'title' => __('Taj Mahal', 'keuken-centrum') ],
				[ 'src' => $img('craftsmanship.webp'), 'title' => __('Leicht detail', 'keuken-centrum') ],
				[ 'src' => $img('showroom.webp'), 'title' => __('Leicht collectie', 'keuken-centrum') ],
			],
		],
		'ronde-wangen' => [
			'id'          => 'ronde-wangen',
			'name'        => 'Leicht Ronde Wangen',
			'slug'        => 'ronde-wangen',
			'tagline'     => __('Zachte rondingen. Strakke techniek.', 'keuken-centrum'),
			'description' => [
				__('Leicht Ronde Wangen laat zien hoe architectuur en soft design samenkomen: afgeronde zijpanelen, vloeiende overgangen en hoogwaardige materialen zonder in te leveren op functionaliteit.', 'keuken-centrum'),
				__('Bekijk de serie in onze Utrechtse showroom en ontdek hoe ronde wangen eilandkeukens zachter, veiliger en visueel rijker maken. Alles is volledig configureerbaar binnen het Leicht-systeem.', 'keuken-centrum'),
			],
			'heroImage' => $img('collection-scandi.webp'),
			'gallery'   => [
				[ 'src' => $img('collection-scandi.webp'), 'title' => __('Ronde wangen', 'keuken-centrum') ],
				[ 'src' => $img('collections/klassiek-base.webp'), 'title' => __('Vorm & contrast', 'keuken-centrum') ],
				[ 'src' => $img('experience/design.webp'), 'title' => __('Leicht afwerking', 'keuken-centrum') ],
			],
		],
	];

	return $catalog;
}

/**
 * @param string $slug Series slug.
 * @return array<string, mixed>|null
 */
function kc_leicht_series_data(string $slug): ?array {
	$catalog = kc_leicht_series_catalog();
	return $catalog[ $slug ] ?? null;
}

/**
 * Related series excluding current.
 *
 * @return array<int, array<string, mixed>>
 */
function kc_leicht_series_related(string $current_id): array {
	$out = [];
	foreach (kc_leicht_series_catalog() as $item) {
		if (($item['id'] ?? '') !== $current_id) {
			$out[] = $item;
		}
	}
	return $out;
}
