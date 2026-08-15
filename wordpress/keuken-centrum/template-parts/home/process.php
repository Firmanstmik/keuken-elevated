<?php
/**
 * Home process section — React timeline parity.
 *
 * @package Keuken_Centrum
 */
$steps = [
	['title' => 'Kies merk', 'copy' => 'Ontdek de signatuur die past bij uw interieur en manier van leven.'],
	['title' => 'Kies stijl', 'copy' => 'Van warm klassiek tot strak modern: bepaal de sfeer van uw keuken.'],
	['title' => 'Samenstellen', 'copy' => 'Breng indeling, materialen en apparatuur zorgvuldig bij elkaar.'],
	['title' => 'Moodboard', 'copy' => 'Maak uw keuzes tastbaar in kleur, textuur en detail.'],
	['title' => 'Consultatie', 'copy' => 'Verfijn het geheel samen met een van onze keukenadviseurs.'],
];
?>
<section class="process-timeline-scene">
	<div class="site-shell">
		<div class="process-timeline-heading"><p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Uw route naar maatwerk', 'keuken-centrum'); ?></p><h2><?php esc_html_e('Van eerste vonk tot keuken die voelt als thuis.', 'keuken-centrum'); ?></h2></div>
		<ol class="process-timeline" data-process-timeline>
			<?php foreach ($steps as $index => $step) : ?><li class="process-timeline-step<?php echo 0 === $index ? ' is-active' : ''; ?>"><span>0<?php echo esc_html((string) ($index + 1)); ?></span><div><h3><?php echo esc_html($step['title']); ?></h3><p><?php echo esc_html($step['copy']); ?></p></div></li><?php endforeach; ?>
		</ol>
	</div>
</section>
