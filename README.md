MBON marinebon.org Webite
--------------------------
This is a work-in-progress rebuild of the marinebon.org website.
Details on how to make edits are below.

# Site Content Editing Workflow
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

# Useful tools
* [**Hugo Academic CLI](https://github.com/wowchemy/hugo-academic-cli**): Automatically import publications from BibTeX
* [**prose.io markdown (+ more) editor**](prose.io): in-browser file editing alternative to github editor

# Upstream Tech
This website is built starting from the Academic Template for [Hugo](https://github.com/gohugoio/hugo).

[**Wowchemy**](https://wowchemy.com) was used to set up this website. 
The site can be edited your site in Markdown, Jupyter, or RStudio (via Blogdown).
Netlify is used to build the site with Hugo and deploy hosting on Netlify.
A CMS is provided for editing the site using Netlify (or is this a Wowchemy tech?).
