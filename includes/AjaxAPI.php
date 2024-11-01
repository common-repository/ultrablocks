<?php

declare(strict_types=1);

namespace ULTRABLOCKS;

defined('ABSPATH') || exit;

class AJAX_API {
    public function __construct() {
        add_action('wp_ajax_ub_newsletter_subscribe', [$this, 'newsletter_subscribe']);
        add_action('wp_ajax_nopriv_ub_newsletter_subscribe', [$this, 'newsletter_subscribe']);
    }

    public function newsletter_subscribe() {
        check_ajax_referer('ultrablocks-nonce', 'nonce');

        if (empty($_POST['data'])) {
            $status = 'error';
            $message = $data['errorMessage'] ?? __('Settings data missing!', 'ultrablocks');
            wp_send_json(compact('status', 'message'));
        }

        $data = json_decode(wp_unslash(html_entity_decode($_POST['data'])), true);

        if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
            $status = 'error';
            $message = __('Error occurred! Can\'t parse settings data.', 'ultrablocks');
            wp_send_json(compact('status', 'message'));
        }

        $data = wp_parse_args($this->sanitize($data), [
            'provider'        => 'mailchimp',
            'email'           => !empty($_POST['email']) ? sanitize_email(wp_unslash($_POST['email'])) : '',
            'mailchimpApiKey' => get_option('ultrablocks_mailchimp_api_key', false),
            'mailchimpListID' => get_option('ultrablocks_mailchimp_audience_id', false),
        ]);

        if (!empty($data['mailchimpApiKey']) && !empty($data['mailchimpListID'])) {
            $this->process_mailchimp($data['email'], $data);
        } else {
            $status = 'error';
            $message = __('Mailchimp API key or Audience ID missing!', 'ultrablocks');
            wp_send_json(compact('status', 'message'));
        }
    }

    private function process_mailchimp($email, $data) {
        $api_endpoint = sprintf('https://%s.api.mailchimp.com/3.0/lists/%s/members', explode('-', $data['mailchimpApiKey'])[1], $data['mailchimpListID']);

        $body = apply_filters('ub_newsletter_mailchimp_data', [
            'email_address'     => $email,
            'merge_fields'      => [
                'FNAME' => $data['fname'] ?? '',
                'LNAME' => $data['lname'] ?? '',
                'PHONE' => $data['phone'] ?? '',
            ],
            'status'            => 'subscribed',
            'update_existing'   => true,
        ]);

        $response = wp_remote_post($api_endpoint, [
            'headers'   => [
                'Content-Type'  => 'application/json',
                'Authorization' => 'Basic ' . base64_encode('user:' . $data['mailchimpApiKey']),
            ],
            'body'      => wp_json_encode($body),
            'sslverify' => true,
        ]);

        if (is_wp_error($response)) {
            wp_send_json([
                'status'  => 'error',
                'message' => $response->get_error_message(),
            ]);
        } else {
            $result = json_decode(wp_remote_retrieve_body($response), true);
            $response = [];

            if (isset($result['status']) && $result['status'] == 'subscribed') {
                $response['status'] = 'success';
                $response['message'] = $data['successMessage'] ?? __('Thank you for subscribing!', 'zoloblocks');
            } elseif (isset($result['status']) && $result['status'] == 400 && !isset($result['errors'])) {
                $response['status'] = 'warning';
                $response['message'] = $data['subscribedMessage'] ?? __('You are already subscribed!', 'zoloblocks');
            } else {
                $response['status'] = 'error';
                $response['message'] = $data['errorMessage'] ?? __('Something went wrong! Please try again.', 'zoloblocks');
            }

            wp_send_json($response);
        }
    }

    private function sanitize($array) {
        foreach ($array as $key => $value) {
            $array[$key] = is_array($value) ? $this->sanitize($value) : sanitize_text_field($value);
        }
        return $array;
    }
}

new AJAX_API();
