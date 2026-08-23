<?php
/**
 * Apparatuur overview + category data (React apparatuur.ts).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Overview page (React apparatuurOverview).
 *
 * @return array<string, mixed>
 */
function kc_apparatuur_overview_data(): array {
	$phone = (string) kc_get_option( 'contact_phone', '030 241 5122' );

	return [
		'phone'      => $phone,
		'meta'       => [
			'title'       => __( 'Keukenapparatuur · Inbouwapparatuur | Keuken-Centrum Utrecht', 'keuken-centrum' ),
			'description' => __( 'Ontdek keukenapparatuur van Miele, Siemens, BORA, Quooker en meer bij Keuken-Centrum Utrecht. Afzuigkappen, kookplaten, fornuizen, koelkasten, vaatwassers en Quooker.', 'keuken-centrum' ),
		],
		'hero'       => [
			'image'     => kc_apparatuur_src( 'kookplaat-afzuiging.webp', '2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp' ),
			'eyebrow'   => __( 'Inbouwapparatuur', 'keuken-centrum' ),
			'title'     => __( 'Apparatuur', 'keuken-centrum' ),
			'highlight' => __( 'die meekookt.', 'keuken-centrum' ),
			'subtitle'  => __( 'Van stille vaatwassers tot BORA-afzuiging en de Quooker die alles kan: topmerken geïntegreerd in één keukenontwerp, met de beste prijsgarantie.', 'keuken-centrum' ),
			'badges'    => [
				[ 'value' => '15+', 'label' => __( 'Topmerken', 'keuken-centrum' ) ],
				[ 'value' => __( 'Beste', 'keuken-centrum' ), 'label' => __( 'Prijs', 'keuken-centrum' ) ],
				[ 'value' => __( '2 dgn', 'keuken-centrum' ), 'label' => __( 'Levering*', 'keuken-centrum' ) ],
			],
		],
		'intro'      => [
			'eyebrow'    => __( 'Keukenapparatuur', 'keuken-centrum' ),
			'title'      => __( 'Topmerken, scherpe prijzen, complete integratie', 'keuken-centrum' ),
			'paragraphs' => [
				__( 'In alle keukens komt inbouwapparatuur voor. Denk daarbij aan vaatwassers, magnetrons, ijskasten enzovoorts. Wij als keukencentrum bieden een breed assortiment in de meest bekende merken inbouwapparatuur.', 'keuken-centrum' ),
				__( 'We noemen enkele merken zoals Bosch, Siemens, Miele, ATAG, Gaggenau, Pelgrim, Neff, AEG, AGA, Falcon en KitchenAid. Daarnaast leveren we ook andere merken die voordeliger zijn dan de bekende namen, maar kwalitatief zeer goed.', 'keuken-centrum' ),
				__( 'Daardoor combineren wij kwaliteit en een scherpere prijs. Wij verkopen keukeninbouwapparatuur ook apart tegen zeer voordelige prijzen. Ziet u uw model niet? Geen probleem: wij kunnen vrijwel alles bestellen.', 'keuken-centrum' ),
			],
		],
		'categories' => kc_apparatuur_overview_categories(),
		'valueProps' => [
			[
				'title' => __( 'Topmerken & alternatieven', 'keuken-centrum' ),
				'body'  => __( 'Bekende merken én scherp geprijsde kwaliteitsalternatieven, zodat u kwaliteit en prijs in balans houdt.', 'keuken-centrum' ),
			],
			[
				'title' => __( 'Apart of geïntegreerd', 'keuken-centrum' ),
				'body'  => __( 'Apparatuur los kopen of volledig geïntegreerd in uw keukenontwerp. Wij adviseren over passend vermogen en formaten.', 'keuken-centrum' ),
			],
			[
				'title' => __( 'Showroom & snelle levering', 'keuken-centrum' ),
				'body'  => __( 'Ervaar de systemen live. Veel fornuizen en Quookers zijn snel leverbaar, vaak binnen enkele dagen.', 'keuken-centrum' ),
			],
		],
		'faq'        => kc_apparatuur_faq(),
		'brands'     => kc_apparatuur_brands(),
	];
}

/**
 * Category payload by slug.
 *
 * @return array<string, mixed>|null
 */
function kc_apparatuur_category_data( string $slug ): ?array {
	$pages = kc_apparatuur_category_catalog();
	if ( ! isset( $pages[ $slug ] ) ) {
		return null;
	}

	return kc_apparatuur_hydrate_category( $pages[ $slug ] );
}

/**
 * Back-compat for earlier kookplaten-only map.
 *
 * @return array<string, mixed>
 */
function kc_kookplaten_page_data(): array {
	$data = kc_apparatuur_category_data( 'kookplaten' );
	return is_array( $data ) ? $data : [];
}

/**
 * Raw category catalog (React apparatuurPages).
 *
 * @return array<string, array<string, mixed>>
 */
function kc_apparatuur_category_catalog(): array {
	$bora = kc_apparatuur_src( 'kookplaat-afzuiging.webp', '2019_bora_pure_pued_rehkarree_rgb-1200x800-1.webp' );
	$eiland = kc_apparatuur_src( 'afzuigkappen.webp', '2019/01/eiland-afzuigkappen-keukens.webp' );
	$inductie = kc_apparatuur_src( 'inductie-kookplaat.webp', 'inductie_kookplaat.webp' );
	$fusion = kc_apparatuur_src( '', 'fusion_square_black_carbon_kook_model_3-1.webp' );
	$wave = kc_apparatuur_src( '', 'Wave-Model-2119-Alphenberg.webp' );

	return [
		'afzuigkappen'           => [
			'slug'        => 'afzuigkappen',
			'name'        => __( 'Afzuigkappen', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Afzuigkappen · Eiland, schouw, inbouw & BORA | Keuken-Centrum', 'keuken-centrum' ),
				'description' => __( 'Breed assortiment afzuigkappen bij Keuken-Centrum Utrecht: eilandkappen, onderbouw, schouwkappen, inbouwkappen, plafondunits en BORA-afzuigingen.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => $eiland,
				'eyebrow'   => __( 'Keukenventilatie', 'keuken-centrum' ),
				'title'     => __( 'Afzuigkappen', 'keuken-centrum' ),
				'highlight' => __( 'met karakter.', 'keuken-centrum' ),
				'subtitle'  => __( 'Bij Keuken-Centrum vindt u een breed assortiment afzuigkappen voor uiteenlopende doeleinden. Vooral eiland- en schouwkappen hangen prominent in het zicht. Daarom kiezen we voor stijl én prestatie.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => '6', 'label' => __( 'Typen', 'keuken-centrum' ) ],
					[ 'value' => 'BORA', 'label' => __( 'In showroom', 'keuken-centrum' ) ],
					[ 'value' => __( 'Beste', 'keuken-centrum' ), 'label' => __( 'Prijs', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Afzuiging', 'keuken-centrum' ),
				'title'      => __( 'Design dat ook écht afzuigt', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'Een afzuigkap is onmisbaar voor goede keukenventilatie. Bij Keuken-Centrum geloven we dat een afzuigkap niet alleen functioneel, maar ook decoratief bijdraagt aan uw keuken.', 'keuken-centrum' ),
					__( 'Van subtiele onderbouwmodellen tot statement eilandkappen en BORA-werkbladafzuiging: wij helpen u het juiste type, vermogen en design te kiezen dat past bij uw kookplaat, plafondhoogte en keukenstijl.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'Eilandkappen', 'keuken-centrum' ), 'body' => __( 'Statement boven het eiland. Cilindrische, piramidevormige of vrijhangende designunits die evenveel aanwezig zijn als krachtig.', 'keuken-centrum' ), 'image' => $eiland ],
				[ 'title' => __( 'Onderbouwmodellen', 'keuken-centrum' ), 'body' => __( 'Discreet onder de bovenkast. Ideaal wanneer u maximale opslag wilt behouden zonder zichtbare kap.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2019/01/onderbouw-afzuigkappen-keukens.webp' ) ],
				[ 'title' => __( 'Schouwkappen', 'keuken-centrum' ), 'body' => __( 'Klassiek of modern wandmodel. Van strak zwart tot rvs: het icoon aan de wand boven uw kookplaat.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2019/01/wand-afzuigkappen-keukens.webp' ) ],
				[ 'title' => __( 'Inbouwkappen', 'keuken-centrum' ), 'body' => __( 'Volledig geïntegreerd in een omkasting of plafonddoos. Onzichtbaar design, zichtbare spotlights en puur vermogen.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2019/01/inbouw-afzuigkappen-keukens.webp' ) ],
				[ 'title' => __( 'Plafond afzuigkap', 'keuken-centrum' ), 'body' => __( 'Vlak geïntegreerd in het plafond. Minimale uitstraling en maximale ruimtebeleving, perfect boven een eiland.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2019/01/plafond-afzuigkappen-keukens.webp' ) ],
				[ 'title' => __( 'BORA Afzuigingen', 'keuken-centrum' ), 'body' => __( 'Werkbladafzuiging die damp direct bij de pan wegzuigt. Zonder overhangende kap behoudt u vrij zicht en stil vermogen.', 'keuken-centrum' ), 'image' => $bora ],
			],
			'brandsNote'  => __( 'Afzuigkappen van BORA, Wave, Siemens, Bosch, Miele, Neff, AEG, Gaggenau en meer.', 'keuken-centrum' ),
			'valueProps'  => [
				[ 'title' => __( 'Stijl per type', 'keuken-centrum' ), 'body' => __( 'Eiland en schouw vragen om design; onderbouw en inbouw om discretie. Wij matchen type aan uw keukenbeeld.', 'keuken-centrum' ) ],
				[ 'title' => __( 'Vermogen & geluid', 'keuken-centrum' ), 'body' => __( 'Wij adviseren over m³/uur, recirculatie of afvoer, en hoe stil het systeem in de praktijk is.', 'keuken-centrum' ) ],
				[ 'title' => __( 'Showroomvergelijking', 'keuken-centrum' ), 'body' => __( 'Vergelijk BORA, Wave en klassieke kappen side-by-side in onze showroom in Utrecht.', 'keuken-centrum' ) ],
			],
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'Afzuigkappen in het echt', 'keuken-centrum' ), __( 'bekijken?', 'keuken-centrum' ) ),
		],
		'werkblad-afzuiging'     => [
			'slug'        => 'werkblad-afzuiging',
			'name'        => __( 'Werkblad afzuiging', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Werkblad afzuiging · BORA & Wave | Keuken-Centrum Utrecht', 'keuken-centrum' ),
				'description' => __( 'Ontdek werkbladafzuiging van BORA en Wave bij Keuken-Centrum Utrecht. Damp verdwijnt bij de bron, stil, krachtig en designgericht.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => $bora,
				'eyebrow'   => __( 'Kookveldafzuiging', 'keuken-centrum' ),
				'title'     => __( 'Werkblad', 'keuken-centrum' ),
				'highlight' => __( 'afzuiging.', 'keuken-centrum' ),
				'subtitle'  => __( 'Damp, geur en vet worden direct bij de pan afgezogen. Zonder overhangende kap behoudt u vrij zicht, stil vermogen en een ultraminimaal keukenbeeld.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => 'BORA', 'label' => __( 'Specialist', 'keuken-centrum' ) ],
					[ 'value' => 'Wave', 'label' => __( 'Design', 'keuken-centrum' ) ],
					[ 'value' => __( 'Stil', 'keuken-centrum' ), 'label' => __( 'Vermogen', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Direct bij de bron', 'keuken-centrum' ),
				'title'      => __( 'Afzuiging die uw keukenbeeld vrijhoudt', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'Werkbladafzuiging (ook wel kookveldafzuiging) zuigt damp direct naast of tussen de kookzones weg. Dat maakt een overhangende kap overbodig en is ideaal bij eilanden en open woonkeukens.', 'keuken-centrum' ),
					__( 'Keuken-Centrum is verkooppunt van BORA en Wave. In de showroom ervaart u hoe stil, krachtig en schoon deze systemen in de praktijk zijn.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'BORA Pure', 'keuken-centrum' ), 'body' => __( 'Iconische kookveldafzuiging met verwisselbare zones. Scherp design, intuïtief bedienbaar en stil tot hoge vermogens.', 'keuken-centrum' ), 'image' => $bora ],
				[ 'title' => __( 'BORA systemen', 'keuken-centrum' ), 'body' => __( 'Van compacte units tot professionele opstellingen, met recirculatie of afvoer en afgestemd op uw woning.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( 'kookplaat-afzuiging.webp', '2020/03/kookplaat_met_afzuiging-1.webp' ) ],
				[ 'title' => __( 'Wave designunits', 'keuken-centrum' ), 'body' => __( 'Bijzondere designoplossingen waarbij afzuiging en verlichting naadloos samenkomen, volledig op maat.', 'keuken-centrum' ), 'image' => $wave ],
			],
			'brandsNote'  => __( 'Gespecialiseerd in BORA en Wave werkbladafzuiging.', 'keuken-centrum' ),
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'BORA ervaren', 'keuken-centrum' ), __( 'in de showroom?', 'keuken-centrum' ) ),
		],
		'kookplaten'             => [
			'slug'        => 'kookplaten',
			'name'        => __( 'Kookplaten', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Kookplaten · Inductie, keramisch & met afzuiging | Keuken-Centrum', 'keuken-centrum' ),
				'description' => __( 'Kookplaten van Siemens, Miele, Bosch, Gaggenau en meer. Inductie, keramisch, domino-elementen en kookplaten met afzuiging.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => $inductie,
				'eyebrow'   => __( 'Kookcomfort', 'keuken-centrum' ),
				'title'     => __( 'Kookplaten', 'keuken-centrum' ),
				'highlight' => __( 'op maat.', 'keuken-centrum' ),
				'subtitle'  => __( 'Inductie, keramisch, domino of met geïntegreerde afzuiging: topmerken inbouwapparatuur voor optimaal kookcomfort in elke keuken.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => __( 'Inductie', 'keuken-centrum' ), 'label' => __( 'Snel & veilig', 'keuken-centrum' ) ],
					[ 'value' => __( 'Flex', 'keuken-centrum' ), 'label' => __( 'Zones', 'keuken-centrum' ) ],
					[ 'value' => __( 'Top', 'keuken-centrum' ), 'label' => __( 'Merken', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Inbouw kookplaten', 'keuken-centrum' ),
				'title'      => __( 'De juiste plaat voor uw manier van koken', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'Wij bieden een breed assortiment inbouwapparatuur van bekende merken zoals Bosch, Siemens, Miele, ATAG, Gaggenau, Pelgrim, Neff, AEG, AGA, Falcon en KitchenAid.', 'keuken-centrum' ),
					__( 'Of u nu flexzones, bridge-functies, wokbranders of een kookplaat met geïntegreerde afzuiging zoekt: wij adviseren over vermogen, aansluiting en passend design.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'Inductie kookplaten', 'keuken-centrum' ), 'body' => __( 'Snel, veilig en energiezuinig. Precisie per zone, met modern design in zwart glas of rvs.', 'keuken-centrum' ), 'image' => $inductie ],
				[ 'title' => __( 'Keramische kookplaten', 'keuken-centrum' ), 'body' => __( 'Klassieke warmte-overdracht met strak glasoppervlak. Bekend, betaalbaar en eenvoudig te onderhouden.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( 'keramisch.webp', '2020/03/keramisch.webp' ) ],
				[ 'title' => __( 'Domino elementen', 'keuken-centrum' ), 'body' => __( 'Modulaire zones om inductie, teppanyaki, wok of grill te combineren tot een persoonlijk kooklandschap.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( 'domino.webp', '2020/03/dominokeuken.webp' ) ],
				[ 'title' => __( 'Kookplaten met afzuiging', 'keuken-centrum' ), 'body' => __( 'Alles-in-één: koken en afzuigen in het werkblad. Vrij zicht, stil vermogen en een clean eilandontwerp.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( 'kookplaat-afzuiging.webp', '2020/03/kookplaat_met_afzuiging-1.webp' ) ],
			],
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'Kookplaten vergelijken', 'keuken-centrum' ), __( 'in Utrecht?', 'keuken-centrum' ) ),
		],
		'fornuizen'              => [
			'slug'        => 'fornuizen',
			'name'        => __( 'Fornuizen', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Fornuizen · AGA, Falcon, La Cornue | Keuken-Centrum Utrecht', 'keuken-centrum' ),
				'description' => __( 'Exclusieve fornuizen van AGA, Falcon, Steel, La Cornue, Lofra en Viking. Strakke prijzen, korte levertijd vanaf 2 dagen.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => kc_apparatuur_src( 'fornuizen.webp', '2018/03/LaCornue.webp' ),
				'eyebrow'   => __( 'Culinaire statement pieces', 'keuken-centrum' ),
				'title'     => __( 'Fornuizen', 'keuken-centrum' ),
				'highlight' => __( 'met allure.', 'keuken-centrum' ),
				'subtitle'  => __( 'Keuken-Centrum Utrecht biedt exclusieve fornuizen van o.a. AGA, Falcon, Steel, La Cornue, Lofra en Viking, met strakke prijzen en in principe een korte levertijd van 2 dagen.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => __( '2 dgn', 'keuken-centrum' ), 'label' => __( 'Levertijd*', 'keuken-centrum' ) ],
					[ 'value' => '90 tot 100', 'label' => 'cm' ],
					[ 'value' => __( 'Exclusief', 'keuken-centrum' ), 'label' => __( 'Merken', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Range cookers', 'keuken-centrum' ),
				'title'      => __( 'Professioneel koken, thuis', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'Bij onze showroom in Utrecht kunt u terecht voor fornuizen van topmerken. Wij bieden complete maatwerkkeukens én losse fornuizen, inclusief accessoires.', 'keuken-centrum' ),
					__( 'Kies de juiste breedte (90 of 100 cm), branders/ovens-combinatie en afwerking. Onze adviseurs helpen u met aansluiting, ventilatie en passend werkblad.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'La Cornue', 'keuken-centrum' ), 'body' => __( 'Franse haute cuisine in uw keuken. Ambachtelijk, iconisch en volledig op maat te configureren.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( 'fornuizen.webp', '2018/03/LaCornue.webp' ) ],
				[ 'title' => __( 'Falcon', 'keuken-centrum' ), 'body' => __( 'Britse range cookers met karakter, krachtige ovens, betrouwbare branders en een tijdloos silhouet.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2018/03/Falcon.webp' ) ],
				[ 'title' => __( 'AGA', 'keuken-centrum' ), 'body' => __( 'Het icoon van cast-iron koken. Warmte, sfeer en een lifestyle die generaties meegaat.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2018/03/AGA.webp' ) ],
				[ 'title' => __( 'Lofra & meer', 'keuken-centrum' ), 'body' => __( 'Italiaanse precisie en andere exclusieve merken, waaronder Steel en Viking, met snelle levering.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2018/03/Lofra.webp' ) ],
			],
			'brandsNote'  => __( 'AGA, Falcon, Steel, La Cornue, Lofra en Viking. Accessoires zijn leverbaar.', 'keuken-centrum' ),
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'Fornuis kiezen', 'keuken-centrum' ), __( 'met advies?', 'keuken-centrum' ) ),
		],
		'koelkasten-vriezers'    => [
			'slug'        => 'koelkasten-vriezers',
			'name'        => __( 'Koelkasten & Vriezers', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Koelkasten & Vriezers · Inbouw en vrijstaand | Keuken-Centrum', 'keuken-centrum' ),
				'description' => __( 'Inbouw- en vrijstaande koelkasten en vriezers van Siemens, Miele en meer. Incl. wijnkoelers als eye-catcher.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => kc_apparatuur_src( '', '2020/03/MCIM02473755_Siemens_Campaign_REU_cooling_modularFit_01_4_3.webp' ),
				'eyebrow'   => __( 'Cooling', 'keuken-centrum' ),
				'title'     => __( 'Koelkasten', 'keuken-centrum' ),
				'highlight' => __( '& vriezers.', 'keuken-centrum' ),
				'subtitle'  => __( 'Keeping it cool. Kies een vrijstaande koelkast of wijnkoeler als eye-catcher, of inbouwkoelkasten die volledig verdwijnen in uw keukenontwerp.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => __( 'Inbouw', 'keuken-centrum' ), 'label' => __( 'Invisible', 'keuken-centrum' ) ],
					[ 'value' => __( 'Fresh', 'keuken-centrum' ), 'label' => __( 'Zones', 'keuken-centrum' ) ],
					[ 'value' => __( 'Quiet', 'keuken-centrum' ), 'label' => __( 'Night', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Vers houden', 'keuken-centrum' ),
				'title'      => __( 'Koeling die past bij uw design', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'Benieuwd hoe een koelkast werkt, of hoeveel deze per jaar kost? Wij zetten de praktische keuzes voor u op een rij, van energieklasse tot hyperFresh-zones.', 'keuken-centrum' ),
					__( 'Kies inbouw voor een naadloos front, of een vrijstaand statement-model. Onze adviseurs helpen u met nismaten, scharnierkanten en vriescapaciteit.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'Inbouw koelkasten', 'keuken-centrum' ), 'body' => __( 'Volledig geïntegreerd achter keukenfronten. Onzichtbaar design, maximale koeling.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', 'MCMI02130334_studioLine_KI86SSD40_DE.webp' ) ],
				[ 'title' => __( 'Onderbouw koelkasten', 'keuken-centrum' ), 'body' => __( 'Compact onder het werkblad, ideaal als tweede koelzone of in kleinere keukens.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', 'MCIM01003124_F6810_17_P_hyperfresh_mixed.webp' ) ],
				[ 'title' => __( 'Vrijstaande koelkasten', 'keuken-centrum' ), 'body' => __( 'Statement of multifunctioneel. Inclusief side-by-side en wijnkoelers als blikvanger.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2020/03/MCIM02473755_Siemens_Campaign_REU_cooling_modularFit_01_4_3.webp' ) ],
				[ 'title' => __( 'Vriezers', 'keuken-centrum' ), 'body' => __( 'Inbouw- of vrijstaande vriezers met NoFrost, snelle diepvries en efficiënte indeling.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', 'MCMI02130349_studioLine_KI86SSD40_REU.webp' ) ],
			],
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'Koeladvies', 'keuken-centrum' ), __( 'in de showroom?', 'keuken-centrum' ) ),
		],
		'vaatwassers'            => [
			'slug'        => 'vaatwassers',
			'name'        => __( 'Vaatwassers', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Vaatwassers · Siemens, Bosch, Miele | Keuken-Centrum Utrecht', 'keuken-centrum' ),
				'description' => __( 'Inbouwvaatwassers van Siemens, Bosch en Miele. Stil, efficiënt en volledig geïntegreerd in uw keukenfront.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => kc_apparatuur_src( '', '2020/03/MCMI02365333_Siemens_Global_Category_Dishwashing_SN678X36TE_01_4_3.webp' ),
				'eyebrow'   => __( 'Dishwashing', 'keuken-centrum' ),
				'title'     => __( 'Vaatwassers', 'keuken-centrum' ),
				'highlight' => __( 'die stil werken.', 'keuken-centrum' ),
				'subtitle'  => __( 'Stille, efficiënte inbouwvaatwassers van Siemens, Bosch en Miele, volledig geïntegreerd en met programma’s voor kristalglas tot intensieve kookpannen.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => __( 'Silent', 'keuken-centrum' ), 'label' => __( 'Nachttijd', 'keuken-centrum' ) ],
					[ 'value' => 'A', 'label' => __( 'Energie', 'keuken-centrum' ) ],
					[ 'value' => __( 'Top', 'keuken-centrum' ), 'label' => __( 'Merken', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Inbouwvaatwassers', 'keuken-centrum' ),
				'title'      => __( 'Schoon resultaat, onzichtbaar geïntegreerd', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'Wij bieden een breed assortiment inbouwapparatuur van bekende merken. Voor vaatwassers focussen wij op Siemens, Bosch en Miele, merken die stilte, reinigingskracht en duurzaamheid combineren.', 'keuken-centrum' ),
					__( 'Kies volledig geïntegreerd of met bedieningspaneel. Wij helpen u met hoogte (standaard of XXL), bestekladen en aansluiting op uw keukenontwerp.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'Siemens vaatwassers', 'keuken-centrum' ), 'body' => __( 'Innovatie en design, van varioSpeed tot intelligent sensor-reinigen in studioLine-uitvoeringen.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2020/03/MCMI02365333_Siemens_Global_Category_Dishwashing_SN678X36TE_01_4_3.webp' ) ],
				[ 'title' => __( 'Bosch vaatwassers', 'keuken-centrum' ), 'body' => __( 'Betrouwbaar, stil en doordacht. Perfecte integratie in moderne keukenfronten.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', 'Schermafbeelding-2021-10-13-om-11.17.47.webp' ) ],
				[ 'title' => __( 'Miele vaatwassers', 'keuken-centrum' ), 'body' => __( 'Premium afwerking, lange levensduur en uitzonderlijke reinigingsresultaten van een merk met garantie op kwaliteit.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', 'Schermafbeelding-2021-10-13-om-13.29.28.webp' ) ],
			],
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'Vaatwasser kiezen', 'keuken-centrum' ), __( 'met advies?', 'keuken-centrum' ) ),
		],
		'quooker'                => [
			'slug'        => 'quooker',
			'name'        => __( 'Quooker', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Quooker · Fusion, Flex, Nordic | Keuken-Centrum Utrecht', 'keuken-centrum' ),
				'description' => __( 'Quooker kokendwaterkranen: Fusion, Flex, Classic Nordic en meer. Direct 100°C, optioneel gekoeld en bruisend water.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => $fusion,
				'eyebrow'   => __( 'Kokendwaterkraan', 'keuken-centrum' ),
				'title'     => __( 'Quooker', 'keuken-centrum' ),
				'highlight' => __( 'die alles kan.', 'keuken-centrum' ),
				'subtitle'  => __( 'Direct 100°C kokend water, en optioneel gekoeld of bruisend. Van Fusion tot Flex en Nordic Classic: ervaar Quooker in onze showroom.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => '100°C', 'label' => __( 'Direct', 'keuken-centrum' ) ],
					[ 'value' => __( 'Cube', 'keuken-centrum' ), 'label' => __( 'Gekoeld & bruis', 'keuken-centrum' ) ],
					[ 'value' => __( 'Design', 'keuken-centrum' ), 'label' => __( 'Iconisch', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Quooker', 'keuken-centrum' ),
				'title'      => __( 'Eén kraan. Alle water.', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'De Quooker is meer dan een kraan: het is een systeem. Kokend water voor thee, koken of steriliseren, zonder fluitketel. Met Quooker Cube krijgt u ook gefilterd gekoeld en bruisend water.', 'keuken-centrum' ),
					__( 'Keuken-Centrum is Quooker-specialist in Utrecht. Onze adviseurs helpen u met keuze van model, afwerking (chroom, rvs, zwart, goud) en de juiste boiler of COMBI+ opslag.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'Fusion', 'keuken-centrum' ), 'body' => __( 'Iconische vierkante kraan. Kokend, warm en koud uit één elegant silhouet, beschikbaar in meerdere afwerkingen.', 'keuken-centrum' ), 'image' => $fusion ],
				[ 'title' => __( 'Flex', 'keuken-centrum' ), 'body' => __( 'Flexibele uitloop voor maximale reikwijdte. Ideaal bij grote spoelbakken en intensief koken.', 'keuken-centrum' ), 'image' => $fusion ],
				[ 'title' => __( 'Classic Nordic', 'keuken-centrum' ), 'body' => __( 'Tijdloze rondingen met klassieke allure. Perfect in landelijke en klassieke keukens.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( 'Quooker_Logo.webp', 'quookerMerken.webp' ) ],
				[ 'title' => __( 'Nordic TwinTaps', 'keuken-centrum' ), 'body' => __( 'Aparte kranen voor kokend water en kraanwater vormen een strak twin-tap arrangement op het blad.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( 'Quooker_Logo.webp', 'quookerMerken.webp' ) ],
			],
			'brandsNote'  => __( 'Officieel Quooker-assortiment: Fusion, Flex, Classic en Nordic, met Cube-optie.', 'keuken-centrum' ),
			'faq'         => array_merge(
				kc_apparatuur_faq(),
				[
					[
						'q' => __( 'Wat is Quooker Cube?', 'keuken-centrum' ),
						'a' => __( 'Cube voegt gefilterd gekoeld en bruisend water toe aan uw Quooker-systeem. Zo heeft u kokend, koud, warm, gekoeld en bruisend water uit één installatie.', 'keuken-centrum' ),
					],
				]
			),
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'Quooker proberen', 'keuken-centrum' ), __( 'in de showroom?', 'keuken-centrum' ) ),
		],
		'wave-afzuigkappen'      => [
			'slug'        => 'wave-afzuigkappen',
			'name'        => __( 'Wave afzuigkappen', 'keuken-centrum' ),
			'meta'        => [
				'title'       => __( 'Wave afzuigkappen & verlichting | Keuken-Centrum Utrecht', 'keuken-centrum' ),
				'description' => __( 'Wave Design afzuigkappen en verlichting bij Keuken-Centrum Utrecht. Efficiënt, innovatief, stijlvol en volledig op maat.', 'keuken-centrum' ),
			],
			'hero'        => [
				'image'     => $wave,
				'eyebrow'   => __( 'Wave Design', 'keuken-centrum' ),
				'title'     => __( 'Wave', 'keuken-centrum' ),
				'highlight' => __( 'afzuigkappen.', 'keuken-centrum' ),
				'subtitle'  => __( 'Efficiënt, innovatief & stijlvol: de afzuigkappen en verlichting van Wave zijn een must voor elke keuken. U krijgt garantie op de beste prijs en ze zijn direct leverbaar.', 'keuken-centrum' ),
				'badges'    => [
					[ 'value' => __( 'Maatwerk', 'keuken-centrum' ), 'label' => '100%' ],
					[ 'value' => __( 'Design', 'keuken-centrum' ), 'label' => __( 'Lighting', 'keuken-centrum' ) ],
					[ 'value' => __( 'Beste', 'keuken-centrum' ), 'label' => __( 'Prijs', 'keuken-centrum' ) ],
				],
			],
			'intro'       => [
				'eyebrow'    => __( 'Wave Kitchen Products', 'keuken-centrum' ),
				'title'      => __( 'Specialist in afzuiging én verlichting', 'keuken-centrum' ),
				'paragraphs' => [
					__( 'Wave Design is een ware specialist in afzuigkappen en bijzondere verlichting voor in de keuken. Het merk staat synoniem voor bijzondere oplossingen, als u zoekt naar design afzuigkappen en verlichting. Daar wordt een hoogwaardige afwerking doorgevoerd tot in het kleinste detail.', 'keuken-centrum' ),
					__( 'Bij ons in de showroom hebben we verschillende plafondunits en lampen van Wave Design hangen, die onze adviseurs u graag laten zien. Het toont de mogelijkheden en de hoge kwaliteit, terwijl u altijd de keuze hebt om alles helemaal naar wens samen te stellen.', 'keuken-centrum' ),
					__( 'Dat geldt voor de afzuigkappen en de verlichting, waarmee er tot in de puntjes maatwerk mogelijk is. Uw vraag vormt onze uitdaging. Het resultaat ziet u terug in collecties waarin techniek en design volledig integreren.', 'keuken-centrum' ),
				],
			],
			'types'       => [
				[ 'title' => __( 'Plafondunits', 'keuken-centrum' ), 'body' => __( 'Vlakke of sculpturale units in het plafond, met geïntegreerde LED en krachtige afzuiging.', 'keuken-centrum' ), 'image' => $wave ],
				[ 'title' => __( 'Frame & designframes', 'keuken-centrum' ), 'body' => __( 'Wave Frame in rvs of maatwerkafwerking, met architecturale lijnen die de keuken structureren.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', 'Wave_Frame_2056_RVS_A_L_1920-1200x800h.webp' ) ],
				[ 'title' => __( 'Inbouwunits', 'keuken-centrum' ), 'body' => __( 'Discrete inbouwunits die verdwijnen in omkasting of plafonddoos: puur functioneel design.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '2120_B.webp' ) ],
				[ 'title' => __( 'Verlichting', 'keuken-centrum' ), 'body' => __( 'Bijzondere keukenverlichting die samensmelt met afzuiging, voor sfeer én taaklicht in één systeem.', 'keuken-centrum' ), 'image' => kc_apparatuur_src( '', '1627_A.webp' ) ],
			],
			'brandsNote'  => __( 'Officieel Wave verkooppunt aan de Zonnebaan 8, 3542 EC Utrecht.', 'keuken-centrum' ),
			'valueProps'  => [
				[ 'title' => __( 'Maatwerk tot in detail', 'keuken-centrum' ), 'body' => __( 'Afmetingen, afwerking en lichtkleur volledig naar wens, tot in het kleinste detail.', 'keuken-centrum' ) ],
				[ 'title' => __( 'Showroomexperiëntie', 'keuken-centrum' ), 'body' => __( 'Verschillende plafondunits en lampen hangen klaar om live te ervaren.', 'keuken-centrum' ) ],
				[ 'title' => __( 'Beste prijsgarantie', 'keuken-centrum' ), 'body' => __( 'Garantie op de beste prijs bij Keuken-Centrum, met snel en deskundig advies.', 'keuken-centrum' ) ],
			],
			'showroomCta' => kc_apparatuur_showroom_cta( __( 'Wave Design', 'keuken-centrum' ), __( 'in Utrecht ontdekken?', 'keuken-centrum' ) ),
		],
	];
}
