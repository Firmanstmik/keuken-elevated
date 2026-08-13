<?php
/**
 * Plugin Name: Keuken Theme Sync
 * Description: One-time sync of keuken-centrum theme from GitHub main. Deactivate after use.
 * Version: 1.0.2
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

function kc_sync_rmdir(string $dir): void {
	if (! is_dir($dir)) {
		return;
	}
	$items = scandir($dir);
	if (! is_array($items)) {
		return;
	}
	foreach ($items as $item) {
		if ('.' === $item || '..' === $item) {
			continue;
		}
		$path = $dir . DIRECTORY_SEPARATOR . $item;
		if (is_dir($path)) {
			kc_sync_rmdir($path);
		} else {
			@unlink($path);
		}
	}
	@rmdir($dir);
}

function kc_sync_copy_dir(string $src, string $dst): bool {
	if (! is_dir($src)) {
		return false;
	}
	if (! is_dir($dst) && ! @mkdir($dst, 0755, true)) {
		return false;
	}
	$items = scandir($src);
	if (! is_array($items)) {
		return false;
	}
	foreach ($items as $item) {
		if ('.' === $item || '..' === $item) {
			continue;
		}
		$from = $src . DIRECTORY_SEPARATOR . $item;
		$to   = $dst . DIRECTORY_SEPARATOR . $item;
		if (is_dir($from)) {
			if (! kc_sync_copy_dir($from, $to)) {
				return false;
			}
		} elseif (! @copy($from, $to)) {
			return false;
		}
	}
	return true;
}

/**
 * @return string|WP_Error
 */
function kc_sync_theme_from_github() {
	if (! class_exists('ZipArchive')) {
		return new WP_Error('kc_zip', 'ZipArchive extension is required.');
	}

	$zip_url = 'https://codeload.github.com/Firmanstmik/keuken-elevated/zip/refs/heads/main';
	$upload  = wp_upload_dir();
	$tmp     = trailingslashit($upload['basedir']) . 'kc-theme-' . time() . '.zip';
	$extract = trailingslashit($upload['basedir']) . 'kc-theme-extract-' . time();

	$response = wp_remote_get(
		$zip_url,
		[
			'timeout'  => 180,
			'stream'   => true,
			'filename' => $tmp,
		]
	);

	if (is_wp_error($response)) {
		return $response;
	}

	$code = wp_remote_retrieve_response_code($response);
	if ($code < 200 || $code >= 300 || ! file_exists($tmp)) {
		@unlink($tmp);
		return new WP_Error('kc_download', 'Could not download theme zip from GitHub (HTTP ' . $code . ').');
	}

	if (! @mkdir($extract, 0755, true) && ! is_dir($extract)) {
		@unlink($tmp);
		return new WP_Error('kc_mkdir', 'Could not create extract directory.');
	}

	$zip = new ZipArchive();
	if (true !== $zip->open($tmp)) {
		@unlink($tmp);
		kc_sync_rmdir($extract);
		return new WP_Error('kc_open', 'Could not open downloaded zip.');
	}
	$zip->extractTo($extract);
	$zip->close();
	@unlink($tmp);

	$source = '';
	$dirs   = scandir($extract);
	if (is_array($dirs)) {
		foreach ($dirs as $dir) {
			if ('.' === $dir || '..' === $dir) {
				continue;
			}
			$candidate = $extract . DIRECTORY_SEPARATOR . $dir . DIRECTORY_SEPARATOR . 'wordpress' . DIRECTORY_SEPARATOR . 'keuken-centrum';
			if (is_dir($candidate)) {
				$source = $candidate;
				break;
			}
		}
	}

	if (! $source) {
		kc_sync_rmdir($extract);
		return new WP_Error('kc_missing', 'Theme folder wordpress/keuken-centrum not found in zip.');
	}

	$dest = trailingslashit(get_theme_root()) . 'keuken-centrum';
	if (is_dir($dest)) {
		kc_sync_rmdir($dest);
	}

	if (! kc_sync_copy_dir($source, $dest)) {
		kc_sync_rmdir($extract);
		return new WP_Error('kc_copy', 'Could not copy theme files to themes directory.');
	}

	kc_sync_rmdir($extract);
	switch_theme('keuken-centrum');
	return 'Theme synced and activated from GitHub main.';
}
