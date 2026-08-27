<?php
/**
 * Home process section — React process parity.
 *
 * @package Keuken_Centrum
 */

$process   = function_exists( 'kc_home_process_data' ) ? kc_home_process_data() : null;
$design_url = $process['cta_url'] ?? home_url( '/brands/' );
$steps      = $process['steps'] ?? [
	[
		'number' => '01',
		'title'  => __('Kies merk', 'keuken-centrum'),
		'copy'   => __('Selecteer uit de mooiste keukenmerken van Europa', 'keuken-centrum'),
		'icon'   => 'shop',
	],
	[
		'number' => '02',
		'title'  => __('Kies stijl', 'keuken-centrum'),
		'copy'   => __('Bepaal de architectonische uitstraling', 'keuken-centrum'),
		'icon'   => 'brush',
	],
	[
		'number' => '03',
		'title'  => __('Samenstellen', 'keuken-centrum'),
		'copy'   => __('Personaliseer elk materiaal en iedere afwerking', 'keuken-centrum'),
		'icon'   => 'layers',
	],
	[
		'number' => '04',
		'title'  => __('Moodboard', 'keuken-centrum'),
		'copy'   => __('Ontvang uw persoonlijk ontwerpvoorstel', 'keuken-centrum'),
		'icon'   => 'gallery',
	],
	[
		'number' => '05',
		'title'  => __('Consultatie', 'keuken-centrum'),
		'copy'   => __('Bespreek alles met uw persoonlijke ontwerpadviseur', 'keuken-centrum'),
		'icon'   => 'people',
	],
];
$proc_eyebrow = $process['eyebrow'] ?? 'Het proces';
$proc_heading = $process['heading'] ?? 'Van concept tot';
$proc_heading_em = $process['heading_em'] ?? 'creatie';
$proc_lede = $process['lede'] ?? 'Vijf zorgvuldig uitgedachte stappen naar uw droomkeuken';
$proc_cta = $process['cta_label'] ?? 'Begin uw ontwerptraject';

$process_icon = static function (string $icon): string {
	return function_exists( 'kc_icon_process_step' ) ? kc_icon_process_step( $icon ) : '';
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
				<p class="section-eyebrow section-eyebrow--gold"><?php echo esc_html( $proc_eyebrow ); ?></p>
			</div>
			<h2>
				<?php echo esc_html( $proc_heading ); ?>
				<em><?php echo esc_html( $proc_heading_em ); ?></em>
			</h2>
			<p class="process-timeline-heading__lede"><?php echo esc_html( $proc_lede ); ?></p>
		</header>

		<div class="process-timeline-shell" data-process-timeline>
			<div class="process-timeline-line" aria-hidden="true">
				<span class="process-timeline-line__track"></span>
				<span class="process-timeline-line__fill" data-process-progress></span>
				<span class="process-timeline-line__dot" data-process-dot></span>
			</div>

			<ol class="process-timeline process-timeline--react">
				<?php foreach ($steps as $index => $step) : ?>
					<li class="process-timeline-step process-timeline-step--react" data-process-step>
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
			<a class="premium-pill-button premium-pill-button--blue premium-pill-button--xl premium-pill-button--rounded" href="<?php echo esc_url( $design_url ); ?>">
				<span class="premium-pill-button__label"><?php echo esc_html( $proc_cta ); ?></span>
				<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
			</a>
		</div>
	</div>
</section>
