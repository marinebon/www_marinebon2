---
# An instance of the Portfolio widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 65

title: Data & Tool Products
subtitle: ''

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
  # region(s)
  - name: All
    tag: '*'
  - name: U.S.
    tag: US
  - name: Global
    tag: Global
  - name: South FL
    tag: South Florida

  filter_button:
    # associated tool(s)
  - name: infographic
    tag: infographic
  - name: Early Alert Dashboard
    tag: early alert dashboard

    # associated orgs
  - name: NOAA-IEA
    tag: IEA

    # product type
  - name: tool product
    tag: tool product
  - name: instance product
    tag: instance product
  - name: data product
    tag: data product

design:
  # Choose how many columns the section has. Valid values: '1' or '2'.
  columns: '2'

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view: 3

  # For Showcase view, flip alternate rows?
  flip_alt_rows: false
---
