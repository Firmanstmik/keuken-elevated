<?php
/**
 * Plugin Name: Keuken Theme Sync
 * Description: One-time sync of keuken-centrum theme from GitHub main. Deactivate after use.
 * Version: 1.0.0
 */

if (! defined('ABSPATH')) {
	exit;
}

add_action('admin_notices', function () {
	if (! current_user_can('switch_themes')) {
		return;
	}

	$run = isset($_GET['kc_sync_theme']) && '1' === $_GET['kc_sync_theme'] && check_admin_referer('kc_sync_theme');
	if (! $run) {
		$url = wp_nonce_url(admin_url('plugins.php?kc_sync_theme=1'), 'kc_sync_theme');
		echo '<div class="notice notice-info"><p><strong>Keuken Theme Sync</strong> — <a class="button button-primary" href="' . esc_url($url) . '">Sync theme from GitHub</a></p></div>';
		return;
	}

	$result = kc_sync_theme_from_github();
	$class  = is_wp_error($result) ? 'notice-error' : 'notice-success';
	$msg    = is_wp_error($result) ? $result->get_error_message() : $result;
	echo '<div class="notice ' . esc_attr($class) . '"><p>' . esc_html($msg) . '</p></div>';
});

/**
 * Downloads theme from GitHub and activates it.
 *
 * @return string|WP_Error
 */
function kc_sync_theme_from_github() {
	require_once ABSPATH . 'wp-admin/includes/file.php';
	require_once ABSPATH . 'wp-admin/includes/misc.php';
	require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';

	$zip_url = 'https://codeload.github.com/Firmanstmik/keuken-elevated/zip/refs/heads/main';
	$tmp     = download_url($zip_url, 120);
	if (is_wp_error($tmp)) {
		return $tmp;
	}

	$workdir = wp_upload_dir();
	$extract = trailingslashit($workdir['basedir']) . 'kc-theme-sync-' . time();
	wp_mkdir_p($extract);

	$unzip = unzip_file($tmp, $extract);
	@unlink($tmp);
	if (is_wp_error($unzip)) {
		return $unzip;
	}

	$source = '';
	$dirs   = scandir($extract);
	foreach ($dirs as $dir) {
		if ('.' === $dir || '..' === $dir) {
			continue;
		}
		$candidate = $extract . '/' . $dir . '/wordpress/keuken-centrum';
		if (is_dir($candidate)) {
			$source = $candidate;
			break;
		}
	}

	if (! $source) {
		return new WP_Error('kc_missing', 'Theme folder wordpress/keuken-centrum not found in zip.');
	}

	$dest = get_theme_root() . '/keuken-centrum';
	if (! function_exists('WP_Filesystem')) {
		require_once ABSPATH . 'wp-admin/includes/file.php';
	}
	WP_Filesystem();
	global $wp_filesystem;

	if ($wp_filesystem->is_dir($dest)) {
		$wp_filesystem->delete($dest, true);
	}

	$copied = copy_dir($source, $dest);
	if (is_wp_error($copied)) {
		return $copied;
	}

	switch_theme('keuken-centrum');
	return 'Theme synced and activated from GitHub main.';
}
