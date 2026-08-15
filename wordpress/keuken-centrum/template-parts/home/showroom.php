<?php
/**
 * Home showroom — React PremiumShowcase parity.
 *
 * @package Keuken_Centrum
 */
$poster = kc_theme_img('showroom.jpg');
$main   = get_template_directory_uri() . '/assets/video/keuken_vid1.webm';
$stack  = [
	get_template_directory_uri() . '/assets/video/keuken_vid3.webm',
	get_template_directory_uri() . '/assets/video/keuken_vid4.webm',
	get_template_directory_uri() . '/assets/video/keuken_vid2.webm',
];
?>
<section class="premium-showcase" id="showroom">
	<div class="site-shell">
		<div class="premium-showcase-header">
			<div>
				<p class="section-eyebrow"><?php esc_html_e('Showroom Utrecht', 'keuken-centrum'); ?></p>
				<h2><?php esc_html_e('Niet kijken naar een keuken. Hem beleven.', 'keuken-centrum'); ?></h2>
			</div>
			<p><?php esc_html_e('Een plek voor inspiratie, materiaalgevoel en gesprekken zonder haast.', 'keuken-centrum'); ?></p>
		</div>

		<div class="premium-showcase-gallery">
			<figure class="premium-showcase-main">
				<video muted loop playsinline autoplay preload="metadata" poster="<?php echo esc_url($poster); ?>">
					<source src="<?php echo esc_url($main); ?>" type="video/webm">
				</video>
				<div class="premium-showcase-live" aria-hidden="true"><span></span><?php esc_html_e('Live · Utrecht', 'keuken-centrum'); ?></div>
				<div class="premium-showcase-overlay">
					<span><?php esc_html_e('Bekijk showroom', 'keuken-centrum'); ?></span>
					<a href="<?php echo esc_url(home_url('/showroom-keukens')); ?>" aria-label="<?php esc_attr_e('Bekijk de showroom', 'keuken-centrum'); ?>">↗</a>
				</div>
			</figure>
			<div class="premium-showcase-stack">
				<?php foreach ($stack as $video) : ?>
					<figure class="premium-showcase-thumb">
						<video muted loop playsinline preload="metadata" poster="<?php echo esc_url($poster); ?>">
							<source src="<?php echo esc_url($video); ?>" type="video/webm">
						</video>
					</figure>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="premium-showcase-bottom">
			<div class="premium-showcase-stats">
				<div><strong>45+</strong><span><?php esc_html_e('jaar ervaring', 'keuken-centrum'); ?></span></div>
				<div><strong>1978</strong><span><?php esc_html_e('start van ons verhaal', 'keuken-centrum'); ?></span></div>
				<div><strong>1000+</strong><span><?php esc_html_e('gerealiseerde keukens', 'keuken-centrum'); ?></span></div>
			</div>
			<div class="premium-showcase-actions">
				<a class="btn btn--primary" href="<?php echo esc_url(home_url('/contact')); ?>"><?php esc_html_e('Plan showroombezoek', 'keuken-centrum'); ?></a>
				<a class="btn btn--text" href="<?php echo esc_url(home_url('/showroom-keukens')); ?>"><?php esc_html_e('Bekijk de showroom', 'keuken-centrum'); ?> →</a>
			</div>
		</div>
	</div>
</section>
