<?php
/**
 * Home showroom — React PremiumShowcase visual twin.
 *
 * @package Keuken_Centrum
 */

$poster       = ( function_exists( 'kc_official_asset' ) ? kc_official_asset( 'showroom-island' ) : '' ) ?: kc_theme_img('showroom-elegant-samenspel.jpg') ?: kc_theme_img('showroom.jpg');
$concrete     = kc_theme_img('mat-concrete.jpg');
$showroom_url = home_url('/showroom-keukens/');
$showcase     = function_exists( 'kc_home_showcase_data' ) ? kc_home_showcase_data() : null;
$brands_url   = $showcase['cta_secondary_url'] ?? home_url('/brands/');
$visit_url    = $showcase['cta_url'] ?? home_url('/consultation/');
$main         = kc_asset( 'assets/video/nobilia-showroom.webm' ) ?: get_template_directory_uri() . '/assets/video/keuken_vid1.webm';
$stack        = [
	get_template_directory_uri() . '/assets/video/keuken_vid3.webm',
	get_template_directory_uri() . '/assets/video/keuken_vid4.webm',
	get_template_directory_uri() . '/assets/video/keuken_vid2.webm',
];
$highlights   = $showcase['highlights'] ?? [
	__('A-merken inbouwapparatuur', 'keuken-centrum'),
	__('werkbladen', 'keuken-centrum'),
	__('keukenkranen', 'keuken-centrum'),
	__('keukenaccessoires', 'keuken-centrum'),
];
$stats        = $showcase['stats'] ?? [
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
$showcase_eyebrow = $showcase['eyebrow'] ?? 'Sinds 1978 · Utrecht Showroom';
$showcase_title_1 = $showcase['title_1'] ?? 'Keuken-Centrum';
$showcase_title_2 = $showcase['title_2'] ?? 'Utrecht';
$showcase_copy = $showcase['copy'] ?? 'De talloze keukenopstellingen in onze showroom geven u genoeg inspiratie. Doordat we met meerdere keukenfabrikanten werken, bieden we een groot en breed assortiment aan. Zo is er voor elk budget een droomkeuken.';
$showcase_copy_secondary = $showcase['copy_secondary'] ?? 'tot verlichting: alles wat met keukens te maken heeft, is bij ons verkrijgbaar.';
$showcase_cta_label = $showcase['cta_label'] ?? 'Plan showroombezoek';
$showcase_cta_secondary_label = $showcase['cta_secondary_label'] ?? 'Bekijk merken';
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
							<span class="premium-showcase__overlay-icon" aria-hidden="true"><?php echo kc_icon_arrow_right(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
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
									<span class="premium-showcase__thumb-overlay-icon" aria-hidden="true"><?php echo kc_icon_arrow_right(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
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

			<?php /* Outer col carries React lg:pl-2 / xl:pl-4; inner is what the audit measures. */ ?>
			<div class="premium-showcase__content-col" data-reveal>
				<div class="premium-showcase__content">
					<div class="section-label-row premium-showcase__label-row">
						<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
						<p class="section-eyebrow section-eyebrow--gold"><?php echo esc_html( $showcase_eyebrow ); ?></p>
					</div>

					<h2 class="premium-showcase__title">
						<span><?php echo esc_html( $showcase_title_1 ); ?></span>
						<em><?php echo esc_html( $showcase_title_2 ); ?></em>
					</h2>

					<p class="premium-showcase__copy">
						<?php echo esc_html( $showcase_copy ); ?>
					</p>

					<p class="premium-showcase__copy premium-showcase__copy--secondary">
						<?php esc_html_e('Van', 'keuken-centrum'); ?>
						<?php foreach ($highlights as $index => $item) : ?>
							<span class="premium-showcase__highlight"><?php echo esc_html($item); ?></span><?php echo $index < count($highlights) - 1 ? ', ' : ' '; ?>
						<?php endforeach; ?>
						<?php echo esc_html( $showcase_copy_secondary ); ?>
					</p>

					<div class="premium-showcase__actions">
						<a class="premium-pill-button premium-pill-button--blue premium-pill-button--rounded premium-pill-button--lg" href="<?php echo esc_url($visit_url); ?>">
							<span class="premium-pill-button__label"><?php echo esc_html( $showcase_cta_label ); ?></span>
							<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
						</a>

						<a class="premium-showcase__text-link" href="<?php echo esc_url($brands_url); ?>">
							<span><?php echo esc_html( $showcase_cta_secondary_label ); ?></span>
							<span class="premium-showcase__text-link-icon" aria-hidden="true"><?php echo kc_icon_arrow_right(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
