<?php
/**
 * Home experience / kitchen inspiration — React Experience parity.
 *
 * @package Keuken_Centrum
 */

$cards = [
	[
		'number'      => '01',
		'featured'    => true,
		'tag'         => 'Signature collectie',
		'title'       => 'Design Keukens',
		'description' => 'Architecturale keukens met verfijnde materialen en tijdloze verhoudingen.',
		'image'       => kc_theme_img('experience/design.webp'),
		'href'        => get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens'),
	],
	[
		'number'      => '02',
		'featured'    => false,
		'tag'         => 'Ontdek de collectie',
		'title'       => 'Moderne Keukens',
		'description' => 'Hedendaags wonen met slanke lijnen, warme texturen en intelligente indeling.',
		'image'       => kc_theme_img('experience/modern.webp'),
		'href'        => home_url('/#collections'),
	],
	[
		'number'      => '03',
		'featured'    => false,
		'tag'         => 'Ontdek de collectie',
		'title'       => 'Keukens voor elke prijs',
		'description' => 'Topkwaliteit en persoonlijk advies voor elk budget, zonder compromis.',
		'image'       => kc_theme_img('experience/budget.webp'),
		'href'        => home_url('/#consultation'),
	],
];
?>
<section class="section-shell section-shell--dark experience-section" id="experience">
	<div class="site-shell">
		<div class="experience-header" data-reveal>
			<div class="experience-header__copy">
				<div class="section-label-row">
					<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
					<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Keukeninspiratie', 'keuken-centrum'); ?></p>
				</div>
				<h2 class="section-title section-title--light experience-title">
					<?php esc_html_e('Eén plaats voor', 'keuken-centrum'); ?>
					<em><?php esc_html_e('al uw wensen', 'keuken-centrum'); ?></em>
				</h2>
				<p class="experience-lede">
					<?php esc_html_e('Van architecturaal design tot slimme luxe: ontdek een keukenwereld die zorgvuldig wordt afgestemd op uw ruimte, smaak en manier van leven.', 'keuken-centrum'); ?>
				</p>
			</div>
			<aside class="experience-trust" aria-label="<?php esc_attr_e('Persoonlijk samengesteld', 'keuken-centrum'); ?>">
				<span class="experience-trust__label"><?php esc_html_e('Persoonlijk samengesteld', 'keuken-centrum'); ?></span>
				<p class="experience-trust__text">
					<?php esc_html_e('Elke collectie is een startpunt. In de showroom verfijnen we indeling, materialen en apparatuur tot een keuken die bij u past.', 'keuken-centrum'); ?>
				</p>
			</aside>
		</div>

		<div class="experience-grid">
			<?php foreach ($cards as $card) : ?>
				<?php if (empty($card['image'])) { continue; } ?>
				<article class="experience-card<?php echo ! empty($card['featured']) ? ' experience-card--featured' : ''; ?>" data-reveal>
					<a class="experience-card__link" href="<?php echo esc_url($card['href']); ?>">
						<img class="experience-card__media" src="<?php echo esc_url($card['image']); ?>" alt="<?php echo esc_attr($card['title']); ?>" loading="lazy" decoding="async" />
						<span class="experience-card__scrim" aria-hidden="true"></span>
						<span class="experience-card__frame" aria-hidden="true"></span>
						<span class="experience-card__number"><?php echo esc_html($card['number']); ?></span>
						<span class="experience-card__body">
							<span class="experience-card__tag"><?php echo esc_html($card['tag']); ?></span>
							<span class="experience-card__title"><?php echo esc_html($card['title']); ?></span>
							<span class="experience-card__desc"><?php echo esc_html($card['description']); ?></span>
							<span class="experience-card__cta">
								<span><?php esc_html_e('Verken collectie', 'keuken-centrum'); ?></span>
								<span class="experience-card__cta-badge" aria-hidden="true">→</span>
							</span>
						</span>
					</a>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
