<?php
/**
 * Appliance single template.
 *
 * @package Keuken_Centrum
 */

get_header();
?>
<main id="main-content" class="site-main">
	<?php while (have_posts()) : the_post(); ?>
		<section class="page-hero page-hero--light">
			<div class="site-shell">
				<p class="section-eyebrow"><?php esc_html_e('Apparaatcategorie', 'keuken-centrum'); ?></p>
				<h1 class="page-title"><?php the_title(); ?></h1>
				<p class="page-intro"><?php echo esc_html(get_the_excerpt()); ?></p>
			</div>
		</section>
		<section class="section-shell">
			<div class="site-shell entry-grid">
				<article class="entry-body">
					<?php the_content(); ?>
				</article>
				<aside class="entry-sidebar">
					<div class="info-card">
						<h2><?php esc_html_e('In de showroom vergelijken', 'keuken-centrum'); ?></h2>
						<p><?php esc_html_e('We laten techniek, afwerking en gebruiksgemak naast elkaar zien zodat u gericht kunt kiezen.', 'keuken-centrum'); ?></p>
						<a class="btn btn--primary" href="<?php echo esc_url(home_url('/contact')); ?>"><?php esc_html_e('Plan apparatuuradvies', 'keuken-centrum'); ?></a>
					</div>
				</aside>
			</div>
		</section>
	<?php endwhile; ?>
</main>
<?php
get_footer();
