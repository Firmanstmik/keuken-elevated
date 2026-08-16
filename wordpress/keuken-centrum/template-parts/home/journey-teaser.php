<?php
/**
 * Home journey teaser — React ShowroomJourneySection parity.
 *
 * @package Keuken_Centrum
 */

$base     = kc_theme_img('configurator/klassiek-base.webp');
$scene    = kc_theme_img('brands/brands-dark-bg.webp');
$hotspots = get_template_directory_uri() . '/assets/data/hotspots/klassiek.json';

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
$start_url       = home_url('/configurator');
?>
<section class="journey-config-scene journey-config-scene--react section-shell"<?php echo $scene ? ' style="--journey-scene:url(' . esc_url($scene) . ')"' : ''; ?>>
	<div class="site-shell journey-config-scene__inner">
		<?php kc_section_chapter('04', __('Digitale beleving', 'keuken-centrum'), true); ?>

		<div class="journey-config-grid">
			<div
				class="journey-config-stage"
				data-journey-hotspots
				data-hotspots-url="<?php echo esc_url($hotspots); ?>"
				data-categories="<?php echo esc_attr(wp_json_encode($categories)); ?>"
				data-selections="<?php echo esc_attr(wp_json_encode($initial_selections)); ?>"
				data-reveal
			>
				<div class="journey-config-stage__badge"><?php esc_html_e('Premium configurator', 'keuken-centrum'); ?></div>

				<div class="journey-config-mockup">
					<div class="journey-config-topbar">
						<span></span><span></span><span></span>
						<b><?php esc_html_e('Keuken Centrum', 'keuken-centrum'); ?></b>
					</div>

					<div class="journey-config-mockup__body">
						<div class="journey-config-mockup__viewport">
							<?php if ($base) : ?>
								<img src="<?php echo esc_url($base); ?>" alt="<?php esc_attr_e('Klassieke keuken configurator', 'keuken-centrum'); ?>" loading="lazy" width="1200" height="900" />
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
								<h3 data-journey-current-label><?php echo esc_html($active_category['label']); ?></h3>
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
						</div>
					</div>
				</div>

				<div class="journey-config-caption">
					<span class="journey-config-caption__icon" aria-hidden="true">
						<svg viewBox="0 0 24 24" fill="none"><path d="M5 7.75h14M7 12h10M9 16.25h6" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/></svg>
					</span>
					<div>
						<p><?php esc_html_e('Digitale Showroom', 'keuken-centrum'); ?></p>
						<p><?php esc_html_e('Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.', 'keuken-centrum'); ?></p>
					</div>
				</div>
			</div>

			<div class="journey-config-copy" data-reveal>
				<div class="section-label-row">
					<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
					<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('De beleving', 'keuken-centrum'); ?></p>
				</div>

				<h2 class="section-title section-title--light"><?php esc_html_e('Een showroom die naar u toe komt', 'keuken-centrum'); ?></h2>
				<p class="journey-config-copy__lede"><?php esc_html_e('Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm. Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog voordat u onze showroom bezoekt.', 'keuken-centrum'); ?></p>

				<div class="journey-config-copy__divider" aria-hidden="true"></div>

				<div class="journey-config-copy__features">
					<div class="journey-config-copy__feature">
						<span aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none"><path d="M7 7.5h10M7 12h7M7 16.5h5M17 16.5l2.5-2.5M17 16.5 14.5 14" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</span>
						<p><?php esc_html_e('Interactieve materiaalconfigurator', 'keuken-centrum'); ?></p>
					</div>
					<div class="journey-config-copy__feature">
						<span aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none"><path d="M7 16.25c0-2.9 2.35-5.25 5.25-5.25S17.5 13.35 17.5 16.25M8.75 8.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</span>
						<p><?php esc_html_e('Persoonlijke moodboard generatie', 'keuken-centrum'); ?></p>
					</div>
					<div class="journey-config-copy__feature">
						<span aria-hidden="true">
							<svg viewBox="0 0 24 24" fill="none"><path d="M7 8.5h10M7 12h10M7 15.5h6" stroke="currentColor" stroke-width="1.45" stroke-linecap="round"/><path d="M17 16.25h2.75A1.25 1.25 0 0 0 21 15V7a1.25 1.25 0 0 0-1.25-1.25h-15A1.25 1.25 0 0 0 3.5 7v8A1.25 1.25 0 0 0 4.75 16.25H7l2.2 2.5" stroke="currentColor" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round"/></svg>
						</span>
						<p><?php esc_html_e('Persoonlijke ontwerpconsultatie', 'keuken-centrum'); ?></p>
					</div>
				</div>

				<div class="journey-config-actions">
					<a class="premium-pill-button premium-pill-button--blue premium-pill-button--rounded" href="<?php echo esc_url($start_url); ?>">
						<span class="premium-pill-button__label"><?php esc_html_e('Start uw ontwerp', 'keuken-centrum'); ?></span>
						<span class="premium-pill-button__badge" aria-hidden="true"><span class="premium-pill-button__icon">→</span></span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
