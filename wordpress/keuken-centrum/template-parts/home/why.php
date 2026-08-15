<?php
/**
 * Home why section — React WhyWithUsSection parity.
 *
 * @package Keuken_Centrum
 */
$pillars = [
	['title' => 'Vakmanschap', 'copy' => 'Van eerste schets tot laatste millimeter: onze specialisten bewaken het detail.', 'image' => 'why/why-vakmanschap.webp'],
	['title' => 'Persoonlijk', 'copy' => 'Uw manier van leven is het vertrekpunt voor ieder ontwerp en elk advies.', 'image' => 'why/why-persoonlijk.webp'],
	['title' => 'Materialen', 'copy' => 'Voelbare kwaliteit in hout, steen, lak en techniek — zorgvuldig naast elkaar gekozen.', 'image' => 'why/why-materialen.webp'],
	['title' => 'Service', 'copy' => 'Eén vertrouwd team, van de eerste ontmoeting tot en met de oplevering.', 'image' => 'why/why-service.webp'],
];
$concrete = kc_theme_img('mat-concrete.jpg');
$oak      = kc_theme_img('mat-oak.jpg');
?>
<section class="why-scene" id="why-with-us"<?php echo $concrete ? ' style="--why-concrete:url(' . esc_url($concrete) . ')"' : ''; ?> data-why-pillars>
	<div class="site-shell why-scene-grid">
		<div class="why-scene-copy">
			<p class="section-eyebrow"><?php esc_html_e('Waarom Keuken-Centrum', 'keuken-centrum'); ?></p>
			<h2><?php esc_html_e('Uw keuken verdient aandacht die verder gaat.', 'keuken-centrum'); ?></h2>
			<div class="why-pillars-list" role="tablist" aria-label="<?php esc_attr_e('Onze pijlers', 'keuken-centrum'); ?>">
				<?php foreach ($pillars as $index => $pillar) : ?>
					<button type="button" class="why-pillar<?php echo 0 === $index ? ' is-active' : ''; ?>" data-why-pillar data-why-title="<?php echo esc_attr($pillar['title']); ?>" data-why-copy="<?php echo esc_attr($pillar['copy']); ?>" data-why-image="<?php echo esc_url(kc_theme_img($pillar['image'])); ?>" aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>">
						<span>0<?php echo esc_html((string) ($index + 1)); ?></span><strong><?php echo esc_html($pillar['title']); ?></strong><i>↗</i>
					</button>
				<?php endforeach; ?>
			</div>
		</div>
		<aside class="why-scene-preview">
			<div class="why-preview-image"><img data-why-image src="<?php echo esc_url(kc_theme_img($pillars[0]['image'])); ?>" alt="" loading="lazy" width="800" height="1000"></div>
			<div class="why-preview-content"><p data-why-title><?php echo esc_html($pillars[0]['title']); ?></p><p data-why-copy><?php echo esc_html($pillars[0]['copy']); ?></p></div>
			<?php if ($oak) : ?><img class="why-oak-swatch" src="<?php echo esc_url($oak); ?>" alt="" loading="lazy" width="160" height="160"><?php endif; ?>
		</aside>
	</div>
</section>
