<?php
/**
 * Showroom Keukens page template.
 *
 * @package Keuken_Centrum
 */

$data = function_exists( 'kc_showroom_keukens_page_data' ) ? kc_showroom_keukens_page_data() : null;

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
<main id="main-content" class="site-main site-main--showroom-keukens">
	<?php
	get_template_part(
		'template-parts/showroom/page',
		null,
		[ 'data' => is_array( $data ) ? $data : [] ]
	);
	?>
</main>
<?php
get_footer();
