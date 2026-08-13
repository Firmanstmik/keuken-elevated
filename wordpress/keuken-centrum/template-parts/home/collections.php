<?php
/**
 * Home collections section.
 *
 * @package Keuken_Centrum
 */

$worktops = get_posts(
	[
		'post_type'      => 'worktop',
		'posts_per_page' => 4,
		'orderby'        => 'title',
		'order'          => 'ASC',
	]
);

$appliances = get_posts(
	[
		'post_type'      => 'appliance_category',
		'posts_per_page' => 6,
		'orderby'        => 'title',
		'order'          => 'ASC',
	]
);
?>
<section class="section-shell section-shell--ivory">
	<div class="site-shell">
		<div class="section-heading">
			<p class="section-eyebrow"><?php esc_html_e('Collecties', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Werkbladen en apparatuur die het totaalbeeld verfijnen.', 'keuken-centrum'); ?></h2>
		</div>

		<div class="collection-grid">
			<article class="collection-card">
				<h3 class="collection-card__title"><?php esc_html_e('Keukenbladen', 'keuken-centrum'); ?></h3>
				<ul class="collection-card__list">
					<?php foreach ($worktops as $worktop) : ?>
						<li><a href="<?php echo esc_url(get_permalink($worktop)); ?>"><?php echo esc_html(get_the_title($worktop)); ?></a></li>
					<?php endforeach; ?>
				</ul>
				<a class="collection-card__link" href="<?php echo esc_url(get_post_type_archive_link('worktop') ?: home_url('/keukenbladen')); ?>">
					<?php esc_html_e('Alle keukenbladen', 'keuken-centrum'); ?>
				</a>
			</article>

			<article class="collection-card">
				<h3 class="collection-card__title"><?php esc_html_e('Apparatuur', 'keuken-centrum'); ?></h3>
				<ul class="collection-card__list">
					<?php foreach ($appliances as $appliance) : ?>
						<li><a href="<?php echo esc_url(get_permalink($appliance)); ?>"><?php echo esc_html(get_the_title($appliance)); ?></a></li>
					<?php endforeach; ?>
				</ul>
				<a class="collection-card__link" href="<?php echo esc_url(get_post_type_archive_link('appliance_category') ?: home_url('/apparatuur')); ?>">
					<?php esc_html_e('Bekijk apparatuur', 'keuken-centrum'); ?>
				</a>
			</article>
		</div>
	</div>
</section>
