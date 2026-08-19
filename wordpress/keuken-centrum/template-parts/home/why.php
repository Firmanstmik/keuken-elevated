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
	'settings' => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 12.88v-1.76c0-1.04.85-1.9 1.9-1.9 1.81 0 2.55-1.28 1.64-2.85-.52-.9-.21-2.07.7-2.59l1.73-.99c.79-.47 1.81-.19 2.28.6l.11.19c.9 1.57 2.38 1.57 3.29 0l.11-.19c.47-.79 1.49-1.07 2.28-.6l1.73.99c.91.52 1.22 1.69.7 2.59-.91 1.57-.17 2.85 1.64 2.85 1.04 0 1.9.85 1.9 1.9v1.76c0 1.04-.85 1.9-1.9 1.9-1.81 0-2.55 1.28-1.64 2.85.52.91.21 2.07-.7 2.59l-1.73.99c-.79.47-1.81.19-2.28-.6l-.11-.19c-.9-1.57-2.38-1.57-3.29 0l.11.19c-.47.79-1.49 1.07-2.28.6l-1.73-.99a1.899 1.899 0 0 1-.7-2.59c.91-1.57.17-2.85-1.64-2.85-1.05 0-1.9-.86-1.9-1.9Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	'heart'    => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20"><path d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	'diamond'  => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20"><path d="M16.29 2.15H7.7C6 2.15 5.25 3 4.79 4.04L2.23 9.8c-.46 1.04-.21 2.59.56 3.43l6.86 7.54c1.3 1.42 3.42 1.42 4.71 0l6.85-7.55c.77-.85 1.02-2.39.55-3.43L19.2 4.03c-.46-1.03-1.21-1.88-2.91-1.88ZM3.5 8h17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
	'people'   => '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="20" height="20"><path d="M18 7.16a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58A2.589 2.589 0 0 1 18 7.16ZM16.97 14.44c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 7.16c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58C8.64 3.15 7.49 2 6.06 2a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM7 14.44c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M12 14.63a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.09 17.78c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
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

		<div class="why-scene__header">
			<div class="why-scene__eyebrow-row" data-reveal data-why-motion="eyebrow">
				<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
				<p class="why-scene__eyebrow"><?php esc_html_e('Onze belofte', 'keuken-centrum'); ?></p>
			</div>
			<h2 class="why-scene__title" data-reveal data-why-motion="title">
				<?php echo wp_kses(__('Waarom Kiest U <em>Voor Ons?</em>', 'keuken-centrum'), ['em' => []]); ?>
			</h2>
		</div>

		<div class="why-scene__grid">
			<div class="why-scene__content">
				<p class="why-scene__list-label"><?php esc_html_e('Wat wij bieden', 'keuken-centrum'); ?></p>

				<div class="why-pillars-list" role="tablist" aria-label="<?php esc_attr_e('Onze pijlers', 'keuken-centrum'); ?>">
					<?php foreach ($pillars as $index => $pillar) : ?>
						<button
							type="button"
							class="why-pillar-card<?php echo 0 === $index ? ' is-active' : ''; ?>"
							data-reveal
							data-why-motion="card"
							data-why-pillar
							data-why-id="<?php echo esc_attr($pillar['id']); ?>"
							data-pillar-number="<?php echo esc_attr($pillar['number']); ?>"
							data-pillar-title="<?php echo esc_attr($pillar['title']); ?>"
							data-pillar-copy="<?php echo esc_attr($pillar['description']); ?>"
							data-pillar-image="<?php echo esc_url($pillar['image']); ?>"
							data-pillar-image-alt="<?php echo esc_attr($pillar['image_alt']); ?>"
							data-pillar-accent="<?php echo esc_attr($pillar['accent']); ?>"
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
											<?php echo wp_kses($icon_map[$pillar['icon']] ?? '', ['svg' => ['viewBox' => true, 'fill' => true, 'aria-hidden' => true, 'width' => true, 'height' => true], 'path' => ['d' => true, 'stroke' => true, 'stroke-width' => true, 'stroke-linecap' => true, 'stroke-linejoin' => true, 'stroke-miterlimit' => true], 'circle' => ['cx' => true, 'cy' => true, 'r' => true, 'fill' => true, 'stroke' => true, 'stroke-width' => true]]); ?>
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
								<span class="why-pillar-card__mobile-media-inner">
									<?php if (! empty($pillar['image'])) : ?>
										<img src="<?php echo esc_url($pillar['image']); ?>" alt="" loading="lazy" width="720" height="520" />
									<?php endif; ?>
								</span>
							</span>
						</button>
					<?php endforeach; ?>
				</div>

				<div class="why-scene__actions" data-reveal data-why-motion="cta">
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

			<aside class="why-stage">
				<div class="why-stage__sticky">
					<div class="why-stage__glow" aria-hidden="true"></div>
					<div class="why-stage__frame" data-reveal data-why-motion="frame">
						<div class="why-stage__viewport">
							<?php if (! empty($active['image'])) : ?>
								<img class="why-stage__image is-active" data-why-image src="<?php echo esc_url($active['image']); ?>" alt="<?php echo esc_attr($active['image_alt']); ?>" width="900" height="810" />
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
								<div class="why-stage__caption-copy" data-why-caption>
									<p class="why-stage__eyebrow">
										<?php esc_html_e('Kenmerk', 'keuken-centrum'); ?>
										<span data-why-feature-index>1</span>
									</p>
									<p class="why-stage__title" data-why-title><?php echo esc_html($active['title']); ?></p>
								</div>

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

					<div class="why-stage__seal" data-reveal data-why-motion="seal" aria-label="<?php esc_attr_e('45 plus jaar ervaring', 'keuken-centrum'); ?>">
						<div class="why-stage__seal-float">
							<span class="why-stage__seal-value">45+</span>
							<span class="why-stage__seal-label"><?php esc_html_e('Jaar Ervaring', 'keuken-centrum'); ?></span>
						</div>
					</div>

					<div class="why-stage__swatches" data-reveal data-why-motion="swatches" aria-label="<?php esc_attr_e('Materiaalvoorbeelden', 'keuken-centrum'); ?>">
						<?php foreach ($swatches as $swatch) : ?>
							<div class="why-stage__swatch">
								<?php if (! empty($swatch['image'])) : ?>
									<img src="<?php echo esc_url($swatch['image']); ?>" alt="" loading="lazy" width="260" height="160" />
								<?php endif; ?>
								<span><?php echo esc_html($swatch['label']); ?></span>
							</div>
						<?php endforeach; ?>
					</div>
				</div>
			</aside>
		</div>
	</div>
</section>
