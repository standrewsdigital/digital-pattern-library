# File and folder overview

A list of the main folders and files in the DPL source code and brief
summaries about each.

```
src/
|-- _layouts
|   `-- ...             # Handlebars layouts.
|-- _meta
|   |-- build.tmpl      # Template for the file created at core/build.json
|   `-- dpl-nav.json    # JSON config for the navigation menu
|-- _partials
|   `-- swatch.hbs      # Handlebars partial for the colours / palettes pages.
|-- docs
|   `-- ...             # Markdown documentation files
|-- examples
|   |-- _data
|   |   `-- ...         # Data used to populate the full page examples.
|   `-- ...             # Full page examples built using Handlebars partials.
|-- fonts
|   `-- ...             # Fonts 
|-- images-core
|   `-- ...             # Images supporting core assets ( core/images )
|-- images-docs
|   `-- ...             # Images supporting docs (docs/assets/docs/images)
|-- patterns            # Pattern documentation; folder per pattern.
|   |-- accordion
|   |   |-- data                
|   |   |   `-- ...             # JSON file for populating this pattern.
|   |   |-- examples
|   |   |   `-- ...             # Examples; 1 file per pattern.
|   |   |-- _accordion.scss     # Sass partial for this pattern 
|   |   |                       # (see src/styles/screen.scss)
|   |   |-- accordion.doc.hbs   # Documentation page for the pattern
|   |   |                       #   becomes docs/patterns/accordion/index.html
|   |   |-- accordion.hbs       # The Handlebars partial for the pattern.
|   |   |                       # This is populated with data and used in 
|   |   |                       # pattern examples (see sub folder) and full
|   |   |                       # page examples (see src/examples)
|   |   `-- accordion.js        # JS for this pattern; automatically included.
|   `-- ...
|-- scripts
|   |-- vendor                  # JS files not managed through this repository.
|   |   `-- ...                 # This includes bootstrap, jQuery and our own
|   |                           # jQuery plugins.
|   |-- base.js                 # Generic JS to be included
|   |-- datatables.js           # JS for datatables only.
|   |-- doc.js                  # JS for the documentation pages
|   `-- unbreakableSpaces.js    # JS to provide &nbsp; in St&nbsp;Andrews
|-- styles
|   |-- vendor
|   |   |-- bootstrap           # A full SASS-copy of Bootstrap. When upgrading
|   |   |   `-- ...             # Bootstrap, you should be able to simply 
|   |   |                       # this folder.
|   |   `-- ...                 # Other CSS no managed through this repo.
|   |-- _bootstrap-custom.scss      # Core of the custom bootstrap theme.
|   |-- _bootstrap-mixins.scss      # Custom bootstrap mixins.
|   |-- _bootstrap-theme.scss       # Straight up CSS to override Bootstrap
|   |-- _bootstrap-variables.scss   # Variables to configure Bootstrap Sass
|   |-- _colors.scss                # All colours defined here
|   |-- _figures.scss               # Styles for figures
|   |-- _fonts.scss                 # Include all fonts.
|   |-- _icons.scss                 # Configure icons
|   |-- _utilities.scss             # Generic functions
|   |-- datatables.scss             # CSS for JavaScript DataTables
|   |-- doc.scss                    # CSS for the documentation
|   |-- header-only.scss            # CSS that only includes the header styles.
|   |-- ie.scss                     # Internet explorer styles
|   |-- print.scss                  # Print styles
|   |-- screen-bootstrap-only.scss  # Core file for the bootstrap only CSs
|   `-- screen.scss                 # Core file for screen.css
|
|-- .core-stats.txt                 # A file created whenever you run `grunt`
|                                   # or `grunt core` to track some stats.
|-- .editorconfig                   # Config for editor settings
|-- .gitignore                      # Files with git should ignore
|-- ADD-PATTERN.md
|-- bootstrap.sh                    # Kick off file for Vagrant test box.
|-- CHANGELOG.md
|-- CONTRIBUTING.md
|-- FILES.md
|-- Gruntfile.js                    # core config for Grunt tasks
|-- package.json                    # Meta about project; importantly this is
|                                   # where you update the version of the DPL.
|-- README.md
|-- SETUP.md
`-- Vagrantfile                     # Config for Vagrant test box.
```