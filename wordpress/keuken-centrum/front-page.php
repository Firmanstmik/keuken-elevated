<?php
/**
 * Front page template.
 *
 * @package Keuken_Centrum
 */

get_header();

$page_id        = get_the_ID();
$hero_image     = kc_get_field_value('hero_image', $page_id, []);
$hero_image_url = '';

if (is_array($hero_image) && ! empty($hero_image['url'])) {
	$hero_image_url = (string) $hero_image['url'];
} elseif (has_post_thumbnail($page_id)) {
	$hero_image_url = (string) get_the_post_thumbnail_url($page_id, 'full');
}

$default_subtitle = 'Ontdek Duitse precisie en Italiaanse elegantie onder één dak. Persoonlijk showroomadvies, premium apparatuur en een doordachte configurator voor uw eerste ontwerpkeuze.';
$subtitle         = (string) kc_get_field_value('hero_subtitle', $page_id, '');
if ('' === $subtitle || str_contains($subtitle, 'curated collectie')) {
	$subtitle = $default_subtitle;
}

$hero_args = [
	'eyebrow'             => str_replace(
		'·',
		'•',
		(string) kc_get_field_value('hero_eyebrow', $page_id, kc_get_option('hero_eyebrow_default', 'SINDS 1978 • PREMIUM SHOWROOM UTRECHT'))
	),
	'title_line_1'        => 'De Premium',
	'title_line_2'        => 'Keukenbestemming',
	'title_line_3_prefix' => 'van',
	'title_em'            => kc_get_field_value('hero_title_em', $page_id, kc_get_option('hero_title_em_default', 'Utrecht.')),
	'subtitle'            => $subtitle,
	'cta_primary_label'   => kc_get_field_value('hero_cta_primary_label', $page_id, kc_get_option('hero_cta_primary_label_default', 'Plan Showroombezoek')),
	'cta_primary_url'     => ( static function ( $page_id ) {
		$raw = (string) kc_get_field_value( 'hero_cta_primary_url', $page_id, kc_get_option( 'hero_cta_primary_url_default', home_url( '/consultation/' ) ) );
		$path = (string) wp_parse_url( $raw, PHP_URL_PATH );
		if ( '/contact' === untrailingslashit( $path ) || '' === trim( $raw ) ) {
			return home_url( '/consultation/' );
		}
		return $raw;
	} )( $page_id ),
	'cta_secondary_label' => kc_get_field_value('hero_cta_secondary_label', $page_id, 'Start configurator'),
	'cta_secondary_url'   => function_exists( 'kc_cms_normalize_configurator_cta_url' )
		? kc_cms_normalize_configurator_cta_url( (string) kc_get_field_value( 'hero_cta_secondary_url', $page_id, '' ) )
		: home_url( '/brands/' ),
	'image_url'           => $hero_image_url,
	'slides'              => kc_default_hero_slides(),
];
?>
<main id="main-content" class="site-main">
	<?php get_template_part('template-parts/home/hero', null, $hero_args); ?>
	<?php get_template_part('template-parts/home/brands'); ?>
	<?php get_template_part('template-parts/home/why'); ?>
	<?php get_template_part('template-parts/home/journey-teaser'); ?>
	<?php get_template_part('template-parts/home/showroom'); ?>
	<?php get_template_part('template-parts/home/experience'); ?>
	<?php get_template_part('template-parts/home/collections'); ?>
	<?php get_template_part('template-parts/home/process'); ?>
	<?php get_template_part('template-parts/home/final-cta'); ?>
	<?php get_template_part('template-parts/home/testimonials'); ?>
	<?php get_template_part('template-parts/home/consultation'); ?>
</main>
<?php
get_footer();
