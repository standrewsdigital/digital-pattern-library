# Change log

All notable changes to Digital Pattern Library will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

Changes are grouped under the labels: `Added`, `Changed`, `Deprecated`, 
`Removed`, `Fixed`, and `Security`.

## [0.4.0] - 2015-07-27

### Added
- Header-only JavaScript and CSS core files. 
  These will be used in places where only the header and footer styles are 
  needed.
- Added a Gallery pattern.
- Additional placeholder images for galleries.
- Added jQuery Theatre (v1.0.1) plugin to provide immersive experience.
- Added Hammer.js to support jQuery Theatre.
- Custom defaults and styling for jQuery DataTables.
- Guidance about using DataTables.

### Changed
- Updated default header pattern to have no audience links
- Added an audience-header variation examples for showing audience links.

### Fixed
- Improved how navboxes show on smaller screens, making them more concise.
- Fixed tile images that were scaling out of proportion at some screen widths.
- Fixed tile grid padding which was incorrect at smaller screen widths.
- Set navigation bar to be collapsed at iPad vertical and below.
- Authenticated header dropdown is now aligned right on mobile screens.
- Made header search placeholder text less ambiguous.


## [0.3.2] - 2015-06-18

### Fixed
- Fixed bug where logo would flash on desktops because the
  JavaScript had to load before it would switch from standard to foundation logo.
- Fixed bug where both standard and foundation logos were loading. Now CSS media queries only loads the correct one.
- Fixed bug where print header was loading even though not showing. Now the print stylesheet loads the correct logo for print.
- Some minor fixes on print styles. 
- Improved interactivity of the search box on mobile devices.
- Improvde spacing of audience links on mobile devices.
- Reduced size of text in `<figcaption>` elements.
- Provide PNG logo fallback for IE8.


## [0.3.1] - 2015-06-15

### Changed
- Optimised logo-standard.svg:      69 KB -> 41 KB
- Optimised logo-foundation.svg:    60 KB -> 33 KB
- Optimised print-crest.png:        41 KB -> 11 KB

### Removed 
- Unused logos and images.


## [0.3.0] - 2015-06-10
### Added
- Font aliasing to improve quality of fonts
- Classes for implementing navigation in WordPress to support our theme.

### Changed
- The breadcrumb pattern was updated to <ul> based instead of <p> based.

### Fixed
- Increase opacity of category header to make more legible.


## [0.2.0] - 2015-04-14
### Added
- Local fallback copies of PT Sans in the event that Google fonts are not available.
- Web application example page.

### Changed
- A new design for the header was implemented resulting considerable 
  refactoring of the header pattern.

### Fixed
- Typos in documentation.
- Missing step in the README getting started steps.
- Removed unncessary 'accessibility' id from header.
- Bug with spacing in navigation bar pattern.


## [0.1.1] - 2015-03-12
### Added
- Better support for links within alert elements.
- Change log to summarise updates in a human readable format.

### Changed
- Table headers now default to grey with additional colors available with 
  class modifiers.
- Bootstrap panels now have card-like view, with no border and a subtle drop
  shadow.
- Improved and standardised documentation of patterns including descriptions, usage and options.
- Re-ordered the navigation in the docs.

### Fixed
- Header toggle buttons were stacked on small screens.
- Tiles had a height of 200px instead of 240px.
- Sidebars had an unnecessary margin-top.

