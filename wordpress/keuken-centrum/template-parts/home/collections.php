<?php
/**
 * Home style collections gallery — React Collections parity.
 *
 * @package Keuken_Centrum
 */

$collections = [
	[
		'number'      => '01',
		'label'       => 'MODERNE COLLECTIE',
		'title'       => 'Modern Wonen',
		'descriptor'  => 'Architecturaal · Minimaal · Tijdloos',
		'description' => 'Slanke lijnen en functionele elegantie voor het hedendaagse leven.',
		'image'       => kc_theme_img('collections/modern-base.webp') ?: kc_theme_img('collections/modern.jpg'),
	],
	[
		'number'      => '02',
		'label'       => 'KLASSIEKE COLLECTIE',
		'title'       => 'Klassieke Elegantie',
		'descriptor'  => 'Warm · Elegant · Verfijnd',
		'description' => 'Tijdloze proporties en rijke materialen die generaties meegaan.',
		'image'       => kc_theme_img('collections/klassiek-base.webp') ?: kc_theme_img('collections/klassiek.jpg'),
	],
	[
		'number'      => '03',
		'label'       => 'LANDELIJKE COLLECTIE',
		'title'       => 'Landelijk Erfgoed',
		'descriptor'  => 'Natuurlijk · Authentiek · Uitnodigend',
		'description' => 'Warme texturen en ambachtelijke details voor een thuis gevoel.',
		'image'       => kc_theme_img('collections/landelijk-base.webp') ?: kc_theme_img('collections/landelijk.jpg'),
	],
	[
		'number'      => '04',
		'label'       => 'INDUSTRIËLE COLLECTIE',
		'title'       => 'Industrieel Atelier',
		'descriptor'  => 'Krachtig · Karaktervol · Hedendaags',
		'description' => 'Rauwe materialen en grafische vormen met een eigenzinnig karakter.',
		'image'       => kc_theme_img('collections/industrieel-base.webp') ?: kc_theme_img('collections/industrieel.jpg'),
	],
];

$concrete = kc_theme_img('mat-concrete.jpg');
?>
<section class="section-shell collections-section" id="collections">
	<?php if ($concrete) : ?>
		<div class="collections-section__texture" style="background-image:url('<?php echo esc_url($concrete); ?>');" aria-hidden="true"></div>
	<?php endif; ?>
	<div class="collections-section__veil" aria-hidden="true"></div>

	<div class="site-shell collections-section__intro" data-reveal>
		<div class="section-label-row">
			<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Onze Collecties', 'keuken-centrum'); ?></p>
		</div>
		<h2 class="section-title">
			<?php esc_html_e('Ontdek uw', 'keuken-centrum'); ?>
			<em class="text-accent"><?php esc_html_e('Droomkeuken', 'keuken-centrum'); ?></em>
		</h2>
		<p class="collections-section__lede">
			<?php esc_html_e('Vier zorgvuldig samengestelde stijlwerelden, elk met een unieke architectonische taal van materiaal, compositie en sfeer.', 'keuken-centrum'); ?>
		</p>
		<a class="btn btn--primary btn--pill" href="<?php echo esc_url(get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens')); ?>">
			<?php esc_html_e('Alle keukens bekijken', 'keuken-centrum'); ?>
		</a>
	</div>

	<div class="collections-gallery" data-collections-gallery>
		<div class="collections-gallery__track">
			<?php foreach ($collections as $item) : ?>
				<?php if (empty($item['image'])) { continue; } ?>
				<article class="style-card">
					<div class="style-card__media">
						<img src="<?php echo esc_url($item['image']); ?>" alt="<?php echo esc_attr($item['title']); ?>" loading="lazy" decoding="async" />
						<span class="style-card__fade" aria-hidden="true"></span>
						<div class="style-card__badges">
							<div>
								<span class="style-card__number"><?php echo esc_html($item['number']); ?></span>
								<span class="style-card__label"><?php echo esc_html($item['label']); ?></span>
							</div>
							<span class="style-card__tag"><?php esc_html_e('Geselecteerd', 'keuken-centrum'); ?></span>
						</div>
					</div>
					<div class="style-card__body">
						<h3 class="style-card__title"><?php echo esc_html($item['title']); ?></h3>
						<p class="style-card__descriptor"><?php echo esc_html($item['descriptor']); ?></p>
						<p class="style-card__description"><?php echo esc_html($item['description']); ?></p>
					</div>
					<a class="style-card__cta" href="#showroom">
						<span><?php esc_html_e('Ontdek stijl', 'keuken-centrum'); ?></span>
						<span class="style-card__cta-badge" aria-hidden="true">→</span>
					</a>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
