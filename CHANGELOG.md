# Change log

All notable changes to Digital Pattern Library will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

Changes are grouped under the labels: `Added`, `Changed`, `Deprecated`, 
`Removed`, `Fixed`, and `Security`.


## v0.5.5

Release date: 4 October 2016

### Changed

* DOCS (homepage) Aside content
* DOCS (homepage) making new homepage to make explicit governance responsibilities of the DPL.
* FEAT (homepage) Finalise text
* FEAT (homepage) Post QA tweaks
* FEAT (Navigation) Reorder nav
* FEAT (setup) Improve setup documentation for Windows users.


### Fixed

* DOCS (_layouts) audit _layouts
* DOCS (Change log) Update to house style
* DOCS (examples) audit examples
* FIX (Bootstrap examples) Nav bar fix
* FIX (Bootstrap examples) Nav bar fix
* FIX (Bootstrap examples) Nav bar fix
* FIX (homepage) H2 to H3 in aside
* FIX (Package.json) Change version and update repo
* FIX (patterns) small tweaks and redundant code
* FIX Change header to default header (remove audiences). 
* FIX Correct repository URL in package.json (it was still set to Bitbucket).
* FIX Remove 'Ex:' prefix from Examples dropdowns.
* FIX Update code in DPL documentation to meet house code style and standards.


---

## v0.5.4

Release date: 24 August 2016

### New feature

* FEAT (content-updates) CSS updates
* FEAT (content-updates) research school updates
* FEAT (header) school header example
* FEAT (header) update links handlebars

### Fixed

* FIX (accordion) fix css cascading
* FIX (Accordion) make CSS rules more specific
* FIX (content-updates) fix sentence
* FIX (content-updates) responsive adjustments
* FIX (google-maps) pulls in external location-data
* FIX (google-maps) remove in file location data
* FIX (version number) update version number



---

## v0.5.3

Release date: 10 June 2016

### Changed

* FEAT (enable-scrollspy) uncomment scrollspy includes
* FEAT (google-maps) added Google Maps pattern
* FEAT (google-maps) update version and check for google maps
* FEAT (google-maps) updates from commit message
* FEAT (hideaway) hideaway javascript
* FEAT (navbox) Alt text 1
* FEAT (navbox-grid) new variations on grid
* FEAT (navbox-grid) Placeholder images and template
* FEAT (tile-grid) new light grey background variation
* FEAT (version) update version number


### Fixes

* FIX (base and misc) fix home link and misc
* FIX (category-header) fix css selector
* FIX (footer) added javascript to update copy date
* FIX (google-maps) fixing api key issue
* FIX (long-form) copyright year
* FIX (navbox-grid) responsive bug in example 4
* FIX (staff-listing) fixing a naming convention mixup
* FIX (sticky nav) positioning and z-index
* FIX (sticky-nav) implementing scroll-spy
* FIX (tile-grid) remove repositioning JS




---

## v0.5.2

Release date: 9 February 2016

### Changed

* DOCS (About): Add user stories to documentation
* DOCS (About): Fix typo in deliverables
* DOCS (About): Fix typos
* DOCS (Change log): Add change to grunt-ftp-deploy destination
* FEAT (Contact card): Create contact card pattern for staff listings.
* FEAT (CSS) Changes to CSS to allow for the chevron to be vertically aligned.
* FEAT (DPL chrome) Replace headers
* FEAT (Dummy pattern): Create working dummy pattern
* FEAT (Examples) Increase example iframe height
* FEAT (Handlebars) Updating Handlebars structure to be mobile first for the Navboxes and updating SCSS to adjust the changes for the Navboxes. FIXES navbox title spilling out of the box on mobile devices.
* FEAT (sticky nav) add sticky nav
* MAINT (.gitignore): Ignore Sublime Text project files


### Fixed

* FIX (bootstrap-adv) fixing responsive issues
* FIX (bootstrap2) fix example of nested media
* FIX (Content 2 column) Example 2 broken
* FIX (Gallery) Remove apostrophes from Options
* FIX (general) to fix T4 responsive images
* FIX (grunt-ftp-deploy): Change CDN endpoint
* FIX (grunt-ftp-deploy): Change FTP destination to standrewsdigital.org.uk
* FIX (grunt-ftp-deploy): Fix path to docs/dpl in gruntfile
* FIX (header) update header with university brand
* FIX (Info bite grid) Background images in examples
* FIX (info-bite-grid) fixing examples
* FIX (Long form) Inconsistent names
* FIX (Masonry grid) Background images missing in example
* FIX (mobile-sizing) fixed breaking lines and url
* FIX (Navbox) Add CSS to hide empty Navboxs
* FIX (navbox) conditional into navbox for hidden
* FIX (Navbox) remove extra line breaks from syntax
* FIX (navbox-grid) added blank no 3 example
* FIX (navbox-grid) Documentation update
* FIX (navbox-grid) use hidden for boxes unshown
* FIX (package) version numbers
* FIX (Secondary call-to-action) Inconsistent menu item
* FIX (staff-profile) class change and structure
* FIX (staff-profile) updating layout
* FIX (Sticky nav) Add sticky-nav to DPL nav
* FIX (sticky-nav) cleanup prior to merge request
* FIX (sticky-nav) fix hbs doc file
* FIX (sticky-nav) fix JS syntax errors




---

## v0.5.1

Release date: 16 September 2015

### Changed

* Improve documentation about long-form pattern (corrections and 
  clarifications).

### Fixed
* Remove http: protocol from Google font URL (replaced with //) so
  that it may be served under https without issue.




---

## v0.5.0

Release date: 27 August 2015

### Added
* Add Long form pattern for easily building Long form style pages.
* Add ability to easily retrieve Hex and RGB(A) codes for brand colours.
* Create `.core-stats.txt` file to track filesizes of core assets.
* Add a summary JSON file into the `core` folder when built.
* Set up build process to add a text banner with version and date to all 
  compiled CSS and JS.
* Add minified versions of JavaScript files.
* Add contributor documentation: CONTRIBUTING.md, SETUP.md, ADD-PATTERN.md.


### Changed
* Restyle the colour swatches in documentation.
* Adjuste the selected colour variants.
* Improve documentation about footer pattern.
* Refactor the README.md file.


### Removed
* Remove unused Bootstrap components: carousel and scrollspy.




---

## v0.4.1

Release date: 27 July 2015

### Fixed
* Spacing issue in the header on mobile screens.




---

## v0.4.0

Release date: 24 July 2015

### Added
* Header-only JavaScript and CSS core files. 
  These will be used in places where only the header and footer styles are 
  needed.
* Added a Gallery pattern.
* Additional placeholder images for galleries.
* Added jQuery Theatre (v1.0.1) plugin to provide immersive experience.
* Added Hammer.js to support jQuery Theatre.
* Custom defaults and styling for jQuery DataTables.
* Guidance about using DataTables.


### Changed
* Updated default header pattern to have no audience links
* Added an audience-header variation examples for showing audience links.


### Fixed
* Improved how navboxes show on smaller screens, making them more concise.
* Fixed tile images that were scaling out of proportion at some screen widths.
* Fixed tile grid padding which was incorrect at smaller screen widths.
* Set navigation bar to be collapsed at iPad vertical and below.
* Authenticated header dropdown is now aligned right on mobile screens.
* Made header search placeholder text less ambiguous.




---

## v0.3.2

Release date: 18 June 2015

### Fixed
* Fixed bug where logo would flash on desktops because the
  JavaScript had to load before it would switch from standard to foundation 
  logo.
* Fixed bug where both standard and foundation logos were loading. Now CSS 
  media queries only loads the correct one.
* Fixed bug where print header was loading even though not showing. Now the 
  print stylesheet loads the correct logo for print.
* Some minor fixes on print styles. 
* Improved interactivity of the search box on mobile devices.
* Improvde spacing of audience links on mobile devices.
* Reduced size of text in `<figcaption>` elements.
* Provide PNG logo fallback for IE8.




---

## v0.3.1

Release date: 15 June 2015

### Changed
* Optimised logo-standard.svg:      69 KB -> 41 KB
* Optimised logo-foundation.svg:    60 KB -> 33 KB
* Optimised print-crest.png:        41 KB -> 11 KB


### Removed 
* Unused logos and images.




---

## v0.3.0

Release date: 10 June 2015

### Added
* Font aliasing to improve quality of fonts
* Classes for implementing navigation in WordPress to support our theme.


### Changed
* The breadcrumb pattern was updated to `<ul>` based instead of `<p>` based.


### Fixed
* Increase opacity of category header to make more legible.




---

## v0.2.0

Release date: 14 April 2015

### Added
* Local fallback copies of PT Sans in the event that Google fonts are not 
  available.
* Web application example page.


### Changed
* A new design for the header was implemented resulting considerable 
  refactoring of the header pattern.


### Fixed
* Typos in documentation.
* Missing step in the README getting started steps.
* Removed unncessary 'accessibility' id from header.
* Bug with spacing in navigation bar pattern.




---

## v0.1.1

Release date: 12 March 2015

### Added
* Better support for links within alert elements.
* Change log to summarise updates in a human readable format.


### Changed
* Table headers now default to grey with additional colors available with 
  class modifiers.
* Bootstrap panels now have card-like view, with no border and a subtle drop
  shadow.
* Improved and standardised documentation of patterns including descriptions, 
  usage and options.
* Re-ordered the navigation in the docs.


### Fixed
* Header toggle buttons were stacked on small screens.
* Tiles had a height of 200px instead of 240px.
* Sidebars had an unnecessary margin-top.
