# Contributing to the digital pattern library

Version 0.4
Last updated: Sunday 15 January 2017

<!-- MarkdownTOC -->

- [1. Introduction](#1-introduction)
    - [1.1 Set up](#11-set-up)
    - [1.2 Principles](#12-principles)
    - [1.3 Workflow](#13-workflow)
    - [1.4 Collaboration with digital communications team](#14-collaboration-with-digital-communications-team)
    - [1.5 Digital standards](#15-digital-standards)
    - [1.6 Version numbers](#16-version-numbers)
        - [1.6.1 Source code version numbers](#161-source-code-version-numbers)
        - [1.6.2 Git tags for versions](#162-git-tags-for-versions)
    - [1.7 Change log](#17-change-log)
- [2. How to build the DPL](#2-how-to-build-the-dpl)
    - [2.1 Build core and docs](#21-build-core-and-docs)
        - [2.1.1 Build core only](#211-build-core-only)
        - [2.1.2 Build docs](#212-build-docs)
    - [2.2 Grunt watch \(interactive building\)](#22-grunt-watch-interactive-building)
- [3. How to add a new pattern](#3-how-to-add-a-new-pattern)
    - [3.1 Anatomy of a pattern](#31-anatomy-of-a-pattern)
    - [3.2 Name your pattern](#32-name-your-pattern)
    - [3.3 Branch from master](#33-branch-from-master)
    - [3.4 Create base files](#34-create-base-files)
        - [3.4.1 Documentation file \(`*.doc.hbs`\)](#341-documentation-file-dochbs)
        - [3.4.2 Pattern template file \(`*.hbs`\)](#342-pattern-template-file-hbs)
        - [3.4.3 Pattern options file \(`*-options.json`\)](#343-pattern-options-file--optionsjson)
        - [3.4.4 Sass CSS file \(`_*.scss`\)](#344-sass-css-file-_scss)
        - [3.4.5 JavaScript file \(`*.js`\)](#345-javascript-file-js)
    - [3.5 Hook your new pattern into the DPL](#35-hook-your-new-pattern-into-the-dpl)
        - [3.5.1 Add the Sass partial](#351-add-the-sass-partial)
        - [3.5.2 Add to patterns page](#352-add-to-patterns-page)
    - [3.6 Run Grunt \(to test\)](#36-run-grunt-to-test)
    - [3.7 Commit](#37-commit)
    - [3.8 Continue building...](#38-continue-building)
- [4.0 How to add an example page](#40-how-to-add-an-example-page)

<!-- /MarkdownTOC -->



## 1. Introduction

Hurrah! So you want to contribute to the digital pattern library (DPL)? That's great news! This guide should get you started.

The first thing to do is to make sure you have permission to use and develop the DPL. Details may be found on the [DPL homepage](https://www.st-andrews.ac.uk/dpl/), along with a list of approved developers.


### 1.1 Set up

If you haven't already set up your development environment, see [SETUP.md](SETUP.md).


### 1.2 Principles

* Nothing should be in the pattern library unless it is used on a live website or web application — we don't build patterns 'just in case'. Redundant patterns should be deprecated and eventually removed.
* The pattern library should be opinionated.


### 1.3 Workflow

Workflow is about how we branch source code, and then merge those changes back in again.

We use [GitHub Flow](https://guides.github.com/introduction/flow/) which is a fairly simple workflow that has just enough structure. Read [Scott Chacon's article about Github Flow](http://scottchacon.com/2011/08/31/github-flow.html) for a good introduction. The main points are:

* All development must take place in feature branches.
* Feature branches should be branched from `master`.
* Commit often in your feature branches.
* When features are near complete, submit a pull request for that feature
  branch to be merged into `master`.
* Code reviews are a part of the pull request. Ideally, a person (or persons
  if you are doing pair QAing) other than yourself should review (at a minimum
  conduct a sanity check) on all features before they are merged into `master`.
* When approved by your reviewer, you should non-fast-forward merge your
  feature branch into `master` and resolve any conflicts. This preserves the
  history of how each feature was made.
* The code should then be uploaded to [www.st-andrews.ac.uk/~cdn](http://www.st-andrews.ac.uk/~cdn/) and [www.st-andrews.ac.uk/dpl/](www.st-andrews.ac.uk/dpl) and tagged in GitHub.


### 1.4 Collaboration with digital communications team

Developers using the DPL must not fork the code in GitHub.

No patterns or elements (such as colours) in the DPL may be edited without liaising with the digital communications team. This is the case in both the DPL and in any content management system: patterns should not be modified in any manner. Do not use CSS to overrule DPL elements, patterns, fonts etc.

New patterns may only be created by developers working in collaboration with the digital communications team.


### 1.5 Digital standards

All code written must follow the digital communications team’s [code standards](https://www.st-andrews.ac.uk/digital-standards/service-manual/code-standards/). Rules on all patterns must be adhered to – if in doubt, please ask.

Commit messages must follow the [commit message style guide](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/commit-messages.md).


### 1.6 Version numbers

The digital pattern library follows [semantic versioning](http://semver.org/). This means that every version number has three parts:

```
major.minor.patch
```

When determining the appropriate number for a new version, increment the:

* major version when you make incompatible API changes,
* minor version when you add functionality in a backwards-compatible manner, and
* patch version when you make backwards-compatible bug fixes.

See [semantic versioning](http://semver.org/) for more information.

Whenever you release a new version you must update the version in the source code and add a Git tag for that version.


#### 1.6.1 Source code version numbers

The version number is stored in the `package.json` file in the root of the DPL. You must change the version number here to your new version number and then rebuild `core/` and `docs/` with Grunt. When Grunt runs, the version number found in `package.json` is listed at the top of all the JavaScript and CSS core assets and is also output in the title of the documentation pages, and the DPL homepage.


#### 1.6.2 Git tags for versions

We follow the convention that for version `0.5.4` the Git tag would be:

```
v0.5.4
```

But the folder that is deployed to on the CDN and for the docs would simply be

```
0.5.4
```

The reason for having the extra `v` in the Git tag is that it means you can quickly find all the version tags since you may have non-version related tags in your Git repository. There's not really a strong argument for or against the `v` – consistency is the main thing.


### 1.7 Change log

We really cannot emphasize this strongly enough: having a human-readable change log is essential to quickly bringing new developers up to speed with a project. Therefore, whenever you work on the pattern library you need to update `CHANGELOG.md` to reflect those changes.

It's best to document changes as you go; that way updates to `CHANGELOG.md` get committed alongside the changes to the code. This can lead to merge conflicts, however, so you may wish to track change log entries in a local file within your patterns while you develop then merge these into master later.

At a minimum, each time you add a Git tag and release a new version of the pattern library the change log should be updated to reflect that new version, the date it was released and the changes that have occured since the last version.

See [CHANGELOG.md](CHANGELOG.md).




---

## 2. How to build the DPL

The DPL uses a combination of Node, Grunt, Compass (Sass), Handlebars and various other tools to compile the source code in `/src/` and build two collections of components:

1. `/core/` - Production CSS, JavaScript, fonts and images.
2. `/docs/` - Documentation about using the patterns in the library and
  other information for developers who use the core assets.

(Docs relies on core for its look-and-feel. In other words, the digital pattern library documentation uses the digital pattern to present itself.)

In the repository, we have the following additional documentation aimed at
assisting those who contribute and develop the pattern library:

* [SETUP.md](SETUP.md) – How to set up your development environment.
* [FILES.md](FILES.md) – Overview of source folders and files.
* [CONTRIBUTING.md](CONTRIBUTING.md) – General guidelines for contributing to
   pattern library (this document).

After getting set up, you can use the following Grunt tasks to carry out the following actions:


### 2.1 Build core and docs

```
$ grunt
```

This command will build the core assets and place them in `core/` and then
build the documentation and place it in `docs/`. Behind the scenes it runs the
following two individual commands:


#### 2.1.1 Build core only

```
$ grunt core
```

This command builds the core assets and places them in `core/`.


#### 2.1.2 Build docs

```
$ grunt docs
```

This command builds the documentation and places it in `docs/` and copies
what's currently in `core/` into `docs/assets/core/` for use by the
documentation and examples.


### 2.2 Grunt watch (interactive building)

```
$ grunt watch
```

This command starts Grunt in a 'watch' mode. This monitors files in `src/`
and if something changes it will run the appropriate tasks to rebuild
`core/` and `docs/`. It also starts a live reload server so that any pages
open to local copies of the docs will reload automatically once `core/` and `docs/` have finished building.

This is really helpful when actively developing patterns.

Note: always run `grunt` at least once beforing running `grunt watch` since it only rebuilds the parts that have changed.




---

## 3. How to add a new pattern


### 3.1 Anatomy of a pattern

Individual patterns are stored within subfolders in `/src/patterns/*`.

Each pattern comprises of the following files (where `pattern` is the name of the pattern):

| File / folder              | Description                                     |
|: ------------------------- |:----------------------------------------------- |
| `pattern.doc.hbs`          | Documentation about the pattern, including options and source code. |
| `pattern.hbs`              | HTML for the pattern, in Handlebars format. |
| `pattern-options.json`     | Data for building the various pattern options. |
| `_pattern.scss`            | Sass partial that contains the CSS to style the pattern. |
| `pattern.js`               | JavaScript partial that adds interactivity to the pattern. |

There is a dummy pattern in the DPL which may be used as a template when creating a new pattern. You can find this in `/src/patterns/dummy-pattern`.


### 3.2 Name your pattern

First, decide the name of your new pattern. Then decide on a computer-friendly version for naming folders and files; it must only consist of lowercase letters and hyphens.

The name should be semantic, descriptive and obvious.

In the following example we will use these names:

| Description            | Value         |
|: --------------------- |: ------------ |
| Name of pattern        | Widget   |
| Computer-friendly name | `widget` |


### 3.3 Branch from master

Using your preferred Git client, create a new branch using your new pattern name, e.g.

```
FEAT-widget-pattern
```

We tend to prefix the branch name with the type of change we are making, e.g. `BREAK`, `DOCS`, `FEAT`, `FIX`, etc. You can find a list of these in the [commit messages style guide](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/commit-messages.md#21-subject-line).


### 3.4 Create base files

Create a new folder within `\src\patterns\` with your computer-friendly pattern name. In this example it would be `\src\patterns\widget`.

Now within your new folder, create the five basic files you need to create a pattern:

* `widget.doc.hbs` - Documentation
* `widget.hbs` - Pattern template
* `widget-options.json` - Data detailing pattern options
* `_widget.scss` - Sass that will be compiled to CSS
* `widget.js` - JavaScript

(This is where the dummy pattern can come in handy, simply copy the contents of `\src\patterns\dummy-pattern` into your new pattern and rename the files using your new pattern name.)


#### 3.4.1 Documentation file (`*.doc.hbs`)

The documentation file (in this example `widget.doc.hbs`) is written in a combination of HTML and the logic-less JavaScript templating engine Handlebars, with a small YAML front piece at the top of the document. This title element is used both in the page `<title>` and in the page heading.

The document looks something like this:

```handlebars

---
title: Widget
---

<p>Introduction about what this pattern is...</p>

<ul>
    <li>Unordered list of rules.</li>
    <li>What you may do.</li>
    <li>What you may not do.</li>
</ul>

<hr>
<h3>Options available</h3>
<ul>
{{#widget-options.options}}
    <li><a href="#{{option-anchor}}">{{option-heading}}</a></li>
{{/widget-options.options}}
</ul>

{{#widget-options.options}}
<hr>
<h3 id="{{option-anchor}}">{{option-heading}}</h3>
{{{option-description}}}
</div>
{{> widget}}
<div class="container">
<span class="label label-default">Code</span>
<pre><code class="pattern-source html">{{> widget}}</code></pre>
{{/widget-options.options}}
```

The options available block loops through the `options[]` array in `widget-options.json` to build a table of contents.

The second block (`{{#widget-options.options}}`) loops through the options array again in `widget-options.json` to output each of the options. This uses the `widget.hbs` Handlebars partial (`{{> widget}}`) as a template, passing in the data from the options array within the JSON file.

The second instance of the partial in that block outputs the same code but within a code block:

```
<pre><code class="pattern-source html">{{> widget}}</code></pre>
```

This block has two CSS classes:

* The mandatory `pattern-source` class instructs a JavaScript function in the DPL to encode all HTML elements, i.e. change `<` to `&lt;` and `>` to `&gt;` so that the code outputs on the page, rather than renders.
* The optional `html` class instructs another JavaScript plugin to syntax highlight the code as HTML. (This uses the code pattern.)

When Grunt runs, an `index.html` file is created within `/docs/patterns/PATTERN_NAME/`, in this example, `/docs/patterns/widget/`. It wraps your documentation file within the code found in `/src/_layouts/pattern.hbs`.


#### 3.4.2 Pattern template file (`*.hbs`)

The template file must be named after the computer-friendly version of the pattern name, in this example it would be `widget.hbs`.

This file contains the pattern itself, written using a combination of HTML and Handlebars expressions. Using Handlebars means that you can populate dynamic portions of the HTML with Handlebars values; in other words, you can use the same template with multiple options using if... then statements.

The [assemble-handlebars](https://github.com/assemble/assemble-handlebars) Grunt task builds HTML code using the data from the `*-options.json` file.

For more information see the following for documentation:

* [Handlebars](http://handlebarsjs.com/)
* [Assemble](http://assemble.io/)


#### 3.4.3 Pattern options file (`*-options.json`)

* The options file must have the same filename as the template file, followed by `-options.json`. In this example, this would be `widget-options.json`.

This JSON file contains the following basic information:

```json
{
    "options" : [
        {
            "option-heading": "Default widget",
            "option-description": "<p>Information about the option, written in HTML, with no line-breaks.</p>",
            "option-anchor": "default-widget"
        }
    ]
}
```

Other options are added as required.

* The first three entries are mandatory for each option, even if there is only one. These build the options available table of contents, and headings and descriptions for each of the options on the documentation page.
* Custom name/value pairs may be created as required.


#### 3.4.4 Sass CSS file (`_*.scss`)

Add the CSS you require for your pattern in this file.

* The filename must begin with an underscore (`_`) – without it the Sass processor will not consider it a partial.
* The filename must have the same filename as the pattern template file but with a `.scss` suffix; in this example, `widget._scss`
* The file must begin and end with the following comments:

```css

/*********************************/
/* BEGIN Pattern: widget         */
/*********************************/

// Add your CSS/Sass code here.

/*********************************/
/* END Pattern: widget           */
/*********************************/

```

This file will be compiled by Compass into CSS and added to `/core/styles/screen.css`.


#### 3.4.5 JavaScript file (`*.js`)

Add the JavaScript you require for your pattern in this file.

* You may use jQuery code as well as 'vanilla' JavaScript.
* The filename must have the same name as the pattern template file but with a `.js` suffix.
* The file must begin and end with the following code:

```javascript

/*********************************/
/* BEGIN Pattern: widget         */
/*********************************/

// Add your JavaScript/jQuery code here.

/*********************************/
/* END Pattern: widget           */
/*********************************/

```

When you run Grunt next time this file will be found automatically and included in `/core/scripts/core.js`.


### 3.5 Hook your new pattern into the DPL

With the new files in place, you now need to tell the DPL where your new pattern is. You do this in two places:


#### 3.5.1 Add the Sass partial

Add your new Sass partial as an `@import` to the file `/src/styles/screen.scss`beneath the `Patterns import` section. For example, in this example you would add `_widget.scss` to:

```css
@import 'tile/tile';
@import 'tile-grid/tile-grid';
@import 'widget/widget';
```

* You must not include the underscore or file suffix, just the pattern's directory name: the DPL will automatically add those.
* Make sure you add your new pattern to the list alphabetically; this simply makes the patterns easier to manage later.


#### 3.5.2 Add to patterns page

Now add your new pattern to the correct category on the patterns page.

In the file `/src/_meta/patterns_page.json` add an item at the appropriate place, like so:

```json
{
    "heading": "Content",
    "subheading": "Patterns used to display content in various ways.",
    "patterns": [
        { "name": "Accordion",
          "img": "assets/docs/images/patterns/accordion.jpg",
          "url": "patterns/accordion/index.html"
        },
        {
            ...
        },
        {  "name": "Widget",
            "img": "assets/docs/images/patterns/widget.jpg",
            "url": "patterns/widget/index.html"
        }
    ]
}
```

If the pattern doesn't yet have a custom image use the generic `pattern.jpg`, like this:

```
            "img": "assets/docs/images/patterns/pattern.jpg",
```


### 3.6 Run Grunt (to test)

After you've got the pattern created you should run `grunt`. This will build the `core/` folder and the `docs/` folder.

Make sure you don't have any errors. If you open `docs/patterns.html` in your browser you should be able to see your new pattern showing up in the listing. 

You should also be able to visit the documentation page and see the basic examples displayed.


### 3.7 Commit

Now that we have a working stub of the pattern – perhaps without any working CSS or JavaScript or even maybe the correct HTML – we're ready to create a first commit.

Make sure that you've created a new branch for this feature and create a new commit containing the work to create the new pattern.


### 3.8 Continue building...

You should now be ready to continue working on your pattern.

Remember to commit small changes and often, using the [code style guide](https://github.com/standrewsdigital/digital-code-style-guide/) for guidance on how to write your [HTML](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/html.md), [CSS](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/css.md) and [JavaScript](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/javascript.md) code, and compose your [commit messages](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/commit-messages.md).




## 4.0 How to add an example page

Add example pages to the `/src/examples/*` directory.

Similar to pattern documentation files, these should be written in a combination of HTML with Handlebars and a YAML front piece.

For example:

```handlebars

---
title: University of St Andrews - Scotland's first university, founded 1413
---

{{> text-banner prototype-text-banner.university-home}}

{{> header prototype-header}}

{{> navigation-bar prototype-index.navigation-bar}}

{{> hero-banner prototype-hero-banner}}

{{> navbox-grid prototype-navbox-grid}}

{{> tile-grid prototype-tile-grid}}

{{> footer}}

```

Pattern partials may be called directly, as Handlebars partials are global in scope.

You may call Handlebars data from the pattern options JSON files, or create local ones within the `/src/patterns/_data/` directory. The format for this is:

```handlebars
{{> template-name pattern-options-json-file-name }}
```