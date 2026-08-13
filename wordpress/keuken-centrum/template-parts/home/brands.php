<?php
/**
 * Home brands section.
 *
 * @package Keuken_Centrum
 */

$brand_query = new WP_Query(
	[
		'post_type'      => 'kitchen_brand',
		'posts_per_page' => 6,
		'order'          => 'ASC',
		'orderby'        => 'menu_order title',
	]
);
?>
<section class="section-shell section-shell--ivory">
	<div class="site-shell">
		<div class="section-heading">
			<p class="section-eyebrow"><?php esc_html_e('Onze merken', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Duitse precisie en Italiaanse elegantie, zorgvuldig gecureerd voor Utrecht.', 'keuken-centrum'); ?></h2>
		</div>

		<?php if ($brand_query->have_posts()) : ?>
			<div class="brand-grid">
				<?php
				while ($brand_query->have_posts()) :
					$brand_query->the_post();
					$country = kc_get_field_value('country', get_the_ID(), '');
					$story   = kc_get_field_value('short_story', get_the_ID(), get_the_excerpt());
					?>
					<article class="brand-card">
						<p class="brand-card__country"><?php echo esc_html($country); ?></p>
						<h3 class="brand-card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
						<p class="brand-card__story"><?php echo esc_html($story); ?></p>
						<a class="brand-card__link" href="<?php the_permalink(); ?>"><?php esc_html_e('Meer over dit merk', 'keuken-centrum'); ?></a>
					</article>
				<?php endwhile; ?>
			</div>
			<?php wp_reset_postdata(); ?>
		<?php endif; ?>
	</div>
</section>
