<?php
/**
 * 404 template.
 *
 * @package Keuken_Centrum
 */

get_header();
?>
<main id="main-content" class="site-main">
	<section class="page-hero">
		<div class="site-shell">
			<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Pagina niet gevonden', 'keuken-centrum'); ?></p>
			<h1 class="page-title page-title--light">404</h1>
			<p class="page-intro page-intro--light"><?php esc_html_e('De opgevraagde pagina bestaat niet of is verplaatst. Ga verder naar de showroom, collecties of contactpagina.', 'keuken-centrum'); ?></p>
			<div class="home-hero__actions">
				<a class="btn btn--primary" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Terug naar home', 'keuken-centrum'); ?></a>
				<a class="btn btn--ghost" href="<?php echo esc_url(home_url('/contact')); ?>"><?php esc_html_e('Neem contact op', 'keuken-centrum'); ?></a>
			</div>
		</div>
	</section>
</main>
<?php
get_footer();
