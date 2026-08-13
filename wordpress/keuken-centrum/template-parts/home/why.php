<?php
/**
 * Home why section — editorial feature cards with imagery.
 *
 * @package Keuken_Centrum
 */

$features = [
	[
		'title' => __('Advies dat echt luistert', 'keuken-centrum'),
		'text'  => __('We vertalen woonwensen, kookgedrag en architectuur naar een keukenconcept dat logisch voelt en verfijnd oogt.', 'keuken-centrum'),
		'image' => kc_theme_img('why/why-persoonlijk.webp'),
	],
	[
		'title' => __('Geselecteerde premium merken', 'keuken-centrum'),
		'text'  => __('Onze collectie combineert Duitse betrouwbaarheid met Italiaanse sfeer, zodat materiaal, maatwerk en techniek in balans zijn.', 'keuken-centrum'),
		'image' => kc_theme_img('why/why-materialen.webp'),
	],
	[
		'title' => __('Persoonlijke begeleiding tot oplevering', 'keuken-centrum'),
		'text'  => __('Van eerste routing in de showroom tot afstemming met monteurs en apparatuurpartners: u houdt overzicht en vertrouwen.', 'keuken-centrum'),
		'image' => kc_theme_img('why/why-service.webp'),
	],
];

$texture = kc_theme_img('mat-concrete.jpg');
?>
<section class="section-shell section-shell--textured" id="why-with-us"<?php echo $texture ? ' style="--kc-texture:url(' . esc_url($texture) . ')"' : ''; ?>>
	<div class="site-shell">
		<div class="section-heading" data-reveal>
			<p class="section-eyebrow"><?php esc_html_e('Waarom Keuken-Centrum', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Een premium keukenervaring met rust, expertise en aandacht voor detail.', 'keuken-centrum'); ?></h2>
		</div>

		<div class="feature-grid feature-grid--media">
			<?php foreach ($features as $feature) : ?>
				<article class="feature-card feature-card--media" data-reveal>
					<?php if (! empty($feature['image'])) : ?>
						<div class="feature-card__media">
							<img src="<?php echo esc_url($feature['image']); ?>" alt="" loading="lazy" width="640" height="420">
						</div>
					<?php endif; ?>
					<div class="feature-card__body">
						<h3 class="feature-card__title"><?php echo esc_html($feature['title']); ?></h3>
						<p><?php echo esc_html($feature['text']); ?></p>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
