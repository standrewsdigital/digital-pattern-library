# Add a pattern

Version 0.1
Last updated: Wednesday 12 October 2016

<!-- MarkdownTOC -->

- [1. Create the folder `src/patterns/new-feature`.](#1-create-the-folder-srcpatternsnew-feature)
- [2. Create Handlebars file `src/patterns/new-feature/new-feature.hbs`.](#2-create-handlebars-file-srcpatternsnew-featurenew-featurehbs)
- [3. Create Handlebars file `src/patterns/new-feature/new-feature.doc.hbs`.](#3-create-handlebars-file-srcpatternsnew-featurenew-featuredochbs)
- [4. Create Sass file `src/patterns/new-feature/_new-feature.scss`.](#4-create-sass-file-srcpatternsnew-featurenew-featurescss)
- [5. Add the Sass partial for this pattern to the file `src/styles/screen.scss`.](#5-add-the-sass-partial-for-this-pattern-to-the-file-srcstylesscreenscss)
- [6. If you need to add some JavaScript](#6-if-you-need-to-add-some-javascript)
- [7. Create the folder `src/patterns/new-feature/examples`.](#7-create-the-folder-srcpatternsnew-featureexamples)
- [8. Create the folder `src/patterns/new-feature/data`](#8-create-the-folder-srcpatternsnew-featuredata)
- [9. You need to add a new entry in the navigation for this pattern.](#9-you-need-to-add-a-new-entry-in-the-navigation-for-this-pattern)
- [10. After you've got the pattern created you should run `grunt`](#10-after-youve-got-the-pattern-created-you-should-run-grunt)
- [11. Finally!](#11-finally)

<!-- /MarkdownTOC -->

This is a guide to adding a new pattern to the pattern library. 

First, decide the name of the pattern. Then create a computer-friendly version  for naming folders and files; it must consist of lowercase letters and hyphens only. For this example, the name of the pattern will be "New feature" and `new-feature`.


---


#### 1. Create the folder `src/patterns/new-feature`. 

This folder contains the JavaScript, CSS and documentation for the feature.


#### 2. Create Handlebars file `src/patterns/new-feature/new-feature.hbs`. 

This file contains the source HTML for the pattern in Handlebars format. Being Handlebars means that you can populate dynamic portions of the HTML with Handlebars values. See [Handlebars](http://handlebarsjs.com/) for more info. 


#### 3. Create Handlebars file `src/patterns/new-feature/new-feature.doc.hbs`. 

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


#### 4. Create Sass file `src/patterns/new-feature/_new-feature.scss`. 

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


#### 5. Add the Sass partial for this pattern to the file `src/styles/screen.scss`.

Adding this line at the appropriate place under `Patterns` (note the patterns are added into `screen.scss) in alphabetical order.

```css
...
@import 'navigation-bar/navigation-bar';
@import 'new-feature/new-feature';          // <<==== ADDED
@import 'secondary-call/secondary-call';
...
```


#### 6. If you need to add some JavaScript

Create the JavaScript file `src/patterns/new-feature/new-feature.js`. When you run grunt next time this file will be found automatically.


#### 7. Create the folder `src/patterns/new-feature/examples`.
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


#### 8. Create the folder `src/patterns/new-feature/data` 

And also a JSON file to correspond with each example we've defined (in the previous step).
    
So we will create the following files and respective contents.

* `src/patterns/new-feature/data/new-feature-1.json`

```js
{
    "first-name": "John",
    "last-name": "Carter"
}
```

This JSON code defines the variables that are available to populate the Handlebars partial (`src/patterns/new-feature/new-feature.hbs`).

* `src/patterns/new-feature/data/new-feature-2.json`

```js
{
    "first-name": "Dejah",
    "last-name": "Thoris"
}
```

The idea is that each example loads different data that configures different variations of the pattern.


#### 9. You need to add a new entry in the navigation for this pattern.

In the JSON file `src/_meta/dpl-nav.json` in the `items[0].items` array, add an item at the appropriate place like so: 

```js
...
},
{
   "name" : "New feature",
   "url" : "patterns/new-feature/index.html"
},
...
```


#### 10. After you've got the pattern created you should run `grunt` 

This will build the `core/` folder and the `docs/` folder. Make sure you don't have any errors. If you open `docs/index.html` in your browser you should be able to see your new pattern showing up in the listing. You should also be able to visit the documentation page and see the basic examples wired up.


#### 11. Finally!

Now that we have a working stub of the pattern – admittedly without any working CSS or JavaScript or even maybe the correct HTML – we're ready to create a first commit. Make sure that you've started a new branch for this feature and create a new commit containing the work to create the sub.

You should now be ready to start building the HTML, CSS and JavaScript incrementally to complete the pattern. Remember to commit often!