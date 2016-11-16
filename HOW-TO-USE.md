# How to use - Digital pattern library

Version 0.2
Last updated: Wednesday 16 November 2016

<!-- MarkdownTC -->

- [1. Commands](#1-commands)
  - [1.1 Build core and docs](#11-build-core-and-docs)
    - [1.1.1 Build core](#111-build-core)
    - [1.1.2 Build docs](#112-build-docs)
  - [1.2 Watch \(interactive building\)](#12-watch-interactive-building)

<!-- /MarkdownTOC -->


---

This is the source code for the Digital pattern library. There are two 
components built using this code: 

* **Core assets** Production JavaScript, CSS, fonts and images
* **Documentation** Documentation about using the patterns in the library and 
  other information for developers who consume the core assets. 

In the repository, we have the following additional documentation aimed at 
assisting those who contribute and develop the pattern library.

* [SETUP.md](SETUP.md) – How to set up your development environment.
* [CONTRIBUTING.md](CONTRIBUTING.md) – General guidelines for contributing to
   pattern library.
* [FILES.md](FILES.md) – Overview of source folders and files.
* [ADD-PATTERN.md](ADD-PATTERN.md) – How to add a new pattern.




## 1. Commands

After [getting setup](SETUP.md), you can use the following Grunt tasks.

### 1.1 Build core and docs

```
$ grunt
```

This command will build the core assets and place them in `core/` and will 
build the documentation and place it in `docs/`. Behind the scenes it runs the
following two individual commands. 


#### 1.1.1 Build core

```
$ grunt core
```

This command builds the core assets and places them in `core/`.


#### 1.1.2 Build docs

```
$ grunt docs
```

This command builds the documentation and places it in `docs/` and copies
what's currently in `core/` into the `docs/assets/core/` for use by the
documentation and examples.


### 1.2 Watch (interactive building)

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

