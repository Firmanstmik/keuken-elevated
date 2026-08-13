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

$hero_args = [
	'eyebrow'             => kc_get_field_value('hero_eyebrow', $page_id, kc_get_option('hero_eyebrow_default', 'SINDS 1978 · PREMIUM SHOWROOM UTRECHT')),
	'title'               => kc_get_field_value('hero_title', $page_id, kc_get_option('hero_title_default', 'De Premium Keukenbestemming van')),
	'title_em'            => kc_get_field_value('hero_title_em', $page_id, kc_get_option('hero_title_em_default', 'Utrecht.')),
	'subtitle'            => kc_get_field_value('hero_subtitle', $page_id, kc_get_option('hero_subtitle_default', 'Ontdek een curated collectie keukens met Duitse precisie, Italiaanse elegantie en begeleiding van adviseurs die luisteren, ontwerpen en leveren.')),
	'cta_primary_label'   => kc_get_field_value('hero_cta_primary_label', $page_id, kc_get_option('hero_cta_primary_label_default', 'Plan Showroombezoek')),
	'cta_primary_url'     => kc_get_field_value('hero_cta_primary_url', $page_id, kc_get_option('hero_cta_primary_url_default', home_url('/contact'))),
	'cta_secondary_label' => kc_get_field_value('hero_cta_secondary_label', $page_id, kc_get_option('hero_cta_secondary_label_default', 'Start Configurator')),
	'cta_secondary_url'   => kc_get_field_value('hero_cta_secondary_url', $page_id, kc_get_option('hero_cta_secondary_url_default', 'https://keuken-elevated.vercel.app/brands')),
	'image_url'           => $hero_image_url,
];
?>
<main id="main-content" class="site-main">
	<?php get_template_part('template-parts/home/hero', null, $hero_args); ?>
	<?php get_template_part('template-parts/home/brands'); ?>
	<?php get_template_part('template-parts/home/why'); ?>
	<?php get_template_part('template-parts/home/journey-teaser'); ?>
	<?php get_template_part('template-parts/home/showroom'); ?>
	<?php get_template_part('template-parts/home/collections'); ?>
	<?php get_template_part('template-parts/home/process'); ?>
	<?php get_template_part('template-parts/home/testimonials'); ?>
	<?php get_template_part('template-parts/home/consultation'); ?>
	<?php get_template_part('template-parts/home/final-cta'); ?>
</main>
<?php
get_footer();
