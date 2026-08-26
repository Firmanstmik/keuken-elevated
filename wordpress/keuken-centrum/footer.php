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
				<?php
				$tone = (string) ( $social['tone'] ?? '' );
				$href = (string) ( $social['href'] ?? '#' );
				?>
				<a
					class="site-footer__social site-footer__social--<?php echo esc_attr( $tone ); ?>"
					href="<?php echo esc_url( $href ); ?>"
					<?php echo str_starts_with( $href, 'mailto:' ) ? '' : 'target="_blank" rel="noopener noreferrer"'; ?>
					aria-label="<?php echo esc_attr( (string) ( $social['label'] ?? '' ) ); ?>"
				>
					<span class="site-footer__social-icon" aria-hidden="true">
						<?php if ( 'facebook' === $tone ) : ?>
							<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
						<?php elseif ( 'instagram' === $tone ) : ?>
							<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
						<?php else : ?>
							<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm.8 1.6 7.2 5.4 7.2-5.4"/></svg>
						<?php endif; ?>
					</span>
					<span><?php echo esc_html( (string) ( $social['handle'] ?? '' ) ); ?></span>
				</a>
			<?php endforeach; ?>
		</div>
		<div class="site-footer__mobile-accordions">
			<?php foreach ( (array) ( $f['mobile_groups'] ?? [] ) as $group ) : ?>
				<details class="site-footer__accordion">
					<summary><?php echo esc_html( (string) ( $group['title'] ?? '' ) ); ?></summary>
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
					<?php
					$tone = (string) ( $social['tone'] ?? '' );
					$href = (string) ( $social['href'] ?? '#' );
					?>
					<a
						class="site-footer__social site-footer__social--<?php echo esc_attr( $tone ); ?>"
						href="<?php echo esc_url( $href ); ?>"
						<?php echo str_starts_with( $href, 'mailto:' ) ? '' : 'target="_blank" rel="noopener noreferrer"'; ?>
						aria-label="<?php echo esc_attr( (string) ( $social['label'] ?? '' ) ); ?>"
					>
						<span class="site-footer__social-icon" aria-hidden="true">
							<?php if ( 'facebook' === $tone ) : ?>
								<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
							<?php elseif ( 'instagram' === $tone ) : ?>
								<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
							<?php else : ?>
								<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6.5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1zm.8 1.6 7.2 5.4 7.2-5.4"/></svg>
							<?php endif; ?>
						</span>
						<span><?php echo esc_html( (string) ( $social['handle'] ?? '' ) ); ?></span>
					</a>
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
						<li><a href="<?php echo esc_url( (string) $link[1] ); ?>"><?php echo esc_html( (string) $link[0] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
			<?php if ( $g1 ) : ?>
				<h3 class="site-footer__heading site-footer__heading--spaced"><?php kc_brand_eyebrow( (string) $g1['title'], true ); ?></h3>
				<ul class="site-footer__nav-list">
					<?php foreach ( (array) $g1['links'] as $link ) : ?>
						<li><a href="<?php echo esc_url( (string) $link[1] ); ?>"><?php echo esc_html( (string) $link[0] ); ?></a></li>
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
						<li><a href="<?php echo esc_url( (string) $link[1] ); ?>"><?php echo esc_html( (string) $link[0] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
			<?php if ( $g3 ) : ?>
				<h3 class="site-footer__heading site-footer__heading--spaced"><?php kc_brand_eyebrow( (string) $g3['title'], true ); ?></h3>
				<ul class="site-footer__nav-list">
					<?php foreach ( (array) $g3['links'] as $link ) : ?>
						<li><a href="<?php echo esc_url( (string) $link[1] ); ?>"><?php echo esc_html( (string) $link[0] ); ?></a></li>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</div>

		<div class="site-footer__column site-footer__column--contact">
			<h3 class="site-footer__heading"><?php kc_brand_eyebrow( __( 'Contact & Showroom', 'keuken-centrum' ), true ); ?></h3>
			<ul class="site-footer__contact-list site-footer__contact-list--react">
				<li class="site-footer__contact-address">
					<strong><?php echo esc_html( (string) ( $f['address'] ?? '' ) ); ?></strong>
					<span><?php echo esc_html( (string) ( $f['postal'] ?? '' ) ); ?></span>
				</li>
				<li>
					<a href="<?php echo esc_url( (string) ( $f['phone_href'] ?? '#' ) ); ?>"><?php echo esc_html( (string) ( $f['phone'] ?? '' ) ); ?></a>
				</li>
			</ul>
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
								<span aria-hidden="true"><?php echo kc_icon_map_pin(); ?></span>
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
