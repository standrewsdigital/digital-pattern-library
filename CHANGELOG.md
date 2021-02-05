
# Change log

All notable changes to digital pattern library will be documented in this file.
This project adheres to [semantic versioning](http://semver.org/).

Changes are grouped under the labels: `Added`, `Changed`, `Deprecated`, 
`Removed`, `Fixed`, and `Security`.


---

## v1.26.0

Release date: Friday 5 February 2021

### Added
* Tags pattern.
* Example pages for event and online event.

### Changed
* Horizontal rule style.
* Improved spacing for headings within a content block.
* Documentation and HTML of event tile grid pattern.
* Documentation and HTML of event list pattern.
* Paired values list pattern now includes collapse utility class to remove vertical padding.

### Fixed
* Console warning messages.
* Colours page text colours.

---

## v1.25.1

Release date: Monday 21 December 2020

### Fixed
* Hero banner pattern image further separated from content to prevent overflow issues.
* Gumshoe script only runs if sticky navigation bar is present in the DOM.
* ARIA label added to header search field.
* Header pattern's dropdown button, removal of redundant caret icon.

---

## v1.25.0

Release date: Thursday 10 December 2020

### Added
* Gumshoe script for fixed position navigation.
* Copy code button for each code block.
* ARIA label to search form fields.
* More options for paired value list.
* Form options for hero banner pattern.
* Horizontal list pattern.
* Grey colour with alpha transparency for one implementation over multiple background colours.
* Dropdown button option with chevron.

### Changed
* Sticky horizontal nav pattern now visible on all displays, with new styling and documentation.
* Styling for code blocks.
* Code blocks now encoded to show raw HTML that is not altered by pattern's JavaScript.
* Code blocks spacing and formatting improved.
* Saerch autocomplete (Typeahead) now bold on the non query part.
* Reduce font size of headings when in a sidebar.
* Documentation and example sidebar heading levels.
* Aligned checkbox and radiobutton elements to left.
* Sizing and spacing on checkboxes and radiobuttons.
* Reduced font size of accordion item headings by one on the scale.

### Deprecated
* Dropdown button option with caret.
* Search banner with background image.

### Removed
* Bootstrap scrollspy script.
* Deprecated tile option.
* Tile colour options.
* Horizontal list code from search bar pattern to become new standalone pattern.

### Fixed
* Documentation heading levels.
* Search reset button now also resets autocomplete.
* Tidy up hero banner spacing of elements.
* Formatting of code blocks.

---

## v1.24.0

Release date: Thursday 24 September 2020

### Added
* Option for an element to not inherit the default DPL link styling.
* Support for SoundCloud audio on featured media pattern.
* Light grey background option for featured media pattern.
* Transcripts added to video embed patterns.
* New pattern for inline images.
* New pattern for YouTube video embeds.
* New pattern for SoundCloud audio embeds.

### Changed
* Heading levels for footer pattern.
* Light blue colour now AA compliant on light grey backgrounds.
* Minor changes to documentation.
* Category header pattern no longer includes a heading tag.

### Deprecated
* Video is no longer an option for page intro pattern.

### Removed
* Redundant styling for old KIS widget.

---

## v1.23.3

Release date: Thursday 13 August 2020

### Added
* Support for .text-muted class to lighten text colour for less important content.
* Font size utility class to set font size to 1rem.
* Layout support for .alternate-rows to reproduce alternating coloured rows without using tables.

### Changed
* Improved focus state on Twitter Typeahead autocomplete dropdown.
* Spacing utility classes now !important.

### Fixed
* Pagination z-index too high for selected page.
* Offset outline reset to prevent extra space in Chrome browser on focus state.
* Various display issues with navigation grid CSS columns.
* Focus states on Search bar with blue background.
* Security updates.

### Removed
* PT Serif Caption font.

---

## v1.23.2

Release date: Friday 5 June 2020

### Fixed
* Navbox active state background colour.

---

## v1.23.1

Release date: Friday 15 May 2020

### Changed
* Lightbox and DataTable scripts now separated from core script file.
* Minor documentation updates.
* jQuery version updated to 3.5.1.

### Fixed
* Display issue with Application sidebar background in Safari on certain versions of Mac OS.
* Skip to content link in documentation pages fixed.

### Removed
* Photosphere pattern.

---

## v1.23.0

Release date: Tuesday 21 April 2020

### Added
* Contrasting focus state styling across all interactive elements and links. 
* Tabs added to Search results example.
* Documented support for additional input types within forms.
* New colour swatch component.
* Colour contrast accessibility guidance added to Colours page along with additional documentation.
* ARIA support improved across a wide number of patterns.
* Callout options added to Alert pattern with additional documentation.
* Ability to avoid form fields spanning width of container.
* Web application interface added to examples.

### Changed
* Vertical spacing added between normal list items in ordered and unordered lists.
* Tile grid items' maximum width increased when stacked.
* Panel heading links now include chevron to match other block link styles.
* Various spacing and padding changes across a wide range of patterns.
* Link styles changed to underline with different hover, active and focus states.
* Tabs now stack on small width displays.
* Style changes to tabs to include greater contrast on borders and tabs, along with focus state for tab labels.
* Documentation updates across a wide range of patterns and examples.
* Improved accessibility to documentation pages.
* Tabindex applied to linked images that link to the same place as an adjacent text link. This is to prevent being read out twice on screen readers. Applies to Article header, Comment, Article list patterns.
* News landing page example updated to reflect new pattern changes.
* Gallery example page now includes page heading and introduction.
* Form example amended to meet new form guidance.
* Styling removed from form legend tag, this should instead be applied to the contained heading text.
* Form element focus state styling amended for greater contrast.
* Datatable styling amended for focussed elements along with improved indication of selected column.
* Colour palettes amended to reduce number of overall colours used and simplify the options available.
* Showcase banner colours changed to reflect updated colour palettes.
* Featured media now using 'Action' style button.
* Secondary call to action banner now using 'Action' style button and left aligned.
* Breadcrumbs style changes to reduce visual importance.
* Breadcrumbs improved for screen reader users.
* Event tile grid improved for screen reader users and more consistent components.
* Event list improved for screen reader users and more consistent components.
* Navbox rewritten to remove need for JS for links and to treat these as links rather than buttons.
* Form error messages and form documentation.

### Removed
* Transition effect on links.
* Example page for search with different styled adjacent results.
* Support for &lt;b&gt; and &lt;i&gt; tags is instead handled by CSS.
* Section header pattern.
* KIS widget.

### Fixed
* Images now displaying on Long-form example page and Vimeo video removed.
* Images now displaying correctly in lightbox on Gallery example page.
* All tags used on Contact card pattern must be linked so examples have been updated.
* More consistent font sizing and spacing across all patterns.
* Contact card layout improved on small to medium width devices.
* More consistent formatting of documentation.

### Deprecated
* Old navbox markup.
* Mini authenticated header option.

---

## v1.22.1

Release date: Monday 17 February 2020

### Added
* Dropdown button style example.
* Tag button style examples.
* Responsive helper classes.
* Fade effect for lazyloaded images.

### Changed
* Spacing and font sizing changes to search bar pattern.
* Consistent use of font icons for event based examples.
* Modal window script can now be called at any time.

### Removed
* Margin under sticky nav.

### Deprecated
* Photosphere pattern.

---

## v1.22.0

Release date: Wednesday 8 January 2020

### Added
* Article list pattern to replace more news pattern with more flexibility.
* Metadata list pattern to be used in various other patterns.

### Fixed
* Typos in documentation.
* IE11 navbox chevron sizing.

### Changed
* News landing page example replaced more news pattern with article list pattern.
* Featured news pattern now uses metadata list pattern.
* News updates pattern now uses metadata list pattern.

### Deprecated
* More news pattern replaced by article list pattern.
* Search results metadata replaced by metadata list pattern.

---

## v1.21.3

Release date: Wednesday 4 December 2019

### Changed
* More news pattern made more compact on small displays.
* Minor amends to featured news and news updates patterns to match more news spacing.

---

## v1.21.2

Release date: Tuesday 3 December 2019

### Added
* Autocomplete styling to screen.css.
* Autocomplete example to search bar pattern.

---

## v1.21.1

Release date: Tuesday 29 October 2019

### Added
* Heading with section pattern.

### Changed
* Removed top margin on headings.
* Anend other pattern's margins to handle new heading margins.

---

## v1.21.0

Release date: Thursday 24 October 2019

### Added
* Blockquote pattern.

### Changed
* Featured media pattern.
* Increased vertical spacing on hr element.


---

## v1.20.0

Release date: Friday 4 October 2019

### Added
* Article header pattern.
* Comments pattern.
* Examples for blog and news pages.

### Changed
* More news pattern layout and code improved.
* Featured news pattern layout and code improved.
* News updates pattern layout and code improved.
* Header logo now no longer h1.
* Tags on contact cards must now be linked.
* Numerical list pattern style changes.
* Showcase banner style changes and removal of icon option.
* Focus states and colour contrast improvements for accessibility.
* Navbox typography now using responsive scale.

### Fixed
* Styling being applied for table CSS classes.

---

## v1.19.2

Release date: Monday 26 August 2019

### Changed
* Accordion group toggle button now optional rather than required.
* Light cyan colour changed for improved accessibility.

---

## v1.19.1

Release date: Friday 23 August 2019

### Changed
* DPL documentation styling.
* Link colour now greater contrast to main font colour.

### Removed
* Ligature and font smoothing browser settings.

---

## v1.19.0

Release date: Thursday 22 August 2019

### Added
* Facet list pattern.
* Filter box pattern.
* Three logos in awards and affiliations footer banner now supported.

### Fixed
* Documentation typos.
* ARIA roles in accordions pattern.
* Search result spacing.
* List group stylings.
* Example update for search pattern.
* Layout fixes.

### Changed
* Image sizes referenced across DPL now standardised.
* Functionality for accordions to be open on page load.

### Removed
* Transparent colour options on colours page.


---

## v1.18.4

Release date: Monday 29 July 2019

### Added
* Disclaimer notice for limited support for Photosphere pattern.
* Browser support documentation.
* Search results pattern.

### Fixed
* Safari browser fixes for clear search button.
* Security dependencies.
* List stying within accordions.
* Open access icon display in IE 11.

---

## v1.18.3

Release date: Thursday 20 June 2019

### Added
* Clear search button for search bar pattern.
* Vertical ordering options added to navigation grid pattern.
* Small checkbox sizes.

### Fixed
* Security dependencies.
* Fontawesome free regular icons now supported.
* Styling for some instances of tables when shown on course pages.
* Spacing for page headings on DPL documentation.

### Changed
* Navigation grid pattern changed to use grid layout with fallback support.

### Removed
* All references to Glyphicons fonts from Bootstrap.

---

## v1.18.2

Release date: Tuesday 11 June 2019

### Fixed
* Security dependencies.

### Changed
* Minor amends to navigation grid pattern.

---

## v1.18.1

Release date: Thursday 6 June 2019

### Fixed
* Security dependencies.
* Change scope of how accordion is selected in jquery.

---

## v1.18.0

Release date: Wednesday 22 May 2019

### Added
* Feedback footer option.
* Page intro pattern.
* Event list pattern.
* Landing page example.
* Responsive typography added to create a consistent set of complimentary font sizes.

### Changed
* Updated footer style.
* Container now fills entire width of browser on any width lower than its maximum (1200px).
* Breadcrumbs margin now applies to entire full width block element to allow for collapsible margins.
* DPL docmentation updated to include new page intro pattern.
* H1 now recommended for page title (see page intro pattern).
* Headings and body text now using responsive typography with em and rem units rather than px.

### Fixed
* Event tile grid layout copes better with more flexible width container.

### Deprecated
* Intro pattern is now replaced with new page intro pattern.

---

## v1.17.2

Release date: Wednesday 24 April 2019

### Added
* Open access logo for publications on staff profiles.
* New summary text field added to contact card pattern.

### Changed
* Category header pattern amended to remove background image.
* Heading sizes adjusted.
* Padding amended on KIS widget ahead of cookie control implementation.

### Fixed
* Grid fix for staff profile pattern.

### Deprecated
* Category header pattern with background image.

---

## v1.17.1

Release date: Wednesday 10 April 2019

### Added
* New page examples for people listings.
* New page example for full staff profile.

### Changed
* Hero banner pattern styling.
* Hero banner pattern documentation.
* Staff profile pattern redesigned to use CSS Grid.
* Homepage example updated to use new hero banner and closer match the current live site.
* Example listings page navboxes simplified to remove images.
* Contact card pattern amended to allow tags that are not linked.
* More news pattern category links hover state now not tied to other styling for greater flexibility.

### Fixed
* Issues with floating hr.
* Paired values list improved for IE11.

---

## v1.17.0

Release date: Wednesday 20 March 2019

### Changed
* Hero banner pattern replaced with new design.
* Font Awesome updated from version 4 to version 5.
* Amend icons to use new options provided by version 5 of Font Awesome.

### Fixed
* Additional grouped links colour with blue background.
* Photosphere example now showing in DPL documentaton.
* Datatables code example now showing correct raw markup.
* Long form end piece no longer requires font icon.

### Removed
* Genericons files as no longer used.

### Deprecated
* Previous hero banner pattern.

---

## v1.16.1

Release date: Wednesday 27 February 2019

### Added
* Lazyload example to contact card pattern.

### Changed
* Style amends to contact card pattern.
* Documentation for contact card pattern.

---

## v1.16.0

Release date: Tuesday 26 February 2019

### Added
* Accessible modal window script.

### Changed
* Contact card pattern has been completely redesigned to work better responsively and cope with different amounts of content.
* Contact card makes use of new modal window feature to provide additional information for a contact.
* Main colour for body text changed to match colour palette dark grey.

### Fixed
* Address examples for footer pattern now meet house style.


---

## v1.15.6

Release date: Wednesday 13 February 2019

### Fixed
* Contact card height increases at widths where 3 adjoining cards require more space.

### Security
* Update to lodash version in package.lock.json



---

## v1.15.5

Release date: Thursday 7 February 2019

### Added
* Caption option for featured media.
* Orange background colour option for featured media.




---

## v1.15.4

Release date: Wednesday 9 January 2019

### Added
* New pattern for lists of paired values.

### Changed
* Figcaption styling and spacing amended.
* Secondary call to action pattern spacing amended.




---

## v1.15.3

Release date: Tuesday 18 December 2018

### Changed
* Header pattern to reflect new Funnelback search, removing GSA.




---

## v1.15.2

Release date: Wednesday 12 December 2018

### Added
* All examples and code blocks have been wrapped in noindex tags so they are excluded from the University website search.
* New option for footer pattern to support additional branding.
* New spacing helper classes.
* New global class for large headings.
* New keyline option for headings.

### Changed
* Secondary text within a heading moved to sit on a new line.

### Fixed
* Bullet list style now consistent when used within accordion groups.




---

## v1.15.1

Release date: Wednesday 28 November 2018

### Added
* New search bar option with background image.

### Changed
* Moved navigation pattern category higher up the list of patterns in the DPL documentation.

### Fixed
* Increased spacing for search bar heading when no sub heading present.
* Chevron image icon replaced to use Font Awesome icon in various places.
* Deprecated accordion pattern now inherits background colour rather than being set as white.
* Documentation layout fixed on featured media pattern.




---

## v1.15.0

Release date: Tuesday 13 October 2018

### Added
* New accordion pattern incorporating new styling.
* New accordion pattern groups elements within an accordion, with toggle button to open/close all elements.
* New accordion pattern has additional options for intro text and key facts to summarise the main content of an accordion element.
* New form banner option for basic implementation.
* New search bar option with additional links.
* New search bar option with grouped additional links.
* New search bar option that is constrained to a column width.

### Changed
* Accordion (old version) style changed to match new method.
* Alert pattern style changed to match colour palette.
* Alert pattern documentation and html updated to move away from Bootstrap defaults.
* Form banner documentation and examples have been amended to focus on the different implementations rather than exact use cases.
* DPL pattern search changed from using form banner pattern to search bar pattern.
* Navbox chevron changed to use Font Awesome icon to bring into line with new accordion.
* Navbox size reduced on small displays.
* Read more button chevron changed to use Font Awesome icon.
* Read more button style code moved to sit alongside general button style definitions and made more consistent with navbox.
* DPL documentation changed to use new accordion pattern.

### Deprecated
* Accordion pattern has been deprecated and replaced with new method.

### Removed
* Removed historical deprecated patterns (Glyphicons, Info bite, Info bite grid, Masonry, Masonry grid).
* Removed support for old method of accordion in newly deprecated accordion pattern.
* Removed search options from form banner pattern as these are now consolidated in search bar pattern.

### Fixed
* Current year was duplicated incorrectly in footer pattern.
* Fixed invalid markup on form elements pattern.
* Added bottom margin to read more button in news updates pattern.
* Reduce gap between two panel grids when they are siblings.
* Fixed padding on case studies option of news updates pattern.
* Showcase banner icon size conflict with navbox chevron.




---

## v1.14.2

Release date: Wednesday 24 October 2018

### Fixed
* Fix to padding on tables to set bootstrap variable.
* Change form hint text to accessible colour contrast.
* Event tile support for ie11.

### Changed
* Pagination pattern documentation.
* Pagination options to include ellipsis and buttons with visible text.

### Removed
* Removed bottom margin on form banner pattern.




---

## v1.14.1

Release date: Tuesday 9 October 2018

### Fixed
* GitHub identified a security vulnerability in some of our dependencies at package-lock.json, Randomatic has been updated to the latest version.




---

## v1.14.0

Release date: Tuesday 9 October 2018

### Added

* New event tile grid pattern.

### Changed

* Category header link now has hover state.
* Category header font changed to 'PT Serif'.
* Wrapper applied to footer, navbox grid, panel grid, showcase banner, and tile grid patterns for consistent padding that adapts to viewport.
* Examples of pattern options now clearly defined and marked with labels.
* Example homepage updated to reflect up-to-date layout.
* Bottom margin removed from hero banner.
* Showcase banner icons are now optional.
* Call-to-action button widths amended on tile grid pattern.

### Fixed
* Various typos in documentation.
* Various formatting issues in documentation.


### Removed

* Removed duplicated category header option.
* Removed navbox options for content thirds as these were combining two distinct patterns so not applicable.




---

## v1.13.1

Release date: Thursday 13 September 2018

### Fixed

* Increased padding on table data cells to increase legibility of content.




---

## v1.13.0

Release date: Tuesday 7 July 2018

### Fixed

* Datepicker was instantiated with id rather than class names which caused issues when multiple datepickers were on the same page. This has been changed to use classes.
* Datepicker z-index needed adjustment to avoid appearing underneath checkboxes.

### Added

* New pattern and options for navigation grid.




---

## v1.12.3

Release date: Wednesday 25 July 2018

### Fixed

* GitHub identified a security vulnerability in some of our dependencies at package-lock.json, Handlebars, markedJS and UglifyJS2 have all been updated to their latest versions.




---

## v1.12.2

Release date: Tuesday 19 June 2018

### Changed

* Images on the 'More news' pattern are now left-aligned, instead of right-aligned.

### Fixed

* The Universities title contained within the 'footer' pattern was only 'University of...' and not 'The University of...'. Corrected this now.




---

## v1.12.1

Release date: Friday 1 June 2018

### Added

* Margin bottom classes added to screen.scss to use on secondary call-to-action banners.

### Changed

* Form banner results text colour changed to dark grey.

### Fixed

* Navigation bar margin fixed.
* Featured news grid sizes fixed to correct spacing.




--- 

## v1.12.0

Release date: Wednesday 30 May 2018

### Added

* New option for panels pattern.
* New options for panel grid pattern.
* New options for secondary call-to-action pattern.
* New options for featured media pattern.
* New option for tile grid pattern added.
* New options for gallery pattern added.
* New option for share options pattern added.

### Changed

* Styling for box shadows used on various patterns has been altered.
* Styling for secondary call-to-action pattern has been altered.
* Styling for featured media pattern has been altered.
* Styling for featured news pattern has been altered.
* Character count for paragraph text on featured people pattern has been increased.
* Tile grid pattern mark up has been altered.

### Fixed

* Button styling on long-form intro pattern has been fixed. 
* Set CSS height/width for all images.
* Removed white space that appears when no result is returned on search bar pattern.
* Padding and margins adjusted for share options pattern.

### Deprecated

* Deprecated two options from secondary call-to-action pattern.
* Deprecated four options from featured media pattern.

### Removed

* Removed redundant options from secondary call-to-action pattern. 




---

## v1.11.2

Release date: Friday 11 May 2018


### Fixed

* All images within content items now re-size correctly.




--- 

## v1.11.1

Release date: Thursday 10 May 2018

### Changed

* Feature people title to lower case.

### Fixed

* Missing image width on long-form pages.
* Featured news styling fixed.




---

## v1.11.0

Release date: Friday 4 May 2018

### Added

* New featured people pattern.
* New showcase banner pattern.
* New icons for font awesome pattern.
* New options for hero banner pattern.

### Changed

* Hero banner pattern markup has been altered. 

### Deprecated

* Deprecated two options from hero banner pattern.




---

## v1.10.0 
 
Release date: Wednesday 2 May 2018 
 
### Added 
 
* Expert cards option to the contact card pattern. 
* Lazysizes library to enable lazy load images.
* New option for 'news updates' pattern. 
 
### Changed 
 
* Colours now match the corporate identity and are AA compliant.
* Image sizes required for 'more news', 'featured news' and 'news updates' have changed.

### Fixed

* The code for patterns 'more news', 'featured news', and 'news updates' have been reworked to improve stability. 



---

## v1.9.2

Release date: Tuesday 17 April 2018

### Changed

* Restructured the news updates pattern as it was breaking on tablet devices.

### Removed

* 'Continue reading' button from the news updates pattern.




---

## v1.9.1

Release date: Friday 6 April 2018

### Fixed

* Removed a line from CSS of the long-form gallery pattern that was breaking pages on the site. 




---

## v1.9.0

Release date: Friday 16 March 2018

### Added

* New search bar pattern.
* New numerical list pattern.
* New share options pattern.
* New option added to the news updates pattern.
* New option added to the buttons pattern.

### Changed

* Rules on usage of news updates pattern.
* Rules on usage of navbox grid pattern.




---

## v1.8.3

Release date: Wednesday 7 March 2018

### Changed

* Slight restructure to the form banner pattern.




---

## v1.8.2

Release date: Wednesday 7 February 2018

### Changed

* Rules on usage of staff profile pattern.
* Rules on usage of hero banner pattern.
* Rules on usage of content halves pattern.
* Rules on usage of navbox grid pattern.
* Rules on usage of navbox pattern.
* Font awesome share icon replaced with alternative.
* Content example page now includes two navboxes.

### Fixed

* Auto focus of text cursor added to form banner on patterns page.




---

## v1.8.1

Release date: Monday 22 January 2018

### Fixed

* Form banner added to patterns page to allow filtering of available patterns.




---

## v1.8.0

Release date: Monday 08 January 2018

### Added

* Timelapse video added to furniture docs.
* New Photosphere pattern




---

## v1.7.10

Release date: Monday 06 December 2017

### Fixed

* Font colours for content thirds and content halves patterns.




---

## v1.7.9

Release date: Monday 04 December 2017

### Fixed

* Text colour for h3 and ul for the content thirds pattern.




---

## v1.7.8

Release date: Friday 01 December 2017

### Changed

* Removed CSS min-height from col-xs-12 div.




---

## v1.7.7

Release date: Thursday 30 November 2017

### Changed

* Rules on background colour usage with content thirds pattern

### Fixed 

* Header no longer wraps around text on content thirds pattern
* Resolve padding issue with form banner on mobile devices.




---

## v1.7.6

Release date: Thursday 09 November 2017

### Changed

* Further updates to staff profile pattern to reflect CSA site.




---

## v1.7.5

Release date: Wednesday 08 November 2017

### Changed

* Update staff profile rules to reflect CSA site.




---

## v1.7.4

Release date: Wednesday 11 October 2017

### Added

* Global no-margin-bottom rule added to CSS.




---

## v1.7.3

Release date: Tuesday 10 October 2017

### Fixed

* Corrected typo in featured media pattern.




---

## v1.7.2

Release date: Monday 9 October 2017

### Added

* New option for featured media pattern, centred video.




---

## v1.7.1

Release date: Monday 9 October 2017

### Added

* Extra rule to typography pattern to make it clear that inline CSS is not allowed.




---

## v1.7.0

Release date: Thursday 21 September 2017

### Added

* Google Analytics to the DPL docs pages.
* Description lists to the typography pattern.

### Changed

* Long-form links were using border-bottom CSS to set the underline colour, they are now using text decoration.

### Fixed

* Styling for links within lists on the featured media pattern.




---

## v1.6.3

Release date: Friday 18 August 2017

### Fixed

* Accordions not appending unique ID's.
* KIS widget too big for popover box.




---

## v1.6.2

Release date: Thursday 17 August 2017

### Fixed

* Typo within the staff profiles pattern.




---

## v1.6.1

Release date: Monday 14 August 2017

### Fixed

* Colour of the column headings within the results div of the form banner pattern was set to white text on a white background, corrected to black text.




---

## v1.6.0

Release date: Tuesday 1 August 2017

### Added

* Added an option to have 3 CTA buttons to the secondary-call-to-action pattern.
* Added an option to have a transparent colour overlay to the secondary-call-to-action pattern.
* Added an option to have a light-grey background for the Form banner pattern.




---

## v1.5.1

Release date: Thursday 6 July 2017

### Fixed

* There was a jQuery warning in the console caused by a misplaced closing bracket.




---

## v1.5.0

Release date: Wednesday 5 July 2017

### Added

* Form banner pattern

### Changed

* Updated print.css to hide code on print.
* Changed form elements to add styling to radio buttons and input fields.
* Simplified the dummy pattern.




---

## v1.4.3

Release date: Monday 3 July 2017

### Fixed

* Fixed the CSS rules for the accordion pattern so that divs within accordion content won't be hidden.




---

## v1.4.2

Release date: Wednesday 28 June 2017

### Added

* Table option for the key info table.

### Changed

* Reformatted accordion pattern to make it more efficient.
* Moved code to hide accordions content from JavaScript to CSS, this removes the inline CSS.

### Fixed

* Adjusted table CSS rules on content halves to fix some weirdness.
* Add media query CSS rules to change how the gallery works on mobile.




---

## v1.4.1

Release date: Wednesday 21 June 2017

### Fixed

* Moved awards and affiliations logo banner above footer code to make it a standalone option.




---

## v1.4.0

Release date: Monday 19 June 2017

### Changed

* New footer option which includes awards and affiliations logo banner.



---

## v1.3.0

Release date: Tuesday 6 June 2017

### Changed

* New hero banner option which accommodates video embedding




---

## v1.2.0

Release date: Thursday 1 June 2017

### Changed

* Moved datatables.js into core.js
* Moved datatables.css into screen.css




---

## v1.1.0

Release date: Friday 14 April 2017

### Added

* Single panel pattern.

### Changed

* Update featured media pattern.
* Uddate long form intro pattern.
* Long form end piece date format.
* Update spacing in all pattern hbs files.
* Update header to point to https for gasearch

### Fixed

* Fix CSS rules for buttons, featured news and kis widget.




---

## v1.0.0

Release date: Friday 31 March 2017

### Changed

* Update all the example pages.
* Update documentation on the About and Using the pattern library pages.
* Update patterns for final QA of style.

### Fixed

* Fix misc small responsive issues.

### Removed

* Remove redundant examples from examples page.




---

## v0.28.0

Release date: Thursday 30 March 2017

### Changed

* Rewrite using the dpl page.
* Update intro pattern.
* Update example pages.

### Fixed

* Fix typeface naming.




---

## v0.27.0

Release date: Wednesday 29 March 2017

### Added

* Pattern for typefaces that we use.
* Example in form elements for a datepicker.

### Changed

* Rewrite DPL homepage and permissions for use.
* Updated the secondary call-to-action pattern.
* Rewrite form errors to meet documentation style.
* Form elements change checkboxes to use font awesome.
* Header to use font awesome.
* Font awesome integrated into DPL core.
* Updated example page partials.

### Deprecated

* Deprecated Glyphicons pattern.

### Fixed

* Fix datepicker on desktop.




---

## v0.26.0

Release date: Wednesday 22 March 2017

### Changed

* Update documentation for sticky nav.
* Correct CSS code for sticky nav.

### Deprecated

* Previous implementation, replacing with new example.

### Fixed

* Bug where sticky nav moves around screen on user-click.




---

## v0.25.0

Release date: Thursday 16 March 2017

### Added

* Form elements added textarea content limit counter.

### Changed

* Updated virtually all the patterns to comply with our own house style and DPL documentation structure.

### Fixed

* Rebuilt Pagination, Featured news, Form elements and Typography to comply with our structure; ex. pattern-options.json and a single .hbs file.
* Removed strange character coming from Bootstrap breadcrumps `nbsp;`




---

## v0.24.0

Release date: Monday 13 March 2017

### Added

* Featured news pattern.
* Form elements added 'dpl-form' class for new style form.

### Changed

* Tile grid update documentation and add examples.
* Navbox grid add examples and update documentation.
* Content-halves add examples and update documentation.
* Buttons, add examples and update documentation.

### Fixed

* Form elements input sizing.

### Removed

* Tile pattern, merged into tile grid.




---

## v0.23.0

Release date: Tuesday 7 March 2017

### Added

* Pattern page images.

### Changed

* Contact card documentation and examples.
* DataTables examples and options.
* Glyphicons examples.
* Form elements examples.




---

## v0.22.0

Release date: Wednesday 1 March 2017

### Changed

* KIS widget pattern.
* Navigation bar pattern.
* Form elements and form errors patterns.
* Navbox pattern.




---

## v0.21.0

Release date: Thursday 23 February 2017

### Added

* More-news pattern.

### Changed

* Contact card pattern.
* Staff profile pattern.
* Fixed navigation disappearing.
* Update the example form page.
* Update alert pattern documentation.
* Update gallery documentation.




---

## v0.20.0

Release date: Monday 20 February 2017

### Added

* Long-form quotes pattern.
* Long-form asides pattern.
* Long-form sections pattern.

### Changed

* Updated the hero banner pattern, adding more examples.
* Fixes for documentation in many patterns.

### Removed

* Long-form content pattern.




---

## v0.19.0

Release date: Tuesday 14 February 2017

### Added

* Long-form intro pattern.
* Long-form end-piece pattern.
* Long-form credits pattern.

### Removed

* Redundant long-form styles and code from the old master pattern.





---

## v0.18.0

Release date: Thursday 9 February 2017

### Added

* Added subject combo pattern for the Modern Languages subject pages.





---

## v0.17.0

Release date: Wednesday 8 February 2017

### Added

* Long-form gallery pattern.
* Tabs example for read/shared on blogs.




---

## v0.16.0

Release date: Friday 3 February 2017

### Added

* Tables pattern.
* DataTables pattern.

### Removed

* Bootstrap components and Bootstrap components - advanced.
* Removed unused example pages and supporting files.




---

## v0.15.1

Release date: Friday 3 February 2017

### Added

* Pattern specific images for the patterns.html page.




---

## v0.15.0

Release date: Friday 3 February 2017

### Added

* New typography pattern based on Bootstrap.




---

## v0.14.0

Release date: Thursday 2 February 2017

### Added

* New pattern based on Bootstrap's button.




---

## v0.13.0

Release date: Thursday 2 February 2017

### Added

* New pattern replacing Bootstrap's pagination example
* Options for pagination pattern
* New pattern for Bootstrap's responsive media embed
* Options for responsive media embed





---

## v0.12.0

Release date: Wednesday 1 February 2017

### Added

* Form elements pattern.
* Form validation pattern.

### Changed

* Form example page.




---

## v0.11.0

Release date: Tuesday 31 January 2017

### Added

* New pattern for using Glyphicons.



---

## v0.10.0

Release date: Tuesday 31 January 2017

### Added

* Added Alerts pattern.




---

## v0.9.9

Release date: Friday 27 January 2017

### Removed

* Remove link to ../fonts/pt-serif-caption/regular/PTZ56F-webfont.woff from `_fonts.scss`.




---

## v0.9.8

Release date: Tuesday 24 January 2017

### Changed

* Update KIS widget template structure.
* Update KIS widget css to move margin-right to the list item instead of the button.




---

## v0.9.7

Release date: Thursday 19 January 2017

### Added

* Added background colours to the Featured media pattern.




---

## v0.9.6

Release date: Tuesday 17 January 2017

### Changed

* Added margin to Alert element paragraphs.




---

## v0.9.5

Release date: Tuesday 17 January 2017

### Removed

* Remove wai aria role from content whole pattern.




---

## v0.9.4

Release date: Tuesday 17 January 2017

### Changed

* Update CONTRIBUTING.md to match the redesign of how the DPL is built.
* Update dummy pattern to match the redesign of how the DPL is built.




---

## v0.9.3

Release date: Monday 16 January 2017

### Removed

* Remove wai aria role from content whole pattern.
* Update dummy pattern to match the redesign of how the DPL is built.




---

## v0.9.3

### Removed

* Remove wai aria role from content whole pattern.




---

## v0.9.2

Release date: Friday 13 January 2017

### Added

* Create options to show the use of Google Maps within other patterns.

### Changed

* Instead of using a JSON file for map markers, we now use the default Google and Google My Maps embed code.
* Update documentation to reflect changes to how pattern works.

### Removed

* Remove the JavaScript file, as this is no longer needed.
* Remove all CSS styling for the pattern, except one line, as Bootstrap's responsive embed code works fine.




---

## v0.9.1

Release date: Friday 13 January 2017

### Added

* Add lightbox.js with some new examples.
* Update pattern documentation.

### Changed

* Deprecate jQuery Theatre plugin code.




---


## v0.9.0

Release date: Tuesday 10 January 2017

### Added

* Add pattern-options.json to all patterns for the new layout.
* Add troubleshooting to `SETUP.md`.

### Changed

* Update all patterns to reflect the new layout for examples and code.
* Simplify the homepage.

### Removed

* Remove the data and example folders from all the patterns, as they were no long




---

## v0.8.14

Release date: Sunday 8 January 2017

### Added

* Add section number for "Update an existing install" (now section 3).
* Add section 4 for troubleshooting, and add steps to resolve "Error: handlebars does not support render".

### Fixed

* Correct URL in text-banner on example pages to take users back to the examples homepage.




---

## v0.8.13

Release date: Tuesday 20 December 2016

### Added

* Add navigation to Bootstrap components page.

### Changed

* Reorder (A-Z) and simplify navigation on Bootstrap components - advanced page.




---

## v0.8.12

Release date: Friday 16 December 2016

### Changed

* Rename 'Pattern-pages' to 'Patterns'.
* Rename 'Example-pages' to 'Examples'.




---

## v0.8.11

Release date: Friday 16 December 2016

### Fixed

* Fix floating footer on example pages.




---

## v0.8.10

Release date: Friday 16 December 2016

### Added

* New example to the header pattern for a web application header.




---

## v0.8.9

Release date: Thursday 15 December 2016

### Changed

* Update CONTRIBUTING-CHEATSHEET to include specific instructions about updating package.json and CHANGELOG.md before deployment, and tagging releases after deployment.
* Add day names to CHANGELOG.md to match house style regarding dates.




---

## v0.8.8

Release date: Wednesday 14 December 2016

### Changed

* Merge `JavaScript dependencies` page into `using the pattern library` page.
* Merge `using jQuery DataTables` information into the `Tables - DataTables` pattern.
* Put `using the pattern library` first in the main navigation drop-down.
* Update `using the pattern library` to include guidance for third-party applications and content management systems.


### Removed

* Delete `JavaScript dependencies` page and entry in main navigation.
* Delete `using jQuery DataTables` page and entry in main navigation.


### Fixed

* Add CDN endpoint and package variables to `package.json`.




---

## v0.8.7

Release date: Tuesday 13 December 2016

### Changed

* Update footer pattern documentation.
* Social media icons within the footer now use [Font Awesome](http://fontawesome.io/) instead of SVG images.
* Add new example with deprecated code for the SVG links.




---

## v0.8.6

Release date: Monday 12 December 2016

### Changed

* Fix bug where search box can't close when screen size expanded.
* Fix bug where search box position is altered when screen size is expanded.




---

## v0.8.5

Release date: Friday 9 December 2016

### Changed

* Update header pattern documentation.
* Fix bug where search box dissapears after closing it in mobile view.




---

## v0.8.4

Release date: Friday 9 December 2016

### Changed

* CONTRIBUTING.md - remove adding to navigation and replace with adding to pattern page.




---

## v0.8.3

Release date: Thursday 8 December 2016

### Added

* New example illustrating background colour with content-thirds pattern.


### Changed

* Rename pattern content-updates to news-updates.
* Update news-updates pattern.




---

## v0.8.2

Release date: Wednesday 7 December 2016

### Added

* Create pattern content-thirds.


### Changed

* Rename pattern content-full to content-whole.
* Update content-whole pattern.
* Move `.content` class from pattern to `screen.scss`.
* Rename pattern content-2col to content-halves.
* Update content-halves pattern.




---

## v0.8.1

Release date: Tuesday 6 December 2016

### Changed

* Fix sticky nav click listener that was breaking tab content.




---

## v0.8.0

Release date: Friday 2 December 2016


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
* Update `CONTRIBUTING.md` and merge in `ADD-PATTERN.md` so all author instructions are together.
* Update documentation for colours and palettes.
* Update `README.md`.


### Removed

* Remove palettes page (superceded now by colours page).




---

## v0.7.0

Release date: Tuesday 22 November 2016

### Added

* Add KIS widget.
* There is a `global_css_fix.css` file on the test subject pages e.g. http://www.st-andrews.ac.uk/subject-test/ancient-history/. This needs to be reviewed and code merged into the DPL for the appropriate patterns.
* Content 2 column pattern - add (1/2 + 1/2). Add a new two column content example with optional header and optional full-width background to the Content 2 column pattern.
* Section header - new pattern for a section header to separate the sections on the subjects page.
* Build `core.js` without jQuery so when IT Services developers are already using jQuery they can have use with the DPL without fear of code clashes.
* Make CHANGELOG accessible in the DPL docs.
* Featured media - new pattern for a full width background image with text to the left or right with image or video beside it. Used for content such as testimonials and reputation.
* Add and upgrade `datatables.js` to DPL - until now it was pulled in manually.

### Changed

* Upgrade jQuery and plugins to latest versions.
* Upgrade to Bootstrap v3.3.7.
* Subject page header size increase. Heading at top of subject page e.g. chemistry, needs to be in a larger font. Add as a new example to the content-full pattern.
* Update blog link on DPL to DPL tag.
* Tabs.
* Update DPL homepage.
* Research group / panel grid - research group information to be on individual panels arranged in a grid. The panel already exists as part of Bootstrap, but need to decide how to best display research group.
* Update documentation for `ADD-PATTERN.md`.

### Removed

* Remove IE9 polyfills. DPL uses a couple of JavaScript polyfills to support media queries in IE9. We no longer support IE9 so we can safely remove these.




---

## v0.6.0

Release date: Thursday 27 October 2016

### Changed

* `README.md` has had a significant rewrite, as has `CONTRIBUTING.md` which now incorporates information from `ADD-PATTERN.md` (now deleted).


### Removed

* Merge `ADD-PATTERN.md` information into `CONTRIBUTING.md`.




---

## v0.5.5

Release date: Tuesday 4 October 2016

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
* Corrected the repository URL in `package.json` (it was still
  set to Bitbucket rather than GitHub).
* Updated code in DPL change log, documentation, examples, and `_layouts`
  to meet house code style and standards.
* Fixed aside heading (was `<h2>`, now `<h3>`).
* Fixed Bootstrap examples nav bar.
* Small tweaks and removal of redundant code in various patterns.




---

## v0.5.4

Release date: Wednesday 24 August 2016

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

Release date: Friday 10 June 2016

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

Release date: Tuesday 9 February 2016

### Added

* Added user stories to documentation.
* Created Contact Card pattern for staff listings.
* Created a working dummy pattern to make creating new patterns easier
  and quicker: simply copy and rename the dummy pattern as a template.
* Added Sticky Nav pattern.
* Updated .gitignore to that Sublime Text project files are now also ignored.
* Added blank Navbox grid example.


### Changed

* Updated change log regarding `grunt-ftp-deploy` destination.
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

Release date: Wednesday 16 September 2015

### Changed

* Improved documentation about long-form pattern (corrections and
  clarifications).

### Fixed
* Removed http: protocol from Google font URL (replaced with //) so
  that it may be served under https without issue.




---

## v0.5.0

Release date: Thursday 27 August 2015

### Added

* Added long form pattern for easily building Long form style pages.
* Added ability to easily retrieve Hex and RGB(A) codes for brand colours.
* Created `.core-stats.txt` file to track filesizes of core assets.
* Added a summary JSON file into the `core` folder when built.
* Set up build process to add a text banner with version and date to all
  compiled CSS and JS.
* Added minified versions of JavaScript files.
* Added contributor documentation: `CONTRIBUTING.md`, `SETUP.md`, `ADD-PATTERN.md`.


### Changed

* Restyled the colour swatches in documentation.
* Adjusted the selected colour variants.
* Improved documentation about footer pattern.
* Refactored the `README.md` file.


### Removed

* Removed unused Bootstrap components: Carousel and ScrollSpy.




---

## v0.4.1

Release date: Monday 27 July 2015

### Fixed

* Spacing issue in the header on mobile screens.




---

## v0.4.0

Release date: Friday 24 July 2015

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

Release date: Thursday 18 June 2015

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

Release date: Monday 15 June 2015

### Changed

* Optimised `logo-standard.svg`:      69 KB -> 41 KB
* Optimised `logo-foundation.svg`:    60 KB -> 33 KB
* Optimised `print-crest.png`:        41 KB -> 11 KB


### Removed

* Unused logos and images.




---

## v0.3.0

Release date: Wednesday 10 June 2015

### Added

* Font aliasing to improve quality of fonts.
* Classes for implementing navigation in WordPress to support our theme.


### Changed

* The breadcrumb pattern was updated to `<ul>` based instead of `<p>` based.


### Fixed
* Increase opacity of category header to make more legible.




---

## v0.2.0

Release date: Tuesday 14 April 2015

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

Release date: Thursday 12 March 2015

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