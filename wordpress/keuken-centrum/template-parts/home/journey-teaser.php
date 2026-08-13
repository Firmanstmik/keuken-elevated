<?php
/**
 * Home journey teaser section.
 *
 * @package Keuken_Centrum
 */

$showroom_page = get_page_by_path('showroom-keukens');
?>
<section class="section-shell section-shell--dark">
	<div class="site-shell split-panel">
		<div>
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Van oriëntatie naar realisatie', 'keuken-centrum'); ?></p>
			<h2 class="section-title section-title--light"><?php esc_html_e('Uw keukenreis begint in een showroom waar sfeer, materiaal en indeling direct samenkomen.', 'keuken-centrum'); ?></h2>
		</div>
		<div class="split-panel__body">
			<p><?php esc_html_e('We begeleiden klanten in Utrecht en omgeving met een zorgvuldig traject: inspiratie, ontwerpverfijning, materiaalkeuze, techniek en een oplevering die klopt tot in de details.', 'keuken-centrum'); ?></p>
			<div class="split-panel__actions">
				<a class="btn btn--primary" href="<?php echo esc_url($showroom_page ? get_permalink($showroom_page) : home_url('/showroom-keukens')); ?>">
					<?php esc_html_e('Bekijk de showroom', 'keuken-centrum'); ?>
				</a>
				<a class="btn btn--ghost" href="<?php echo esc_url(get_post_type_archive_link('kitchen_brand') ?: home_url('/keukens')); ?>">
					<?php esc_html_e('Bekijk keukenmerken', 'keuken-centrum'); ?>
				</a>
			</div>
		</div>
	</div>
</section>
