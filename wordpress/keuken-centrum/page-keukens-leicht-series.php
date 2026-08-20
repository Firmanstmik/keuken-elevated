<?php
/**
 * Keukens Leicht series virtual page shell.
 *
 * @package Keuken_Centrum
 */

get_header();

global $kc_leicht_series_slug;
$kc_leicht_series_slug = get_query_var('kc_leicht_series');
$slug = is_string($kc_leicht_series_slug) ? $kc_leicht_series_slug : '';
?>
<main id="main-content" class="site-main site-main--keukens">
	<?php
	if ($slug && function_exists('kc_leicht_series_data') && kc_leicht_series_data($slug)) {
		get_template_part('template-parts/keukens/leicht-series', null, ['slug' => $slug]);
	} else {
		status_header(404);
		?>
		<section class="section-shell">
			<div class="site-container">
				<h1><?php esc_html_e('Serie niet gevonden', 'keuken-centrum'); ?></h1>
				<p><a href="<?php echo esc_url(home_url('/keukens/leicht/')); ?>"><?php esc_html_e('Terug naar Leicht', 'keuken-centrum'); ?></a></p>
			</div>
		</section>
		<?php
	}
	?>
</main>
<?php
get_footer();
