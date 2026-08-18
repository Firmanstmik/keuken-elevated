<?php
/**
 * Home brands section — React Brands visual twin.
 *
 * @package Keuken_Centrum
 */

$scene = kc_theme_img('brands/brands-dark-bg.webp');

$brands = [
	[
		'name'        => 'Leicht',
		'logo'        => 'Leicht_Logo.webp',
		'image'       => 'brands/leicht-hero.webp',
		'origin'      => 'Duitsland',
		'since'       => 'Sinds 1928',
		'href'        => home_url('/keukens/leicht/'),
		'eyebrow'     => 'Hoofdpartner',
		'description' => 'Architecturaal Duits design, gevormd door meer dan 90 jaar vakmanschap en compromisloze materiaalkeuze.',
		'signature'   => 'Bauhaus-erfgoed · Maatwerk',
	],
	[
		'name'        => 'AI Küchen',
		'logo'        => 'aiKuchen_Logo.webp',
		'image'       => 'brands/aikuchen-hero.webp',
		'origin'      => 'Duitsland',
		'since'       => 'Premium partner',
		'href'        => home_url('/keukens/ai-kuchen/'),
		'eyebrow'     => 'Duitse innovatie',
		'description' => 'Moderne keukens met intelligente indelingen, sterke techniek en een persoonlijke uitstraling voor iedere ruimte.',
		'signature'   => 'Innovatief · Persoonlijk',
	],
	[
		'name'        => 'Nobilia',
		'logo'        => 'Nobilia_Logo.webp',
		'image'       => 'brands/nobilia-hero.webp',
		'origin'      => 'Duitsland',
		'since'       => 'Made in Germany',
		'href'        => home_url('/keukens/nobilia/'),
		'eyebrow'     => 'Europese marktleider',
		'description' => 'Betrouwbare Duitse precisie, verrassend veel mogelijkheden en een afwerking die dagelijks comfort centraal stelt.',
		'signature'   => 'Veelzijdig · Betrouwbaar',
	],
	[
		'name'        => 'Zampieri',
		'logo'        => 'Zampieri_Logo.webp',
		'image'       => 'brands/zampieri-hero.webp',
		'origin'      => 'Italië',
		'since'       => 'Italiaans design',
		'href'        => home_url('/keukens/zampieri/'),
		'eyebrow'     => 'Sculpturale collectie',
		'description' => 'Italiaanse finesse in haar puurste vorm: elegante volumes, rijke materialen en een uitgesproken architectonische rust.',
		'signature'   => 'Minimalistisch · Verfijnd',
	],
	[
		'name'        => 'Cucinesse',
		'logo'        => 'Cucinesse_Logo_Official.png',
		'image'       => 'brands/cucinesse-hero.webp',
		'origin'      => 'Italië',
		'since'       => 'Volledig op maat',
		'href'        => home_url('/keukens/cucinesse/'),
		'eyebrow'     => 'Italiaans maatwerk',
		'description' => 'Warme Italiaanse sfeer en praktisch maatwerk komen samen in keukens die uitnodigen om dagelijks te leven.',
		'signature'   => 'Warm · Karaktervol',
	],
];

$marquee = [
	['name' => 'Leicht', 'logo' => 'Leicht_Logo.webp', 'description' => 'Architecturale Duitse keukens sinds 1928.'],
	['name' => 'AI Küchen', 'logo' => 'aiKuchen_Logo.webp', 'description' => 'Duitse innovatie met persoonlijk maatwerk.'],
	['name' => 'Nobilia', 'logo' => 'Nobilia_Logo.webp', 'description' => 'Veelzijdige kwaliteit, volledig Made in Germany.'],
	['name' => 'Zampieri', 'logo' => 'Zampieri_Logo.webp', 'description' => 'Sculpturaal Italiaans design met karakter.'],
	['name' => 'Cucinesse', 'logo' => 'Cucinesse_Logo_Official.png', 'description' => 'Warme Italiaanse keukens, volledig op maat.'],
	['name' => 'Bora', 'logo' => 'Bora_Logo.webp', 'description' => 'Innovatieve kookveldafzuiging bij de bron.'],
	['name' => 'Miele', 'logo' => 'Miele_Logo.webp', 'description' => 'Premium apparatuur gebouwd voor jarenlang gebruik.'],
	['name' => 'Quooker', 'logo' => 'Quooker_Logo.webp', 'description' => 'Kokend, gekoeld en bruisend water uit één kraan.'],
	['name' => 'Gaggenau', 'logo' => 'Gaggenau_Logo.webp', 'description' => 'Professionele keukenapparatuur sinds 1683.'],
];

$active = $brands[0];
?>
<section class="brands-scene section-shell" id="brands" data-brands-carousel>
	<div class="brands-scene__photo" aria-hidden="true"<?php echo $scene ? ' style="background-image:url(' . esc_url($scene) . ')"' : ''; ?>></div>
	<div class="brands-scene__aurora" aria-hidden="true"></div>
	<div class="brands-scene__veil" aria-hidden="true"></div>

	<div class="site-shell brands-scene__inner">
		<?php kc_section_chapter('01', __('Partners', 'keuken-centrum'), true); ?>

		<div class="brands-carousel-grid" data-reveal>
			<div class="brands-stack">
				<?php foreach ($brands as $index => $brand) : ?>
					<article
						class="brands-stack__card<?php echo 0 === $index ? ' is-active' : ''; ?>"
						data-brands-slide
						data-brand-index="<?php echo esc_attr((string) $index); ?>"
						aria-hidden="<?php echo 0 === $index ? 'false' : 'true'; ?>"
					>
						<img src="<?php echo esc_url(kc_theme_img($brand['image'])); ?>" alt="<?php echo 0 === $index ? esc_attr($brand['name'] . ' keuken') : ''; ?>" loading="<?php echo 0 === $index ? 'eager' : 'lazy'; ?>" width="900" height="1200" />
						<span class="brands-stack__scrim" aria-hidden="true"></span>
						<span class="brands-stack__frame" aria-hidden="true">
							<span class="brands-stack__corner brands-stack__corner--tl"></span>
							<span class="brands-stack__corner brands-stack__corner--br"></span>
						</span>
						<span class="brands-stack__badge">
							<span class="brands-stack__badge-dot"></span>
							<?php esc_html_e('KC geselecteerd', 'keuken-centrum'); ?>
						</span>
						<span class="brands-stack__index"><?php echo esc_html(str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT)); ?></span>
						<div class="brands-stack__meta">
							<p><?php echo esc_html($brand['signature']); ?></p>
							<h3><?php echo esc_html($brand['name']); ?></h3>
						</div>
					</article>
				<?php endforeach; ?>
			</div>

			<div class="brands-copy">
				<div class="brands-copy__panel" data-brands-panel>
					<div class="brands-copy__pills">
						<span class="brands-copy__pill brands-copy__pill--gold">
							<svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true"><path d="M12 3l2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 14.8 7.8 16l.8-4.7L5.2 8l4.7-.7L12 3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
							<span data-brands-eyebrow><?php echo esc_html($active['eyebrow']); ?></span>
						</span>
						<span class="brands-copy__pill">
							<svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true"><path d="M12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" stroke-width="1.4"/><path d="M20 10.5c0 5.2-8 10.5-8 10.5S4 15.7 4 10.5a8 8 0 1 1 16 0z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>
							<span data-brands-origin><?php echo esc_html($active['origin']); ?></span>
						</span>
					</div>

					<div class="brands-copy__logo-wrap">
						<img class="brands-copy__logo" data-brands-logo src="<?php echo esc_url(kc_theme_img($active['logo'])); ?>" alt="<?php echo esc_attr($active['name']); ?>" width="180" height="64" data-brand-logo-name="<?php echo esc_attr($active['name']); ?>" />
					</div>
					<p class="brands-copy__since" data-brands-since><?php echo esc_html($active['since']); ?></p>
					<h2><?php echo wp_kses(__('Design dat <em>blijft.</em>', 'keuken-centrum'), ['em' => []]); ?></h2>
					<p class="brands-copy__body" data-brands-copy><?php echo esc_html($active['description']); ?></p>

					<div class="brands-copy__actions">
						<a class="premium-pill-button premium-pill-button--blue premium-pill-button--lg" data-brands-cta href="<?php echo esc_url($active['href']); ?>">
							<span class="premium-pill-button__label" data-brands-cta-label><?php echo esc_html(sprintf(__('Ontdek %s', 'keuken-centrum'), $active['name'])); ?></span>
							<span class="premium-pill-button__badge" aria-hidden="true"><span class="premium-pill-button__icon">→</span></span>
						</a>
						<a class="brands-copy__link" data-brands-link href="<?php echo esc_url($active['href']); ?>">
							<?php esc_html_e('Bekijk collectie', 'keuken-centrum'); ?>
							<svg viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true"><path d="M9 5h10v10M19 5 5 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</a>
					</div>
				</div>

				<div class="brands-pager">
					<div class="brands-pager__dots" role="tablist" aria-label="<?php esc_attr_e('Kies een merk', 'keuken-centrum'); ?>">
						<?php foreach ($brands as $index => $brand) : ?>
							<button
								type="button"
								class="brands-pager__dot ui-dot<?php echo 0 === $index ? ' is-active' : ''; ?>"
								data-brands-dot
								data-brand-name="<?php echo esc_attr($brand['name']); ?>"
								data-brand-origin="<?php echo esc_attr($brand['origin']); ?>"
								data-brand-since="<?php echo esc_attr($brand['since']); ?>"
								data-brand-eyebrow="<?php echo esc_attr($brand['eyebrow']); ?>"
								data-brand-copy="<?php echo esc_attr($brand['description']); ?>"
								data-brand-signature="<?php echo esc_attr($brand['signature']); ?>"
								data-brand-href="<?php echo esc_url($brand['href']); ?>"
								data-brand-logo="<?php echo esc_url(kc_theme_img($brand['logo'])); ?>"
								aria-label="<?php echo esc_attr(sprintf(__('Toon %s', 'keuken-centrum'), $brand['name'])); ?>"
								aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>"
							><span class="brands-pager__progress" aria-hidden="true"></span></button>
						<?php endforeach; ?>
					</div>
					<div class="brands-pager__controls">
						<span class="brands-pager__count" data-brands-count>01 / 05</span>
						<button type="button" class="brands-pager__nav" data-brands-prev aria-label="<?php esc_attr_e('Vorige partner', 'keuken-centrum'); ?>">
							<svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="M15 5 8 12l7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</button>
						<button type="button" class="brands-pager__nav" data-brands-next aria-label="<?php esc_attr_e('Volgende partner', 'keuken-centrum'); ?>">
							<svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true"><path d="m9 5 7 7-7 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="brands-marquee" aria-hidden="true">
		<div class="brands-marquee__track">
			<?php foreach (array_merge($marquee, $marquee) as $item) : ?>
				<span class="brands-marquee__item" data-brand-logo-name="<?php echo esc_attr($item['name']); ?>">
					<span class="brands-marquee__logo group-logo">
						<span class="brands-marquee__tooltip">
							<strong><?php echo esc_html($item['name']); ?></strong>
							<span><?php echo esc_html($item['description']); ?></span>
						</span>
						<span class="brands-marquee__glow" aria-hidden="true"></span>
						<span class="brands-marquee__surface" aria-hidden="true"></span>
						<img class="brands-marquee__base" src="<?php echo esc_url(kc_theme_img($item['logo'])); ?>" alt="" loading="lazy" width="130" height="48" />
						<img class="brands-marquee__hover" src="<?php echo esc_url(kc_theme_img($item['logo'])); ?>" alt="" loading="lazy" width="130" height="48" />
					</span>
					<span class="brands-marquee__dot"></span>
				</span>
			<?php endforeach; ?>
		</div>
	</div>
</section>
