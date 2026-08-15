<?php
/**
 * Home showroom — React PremiumShowcase parity.
 *
 * @package Keuken_Centrum
 */
$videos = ['keuken_vid1.webm', 'keuken_vid2.webm', 'keuken_vid3.webm', 'keuken_vid4.webm'];
$poster = kc_theme_img('showroom.jpg');
?>
<section class="premium-showcase" id="showroom">
	<div class="site-shell">
		<div class="premium-showcase-header"><div><p class="section-eyebrow"><?php esc_html_e('Showroom Utrecht', 'keuken-centrum'); ?></p><h2><?php esc_html_e('Niet kijken naar een keuken. Hem beleven.', 'keuken-centrum'); ?></h2></div><p><?php esc_html_e('Een plek voor inspiratie, materiaalgevoel en gesprekken zonder haast.', 'keuken-centrum'); ?></p></div>
		<div class="premium-showcase-grid">
			<?php foreach ($videos as $index => $video) : ?><figure class="premium-showcase-media premium-showcase-media--<?php echo esc_attr((string) ($index + 1)); ?>"><video muted loop playsinline preload="metadata" poster="<?php echo esc_url($poster); ?>"<?php echo 0 === $index ? ' autoplay' : ''; ?>><source src="<?php echo esc_url(get_template_directory_uri() . '/assets/video/' . $video); ?>" type="video/webm"></video></figure><?php endforeach; ?>
			<div class="premium-showcase-overlay"><span><?php esc_html_e('Keuken-Centrum Utrecht', 'keuken-centrum'); ?></span><a href="<?php echo esc_url(home_url('/showroom-keukens')); ?>">↗</a></div>
		</div>
		<div class="premium-showcase-bottom">
			<div class="premium-showcase-stats"><div><strong>45+</strong><span><?php esc_html_e('jaar ervaring', 'keuken-centrum'); ?></span></div><div><strong>1978</strong><span><?php esc_html_e('start van ons verhaal', 'keuken-centrum'); ?></span></div><div><strong>1000+</strong><span><?php esc_html_e('gerealiseerde keukens', 'keuken-centrum'); ?></span></div></div>
			<div class="premium-showcase-actions"><a class="btn btn--primary" href="<?php echo esc_url(home_url('/contact')); ?>"><?php esc_html_e('Plan showroombezoek', 'keuken-centrum'); ?></a><a class="btn btn--text" href="<?php echo esc_url(home_url('/showroom-keukens')); ?>"><?php esc_html_e('Bekijk de showroom', 'keuken-centrum'); ?> →</a></div>
		</div>
	</div>
</section>
