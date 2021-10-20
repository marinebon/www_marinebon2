MBON marinebon.org Webite
--------------------------
This is a work-in-progress rebuild of the marinebon.org website.
Details on how to make edits are below.
This site is built using wowchemy and although some basic tasks are outlined below the excellent [wowchemy docs](https://wowchemy.com/docs/) are highly recommended reading.

# Site Editing Workflow
If you're just getting started here it is likely you just want to edit content on one of the pages.
There are several ways to do this but a checklist for how to do this in the easiest way is below.
Other common tasks are outlined below (like editing the nav menu) and for more information see the [wowchemy getting started page](https://wowchemy.com/docs/getting-started/get-started/).

## General content editing workflow checklist
The basics of how to edit content on an existing page.
Note that the "home" page is different and weird because it is currently using wowchemy widgets.

1. Edit website content files in `/content/` and *commit* the changes to github using one of:
    * https://marinebon2.netlify.app/admin/ Netlify CMS
    * Github website file editor interface
    * prose.io file editor interface
    * a local dev workflow
2. Your git commit will show up in the [commit history](https://github.com/marinebon/www_marinebon2/commits/master) and be saved in github's copy of the git repo.
3. The new commit will trigger Netlify to build and deploy the site. The job will show up at [app.netlify.com/sites/marinebon2/deploys](https://app.netlify.com/sites/marinebon2/deploys).
4. Once the status of the Netlify deploy build is "Published" your changes should be live on the project website [marinebon2.netlify.app](https://marinebon2.netlify.app/).
    * Errors in the build can be debugged by looking at the deploy log on netlify

Above is the most basic workflow for editing the content on this website but advanced users can also develop using the typical git workflow and hugo to do test builds without needing to commit and rely on Netlify builds.

## Adding a "news" post
1. create a file named `index.md` inside a folder within [/content/post](https://github.com/marinebon/www_marinebon2/tree/master/content/post) for your news post.
2. copy and modify the "header section" from another article's `index.md`. The "header" is everything at the top of the file between the pair of three dashes (`---`)
3. use markdown syntax inside the `index.md` file to write your article
4. commit the file to github. The site will rebuild to include your article within minutes (as described in the general editing workflow above)

## Editing publications
based on [wowchemy instructions to import-from-bibtex](https://wowchemy.com/docs/content/publications/#import-from-bibtex)
1. modify `/content/publication/MBON_publications.bib`
2. git clone & cd into repo on your local
3. cd into the `/content/` directory? (not sure yet)
4. `academic import --normalize --bibtex content/publication/MBON_publications.bib` to run the python import script
5. `git commit -a -m 'update pubs'`
6. `git push`

## Adding / editing a "product" listing
It is relatively easy to add a "MBON Data or Software Product" to the grid display. You may open an issue for help with this but the general steps are:

1. create a folder for the product in [/content/product/](https://github.com/marinebon/www_marinebon2/tree/master/content/product). The next steps take place in this folder.
2. (optional) add an image named `featured.png` to use on the product "card grid" display
3. create a file `index.md` using markdown syntax. This must include a basic header section. See other product `index.md`s for examples.
4. (optional) use the "tags" list in the `.md` header section to set relevant tags. Tags can be anything but the most important ones are listed under "filter_button" in the widget file ([/content/product/index_widget_product_grid.md](https://raw.githubusercontent.com/marinebon/www_marinebon2/master/content/product/index_widget_product_grid.md)). Below is a list of those tags (as of 2021-10):

tag description           | tag format              | examples
------------------------- | ----------------------- | ------------------------------------------------------------------------
MBON Region               | `region--{REGION_NAME}` | `region--south-florida`, `region--global`, `region--us`
associated MBON tool(s)   | `tool--{TOOL_NAME}`     | `tool--infographiq`, `tool--dashboard`
associated organizations  | `org-{ORG_NAME}`        | `org-iea`, `org-nms`, `org-fwri`
product type              | `product_type--{TYPE}`  | `product_type--tool`, `product_type--instance`, `product_type--data`

* regarding `product_type`: An explaination of the three types:
  * a `data` product represents publication of scientific data to be used by others
  * an `instance` software product is something created to address the needs of a specific group and is uniquely tied to that user-story.
  * a `tool` software product is something that can be used help to create `instance` products. This includes frameworks, libraries, etc

Publications have their own section of the website and should not be put under products. The products page exists to help users find resources they can use, so a product must link out to one of:

* a publicly usable user interface or downloadable software binaries
* a place to download a public dataset
* source code

## Editing the Nav Menu
Modify the `./config/_default/menus.toml` entries to define menu items.
To define sub-menu items use the `parent` attribute as explained [in this issue](github.com/wowchemy/wowchemy-hugo-modules#72).

## Local Dev Workflow
Wowchemy is designed to leverage lots of free cloud tools to allow CMS & WYSiWYG editing with minimal technical knowledge, but sometimes digging deeper into things is helpful.
The [wowchemy "edit on your pc" page](https://wowchemy.com/docs/getting-started/install-hugo-extended/) outlines how to get set up building the site on your local machine rather than relying on netlify (or github actions or travis CI or whatever).
This is useful for editing without needing to do a commit - something that is especially valuable when making lots of small test changes (looking at you, CSS) or debugging build issues.

# Useful tools
* [**Hugo Academic CLI](https://github.com/wowchemy/hugo-academic-cli**): Automatically import publications from BibTeX
* [**prose.io markdown (+ more) editor**](prose.io): in-browser file editing alternative to github editor

# Upstream Tech
This website is built starting from the [Academic Template](https://github.com/wowchemy/starter-academic) for [Hugo](https://github.com/gohugoio/hugo).

[**Wowchemy**](https://wowchemy.com) was used to set up this website. 
The site can be edited your site in Markdown, Jupyter, or RStudio (via Blogdown).
Netlify is used to build the site with Hugo and deploy hosting on Netlify.
A CMS is provided for editing the site using Netlify (or is this a Wowchemy tech?).
