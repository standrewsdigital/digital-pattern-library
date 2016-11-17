# Add a pattern

Version 0.1
Last updated: Wednesday 12 October 2016

<!-- MarkdownTOC -->

- Quick guide
- In-depth guide

<!-- /MarkdownTOC -->

This is a guide to adding a new pattern to the pattern library. This assumes that you already have the DPL setup, if you don't see: [SETUP.md] (https://github.com/standrewsdigital/digital-pattern-library/blob/master/SETUP.md)  

First, decide the name of the pattern. Then create a computer-friendly version  for naming folders and files; it must consist of lowercase letters and hyphens only. For this example, the name of the pattern will be "New feature" and `new-feature`.


---

## Quick guide


#### 1. Create a branch from Master


#### 2. Duplicate dummy pattern folder

Navigate to: `\digital-pattern-library\src\patterns` and duplicate the `dummy-pattern` folder, renaming it to your new pattern name. Change all instances of'dummy-pattern' within these files and filenames to your new pattern name.


#### Contents of dummy-pattern -


| file / folder   |      description      |
|----------|-------------|
| data folder |contains JSON files, hold data for use in examples |
| examples folder |    contains Handlebars files that match data with pattern   |
| _dummy-pattern.scss | This is the Sass partial that contains the Sass/CSS to implement the pattern  |
| dummy-pattern.doc.hbs |  This file is the main documentation for the pattern |
| dummy-pattern.hbs |    This file contains the source HTML for the pattern in Handlebars format   |
| dummy-pattern.js | This is the JavaScript partial that contains the JavaScript to implement the pattern. |



#### 3. Add the Sass partial for this pattern to the file `src/styles/screen.scss`.

#### 4. Add a new entry in the JSON file `src/_meta/dpl-nav.json`.

#### 5. Make your first commit to GitHub.



---




## In-depth guide





#### 1. Create a branch from Master

Using your preffered Git client create a new branch using your decided pattern name.


#### 2. Duplicate dummy pattern folder

Navigate to: `\digital-pattern-library\src\patterns` and duplicate the `dummy-pattern` folder, renaming it to your new pattern name. Change all instances of'dummy-pattern' within these files and filenames to your new pattern name.



#### 3. Modify docs Handlebars file `src/patterns/dummy-pattern/dummy-pattern.doc.hbs`.

This file is the main documentation for the pattern. The file should begin with YAML font matter (the section beginning and ending in `---`). It then should contain HTML with Handlebars code to build the documentation page. Here's an example:

```html

---
title: New feature
pattern: new-feature
examples:
* name: new-feature-1
* name: new-feature-2
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

Change the title to the new pattern name. This should be human-readable and may contain spaces.

Change the pattern to the new patter name.

Change the names of the examples above. These are in the /examples directory. Use descriptive names rather than example-1, example-2, etc. It makes it much easier


#### 4. Modify Handlebars file `src/patterns/dummy-pattern/dummy-pattern.hbs`. 

This file contains the source HTML for the pattern in Handlebars format. Being Handlebars means that you can populate dynamic portions of the HTML with Handlebars values. See [Handlebars](http://handlebarsjs.com/) for more info.

Change `dummy-pattern` in the top and bottom comments to your new pattern name.

```html

<!-- Begin pattern: dummy pattern //-->

// Add your Handlebars code here.

<!-- End pattern: dummy pattern //-->

```

#### 5. Modify Sass file `src/patterns/new-feature/_dummy-pattern.scss`.  

This is the Sass partial that contains the Sass/CSS to implement the pattern. The prefix of an underscore (`_`) is important, without it the Sass processor will not consider it a partial. To start, we create the file with the following content.

Change `dummy-pattern` in the top and bottom comments to your new pattern name.

```css
/**********************************************/
/* BEGIN Pattern: dummy-pattern                */
/**********************************************/

// Add your CSS code here.

/**********************************************/
/* END Pattern: new-feature                   */
/**********************************************/
```


#### 6. If your pattern needs Javascript

Modify the JavaScript file `src/patterns/dummy-pattern/dummy-pattern.js`. When you run grunt next time this file will be found automatically.

This can be deleted if you do not need Javascript for your pattern.


#### 7. Modify the 'data' folder `src/patterns/dummy-pattern/data`.

This JSON code defines the variables that are available to populate the Handlebars partial (`src/patterns/dummy-pattern/dummy-pattern.hbs`).

* `src/patterns/dummy-pattern/data/full-details-data.json`

```js
{
    "image": {
        "url": "docs/images/placeholders/360x240.jpg",
        "alt": "Description"
    },
    "title": "Title of image",
    "url": "http://www.st-andrews.ac.uk",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque adipisci id perspiciatis veniam magnam! Numquam incidunt placeat eos cum. Beatae perspiciatis officiis sint harum.",

    "date" : "2014-08-21",
    "date-display" : "21 August 2014",
    "type" : "Photo of the week"
 }
```

The idea is that each example loads different data that configures different variations of the pattern.


#### 8. Modify the 'examples' folder `src/patterns/dummy-pattern/examples`.
Create a file for each example you have documented in the YAML front matter of `src/patterns/new-feature/new-feature.doc.hbs`. Note that these will be linked up and shown on the documentation page automatically when you build the documentation with the `grunt` command.

In the YAML front matter of `src/patterns/new-feature/new-feature.doc.hbs` we have: 
```
...
examples:
- name: full-details
- name: no-image
...
```

Each example file should contain Handlebars code to include partial for this pattern and specify the data to populate the partial with. You include Handlebars partials in this format:

```
{{> partial-name data-file }}
```

So we will create the following files and respective contents.

* File: `src/patterns/dummy-pattern/examples/full-details.hbs`

```
{{> dummy-pattern full-details }}
```

This includes the Handlebars partial `dummy-pattern` which maps to the file `src/patterns/new-feature/dummy-pattern.hbs` and populates the partial with the JSON data from `full-details` which maps to the file `src/patterns/new-feature/data/full-details-data.json`. When building the page Assemble (a grunt plugin that generates the HTML files in the documentation) will look in `src/patterns/data.json` for the data to populate the partial with. This will lead us to creating (in the next step) an associated `data/` folder and files. 



#### 9. Add the Sass partial for this pattern to the file `src/styles/screen.scss`.

Adding this line at the appropriate place under `Patterns` (note the patterns are added into `screen.scss) in alphabetical order.

```css
...
@import 'navigation-bar/navigation-bar';
@import 'dummy-pattern/dummy-pattern';          // <<==== ADDED
@import 'secondary-call/secondary-call';

```




#### 10. Add a new entry in the navigation for this pattern.

In the JSON file `src/_meta/dpl-nav.json` in the `items[0].items` array, add an item at the appropriate place like so: 

```js
...
},
{
   "name" : "Dummy pattern",
   "url" : "patterns/dummy-pattern/index.html"
},
...
```


#### 11. After you've got the pattern created you should run `grunt`

This will build the `core/` folder and the `docs/` folder. Make sure you don't have any errors. If you open `docs/index.html` in your browser you should be able to see your new pattern showing up in the listing. You should also be able to visit the documentation page and see the basic examples wired up.


#### 12. Finally!

Now that we have a working stub of the pattern – admittedly without the correct CSS, JavaScript or HTML – we're ready to create a first commit. Make sure that you've started a new branch for this feature and create a new commit containing the work to create the sub.

You should now be ready to start building the HTML, CSS and JavaScript incrementally to complete the pattern. Remember to commit often!