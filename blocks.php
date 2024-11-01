<?php

/**
 * Plugin Name:       UltraBlocks
 * Description:       A collection of responsive blocks for the WordPress block editor.
 * Requires at least: 6.0
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            UltraBlocks
 * Author URI:        https://ultrablocks.pro
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       ultrablocks
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}


class UltraBlocks {
    /**
     * The single class instance.
     *
     * @var $instance
     */
    private static $instance = null;

    /**
     * Path to the plugin directory
     *
     * @var $plugin_path
     */
    public $plugin_path;

    /**
     * URL to the plugin directory
     *
     * @var $plugin_url
     */
    public $plugin_url;

    /**
     * Plugin name
     *
     * @var $plugin_name
     */
    public $plugin_name;

    /**
     * Plugin version
     *
     * @var $plugin_version
     */
    public $plugin_version;

    /**
     * Plugin slug
     *
     * @var $plugin_slug
     */
    public $plugin_slug;

    /**
     * Plugin name sanitized
     *
     * @var $plugin_name_sanitized
     */
    public $plugin_name_sanitized;

    /**
     * UltraBlocks constructor.
     */
    public function __construct() {
        /* We do nothing here! */
    }

    /**
     * Get the single class instance.
     *
     * @return UltraBlocks
     */
    public static function instance() {
        if (is_null(self::$instance)) {
            self::$instance = new self();
            self::$instance->define_constants();
            self::$instance->init_hooks();
        }
        return self::$instance;
    }

    public function init_hooks() {
        $this->load_files();
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_editor_assets'));
        add_filter('block_categories_all', array($this, 'add_custom_block_category'));
        add_action('init', array($this, 'register_blocks'));
        add_filter('upload_mimes', array($this, 'upload_mimes'));
        add_filter('wp_check_filetype_and_ext', array($this, 'wp_check_filetype_and_ext'), 10, 3);

        add_filter('admin_body_class', [$this, 'ultrablocks_editor_custom_body_class']);
        add_filter('body_class', [$this, 'ultrablocks_custom_body_class']);


        if (!is_admin()) {
            add_action('wp_enqueue_scripts', array($this, 'enqueue_global_style'));
            add_action('wp_enqueue_scripts', array($this, 'enqueue_front_scripts'));
            add_action('enqueue_block_assets', array($this, 'enqueue_front_scripts'));
        }
    }

    public function upload_mimes($mimes) {
        if (!isset($mimes['json'])) {
            $mimes['json'] = 'application/json';
        }

        return $mimes;
    }


    public function wp_check_filetype_and_ext($data, $file, $filename) {
        $ext = isset($data['ext']) ? $data['ext'] : '';

        if (!$ext) {
            $exploded = explode('.', $filename);
            $ext      = strtolower(end($exploded));
        }

        if ('json' === $ext) {
            $data['type'] = 'application/json';
            $data['ext']  = 'json';
        }

        return $data;
    }
    /**
     * Define Constants
     */
    public function define_constants() {
        define('ULTRABLOCKS_FILE', __FILE__);
        define('ULTRABLOCKS_NAMESPACE', 'ULTRABLOCKS');
        define('ULTRABLOCKS_SLUG', 'ultrablocks');
        define('ULTRABLOCKS_VERSION', '1.0.0');
        define('ULTRABLOCKS_DIR_PATH', plugin_dir_path(__FILE__));
        define('ULTRABLOCKS_ADMIN_URL', plugin_dir_url(__FILE__));
        define('ULTRABLOCKS_WP_VERSION', (float) get_bloginfo('version'));
        define('ULTRABLOCKS_PHP_VERSION', (float) phpversion());
    }

    public function load_files() {
        require_once ULTRABLOCKS_DIR_PATH . 'includes/SettingsAPI.php';
        require_once ULTRABLOCKS_DIR_PATH . 'includes/AjaxAPI.php';
        require_once ULTRABLOCKS_DIR_PATH . 'includes/Admin.php';
        require_once ULTRABLOCKS_DIR_PATH . 'includes/CSSBuilder.php';
        require_once ULTRABLOCKS_DIR_PATH . 'includes/Property.php';
        require_once ULTRABLOCKS_DIR_PATH . 'includes/IconsLibrary.php';
        require_once ULTRABLOCKS_DIR_PATH . 'includes/ShapesLibrary.php';
    }


    public function enqueue_editor_assets() {
        wp_enqueue_style('style-ultrablocks', plugins_url('dist/style-ultrablocks.css', __FILE__));


        $asset_path = __DIR__ . '/dist/ultrablocks.asset.php';
        $args = require $asset_path;
        $gmaps_locale = get_locale();
        $gmaps_suffix = '.com';
        switch ($gmaps_locale) {
            case 'he_IL':
                // Hebrew correction.
                $gmaps_locale = 'iw';
                break;
            case 'zh_CN':
                // Chinese integration.
                $gmaps_suffix = '.cn';
                break;
        }
        $gmaps_locale = substr($gmaps_locale, 0, 2);
        wp_enqueue_style('@ultrablocks/library', plugins_url('/dist/ultrablocks.css', __FILE__), array('wp-codemirror'), $args['version']);
        wp_register_script('@ultrablocks/library', plugins_url('/dist/ultrablocks.js', __FILE__), $args['dependencies'], $args['version']);
        wp_localize_script('@ultrablocks/library', 'ULTRABLOCKS', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'home_url' => home_url('/'),
            'nonce' => wp_create_nonce('ultrablocks-nonce'),
            'icons'  => apply_filters('ultrablocks/includes/icons/library', array()),
            'shapes' => apply_filters('ultrablocks/includes/shapes/library', array()),
            'timezone' => wp_timezone_string(),
            'rest_url' => rest_url('ultrablocks/v1'),
            'googleMapsAPIKey' => get_option('ultrablocks_google_maps_api_key'),
            'googleMapsAPIUrl'  => 'https://maps.googleapis' . $gmaps_suffix . '/maps/api/js?v=3.exp&language=' . esc_attr($gmaps_locale),
            'assetsPath' => plugins_url('/assets/', __FILE__),
        ));

        wp_enqueue_script('lottie-player', plugins_url('/assets/vendor/lottie-player/lottie-player.js', __FILE__), array(), '5.7.8', true);
    }

    public function add_custom_block_category($categories) {
        $category = array(
            'slug' => 'ultrablocks',
            'title' => 'UltraBlocks',
        );
        return array_merge(array($category), $categories);
    }

    public function register_blocks() {
        $dist_dir = __DIR__ . '/dist/';
        foreach (scandir($dist_dir) as $name) {
            if (!str_contains($name, '.')) {
                register_block_type($dist_dir . $name);
            }
        }
    }

    public function enqueue_global_style() {
        $gmaps_locale = get_locale();
        $gmaps_suffix = '.com';
        switch ($gmaps_locale) {
            case 'he_IL':
                // Hebrew correction.
                $gmaps_locale = 'iw';
                break;
            case 'zh_CN':
                // Chinese integration.
                $gmaps_suffix = '.cn';
                break;
        }
        $gmaps_locale = substr($gmaps_locale, 0, 2);
        wp_enqueue_style('style-ultrablocks', plugins_url('dist/style-ultrablocks.css', __FILE__), array(), ULTRABLOCKS_VERSION);
        wp_enqueue_script('ultrablocks-helper', ULTRABLOCKS_ADMIN_URL . 'assets/scripts/helper.js', [], ULTRABLOCKS_VERSION, true);
        wp_localize_script('ultrablocks-helper', 'ULTRABLOCKS', array(
            'timezone' => wp_timezone_string(),
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ultrablocks-nonce'),
            'googleMapsAPIKey' => get_option('ultrablocks_google_maps_api_key'),
            'googleMapsAPIUrl'  => 'https://maps.googleapis' . $gmaps_suffix . '/maps/api/js?v=3.exp&language=' . esc_attr($gmaps_locale),
        ));
    }

    public function enqueue_front_scripts() {
        $post = get_post();
        if ($post && $post->post_content) {
            $blocks = parse_blocks($post->post_content);
            foreach ($blocks as $block) {
                $this->style_block($block);
            }
        }

        /* block-templates */
        global $_wp_current_template_content;
        if (current_theme_supports('block-templates') && $_wp_current_template_content) {
            $blocks = parse_blocks($_wp_current_template_content);
            foreach ($blocks as $block) {
                $this->style_block($block);
            }
        }
        $luxon_path = plugins_url('/assets/vendor/luxon/luxon.min.js', __FILE__);
        wp_register_script('luxon', $luxon_path, array(), '3.4.4', true);
        wp_register_script('lottie', plugins_url('/assets/vendor/lottie-player/lottie-player.js', __FILE__), array(), '5.7.8', true);

        if (has_block('ultrablocks/countdown')) {
            wp_enqueue_script('luxon');
        }
        if (has_block('ultrablocks/lottie')) {
            wp_enqueue_script('lottie');
        }
    }

    public function style_block($block) {
        $attrs = $block['attrs'] ?? array();
        $block_id = $attrs['blockId'] ?? '';
        if ($block_id) {
            $css = $this->block_css($block);
            if ($css) {
                wp_add_inline_style('style-ultrablocks', $css);
            }
        }

        foreach ($block['innerBlocks'] ?? array() as $inner_block) {
            $this->style_block($inner_block);
        }
    }

    public function block_css($block) {

        $css = '';
        $registry = WP_Block_Type_Registry::get_instance();
        $attrs = $block['attrs'] ?? array();
        $block_id = $attrs['blockId'] ?? '';
        if ($block_id) {
            foreach ($attrs as $attr => $value) {
                if (is_array($value) && !empty($value)) {
                    $selector = $value['__selector__'] ?? null;
                    if (!$selector) {
                        $block_type = $registry->get_registered($block['blockName']);
                        if ($block_type) {
                            $selector = $block_type->attributes[$attr]['selector'] ?? null;
                        }
                    }
                    $css .= $this->build_css("ultrablocks-$block_id", $value, array('selector' => $selector));
                }
            }
        }
        return $css;
    }

    public function build_css($id, $attributes, $options = array()) {
        $builder = new ULTRABLOCKS\CSSBuilder();
        $builder->add_attributes($attributes);
        return $builder->to_css($id, $options);
    }

    public function ultrablocks_editor_custom_body_class($classes) {
        // Check if we are on editing screen in WordPress admin
        if (is_admin() && isset($_GET['action']) && $_GET['action'] === 'edit') {
            $classes .= ' ultrablocks-editor';
        }
        return $classes;
    }
    public function ultrablocks_custom_body_class(array $classes) {
        $new_class =  'ultrablocks-frontend';
        if ($new_class) {
            $classes[] = $new_class;
        }
        return $classes;
    }
}



/**
 * Function works with the UltraBlocks class instance
 *
 * @return object UltraBlocks
 */
function ultrablocks() {
    return UltraBlocks::instance();
}
add_action('plugins_loaded', 'ultrablocks');
