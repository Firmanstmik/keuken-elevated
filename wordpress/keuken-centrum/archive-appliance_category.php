<?php
/**
 * Appliance archive — Apparatuur overview (React /apparatuur parity).
 *
 * @package Keuken_Centrum
 */

$data = function_exists( 'kc_apparatuur_overview_data' ) ? kc_apparatuur_overview_data() : null;

if ( is_array( $data ) && ! empty( $data['meta']['title'] ) ) {
	add_filter(
		'pre_get_document_title',
		static function () use ( $data ) {
			return (string) $data['meta']['title'];
		},
		99
	);
}

get_header();
?>
<main id="main-content" class="site-main site-main--apparatuur">
	<?php get_template_part( 'template-parts/apparatuur/overview' ); ?>
</main>
<?php
get_footer();
