<?php
/**
 * Generic BrandPage template (React BrandPage.tsx parity).
 *
 * Expects $data from kc_*_page_data().
 *
 * @package Keuken_Centrum
 */

if (! defined('ABSPATH')) {
	exit;
}

$data   = (isset($args) && is_array($args) && ! empty($args['data'])) ? $args['data'] : ($data ?? []);
$phone  = (string) kc_get_option('contact_phone', '030 241 5122');
$email  = (string) kc_get_option('contact_email', 'info@keuken-centrum.nl');
$addr   = (string) kc_get_option('contact_address', 'Zonnebaan 10');
$postal  = (string) kc_get_option('contact_postal', '3542 EA Utrecht');
$phone_href = 'tel:+31' . preg_replace('/\D+/', '', $phone);
$name   = (string) ($data['name'] ?? '');
$logo   = (string) ($data['logo'] ?? '');
$hero   = $data['hero'] ?? [];
$intro  = $data['intro'] ?? [];
?>
<div class="brand-page brand-page--<?php echo esc_attr((string) ($data['id'] ?? 'brand')); ?>">
	<section class="brand-page-hero" data-brand-hero>
		<div class="brand-page-hero__media" data-brand-hero-parallax aria-hidden="true">
			<?php if (! empty($hero['image'])) : ?>
				<img src="<?php echo esc_url($hero['image']); ?>" alt="<?php echo esc_attr($name . ' keuken in showroom Utrecht'); ?>" width="1920" height="1440" decoding="async" fetchpriority="high">
			<?php endif; ?>
			<div class="brand-page-hero__gradient"></div>
			<div class="brand-page-hero__radial"></div>
			<div class="brand-page-hero__vignette"></div>
		</div>
		<div class="brand-page-hero__fade" aria-hidden="true"></div>

		<div class="brand-page-hero__content site-container">
			<div class="brand-page-hero__inner">
				<?php if ($logo || ! empty($data['legacyName']) || ! empty($data['country'])) : ?>
					<div class="brand-page-hero__identity" data-hero-stagger>
						<?php if ($logo) : ?>
							<div class="brand-page-hero__logo-wrap">
								<img src="<?php echo esc_url($logo); ?>" alt="<?php echo esc_attr($name . ' logo'); ?>" class="brand-page-hero__logo" width="140" height="36" decoding="async">
							</div>
						<?php endif; ?>
						<?php if (! empty($data['legacyName']) || ! empty($data['country'])) : ?>
							<span class="brand-page-hero__identity-divider" aria-hidden="true"></span>
							<span class="brand-page-hero__identity-meta">
								<span class="brand-page-hero__identity-name"><?php echo esc_html((string) ($data['legacyName'] ?? $name)); ?></span>
								<span class="brand-page-hero__identity-country">
									<?php echo esc_html((string) ($data['country'] ?? '')); ?>
									<?php if (! empty($data['founded'])) : ?>
										· sinds <?php echo esc_html((string) $data['founded']); ?>
									<?php endif; ?>
								</span>
							</span>
						<?php endif; ?>
					</div>
				<?php endif; ?>

				<?php kc_brand_eyebrow((string) ($hero['eyebrow'] ?? ''), true, true); ?>
				<h1 class="brand-page-hero__title" data-hero-stagger>
					<?php echo esc_html((string) ($hero['title'] ?? $name)); ?>
					<br>
					<em><?php echo esc_html((string) ($hero['highlight'] ?? '')); ?></em>
				</h1>
				<p class="brand-page-hero__lede" data-hero-stagger><?php echo esc_html((string) ($hero['subtitle'] ?? '')); ?></p>
				<div class="brand-page-hero__actions" data-hero-stagger>
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url((string) ($hero['cta']['primaryHref'] ?? home_url('/consultation/'))); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html((string) ($hero['cta']['primary'] ?? '')); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url((string) ($hero['cta']['secondaryHref'] ?? $phone_href)); ?>">
						<span class="premium-pill-button__label"><?php echo esc_html((string) ($hero['cta']['secondary'] ?? '')); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
				<?php if (! empty($hero['badges'])) : ?>
					<div class="brand-page-hero__badge-strip-wrap" data-hero-stagger>
						<div class="brand-page-hero__badge-strip">
							<?php foreach ($hero['badges'] as $bi => $badge) : ?>
								<div class="brand-page-hero__badge">
									<?php if ($bi > 0) : ?>
										<span class="brand-page-hero__badge-divider" aria-hidden="true"></span>
									<?php endif; ?>
									<span class="brand-page-hero__badge-value"><?php echo esc_html((string) $badge['value']); ?></span>
									<span class="brand-page-hero__badge-label"><?php echo esc_html((string) $badge['label']); ?></span>
								</div>
							<?php endforeach; ?>
						</div>
					</div>
				<?php endif; ?>
			</div>
		</div>
		<div class="brand-page-hero__scroll" aria-hidden="true">
			<span><?php echo kc_icon_brand('arrow-down'); ?></span>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container">
			<div class="brand-page-intro">
				<div data-reveal>
					<?php kc_brand_eyebrow((string) ($intro['eyebrow'] ?? '')); ?>
					<h2 class="keukens-section-title">
						<?php echo esc_html((string) ($intro['titleBefore'] ?? '')); ?>
						<em><?php echo esc_html((string) ($intro['titleHighlight'] ?? '')); ?></em>
						<?php echo esc_html((string) ($intro['titleAfter'] ?? '')); ?>
					</h2>
					<?php if (! empty($intro['paragraphs'][0])) : ?>
						<p class="brand-page-intro__lead"><?php echo esc_html((string) $intro['paragraphs'][0]); ?></p>
					<?php endif; ?>
					<?php foreach (array_slice($intro['paragraphs'] ?? [], 1) as $paragraph) : ?>
						<p class="keukens-body-copy"><?php echo esc_html((string) $paragraph); ?></p>
					<?php endforeach; ?>
					<?php if (! empty($intro['signature'])) : ?>
						<div class="brand-page-intro__signature">
							<?php foreach ($intro['signature'] as $si => $sig) : ?>
								<div class="brand-page-intro__sig<?php echo 0 === $si ? '' : ' brand-page-intro__sig--border'; ?>">
									<span class="brand-page-intro__sig-value"><?php echo esc_html((string) $sig['value']); ?></span>
									<span class="brand-page-intro__sig-label"><?php echo esc_html((string) $sig['label']); ?></span>
								</div>
							<?php endforeach; ?>
						</div>
					<?php endif; ?>
				</div>
				<div class="brand-page-intro__frame" data-reveal>
					<div class="brand-page-intro__image-wrap">
						<?php if (! empty($intro['image'])) : ?>
							<img class="brand-page-intro__image" src="<?php echo esc_url((string) $intro['image']); ?>" alt="<?php echo esc_attr($name . ' keuken detail'); ?>" loading="lazy" decoding="async" width="800" height="1000">
						<?php endif; ?>
						<div class="brand-page-intro__glow" aria-hidden="true"></div>
					</div>
					<?php if (! empty($intro['roundel'])) : ?>
						<div class="brand-page-intro__roundel" aria-hidden="true">
							<svg viewBox="0 0 100 100" class="brand-page-intro__roundel-svg">
								<defs>
									<path id="intro-roundel-path-<?php echo esc_attr((string) ($data['id'] ?? 'brand')); ?>" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
								</defs>
								<text class="brand-page-intro__roundel-text">
									<textPath href="#intro-roundel-path-<?php echo esc_attr((string) ($data['id'] ?? 'brand')); ?>"><?php echo esc_html((string) $intro['roundel']); ?></textPath>
								</text>
							</svg>
							<span class="brand-page-intro__roundel-center"><?php echo kc_icon_brand('sparkles'); ?></span>
						</div>
					<?php endif; ?>
					<?php if (! empty($intro['caption'])) : ?>
						<div class="brand-page-intro__caption">
							<span class="brand-page-intro__caption-tag"><?php echo esc_html((string) $intro['caption']['tag']); ?></span>
							<span class="brand-page-intro__caption-title"><?php echo esc_html((string) $intro['caption']['title']); ?></span>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</section>

	<?php if (! empty($data['pillars'])) : ?>
		<?php $pillars = $data['pillars']; ?>
		<section class="section-shell brand-pillars-section">
			<div class="site-container">
				<div class="brand-section-head" data-reveal>
					<div>
						<?php kc_brand_eyebrow((string) ($pillars['eyebrow'] ?? '')); ?>
						<h2 class="keukens-section-title">
							<?php echo esc_html((string) ($pillars['titleBefore'] ?? '')); ?>
							<em><?php echo esc_html((string) ($pillars['titleHighlight'] ?? '')); ?></em>
							<?php echo esc_html((string) ($pillars['titleAfter'] ?? '')); ?>
						</h2>
					</div>
					<p class="keukens-body-copy brand-section-head__lead"><?php echo esc_html((string) ($pillars['lead'] ?? '')); ?></p>
				</div>
				<div class="brand-pillars-grid">
					<?php foreach (($pillars['items'] ?? []) as $pi => $pillar) : ?>
						<article class="brand-pillar-card" data-reveal data-reveal-delay="<?php echo esc_attr((string) ($pi * 0.12)); ?>">
							<div class="brand-pillar-card__media">
								<img class="brand-pillar-card__photo" src="<?php echo esc_url((string) ($pillar['image'] ?? $hero['image'] ?? '')); ?>" alt="<?php echo esc_attr((string) $pillar['title']); ?>" loading="lazy" decoding="async" width="640" height="400">
								<span class="brand-pillar-card__num" aria-hidden="true"><?php echo esc_html(str_pad((string) ($pi + 1), 2, '0', STR_PAD_LEFT)); ?></span>
							</div>
							<div class="brand-pillar-card__body">
								<div class="brand-pillar-card__icon"><?php echo kc_icon_brand((string) ($pillar['icon'] ?? 'sparkles')); ?></div>
								<h3><?php echo esc_html((string) $pillar['title']); ?></h3>
								<p><?php echo esc_html((string) $pillar['description']); ?></p>
							</div>
							<div class="brand-pillar-card__line" aria-hidden="true"></div>
						</article>
					<?php endforeach; ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if (! empty($data['series']['items'])) : ?>
		<?php $series = $data['series']; ?>
		<section id="series" class="section-shell">
			<div class="site-container">
				<div class="brand-section-head" data-reveal>
					<div>
						<?php kc_brand_eyebrow((string) ($series['eyebrow'] ?? '')); ?>
						<h2 class="keukens-section-title">
							<?php echo esc_html((string) ($series['titleBefore'] ?? '')); ?>
							<em><?php echo esc_html((string) ($series['titleHighlight'] ?? '')); ?></em>
						</h2>
					</div>
					<p class="keukens-body-copy brand-section-head__lead"><?php echo esc_html((string) ($series['lead'] ?? '')); ?></p>
				</div>
				<div class="brand-series__grid">
					<?php foreach ($series['items'] as $item) : ?>
						<?php $card_class = 'brand-series__card' . (! empty($item['featured']) ? ' brand-series__card--featured' : ''); ?>
						<div class="<?php echo esc_attr($card_class); ?>" data-reveal>
							<?php if (! empty($item['href'])) : ?>
								<a class="brand-series__link" href="<?php echo esc_url((string) $item['href']); ?>">
							<?php else : ?>
								<div class="brand-series__link">
							<?php endif; ?>
								<img class="brand-series__image" src="<?php echo esc_url((string) $item['image']); ?>" alt="<?php echo esc_attr((string) $item['name']); ?>" loading="lazy" decoding="async" width="640" height="480">
								<div class="brand-series__overlay"></div>
								<div class="brand-series__meta">
									<?php if (! empty($item['tag'])) : ?>
										<span class="brand-series__tag"><?php echo esc_html((string) $item['tag']); ?></span>
									<?php endif; ?>
									<h3 class="brand-series__name"><?php echo esc_html((string) $item['name']); ?></h3>
									<?php if (! empty($item['href'])) : ?>
										<span class="brand-series__cta">
											<?php esc_html_e('Bekijk serie', 'keuken-centrum'); ?>
											<?php echo kc_icon_export(); ?>
										</span>
									<?php endif; ?>
								</div>
							<?php if (! empty($item['href'])) : ?>
								</a>
							<?php else : ?>
								</div>
							<?php endif; ?>
						</div>
					<?php endforeach; ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if (! empty($data['catalogs'])) : ?>
		<section class="section-shell section-shell--tight-top">
			<div class="site-container">
				<div class="brand-catalogs" data-reveal>
					<div class="brand-catalogs__head">
						<?php kc_brand_eyebrow(__('Catalogi', 'keuken-centrum')); ?>
						<h3 class="keukens-section-title keukens-section-title--sm">
							<?php echo esc_html(sprintf(/* translators: brand name */ __('Officiële %s', 'keuken-centrum'), $name)); ?>
							<em><?php esc_html_e('catalogi', 'keuken-centrum'); ?></em>
						</h3>
					</div>
					<div class="brand-catalogs__list">
						<?php foreach ($data['catalogs'] as $catalog) : ?>
							<a class="brand-catalogs__item" href="<?php echo esc_url((string) $catalog['href']); ?>" target="_blank" rel="noopener noreferrer">
								<span class="brand-catalogs__icon" aria-hidden="true"><?php echo kc_icon_file_text(); ?></span>
								<span>
									<span class="brand-catalogs__title"><?php echo esc_html((string) $catalog['title']); ?></span>
									<?php if (! empty($catalog['subtitle'])) : ?>
										<span class="brand-catalogs__subtitle"><?php echo esc_html((string) $catalog['subtitle']); ?></span>
									<?php endif; ?>
								</span>
								<span class="brand-catalogs__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
							</a>
						<?php endforeach; ?>
					</div>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if (! empty($data['partnership'])) : ?>
		<?php $partnership = $data['partnership']; ?>
		<section class="section-shell">
			<div class="site-container">
				<div class="brand-partnership">
					<span class="brand-partnership__ghost" aria-hidden="true"><?php echo esc_html((string) ($partnership['ghost'] ?? '')); ?></span>
					<div class="brand-partnership__copy" data-reveal>
						<?php kc_brand_eyebrow((string) ($partnership['eyebrow'] ?? ''), true); ?>
						<h2 class="keukens-section-title keukens-section-title--light">
							<?php echo esc_html((string) ($partnership['titleBefore'] ?? '')); ?>
							<em><?php echo esc_html((string) ($partnership['titleHighlight'] ?? '')); ?></em>
							<?php echo esc_html((string) ($partnership['titleAfter'] ?? '')); ?>
						</h2>
						<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html((string) ($partnership['body'] ?? '')); ?></p>
						<ul class="brand-partnership__highlights">
							<?php foreach (($partnership['highlights'] ?? []) as $hl) : ?>
								<li class="brand-partnership__highlight">
									<span class="brand-partnership__check" aria-hidden="true"><?php echo kc_icon_brand('check'); ?></span>
									<?php echo esc_html((string) $hl); ?>
								</li>
							<?php endforeach; ?>
						</ul>
					</div>
					<div data-reveal>
						<div class="brand-partnership__stats">
							<?php foreach (($partnership['stats'] ?? []) as $stat) : ?>
								<div class="brand-stat-cell">
									<?php echo kc_icon_brand((string) ($stat['icon'] ?? 'award')); ?>
									<span class="brand-stat-cell__value"><?php echo esc_html((string) $stat['value']); ?></span>
									<span class="brand-stat-cell__label"><?php echo esc_html((string) $stat['label']); ?></span>
								</div>
							<?php endforeach; ?>
						</div>
						<p class="brand-partnership__note">
							<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
							<?php echo esc_html((string) ($partnership['note'] ?? '')); ?>
						</p>
					</div>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if (! empty($data['gallery'])) : ?>
		<?php $gallery = $data['gallery']; ?>
		<section class="section-shell section-shell--border-top">
			<div class="site-container">
				<div class="brand-section-head" data-reveal>
					<div>
						<?php kc_brand_eyebrow((string) ($gallery['eyebrow'] ?? '')); ?>
						<h2 class="keukens-section-title">
							<?php echo esc_html((string) ($gallery['titleBefore'] ?? '')); ?>
							<em><?php echo esc_html((string) ($gallery['titleHighlight'] ?? '')); ?></em>
						</h2>
					</div>
					<div class="brand-gallery-head-meta">
						<p class="keukens-body-copy brand-section-head__lead"><?php echo esc_html((string) ($gallery['lead'] ?? '')); ?></p>
						<div class="brand-gallery-count">
							<span class="brand-gallery-count__value"><?php echo esc_html(str_pad((string) count($gallery['items'] ?? []), 2, '0', STR_PAD_LEFT)); ?></span>
							<span class="brand-gallery-count__label"><?php esc_html_e('Opstellingen', 'keuken-centrum'); ?></span>
						</div>
					</div>
				</div>
				<div class="brand-gallery">
					<?php foreach (($gallery['items'] ?? []) as $gi => $item) : ?>
						<figure class="brand-gallery__item brand-gallery__item--<?php echo esc_attr((string) ($item['span'] ?? 'medium')); ?>" data-reveal data-reveal-delay="<?php echo esc_attr((string) ($gi * 0.1)); ?>">
							<img class="brand-gallery__image" src="<?php echo esc_url((string) $item['src']); ?>" alt="<?php echo esc_attr((string) $item['title']); ?>" loading="lazy" decoding="async" width="800" height="600">
							<span class="brand-gallery__index" aria-hidden="true"><?php echo esc_html(str_pad((string) ($gi + 1), 2, '0', STR_PAD_LEFT)); ?></span>
							<figcaption class="brand-gallery__caption">
								<span class="brand-gallery__tag"><?php echo esc_html((string) $item['tag']); ?></span>
								<span class="brand-gallery__title"><?php echo esc_html((string) $item['title']); ?></span>
							</figcaption>
							<span class="brand-gallery__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
						</figure>
					<?php endforeach; ?>
					<?php if (! empty($gallery['cta'])) : ?>
						<a class="brand-gallery__cta-tile" href="<?php echo esc_url((string) $gallery['cta']['href']); ?>" data-reveal data-reveal-delay="0.4">
							<span class="brand-gallery__cta-ghost" aria-hidden="true">Live</span>
							<div class="brand-gallery__cta-copy">
								<?php kc_brand_eyebrow(__('Showroom Utrecht', 'keuken-centrum'), true); ?>
								<h3>
									<?php echo esc_html((string) $gallery['cta']['titleBefore']); ?>
									<em><?php echo esc_html((string) $gallery['cta']['titleHighlight']); ?></em>
									<?php echo esc_html((string) ($gallery['cta']['titleAfter'] ?? '')); ?>
								</h3>
								<p><?php echo esc_html((string) $gallery['cta']['body']); ?></p>
							</div>
							<div class="brand-gallery__cta-foot">
								<span><?php echo esc_html((string) $gallery['cta']['label']); ?></span>
								<span class="brand-gallery__cta-arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
							</div>
						</a>
					<?php endif; ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if (! empty($data['custom'])) : ?>
		<?php $custom = $data['custom']; ?>
		<section class="brand-custom-band">
			<span class="brand-custom-band__ghost" aria-hidden="true"><?php esc_html_e('Maatwerk', 'keuken-centrum'); ?></span>
			<div class="site-container">
				<div class="brand-custom-band__inner" data-reveal>
					<?php kc_brand_eyebrow((string) ($custom['eyebrow'] ?? ''), true); ?>
					<h2 class="keukens-section-title keukens-section-title--light">
						<?php echo esc_html((string) ($custom['titleBefore'] ?? '')); ?>
						<em><?php echo esc_html((string) ($custom['titleHighlight'] ?? '')); ?></em>
						<?php echo esc_html((string) ($custom['titleAfter'] ?? '')); ?>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html((string) ($custom['body'] ?? '')); ?></p>
					<p class="keukens-body-copy keukens-body-copy--muted"><?php echo esc_html((string) ($custom['secondary'] ?? '')); ?></p>
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url(home_url('/configure/')); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Start uw ontwerp', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<section class="section-shell">
		<div class="site-container keukens-faq-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow(__('Veelgestelde vragen', 'keuken-centrum')); ?>
				<h2 class="keukens-section-title">
					<?php echo esc_html((string) ($data['faq']['titleBefore'] ?? '')); ?>
					<em><?php echo esc_html((string) ($data['faq']['titleHighlight'] ?? '')); ?></em>
				</h2>
				<p class="keukens-body-copy"><?php esc_html_e('Staat uw antwoord er niet bij? Wij helpen u graag persoonlijk verder.', 'keuken-centrum'); ?></p>
				<div class="brand-faq__contact-card">
					<span class="brand-faq__contact-ghost" aria-hidden="true">?</span>
					<div class="brand-faq__contact-inner">
						<span class="brand-faq__contact-icon" aria-hidden="true"><?php echo kc_icon_brand('phone'); ?></span>
						<div>
							<span class="brand-faq__contact-label"><?php esc_html_e('Direct contact', 'keuken-centrum'); ?></span>
							<a href="<?php echo esc_url($phone_href); ?>" class="brand-faq__contact-phone"><?php echo esc_html($phone); ?></a>
						</div>
					</div>
					<div class="brand-faq__contact-divider"></div>
					<a class="brand-faq__contact-email" href="mailto:<?php echo esc_attr($email); ?>">
						<?php echo esc_html($email); ?>
						<span aria-hidden="true"><?php echo kc_icon_export(); ?></span>
					</a>
					<p class="brand-faq__contact-hours"><?php esc_html_e('Maandag tot vrijdag 09:00 tot 18:00 · Zaterdag 09:00 tot 17:00', 'keuken-centrum'); ?></p>
				</div>
			</div>
			<div class="brand-faq" data-brand-faq data-reveal>
				<?php foreach (($data['faq']['items'] ?? []) as $index => $item) : ?>
					<details class="brand-faq__item">
						<summary class="brand-faq__trigger">
							<span class="brand-faq__num"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span>
							<span class="brand-faq__question"><?php echo esc_html((string) $item['q']); ?></span>
							<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</summary>
						<div class="brand-faq__content"><?php echo esc_html((string) $item['a']); ?></div>
					</details>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<?php if (! empty($data['advisors'])) : ?>
		<section class="section-shell section-shell--soft-green">
			<div class="site-container">
				<div class="brand-section-head" data-reveal>
					<div>
						<?php kc_brand_eyebrow(__('Uw adviseurs', 'keuken-centrum')); ?>
						<h2 class="keukens-section-title">
							<?php esc_html_e('Kom in contact', 'keuken-centrum'); ?>
							<em><?php esc_html_e('met ons team', 'keuken-centrum'); ?></em>
						</h2>
					</div>
					<p class="keukens-body-copy brand-section-head__lead"><?php esc_html_e('Persoonlijk advies van mensen die hun vak verstaan. Loop binnen op de Zonnebaan.', 'keuken-centrum'); ?></p>
				</div>
				<div class="keukens-advisor-grid keukens-advisor-grid--<?php echo count($data['advisors']) > 2 ? '3' : '2'; ?>">
					<?php foreach ($data['advisors'] as $index => $advisor) : ?>
						<article class="brand-advisor-card" data-reveal>
							<div class="brand-advisor-card__head">
								<span class="brand-advisor-card__index"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span>
								<span class="brand-advisor-card__role"><?php echo esc_html((string) $advisor['role']); ?></span>
							</div>
							<h3><?php echo esc_html((string) $advisor['name']); ?></h3>
							<p>“<?php echo esc_html((string) $advisor['bio']); ?>”</p>
							<a class="brand-advisor-card__email" href="mailto:<?php echo esc_attr((string) $advisor['email']); ?>">
								<?php echo esc_html((string) $advisor['email']); ?>
								<span aria-hidden="true"><?php echo kc_icon_export(); ?></span>
							</a>
						</article>
					<?php endforeach; ?>
				</div>
			</div>
		</section>
	<?php endif; ?>

	<?php if (! empty($data['showroomCta'])) : ?>
		<?php $cta = $data['showroomCta']; ?>
		<section class="brand-showroom-cta">
			<div class="site-container">
				<div class="brand-showroom-cta__inner">
					<div class="brand-showroom-cta__copy" data-reveal>
						<?php kc_brand_eyebrow((string) ($cta['eyebrow'] ?? ''), true); ?>
						<h2 class="brand-showroom-cta__title">
							<?php echo esc_html((string) ($cta['titleBefore'] ?? '')); ?>
							<em><?php echo esc_html((string) ($cta['titleHighlight'] ?? '')); ?></em>
							<?php echo esc_html((string) ($cta['titleAfter'] ?? '')); ?>
						</h2>
						<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html((string) ($cta['subtitle'] ?? '')); ?></p>
						<p class="brand-showroom-cta__meta">
							<span><?php echo esc_html($addr . ', ' . $postal); ?></span>
							<span class="brand-showroom-cta__meta-divider" aria-hidden="true"></span>
							<span><?php echo esc_html($phone); ?></span>
						</p>
					</div>
					<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url((string) ($cta['href'] ?? home_url('/consultation/'))); ?>" data-reveal>
						<span class="premium-pill-button__label"><?php echo esc_html((string) ($cta['button'] ?? '')); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</section>
	<?php endif; ?>
</div>
