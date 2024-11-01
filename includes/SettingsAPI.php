<?php

declare(strict_types=1);

namespace ULTRABLOCKS;

defined('ABSPATH') || exit;


class SETTINGS_API {
    /**
     * SETTINGS_API constructor.
     */
    public function __construct() {
        add_action('init', [$this, 'ultrablocks_settings_init']);
    }

    public function ultrablocks_settings_init() {
        //register settigns for ultrablocks_google_map_api
        register_setting(
            'ultrablocks_settings_group',
            'ultrablocks_google_maps_api_key',
            [
                'type' => 'string',
                'description' => 'Google Map API Key',
                'sanitize_callback' => 'sanitize_text_field',
                'show_in_rest' => true,
                'default' => ''
            ]
        );
        register_setting(
            'ultrablocks_settings_group',
            'ultrablocks_mailchimp_api_key',
            [
                'type' => 'string',
                'description' => 'Mailchimp API Key',
                'sanitize_callback' => 'sanitize_text_field',
                'show_in_rest' => true,
                'default' => ''
            ]
        );
        register_setting(
            'ultrablocks_settings_group',
            'ultrablocks_mailchimp_audience_id',
            [
                'type' => 'string',
                'description' => 'Mailchimp API Key',
                'sanitize_callback' => 'sanitize_text_field',
                'show_in_rest' => true,
                'default' => ''
            ]
        );
        register_setting(
            'ultrablocks_settings_group',
            'ultrablocks_open_weather_map_api_key',
            [
                'type' => 'string',
                'description' => 'Open Weather Map API Key',
                'sanitize_callback' => 'sanitize_text_field',
                'show_in_rest' => true,
                'default' => ''
            ]
        );
    }
}

new SETTINGS_API();
