<?php
/**
 * Keukens overview page data (React keukens-overview.ts parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_keukens_overview_data(): array {
	$bundle = static function (string $slug): string {
		$assets = kc_brand_bundle($slug);
		return $assets['hero'] ?: '';
	};

	return [
		'meta' => [
			'title'       => __('Keukens · A-merk keukens bij Keuken-Centrum Utrecht', 'keuken-centrum'),
			'description' => __('Breed assortiment A-merk keukens van Leicht, Nobilia, AI Küchen, Zampieri en Cucinesse, met betaalbare prijzen, 3D-ontwerp en gegarandeerd de scherpste prijs in Utrecht.', 'keuken-centrum'),
		],
		'hero' => [
			'image'     => kc_brand_upload('Schermafbeelding-2021-05-19-om-10.29.17.webp'),
			'images'    => [
				kc_brand_upload('Schermafbeelding-2021-05-19-om-10.29.17.webp'),
				kc_brand_upload('713-269-M02-103-316-j19.webp'),
				kc_brand_upload('Schermafbeelding-2021-05-17-om-21.06.15.webp'),
			],
			'eyebrow'   => __('A-merk keukens', 'keuken-centrum'),
			'title'     => __('Keukens', 'keuken-centrum'),
			'highlight' => __('Kom langs.', 'keuken-centrum'),
			'subtitle'  => __('Leicht. Nobilia. Zampieri. AI Küchen. Cucinesse. Een breed assortiment A-merk keukens en apparatuur tegen betaalbare prijzen, volledig op maat ontworpen met onze 3D-software.', 'keuken-centrum'),
		],
		'intro' => [
			'eyebrow'    => __('Ons assortiment', 'keuken-centrum'),
			'title'      => __('Van wens tot droomkeuken, stap voor stap', 'keuken-centrum'),
			'paragraphs' => [
				__('Wij bieden een breed assortiment A-merk keukens en apparatuur tegen betaalbare prijzen. Een klant vertelt ons eerst wat voor soort keuken ze willen, of wij achterhalen met het stellen van vragen hun eisen en wensen. We leggen de mogelijkheden en nieuwste trends uit.', 'keuken-centrum'),
				__('Vervolgens komt de gewenste en noodzakelijke inbouwapparatuur en de grote variatie aan merken die wij daarin bieden aan bod. Daarna gaan we nog dieper in op de gewenste keuken: welk type werkblad geschikt is, de overige accessoires, levertijden en tips voor de montage.', 'keuken-centrum'),
				__('Nostalgisch, landelijk, modern of trendy design: op basis van het type keuken dat u wenst en de beschikbare ruimte adviseren wij over de meest handige opstelling. Vervolgens ontwerpen wij de keuken met onze 3D-software geheel naar wens, stap voor stap.', 'keuken-centrum'),
			],
		],
		'brands' => [
			[
				'id'          => 'ai-kuchen',
				'name'        => 'AI Küchen',
				'country'     => __('Duitsland', 'keuken-centrum'),
				'tagline'     => __('Häcker · modern inbouwkeuken', 'keuken-centrum'),
				'description' => __('Häcker produceert moderne inbouwkeukens die voldoen aan de hoogste eisen op het gebied van kwaliteit, functionaliteit, duurzaamheid en design.', 'keuken-centrum'),
				'image'       => kc_brand_upload('AI-KUCHEN-Hacker-keukens-utrecht0-scaled.webp') ?: $bundle('ai-kuchen'),
				'href'        => home_url('/keukens/ai-kuchen/'),
			],
			[
				'id'          => 'leicht',
				'name'        => 'Leicht',
				'country'     => __('Duitsland', 'keuken-centrum'),
				'tagline'     => __('Ruimten van hoogste individualiteit', 'keuken-centrum'),
				'description' => __('LEICHT keukens creëren ruimten van hoogste individualiteit, waarin het waarlijk een genoegen is om bij het koken en een goed gesprek veel tijd met het gezin, familie en vrienden door te brengen.', 'keuken-centrum'),
				'image'       => kc_brand_upload('CM-1697-095-final_Koje-03.webp') ?: $bundle('leicht'),
				'href'        => home_url('/keukens/leicht/'),
			],
			[
				'id'          => 'nobilia',
				'name'        => 'Nobilia',
				'country'     => __('Duitsland', 'keuken-centrum'),
				'tagline'     => __('Trendy decors & Duitse degelijkheid', 'keuken-centrum'),
				'description' => __('Met name op trendy decors, een grote variatie aan ontwerpen, een unieke en doorlopende lijnvoering en innovatieve kwaliteitsverbeteringen tot in detail.', 'keuken-centrum'),
				'image'       => kc_brand_upload('453_flash.webp') ?: $bundle('nobilia'),
				'href'        => home_url('/keukens/nobilia/'),
			],
			[
				'id'          => 'zampieri',
				'name'        => 'Zampieri',
				'country'     => __('Italië', 'keuken-centrum'),
				'tagline'     => __('Made in Italy · keukens & kasten', 'keuken-centrum'),
				'description' => __('Zelfs de kleinste details kunnen worden aangepast om aan de smaak en behoeften van elke klant te voldoen.', 'keuken-centrum'),
				'image'       => kc_brand_upload('cucina3.webp') ?: $bundle('zampieri'),
				'href'        => home_url('/keukens/zampieri/'),
			],
			[
				'id'          => 'cucinesse',
				'name'        => 'Cucinesse',
				'country'     => __('Italië', 'keuken-centrum'),
				'tagline'     => __('Modulaire keukens sinds 1979', 'keuken-centrum'),
				'description' => __('Modulaire keukens met oneindig veel oplossingen: handgrepen, werkbladen en fronts in vele vormen en afwerkingen, aangevuld met bijpassende livingmeubels op maat.', 'keuken-centrum'),
				'image'       => kc_brand_upload('cucinesse-cucina-LAB-3-3.webp') ?: $bundle('cucinesse'),
				'href'        => home_url('/keukens/cucinesse/'),
			],
		],
		'leichtNote' => __('Hoge kwaliteit wat het product en de service betreft staat op de voorgrond. LEICHT keukens creëren ruimten van hoogste individualiteit, waarin het waarlijk een genoegen is om bij het koken en een goed gesprek veel tijd met het gezin, familie en vrienden door te brengen. Leefruimten die de luxe van welbevinden scheppen en daarmee ook een belangrijke meerwaarde. Bij ons kunt u rekenen op vakbekwaam advies en een deskundig antwoord op al uw vragen.', 'keuken-centrum'),
		'valueProps' => [
			[
				'title' => __('Écht alles is mogelijk', 'keuken-centrum'),
				'body'  => __('Een uitdagende moderne designkeuken? Een robuuste industrielook? Of de nostalgische intimiteit van een landelijk klassieke keuken? Bij Keuken-Centrum Utrecht koopt u de keuken van uw dromen voor een verrassend betaalbare prijs.', 'keuken-centrum'),
			],
			[
				'title' => __('Wij verslaan elke prijs', 'keuken-centrum'),
				'body'  => __('Welke keuken u ook kiest, u wilt er niet te veel voor betalen. En waarom zou u? Wij leveren de kwaliteitskeuken van uw dromen die naadloos past bij uw portemonnee, compleet met topmerk-apparatuur, zorgeloze garantie en uitstekende service, zonder opdringerig gedoe.', 'keuken-centrum'),
			],
		],
		'customNote' => [
			__('Een keuken kan in vele verschillende stijlen worden uitgevoerd. We kennen keukens met een landelijke of klassieke uitstraling, maar ook in een moderne stijl of luxe uitvoering met kookeiland. Sommige trends zijn blijvend. Zo zien we steeds vaker een combinatie van stijlen, zoals een \'moderne, landelijke keuken\' of \'strakke, stoere keuken\'. Bij deze keukens is de grens tussen twee stijlen vervaagd.', 'keuken-centrum'),
			__('Wat uw stijl ook is, bij Keuken-Centrum hebben wij altijd de oplossing. Wij kunnen uw keuken geheel op maat maken en met onze vakkennis adviseren wij u over de combinaties en materialen die mogelijk zijn. Ook de keukenapparatuur en de plaatsing ervan is geheel afhankelijk van uw wensen, van een luxe stoomoven of wijnkoeler tot een combi-oven of extra breed gasfornuis.', 'keuken-centrum'),
		],
		'faq'       => kc_brand_shared_faq(),
		'advisors'  => kc_brand_shared_advisors(),
	];
}
