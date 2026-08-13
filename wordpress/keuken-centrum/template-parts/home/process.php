<?php
/**
 * Home process section.
 *
 * @package Keuken_Centrum
 */

$steps = [
	[
		'number' => '01',
		'title'  => 'Kennismaken',
		'copy'   => 'We bespreken levensstijl, wensen, routing en budget in een rustig eerste gesprek.',
	],
	[
		'number' => '02',
		'title'  => 'Ontwerp verfijnen',
		'copy'   => 'Indeling, materiaal en apparatuur worden zorgvuldig op elkaar afgestemd.',
	],
	[
		'number' => '03',
		'title'  => 'Definitieve keuzes',
		'copy'   => 'Fronten, bladen, grepen en techniek worden tastbaar in de showroom bevestigd.',
	],
	[
		'number' => '04',
		'title'  => 'Realiseren',
		'copy'   => 'Levering, montage en afstemming verlopen met één aanspreekpunt en heldere planning.',
	],
];
?>
<section class="section-shell">
	<div class="site-shell">
		<div class="section-heading">
			<p class="section-eyebrow"><?php esc_html_e('Onze werkwijze', 'keuken-centrum'); ?></p>
			<h2 class="section-title"><?php esc_html_e('Een gestructureerd traject dat luxe voelbaar en overzichtelijk maakt.', 'keuken-centrum'); ?></h2>
		</div>

		<div class="process-grid">
			<?php foreach ($steps as $step) : ?>
				<article class="process-card">
					<span class="process-card__number"><?php echo esc_html($step['number']); ?></span>
					<h3 class="process-card__title"><?php echo esc_html($step['title']); ?></h3>
					<p><?php echo esc_html($step['copy']); ?></p>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
