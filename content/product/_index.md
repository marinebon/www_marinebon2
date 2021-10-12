---

title: "Data & Software"
cms_exclude: true
view: 3
summary: "List of MBON Data and Software Products"

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
    
---
