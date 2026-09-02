<?php
/**
 * Home style collections gallery — React Collections visual twin.
 *
 * @package Keuken_Centrum
 */

$showroom_url = home_url('/#showroom');
$collections_data = function_exists( 'kc_home_collections_data' ) ? kc_home_collections_data() : null;
$archive_url  = $collections_data['cta_url'] ?? ( get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens') );
$collections  = $collections_data['items'] ?? ( function_exists( 'kc_official_collection_items' ) ? kc_official_collection_items() : [] );
$col_eyebrow    = $collections_data['eyebrow'] ?? 'Onze Collecties';
$col_heading    = $collections_data['heading'] ?? 'Ontdek uw';
$col_heading_em = $collections_data['heading_em'] ?? 'Droomkeuken';
$col_lede       = $collections_data['lede'] ?? 'Vier zorgvuldig samengestelde stijlwerelden, elk met een unieke architectonische taal van materiaal, compositie en sfeer.';
$col_cta        = $collections_data['cta_label'] ?? 'Alle keukens bekijken';

$concrete = kc_theme_img('mat-concrete.jpg');
?>
<section class="section-shell collections-section collections-section--react" id="collections">
	<?php if ($concrete) : ?>
		<div class="collections-section__texture" style="background-image:url('<?php echo esc_url($concrete); ?>');" aria-hidden="true"></div>
	<?php endif; ?>
	<div class="collections-section__veil" aria-hidden="true"></div>
	<div class="collections-section__ambient" aria-hidden="true"></div>

	<div class="site-shell collections-section__header-shell">
		<div class="collections-section__chapter-row">
			<?php kc_section_chapter('06', __('Collecties', 'keuken-centrum'), false, 10, 'chapter-mark--collections'); ?>
		</div>
		<div class="collections-section__intro" data-reveal>
			<div class="section-label-row">
				<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
				<span class="section-eyebrow section-eyebrow--gold collections-section__eyebrow"><?php echo esc_html( $col_eyebrow ); ?></span>
			</div>
			<h2 class="section-title collections-section__title">
				<?php echo esc_html( $col_heading ); ?>
				<em class="text-accent"><?php echo esc_html( $col_heading_em ); ?></em>
			</h2>
			<p class="collections-section__lede">
				<?php echo esc_html( $col_lede ); ?>
			</p>
			<a class="premium-pill-button premium-pill-button--blue premium-pill-button--sm" href="<?php echo esc_url($archive_url); ?>">
				<span class="premium-pill-button__label"><?php echo esc_html( $col_cta ); ?></span>
				<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
			</a>
		</div>
	</div>

	<div class="collections-gallery" data-collections-gallery>
		<div class="collections-gallery__edge collections-gallery__edge--left" aria-hidden="true"></div>
		<div class="collections-gallery__edge collections-gallery__edge--right" aria-hidden="true"></div>

		<div class="collections-gallery__viewport" data-collections-viewport>
			<div class="collections-gallery__track" data-collections-track>
				<?php for ($set = 0; $set < 3; $set++) : ?>
					<?php foreach ($collections as $item) : ?>
						<?php
						$card_alt = (string) ( $item['image_alt'] ?? $item['title'] ?? '' );
						$brand_tag = trim( (string) ( $item['brand_tag'] ?? '' ) );
						?>
						<div class="collections-gallery__slide" data-collections-slide<?php echo $set > 0 ? ' aria-hidden="true"' : ''; ?>>
							<article class="collection-gallery-card">
								<div class="collection-gallery-card__media">
									<img src="<?php echo esc_url($item['image']); ?>" alt="<?php echo 0 === $set ? esc_attr($card_alt) : ''; ?>" loading="lazy" decoding="async" draggable="false" />
									<div class="collection-gallery-card__media-fade" aria-hidden="true"></div>
									<div class="collection-gallery-card__media-hover-fade" aria-hidden="true"></div>
									<div class="collection-gallery-card__shine" aria-hidden="true"></div>

									<div class="collection-gallery-card__badges">
										<div>
											<span class="collection-gallery-card__number"><?php echo esc_html($item['number']); ?></span>
											<span class="collection-gallery-card__label"><?php echo esc_html($item['label']); ?></span>
										</div>
										<?php if ($brand_tag) : ?>
											<span class="collection-gallery-card__tag"><?php echo esc_html($brand_tag); ?></span>
										<?php else : ?>
											<span class="collection-gallery-card__tag"><?php esc_html_e('Geselecteerd', 'keuken-centrum'); ?></span>
										<?php endif; ?>
									</div>
								</div>

								<div class="collection-gallery-card__body">
									<h3 class="collection-gallery-card__title"><?php echo esc_html($item['title']); ?></h3>
									<p class="collection-gallery-card__descriptor"><?php echo esc_html($item['descriptor']); ?></p>
									<p class="collection-gallery-card__description"><?php echo esc_html($item['description']); ?></p>
									<div class="collection-gallery-card__rule" aria-hidden="true"></div>
								</div>

								<div class="collection-gallery-card__cta-wrap">
									<a class="collection-gallery-card__cta" href="<?php echo esc_url($showroom_url); ?>">
										<span><?php esc_html_e('Ontdek stijl', 'keuken-centrum'); ?></span>
										<span class="collection-gallery-card__cta-badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
									</a>
								</div>
							</article>
						</div>
					<?php endforeach; ?>
				<?php endfor; ?>
			</div>
		</div>
	</div>
</section>
