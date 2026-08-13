<?php
/**
 * Contact page template.
 *
 * @package Keuken_Centrum
 */

get_header();

$address = kc_get_option('contact_address', 'Zonnebaan 8');
$postal  = kc_get_option('contact_postal', '3542 EC Utrecht');
$phone   = kc_get_option('contact_phone', '030 241 5122');
$email   = kc_get_option('contact_email', 'info@keuken-centrum.nl');
$hours   = kc_get_option('contact_hours', 'Ma t/m za op afspraak, met uitgebreid showroomadvies.');
$note    = kc_get_option('contact_hours_note', 'Persoonlijk advies, heldere planningen en één vast aanspreekpunt van oriëntatie tot oplevering.');
?>
<main id="main-content" class="site-main">
	<?php while (have_posts()) : the_post(); ?>
		<section class="page-hero">
			<div class="site-shell">
				<p class="section-eyebrow section-eyebrow--gold"><?php esc_html_e('Contact & showroombezoek', 'keuken-centrum'); ?></p>
				<h1 class="page-title page-title--light"><?php the_title(); ?></h1>
				<p class="page-intro page-intro--light"><?php esc_html_e('Maak een afspraak voor persoonlijk advies, materiaalvergelijking en een rustige oriëntatie in onze showroom in Utrecht.', 'keuken-centrum'); ?></p>
			</div>
		</section>

		<section class="section-shell">
			<div class="site-shell contact-layout">
				<div class="entry-body">
					<?php the_content(); ?>
				</div>

				<aside class="contact-card">
					<h2><?php esc_html_e('Keuken-Centrum Utrecht', 'keuken-centrum'); ?></h2>
					<p><?php echo esc_html($address); ?><br><?php echo esc_html($postal); ?></p>
					<p><a href="<?php echo esc_url('tel:' . preg_replace('/[^0-9+]/', '', $phone)); ?>"><?php echo esc_html($phone); ?></a><br><a href="<?php echo esc_url('mailto:' . $email); ?>"><?php echo esc_html($email); ?></a></p>
					<p><?php echo esc_html($hours); ?></p>
					<p class="contact-card__note"><?php echo esc_html($note); ?></p>
					<a class="btn btn--primary" href="<?php echo esc_url('mailto:' . $email); ?>"><?php esc_html_e('Mail ons direct', 'keuken-centrum'); ?></a>
				</aside>
			</div>
		</section>
	<?php endwhile; ?>
</main>
<?php
get_footer();
