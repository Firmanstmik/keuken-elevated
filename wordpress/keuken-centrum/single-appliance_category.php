<?php
/**
 * Appliance category single — ApparatuurCategoryPage parity.
 *
 * @package Keuken_Centrum
 */

$slug = get_query_var( 'name' );
if ( ! is_string( $slug ) || '' === $slug ) {
	$slug = get_post_field( 'post_name', get_queried_object_id() );
}
$slug = is_string( $slug ) ? $slug : '';
$data = function_exists( 'kc_apparatuur_category_data' ) ? kc_apparatuur_category_data( $slug ) : null;

if ( is_array( $data ) && $data && ! empty( $data['meta']['title'] ) ) {
	add_filter(
		'pre_get_document_title',
		static function () use ( $data ) {
			return (string) $data['meta']['title'];
		},
		99
	);
}

get_header();

while ( have_posts() ) :
	the_post();

	if ( is_array( $data ) && $data ) {
		?>
		<main id="main-content" class="site-main site-main--apparatuur">
			<?php get_template_part( 'template-parts/apparatuur/category-page', null, [ 'data' => $data ] ); ?>
		</main>
		<?php
		continue;
	}

	wp_safe_redirect( home_url( '/apparatuur/' ), 301 );
	exit;
endwhile;

get_footer();
