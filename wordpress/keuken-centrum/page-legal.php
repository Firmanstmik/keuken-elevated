<?php
/**
 * Template Name: Legal page
 * Legal page template (privacy / cookies / terms).
 *
 * @package Keuken_Centrum
 */

get_header();
?>
<main id="main-content" class="site-main site-main--legal">
	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			the_post();
			?>
			<section class="page-hero page-hero--light page-hero--legal">
				<div class="site-shell">
					<p class="section-eyebrow"><?php esc_html_e( 'Keuken-Centrum Utrecht', 'keuken-centrum' ); ?></p>
					<h1 class="page-title"><?php the_title(); ?></h1>
				</div>
			</section>
			<section class="legal-content">
				<div class="site-shell entry-body">
					<?php the_content(); ?>
				</div>
			</section>
		<?php endwhile; ?>
	<?php endif; ?>
</main>
<?php
get_footer();
