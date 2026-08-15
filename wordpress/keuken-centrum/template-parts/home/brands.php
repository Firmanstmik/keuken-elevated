<?php
/**
 * Home brands section — React Brands parity.
 *
 * @package Keuken_Centrum
 */
$scene = kc_theme_img('brands/brands-dark-bg.webp');
$brands = [
	['name' => 'LEICHT', 'logo' => 'Leicht_Logo.webp', 'image' => 'brands/leicht-hero.webp', 'country' => 'Duitsland', 'copy' => 'Architectonische keukens met een tijdloze precisie.'],
	['name' => 'AI KÜCHEN', 'logo' => 'aiKuchen_Logo.webp', 'image' => 'brands/aikuchen-hero.webp', 'country' => 'Duitsland', 'copy' => 'Intelligent design voor het leven van nu.'],
	['name' => 'Nobilia', 'logo' => 'Nobilia_Logo.webp', 'image' => 'brands/nobilia-hero.webp', 'country' => 'Duitsland', 'copy' => 'Doordachte kwaliteit, verrassend persoonlijk.'],
	['name' => 'Zampieri', 'logo' => 'Zampieri_Logo.webp', 'image' => 'brands/zampieri-hero.webp', 'country' => 'Italië', 'copy' => 'Italiaanse finesse in iedere lijn en textuur.'],
	['name' => 'Cucinesse', 'logo' => 'Cucinesse_Logo_Official.png', 'image' => 'brands/cucinesse-hero.webp', 'country' => 'Italië', 'copy' => 'Een keuken die aanvoelt als maatwerk.'],
];
$marquee = ['Leicht_Logo.webp', 'aiKuchen_Logo.webp', 'Nobilia_Logo.webp', 'Zampieri_Logo.webp', 'Cucinesse_Logo_Official.png', 'Miele_Logo.webp', 'Gaggenau_Logo.webp', 'Siemens_Logo.webp', 'Bora_Logo.webp', 'Quooker_Logo.webp'];
?>
<section class="brands-scene" id="brands"<?php echo $scene ? ' style="--brands-scene:url(' . esc_url($scene) . ')"' : ''; ?>>
	<div class="site-shell">
		<div class="brands-carousel-intro">
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Geselecteerde merken', 'keuken-centrum'); ?></p>
			<h2><?php esc_html_e('Een collectie met een eigen handschrift.', 'keuken-centrum'); ?></h2>
		</div>
		<div class="brands-carousel" data-brands-carousel>
			<div class="brands-carousel-stage">
				<?php foreach ($brands as $index => $brand) : ?>
					<article class="brands-carousel-slide<?php echo 0 === $index ? ' is-active' : ''; ?>" data-brands-slide aria-hidden="<?php echo 0 === $index ? 'false' : 'true'; ?>">
						<img src="<?php echo esc_url(kc_theme_img($brand['image'])); ?>" alt="" loading="<?php echo 0 === $index ? 'eager' : 'lazy'; ?>" width="1200" height="760">
					</article>
				<?php endforeach; ?>
				<div class="brands-carousel-copy">
					<p class="brands-carousel-country" data-brands-country><?php echo esc_html($brands[0]['country']); ?></p>
					<img class="brands-carousel-logo" data-brands-logo src="<?php echo esc_url(kc_theme_img($brands[0]['logo'])); ?>" alt="<?php echo esc_attr($brands[0]['name']); ?>" width="180" height="64">
					<h3><?php esc_html_e('Design dat blijft.', 'keuken-centrum'); ?></h3>
					<p data-brands-copy><?php echo esc_html($brands[0]['copy']); ?></p>
					<a class="btn btn--primary" href="<?php echo esc_url(home_url('/keukenmerken')); ?>"><?php esc_html_e('Ontdek het merk', 'keuken-centrum'); ?></a>
				</div>
			</div>
			<div class="brands-carousel-footer">
				<div class="brands-carousel-dots" role="tablist" aria-label="<?php esc_attr_e('Kies een merk', 'keuken-centrum'); ?>">
					<?php foreach ($brands as $index => $brand) : ?>
						<button type="button" data-brands-dot data-brand-name="<?php echo esc_attr($brand['name']); ?>" data-brand-country="<?php echo esc_attr($brand['country']); ?>" data-brand-copy="<?php echo esc_attr($brand['copy']); ?>" data-brand-logo="<?php echo esc_url(kc_theme_img($brand['logo'])); ?>" aria-label="<?php echo esc_attr($brand['name']); ?>" aria-selected="<?php echo 0 === $index ? 'true' : 'false'; ?>" class="<?php echo 0 === $index ? 'is-active' : ''; ?>"><span></span></button>
					<?php endforeach; ?>
				</div>
				<div class="brands-carousel-controls">
					<button type="button" data-brands-prev aria-label="<?php esc_attr_e('Vorig merk', 'keuken-centrum'); ?>">←</button>
					<span data-brands-count>01 / 05</span>
					<button type="button" data-brands-next aria-label="<?php esc_attr_e('Volgend merk', 'keuken-centrum'); ?>">→</button>
				</div>
			</div>
		</div>
	</div>
	<div class="brands-marquee" aria-label="<?php esc_attr_e('Onze keuken- en apparatuurmerken', 'keuken-centrum'); ?>"><div class="brands-marquee-track">
		<?php foreach (array_merge($marquee, $marquee) as $logo) : ?><img src="<?php echo esc_url(kc_theme_img($logo)); ?>" alt="" loading="lazy" width="130" height="48"><?php endforeach; ?>
	</div></div>
</section>
