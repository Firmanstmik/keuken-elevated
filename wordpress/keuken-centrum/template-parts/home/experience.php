<?php
/**
 * Home experience / kitchen inspiration — React Experience visual twin.
 *
 * @package Keuken_Centrum
 */

$experience = function_exists( 'kc_home_experience_data' ) ? kc_home_experience_data() : null;
$cards      = $experience['cards'] ?? [
	[
		'number'      => '01',
		'featured'    => true,
		'tag'         => 'Signature collectie',
		'kicker'      => 'Design Collectie',
		'title'       => 'Design Keukens',
		'description' => 'Architecturale keukens met verfijnde materialen en tijdloze verhoudingen.',
		'image'       => ( function_exists( 'kc_official_asset' ) ? kc_official_asset( 'leicht-keuken' ) : '' ) ?: kc_theme_img('experience/Design_keukens.webp') ?: kc_theme_img('experience/design.webp'),
		'href'        => get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens'),
	],
	[
		'number'      => '02',
		'featured'    => false,
		'tag'         => 'Ontdek de collectie',
		'kicker'      => 'Modern Wonen',
		'title'       => 'Moderne Keukens',
		'description' => 'Hedendaags wonen met slanke lijnen, warme texturen en intelligente indeling.',
		'image'       => ( function_exists( 'kc_official_asset' ) ? kc_official_asset( 'modern-showroom' ) : '' ) ?: kc_theme_img('experience/Modern_keukens.webp') ?: kc_theme_img('experience/modern.webp'),
		'href'        => home_url('/#collections'),
	],
	[
		'number'      => '03',
		'featured'    => false,
		'tag'         => 'Ontdek de collectie',
		'kicker'      => 'Slim Budget',
		'title'       => 'Keukens voor elke prijs',
		'description' => 'Topkwaliteit en persoonlijk advies voor elk budget, zonder compromis.',
		'image'       => ( function_exists( 'kc_official_asset' ) ? kc_official_asset( 'showroom-breed' ) : '' ) ?: kc_theme_img('experience/Keukens_voor_elke_prijs.webp') ?: kc_theme_img('experience/budget.webp'),
		'href'        => home_url('/consultation/'),
	],
];
$exp_eyebrow = $experience['eyebrow'] ?? 'Keukeninspiratie';
$exp_heading = $experience['heading'] ?? 'Eén plaats voor';
$exp_heading_em = $experience['heading_em'] ?? 'al uw wensen';
$exp_lede = $experience['lede'] ?? 'Van architecturaal design tot slimme luxe: ontdek een keukenwereld die zorgvuldig wordt afgestemd op uw ruimte, smaak en manier van leven.';
$scene       = kc_theme_img('brands/brands-dark-bg.webp');
$scene_layer = ( function_exists( 'kc_official_asset' ) ? kc_official_asset( 'modern-showroom' ) : '' ) ?: kc_theme_img('experience/Modern_keukens.webp') ?: kc_theme_img('experience/modern.webp');
$cbw_logo    = kc_theme_img( 'cbw-erkend.png' ) ?: kc_theme_img( 'cbw.svg' ) ?: kc_theme_img( 'cbw.webp' );
?>
<section class="section-shell section-shell--dark experience-section experience-section--react" id="experience"<?php echo $scene ? ' style="--experience-scene:url(' . esc_url($scene) . ')"' : ''; ?>>
	<div class="experience-section__scene" aria-hidden="true"></div>
	<div class="experience-section__veil" aria-hidden="true"></div>
	<?php if ($scene_layer) : ?>
		<div class="experience-section__kitchen-layer" aria-hidden="true">
			<img src="<?php echo esc_url($scene_layer); ?>" alt="" loading="lazy" decoding="async" />
		</div>
	<?php endif; ?>
	<div class="experience-section__ambient" aria-hidden="true"></div>
	<div class="experience-section__vignette" aria-hidden="true"></div>
	<div class="experience-section__grain" aria-hidden="true"></div>
	<div class="experience-section__hairline experience-section__hairline--top" aria-hidden="true"></div>
	<div class="experience-section__hairline experience-section__hairline--bottom" aria-hidden="true"></div>

	<div class="site-shell">
		<?php /* React: SectionChapter sits ABOVE the header grid, not inside copy */ ?>
		<?php kc_section_chapter('05', __('Inspiratie', 'keuken-centrum'), true); ?>
		<div class="experience-header" data-reveal>
			<div class="experience-header__copy">
				<div class="section-label-row">
					<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
					<p class="section-eyebrow section-eyebrow--gold"><?php echo esc_html( $exp_eyebrow ); ?></p>
				</div>
				<h2 class="section-title section-title--light experience-title">
					<?php echo esc_html( $exp_heading ); ?>
					<em><?php echo esc_html( $exp_heading_em ); ?></em>
				</h2>
				<p class="experience-lede">
					<?php echo esc_html( $exp_lede ); ?>
				</p>
			</div>
			<aside class="experience-trust" aria-label="<?php esc_attr_e('Persoonlijk samengesteld', 'keuken-centrum'); ?>">
				<span class="experience-trust__label"><?php esc_html_e('Persoonlijk samengesteld', 'keuken-centrum'); ?></span>
				<p class="experience-trust__text">
					<?php esc_html_e('Een keuken die klopt in uitstraling, materiaal en dagelijks gebruik.', 'keuken-centrum'); ?>
				</p>
				<span class="experience-trust__sub"><?php esc_html_e('Ontdek combinaties die onze ontwerpers dagelijks in de showroom samenstellen.', 'keuken-centrum'); ?></span>
				<div class="experience-trust__footer">
					<div class="experience-trust__brand">
						<?php if ($cbw_logo) : ?>
							<img src="<?php echo esc_url($cbw_logo); ?>" alt="<?php esc_attr_e('CBW erkend', 'keuken-centrum'); ?>" loading="lazy" decoding="async" />
						<?php endif; ?>
						<span><?php echo esc_html(sprintf(__('Vertrouwd sinds %s', 'keuken-centrum'), '1978')); ?></span>
					</div>
					<span class="experience-trust__pulse" aria-hidden="true"><span></span></span>
				</div>
			</aside>
		</div>

		<div class="experience-grid">
			<?php foreach ($cards as $card) : ?>
				<?php if (empty($card['image'])) { continue; } ?>
				<article class="experience-card<?php echo ! empty($card['featured']) ? ' experience-card--featured' : ''; ?>" data-reveal>
					<a class="experience-card__link" href="<?php echo esc_url($card['href']); ?>">
						<img class="experience-card__media" src="<?php echo esc_url($card['image']); ?>" alt="<?php echo esc_attr($card['title']); ?>" loading="lazy" decoding="async" />
						<span class="experience-card__scrim" aria-hidden="true"></span>
						<span class="experience-card__hover-scrim" aria-hidden="true"></span>
						<span class="experience-card__frame" aria-hidden="true">
							<span class="experience-card__corner experience-card__corner--tl"></span>
							<span class="experience-card__corner experience-card__corner--br"></span>
						</span>
						<span class="experience-card__hairline" aria-hidden="true"></span>
						<span class="experience-card__ambient" aria-hidden="true"></span>
						<span class="experience-card__number"><?php echo esc_html($card['number']); ?></span>
						<span class="experience-card__body">
							<span class="experience-card__tag"><?php echo esc_html($card['tag']); ?></span>
							<span class="experience-card__kicker"><?php echo esc_html($card['kicker']); ?></span>
							<span class="experience-card__title"><?php echo esc_html($card['title']); ?></span>
							<span class="experience-card__desc"><?php echo esc_html($card['description']); ?></span>
							<span class="experience-card__cta-wrap<?php echo ! empty($card['featured']) ? ' experience-card__cta-wrap--featured' : ' experience-card__cta-wrap--compact'; ?>">
								<span class="experience-card__cta">
									<span class="experience-card__cta-label"><?php esc_html_e('Verken collectie', 'keuken-centrum'); ?></span>
									<span class="experience-card__cta-badge" aria-hidden="true">→</span>
								</span>
							</span>
						</span>
					</a>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
