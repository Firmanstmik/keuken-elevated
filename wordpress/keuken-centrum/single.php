<?php
/**
 * Default single template.
 *
 * @package Keuken_Centrum
 */

get_header();
?>
<main id="main-content" class="site-main">
	<?php if (have_posts()) : ?>
		<?php while (have_posts()) : the_post(); ?>
			<section class="page-hero">
				<div class="site-shell">
					<p class="section-eyebrow section-eyebrow--gold"><?php echo esc_html(get_the_date()); ?></p>
					<h1 class="page-title page-title--light"><?php the_title(); ?></h1>
				</div>
			</section>
			<section class="section-shell">
				<div class="site-shell entry-body">
					<?php the_content(); ?>
				</div>
			</section>
		<?php endwhile; ?>
	<?php endif; ?>
</main>
<?php
get_footer();
