<?php
/**
 * Kitchen brand archive.
 *
 * @package Keuken_Centrum
 */

get_header();
?>
<main id="main-content" class="site-main">
	<section class="page-hero">
		<div class="site-shell">
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Keukenmerken', 'keuken-centrum'); ?></p>
			<h1 class="page-title page-title--light"><?php post_type_archive_title(); ?></h1>
			<p class="page-intro page-intro--light"><?php esc_html_e('Ontdek een collectie keukenmerken waarin functionaliteit, materiaalbeleving en premium afwerking perfect samenkomen.', 'keuken-centrum'); ?></p>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-shell brand-grid">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<article class="brand-card">
						<p class="brand-card__country"><?php echo esc_html(kc_get_field_value('country', get_the_ID(), 'Premium collectie')); ?></p>
						<h2 class="brand-card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<p class="brand-card__story"><?php echo esc_html(kc_get_field_value('short_story', get_the_ID(), get_the_excerpt())); ?></p>
						<a class="brand-card__link" href="<?php the_permalink(); ?>"><?php esc_html_e('Bekijk merk', 'keuken-centrum'); ?></a>
					</article>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</section>
</main>
<?php
get_footer();
