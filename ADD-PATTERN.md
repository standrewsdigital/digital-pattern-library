# Add a pattern

This is a guide to adding a new pattern to the pattern library. 

First, decide the name of the pattern. Then create a computer-friendly version  for naming folders and files; it must consist of lowercase letters and hyphens only. For this example, the name of the pattern will be "New feature" and `new-feature`.

1. Create the folder `src/patterns/new-feature`.  
   This folder contains the JavaScript, CSS and documentation for the feature.

2. Create Handlebars file `src/patterns/new-feature/new-feature.hbs`. 
   This file contains the source HTML for the pattern in Handlebars format. 
   Being Handlebars means that you can populate dynamic portions of the 
   HTML with Handlebars values. See [Handlebars](http://handlebarsjs.com/) 
   for more info. 

3. Create Handlebars file `src/patterns/new-feature/new-feature.doc.hbs`. 
   This file is the main documentation for the pattern. The file should begin 
   with YAML font matter (the section beginning and ending in `---`). It then
   should contain HTML with Handlebars code to build the documentation page.
   Here's an example:

        ---
        title: New feature
        pattern: new-feature
        examples:
        - name: new-feature-1
        - name: new-feature-2
        related:
        - name: related-pattern-name
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
   
    The Assemble grunt plugin that builds the documentation populates the 
    Handlebars template below with the variables defined in the YAML front 
    matter. 

4. Create Sass file `src/patterns/new-feature/_new-feature.scss`. This is the 
   Sass partial that contains the Sass/CSS to implement the pattern. The prefix
   of an underscore (`_`) is important, without it the Sass processor will not
   consider it a partial. To start, we create the file with the following 
   content.

        /**********************************************/
        /* BEGIN Pattern: new-feature                 */
        /**********************************************/

        // Add your CSS code here.

        /**********************************************/
        /* END Pattern: new-feature                   */
        /**********************************************/

5. You'll now need to add the Sass partial for this new pattern to the core
   Sass file `src/styles/screen.scss` by adding this line at the appropriate
   place under `/* Patterns */` (note the patterns are added into `screen.scss)
   in alphabetical order.

        ...
        @import 'navigation-bar/navigation-bar';
        @import 'new-feature/new-feature';          // <<==== ADDED
        @import 'secondary-call/secondary-call';
        ...

6. If you need to add some JavaScript for this feature, then you should create
   the JavaScript file `src/patterns/new-feature/new-feature.js`. When you 
   run grunt next time this file will be found automatically.

7. Create the folder `src/patterns/new-feature/examples` and a file for each 
   example you have documented in the YAML front matter of 
   `src/patterns/new-feature/new-feature.doc.hbs`. Note that these will be 
   linked up and shown on the documentation page automatically when you build
   the documentation with the `grunt` command.

    In the YAML front matter of `src/patterns/new-feature/new-feature.doc.hbs`
    we have: 

        ...
        - name: new-feature-1
        - name: new-feature-2
        ...
    
    Each example file should contain Handlebars code to include partial for 
    this pattern and specify the data to populate the partial with. You include Handlebars partials in this format:

        {{> partial-name data-file }}

    So we will create the following files and respective contents.

    * File: `src/patterns/new-feature/examples/new-feature1.hbs`
     
            {{> new-feature new-feature-1}}
      
        This includes the Handlebars partial `new-feature`
        which maps to the file `src/patterns/new-feature/new-feature.hbs` 
        and populates the partial with the JSON data from `new-feature-1`
        which maps to the file 
        `src/patterns/new-feature/data/new-feature-1.json`. When building the 
        page Assemble (a grunt plugin that generates the HTML files in the 
        documentation) will look in `src/patterns/*/data/*.json` for the data 
        to populate the partial with. This will lead us to creating (in the 
        next step) an associated `data/` folder and files. 

    * File: `src/patterns/new-feature/examples/new-feature-2.hbs`

            {{> new-feature new-feature-2}}

        Again, this causes Assemble to look for a file named 
        `new-feature-2.json` in the `data` folder to populate the Handlebars 
        partial.

8. Create the folder `src/patterns/new-feature/data` and a JSON file to 
   correspond with each example we've defined (in the previous step).
    
    So we will create the following files and respective contents.

    * `src/patterns/new-feature/data/new-feature-1.json`
    
            {
                "first-name": "John",
                "last-name": "Smith"
            }

        This JSON code defines the variables that are available to populate the
        Handlebars partial (`src/patterns/new-feature/new-feature.hbs`).

    * `src/patterns/new-feature/data/new-feature-2.json`

            {
                "first-name": "Llanfairpwllgwyngyllgogerychwyrndrobwyll",
                "last-name": "Llantysiliogogogoch"
            }

        The idea is that each example loads different data that configures
        different variations of the pattern.

9. You need to add a new entry in the navigation for this pattern. In the JSON
   file `src/_meta/dpl-nav.json` in the `items[0].items` array, add an item 
   at the appropriate place like so: 

        ...
        },
        {
           "name" : "New feature",
           "url" : "patterns/new-feature/index.html"
        },
        {
        ...


10. After you've got the pattern created you should run `grunt` to build the 
    `core/` folder and the `docs/` folder. Make sure you don't have any errors. 
    If you open `docs/index.html` in your browser you should be able to see
    your new pattern showing up in the listing. You should also be able to 
    visit the documentation page and see the basic examples wired up.

11. Now that we have a working stub of the pattern – admittedly without any
    working CSS or JavaScript or even maybe the correct HTML – we're ready to
    create a first commit. Make sure that you've started a new branch for this
    feature and create a new commit containing the work to create the sub

You should now be ready to start building the HTML, CSS and JavaScript 
incrementally to complete the pattern. Remember to commit often!