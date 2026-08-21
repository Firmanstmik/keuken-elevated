<?php
/**
 * Worktop single — material brand page (React BrandPage parity).
 *
 * @package Keuken_Centrum
 */

$slug = get_query_var( 'name' );
if ( ! is_string( $slug ) || '' === $slug ) {
	$slug = get_post_field( 'post_name', get_queried_object_id() );
}
$slug = is_string( $slug ) ? $slug : '';
$data = null;

$map = [
	'silestone' => 'kc_silestone_page_data',
	'dekton'    => 'kc_dekton_page_data',
	'neolith'   => 'kc_neolith_page_data',
	'sensa'     => 'kc_sensa_page_data',
];

if ( isset( $map[ $slug ] ) && function_exists( $map[ $slug ] ) ) {
	$data = call_user_func( $map[ $slug ] );
}

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
		<main id="main-content" class="site-main site-main--keukenbladen">
			<?php get_template_part( 'template-parts/keukens/brand-page', null, [ 'data' => $data ] ); ?>
		</main>
		<?php
		continue;
	}
	?>
	<main id="main-content" class="site-main">
		<section class="page-hero page-hero--light">
			<div class="site-shell">
				<p class="section-eyebrow"><?php esc_html_e( 'Materiaalcollectie', 'keuken-centrum' ); ?></p>
				<h1 class="page-title"><?php the_title(); ?></h1>
				<p class="page-intro"><?php echo esc_html( get_the_excerpt() ); ?></p>
			</div>
		</section>
		<section class="section-shell">
			<div class="site-shell entry-grid">
				<article class="entry-body">
					<?php the_content(); ?>
				</article>
			</div>
		</section>
	</main>
	<?php
endwhile;

get_footer();
