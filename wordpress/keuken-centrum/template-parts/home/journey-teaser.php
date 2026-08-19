<?php
/**
 * Home journey teaser — React ShowroomJourneySection parity.
 *
 * @package Keuken_Centrum
 */

$base     = kc_theme_img('configurator/klassiek-base.webp');
$base_sm  = kc_theme_img('configurator/klassiek-base-768.webp');
$scene    = kc_theme_img('brands/brands-dark-bg.webp');
$start_url = get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens');

$hotspot_positions = [
	['id' => 'front', 'x' => '63%', 'y' => '75%'],
	['id' => 'worktop', 'x' => '38%', 'y' => '60%'],
	['id' => 'sink', 'x' => '53%', 'y' => '59%'],
	['id' => 'appliances', 'x' => '88%', 'y' => '51%'],
	['id' => 'quooker', 'x' => '52%', 'y' => '50%'],
	['id' => 'bora', 'x' => '46%', 'y' => '54%'],
	['id' => 'handles', 'x' => '11%', 'y' => '60%'],
	['id' => 'lighting', 'x' => '49%', 'y' => '22%'],
];

$categories = [
	[
		'id'      => 'front',
		'label'   => __('Frontpaneel', 'keuken-centrum'),
		'options' => [
			['id' => 'cashmere', 'name' => __('Cashmere', 'keuken-centrum'), 'color' => '#C4B49A', 'description' => __('Warme greige met zachte matte afwerking', 'keuken-centrum')],
			['id' => 'matte-black', 'name' => __('Mat zwart', 'keuken-centrum'), 'color' => '#1A1A1A', 'description' => __('Ultramat gelakt in diep zwart', 'keuken-centrum')],
			['id' => 'taupe', 'name' => __('Taupe', 'keuken-centrum'), 'color' => '#8B7D6B', 'description' => __('Verfijnde aardetint in middentoon', 'keuken-centrum')],
			['id' => 'cream', 'name' => __('Creme', 'keuken-centrum'), 'color' => '#E8E0D0', 'description' => __('Zuivere zijdewitte afwerking', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'worktop',
		'label'   => __('Werkblad', 'keuken-centrum'),
		'options' => [
			['id' => 'marble-white', 'name' => __('Wit marmer', 'keuken-centrum'), 'color' => '#F2EFE8', 'description' => __('Calacatta Oro marmerplaat', 'keuken-centrum')],
			['id' => 'travertine', 'name' => __('Travertin', 'keuken-centrum'), 'color' => '#C8B898', 'description' => __('Klassiek Romeins travertin', 'keuken-centrum')],
			['id' => 'concrete', 'name' => __('Beton', 'keuken-centrum'), 'color' => '#9A9690', 'description' => __('Gepolijst betonoppervlak', 'keuken-centrum')],
			['id' => 'black-stone', 'name' => __('Zwarte steen', 'keuken-centrum'), 'color' => '#2A2A2A', 'description' => __('Absolute Black graniet', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'sink',
		'label'   => __('Spoelbak', 'keuken-centrum'),
		'options' => [
			['id' => 'sink-stainless', 'name' => __('RVS', 'keuken-centrum'), 'color' => '#C8C8C8', 'description' => __('Blanco Andano in geborsteld staal', 'keuken-centrum')],
			['id' => 'sink-white', 'name' => __('Keramisch wit', 'keuken-centrum'), 'color' => '#F5F3EE', 'description' => __('Villeroy & Boch keramiek', 'keuken-centrum')],
			['id' => 'sink-anthracite', 'name' => __('Antraciet', 'keuken-centrum'), 'color' => '#3D3D3D', 'description' => __('Blanco Silgranit graniet', 'keuken-centrum')],
			['id' => 'sink-copper', 'name' => __('Koper', 'keuken-centrum'), 'color' => '#B87333', 'description' => __('Handgemaakte koperen kom', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'appliances',
		'label'   => __('Apparatuur', 'keuken-centrum'),
		'options' => [
			['id' => 'miele', 'name' => __('Miele', 'keuken-centrum'), 'color' => '#F0F0F0', 'description' => __('Miele Generation 7000 serie', 'keuken-centrum')],
			['id' => 'gaggenau', 'name' => __('Gaggenau', 'keuken-centrum'), 'color' => '#E0E0E0', 'description' => __('Gaggenau 400 serie', 'keuken-centrum')],
			['id' => 'siemens', 'name' => __('Siemens', 'keuken-centrum'), 'color' => '#D8D8D8', 'description' => __('Siemens iQ700 serie', 'keuken-centrum')],
			['id' => 'neff', 'name' => __('NEFF', 'keuken-centrum'), 'color' => '#D0D0D0', 'description' => __('NEFF Slide & Hide serie', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'quooker',
		'label'   => __('Quooker', 'keuken-centrum'),
		'options' => [
			['id' => 'quooker-gold', 'name' => __('Goud', 'keuken-centrum'), 'color' => '#B08D57', 'description' => __('Quooker Fusion Goud', 'keuken-centrum')],
			['id' => 'quooker-chrome', 'name' => __('Chroom', 'keuken-centrum'), 'color' => '#D0D0D0', 'description' => __('Quooker Fusion Classic Chroom', 'keuken-centrum')],
			['id' => 'quooker-black', 'name' => __('Mat zwart', 'keuken-centrum'), 'color' => '#1A1A1A', 'description' => __('Quooker Fusion Classic Zwart', 'keuken-centrum')],
			['id' => 'quooker-none', 'name' => __('Geen', 'keuken-centrum'), 'color' => '#F7F5F2', 'description' => __('Zonder Quooker-kraan', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'bora',
		'label'   => __('BORA', 'keuken-centrum'),
		'options' => [
			['id' => 'bora-pro', 'name' => __('BORA Pro', 'keuken-centrum'), 'color' => '#D0D0D0', 'description' => __('BORA Pro 3.0 integrated cooktop', 'keuken-centrum')],
			['id' => 'bora-x', 'name' => __('BORA X BO', 'keuken-centrum'), 'color' => '#1A1A1A', 'description' => __('BORA X BO pure induction', 'keuken-centrum')],
			['id' => 'bora-basic', 'name' => __('BORA Basic', 'keuken-centrum'), 'color' => '#C0C0C0', 'description' => __('BORA Basic extraction system', 'keuken-centrum')],
			['id' => 'bora-none', 'name' => __('None', 'keuken-centrum'), 'color' => '#F7F5F2', 'description' => __('Standard extraction hood', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'handles',
		'label'   => __('Grepen', 'keuken-centrum'),
		'options' => [
			['id' => 'handle-none', 'name' => __('Greeploos', 'keuken-centrum'), 'color' => '#E0E0E0', 'description' => __('Geintegreerd J-profiel', 'keuken-centrum')],
			['id' => 'handle-brass', 'name' => __('Geborsteld messing', 'keuken-centrum'), 'color' => '#B08D57', 'description' => __('Massieve messing staafgreep', 'keuken-centrum')],
			['id' => 'handle-chrome', 'name' => __('Chroom', 'keuken-centrum'), 'color' => '#D0D0D0', 'description' => __('Gepolijste chromen staafgreep', 'keuken-centrum')],
			['id' => 'handle-black', 'name' => __('Mat zwart', 'keuken-centrum'), 'color' => '#1A1A1A', 'description' => __('Zwart gepoedercoate greep', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'lighting',
		'label'   => __('Verlichting', 'keuken-centrum'),
		'options' => [
			['id' => 'light-recessed', 'name' => __('Inbouw led', 'keuken-centrum'), 'color' => '#F5F0E8', 'description' => __('Geintegreerde plafondspots', 'keuken-centrum')],
			['id' => 'light-pendant', 'name' => __('Hanglamp', 'keuken-centrum'), 'color' => '#C0A060', 'description' => __('Design hangverlichting', 'keuken-centrum')],
			['id' => 'light-under', 'name' => __('Onderkast', 'keuken-centrum'), 'color' => '#F0EAD8', 'description' => __('Warmwitte ledstrip', 'keuken-centrum')],
			['id' => 'light-all', 'name' => __('Compleet systeem', 'keuken-centrum'), 'color' => '#B08D57', 'description' => __('Volledig lichtconcept', 'keuken-centrum')],
		],
	],
];

$initial_selections = [
	'front'      => ['id' => 'cashmere', 'color' => '#C4B49A', 'name' => __('Cashmere', 'keuken-centrum')],
	'worktop'    => ['id' => 'marble-white', 'color' => '#F2EFE8', 'name' => __('Wit marmer', 'keuken-centrum')],
	'sink'       => ['id' => 'sink-stainless', 'color' => '#C8C8C8', 'name' => __('RVS', 'keuken-centrum')],
	'appliances' => ['id' => 'miele', 'color' => '#F0F0F0', 'name' => __('Miele', 'keuken-centrum')],
	'quooker'    => ['id' => 'quooker-gold', 'color' => '#B08D57', 'name' => __('Goud', 'keuken-centrum')],
	'bora'       => ['id' => 'bora-pro', 'color' => '#D0D0D0', 'name' => __('BORA Pro', 'keuken-centrum')],
	'handles'    => ['id' => 'handle-none', 'color' => '#E0E0E0', 'name' => __('Greeploos', 'keuken-centrum')],
	'lighting'   => ['id' => 'light-recessed', 'color' => '#F5F0E8', 'name' => __('Inbouw led', 'keuken-centrum')],
];

$active_category = $categories[0];
$kses_icon       = [
	'svg'    => ['viewBox' => true, 'fill' => true, 'aria-hidden' => true, 'width' => true, 'height' => true],
	'path'   => ['d' => true, 'stroke' => true, 'stroke-width' => true, 'stroke-linecap' => true, 'stroke-linejoin' => true],
	'circle' => ['cx' => true, 'cy' => true, 'r' => true, 'stroke' => true, 'stroke-width' => true, 'fill' => true],
	'rect'   => ['x' => true, 'y' => true, 'width' => true, 'height' => true, 'rx' => true, 'stroke' => true, 'stroke-width' => true, 'fill' => true],
];
$icon_tune = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M3 7.5h9.25M16.75 7.5H21M3 16.5h4.25M8.75 16.5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="14.75" cy="7.5" r="2.25" stroke="currentColor" stroke-width="1.5"/><circle cx="6.5" cy="16.5" r="2.25" stroke="currentColor" stroke-width="1.5"/></svg>';
$icon_swatch = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><rect x="2.75" y="3.25" width="12.5" height="12.5" rx="2.4" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 15.75V18.4A2.6 2.6 0 0 0 13.1 21h6.15A2.6 2.6 0 0 0 21.85 18.4v-6.15A2.6 2.6 0 0 0 19.25 9.65H15.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
$icon_headphone = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M4.75 13.25v3.1A2.4 2.4 0 0 0 7.15 18.75h.6v-5.5h-3ZM19.25 13.25v3.1a2.4 2.4 0 0 1-2.4 2.4h-.6v-5.5h3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M4.75 13.25a7.25 7.25 0 0 1 14.5 0" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
?>
<section class="journey-config-scene journey-config-scene--react section-shell" id="showroom-journey">
	<div class="journey-config-scene__photo"<?php echo $scene ? ' style="background-image:url(' . esc_url($scene) . ')"' : ''; ?> aria-hidden="true"></div>
	<div class="journey-config-scene__veil" aria-hidden="true"></div>
	<div class="journey-config-scene__ambient" aria-hidden="true"></div>

	<div class="site-shell journey-config-scene__inner">
		<?php kc_section_chapter('04', __('Digitale beleving', 'keuken-centrum'), true, 10, 'chapter-mark--sentence'); ?>

		<div class="journey-config-grid">
			<div
				class="journey-config-stage"
				data-journey-hotspots
				data-hotspots="<?php echo esc_attr(wp_json_encode($hotspot_positions)); ?>"
				data-categories="<?php echo esc_attr(wp_json_encode($categories)); ?>"
				data-selections="<?php echo esc_attr(wp_json_encode($initial_selections)); ?>"
			>
				<div class="journey-config-stage__badge" data-reveal data-journey-motion="badge"><?php esc_html_e('Premium configurator', 'keuken-centrum'); ?></div>

				<div class="journey-config-mockup" data-reveal data-journey-motion="mockup">
					<div class="journey-config-topbar">
						<div class="journey-config-topbar__dots" aria-hidden="true"><span></span><span></span><span></span></div>
						<div class="journey-config-topbar__title"><?php esc_html_e('Keuken Centrum', 'keuken-centrum'); ?></div>
						<div class="journey-config-topbar__spacer" aria-hidden="true"></div>
					</div>

					<div class="journey-config-mockup__body">
						<div class="journey-config-mockup__viewport">
							<?php if ($base) : ?>
								<img
									src="<?php echo esc_url($base); ?>"
									<?php if ($base_sm) : ?>
										srcset="<?php echo esc_url($base_sm); ?> 768w, <?php echo esc_url($base); ?> 1536w"
										sizes="(min-width: 1024px) 32vw, 92vw"
									<?php endif; ?>
									alt="<?php esc_attr_e('Klassieke keuken configurator', 'keuken-centrum'); ?>"
									loading="lazy"
									decoding="async"
									width="1536"
									height="1024"
								/>
							<?php endif; ?>
							<div class="journey-config-hotspots" aria-live="polite"></div>
						</div>

						<div class="journey-config-sidebar">
							<div class="journey-config-sidebar__tabs" data-journey-tabs>
								<?php foreach ($categories as $index => $category) : ?>
									<?php $selection = $initial_selections[$category['id']] ?? null; ?>
									<button
										type="button"
										class="journey-config-sidebar__tab<?php echo 0 === $index ? ' is-active' : ''; ?>"
										data-journey-tab
										data-category-id="<?php echo esc_attr($category['id']); ?>"
										aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>"
									>
										<span class="journey-config-sidebar__tab-dot"<?php echo $selection ? ' style="--journey-swatch:' . esc_attr($selection['color']) . '"' : ''; ?>></span>
										<span><?php echo esc_html($category['label']); ?></span>
									</button>
								<?php endforeach; ?>
							</div>

							<div class="journey-config-sidebar__head">
								<p><?php esc_html_e('Kies', 'keuken-centrum'); ?></p>
								<p class="journey-config-sidebar__label" data-journey-current-label><?php echo esc_html($active_category['label']); ?></p>
							</div>

							<div class="journey-config-sidebar__options" data-journey-options>
								<?php foreach ($active_category['options'] as $option) : ?>
									<?php $selected = ($initial_selections[$active_category['id']]['id'] ?? '') === $option['id']; ?>
									<button
										type="button"
										class="journey-config-option<?php echo $selected ? ' is-selected' : ''; ?>"
										data-journey-option
										data-category-id="<?php echo esc_attr($active_category['id']); ?>"
										data-option-id="<?php echo esc_attr($option['id']); ?>"
									>
										<span class="journey-config-option__swatch" style="background-color:<?php echo esc_attr($option['color']); ?>"></span>
										<span class="journey-config-option__name"><?php echo esc_html($option['name']); ?></span>
										<span class="journey-config-option__desc"><?php echo esc_html($option['description']); ?></span>
									</button>
								<?php endforeach; ?>
							</div>

							<div class="journey-config-sidebar__footer">
								<a href="<?php echo esc_url($start_url); ?>"><?php esc_html_e('Volledig ontwerp', 'keuken-centrum'); ?></a>
							</div>
						</div>
					</div>
				</div>

				<div class="journey-config-caption" data-reveal data-journey-motion="caption">
					<span class="journey-config-caption__icon" aria-hidden="true"><?php echo wp_kses($icon_tune, $kses_icon); ?></span>
					<div>
						<p><?php esc_html_e('Digitale Showroom', 'keuken-centrum'); ?></p>
						<p><?php esc_html_e('Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.', 'keuken-centrum'); ?></p>
					</div>
				</div>
			</div>

			<div class="journey-config-copy" data-reveal data-journey-motion="copy">
				<p class="journey-config-copy__eyebrow"><?php esc_html_e('De beleving', 'keuken-centrum'); ?></p>
				<h2 class="journey-config-copy__title"><?php esc_html_e('Een showroom die naar u toe komt', 'keuken-centrum'); ?></h2>
				<p class="journey-config-copy__lede"><?php esc_html_e('Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm. Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog voordat u onze showroom bezoekt.', 'keuken-centrum'); ?></p>
				<div class="journey-config-copy__divider" aria-hidden="true"></div>
				<div class="journey-config-copy__features">
					<div class="journey-config-copy__feature">
						<span aria-hidden="true"><?php echo wp_kses($icon_tune, $kses_icon); ?></span>
						<p><?php esc_html_e('Interactieve materiaalconfigurator', 'keuken-centrum'); ?></p>
					</div>
					<div class="journey-config-copy__feature">
						<span aria-hidden="true"><?php echo wp_kses($icon_swatch, $kses_icon); ?></span>
						<p><?php esc_html_e('Persoonlijke moodboard generatie', 'keuken-centrum'); ?></p>
					</div>
					<div class="journey-config-copy__feature">
						<span aria-hidden="true"><?php echo wp_kses($icon_headphone, $kses_icon); ?></span>
						<p><?php esc_html_e('Persoonlijke ontwerpconsultatie', 'keuken-centrum'); ?></p>
					</div>
				</div>
				<div class="journey-config-actions">
					<a class="premium-pill-button premium-pill-button--blue premium-pill-button--md" href="<?php echo esc_url($start_url); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Start uw ontwerp', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><span class="premium-pill-button__icon">→</span></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
