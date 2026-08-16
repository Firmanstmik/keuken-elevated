<?php
/**
 * Home process section — React process parity.
 *
 * @package Keuken_Centrum
 */

$design_url = (string) kc_get_option('hero_cta_secondary_url_default', 'https://keuken-elevated.vercel.app/brands');
$steps      = [
	[
		'number' => '01',
		'title'  => __('Kies merk', 'keuken-centrum'),
		'copy'   => __('Selecteer uit de mooiste keukenmerken van Europa.', 'keuken-centrum'),
		'icon'   => 'shop',
	],
	[
		'number' => '02',
		'title'  => __('Kies stijl', 'keuken-centrum'),
		'copy'   => __('Bepaal de architectonische uitstraling die bij uw woning past.', 'keuken-centrum'),
		'icon'   => 'brush',
	],
	[
		'number' => '03',
		'title'  => __('Samenstellen', 'keuken-centrum'),
		'copy'   => __('Personaliseer materialen, werkbladen, apparatuur en afwerking.', 'keuken-centrum'),
		'icon'   => 'layers',
	],
	[
		'number' => '04',
		'title'  => __('Moodboard', 'keuken-centrum'),
		'copy'   => __('Ontvang een persoonlijk voorstel waarin sfeer en details samenkomen.', 'keuken-centrum'),
		'icon'   => 'gallery',
	],
	[
		'number' => '05',
		'title'  => __('Consultatie', 'keuken-centrum'),
		'copy'   => __('Bespreek alles met uw vaste ontwerpadviseur in de showroom.', 'keuken-centrum'),
		'icon'   => 'people',
	],
];

$process_icon = static function (string $icon): string {
	switch ($icon) {
		case 'shop':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 10.5h15v8.25a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75zm1.2-5.25h12.6l1.2 3.75H4.5z"/><path d="M8.25 10.5v9m7.5-9v9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.35"/></svg>';
		case 'brush':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.8 4.2l5 5-8.8 8.8a3.2 3.2 0 0 1-2.25.93H5.5v-3.25a3.2 3.2 0 0 1 .93-2.25z"/><path d="M13.5 5.5l5 5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.35"/></svg>';
		case 'layers':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4.5l7.5 4.2L12 13 4.5 8.7zm0 6.2l7.5 4.2L12 19.1 4.5 14.9zm0-3.1l7.5 4.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/></svg>';
		case 'gallery':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="5.5" width="15" height="13" rx="2"/><path d="M7.5 15.5l3.2-3.2 2.7 2.7 2.1-2.1 1.5 1.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/><circle cx="9" cy="9.2" r="1.1"/></svg>';
		default:
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="9" r="2"/><circle cx="16.5" cy="8" r="2"/><path d="M4.5 18c.9-2.5 3-4 5.7-4s4.8 1.5 5.7 4m.3-5.6c1.8.5 3.2 2 3.8 3.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35"/></svg>';
	}
};
?>
<section class="process-timeline-scene process-timeline-scene--react" id="process">
	<div class="process-timeline-scene__bloom process-timeline-scene__bloom--main" aria-hidden="true"></div>
	<div class="process-timeline-scene__bloom process-timeline-scene__bloom--left" aria-hidden="true"></div>
	<div class="process-timeline-scene__bloom process-timeline-scene__bloom--right" aria-hidden="true"></div>
	<div class="process-timeline-scene__grain" aria-hidden="true"></div>

	<div class="site-shell process-timeline-scene__inner">
		<?php kc_section_chapter('07', __('Proces', 'keuken-centrum'), true); ?>

		<header class="process-timeline-heading process-timeline-heading--react">
			<div class="section-label-row section-label-row--center">
				<span class="kitchen-eyebrow-mark" aria-hidden="true"></span>
				<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Het proces', 'keuken-centrum'); ?></p>
			</div>
			<h2>
				<?php esc_html_e('Van concept tot', 'keuken-centrum'); ?>
				<em><?php esc_html_e('creatie', 'keuken-centrum'); ?></em>
			</h2>
			<p><?php esc_html_e('Vijf zorgvuldig uitgedachte stappen naar uw droomkeuken.', 'keuken-centrum'); ?></p>
		</header>

		<div class="process-timeline-shell" data-process-timeline>
			<div class="process-timeline-line" aria-hidden="true">
				<span class="process-timeline-line__track"></span>
				<span class="process-timeline-line__fill" data-process-progress></span>
				<span class="process-timeline-line__dot" data-process-dot></span>
			</div>

			<ol class="process-timeline process-timeline--react">
				<?php foreach ($steps as $index => $step) : ?>
					<li class="process-timeline-step process-timeline-step--react<?php echo 0 === $index ? ' is-active' : ''; ?>" data-process-step>
						<article class="process-timeline-step__card">
							<div class="process-timeline-step__node">
								<span class="process-timeline-step__halo" aria-hidden="true"></span>
								<span class="process-timeline-step__number"><?php echo esc_html($step['number']); ?></span>
								<span class="process-timeline-step__icon" aria-hidden="true"><?php echo $process_icon($step['icon']); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></span>
							</div>
							<span class="process-timeline-step__connector" aria-hidden="true"></span>
							<div class="process-timeline-step__copy">
								<h3><?php echo esc_html($step['title']); ?></h3>
								<p><?php echo esc_html($step['copy']); ?></p>
							</div>
						</article>
					</li>
				<?php endforeach; ?>
			</ol>
		</div>

		<div class="process-timeline-cta">
			<span class="process-timeline-cta__line" aria-hidden="true"></span>
			<a class="btn btn--primary btn--pill" href="<?php echo esc_url($design_url); ?>">
				<?php esc_html_e('Begin uw ontwerptraject', 'keuken-centrum'); ?>
			</a>
		</div>
	</div>
</section>
