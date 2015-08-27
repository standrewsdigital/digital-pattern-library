# File and folder overview

A list of the main folders and files in the DPL source code and brief
summaries about each.

```
src/
|-- _layouts
|   `-- ...             # Handlebars layouts
|-- _meta
|   |-- build.tmpl      # Template for the file created at core/build.json
|   `-- dpl-nav.json    # JSON config for the navigation menu
|-- _partials
|   `-- swatch.hbs      # Handlebars partial for the colours / palettes pages
|-- docs
|   `-- ...             # Markdown documentation files
|-- examples
|   |-- _data
|   |   `-- ...         # Data used to populate the full page examples
|   `-- ...             # Full page examples built using Handlebars partials
|-- fonts
|   `-- ...             # Fonts 
|-- images-core
|   `-- ...             # Images for core assets ( copied to: core/images )
|-- images-docs
|   `-- ...             # Images for docs (copied to: docs/assets/docs/images)
|-- patterns            # Pattern documentation -- 1 folder per pattern
|   |-- accordion
|   |   |-- data                
|   |   |   `-- ...             # JSON variables to populate examples with
|   |   |-- examples
|   |   |   `-- ...             # Examples -- 1 file per example
|   |   |-- _accordion.scss     # Sass partial for this pattern 
|   |   |                       #   (see src/styles/screen.scss)
|   |   |-- accordion.doc.hbs   # Documentation page for the pattern
|   |   |                       #   becomes docs/patterns/accordion/index.html
|   |   |-- accordion.hbs       # Handlebars partial for the pattern
|   |   |                       #   This is populated with data and used in 
|   |   |                       #   pattern examples (see sub folder) and full
|   |   |                       #   page examples (see src/examples).
|   |   `-- accordion.js        # JS for this pattern (optional)
|   `-- ...
|-- scripts
|   |-- vendor                  # JS files not managed through this repository
|   |   `-- ...                 #   This includes Bootstrap, jQuery and
|   |                           #   jQuery plugins.
|   |-- base.js                 # Generic JS to be included
|   |-- datatables.js           # JS for datatables only
|   |-- doc.js                  # JS for the documentation pages
|   `-- unbreakableSpaces.js    # JS to provide &nbsp; in St&nbsp;Andrews
|-- styles
|   |-- vendor
|   |   |-- bootstrap           # A full SASS-copy of Bootstrap
|   |   |                       #   When upgrade Bootstrap, you should be able
|   |   |                       #   to replace this folder and the bootstrap
|   |   |                       #   scripts in vendor/.
|   |   `-- ...                 # Other CSS not managed in this repo.
|   |-- _bootstrap-custom.scss      # Heart of our custom bootstrap theme
|   |-- _bootstrap-mixins.scss      # Custom bootstrap mixins
|   |-- _bootstrap-theme.scss       # CSS to override Bootstrap
|   |-- _bootstrap-variables.scss   # Sass variables for Bootstrap
|   |-- _colors.scss                # Definition of brand colours and variants
|   |-- _figures.scss               # Styles for figure elements
|   |-- _fonts.scss                 # Definition of webfonts
|   |-- _icons.scss                 # Definition of icons
|   |-- _utilities.scss             # Generic CSS and mixins
|   |-- datatables.scss             # Styles for JavaScript DataTables
|   |-- doc.scss                    # Styles for the documentation
|   |-- header-only.scss            # Styles to support header pattern only
|   |-- ie.scss                     # Styles for Internet Explorer bugs
|   |-- print.scss                  # Styles for print
|   |-- screen-bootstrap-only.scss  # Root file for Bootstrap theme
|   `-- screen.scss                 # Root file for main CSS file
|
|-- .core-stats.txt                 # Stats file to track info about key info
|                                   #  about core assets. Created whenever you
|                                   #  build core folder.
|-- .editorconfig                   # Editor-agnostic editor settings
|-- .gitignore                      # List of files git should ignore
|-- ADD-PATTERN.md
|-- bootstrap.sh                    # Kick off file for Vagrant test box
|-- CHANGELOG.md
|-- CONTRIBUTING.md
|-- FILES.md
|-- Gruntfile.js                    # core config for Grunt tasks
|-- package.json                    # Meta about project. 
|                                   #   NOTE: Only place where you will find 
|                                   #   the version in the source code.
|-- README.md
|-- SETUP.md
`-- Vagrantfile                     # Config for Vagrant test box
```