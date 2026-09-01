<?php
/**
 * Home journey teaser — React ShowroomJourneySection parity.
 *
 * @package Keuken_Centrum
 */

$base     = kc_theme_img('configurator/klassiek-base.webp');
$base_sm  = kc_theme_img('configurator/klassiek-base-768.webp');
$scene    = kc_theme_img('brands/brands-dark-bg.webp');
$journey  = function_exists( 'kc_home_journey_data' ) ? kc_home_journey_data() : null;
$start_url = home_url( '/brands/' );
$journey_eyebrow = $journey['eyebrow'] ?? 'De beleving';
$journey_heading = $journey['heading'] ?? 'Een showroom die naar u toe komt';
$journey_heading_em = $journey['heading_em'] ?? '';
$journey_lede = $journey['lede'] ?? 'Onze digitale configurator brengt de volledige luxe showroomervaring naar uw scherm. Ontdek materialen, bekijk combinaties en ontvang een compleet ontwerpvoorstel nog voordat u onze showroom bezoekt.';
$journey_cta = $journey['cta_label'] ?? 'Start uw ontwerp';

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
			['id' => 'matte-black', 'name' => __('Mat zwart', 'keuken-centrum'), 'color' => '#1A1A1A', 'description' => __('Ultramat gelakt in diep zwart', 'keuken-centrum')],
			['id' => 'cashmere', 'name' => __('Cashmere', 'keuken-centrum'), 'color' => '#C4B49A', 'description' => __('Warme greige met zachte matte afwerking', 'keuken-centrum')],
			['id' => 'taupe', 'name' => __('Taupe', 'keuken-centrum'), 'color' => '#8B7D6B', 'description' => __('Verfijnde aardetint in middentoon', 'keuken-centrum')],
			['id' => 'olive', 'name' => __('Olijf', 'keuken-centrum'), 'color' => '#6B6B4A', 'description' => __('Gedempt botanisch groen', 'keuken-centrum')],
		],
	],
	[
		'id'      => 'worktop',
		'label'   => __('Werkblad', 'keuken-centrum'),
		'options' => [
			['id' => 'marble-white', 'name' => __('Wit marmer', 'keuken-centrum'), 'color' => '#F2EFE8', 'description' => __('Calacatta Oro marmerplaat', 'keuken-centrum')],
			['id' => 'marble-grey', 'name' => __('Grijs marmer', 'keuken-centrum'), 'color' => '#B8B4AE', 'description' => __('Bardiglio Imperiale marmer', 'keuken-centrum')],
			['id' => 'travertine', 'name' => __('Travertin', 'keuken-centrum'), 'color' => '#C8B898', 'description' => __('Klassiek Romeins travertin', 'keuken-centrum')],
			['id' => 'concrete', 'name' => __('Beton', 'keuken-centrum'), 'color' => '#9A9690', 'description' => __('Gepolijst betonoppervlak', 'keuken-centrum')],
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
			['id' => 'quooker-chrome', 'name' => __('Chroom', 'keuken-centrum'), 'color' => '#D0D0D0', 'description' => __('Quooker Fusion Classic Chroom', 'keuken-centrum')],
			['id' => 'quooker-black', 'name' => __('Mat zwart', 'keuken-centrum'), 'color' => '#1A1A1A', 'description' => __('Quooker Fusion Classic Zwart', 'keuken-centrum')],
			['id' => 'quooker-gold', 'name' => __('Goud', 'keuken-centrum'), 'color' => '#B08D57', 'description' => __('Quooker Fusion Goud', 'keuken-centrum')],
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
$category_count  = count( $categories );
$completed_count = count( $initial_selections );
$logo_uri        = kc_theme_img( 'logo-keuken-1-1.webp' ) ?: kc_theme_img( 'logo-keuken-centrum-transparent.png' ) ?: kc_theme_img( 'logo-keuken.webp' );
$kses_icon       = [
	'svg'    => [ 'viewBox' => true, 'fill' => true, 'aria-hidden' => true, 'width' => true, 'height' => true, 'xmlns' => true ],
	'path'   => [ 'd' => true, 'stroke' => true, 'stroke-width' => true, 'stroke-linecap' => true, 'stroke-linejoin' => true, 'stroke-miterlimit' => true ],
	'circle' => [ 'cx' => true, 'cy' => true, 'r' => true, 'stroke' => true, 'stroke-width' => true, 'fill' => true ],
	'rect'   => [ 'x' => true, 'y' => true, 'width' => true, 'height' => true, 'rx' => true, 'stroke' => true, 'stroke-width' => true, 'fill' => true ],
];
/* Iconsax Setting4 / ColorSwatch / Headphone — exact React parity */
$icon_tune = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M22 6.5h-6M6 6.5H2M10 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM22 17.5h-4M8 17.5H2M14 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>';
$icon_swatch = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 4.5V18c0 1.08-.44 2.07-1.14 2.79l-.04.04c-.09.09-.19.18-.28.25-.3.26-.64.46-.99.6-.11.05-.22.09-.33.13-.39.13-.81.19-1.22.19-.27 0-.54-.03-.8-.08-.13-.03-.26-.06-.39-.1-.16-.05-.31-.1-.46-.17 0-.01 0-.01-.01 0-.28-.14-.55-.3-.8-.49l-.01-.01c-.13-.1-.25-.2-.36-.32-.11-.12-.22-.24-.33-.37-.19-.25-.35-.52-.49-.8.01-.01.01-.01 0-.01 0 0 0-.01-.01-.02-.06-.14-.11-.29-.16-.44a5.58 5.58 0 01-.1-.39c-.05-.26-.08-.53-.08-.8V4.5C2 3 3 2 4.5 2h3C9 2 10 3 10 4.5z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 16.5v3c0 1.5-1 2.5-2.5 2.5H6c.41 0 .83-.06 1.22-.19.11-.04.22-.08.33-.13.35-.14.69-.34.99-.6.09-.07.19-.16.28-.25l.04-.04 6.8-6.79h3.84c1.5 0 2.5 1 2.5 2.5zM4.81 21.82c-.6-.18-1.17-.51-1.64-.99-.48-.47-.81-1.04-.99-1.64a4.02 4.02 0 002.63 2.63z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.37 11.29L15.66 14l-6.8 6.79C9.56 20.07 10 19.08 10 18V8.34l2.71-2.71c1.06-1.06 2.48-1.06 3.54 0l2.12 2.12c1.06 1.06 1.06 2.48 0 3.54zM6 19a1 1 0 100-2 1 1 0 000 2z"/></svg>';
$icon_headphone = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true"><path d="M5.46 18.49v-2.92c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v2.81c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.63-3.57-3.57v-6.16C1.89 6.6 6.33 2.05 11.95 2.05 17.57 2.05 22 6.6 22 12.11v6.16c0 1.95-1.62 3.57-3.57 3.57-1.95 0-3.57-1.62-3.57-3.57v-2.81c0-.97.76-1.84 1.84-1.84.97 0 1.84.76 1.84 1.84v3.03" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
?>
<section
	class="journey-config-scene journey-config-scene--react journey-premium-scene section-shell"
	id="showroom-journey"
	data-journey-hotspots
	data-hotspots="<?php echo esc_attr(wp_json_encode($hotspot_positions)); ?>"
	data-categories="<?php echo esc_attr(wp_json_encode($categories)); ?>"
	data-selections="<?php echo esc_attr(wp_json_encode($initial_selections)); ?>"
>
	<div class="journey-config-scene__photo journey-config-scene__photo--desktop"<?php echo $scene ? ' style="background-image:url(' . esc_url($scene) . ')"' : ''; ?> aria-hidden="true"></div>
	<div class="journey-config-scene__veil journey-config-scene__veil--desktop" aria-hidden="true"></div>
	<div class="journey-config-scene__ambient journey-config-scene__ambient--desktop" aria-hidden="true"></div>
	<div class="journey-premium-scene__grain journey-premium-scene__grain--desktop" aria-hidden="true"></div>

	<div class="journey-configure-mobile configure-layout">
		<button type="button" class="journey-configure-mobile__backdrop" data-journey-backdrop hidden aria-label="<?php esc_attr_e( 'Sluiten', 'keuken-centrum' ); ?>"></button>
		<div class="journey-configure-mobile__progress" aria-hidden="true">
			<span style="display:block;height:100%;width:<?php echo esc_attr( round( ( $completed_count / max( 1, $category_count ) ) * 100 ) ); ?>%;background:#8BC540;"></span>
		</div>

		<header class="configure-app-header journey-configure-mobile__header">
			<p><?php esc_html_e( 'Digitale beleving', 'keuken-centrum' ); ?></p>
			<?php if ( $logo_uri ) : ?>
				<img src="<?php echo esc_url( $logo_uri ); ?>" alt="<?php esc_attr_e( 'KeukenCentrum.nl', 'keuken-centrum' ); ?>" class="journey-configure-mobile__logo" />
			<?php endif; ?>
			<p><?php esc_html_e( 'Preview', 'keuken-centrum' ); ?></p>
		</header>

		<div class="configure-image-stage journey-configure-mobile__stage">
			<?php if ( $base ) : ?>
				<div
					class="journey-configure-mobile__stage-media"
					style="background-image:url('<?php echo esc_url( $base ); ?>')"
					role="img"
					aria-label="<?php esc_attr_e( 'Klassieke keuken configurator', 'keuken-centrum' ); ?>"
				></div>
			<?php endif; ?>
			<div class="journey-configure-mobile__badge">
				<p><?php esc_html_e( 'Digitale showroom', 'keuken-centrum' ); ?></p>
				<p data-journey-progress><?php echo esc_html( sprintf( '%1$d/%2$d opties samengesteld', $completed_count, $category_count ) ); ?></p>
			</div>
			<div class="journey-config-hotspots journey-configure-mobile__hotspots" aria-live="polite"></div>
		</div>

		<div class="configure-sidebar journey-configure-mobile__sidebar">
			<div class="configure-category-rail journey-config-sidebar__tabs journey-config-sidebar__tabs--scroll" data-journey-tabs>
				<?php foreach ( $categories as $index => $category ) : ?>
					<?php $selection = $initial_selections[ $category['id'] ] ?? null; ?>
					<button
						type="button"
						class="journey-config-sidebar__tab<?php echo $selection ? ' has-selection' : ''; ?>"
						data-journey-tab
						data-category-id="<?php echo esc_attr( $category['id'] ); ?>"
						aria-pressed="false"
					>
						<?php if ( $selection ) : ?>
							<span class="journey-config-sidebar__tab-dot" style="--journey-swatch:<?php echo esc_attr( $selection['color'] ); ?>"></span>
						<?php endif; ?>
						<span><?php echo esc_html( $category['label'] ); ?></span>
					</button>
				<?php endforeach; ?>
			</div>

			<div class="configure-options-panel journey-config-sidebar__options" data-journey-options-panel>
				<div class="journey-configure-mobile__panel-head">
					<div>
						<p><?php esc_html_e( 'Kies', 'keuken-centrum' ); ?></p>
						<p class="journey-config-sidebar__label" data-journey-current-label><?php echo esc_html( $active_category['label'] ); ?></p>
					</div>
					<button type="button" class="journey-configure-mobile__close" data-journey-close><?php esc_html_e( 'Sluiten', 'keuken-centrum' ); ?></button>
				</div>
				<div class="journey-config-sidebar__options-grid configure-options-grid" data-journey-options>
					<?php foreach ( $active_category['options'] as $option ) : ?>
						<?php $selected = ( $initial_selections[ $active_category['id'] ]['id'] ?? '' ) === $option['id']; ?>
						<button
							type="button"
							class="journey-config-option home-configurator-option<?php echo $selected ? ' is-selected' : ''; ?>"
							data-journey-option
							data-category-id="<?php echo esc_attr( $active_category['id'] ); ?>"
							data-option-id="<?php echo esc_attr( $option['id'] ); ?>"
						>
							<span class="journey-config-option__swatch" style="background-color:<?php echo esc_attr( $option['color'] ); ?>"></span>
							<span class="journey-config-option__name"><?php echo esc_html( $option['name'] ); ?></span>
							<span class="journey-config-option__desc"><?php echo esc_html( $option['description'] ); ?></span>
						</button>
					<?php endforeach; ?>
				</div>
			</div>
		</div>

		<div class="journey-configure-mobile__action">
			<div class="journey-configure-mobile__action-row">
				<div>
					<p><?php esc_html_e( 'Voortgang', 'keuken-centrum' ); ?></p>
					<p data-journey-progress-summary><?php echo esc_html( sprintf( '%1$d van %2$d keuzes', $completed_count, $category_count ) ); ?></p>
				</div>
				<a class="journey-configure-mobile__cta" href="<?php echo esc_url( $start_url ); ?>">
					<span><?php esc_html_e( 'Start configurator', 'keuken-centrum' ); ?></span>
					<span aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>
		</div>
	</div>

	<div class="site-shell journey-config-scene__inner journey-config-scene__inner--desktop">
		<?php kc_section_chapter('04', __('Digitale beleving', 'keuken-centrum'), true, 10, 'chapter-mark--sentence chapter-mark--desktop'); ?>

		<div class="journey-config-grid journey-premium-grid">
			<div class="journey-config-stage journey-premium-stage">
				<div class="journey-premium-desktop">
					<div class="journey-config-stage__badge journey-premium-badge journey-premium-badge--desktop" data-reveal data-journey-motion="badge">
						<span class="journey-premium-badge__dot" aria-hidden="true"></span>
						<?php esc_html_e('Premium configurator', 'keuken-centrum'); ?>
					</div>

					<div class="journey-premium-mockup-shell journey-mobile-app-shell">
						<div class="journey-config-mockup home-configurator-preview" data-reveal data-journey-motion="mockup">
							<div class="journey-config-topbar home-configurator-topbar">
								<div class="journey-config-topbar__dots home-configurator-topbar__dots" aria-hidden="true"><span></span><span></span><span></span></div>
								<div class="journey-config-topbar__title home-configurator-topbar__title"><?php esc_html_e('Keuken Centrum', 'keuken-centrum'); ?></div>
								<div class="journey-config-topbar__spacer home-configurator-topbar__spacer" aria-hidden="true"></div>
							</div>

							<div class="journey-config-mockup__body journey-config-mockup__body--stack home-configurator-body">
								<div class="journey-config-mockup__viewport journey-config-mockup__viewport--hero home-configurator-viewport">
							<?php if ($base) : ?>
								<img
									src="<?php echo esc_url($base); ?>"
									<?php if ($base_sm) : ?>
										srcset="<?php echo esc_url($base_sm); ?> 768w, <?php echo esc_url($base); ?> 1536w"
										sizes="(min-width: 768px) min(56vw, 900px), 94vw"
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

								<div class="journey-config-sidebar journey-config-sidebar--mobile home-configurator-sidebar">
									<div class="journey-config-sidebar__tabs-wrap home-configurator-tabs-wrap">
										<div class="journey-config-sidebar__tabs journey-config-sidebar__tabs--scroll home-configurator-tabs" data-journey-tabs>
								<?php foreach ($categories as $index => $category) : ?>
									<?php $selection = $initial_selections[$category['id']] ?? null; ?>
									<button
										type="button"
										class="journey-config-sidebar__tab has-selection<?php echo 0 === $index ? ' is-active' : ''; ?>"
										data-journey-tab
										data-category-id="<?php echo esc_attr($category['id']); ?>"
										aria-pressed="<?php echo 0 === $index ? 'true' : 'false'; ?>"
									>
										<span class="journey-config-sidebar__tab-dot"<?php echo $selection ? ' style="--journey-swatch:' . esc_attr($selection['color']) . '"' : ''; ?>></span>
										<span><?php echo esc_html($category['label']); ?></span>
									</button>
								<?php endforeach; ?>
										</div>
									</div>

									<div class="journey-config-sidebar__head home-configurator-panel-head">
										<p class="journey-config-sidebar__kicker"><?php esc_html_e('Configureer', 'keuken-centrum'); ?></p>
										<p class="journey-config-sidebar__label" data-journey-current-label><?php echo esc_html($active_category['label']); ?></p>
									</div>

									<div class="journey-config-sidebar__options home-configurator-options">
										<div class="journey-config-sidebar__options-grid home-configurator-options-grid" data-journey-options>
								<?php foreach ($active_category['options'] as $option) : ?>
									<?php $selected = ($initial_selections[$active_category['id']]['id'] ?? '') === $option['id']; ?>
									<button
										type="button"
							class="journey-config-option home-configurator-option<?php echo $selected ? ' is-selected' : ''; ?>"
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

									<div class="journey-config-sidebar__footer home-configurator-footer">
										<a href="<?php echo esc_url($start_url); ?>"><?php esc_html_e('Volledig ontwerp', 'keuken-centrum'); ?></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="journey-config-caption journey-premium-caption" data-reveal data-journey-motion="caption">
					<span class="journey-config-caption__icon" aria-hidden="true"><?php echo wp_kses($icon_tune, $kses_icon); ?></span>
					<div>
						<p><?php esc_html_e('Digitale Showroom', 'keuken-centrum'); ?></p>
						<p><?php esc_html_e('Configureer materialen, apparatuur en afwerkingen voordat u de showroom bezoekt.', 'keuken-centrum'); ?></p>
					</div>
				</div>
			</div>

			<div class="journey-config-copy journey-premium-copy journey-premium-copy--desktop" data-reveal data-journey-motion="copy">
			<p class="journey-config-copy__eyebrow" data-journey-motion="copy-el" data-stagger="0"><?php echo esc_html( $journey_eyebrow ); ?></p>
			<h2 class="journey-config-copy__title" data-journey-motion="copy-el" data-stagger="1"><?php
				echo esc_html( $journey_heading );
				if ( $journey_heading_em ) {
					echo ' <em>' . esc_html( $journey_heading_em ) . '</em>';
				}
			?></h2>
			<p class="journey-config-copy__lede" data-journey-motion="copy-el" data-stagger="2"><?php echo esc_html( $journey_lede ); ?></p>
			<div class="journey-config-copy__divider" data-journey-motion="copy-el" data-stagger="3" aria-hidden="true"></div>
			<div class="journey-config-copy__features journey-premium-features">
				<div class="journey-config-copy__feature journey-premium-feature" data-journey-motion="copy-feature" data-stagger="0">
					<span class="journey-premium-feature__icon" aria-hidden="true"><?php echo wp_kses($icon_tune, $kses_icon); ?></span>
					<p><?php esc_html_e('Interactieve materiaalconfigurator', 'keuken-centrum'); ?></p>
				</div>
				<div class="journey-config-copy__feature journey-premium-feature" data-journey-motion="copy-feature" data-stagger="1">
					<span class="journey-premium-feature__icon" aria-hidden="true"><?php echo wp_kses($icon_swatch, $kses_icon); ?></span>
					<p><?php esc_html_e('Persoonlijke moodboard generatie', 'keuken-centrum'); ?></p>
				</div>
				<div class="journey-config-copy__feature journey-premium-feature" data-journey-motion="copy-feature" data-stagger="2">
					<span class="journey-premium-feature__icon" aria-hidden="true"><?php echo wp_kses($icon_headphone, $kses_icon); ?></span>
					<p><?php esc_html_e('Persoonlijke ontwerpconsultatie', 'keuken-centrum'); ?></p>
				</div>
			</div>
			<div class="journey-config-actions" data-journey-motion="copy-el" data-stagger="4">
				<a class="premium-pill-button premium-pill-button--blue premium-pill-button--md" href="<?php echo esc_url($start_url); ?>">
					<span class="premium-pill-button__label"><?php echo esc_html( $journey_cta ); ?></span>
					<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
				</a>
			</div>
			</div>
		</div>
	</div>
</section>
