<?php
/**
 * Home why section — React WhyWithUsSection parity.
 *
 * @package Keuken_Centrum
 */

$pillars = [
	[
		'id'          => 'vakmanschap',
		'number'      => '01',
		'title'       => __('Europees Vakmanschap', 'keuken-centrum'),
		'description' => __('Elk detail van uw keuken wordt met uiterste precisie en vakmanschap vervaardigd door onze Europese producenten.', 'keuken-centrum'),
		'image'       => kc_theme_img('why/why-vakmanschap.webp'),
		'image_alt'   => __('Europees vakmanschap met precisie en kwaliteit', 'keuken-centrum'),
		'accent'      => __('Precisie', 'keuken-centrum'),
		'icon'        => 'settings',
	],
	[
		'id'          => 'persoonlijk',
		'number'      => '02',
		'title'       => __('Persoonlijke Aanpak', 'keuken-centrum'),
		'description' => __('Onze adviseurs luisteren naar uw wensen en vertalen deze naar een uniek keukenontwerp dat perfect aansluit bij uw woning.', 'keuken-centrum'),
		'image'       => kc_theme_img('why/why-persoonlijk.webp'),
		'image_alt'   => __('Persoonlijke consultatie in de showroom', 'keuken-centrum'),
		'accent'      => __('Begeleiding', 'keuken-centrum'),
		'icon'        => 'heart',
	],
	[
		'id'          => 'materialen',
		'number'      => '03',
		'title'       => __('Luxe & Duurzame Materialen', 'keuken-centrum'),
		'description' => __('Voor uw keuken gebruiken we alleen geselecteerde premium materialen, van Carrara marmer tot gerookt eiken.', 'keuken-centrum'),
		'image'       => kc_theme_img('why/why-materialen.webp'),
		'image_alt'   => __('Premium materialen met marmer en eiken afwerkingen', 'keuken-centrum'),
		'accent'      => __('Afwerking', 'keuken-centrum'),
		'icon'        => 'diamond',
	],
	[
		'id'          => 'service',
		'number'      => '04',
		'title'       => __('Premium Service & Montage', 'keuken-centrum'),
		'description' => __('Van 3D-ontwerp tot vakkundige montage bij u thuis: wij begeleiden en ontzorgen u volledig door het gehele proces.', 'keuken-centrum'),
		'image'       => kc_theme_img('why/why-service.webp'),
		'image_alt'   => __('Vakkundig gemonteerde keuken bij de klant thuis', 'keuken-centrum'),
		'accent'      => __('Ontzorging', 'keuken-centrum'),
		'icon'        => 'people',
	],
];

$swatches = [
	[
		'label' => __('Carrara', 'keuken-centrum'),
		'image' => kc_theme_img('why/why-materialen.webp'),
	],
	[
		'label' => __('Gerookt eiken', 'keuken-centrum'),
		'image' => kc_theme_img('mat-oak.jpg'),
	],
	[
		'label' => __('Showroom', 'keuken-centrum'),
		'image' => kc_theme_img('why/why-service.webp'),
	],
];

$icon_map = [
	'settings' => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z" stroke="currentColor" stroke-width="1.45"/><path d="M4.5 13.1v-2.2l2-.4c.14-.46.33-.9.58-1.31L5.95 7.5l1.55-1.55 1.7 1.12c.41-.24.85-.43 1.31-.57l.39-2h2.2l.4 2c.46.14.9.33 1.31.57l1.7-1.12 1.55 1.55-1.12 1.69c.24.41.43.85.57 1.31l2 .4v2.2l-2 .39c-.14.46-.33.9-.57 1.31l1.12 1.7-1.55 1.55-1.7-1.12c-.41.24-.85.43-1.31.58l-.4 2h-2.2l-.39-2a6.9 6.9 0 0 1-1.31-.58l-1.7 1.12-1.55-1.55 1.13-1.7a6.9 6.9 0 0 1-.58-1.31l-2-.39Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/></svg>',
	'heart'    => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20.25 4.7 13.2A4.72 4.72 0 0 1 11.9 7.3L12 7.4l.1-.1a4.72 4.72 0 0 1 7.2 5.9L12 20.25Z" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	'diamond'  => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.7 4.75h6.6l4.35 5.4L12 19.25l-7.65-9.1 4.35-5.4Z" stroke="currentColor" stroke-width="1.45" stroke-linejoin="round"/><path d="M8.65 4.75 12 10.15l3.35-5.4M4.35 10.15h15.3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	'people'   => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8.25 11.1a2.85 2.85 0 1 0 0-5.7 2.85 2.85 0 0 0 0 5.7ZM15.85 10.5a2.45 2.45 0 1 0 0-4.9 2.45 2.45 0 0 0 0 4.9ZM3.95 18.25a4.85 4.85 0 0 1 8.6-2.96M13.15 17.45a4.1 4.1 0 0 1 6.9.8" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"/></svg>',
];

$active         = $pillars[0];
$concrete       = kc_theme_img('mat-concrete.jpg');
$consultation   = kc_get_option('consultation_cta_url', home_url('/contact'));
$reviews_count  = kc_get_option('google_reviews_count', '150');
$founded_year   = kc_get_option('founded_year', '1978');
$cbw_logo       = home_url('/wp-content/uploads/cbw.webp');
?>
<section class="why-scene why-scene--react section-shell" id="why-with-us"<?php echo $concrete ? ' style="--why-concrete:url(' . esc_url($concrete) . ')"' : ''; ?> data-why-pillars>
	<div class="site-shell why-scene__inner">
		<?php kc_section_chapter('02', __('Waarom wij', 'keuken-centrum')); ?>

		<div class="why-scene__header" data-reveal>
			<div class="section-label-row">
				<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
				<p class="section-eyebrow"><?php esc_html_e('Onze belofte', 'keuken-centrum'); ?></p>
			</div>
			<h2 class="section-title why-scene__title">
				<?php echo wp_kses(__('Waarom Kiest U <em>Voor Ons?</em>', 'keuken-centrum'), ['em' => []]); ?>
			</h2>
		</div>

		<div class="why-scene__grid">
			<div class="why-scene__content" data-reveal>
				<p class="why-scene__list-label"><?php esc_html_e('Wat wij bieden', 'keuken-centrum'); ?></p>

				<div class="why-pillars-list" role="tablist" aria-label="<?php esc_attr_e('Onze pijlers', 'keuken-centrum'); ?>">
					<?php foreach ($pillars as $index => $pillar) : ?>
						<button
							type="button"
							class="why-pillar-card<?php echo 0 === $index ? ' is-active' : ''; ?>"
							data-why-pillar
							data-why-id="<?php echo esc_attr($pillar['id']); ?>"
							data-why-number="<?php echo esc_attr($pillar['number']); ?>"
							data-why-title="<?php echo esc_attr($pillar['title']); ?>"
							data-why-copy="<?php echo esc_attr($pillar['description']); ?>"
							data-why-image="<?php echo esc_url($pillar['image']); ?>"
							data-why-image-alt="<?php echo esc_attr($pillar['image_alt']); ?>"
							data-why-accent="<?php echo esc_attr($pillar['accent']); ?>"
							aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>"
						>
							<span class="why-pillar-card__strip" aria-hidden="true">
								<?php if (! empty($pillar['image'])) : ?>
									<img src="<?php echo esc_url($pillar['image']); ?>" alt="" loading="lazy" width="144" height="216" />
								<?php endif; ?>
							</span>

							<span class="why-pillar-card__body">
								<span class="why-pillar-card__count">
									<span class="why-pillar-card__number"><?php echo esc_html($pillar['number']); ?></span>
									<span class="why-pillar-card__line" aria-hidden="true"></span>
								</span>

								<span class="why-pillar-card__copy">
									<span class="why-pillar-card__heading">
										<span class="why-pillar-card__icon" aria-hidden="true">
											<?php echo wp_kses($icon_map[$pillar['icon']] ?? '', ['svg' => ['viewBox' => true, 'fill' => true, 'aria-hidden' => true], 'path' => ['d' => true, 'stroke' => true, 'stroke-width' => true, 'stroke-linecap' => true, 'stroke-linejoin' => true], 'circle' => ['cx' => true, 'cy' => true, 'r' => true, 'fill' => true, 'stroke' => true, 'stroke-width' => true]]); ?>
										</span>
										<span class="why-pillar-card__title-wrap">
											<span class="why-pillar-card__accent"><?php echo esc_html($pillar['accent']); ?></span>
											<span class="why-pillar-card__title"><?php echo esc_html($pillar['title']); ?></span>
										</span>
									</span>
									<span class="why-pillar-card__desc"><?php echo esc_html($pillar['description']); ?></span>
								</span>
							</span>

							<span class="why-pillar-card__mobile-media" aria-hidden="true">
								<?php if (! empty($pillar['image'])) : ?>
									<img src="<?php echo esc_url($pillar['image']); ?>" alt="" loading="lazy" width="720" height="520" />
								<?php endif; ?>
							</span>
						</button>
					<?php endforeach; ?>
				</div>

				<div class="why-scene__actions" data-reveal>
					<a class="premium-pill-button premium-pill-button--blue premium-pill-button--xl premium-pill-button--rounded" href="<?php echo esc_url($consultation); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Plan uw showroombezoek', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><span class="premium-pill-button__icon">→</span></span>
					</a>

					<div class="why-scene__proofs" aria-label="<?php esc_attr_e('Vertrouwenssignalen', 'keuken-centrum'); ?>">
						<img class="why-scene__cbw" src="<?php echo esc_url($cbw_logo); ?>" alt="<?php esc_attr_e('CBW erkend', 'keuken-centrum'); ?>" loading="lazy" width="120" height="36" />
						<span class="why-scene__proof-divider" aria-hidden="true"></span>
						<p class="why-scene__proof">
							<strong><?php echo esc_html($reviews_count); ?>+</strong>
							<?php esc_html_e('Google reviews', 'keuken-centrum'); ?>
						</p>
						<span class="why-scene__proof-divider" aria-hidden="true"></span>
						<p class="why-scene__proof">
							<?php esc_html_e('Showroom in Utrecht sinds', 'keuken-centrum'); ?>
							<strong><?php echo esc_html($founded_year); ?></strong>
						</p>
					</div>
				</div>
			</div>

			<aside class="why-stage" data-reveal>
				<div class="why-stage__glow" aria-hidden="true"></div>
				<div class="why-stage__frame">
					<div class="why-stage__viewport">
						<?php if (! empty($active['image'])) : ?>
							<img class="why-stage__image" data-why-image src="<?php echo esc_url($active['image']); ?>" alt="<?php echo esc_attr($active['image_alt']); ?>" loading="lazy" width="900" height="1000" />
						<?php endif; ?>
						<div class="why-stage__scrim" aria-hidden="true"></div>
						<div class="why-stage__wash" aria-hidden="true"></div>

						<span class="why-stage__corner why-stage__corner--tl" aria-hidden="true"></span>
						<span class="why-stage__corner why-stage__corner--tr" aria-hidden="true"></span>
						<span class="why-stage__corner why-stage__corner--bl" aria-hidden="true"></span>
						<span class="why-stage__corner why-stage__corner--br" aria-hidden="true"></span>

						<div class="why-stage__meta">
							<span class="why-stage__accent" data-why-accent><?php echo esc_html($active['accent']); ?></span>
							<p class="why-stage__count">
								<span data-why-number><?php echo esc_html($active['number']); ?></span>
								<span>/ 04</span>
							</p>
						</div>

						<div class="why-stage__caption">
							<p class="why-stage__eyebrow">
								<?php esc_html_e('Kenmerk', 'keuken-centrum'); ?>
								<span data-why-feature-index>1</span>
							</p>
							<p class="why-stage__title" data-why-title><?php echo esc_html($active['title']); ?></p>

							<div class="why-stage__progress" aria-hidden="true">
								<?php foreach ($pillars as $index => $pillar) : ?>
									<span class="why-stage__progress-track">
										<span class="why-stage__progress-fill<?php echo 0 === $index ? ' is-active' : ''; ?>" data-why-progress="<?php echo esc_attr($pillar['id']); ?>"></span>
									</span>
								<?php endforeach; ?>
							</div>
						</div>
					</div>
				</div>

				<div class="why-stage__seal" aria-label="<?php esc_attr_e('45 plus jaar ervaring', 'keuken-centrum'); ?>">
					<span class="why-stage__seal-value">45+</span>
					<span class="why-stage__seal-label"><?php esc_html_e('Jaar Ervaring', 'keuken-centrum'); ?></span>
				</div>

				<div class="why-stage__swatches" aria-label="<?php esc_attr_e('Materiaalvoorbeelden', 'keuken-centrum'); ?>">
					<?php foreach ($swatches as $swatch) : ?>
						<div class="why-stage__swatch">
							<?php if (! empty($swatch['image'])) : ?>
								<img src="<?php echo esc_url($swatch['image']); ?>" alt="" loading="lazy" width="260" height="160" />
							<?php endif; ?>
							<span><?php echo esc_html($swatch['label']); ?></span>
						</div>
					<?php endforeach; ?>
				</div>
			</aside>
		</div>
	</div>
</section>
