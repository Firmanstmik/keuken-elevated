<?php
/**
 * Appliance category single — ApparatuurCategoryPage parity (Kookplaten first).
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
	'kookplaten' => 'kc_kookplaten_page_data',
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
		<main id="main-content" class="site-main site-main--apparatuur">
			<?php get_template_part( 'template-parts/apparatuur/category-page', null, [ 'data' => $data ] ); ?>
		</main>
		<?php
		continue;
	}
	?>
	<main id="main-content" class="site-main">
		<section class="page-hero page-hero--light">
			<div class="site-shell">
				<p class="section-eyebrow"><?php esc_html_e( 'Apparaatcategorie', 'keuken-centrum' ); ?></p>
				<h1 class="page-title"><?php the_title(); ?></h1>
				<p class="page-intro"><?php echo esc_html( get_the_excerpt() ); ?></p>
			</div>
		</section>
		<section class="section-shell">
			<div class="site-shell entry-grid">
				<article class="entry-body">
					<?php the_content(); ?>
				</article>
				<aside class="entry-sidebar">
					<div class="info-card">
						<h2><?php esc_html_e( 'In de showroom vergelijken', 'keuken-centrum' ); ?></h2>
						<p><?php esc_html_e( 'We laten techniek, afwerking en gebruiksgemak naast elkaar zien zodat u gericht kunt kiezen.', 'keuken-centrum' ); ?></p>
						<a class="btn btn--primary" href="<?php echo esc_url( home_url( '/contact' ) ); ?>"><?php esc_html_e( 'Plan apparatuuradvies', 'keuken-centrum' ); ?></a>
					</div>
				</aside>
			</div>
		</section>
	</main>
	<?php
endwhile;

get_footer();
