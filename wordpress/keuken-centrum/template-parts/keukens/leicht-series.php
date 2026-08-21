<?php
/**
 * Leicht series page (React LeichtSeriesPage.tsx parity).
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

$slug = '';
if (isset($args) && is_array($args) && ! empty($args['slug'])) {
	$slug = (string) $args['slug'];
} elseif (! empty($kc_leicht_series_slug)) {
	$slug = (string) $kc_leicht_series_slug;
}

$series = function_exists('kc_leicht_series_data') ? kc_leicht_series_data($slug) : null;
if (! $series) {
	return;
}

$related = kc_leicht_series_related((string) $series['id']);
$name    = (string) $series['name'];
?>
<div class="brand-page brand-page--leicht-series brand-page--series-<?php echo esc_attr((string) $series['id']); ?>">
	<section class="brand-page-hero brand-page-hero--series" data-series-hero>
		<div class="brand-page-hero__media" aria-hidden="true">
			<img
				src="<?php echo esc_url((string) $series['heroImage']); ?>"
				alt="<?php echo esc_attr($name); ?>"
				width="1920"
				height="1080"
				decoding="async"
				fetchpriority="high"
			>
			<div class="brand-page-hero__gradient brand-page-hero__gradient--series"></div>
		</div>
		<div class="brand-page-hero__fade brand-page-hero__fade--series" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container brand-page-hero__content--series">
			<div class="brand-page-hero__inner brand-page-hero__inner--series" data-reveal data-reveal-hero>
				<nav class="brand-series-breadcrumb" aria-label="<?php esc_attr_e('Breadcrumb', 'keuken-centrum'); ?>">
					<a href="<?php echo esc_url(home_url('/keukens/')); ?>"><?php esc_html_e('Keukens', 'keuken-centrum'); ?></a>
					<span aria-hidden="true">/</span>
					<a href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>">Leicht</a>
					<span aria-hidden="true">/</span>
					<span class="brand-series-breadcrumb__current"><?php echo esc_html($name); ?></span>
				</nav>
				<?php kc_brand_eyebrow(__('Leicht serie', 'keuken-centrum'), true); ?>
				<h1 class="brand-page-hero__title brand-page-hero__title--series"><?php echo esc_html($name); ?></h1>
				<p class="brand-page-hero__lede brand-page-hero__lede--series"><?php echo esc_html((string) $series['tagline']); ?></p>
				<div class="brand-page-hero__actions">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url(home_url('/consultation/')); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Plan showroombezoek', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Alle Leicht series', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container brand-series-intro">
			<div data-reveal>
				<?php kc_brand_eyebrow(__('Over deze serie', 'keuken-centrum')); ?>
				<h2 class="keukens-section-title keukens-section-title--series">
					<?php esc_html_e('Live in onze', 'keuken-centrum'); ?>
					<em><?php esc_html_e('Utrecht', 'keuken-centrum'); ?></em>
					<?php esc_html_e('showroom', 'keuken-centrum'); ?>
				</h2>
			</div>
			<div data-reveal>
				<?php foreach ($series['description'] as $paragraph) : ?>
					<p class="keukens-body-copy"><?php echo esc_html((string) $paragraph); ?></p>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell section-shell--border-top">
		<div class="site-container">
			<div class="brand-series-gallery-head" data-reveal>
				<?php kc_brand_eyebrow(__('Inspiratie', 'keuken-centrum')); ?>
				<h2 class="keukens-section-title keukens-section-title--series">
					<?php echo esc_html($name); ?>
					<em><?php esc_html_e('in beeld', 'keuken-centrum'); ?></em>
				</h2>
			</div>
			<div class="brand-series-gallery">
				<?php foreach ($series['gallery'] as $index => $item) : ?>
					<figure
						class="brand-series__card brand-series__card--gallery"
						data-reveal
						data-reveal-stagger="<?php echo esc_attr((string) $index); ?>"
					>
						<img
							class="brand-series__image brand-series__image--gallery"
							src="<?php echo esc_url((string) $item['src']); ?>"
							alt="<?php echo esc_attr((string) $item['title']); ?>"
							loading="lazy"
							decoding="async"
							width="800"
							height="600"
						>
						<div class="brand-series__overlay" aria-hidden="true"></div>
						<figcaption class="brand-series__meta">
							<span class="brand-series__name brand-series__name--gallery"><?php echo esc_html((string) $item['title']); ?></span>
						</figcaption>
					</figure>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container">
			<div class="brand-series-related-head" data-reveal>
				<h2 class="brand-series-related-title"><?php esc_html_e('Andere Leicht series', 'keuken-centrum'); ?></h2>
				<a class="brand-series-back" href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>">
					<span aria-hidden="true"><?php echo kc_icon_brand('arrow-left'); ?></span>
					<?php esc_html_e('Terug naar Leicht', 'keuken-centrum'); ?>
				</a>
			</div>
			<div class="brand-series-related">
				<?php foreach ($related as $item) : ?>
					<a
						class="brand-series__card group"
						href="<?php echo esc_url(home_url('/keukens/leicht/' . $item['slug'] . '/')); ?>"
						data-reveal
					>
						<img
							class="brand-series__image brand-series__image--related"
							src="<?php echo esc_url((string) $item['heroImage']); ?>"
							alt="<?php echo esc_attr((string) $item['name']); ?>"
							loading="lazy"
							decoding="async"
							width="640"
							height="400"
						>
						<div class="brand-series__overlay" aria-hidden="true"></div>
						<div class="brand-series__meta">
							<h3 class="brand-series__name brand-series__name--related"><?php echo esc_html((string) $item['name']); ?></h3>
							<span class="brand-series__cta">
								<?php esc_html_e('Bekijk', 'keuken-centrum'); ?>
								<?php echo kc_icon_export(); ?>
							</span>
						</div>
					</a>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="brand-showroom-cta">
		<div class="site-container">
			<div class="brand-showroom-cta__inner">
				<div data-reveal>
					<?php kc_brand_eyebrow(__('Showroom', 'keuken-centrum'), true); ?>
					<h2 class="keukens-section-title keukens-section-title--light">
						<?php echo esc_html($name); ?>
						<em><?php esc_html_e('ervaren', 'keuken-centrum'); ?></em>?
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light">
						<?php esc_html_e('Kom langs in Utrecht of plan een adviesgesprek. Wij ontwerpen deze serie volledig op maat.', 'keuken-centrum'); ?>
					</p>
				</div>
				<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url(home_url('/consultation/')); ?>" data-reveal>
					<span class="premium-pill-button__label"><?php esc_html_e('Boek een afspraak', 'keuken-centrum'); ?></span>
					<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>
		</div>
	</section>
</div>
