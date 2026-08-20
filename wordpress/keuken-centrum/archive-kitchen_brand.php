<?php
/**
 * Kitchen brand archive — Keukens overview (React /keukens parity).
 *
 * @package Keuken_Centrum
 */

get_header();

$data = kc_keukens_overview_data();
?>
<main id="main-content" class="site-main site-main--keukens">
	<?php get_template_part('template-parts/keukens/overview'); ?>
</main>
<?php
get_footer();
