<?php
/**
 * Home testimonials section.
 *
 * @package Keuken_Centrum
 */

$testimonial_query = new WP_Query(
	[
		'post_type'      => 'testimonial',
		'posts_per_page' => 3,
		'orderby'        => 'date',
		'order'          => 'DESC',
	]
);
?>
<section class="section-shell section-shell--dark">
	<div class="site-shell">
		<div class="section-heading">
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Ervaringen', 'keuken-centrum'); ?></p>
			<h2 class="section-title section-title--light"><?php esc_html_e('Reviews van klanten die hun keukenproject met rust en vertrouwen hebben doorlopen.', 'keuken-centrum'); ?></h2>
		</div>

		<?php if ($testimonial_query->have_posts()) : ?>
			<div class="testimonial-grid">
				<?php
				while ($testimonial_query->have_posts()) :
					$testimonial_query->the_post();
					$author   = kc_get_field_value('author', get_the_ID(), get_the_title());
					$location = kc_get_field_value('location', get_the_ID(), 'Utrecht');
					$quote    = kc_get_field_value('quote', get_the_ID(), get_the_excerpt());
					$tag      = kc_get_field_value('brand_tag', get_the_ID(), '');
					?>
					<article class="testimonial-card">
						<?php if ($tag) : ?>
							<p class="testimonial-card__tag"><?php echo esc_html($tag); ?></p>
						<?php endif; ?>
						<blockquote class="testimonial-card__quote">“<?php echo esc_html($quote); ?>”</blockquote>
						<p class="testimonial-card__author"><?php echo esc_html($author); ?></p>
						<p class="testimonial-card__location"><?php echo esc_html($location); ?></p>
					</article>
				<?php endwhile; ?>
			</div>
			<?php wp_reset_postdata(); ?>
		<?php endif; ?>
	</div>
</section>
