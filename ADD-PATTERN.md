# Add a pattern

Version 0.2 Last updated: Thursday 17 November 2016

*   [Getting started](#getting-started)
    *   [1\. Create a branch from Master](#1-create-a-branch-from-master)
    *   [2\. Duplicate dummy pattern folder](#2-duplicate-dummy-pattern-folder)
        *   [Contents of new-pattern:](#contents-of-new-pattern)
    *   [3\. Add the Sass partial for this pattern to the file](#3-add-the-sass-partial-for-this-pattern-to-the-file)
    *   [4\. Add a new entry in the navigation for this pattern.](#4-add-a-new-entry-in-the-navigation-for-this-pattern)
    *   [5\. Make your first commit to GitHub.](#5-make-your-first-commit-to-github)
*   [User guide](#user-guide)
    *   [1\. Create a branch from Master](#1-create-a-branch-from-master-1)
    *   [2\. Duplicate dummy pattern folder](#2-duplicate-dummy-pattern-folder-1)
    *   [3\. Update filenames](#3-update-filenames)
    *   [3\. Modify docs Handlebars file `src/patterns/new-pattern/new-pattern.doc.hbs`.](#3-modify-docs-handlebars-file-srcpatternsnew-patternnew-patterndochbs)
    *   [4\. Modify Handlebars file `src/patterns/new-pattern/new-pattern.hbs`.](#4-modify-handlebars-file-srcpatternsnew-patternnew-patternhbs)
    *   [5\. Modify Sass file `src/patterns/new-pattern/_new-pattern.scss`.](#5-modify-sass-file-srcpatternsnew-pattern_new-patternscss)
    *   [6\. If your pattern needs Javascript](#6-if-your-pattern-needs-javascript)
    *   [7\. Modify the 'examples' folder `src/patterns/new-pattern/examples`.](#7-modify-the-examples-folder-srcpatternsnew-patternexamples)
    *   [8\. Modify the 'data' folder `src/patterns/new-pattern/data`.](#8-modify-the-data-folder-srcpatternsnew-patterndata)
    *   [9\. Add the Sass partial for this pattern to the file `src/styles/screen.scss`.](#9-add-the-sass-partial-for-this-pattern-to-the-file-srcstylesscreenscss)
    *   [10\. Add a new entry in the navigation for this pattern.](#10-add-a-new-entry-in-the-navigation-for-this-pattern)
    *   [11\. After you've got the pattern created you should run `grunt`](#11-after-youve-got-the-pattern-created-you-should-run-grunt)
    *   [12\. Finally!](#12-finally)

This is a guide to adding a new pattern to the pattern library. This assumes that you already have the DPL setup, if you don't see: [SETUP.md](https://github.com/standrewsdigital/digital-pattern-library/blob/master/SETUP.md).

First, decide the name of the pattern. Then create a computer-friendly version for naming folders and files; it must consist of lowercase letters and hyphens only. For this example, the name of the pattern will be "New pattern" and `new-pattern`.

---




## Getting started


#### 1. Create a branch from Master

Using your preffered Git client create a new branch using your new pattern name.


#### 2. Duplicate dummy pattern folder

Duplicate `\digital-pattern-library\src\patterns\dummy-pattern`, renaming it using your new pattern name, in this case we are using `new-pattern`. Change all instances of 'dummy-pattern' within these files and filenames to your new pattern name.


##### Contents of new-pattern:

| File / folder | Description |
| ----------------- | ------------------- |
| data folder | contains JSON files, hold data for use in examples |
| examples folder | contains Handlebars files that match data with pattern |
| _new-pattern.scss | This is the Sass partial that contains the Sass/CSS to implement the pattern |
| new-pattern.doc.hbs | This file is the main documentation for the pattern |
| new-pattern.hbs | This file contains the source HTML for the pattern in Handlebars format |
| new-pattern.js | This is the JavaScript partial that contains the JavaScript to implement the pattern. |


#### 3. Add the Sass partial for this pattern to the file

In the SCSS file `src/styles/screen.scss` add into the appropriate place.


#### 4. Add a new entry in the navigation for this pattern.

In the JSON file `src/_meta/dpl-nav.json` in the `items[0].items` array.


#### 5. Make your first commit to GitHub.

Make sure to read our [Commit message style guide](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/commit-messages.md).

---




## User guide


#### 1. Create a branch from Master

Using your preffered Git client create a new branch using your new pattern name.


#### 2. Duplicate dummy pattern folder

Duplicate `\digital-pattern-library\src\patterns\dummy-pattern`, renaming it using your new pattern name.


#### 3. Update filenames

Make sure to change all instances of 'dummy-pattern' within these files and filenames to your new pattern name, in this example we are calling it 'new-pattern'.


#### 4. Modify docs Handlebars file `src/patterns/new-pattern/new-pattern.doc.hbs`.

This file is the main documentation for the pattern. The file should begin with YAML font matter (the section beginning and ending in `---`). It then should contain HTML with Handlebars code to build the documentation page.

Here's an example:

```html

---
title: New pattern
pattern: new-pattern
examples:
* name: new-pattern-image
* name: new-pattern-text
---

<p>Several sentence description of the pattern.</p>

<h2>Usage</h2>

<ul>
    <li>When to use, rule 1</li>
    <li>How to use, rule 2</li>
    <li>When not to use, rule 3</li>
</ul>

<h2>Options</h2>

<ul>
    <li>Option 1</li>
    <li>Option 2</li>
</ul>

```

The Assemble grunt plugin that builds the documentation populates the Handlebars template below with the variables defined in the YAML front matter.

Remember to change the names of the examples above. These are in the /examples directory. Use descriptive names rather than example-1, example-2, etc. Making it easier to understand the context of the example.


#### 4. Modify Handlebars file `src/patterns/new-pattern/new-pattern.hbs`.

This file contains the source HTML for the pattern in Handlebars format. Being Handlebars means that you can populate dynamic portions of the HTML with Handlebars values. See [Handlebars](http://handlebarsjs.com/) for more info.

Here's an example:

``` html
<!-- Begin pattern: new-pattern //-->

<article class="tile {{default color "[color]"}}">

    <div class="tile-image-title">
        {{#if image.url}}
            <img src='{{asset image.url}}' alt="{{default image.alt "[alt]"}}">
        {{else}}
            <img src='path/to/image.ext' alt="{{default image.alt "[alt]"}}">
        {{/if}}
        <h3><a href="{{default url "[url]"}}">{{default title "[title]"}}</a></h3>
    </div>

    <p>{{default description "[description]"}}</p>

    <div class='tile-date' datetime="{{default date "[date]"}}">{{default date-display "[date-display]"}}</div>

    <div class='tile-type'>{{default type "[type]"}}</div>

    <div class="clear"></div>

</article>

<!-- End pattern: new-pattern //-->
```


#### 5. Modify Sass file `src/patterns/new-pattern/_new-pattern.scss`.

This is the Sass partial that contains the Sass/CSS to implement the pattern. The prefix of an underscore (`_`) is important, without it the Sass processor will not consider it a partial. To start, we create the file with the following content.

Here's an example:

```css

/**********************************************/
/* BEGIN Pattern: new-pattern                 */
/**********************************************/

.tile {
    background-color: white;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.38);
       -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.38);
            box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.38);
    clear: both;
    margin: 0 auto 3em;
    max-width: 360px;
}

.tile-image-title {
    position: relative;
}

.tile img {
    height: auto;
    position: relative;
    width: 100%;
    z-index: 0;
}

/**********************************************/
/* END Pattern: new-pattern                   */
/**********************************************/
```


#### 6. If your pattern needs Javascript

Modify the JavaScript file `src/patterns/new-pattern/new-pattern.js`. When you run grunt next time this file will be found automatically.

This can be deleted if you do not need Javascript for your pattern.

Here's an example:

```js

/*********************************/
/* BEGIN Pattern: new-pattern    */
/*********************************/

// Use bigTarget to make tile image clickable.
$(".tile h3 a").bigTarget({
    clickZone : 'div:eq(1)' // jQuery parent selector
});

/*********************************/
/* END Pattern: new-pattern      */
/*********************************/

```


#### 7. Modify the 'examples' folder `src/patterns/new-pattern/examples`.

Create a file for each example you have documented in the YAML front matter of `src/patterns/new-pattern/new-pattern.doc.hbs`. Note that these will be linked up and shown on the documentation page automatically when you build the documentation with the `grunt` command.

In the YAML front matter of `src/patterns/new-pattern/new-pattern.doc.hbs` we have:

    ...
    examples:
    - name: new-pattern-image
    - name: new-pattern-text
    ...

Each example file should contain Handlebars code to include partial for this pattern and specify the data to populate the partial with. You include Handlebars partials in this format:

```
{{> partial-name data-file }}
```

So we will create the following files and respective contents.

* File: `src/patterns/new-pattern/examples/new-pattern-image.hbs`

```
{{> new-pattern new-pattern-image }}
```

This includes the Handlebars partial `new-pattern` which maps to the file `src/patterns/new-pattern/new-pattern.hbs` and populates the partial with the JSON data from `new-pattern-image` which maps to the file `src/patterns/new-pattern/data/new-pattern-image-data.json`. When building the page Assemble (a grunt plugin that generates the HTML files in the documentation) will look in `src/patterns/new-pattern-image-data.json` for the data to populate the partial with. This will lead us to modifying (in the next step) an associated `/data/` folder and files.


#### 8. Modify the 'data' folder `src/patterns/new-pattern/data`.

This JSON code defines the variables that are available to populate the Handlebars partial (`src/patterns/new-pattern/new-pattern.hbs`).

Here's an example:

* `src/patterns/new-pattern/data/new-pattern-image-data.json`

```js
{
    "image": {
        "url": "docs/images/placeholders/360x240.jpg",
        "alt": "Description"
},
    "title": "Title of image",
    "url": "http://www.st-andrews.ac.uk",
    "description": "Lorem ipsum dolor sit amet, consectetur.",

    "date" : "2014-08-21",
    "date-display" : "21 August 2014",
    "type" : "Photo of the week"
}
```

The idea is that each example loads different data that configures different variations of the pattern.


#### 9. Add the Sass partial for this pattern to the file `src/styles/screen.scss`.

Adding this line at the appropriate place under `Patterns` (note the patterns are added into `screen.scss) in alphabetical order.

```css
@import 'navigation-bar/navigation-bar';
@import 'new-pattern/new-pattern';          // <<==== ADDED
@import 'secondary-call/secondary-call';
```


#### 10. Add a new entry in the navigation for this pattern.

We now need to list your pattern in the DPL navigation.

In the JSON file `src/_meta/dpl-nav.json` in the `items[0].items` array, add an item at the appropriate place like so:

```js
},
{   
    "name" : "Navigation bar",
    "url" : "patterns/navigation-bar/index.html"
},
{ 
    "name" : "New pattern",                      // <<==== ADDED
    "url" : "patterns/new-pattern/index.html"    // <<==== ADDED
},
{ 
    "name" : "Secondary call-to-action",
    "url" : "patterns/secondary-call/index.html"
},
```


#### 11. After you've got the pattern created you should run `grunt`.

This will build the `core/` folder and the `docs/` folder. Make sure you don't have any errors. If you open `docs/index.html` in your browser you should be able to see your new pattern showing up in the listing. You should also be able to visit the documentation page and see the basic examples wired up.


#### 12. Finally!

Now that we have a working stub of the pattern – admittedly without the correct CSS, JavaScript or HTML – we're ready to create a first commit. Make sure that you've started a new branch for this feature and create a new commit containing the work to create the sub.

Make sure to read our [Commit message style guide](https://github.com/standrewsdigital/digital-code-style-guide/blob/master/commit-messages.md).

You should now be ready to start building the HTML, CSS and JavaScript incrementally to complete the pattern. Remember to commit often!