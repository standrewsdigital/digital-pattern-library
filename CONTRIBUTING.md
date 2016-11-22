# Contributing to the digital pattern library 

Version 0.2
Last updated: Tuesday 22 November 2016

<!-- MarkdownTOC -->

- [1. Introduction](#1-introduction)
  - [Set up](#set-up)
  - [Principles](#principles)
  - [Workflow](#workflow)
  - [Clone don't fork](#clone-dont-fork)
  - [Version numbers](#version-numbers)
    - [Source code version numbers](#source-code-version-numbers)
    - [Git tags for versions](#git-tags-for-versions)
  - [Change log](#change-log)
- [2. How to build the DPL](#2-how-to-build-the-dpl)
  - [Build core and docs](#build-core-and-docs)
  - [Build core only](#build-core-only)
  - [Build docs](#build-docs)
  - [Grunt watch \(interactive building\)](#grunt-watch-interactive-building)
- [EDIT THIS Quickstart guide](#edit-this-quickstart-guide)
    - [1. Create a branch from Master](#1-create-a-branch-from-master)
    - [2. Duplicate dummy pattern folder](#2-duplicate-dummy-pattern-folder)
    - [3. Add the Sass partial for this pattern to the file](#3-add-the-sass-partial-for-this-pattern-to-the-file)
    - [4. Add a new entry in the navigation for this pattern.](#4-add-a-new-entry-in-the-navigation-for-this-pattern)
    - [5. Make your first commit to GitHub.](#5-make-your-first-commit-to-github)
- [3. How to add a new pattern \(manual\)](#3-how-to-add-a-new-pattern-manual)
  - [a. Create a new folder](#a-create-a-new-folder)
  - [b. Create Handlebars files](#b-create-handlebars-files)
  - [c. Create a Sass file](#c-create-a-sass-file)
  - [d. Add a Sass partial](#d-add-a-sass-partial)
  - [e. Add JavaScript \(optional\)](#e-add-javascript-optional)
  - [f. Create an examples folder](#f-create-an-examples-folder)
  - [g. Create a data folder](#g-create-a-data-folder)
  - [h. Add a new navigation entry](#h-add-a-new-navigation-entry)
  - [i. Run grunt](#i-run-grunt)
  - [j. Commit](#j-commit)
  - [k. Continue building...](#k-continue-building)

<!-- /MarkdownTOC -->


## 1. Introduction

Hurrah! So you want to contribute to the pattern library. That's great news. Here are some helpful guidelines to get you started.


### Set up

If you haven't already set up your development environment, go see [SETUP.md](SETUP.md).


### Principles

* Nothing should be in the pattern library unless it is used; redundant patterns should be deprecated and eventually removed.
* The pattern library should be opinionated. 


### Workflow

Workflow is about how we branch source code, and then merge those changes back in again.

We use [GitHub Flow](https://guides.github.com/introduction/flow/) which is a fairly simple workflow that has just enough structure. Read [Scott Chacon's article about Github Flow](http://scottchacon.com/2011/08/31/github-flow.html) for a good introduction. The main points are: 

* All development must take place in feature branches. 
* Feature branches should be branched from `master`.
* Commit often in your feature branches.
* When features are near complete, submit a pull request for that feature 
  branch to be merged into `master`.
* Code reviews are a part of the pull request. Ideally, a person other than 
  yourself should review (at a minimum conduct a sanity check) on all features 
  before they are merged into `master`.
* When approved by your reviewer, you should non-fast-forward merge your 
  feature branch into `master` and resolve any conflicts. This preserves the 
  history of how each feature was made. 


### Clone don't fork

Developers using the DPL should not fork the code in GitHub. No patterns or elements (such as colours) in the DPL may be edited without liaising with the digital communications team. This is the case in both the DPL and in any content management system; patterns should not be modified in any manner. Do not use CSS to overrule DPL elements, patterns, fonts etc. All code written must follow the digital communications team’s [code standards](https://www.st-andrews.ac.uk/digital-standards/service-manual/code-standards/). Rules on all patterns must be adhered to - if in doubt, please ask.

New patterns may only be created by developers working directly alongside the digital communications team.

See [contributing to the pattern library](https://github.com/standrewsdigital/digital-pattern-library/blob/master/CONTRIBUTING.md) for further details.

Commit messages must follow the [commit message style guide](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/commit-messages.md).



### Version numbers

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


#### Source code version numbers

The version number is stored in the `package.json` file in the root of the DPL. You must change the version number here to your new version number and then rebuild `core/` and `docs/` with Grunt. When Grunt runs, the version number found in `package.json` is listed at the top of all the JavaScript and CSS core assets and is also output in the footer of the documentation pages.


#### Git tags for versions

We follow the convention that for version `0.5.4` the Git tag would be:

```
v0.5.4
```

But the folder that is deployed to on the CDN and for the docs would simply be

```
0.5.4
```

The reason for having the extra `v` in the Git tag is that it means you can quickly find all the version tags since you may have non-version related tags in your Git repository. There's not really a strong argument for or against the `v`; consistency is the main thing.


### Change log

We really cannot emphasize this strongly enough: having a human-readable change log is essential to quickly bringing new developers up to speed with a project. Therefore, whenever you work on the pattern library you need to update `CHANGELOG.md` to reflect those changes.

It's best to document changes as you go; that way updates to `CHANGELOG.md` get committed alongside the changes to the code. 

At a minimum, each time you add a Git tag and release a new version of the pattern library the change log should be updated to reflect that new version, the date it was released and the changes that have occured since the last version.

See [CHANGELOG.md](CHANGELOG.md).


---

## 2. How to build the DPL

The DPL takes the source code in `/src/` and builds two collections of components:

1. `/core/` - Production JavaScript, CSS, fonts and images
2. `/docs/` - Documentation about using the patterns in the library and 
  other information for developers who consume the core assets. 

In the repository, we have the following additional documentation aimed at 
assisting those who contribute and develop the pattern library.

* [SETUP.md](SETUP.md) – How to set up your development environment.
* [CONTRIBUTING.md](CONTRIBUTING.md) – General guidelines for contributing to
   pattern library.
* [FILES.md](FILES.md) – Overview of source folders and files.
* [ADD-PATTERN.md](ADD-PATTERN.md) – How to add a new pattern.

After [getting set up](SETUP.md), you can use the following Grunt tasks.


### Build core and docs

```
$ grunt
```

This command will build the core assets and place them in `core/` and will 
build the documentation and place it in `docs/`. Behind the scenes it runs the
following two individual commands. 


### Build core only

```
$ grunt core
```

This command builds the core assets and places them in `core/`.


### Build docs

```
$ grunt docs
```

This command builds the documentation and places it in `docs/` and copies
what's currently in `core/` into the `docs/assets/core/` for use by the
documentation and examples.


### Grunt watch (interactive building)

```
$ grunt watch
```

This command starts grunt in a "watch" mode which means it will monitor file
in `src/` and if something changes will run the appropriate tasks to rebuild
`core/` and `docs/`. It also starts a live reload server so that any pages
open to local copies of the docs will get reloaded once it has rebuilt the
`core/` and `docs/` files. 

This is really helpful when actively developing patterns.

Note: you should run `grunt` first since `grunt watch` only rebuilds the 
parts that have changed. 




---

## EDIT THIS Quickstart guide


#### 1. Create a branch from Master

Using your preffered Git client create a new branch using your new pattern name.


#### 2. Duplicate dummy pattern folder

Duplicate `\digital-pattern-library\src\patterns\dummy-pattern`, renaming it using your new pattern name, in this case we are using `new-pattern`. Change all instances of 'dummy-pattern' within these files and filenames to your new pattern name.


##### Contents of new-pattern:

| File / folder       | Description |
| ------------------- | ------------------- |
| data folder         | contains JSON files, they hold the data for use in examples |
| examples folder     | contains Handlebars files that match data with a pattern |
| _new-pattern.scss   | This is the Sass partial that contains the SASS to implement the pattern |
| new-pattern.doc.hbs | This file is the main documentation for the pattern |
| new-pattern.hbs     | This file contains the source HTML for the pattern in Handlebars format     |
| new-pattern.js      | This is the JavaScript partial that contains the JavaScript to implement the pattern. |


#### 3. Add the Sass partial for this pattern to the file

In the SCSS file `src/styles/screen.scss` add into the list of pattern scss files.


#### 4. Add a new entry in the navigation for this pattern.

In the JSON file `src/_meta/dpl-nav.json` in the `"name" : "Patterns"` array `items`.


#### 5. Make your first commit to GitHub.

Make sure to read our [Commit message style guide](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/commit-messages.md).









## 3. How to add a new pattern (manual)

This is a guide to manually adding a new pattern to the digital pattern library.

First, decide the name of the pattern. Then decide on a computer-friendly version for naming folders and files; it must consist of lowercase letters and hyphens only.

In the following example we will use these names:

| Description            | Value         |
|: --------------------- |: ------------ |
| Name of pattern        | New feature   |
| Computer-friendly name | `new-feature` |


### a. Create a new folder

Create the folder `src/patterns/new-feature`. This folder contains the JavaScript, CSS and documentation for the feature.

Note, there is already a dummy pattern in the DPL (`src/patterns/dummy-pattern/`) that can be copied and modified. If you prefer, simply copy and rename this directory then modify the folder and file names in line with the instructions below.


### b. Create Handlebars files

Create a Handlebars file `src/patterns/new-feature/new-feature.hbs`. 

This file contains the source HTML for the pattern in Handlebars format. Being Handlebars means that you can populate dynamic portions of the HTML with Handlebars values. See [Handlebars](http://handlebarsjs.com/) for more info. 

Create Handlebars file `src/patterns/new-feature/new-feature.doc.hbs`. 

This file is the main documentation for the pattern. The file should begin with YAML font matter (the section beginning and ending in `---`). It then should contain HTML with Handlebars code to build the documentation page. Here's an example:

```html

---
title: New feature
pattern: new-feature
examples:
* name: new-feature-1
* name: new-feature-2
related:
* name: related-pattern-name
---

<p>Several sentence description of the pattern.</p>

<h2>Usage</h2>

<ul>
    <li>When to use, rule 1</li>
    <li>How to use, rule 2</li>
    <li>When not to use, rule 3</li>
</ul>

<h2>Syntax</h2>

<div class="pattern-source">{{> new-feature }}</div>

<h2>Options</h2>

<ul>
    <li>Option 1</li>
    <li>Option 2</li>
</ul>
```

The Assemble grunt plugin that builds the documentation populates the Handlebars template below with the variables defined in the YAML front matter. 


### c. Create a Sass file

Create Sass file `src/patterns/new-feature/_new-feature.scss`. 

This is the Sass partial that contains the Sass/CSS to implement the pattern. The prefix of an underscore (`_`) is important, without it the Sass processor will not consider it a partial. To start, we create the file with the following content.

```css
/**********************************************/
/* BEGIN Pattern: new-feature                 */
/**********************************************/

// Add your CSS code here.

/**********************************************/
/* END Pattern: new-feature                   */
/**********************************************/
```


### d. Add a Sass partial

Add the Sass partial for this pattern to the file `src/styles/screen.scss`.

Adding this line at the appropriate place under `Patterns` (note the patterns are added into `screen.scss) in alphabetical order.

```css
@import 'navigation-bar/navigation-bar';
@import 'new-feature/new-feature';          // <<==== ADDED
@import 'secondary-call/secondary-call';
```


### e. Add JavaScript (optional)

If you need to, add some JavaScript

Create the JavaScript file `src/patterns/new-feature/new-feature.js`. When you run grunt next time this file will be found automatically.


### f. Create an examples folder

Create the folder `src/patterns/new-feature/examples`.

Also a file for each example you have documented in the YAML front matter of `src/patterns/new-feature/new-feature.doc.hbs`. Note that these will be linked up and shown on the documentation page automatically when you build the documentation with the `grunt` command.

In the YAML front matter of `src/patterns/new-feature/new-feature.doc.hbs` we have:

```
...
+ name: new-feature-1
+ name: new-feature-2
...
```

Each example file should contain Handlebars code to include partial for this pattern and specify the data to populate the partial with. You include Handlebars partials in this format:

```
{{> partial-name data-file }}
```

So we will create the following files and respective contents.

* File: `src/patterns/new-feature/examples/new-feature1.hbs`

```
{{> new-feature new-feature-1}}
```

This includes the Handlebars partial `new-feature` which maps to the file `src/patterns/new-feature/new-feature.hbs` and populates the partial with the JSON data from `new-feature-1` which maps to the file `src/patterns/new-feature/data/new-feature-1.json`. When building the page Assemble (a grunt plugin that generates the HTML files in the documentation) will look in `src/patterns/data.json` for the data to populate the partial with. This will lead us to creating (in the next step) an associated `data/` folder and files. 

* File: `src/patterns/new-feature/examples/new-feature-2.hbs`

```
{{> new-feature new-feature-2}}
```

Again, this causes Assemble to look for a file named `new-feature-2.json` in the `data` folder to populate the Handlebars partial.


### g. Create a data folder

Create the folder `src/patterns/new-feature/data`. And also a JSON file to correspond with each example we've defined (in the previous step).

Now create this file: `src/patterns/new-feature/data/new-feature-1.json` and populate it with this content:

```js
{
    "first-name": "John",
    "last-name": "Carter"
}
```

This JSON code defines the variables that are available to populate the Handlebars partial (`src/patterns/new-feature/new-feature.hbs`).

And now create this file: `src/patterns/new-feature/data/new-feature-2.json` and populate it with this content:

```js
{
    "first-name": "Dejah",
    "last-name": "Thoris"
}
```

The idea is that each example loads different data that configures different variations of the pattern.


### h. Add a new navigation entry

You need to add a new entry in the navigation for this pattern.

In the JSON file `src/_meta/dpl-nav.json` in the `items[0].items` array, add an item at the appropriate place like so: 

```js
},
{
   "name" : "New feature",
   "url" : "patterns/new-feature/index.html"
},
```


### i. Run grunt

After you've got the pattern created you should run `grunt` 

This will build the `core/` folder and the `docs/` folder. Make sure you don't have any errors. If you open `docs/index.html` in your browser you should be able to see your new pattern showing up in the listing. You should also be able to visit the documentation page and see the basic examples wired up.


### j. Commit

Now that we have a working stub of the pattern – admittedly without any working CSS or JavaScript or even maybe the correct HTML – we're ready to create a first commit.

Make sure that you've started a new branch for this feature and create a new commit containing the work to create the stub.


### k. Continue building...

You should now be ready to start building the HTML, CSS and JavaScript incrementally to complete the pattern. Remember to commit often!
