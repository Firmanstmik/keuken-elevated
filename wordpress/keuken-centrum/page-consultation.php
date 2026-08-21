<?php
/**
 * Consultation page template (React /consultation — no site footer).
 *
 * @package Keuken_Centrum
 */

$data = function_exists( 'kc_consultation_page_data' ) ? kc_consultation_page_data() : null;

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
<main id="main-content" class="site-main site-main--consultation">
	<?php
	get_template_part(
		'template-parts/consultation/page',
		null,
		[ 'data' => is_array( $data ) ? $data : [] ]
	);
	?>
</main>
<?php
get_template_part( 'template-parts/global/sticky-conversion-bar' );
get_template_part( 'template-parts/global/mobile-bottom-nav' );
wp_footer();
?>
</body>
</html>
