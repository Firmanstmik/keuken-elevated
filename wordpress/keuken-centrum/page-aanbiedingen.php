<?php
/**
 * Page template: Aanbiedingen (slug aanbiedingen).
 *
 * @package Keuken_Centrum
 */

$data = function_exists( 'kc_aanbiedingen_page_data' ) ? kc_aanbiedingen_page_data() : null;

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
<main id="main-content" class="site-main site-main--aanbiedingen">
	<?php
	get_template_part(
		'template-parts/aanbiedingen/page',
		null,
		[ 'data' => is_array( $data ) ? $data : [] ]
	);
	?>
</main>
<?php
get_footer();
