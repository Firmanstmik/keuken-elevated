<?php
/**
 * Aanbiedingen page data (React aanbiedingen.ts).
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * @return array<string, mixed>
 */
function kc_aanbiedingen_page_data(): array {
	$phone   = (string) kc_get_option( 'contact_phone', '030 241 5122' );
	$address = (string) kc_get_option( 'contact_address', 'Zonnebaan 8' );
	$postal   = (string) kc_get_option( 'contact_postal', '3542 EC Utrecht' );

	return [
		'phone'   => $phone,
		'address' => $address,
		'postal'  => $postal,
		'meta'    => [
			'title'       => __( 'Aanbiedingen · Showroomkeukens vanaf €3.227 | Keuken-Centrum Utrecht', 'keuken-centrum' ),
			'description' => __( 'Spectaculaire aanbiedingen op complete keukens, showroommodellen en inbouwapparatuur van topmerken. Showroomkeukens vanaf €3.227, met kortingen tot 50% en inclusief apparatuur.', 'keuken-centrum' ),
		],
		'hero'    => [
			'image'     => kc_aanbiedingen_img( 'hero.webp' ),
			'eyebrow'   => __( 'Showroom aanbiedingen', 'keuken-centrum' ),
			'title'     => __( 'Showroomkeukens', 'keuken-centrum' ),
			'highlight' => __( 'vanaf €3.227,-', 'keuken-centrum' ),
			'subtitle'  => __( 'Het hele jaar door spectaculaire aanbiedingen op complete keukens, showroommodellen en inbouwapparatuur van topmerken, voor de beste prijs van Nederland.', 'keuken-centrum' ),
			'badges'    => [
				[ 'value' => '30+', 'label' => __( 'Aanbiedingen', 'keuken-centrum' ) ],
				[ 'value' => '50%', 'label' => __( 'Korting tot', 'keuken-centrum' ) ],
				[ 'value' => __( 'Direct', 'keuken-centrum' ), 'label' => __( 'Leverbaar', 'keuken-centrum' ) ],
			],
		],
		'intro'   => [
			'eyebrow'    => __( 'Kwaliteit & A-merken voor minder', 'keuken-centrum' ),
			'title'      => __( 'Topkeukens tegen een scherpe prijs', 'keuken-centrum' ),
			'paragraphs' => [
				__( 'Ben je op zoek naar een nieuwe keuken tegen een scherpe prijs? Bij Keuken-Centrum Utrecht vind je het hele jaar door spectaculaire aanbiedingen op complete keukens, showroommodellen en inbouwapparatuur van topmerken.', 'keuken-centrum' ),
				__( 'Of je nu houdt van modern, klassiek of industrieel design, wij hebben de keuken die bij jou past. Wij leveren uitsluitend keukens van hoogwaardige merken zoals Leicht, Nobilia, AI Küchen en Zampieri.', 'keuken-centrum' ),
				__( 'Daarnaast profiteer je van extra korting op inbouwapparatuur van Miele, Siemens, AEG, ATAG, Smeg en Bosch, vaak direct uit voorraad leverbaar. Zo combineer je stijl, functionaliteit en betrouwbaarheid zonder te veel te betalen.', 'keuken-centrum' ),
			],
		],
		'benefits' => [
			[
				'title' => __( 'Direct voordeel op topkeukens', 'keuken-centrum' ),
				'body'  => __( 'Spectaculaire kortingen op onze showroomkeukens. Ze zijn volledig uitgerust met A-merk apparatuur en direct leverbaar. Zo haal je jouw droomkeuken in huis voor de helft van de oorspronkelijke prijs.', 'keuken-centrum' ),
				'image' => kc_aanbiedingen_img( 'benefit-1.webp' ),
			],
			[
				'title' => __( 'Snel, compleet en betaalbaar', 'keuken-centrum' ),
				'body'  => __( 'Onze showroommodellen zijn direct beschikbaar en zorgvuldig onderhouden. Je krijgt dezelfde kwaliteit en uitstraling als een nieuwe keuken, zonder wachttijd én tegen een scherpe aanbiedingsprijs.', 'keuken-centrum' ),
				'image' => kc_aanbiedingen_img( 'benefit-2.webp' ),
			],
			[
				'title' => __( 'Persoonlijk advies bij jouw keuze', 'keuken-centrum' ),
				'body'  => __( 'Twijfel je welke showroomkeuken het beste bij jouw woning past? Onze ervaren keukenadviseurs helpen je graag met eerlijk advies, maatwerk en een offerte op maat. Dat is geheel vrijblijvend.', 'keuken-centrum' ),
				'image' => kc_aanbiedingen_img( 'benefit-3.webp' ),
			],
		],
		'hacker'  => [
			'eyebrow'    => __( 'Häcker keukens', 'keuken-centrum' ),
			'title'      => __( 'Grote voorraad,', 'keuken-centrum' ),
			'highlight'  => __( 'kortingen tot 50%', 'keuken-centrum' ),
			'image'      => kc_aanbiedingen_img( 'hacker.webp' ),
			'caption'    => __( 'Häcker showroommodellen, nu in de sale', 'keuken-centrum' ),
			'paragraphs' => [
				__( 'Bij Keuken-Centrum Utrecht vind je op dit moment veel Häcker-keukens in de sale. Deze Duitse topkeukens staan bekend om hun hoogwaardige afwerking, slimme indeling en tijdloos design.', 'keuken-centrum' ),
				__( 'Dankzij onze showroomvernieuwing bieden we nu diverse Häcker-modellen aan met kortingen tot wel 50%, compleet inclusief apparatuur. Zo haal je de kwaliteit van een Duitse designkeuken in huis voor een verrassend lage prijs.', 'keuken-centrum' ),
			],
			'stats'      => [
				[ 'value' => '50%', 'label' => __( 'Korting tot', 'keuken-centrum' ) ],
				[ 'value' => __( 'Incl.', 'keuken-centrum' ), 'label' => __( 'Apparatuur', 'keuken-centrum' ) ],
				[ 'value' => 'DE', 'label' => __( 'Duitse kwaliteit', 'keuken-centrum' ) ],
			],
		],
		'faq'     => [
			[
				'q' => __( 'Wat is een showroomkeuken precies?', 'keuken-centrum' ),
				'a' => __( 'Een showroomkeuken is een keuken die in onze winkel heeft gestaan als voorbeeldopstelling. De keuken is meestal nauwelijks gebruikt en verkeert in zo goed als nieuwe staat. Omdat wij regelmatig onze showroom vernieuwen, kun je profiteren van enorme kortingen op deze modellen.', 'keuken-centrum' ),
			],
			[
				'q' => __( 'Waarom zijn showroomkeukens zo voordelig?', 'keuken-centrum' ),
				'a' => __( 'Omdat het showmodellen zijn, bieden wij ze aan tegen sterk gereduceerde prijzen. Zo kan een keuken met een oorspronkelijke waarde van €7.475 nu al voor €3.775 inclusief apparatuur van jou zijn. Je krijgt dus dezelfde kwaliteit en merkapparatuur, maar betaalt veel minder.', 'keuken-centrum' ),
			],
			[
				'q' => __( 'Is de keukenprijs inclusief apparatuur?', 'keuken-centrum' ),
				'a' => __( 'Ja, de vermelde prijzen in onze showroom zijn inclusief inbouwapparatuur zoals oven, kookplaat, afzuigkap, koelkast of vaatwasser (afhankelijk van het model). In de productbeschrijving staat altijd duidelijk vermeld welke apparaten inbegrepen zijn.', 'keuken-centrum' ),
			],
			[
				'q' => __( 'Kan een showroomkeuken nog aangepast worden?', 'keuken-centrum' ),
				'a' => __( 'In veel gevallen wel. Kleine aanpassingen, zoals het verplaatsen van een kast, het wisselen van een werkblad of het vervangen van een apparaat, zijn vaak mogelijk. Onze keukenadviseurs bekijken graag wat er precies kan binnen jouw ruimte en wensen.', 'keuken-centrum' ),
			],
			[
				'q' => __( 'Hoe zit het met de garantie?', 'keuken-centrum' ),
				'a' => __( 'Keuken-Centrum is een CBW-erkende winkel: algemene voorwaarden die je als consument extra goed beschermen bij (aan)betalen, annulering, levertijd, vervoer en garantie. De garantieregeling via het CBW is twee jaar. Aanvullend biedt Keuken-Centrum kosteloos tien jaar productgarantie op keukenmeubelen en werkbladen. De beste prijs én de beste garantie!', 'keuken-centrum' ),
			],
			[
				'q' => __( 'Wordt de keuken ook geleverd en gemonteerd?', 'keuken-centrum' ),
				'a' => __( 'Ja. Wij bieden professionele levering en montage door ervaren vakmensen. Zo weet je zeker dat de keuken perfect wordt geplaatst, inclusief aansluiting van apparatuur en afwerking tot in de details.', 'keuken-centrum' ),
			],
			[
				'q' => __( 'Zijn showroomkeukens nog steeds van A-merk kwaliteit?', 'keuken-centrum' ),
				'a' => __( 'Absoluut. Al onze showroomkeukens zijn afkomstig van A-merken zoals Leicht, Nobilia, AI Küchen en Zampieri. Je krijgt dezelfde hoogwaardige materialen, scharnieren en apparatuur als bij een nieuwe keuken, voor een veel lagere prijs.', 'keuken-centrum' ),
			],
		],
		'advisors' => [
			[
				'name'  => 'Hans',
				'role'  => __( 'Keukens', 'keuken-centrum' ),
				'email' => 'hans@keuken-centrum.nl',
				'bio'   => __( 'Mijn kracht is om al luisterend en adviserend samen met de klant tot een keukenkeuze te komen die recht doet aan de woonwensen. Ik hoop van harte u te begroeten in onze showroom in Utrecht.', 'keuken-centrum' ),
			],
			[
				'name'  => 'Danny',
				'role'  => __( 'Keukens', 'keuken-centrum' ),
				'email' => 'danny@keuken-centrum.nl',
				'bio'   => __( 'Mijn kracht is om samen met u de woonwensen zo concreet en helder mogelijk te maken en daar de keuken op aan te passen. Samen komen we tot het gewenste resultaat, zodat ú nog jaren kunt genieten van uw keuken.', 'keuken-centrum' ),
			],
			[
				'name'  => 'Frank',
				'role'  => __( 'Apparatuur', 'keuken-centrum' ),
				'email' => 'frank@keuken-centrum.nl',
				'bio'   => __( 'Ik ben een vakidioot, liefhebber van A-merken apparatuur. Ik vind het leuk om anderen te laten zien wat er allemaal mogelijk is met de nieuwste gadgets op de markt. Kom langs en laat mij je inspireren.', 'keuken-centrum' ),
			],
		],
		'brands'  => function_exists( 'kc_apparatuur_brands' ) ? kc_apparatuur_brands() : [],
		'cta'     => [
			'title'     => __( 'Kom langs', 'keuken-centrum' ),
			'highlight' => __( 'of bel direct', 'keuken-centrum' ),
			'body'      => __( 'Onze keukenadviseurs staan klaar met persoonlijk advies en een vrijblijvende offerte. Want bij Keuken-Centrum Utrecht geldt: “Wie slim kiest, koopt zijn keuken in de aanbieding!”', 'keuken-centrum' ),
		],
	];
}
