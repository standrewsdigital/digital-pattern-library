# Change log

All notable changes to digital pattern library will be documented in this file.
This project adheres to [semantic versioning](http://semver.org/).

Changes are grouped under the labels: `Added`, `Changed`, `Deprecated`, 
`Removed`, `Fixed`, and `Security`.


## v0.8.0

Release date: 2 December 2016


### Added

* Add text banner page.
* Create a new Font Awesome page.
* Create a new patterns page.


### Changed

* Fix link to Photoshop template in hero banner pattern.
* Rework example pages.
* Update accordion page.
* Update breadcrumbs pattern.
* Update category header.
* Update CONTRIBUTING.md and merge in ADD-PATTERN.md so all author instructions are together.
* Update documentation for Colours and Palettes.
* Update README.md 


### Removed

* Remove palletes page (superceded now by colours page).




---

## v0.7.0

Release date: 22 November 2016

### Added

* KIS widget.
* There is a global_css_fix.css file on the test subject pages e.g. http://www.st-andrews.ac.uk/subject-test/ancient-history/. This needs to be reviewed and code merged into the DPL for the appropriate patterns.
* Content 2 column pattern - add (1/2 + 1/2). Add a new two column content example with optional header and optional full-width background to the Content 2 column pattern.
* Section header - new pattern for a section header to separate the sections on the subjects page.
* Build core.js without jQuery so when IT Services developers are already using jQuery they can have use with the DPL without fear of code clashes.
* Make CHANGELOG accessible in the DPL docs.
* Featured media - new pattern for a full width background image with text to the left or right with image or video beside it. Used for content such as testimonials and reputation.
* Add and upgrade datatables.js to DPL - until now it was pulled in manually.

### Changed

* Upgrade jQuery and plugins to latest versions.
* Upgrade to Bootstrap v3.3.7.
* Subject page header size increase. Heading at top of subject page e.g. chemistry, needs to be in a larger font. Add as a new example to the content-full pattern.
* Update blog link on DPL to DPL tag.
* Tabs.
* Update DPL homepage.
* Research group / panel grid - research group information to be on individual panels arranged in a grid. The panel already exists as part of Bootstrap, but need to decide how to best display research group.
* Update documentation for ADD-PATTERN.md

### Removed

* Remove IE9 polyfills. DPL uses a couple of JavaScrip polyfills to support media queries in IE9. We no longer support IE9 so we can safely remove these.




---

## v0.6.0

Release date: 27 October 2016

### Changed

* README.md has had a significant rewrite, as has CONTRIBUTING.md which now incorporates information from ADD-PATTERN.md (now deleted).


### Removed

* ADD-PATTERN.md information has now been merged into CONTRIBUTING.md.




---

## v0.5.5

Release date: 4 October 2016

### Added

* New homepage with 'rules of engagement' text approved by
  Corporate Communications. This also features an aside showing
  current version, build date and time, plus links to the GitHub
  repository.


### Changed

* Reordered the navigation to bring About up to the top level.
* Removed the 'Ex:' prefix from Examples dropdowns. 
* Improved setup documentation for Windows users.


### Fixed

* Changed the audience header to the correct default header.
* Corrected the repository URL in package.json (it was still 
  set to Bitbucket rather than GitHub).
* Updated code in DPL change log, documentation, examples, and _layouts
  to meet house code style and standards.
* Fixed aside heading (was H2, now H3).
* Fixed Bootstrap examples nav bar.
* Small tweaks and removal of redundant code in various patterns.




---

## v0.5.4

Release date: 24 August 2016

### Added

* Added School header example.


### Changed

* Various minor CSS updates.
* Research school updates.
* Changed how Google Maps are done. Now pulls in external 
  location data and remove in-file location data.
* Updated links handlebars.


### Fixed

* Fixed accordion CSS code to make the rules more specific.
* Various minor content fixes.
* Make adjustments to responsive code.




---

## v0.5.3

Release date: 10 June 2016

### Added

* Added Google Maps pattern.
* Added first iteration of hideaway JavaScript code.
* Added new variants, placeholder images and template to 
  the Navbox Grid pattern.
* Added new light grey background variation to Tile Grid pattern.


### Changed

* Uncommented scrollspy includes.


### Fixes

* Fixed home link in base.
* Fixed CSS selector in category header.
* Fixed copy date in footer by adding JavaScript to update it.
* Fixed issue with Google Maps API key.
* Fixed copyright year in long form.
* Fixed responsive bug in Navbox Grid pattern, example 4.
* Fixed a naming convention mix-up in the Staff Listing pattern.
* Fixed positioning, z-index and ScrollSpy in Sticky Nav.
* Removed repositioning JavaScript in Tile Grid pattern.




---

## v0.5.2

Release date: 9 February 2016

### Added

* Added user stories to documentation.
* Created Contact Card pattern for staff listings.
* Created a working dummy pattern to make creating new patterns easier
  and quicker: simply copy and rename the dummy pattern as a template.
* Added Sticky Nav pattern.
* Updated .gitignore to that Sublime Text project files are now also ignored.
* Added blank Navbox grid example.


### Changed

* Updated change log regarding grunt-ftp-deploy destination.
* Replaced headers throughout the DPL.
* Increased iFrame height for examples.
* Updated header with University brand.


### Fixed

* Updated Handlebars structure to be mobile first for the 
  Navboxes and updated SCSS to adjust the changes for the 
  Navboxes. This fixes the Navbox title spilling out of the 
  box on mobile devices.
* Fixed typo in About deliverables.
* Fixed vertical alignment for chevrons.
* Fixed responsive issues in Bootstrap Advanced examples.
* Fixed example of nested media.
* Fixed example 2 in Content 2 column.
* Removed apostrophes from Gallery options.
* Fixed T4 responsive images.
* Fixed grunt-ftp-deploy to point to standrewsdigital.org.uk in light 
  of change of secondary accounts to TLS/SSL Explicit: changed CDN 
  endpoint; changed FTP destination to standrewsdigital.org.uk and fixed
  path to docs/dpl in gruntfile
* Fixed examples and background images in Info bite grid.
* Fixed inconsistent names in Long form pattern.
* Fixed Masonry grid pattern background images: missing in example.
* Fixed breaking lines and URL in mobile.
* Fixed Navbox pattern: it now hides empty navboxes.
* Fixed Navbox grid pattern for empty boxes, and updated documentation.
* Fixed inconsistent menu item in Secondary call-to-action.
* Fixed class, layout and structure in Staff profile pattern.
* Added Sticky Nav pattern to the DPL navigation (it was missing!)
* Various minor fixes in Sticky Nav pattern (hbs doc, JavaScript 
  syntax errors).




---

## v0.5.1

Release date: 16 September 2015

### Changed

* Improved documentation about long-form pattern (corrections and 
  clarifications).

### Fixed
* Removed http: protocol from Google font URL (replaced with //) so
  that it may be served under https without issue.




---

## v0.5.0

Release date: 27 August 2015

### Added

* Added long form pattern for easily building Long form style pages.
* Added ability to easily retrieve Hex and RGB(A) codes for brand colours.
* Created `.core-stats.txt` file to track filesizes of core assets.
* Added a summary JSON file into the `core` folder when built.
* Set up build process to add a text banner with version and date to all 
  compiled CSS and JS.
* Added minified versions of JavaScript files.
* Added contributor documentation: CONTRIBUTING.md, SETUP.md, ADD-PATTERN.md.


### Changed

* Restyled the colour swatches in documentation.
* Adjusted the selected colour variants.
* Improved documentation about footer pattern.
* Refactored the README.md file.


### Removed

* Removed unused Bootstrap components: Carousel and ScrollSpy.




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
