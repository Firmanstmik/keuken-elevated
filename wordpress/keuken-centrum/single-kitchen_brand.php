<?php
/**
 * Kitchen brand single template.
 *
 * @package Keuken_Centrum
 */

get_header();

while (have_posts()) :
	the_post();

	$country   = kc_get_field_value('country', get_the_ID(), 'Premium collectie');
	$story     = kc_get_field_value('short_story', get_the_ID(), get_the_excerpt());
	$cta_label = kc_get_field_value('cta_label', get_the_ID(), 'Plan adviesgesprek');
	$hero      = kc_get_field_value('hero_image', get_the_ID(), []);
	$hero_url  = is_array($hero) && ! empty($hero['url']) ? $hero['url'] : get_the_post_thumbnail_url(get_the_ID(), 'full');
	?>
	<main id="main-content" class="site-main">
		<section class="page-hero" <?php echo $hero_url ? 'style="' . esc_attr('background-image:url(' . esc_url_raw($hero_url) . ');') . '"' : ''; ?>>
			<div class="page-hero__overlay"></div>
			<div class="site-shell page-hero__content">
				<p class="section-eyebrow section-eyebrow--gold"><?php echo esc_html($country); ?></p>
				<h1 class="page-title page-title--light"><?php the_title(); ?></h1>
				<p class="page-intro page-intro--light"><?php echo esc_html($story); ?></p>
				<a class="btn btn--primary" href="<?php echo esc_url(home_url('/contact')); ?>"><?php echo esc_html($cta_label); ?></a>
			</div>
		</section>

		<section class="section-shell">
			<div class="site-shell entry-grid">
				<article class="entry-body">
					<?php the_content(); ?>
				</article>
				<aside class="entry-sidebar">
					<div class="info-card">
						<h2><?php esc_html_e('Merkprofiel', 'keuken-centrum'); ?></h2>
						<p><strong><?php esc_html_e('Herkomst', 'keuken-centrum'); ?></strong><br><?php echo esc_html($country); ?></p>
						<p><strong><?php esc_html_e('Waarom dit merk', 'keuken-centrum'); ?></strong><br><?php echo esc_html($story); ?></p>
						<p><a class="btn btn--ghost" href="<?php echo esc_url(get_post_type_archive_link('worktop') ?: home_url('/keukenbladen')); ?>"><?php esc_html_e('Combineer met werkbladen', 'keuken-centrum'); ?></a></p>
					</div>
				</aside>
			</div>
		</section>
	</main>
<?php endwhile; ?>
<?php
get_footer();
