<?php
/**
 * Keukens overview page (React KeukensOverviewPage parity).
 *
 * @package Keuken_Centrum
 */

$data   = kc_keukens_overview_data();
$phone  = (string) kc_get_option('contact_phone', '030 241 5122');
$phone_href = 'tel:+31' . preg_replace('/\D+/', '', $phone);
$hero_images = array_values(array_filter($data['hero']['images'] ?? []));
$hero_primary = $data['hero']['image'] ?: ($hero_images[0] ?? '');
?>
<div class="brand-page brand-page--overview">
	<section class="brand-page-hero" data-keukens-hero>
		<div class="brand-page-hero__media" aria-hidden="true">
			<?php if ($hero_primary) : ?>
				<img src="<?php echo esc_url($hero_primary); ?>" alt="" width="1920" height="1080" decoding="async" fetchpriority="high" data-keukens-hero-image>
			<?php endif; ?>
			<div class="brand-page-hero__gradient"></div>
			<div class="brand-page-hero__radial"></div>
		</div>
		<div class="brand-page-hero__fade" aria-hidden="true"></div>

		<div class="site-container">
			<div class="brand-page-hero__content" data-reveal>
				<?php kc_brand_eyebrow($data['hero']['eyebrow'], true); ?>
				<h1 class="brand-page-hero__title">
					<?php echo esc_html($data['hero']['title']); ?>
					<br>
					<em><?php echo esc_html($data['hero']['highlight']); ?></em>
				</h1>
				<p class="brand-page-hero__lede"><?php echo esc_html($data['hero']['subtitle']); ?></p>
				<div class="brand-page-hero__actions">
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url(home_url('/#consultation')); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Plan showroombezoek', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
					<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--lg" href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Ontdek Leicht', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</div>
		<?php if (count($hero_images) > 1) : ?>
			<script type="application/json" id="kc-keukens-hero-images"><?php echo wp_json_encode($hero_images); ?></script>
		<?php endif; ?>
	</section>

	<section class="section-shell">
		<div class="site-container keukens-intro-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow($data['intro']['eyebrow']); ?>
				<h2 class="keukens-section-title"><?php echo esc_html($data['intro']['title']); ?></h2>
			</div>
			<div data-reveal>
				<?php foreach ($data['intro']['paragraphs'] as $paragraph) : ?>
					<p class="keukens-body-copy"><?php echo esc_html($paragraph); ?></p>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell keukens-brands-section">
		<div class="site-container">
			<div class="keukens-brands-section__head" data-reveal>
				<?php kc_brand_eyebrow(__('Onze merken', 'keuken-centrum')); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e('De beste merken voor de', 'keuken-centrum'); ?>
					<em><?php esc_html_e('beste prijs', 'keuken-centrum'); ?></em>
				</h2>
			</div>

			<div class="keukens-brand-grid">
				<?php foreach ($data['brands'] as $index => $brand) : ?>
					<div data-reveal>
						<a class="keukens-brand-card" href="<?php echo esc_url($brand['href']); ?>">
							<div class="keukens-brand-card__media">
								<img class="keukens-brand-card__image" src="<?php echo esc_url($brand['image']); ?>" alt="<?php echo esc_attr($brand['name']); ?>" loading="lazy" decoding="async" width="640" height="400">
							</div>
							<div class="keukens-brand-card__body">
								<div class="keukens-brand-card__meta">
									<span class="keukens-brand-card__country"><?php echo esc_html($brand['country']); ?></span>
									<span class="keukens-brand-card__arrow" aria-hidden="true"><?php echo kc_icon_export(); ?></span>
								</div>
								<h3 class="keukens-brand-card__name"><?php echo esc_html($brand['name']); ?></h3>
								<p class="keukens-brand-card__tagline"><?php echo esc_html($brand['tagline']); ?></p>
								<p class="keukens-brand-card__desc"><?php echo esc_html($brand['description']); ?></p>
							</div>
						</a>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container">
			<div class="brand-partnership">
				<span class="brand-partnership__ghost" aria-hidden="true">LEICHT</span>
				<div class="keukens-partnership-copy" data-reveal>
					<?php kc_brand_eyebrow('LEICHT Keukens', true); ?>
					<h2 class="keukens-section-title keukens-section-title--light">
						<?php esc_html_e('Ruimten van hoogste', 'keuken-centrum'); ?>
						<em><?php esc_html_e('individualiteit', 'keuken-centrum'); ?></em>
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php echo esc_html($data['leichtNote']); ?></p>
					<a class="premium-pill-button premium-pill-button--lg" href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Bekijk Leicht collectie', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<section class="section-shell section-shell--border-top">
		<div class="site-container">
			<div class="keukens-value-grid">
				<?php foreach ($data['valueProps'] as $index => $prop) : ?>
					<article class="keukens-value-card<?php echo 1 === $index ? ' keukens-value-card--dark' : ''; ?>" data-reveal>
						<span class="keukens-value-card__num"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span>
						<h3><?php echo esc_html($prop['title']); ?></h3>
						<p><?php echo esc_html($prop['body']); ?></p>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell">
		<div class="site-container keukens-custom-wrap">
			<?php kc_brand_eyebrow(__('Op maat', 'keuken-centrum')); ?>
			<h2 class="keukens-section-title">
				<?php esc_html_e('Uw stijl.', 'keuken-centrum'); ?>
				<em><?php esc_html_e('Onze oplossing.', 'keuken-centrum'); ?></em>
			</h2>
			<?php foreach ($data['customNote'] as $note) : ?>
				<p class="keukens-body-copy"><?php echo esc_html($note); ?></p>
			<?php endforeach; ?>
		</div>
	</section>

	<section class="section-shell section-shell--border-top">
		<div class="site-container keukens-faq-grid">
			<div data-reveal>
				<?php kc_brand_eyebrow(__('Veelgestelde vragen', 'keuken-centrum')); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e('Alles over', 'keuken-centrum'); ?>
					<em><?php esc_html_e('uw nieuwe keuken', 'keuken-centrum'); ?></em>
				</h2>
				<div class="brand-faq__contact-card">
					<span class="brand-faq__contact-ghost" aria-hidden="true">?</span>
					<div class="brand-faq__contact-inner">
						<span class="brand-faq__contact-icon" aria-hidden="true">☎</span>
						<div>
							<span class="brand-faq__contact-label"><?php esc_html_e('Direct contact', 'keuken-centrum'); ?></span>
							<a href="<?php echo esc_url($phone_href); ?>" class="brand-faq__contact-phone"><?php echo esc_html($phone); ?></a>
						</div>
					</div>
				</div>
			</div>
			<div class="brand-faq" data-brand-faq data-reveal>
				<?php foreach ($data['faq'] as $index => $item) : ?>
					<details class="brand-faq__item">
						<summary class="brand-faq__trigger">
							<span class="brand-faq__num"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span>
							<span class="brand-faq__question"><?php echo esc_html($item['q']); ?></span>
							<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</summary>
						<div class="brand-faq__content"><?php echo esc_html($item['a']); ?></div>
					</details>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="section-shell section-shell--soft-green">
		<div class="site-container">
			<div class="keukens-brands-section__head" data-reveal>
				<?php kc_brand_eyebrow(__('Uw adviseurs', 'keuken-centrum')); ?>
				<h2 class="keukens-section-title">
					<?php esc_html_e('Kom in contact', 'keuken-centrum'); ?>
					<em><?php esc_html_e('met ons team', 'keuken-centrum'); ?></em>
				</h2>
			</div>
			<div class="keukens-advisor-grid">
				<?php foreach ($data['advisors'] as $index => $advisor) : ?>
					<article class="brand-advisor-card" data-reveal>
						<div class="brand-advisor-card__head">
							<span class="brand-advisor-card__index"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span>
							<span class="brand-advisor-card__role"><?php echo esc_html($advisor['role']); ?></span>
						</div>
						<h3><?php echo esc_html($advisor['name']); ?></h3>
						<p>“<?php echo esc_html($advisor['bio']); ?>”</p>
						<a class="brand-advisor-card__email" href="mailto:<?php echo esc_attr($advisor['email']); ?>">
							<?php echo esc_html($advisor['email']); ?>
							<span aria-hidden="true"><?php echo kc_icon_export(); ?></span>
						</a>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</section>

	<section class="brand-showroom-cta">
		<div class="site-container">
			<div class="brand-showroom-cta__inner">
				<div data-reveal>
					<?php kc_brand_eyebrow(__('Showroom Utrecht', 'keuken-centrum'), true); ?>
					<h2 class="keukens-section-title keukens-section-title--light">
						<?php esc_html_e('Klaar voor uw', 'keuken-centrum'); ?>
						<em><?php esc_html_e('droomkeuken', 'keuken-centrum'); ?></em>?
					</h2>
					<p class="keukens-body-copy keukens-body-copy--light"><?php esc_html_e('Boek een afspraak. Wij helpen u graag verder, van het eerste idee tot de professionele installatie.', 'keuken-centrum'); ?></p>
				</div>
				<a class="premium-pill-button premium-pill-button--xl" href="<?php echo esc_url(home_url('/#consultation')); ?>" data-reveal>
					<span class="premium-pill-button__label"><?php esc_html_e('Boek een afspraak', 'keuken-centrum'); ?></span>
					<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>
		</div>
	</section>
</div>
