<?php

declare(strict_types=1);

namespace ULTRABLOCKS;

defined('ABSPATH') || exit;


class ULTRABLOCKS_ADMIN {
    /**
     * ULTRABLOCKS_ADMIN constructor.
     */
    protected $icon_data_url;
    public function __construct() {
        add_action('admin_menu', array($this, 'admin_menu'));
        add_action('admin_enqueue_scripts', array($this, 'admin_enqueue_scripts'));
    }

    public function admin_enqueue_scripts($screen) {
        if ($screen !== 'toplevel_page_ultrablocks') {
            return;
        }
        wp_enqueue_style('wp-components');
        wp_enqueue_style('ultrablocks-admin', plugins_url('admin/style-ultrablocks.css', __DIR__), array(), ULTRABLOCKS_VERSION);
        wp_enqueue_script('ultrablocks-admin', plugins_url('admin/ultrablocks-admin.js', __DIR__), array('wp-i18n', 'wp-element', 'wp-components', 'wp-blocks', 'wp-editor', 'wp-data'), ULTRABLOCKS_VERSION, true);
        wp_localize_script('ultrablocks-admin', 'ultrablocksAdminObj', [
            'version' => ULTRABLOCKS_VERSION,
            'nonce' => wp_create_nonce('wp_rest'),
            'restUrl' => rest_url('ultrablocks/v1'),
            'restNonce' => wp_create_nonce('wp_rest'),
            'restNonceHeader' => wp_create_nonce('wp_rest'),
            'assetsUrl' => ULTRABLOCKS_ADMIN_URL . 'assets/',
        ]);
    }



    // Path: includes/Admin.php (continued
    /**
     * Add admin menu.
     */
    public function admin_menu() {
        add_menu_page(
            esc_html__('UltraBlocks', 'ultrablocks'),
            esc_html__('UltraBlocks', 'ultrablocks'),
            'manage_options',
            'ultrablocks',
            array($this, 'display_admin_page'),
            'data:image/svg+xml;base64,' . base64_encode(file_get_contents(ULTRABLOCKS_DIR_PATH . 'assets/images/admin-icon.svg')),
            56.9
        );

        // add_submenu_page(
        //     'ultrablocks',
        //     '',
        //     esc_html__('Blocks', 'ultrablocks'),
        //     'manage_options',
        //     'ultrablocks'
        // );
        // add_submenu_page(
        //     'ultrablocks',
        //     '',
        //     esc_html__('Settings', 'ultrablocks'),
        //     'manage_options',
        //     'admin.php?page=ultrablocks&sub_page=settings'
        // );
    }

    /**
     * Render the admin page.
     */
    public function display_admin_page() {
?>
        <div class="ultrablocks-admin-page"></div>
<?php
    }
}

new ULTRABLOCKS_ADMIN();
