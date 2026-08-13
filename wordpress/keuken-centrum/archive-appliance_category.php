<?php
/**
 * Appliance archive template.
 *
 * @package Keuken_Centrum
 */

get_header();
?>
<main id="main-content" class="site-main">
	<section class="page-hero">
		<div class="site-shell">
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Apparatuur', 'keuken-centrum'); ?></p>
			<h1 class="page-title page-title--light"><?php post_type_archive_title(); ?></h1>
			<p class="page-intro page-intro--light"><?php esc_html_e('Kies apparatuur die design, kookplezier en dagelijkse prestaties op hoog niveau samenbrengt.', 'keuken-centrum'); ?></p>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-shell card-grid">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<article class="resource-card">
						<h2 class="resource-card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<p><?php echo esc_html(get_the_excerpt()); ?></p>
						<a class="resource-card__link" href="<?php the_permalink(); ?>"><?php esc_html_e('Bekijk categorie', 'keuken-centrum'); ?></a>
					</article>
				<?php endwhile; ?>
			<?php endif; ?>
		</div>
	</section>
</main>
<?php
get_footer();
