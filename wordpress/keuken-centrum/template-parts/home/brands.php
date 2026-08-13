<?php
/**
 * Home brands section — media-led cards.
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

$dark_bg = kc_theme_img('brands/brands-dark-bg.webp');
?>
<section class="section-shell section-shell--brands" id="brands"<?php echo $dark_bg ? ' style="--kc-brands-bg:url(' . esc_url($dark_bg) . ')"' : ''; ?>>
	<div class="site-shell">
		<div class="section-heading section-heading--light" data-reveal>
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Onze merken', 'keuken-centrum'); ?></p>
			<h2 class="section-title section-title--light"><?php esc_html_e('Duitse precisie en Italiaanse elegantie, zorgvuldig gecureerd voor Utrecht.', 'keuken-centrum'); ?></h2>
		</div>

		<?php if ($brand_query->have_posts()) : ?>
			<div class="brand-grid">
				<?php
				while ($brand_query->have_posts()) :
					$brand_query->the_post();
					$slug    = get_post_field('post_name', get_the_ID());
					$bundle  = kc_brand_bundle((string) $slug);
					$country = kc_get_field_value('country', get_the_ID(), '');
					$story   = kc_get_field_value('short_story', get_the_ID(), get_the_excerpt());
					$hero    = get_the_post_thumbnail_url(get_the_ID(), 'large');
					if (! $hero) {
						$hero = $bundle['hero'];
					}
					?>
					<article class="brand-card" data-reveal>
						<a class="brand-card__media" href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true">
							<?php if ($hero) : ?>
								<img src="<?php echo esc_url($hero); ?>" alt="" loading="lazy" width="640" height="420">
							<?php endif; ?>
						</a>
						<div class="brand-card__body">
							<?php if ($bundle['logo']) : ?>
								<img class="brand-card__logo" src="<?php echo esc_url($bundle['logo']); ?>" alt="" loading="lazy" width="120" height="40">
							<?php endif; ?>
							<p class="brand-card__country"><?php echo esc_html($country); ?></p>
							<h3 class="brand-card__title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
							<p class="brand-card__story"><?php echo esc_html($story); ?></p>
							<a class="brand-card__link" href="<?php the_permalink(); ?>"><?php esc_html_e('Meer over dit merk', 'keuken-centrum'); ?></a>
						</div>
					</article>
				<?php endwhile; ?>
			</div>
			<?php wp_reset_postdata(); ?>
		<?php endif; ?>
	</div>
</section>
