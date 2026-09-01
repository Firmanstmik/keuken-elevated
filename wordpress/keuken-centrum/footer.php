<?php
/**
 * Footer template — React Footer.tsx parity + CMS data.
 *
 * @package Keuken_Centrum
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$f = function_exists( 'kc_footer_data' ) ? kc_footer_data() : [];
if ( ! $f ) {
	return;
}

$logo = $f['logo'] ?? '';
?>
<footer class="site-footer site-footer--react">
	<div class="site-footer__wash" aria-hidden="true"></div>

	<div class="site-shell site-footer__trust-row site-footer__trust-row--react">
		<div><span><?php echo esc_html( (string) ( $f['founded'] ?? '1978' ) ); ?></span><p><?php esc_html_e( 'Opgericht', 'keuken-centrum' ); ?></p></div>
		<div><span><?php echo esc_html( (string) ( $f['rating'] ?? '4.9★' ) ); ?></span><p><?php esc_html_e( 'Google Reviews', 'keuken-centrum' ); ?></p></div>
		<div><span><?php echo esc_html( (string) ( $f['projects'] ?? '150+' ) ); ?></span><p><?php esc_html_e( 'Projecten', 'keuken-centrum' ); ?></p></div>
		<div><span><?php echo esc_html( (string) ( $f['experience'] ?? '45+' ) ); ?></span><p><?php esc_html_e( 'Jaar ervaring', 'keuken-centrum' ); ?></p></div>
	</div>

	<div class="site-shell site-footer__hero">
		<div class="site-footer__hero-eyebrow-wrap">
			<?php kc_brand_eyebrow( (string) ( $f['hero_eyebrow'] ?? '' ), true ); ?>
		</div>
		<h2 class="site-footer__hero-title">
			<?php echo esc_html( (string) ( $f['hero_title'] ?? '' ) ); ?>
			<em><?php echo esc_html( (string) ( $f['hero_title_em'] ?? '' ) ); ?></em>
		</h2>
		<p class="site-footer__hero-copy"><?php echo esc_html( (string) ( $f['hero_copy'] ?? '' ) ); ?></p>
		<div class="site-footer__hero-actions">
			<a class="premium-pill-button premium-pill-button--blue premium-pill-button--sm" href="<?php echo esc_url( (string) ( $f['cta_primary']['url'] ?? '#' ) ); ?>">
				<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $f['cta_primary']['label'] ?? '' ) ); ?></span>
				<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
			</a>
			<a class="premium-pill-button premium-pill-button--ghost premium-pill-button--sm" href="<?php echo esc_url( (string) ( $f['cta_secondary']['url'] ?? '#' ) ); ?>">
				<span class="premium-pill-button__label"><?php echo esc_html( (string) ( $f['cta_secondary']['label'] ?? '' ) ); ?></span>
				<span class="premium-pill-button__badge" aria-hidden="true"><?php echo kc_icon_arrow_right(); ?></span>
			</a>
		</div>
	</div>

	<?php /* Mobile accordion — React md:hidden */ ?>
	<div class="site-shell site-footer__mobile">
		<?php if ( $logo ) : ?>
			<img class="site-footer__mobile-logo" src="<?php echo esc_url( $logo ); ?>" alt="<?php esc_attr_e( 'Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>" width="280" height="48" loading="lazy" decoding="async">
		<?php endif; ?>
		<p class="site-footer__mobile-copy"><?php echo esc_html( (string) ( $f['brand_copy'] ?? '' ) ); ?></p>
		<div class="site-footer__socials site-footer__socials--react">
			<?php foreach ( (array) ( $f['socials'] ?? [] ) as $social ) : ?>
				<?php kc_footer_render_social_link( (array) $social ); ?>
			<?php endforeach; ?>
		</div>
		<div class="site-footer__mobile-accordions">
			<?php foreach ( (array) ( $f['mobile_groups'] ?? [] ) as $group ) : ?>
				<details class="site-footer__accordion">
					<summary>
						<span><?php echo esc_html( (string) ( $group['title'] ?? '' ) ); ?></span>
						<span class="site-footer__accordion-icon" aria-hidden="true"><?php echo kc_icon_footer_accordion_arrow(); ?></span>
					</summary>
					<ul>
						<?php foreach ( (array) ( $group['links'] ?? [] ) as $link ) : ?>
							<li><a href="<?php echo esc_url( (string) ( $link[1] ?? '#' ) ); ?>"><?php echo esc_html( (string) ( $link[0] ?? '' ) ); ?></a></li>
						<?php endforeach; ?>
					</ul>
				</details>
			<?php endforeach; ?>
		</div>
	</div>

	<?php /* Desktop grid — React hidden md:grid */ ?>
	<div class="site-shell site-footer__grid site-footer__grid--react">
		<div class="site-footer__column site-footer__brand">
			<div class="site-footer__logo site-footer__logo--react">
				<?php if ( has_custom_logo() ) : ?>
					<?php the_custom_logo(); ?>
				<?php elseif ( $logo ) : ?>
					<img src="<?php echo esc_url( $logo ); ?>" alt="<?php esc_attr_e( 'Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>" loading="lazy" decoding="async">
				<?php else : ?>
					<span>KEUKEN-CENTRUM</span>
				<?php endif; ?>
			</div>
			<p class="site-footer__eyebrow"><?php echo esc_html( (string) ( $f['eyebrow'] ?? '' ) ); ?></p>
			<p class="site-footer__title"><?php echo esc_html( (string) ( $f['brand_copy'] ?? '' ) ); ?></p>
			<p class="site-footer__social-label"><?php echo esc_html( (string) ( $f['social_label'] ?? '' ) ); ?></p>
			<div class="site-footer__socials site-footer__socials--react">
				<?php foreach ( (array) ( $f['socials'] ?? [] ) as $social ) : ?>
					<?php kc_footer_render_social_link( (array) $social ); ?>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="site-footer__column">
			<?php
			$g0 = $f['nav_groups'][0] ?? null;
			$g1 = $f['nav_groups'][1] ?? null;
			?>
			<?php if ( $g0 ) : ?>
				<h3 class="site-footer__heading"><?php kc_brand_eyebrow( (string) $g0['title'], true ); ?></h3>
				<ul class="site-footer__nav-list">
					<?php foreach ( (array) $g0['links'] as $link ) : ?>
						<?php kc_footer_render_nav_link( (string) $link[1], (string) $link[0] ); ?>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
			<?php if ( $g1 ) : ?>
				<h3 class="site-footer__heading site-footer__heading--spaced"><?php kc_brand_eyebrow( (string) $g1['title'], true ); ?></h3>
				<ul class="site-footer__nav-list">
					<?php foreach ( (array) $g1['links'] as $link ) : ?>
						<?php kc_footer_render_nav_link( (string) $link[1], (string) $link[0] ); ?>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</div>

		<div class="site-footer__column">
			<?php
			$g2 = $f['nav_groups'][2] ?? null;
			$g3 = $f['nav_groups'][3] ?? null;
			?>
			<?php if ( $g2 ) : ?>
				<h3 class="site-footer__heading"><?php kc_brand_eyebrow( (string) $g2['title'], true ); ?></h3>
				<ul class="site-footer__nav-list">
					<?php foreach ( (array) $g2['links'] as $link ) : ?>
						<?php kc_footer_render_nav_link( (string) $link[1], (string) $link[0] ); ?>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
			<?php if ( $g3 ) : ?>
				<h3 class="site-footer__heading site-footer__heading--spaced"><?php kc_brand_eyebrow( (string) $g3['title'], true ); ?></h3>
				<ul class="site-footer__nav-list">
					<?php foreach ( (array) $g3['links'] as $link ) : ?>
						<?php kc_footer_render_nav_link( (string) $link[1], (string) $link[0] ); ?>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</div>

		<div class="site-footer__column site-footer__column--contact">
			<h3 class="site-footer__heading"><?php kc_brand_eyebrow( __( 'Contact & Showroom', 'keuken-centrum' ), true ); ?></h3>
			<div class="site-footer__contact-rows">
				<div class="site-footer__contact-row site-footer__contact-row--address">
					<span class="site-footer__contact-icon" aria-hidden="true"><?php echo kc_icon_map_pin(); ?></span>
					<div class="site-footer__contact-address">
						<strong><?php echo esc_html( (string) ( $f['address'] ?? '' ) ); ?></strong>
						<span><?php echo esc_html( (string) ( $f['postal'] ?? '' ) ); ?></span>
					</div>
				</div>
				<div class="site-footer__contact-row site-footer__contact-row--phone">
					<span class="site-footer__contact-icon" aria-hidden="true"><?php echo kc_icon_call(); ?></span>
					<a href="<?php echo esc_url( (string) ( $f['phone_href'] ?? '#' ) ); ?>"><?php echo esc_html( (string) ( $f['phone'] ?? '' ) ); ?></a>
				</div>
			</div>
			<div class="site-footer__hours">
				<?php foreach ( (array) ( $f['hours'] ?? [] ) as $row ) : ?>
					<div class="site-footer__hours-row<?php echo ( ( $row['h'] ?? '' ) === 'Gesloten' ) ? ' is-closed' : ''; ?>">
						<span><?php echo esc_html( (string) ( $row['d'] ?? '' ) ); ?></span>
						<span><?php echo esc_html( (string) ( $row['h'] ?? '' ) ); ?></span>
					</div>
				<?php endforeach; ?>
			</div>

			<?php if ( ! empty( $f['showroom_image'] ) ) : ?>
				<?php
				$showroom_title = (string) ( $f['showroom_title'] ?? __( 'Keuken Centrum Utrecht', 'keuken-centrum' ) );
				$showroom_addr  = trim( (string) ( $f['address'] ?? '' ) . ', ' . (string) ( $f['postal'] ?? '' ) );
				?>
				<a class="site-footer__showroom site-footer__showroom--react" href="<?php echo esc_url( (string) ( $f['maps_url'] ?? '#' ) ); ?>" target="_blank" rel="noopener noreferrer">
					<div class="site-footer__showroom-media">
						<img src="<?php echo esc_url( (string) $f['showroom_image'] ); ?>" alt="<?php esc_attr_e( 'Showroom Keuken-Centrum Utrecht', 'keuken-centrum' ); ?>" loading="lazy" decoding="async" width="640" height="400">
						<div class="site-footer__showroom-badge">
							<span class="site-footer__showroom-dot" aria-hidden="true"></span>
							<span><?php echo esc_html( (string) ( $f['showroom_label'] ?? __( 'Premium showroom', 'keuken-centrum' ) ) ); ?></span>
						</div>
						<div class="site-footer__showroom-overlay">
							<p class="site-footer__showroom-title"><?php echo esc_html( $showroom_title ); ?></p>
							<p class="site-footer__showroom-addr">
								<span aria-hidden="true"><?php echo kc_icon_map_pin( 12 ); ?></span>
								<?php echo esc_html( $showroom_addr ); ?>
							</p>
						</div>
					</div>
					<div class="site-footer__showroom-cta" aria-hidden="true">
						<span class="site-footer__showroom-cta-item"><?php echo kc_icon_home(); ?><?php esc_html_e( 'Bekijk showroom', 'keuken-centrum' ); ?></span>
						<span class="site-footer__showroom-cta-item"><?php echo kc_icon_map(); ?><?php esc_html_e( 'Route plannen', 'keuken-centrum' ); ?></span>
					</div>
				</a>
			<?php endif; ?>
		</div>
	</div>

	<div class="site-shell site-footer__bottom site-footer__bottom--react">
		<p>&copy; <?php echo esc_html( date_i18n( 'Y' ) ); ?> <?php esc_html_e( 'Keuken-Centrum Utrecht. Alle rechten voorbehouden.', 'keuken-centrum' ); ?></p>
		<p><?php echo esc_html( (string) ( $f['copyright_tag'] ?? '' ) ); ?></p>
		<div class="site-footer__legal">
			<?php foreach ( (array) ( $f['legal'] ?? [] ) as $i => $legal ) : ?>
				<?php if ( $i > 0 ) : ?><span class="site-footer__legal-sep" aria-hidden="true"></span><?php endif; ?>
				<a href="<?php echo esc_url( (string) ( $legal[1] ?? '#' ) ); ?>"><?php echo esc_html( (string) ( $legal[0] ?? '' ) ); ?></a>
			<?php endforeach; ?>
		</div>
	</div>
</footer>
<?php
get_template_part( 'template-parts/global/sticky-conversion-bar' );
get_template_part( 'template-parts/global/mobile-bottom-nav' );
wp_footer();
?>
</body>
</html>
