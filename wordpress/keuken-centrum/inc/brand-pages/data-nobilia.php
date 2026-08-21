<?php
/**
 * Nobilia brand page data (React nobilia.ts parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @param int $index Pool index for variety.
 */
function kc_nobilia_pool_img(int $index): string {
	$pool = array_values(
		array_filter(
			[
				kc_brand_hero('nobilia'),
				kc_theme_img('hero/hero_img2.webp'),
				kc_theme_img('collections/modern-base.webp'),
				kc_theme_img('experience/Modern_keukens.webp'),
				kc_theme_img('collection-warm.webp'),
				kc_theme_img('showroom.webp'),
				kc_theme_img('craftsmanship.webp'),
				kc_theme_img('experience/design.webp'),
			]
		)
	);
	if (! $pool) {
		return kc_brand_hero('nobilia');
	}
	return $pool[ $index % count($pool) ];
}

/**
 * @return array<string, mixed>
 */
function kc_nobilia_page_data(): array {
	$hero = kc_brand_hero('nobilia');
	$logo = kc_brand_logo('nobilia');

	$data = [
		'id'      => 'nobilia',
		'name'    => 'Nobilia',
		'country' => __('Duitsland', 'keuken-centrum'),
		'meta'    => [
			'title'       => __('Nobilia keukens · Duitse kwaliteit bij Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Ontdek Nobilia bij Keuken-Centrum Utrecht. Een officieel Duits merk met gegarandeerd de laagste prijs, een eigen montagedienst, vijf jaar standaardgarantie en ruim een half miljoen keukens per jaar.', 'keuken-centrum'),
		],
		'logo' => $logo,
		'hero' => [
			'image'     => $hero,
			'eyebrow'   => __('Gemaakt in Duitsland', 'keuken-centrum'),
			'title'     => 'Nobilia',
			'highlight' => __('Duitse kwaliteit. Scherpe prijs.', 'keuken-centrum'),
			'subtitle'  => __('Europa\'s meest verkochte keukenmerk biedt trendy decors, eindeloze variatie en betrouwbare Duitse degelijkheid, snel geleverd en professioneel gemonteerd.', 'keuken-centrum'),
			'cta'       => [
				'primary'       => __('Bezoek showroom', 'keuken-centrum'),
				'primaryHref'   => home_url('/consultation/'),
				'secondary'     => __('Bel direct', 'keuken-centrum'),
				'secondaryHref' => 'tel:+31302415122',
			],
			'badges' => [
				[ 'value' => 'DE', 'label' => __('Kwaliteit', 'keuken-centrum') ],
				[ 'value' => 'Beste', 'label' => __('Prijs', 'keuken-centrum') ],
				[ 'value' => '5 jr', 'label' => __('Garantie', 'keuken-centrum') ],
			],
		],
		'intro' => [
			'eyebrow'        => __('Het merk', 'keuken-centrum'),
			'titleBefore'    => __('Bijna een half miljoen keukens per jaar:', 'keuken-centrum'),
			'titleHighlight' => __('kwaliteit', 'keuken-centrum'),
			'titleAfter'     => __(' die nooit uit het oog verloren gaat', 'keuken-centrum'),
			'paragraphs'     => [
				__('Nobilia is het officiële Duitse keukenmerk dat jaarlijks bijna een half miljoen keukens produceert en verkoopt. Ruim dertig procent van de complete productie vindt zijn weg naar Duitse huishoudens, een bewijs van vertrouwen in de thuismarkt.', 'keuken-centrum'),
				__('Bij dit schaalbare productieproces gaat kwaliteit nooit verloren. Processen verlopen probleemloos, waardoor elke keuken dezelfde Duitse degelijkheid en betrouwbaarheid uitstraalt, van trendy decors tot innovatieve kwaliteitsverbeteringen tot in detail.', 'keuken-centrum'),
				__('Niet alleen de betaalbaarheid maakt Nobilia aantrekkelijk, maar ook de zekerheid die wij bieden: snelle levering, professionele montage door onze eigen montagedienst en gegarandeerd de laagste prijs van topkwaliteit met topservice.', 'keuken-centrum'),
			],
			'image'     => kc_nobilia_pool_img(1),
			'signature' => [
				[ 'value' => '~500k', 'label' => __('Keukens per jaar', 'keuken-centrum') ],
				[ 'value' => '30%', 'label' => __('Verkoop in DE', 'keuken-centrum') ],
				[ 'value' => 'DE', 'label' => __('Productie', 'keuken-centrum') ],
			],
			'roundel' => 'NOBILIA · GEMAAKT IN DUITSLAND · EUROPA\'S KEUKENMERK ·',
			'caption' => [
				'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
				'title' => __('Uitermate breed assortiment live te ervaren', 'keuken-centrum'),
			],
		],
		'pillars' => [
			'eyebrow'        => __('Drie pijlers', 'keuken-centrum'),
			'titleBefore'    => __('Trendy design, doorlopende lijnvoering en ', 'keuken-centrum'),
			'titleHighlight' => __('innovatie', 'keuken-centrum'),
			'titleAfter'     => __(' tot in detail', 'keuken-centrum'),
			'lead'           => __('Nobilia combineert een enorme variatie aan ontwerpen met unieke lijnvoering en continue kwaliteitsverbeteringen.', 'keuken-centrum'),
			'items'          => [
				[
					'title'       => __('Trendy decors & variatie', 'keuken-centrum'),
					'description' => __('Met name op trendy decors, een grote variatie aan ontwerpen, unieke doorlopende lijnvoering en innovatieve kwaliteitsverbeteringen tot in detail.', 'keuken-centrum'),
					'icon'        => 'grid',
					'image'       => kc_nobilia_pool_img(0),
				],
				[
					'title'       => __('Duitse kwaliteit', 'keuken-centrum'),
					'description' => __('Duitse kwaliteit en degelijkheid in bijna een half miljoen keukens per jaar, zonder concessies aan productieprocessen of afwerking.', 'keuken-centrum'),
					'icon'        => 'shield',
					'image'       => kc_nobilia_pool_img(2),
				],
				[
					'title'       => __('Snelle levering & montage', 'keuken-centrum'),
					'description' => __('Doordat wij de keuken snel kunnen leveren en monteren, bent u in no-time aan de slag in uw nieuwe keuken, zonder zorgen over installatie.', 'keuken-centrum'),
					'icon'        => 'award',
					'image'       => kc_nobilia_pool_img(3),
				],
			],
		],
		'partnership' => [
			'ghost'          => 'Nobilia',
			'eyebrow'        => __('Direct van fabrikant', 'keuken-centrum'),
			'titleBefore'    => __('Nobilia keukens voor de ', 'keuken-centrum'),
			'titleHighlight' => __('scherpste prijs', 'keuken-centrum'),
			'titleAfter'     => '',
			'body'           => __('U koopt een Nobilia keuken via ons voor gegarandeerd de laagste prijs van topkwaliteit en met topservice. Nobilia heeft een uitermate breed assortiment. Wij nodigen u van harte uit om in onze showroom te komen kijken.', 'keuken-centrum'),
			'highlights'     => [
				__('Duitse kwaliteit en degelijkheid', 'keuken-centrum'),
				__('Gegarandeerd de laagste prijs', 'keuken-centrum'),
				__('Geen zorgen over installatie dankzij onze eigen montagedienst', 'keuken-centrum'),
				__('Standaard vijf jaar garantie', 'keuken-centrum'),
				__('Altijd één jaar garantie op montagewerkzaamheden', 'keuken-centrum'),
			],
			'note'  => __('Al een offerte elders? Neem deze mee. Wij bieden vrijwel altijd beter.', 'keuken-centrum'),
			'stats' => [
				[ 'icon' => 'factory', 'label' => __('Directe fabriek', 'keuken-centrum'), 'value' => __('Beste prijs', 'keuken-centrum') ],
				[ 'icon' => 'shield', 'label' => __('CBW + 10 jaar', 'keuken-centrum'), 'value' => __('Garantie', 'keuken-centrum') ],
				[ 'icon' => 'clock', 'label' => __('Gemiddelde levertijd', 'keuken-centrum'), 'value' => __('6 tot 8 weken', 'keuken-centrum') ],
				[ 'icon' => 'award', 'label' => __('ISO 9001 gecertificeerd', 'keuken-centrum'), 'value' => __('Kwaliteit', 'keuken-centrum') ],
			],
		],
		'gallery' => [
			'eyebrow'        => __('Inspiratie', 'keuken-centrum'),
			'titleBefore'    => __('Nobilia ', 'keuken-centrum'),
			'titleHighlight' => __('in beeld', 'keuken-centrum'),
			'lead'           => __('Officiële keukenopstellingen met trendy decors en eindeloze configuratiemogelijkheden.', 'keuken-centrum'),
			'items'          => [
				[
					'src'   => kc_nobilia_pool_img(0),
					'title' => __('Trendy decors', 'keuken-centrum'),
					'tag'   => __('Showroom Utrecht', 'keuken-centrum'),
					'span'  => 'large',
				],
				[
					'src'   => kc_nobilia_pool_img(4),
					'title' => __('Doorlopende lijnvoering', 'keuken-centrum'),
					'tag'   => __('Design', 'keuken-centrum'),
					'span'  => 'medium',
				],
				[
					'src'   => kc_nobilia_pool_img(5),
					'title' => __('Detail & afwerking', 'keuken-centrum'),
					'tag'   => __('Kwaliteit', 'keuken-centrum'),
					'span'  => 'medium',
				],
			],
			'cta' => [
				'titleBefore'    => __('Liever ', 'keuken-centrum'),
				'titleHighlight' => __('in het echt', 'keuken-centrum'),
				'body'           => __('Nobilia opstellingen staan voor u klaar op de Zonnebaan. Kom langs en ontdek het volledige assortiment.', 'keuken-centrum'),
				'label'          => __('Boek een afspraak', 'keuken-centrum'),
				'href'           => home_url('/consultation/'),
			],
		],
		'custom' => [
			'eyebrow'        => __('Op maat', 'keuken-centrum'),
			'titleBefore'    => __('Écht', 'keuken-centrum'),
			'titleHighlight' => __('alles', 'keuken-centrum'),
			'titleAfter'     => __('is mogelijk', 'keuken-centrum'),
			'body'           => __('Een uitdagende moderne designkeuken, een robuuste industrielook of de nostalgische intimiteit van een landelijk klassieke keuken: bij Keuken-Centrum Utrecht koopt u de keuken van uw dromen voor een verrassend betaalbare prijs.', 'keuken-centrum'),
			'secondary'      => __('Wij leveren de kwaliteitskeuken van uw dromen die naadloos past bij uw portemonnee. Compleet met topmerk-apparatuur, zorgeloze garantie en uitstekende service, zonder opdringerig gedoe.', 'keuken-centrum'),
		],
		'faq' => [
			'titleBefore'    => __('Alles wat u wilt weten over ', 'keuken-centrum'),
			'titleHighlight' => 'Nobilia',
			'items'          => kc_brand_shared_faq(),
		],
		'advisors'    => array_slice(kc_brand_shared_advisors(), 0, 2),
		'showroomCta' => [
			'eyebrow'        => __('In de showroom', 'keuken-centrum'),
			'titleBefore'    => __('Nobilia ', 'keuken-centrum'),
			'titleHighlight' => __('in het echt', 'keuken-centrum'),
			'titleAfter'     => __(' bekijken?', 'keuken-centrum'),
			'subtitle'       => __('Uitermate breed assortiment in onze showroom. Kom langs in Utrecht.', 'keuken-centrum'),
			'button'         => __('Boek een afspraak', 'keuken-centrum'),
			'href'           => home_url('/consultation/'),
		],
	];

	return function_exists('kc_cms_apply_brand_page') ? kc_cms_apply_brand_page($data, 'nobilia') : $data;
}
