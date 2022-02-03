/* This code colorizes the tag filter buttons
* by assuming that tag strings have prefixes of the format
* `{tag_group}--{tag_name}`. 
* E.g.: `region--usa` and `region-brazil`.
* This feature originally proposed in 
* https://github.com/marinebon/www_marinebon2/issues/43 .
*/
// === The colors for each tag group:
// colors generated using https://colors.muz.li/color-palette-generator/013088
// with "primary" color from https://github.com/marinebon/www_marinebon2/blob/master/data/themes/mbon_theme.toml
// as initial input.
const REGION_COLOR = '#01375f'
const ORGANIZATION_COLOR = '#141488'
const TOOL_COLOR = '#01884e'
const TYPE_COLOR = '#015f37'

// === The jquery selector statements for each prefix & color pair:
$("[data-filter^='.js-id-region--']").
  css('background-color', REGION_COLOR);
$("[data-filter^='.js-id-org--']").
  css('background-color', ORGANIZATION_COLOR);
$("[data-filter^='.js-id-tool--']").
  css('background-color', TYPE_COLOR);
$("[data-filter^='.js-id-product_type--']").
  css('background-color', 'yellow');
