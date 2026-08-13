<?php
/**
 * Fallback index template.
 *
 * @package Keuken_Centrum
 */

get_header();
?>
<main id="main-content" class="site-main">
	<section class="page-hero page-hero--light">
		<div class="site-shell">
			<p class="section-eyebrow"><?php esc_html_e('Nieuws & inspiratie', 'keuken-centrum'); ?></p>
			<h1 class="page-title"><?php bloginfo('name'); ?></h1>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-shell card-grid">
			<?php if (have_posts()) : ?>
				<?php while (have_posts()) : the_post(); ?>
					<article class="resource-card">
						<p class="resource-card__meta"><?php echo esc_html(get_the_date()); ?></p>
						<h2 class="resource-card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<p><?php echo esc_html(get_the_excerpt()); ?></p>
						<a class="resource-card__link" href="<?php the_permalink(); ?>"><?php esc_html_e('Lees verder', 'keuken-centrum'); ?></a>
					</article>
				<?php endwhile; ?>
			<?php else : ?>
				<p><?php esc_html_e('Er zijn nog geen berichten beschikbaar.', 'keuken-centrum'); ?></p>
			<?php endif; ?>
		</div>
	</section>
</main>
<?php
get_footer();
