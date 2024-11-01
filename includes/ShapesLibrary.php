<?php

/**
 * Shapes for Shape Divider block
 *
 * @package ultrablocks
 */

/**
 * ShapesLibrary
 */
class ShapesLibrary {
    /**
     * ShapesLibrary constructor.
     */
    public function __construct() {
        add_filter('ultrablocks/includes/shapes/library', array($this, 'add_default_shapes'), 9);
        add_filter('ultrablocks/includes/shapes/library', array($this, 'prepare_shapes_data'), 99999);
    }


    /**
     * Add default set of shapes.
     *
     * @param array $shapes - shapes list.
     *
     * @return array
     */
    public static function add_default_shapes($shapes = array()) {
        // print_r(ULTRABLOCKS_DIR_PATH . 'assets/images/shapes/wave.svg');
        // die;
        $shapes['default'] = array(
            'name'   => esc_html__('Default', 'ultrablocks'),
            'shapes' => array(
                array(
                    'label'                 => esc_html__('Wave', 'ultrablocks'),
                    'name'                  => 'wave',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => true,
                    'path'                  => ULTRABLOCKS_DIR_PATH . 'assets/images/shapes/wave.svg',
                ),
                array(
                    'label'                 => esc_html__('Waves', 'ultrablocks'),
                    'name'                  => 'waves',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => true,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/waves.svg',
                ),
                array(
                    'label'                 => esc_html__('Tilt', 'ultrablocks'),
                    'name'                  => 'tilt',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => true,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/tilt.svg',
                ),
                array(
                    'label'                 => esc_html__('Tilts', 'ultrablocks'),
                    'name'                  => 'tilts',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => true,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/tilts.svg',
                ),
                array(
                    'label'                 => esc_html__('Triangle', 'ultrablocks'),
                    'name'                  => 'triangle',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => false,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/triangle.svg',
                ),
                array(
                    'label'                 => esc_html__('Triangles', 'ultrablocks'),
                    'name'                  => 'triangles',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => false,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/triangles.svg',
                ),
                array(
                    'label'                 => esc_html__('Triangle Asymm', 'ultrablocks'),
                    'name'                  => 'triangle-asymmetrical',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => true,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/triangle-asymmetrical.svg',
                ),
                array(
                    'label'                 => esc_html__('Triangles Asymm', 'ultrablocks'),
                    'name'                  => 'triangles-asymmetrical',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => true,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/triangles-asymmetrical.svg',
                ),
                array(
                    'label'                 => esc_html__('Ellipse', 'ultrablocks'),
                    'name'                  => 'ellipse',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => false,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/ellipse.svg',
                ),
                array(
                    'label'                 => esc_html__('Ellipses', 'ultrablocks'),
                    'name'                  => 'ellipses',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => false,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/ellipses.svg',
                ),
                array(
                    'label'                 => esc_html__('Arrow', 'ultrablocks'),
                    'name'                  => 'arrow',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => false,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/arrow.svg',
                ),
                array(
                    'label'                 => esc_html__('Arrow Curve', 'ultrablocks'),
                    'name'                  => 'arrow-curve',
                    'allow_flip_vertical'   => true,
                    'allow_flip_horizontal' => false,
                    'path'                  => ULTRABLOCKS_DIR_PATH . '/assets/images/shapes/arrow-curve.svg',
                ),
            ),
        );

        return $shapes;
    }

    /**
     * Prepare shapes data (get SVG string).
     *
     * @param array $shapes - shapes list.
     *
     * @return array
     */
    public static function prepare_shapes_data($shapes = array()) {
        foreach ($shapes as $k => $shape_cat) {
            if (!isset($shape_cat['shapes'])) {
                continue;
            }

            foreach ($shape_cat['shapes'] as $i => $shape) {
                // phpcs:ignore
                $shapes[$k]['shapes'][$i]['svg'] = file_get_contents($shape['path']);
            }
        }

        return $shapes;
    }
}

new ShapesLibrary();
