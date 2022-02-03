---
# An instance of the Portfolio widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 10

title: Data & Software
subtitle: 'MBON Product Viewer'

content:
  # Page type to display. E.g. project.
  page_type: product

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
  - name: All
    tag: '*'

    # region(s)
  - name: US
    tag: region--us
  - name: Global
    tag: region--global
  - name: South FL
    tag: region--south-florida

    # associated tool(s)
  - name: Infographics
    tag: tool--infographic
  - name: Early Alert Dashboards
    tag: tool--dashboard

    # associated orgs
  - name: IEA
    tag: org--iea
  - name: NMS
    tag: org--nms
  - name: FWRI
    tag: org--fwri

    # product type
  - name: Tool Product
    tag: product_type--tool
  - name: Instance Product
    tag: product_type--instance
  - name: Data Product
    tag: product_type--data

design:
  # Choose how many columns the section has. Valid values: '1' or '2'.
  columns: '1'

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view: 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows: false
---

Open an issue [here](https://github.com/marinebon/www_marinebon2/issues) with any product edit suggestions.

<script> /* This code snipped colorizes the tag filter buttons * by assuming that tag strings have prefixes of the format * `{tag_group}--{tag_name}`. * E.g.: `region--usa` and `region-brazil`. * This feature originally proposed in * https://github.com/marinebon/www_marinebon2/issues/43 . */ // === The colors for each tag group: // colors generated using https://colors.muz.li/color-palette-generator/013088 // with "primary" color from https://github.com/marinebon/www_marinebon2/blob/master/data/themes/mbon_theme.toml // as initial input. const REGION_COLOR = '#01375f' const ORGANIZATION_COLOR = '#141488' const TOOL_COLOR = '#01884e' const TYPE_COLOR = '#015f37' // === The jquery selector statements for each prefix & color pair: $("[data-filter^='.js-id-region--']"). css('background-color', REGION_COLOR); $("[data-filter^='.js-id-org--']"). css('background-color', ORGANIZATION_COLOR); $("[data-filter^='.js-id-tool--']"). css('background-color', TYPE_COLOR); $("[data-filter^='.js-id-product_type--']"). css('background-color', 'yellow'); </script> 
