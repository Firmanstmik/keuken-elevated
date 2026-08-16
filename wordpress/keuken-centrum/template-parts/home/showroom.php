<?php
/**
 * Home showroom — React PremiumShowcase visual twin.
 *
 * @package Keuken_Centrum
 */

$poster       = kc_theme_img('showroom.jpg');
$concrete     = kc_theme_img('mat-concrete.jpg');
$showroom_url = home_url('/showroom-keukens/');
$brands_url   = home_url('/#brands');
$visit_url    = home_url('/contact/');
$main         = get_template_directory_uri() . '/assets/video/keuken_vid1.webm';
$stack        = [
	get_template_directory_uri() . '/assets/video/keuken_vid3.webm',
	get_template_directory_uri() . '/assets/video/keuken_vid4.webm',
	get_template_directory_uri() . '/assets/video/keuken_vid2.webm',
];
$highlights   = [
	__('A-merken inbouwapparatuur', 'keuken-centrum'),
	__('werkbladen', 'keuken-centrum'),
	__('keukenkranen', 'keuken-centrum'),
	__('keukenaccessoires', 'keuken-centrum'),
];
$stats        = [
	[
		'number' => '45+',
		'label'  => __('Jaar ervaring', 'keuken-centrum'),
		'sub'    => __('Premium vakmanschap', 'keuken-centrum'),
	],
	[
		'number' => '1978',
		'label'  => __('Opgericht', 'keuken-centrum'),
		'sub'    => __('Showroom Utrecht', 'keuken-centrum'),
	],
	[
		'number' => '1000+',
		'label'  => __('Combinaties', 'keuken-centrum'),
		'sub'    => __('Materiaal & afwerking', 'keuken-centrum'),
	],
];
?>
<section class="section-shell premium-showcase premium-showcase--react" id="showroom">
	<?php if ($concrete) : ?>
		<div class="premium-showcase__texture" style="background-image:url('<?php echo esc_url($concrete); ?>');" aria-hidden="true"></div>
	<?php endif; ?>
	<div class="premium-showcase__veil" aria-hidden="true"></div>
	<div class="premium-showcase__ambient" aria-hidden="true"></div>

	<div class="site-shell premium-showcase__shell">
		<?php kc_section_chapter('05', __('Showroom', 'keuken-centrum')); ?>

		<div class="premium-showcase__grid">
			<div class="premium-showcase__gallery-col" data-reveal>
				<div class="premium-showcase__gallery-frame">
					<div class="premium-showcase__main">
						<video muted loop playsinline autoplay preload="metadata" poster="<?php echo esc_url($poster); ?>">
							<source src="<?php echo esc_url($main); ?>" type="video/webm">
						</video>

						<div class="premium-showcase__live" aria-hidden="true">
							<span class="premium-showcase__live-dot"></span>
							<span><?php esc_html_e('Live · Utrecht', 'keuken-centrum'); ?></span>
						</div>

						<a class="premium-showcase__overlay" href="<?php echo esc_url($showroom_url); ?>">
							<span><?php esc_html_e('Bekijk showroom', 'keuken-centrum'); ?></span>
							<span class="premium-showcase__overlay-icon" aria-hidden="true">→</span>
						</a>
					</div>

					<div class="premium-showcase__stack">
						<?php foreach ($stack as $video) : ?>
							<a class="premium-showcase__thumb" href="<?php echo esc_url($showroom_url); ?>" aria-label="<?php esc_attr_e('Bekijk showroomvideo', 'keuken-centrum'); ?>">
								<video muted loop playsinline autoplay preload="metadata" poster="<?php echo esc_url($poster); ?>">
									<source src="<?php echo esc_url($video); ?>" type="video/webm">
								</video>
								<span class="premium-showcase__thumb-overlay">
									<span><?php esc_html_e('Bekijk', 'keuken-centrum'); ?></span>
									<span aria-hidden="true">→</span>
								</span>
							</a>
						<?php endforeach; ?>
					</div>
				</div>

				<div class="premium-showcase__stats" data-reveal>
					<?php foreach ($stats as $stat) : ?>
						<div class="premium-showcase__stat">
							<p class="premium-showcase__stat-number"><?php echo esc_html($stat['number']); ?></p>
							<p class="premium-showcase__stat-label"><?php echo esc_html($stat['label']); ?></p>
							<p class="premium-showcase__stat-sub"><?php echo esc_html($stat['sub']); ?></p>
						</div>
					<?php endforeach; ?>
				</div>
			</div>

			<div class="premium-showcase__content" data-reveal>
				<div class="section-label-row premium-showcase__label-row">
					<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
					<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Sinds 1978 · Utrecht Showroom', 'keuken-centrum'); ?></p>
				</div>

				<h2 class="premium-showcase__title">
					<span><?php esc_html_e('Keuken-Centrum', 'keuken-centrum'); ?></span>
					<em><?php esc_html_e('Utrecht', 'keuken-centrum'); ?></em>
				</h2>

				<p class="premium-showcase__copy">
					<?php esc_html_e('De talloze keukenopstellingen in onze showroom geven u genoeg inspiratie. Doordat we met meerdere keukenfabrikanten werken, bieden we een groot en breed assortiment aan. Zo is er voor elk budget een droomkeuken.', 'keuken-centrum'); ?>
				</p>

				<p class="premium-showcase__copy premium-showcase__copy--secondary">
					<?php esc_html_e('Van', 'keuken-centrum'); ?>
					<?php foreach ($highlights as $index => $item) : ?>
						<span class="premium-showcase__highlight"><?php echo esc_html($item); ?></span><?php echo $index < count($highlights) - 1 ? ', ' : ' '; ?>
					<?php endforeach; ?>
					<?php esc_html_e('tot verlichting: alles wat met keukens te maken heeft, is bij ons verkrijgbaar.', 'keuken-centrum'); ?>
				</p>

				<div class="premium-showcase__actions">
					<a class="premium-pill-button premium-pill-button--blue premium-pill-button--rounded premium-pill-button--xl" href="<?php echo esc_url($visit_url); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Plan showroombezoek', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><span class="premium-pill-button__icon">→</span></span>
					</a>

					<a class="premium-showcase__text-link" href="<?php echo esc_url($brands_url); ?>">
						<span><?php esc_html_e('Bekijk merken', 'keuken-centrum'); ?></span>
						<span aria-hidden="true">→</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
