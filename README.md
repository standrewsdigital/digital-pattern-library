# Digital pattern library

This is the source code for the Digital pattern library. There are two 
components built using this code: 

* **Core assets** Production JavaScript, CSS, fonts and images
* **Documentation** Documentation about using the patterns in the library and 
  other information for developers who consume the core assets. 

In the repository, we have the following additional documenation aimed at 
assisting those who contribute and develop the pattern library.

* [SETUP.md](SETUP.md) – How to set up your development environment.
* [CONTRIBUTING.md](CONTRIBUTING.md) – General guidelines for contributing to
   pattern library.
* [FILES.md](FILES.md) – Overview of source folders and files.
* [ADD-PATTERN.md](ADD-PATTERN.md) – How to add a new pattern.


## Commands

After [getting setup](SETUP.md), you can use the following Grunt tasks.

### Build core and docs

    $ grunt

This command will build the core assets and place them in `core/` and will 
build the documentation and place it in `docs/`. It is identical to running 
the two commands listed below individually.

### Build core

    $ grunt core

This command builds the core assets and places them in `core/`.

### Build docs

    $ grunt docs

This command builds the documentation and places it in `docs/`.

### Watch (interactive building)

    $ grunt watch

This command starts grunt in a "watch" mode which means it will monitor file
in `src/` and if something changes will run the appropriate tasks to rebuild
`core/` and `docs/`. It also stars a live reload server so that any pages
open to local copies of the docs will get reloaded once it has rebuilt the
`core/` and `docs/` files. 

This is really helpful when actively developing patterns.


### Deploy core

    $ grunt deploy-core --tag=LABEL

* `LABEL` (Required) A label to apply to this package of core. 
   Typically this label is a version like `0.4.1` or perhaps a branch name
   for easy access to work that is ongoing. However, the grunt task will let 
   you label it anything you want.

This deploys code currently in `core/` to the content delivery network (CDN)
via FTP. The actual destination folder is determined by the given `<tag-name>`
and the config in `Gruntfile.js`. 

For example, if you wanted to publish `v1.2.3` of the core assets you would 
build (if you haven't already done so) and deploy the docs with the following 
commands.

    $ grunt core
    $ grunt deploy-core --tag=1.2.3

This would make the core assets available at: 

    http://www.st-andrews.ac.uk/~cdn/dpl/1.2.3/

**Note** The `deploy-core` command does not run `grunt` or `grunt core` 
before deploying code, so the code needs to be build first using one of those 
commands. You could get unexpected results if you switched to a new branch and 
failed to run `grunt` before running `grunt deploy-core`.


### Deploy core

    $ grunt deploy-docs --tag=LABEL

* `LABEL` (Required) A label to apply to this package of docs. 
   Typically this label is a version like `0.4.1` or perhaps a branch name
   for easy access to work that is ongoing. However, the grunt task will let 
   you label it anything you want.

This deploys code currently in `docs/` to the pattern library location on the
web via FTP. The actual destination folder is determined by the given 
`<tag-name>` and the config in `Gruntfile.js`. 

For example, if you wanted to publish `v1.2.3` of the docs you would build and
deploy the docs with the following commands.

    $ grunt docs
    $ grunt deploy-docs --tag=1.2.3

This would make the docs available at: 

    http://www.st-andrews.ac.uk/~wwwtest/dpl/1.2.3/

If you wanted to make this version the new default you would need to update 
the `<meta>` tag in `index.html` at this location: 

    http://www.st-andrews.ac.uk/~wwwtest/dpl/

 to point to `1.2.3`.

**Note** The `deploy-docs` command does not run `grunt` or `grunt docs` 
before deploying code, so the code needs to be build first using one of those 
commands. You could get unexpected results if you switched to a new branch and 
failed to run `grunt` before running `grunt deploy-docs`.




