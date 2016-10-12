# Contributing to the pattern library 

Version 0.1
Last updated: Wednesday 12 October 2016

<!-- MarkdownTOC -->

- [1. Principles](#1-principles)
- [2. Workflow](#2-workflow)
- [3. Versioning](#3-versioning)
	- [3.1 Updating version number in source code](#31-updating-version-number-in-source-code)
	- [3.2 Git tags for versions](#32-git-tags-for-versions)
- [4. Change log](#4-change-log)

<!-- /MarkdownTOC -->

---


Hurray - you want to contribute to the pattern library! That's great news. Here's some helpful guidelines to get you started. 

If you haven't already set up your development environment, go see [SETUP.md](SETUP.md).


## 1. Principles

* Nothing should be in the pattern library unless it's used.
* The pattern library should be opinionated. 


## 2. Workflow

Workflow in our context is about how we branch source code, and then merge those changes back together again. We follow Github flow which is a fairly simple workflow that has just enough structure. Read [Scott Chacon's article about Github flow](http://scottchacon.com/2011/08/31/github-flow.html) for a good intro. The main points are: 

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


## 3. Versioning

The Digital pattern library follows semantic versioning. This means that every version number has three parts: 

```
MAJOR.MINOR.PATCH
```

When determining the appropriate number for a new version, increment the:

* MAJOR version when you make incompatible API changes,
* MINOR version when you add functionality in a backwards-compatible manner, and
* PATCH version when you make backwards-compatible bug fixes.

See [Semantic Versioning](http://semver.org/) for more information.

Whenever you release a new version you must update the version in the source code and add a git tag for that version.


### 3.1 Updating version number in source code

The version number is stored in the `package.json` file in the root of the DPL. You must change the version number here to your new version number andthen rebuild `core/` and `docs/` with Grunt. When Grunt runs, the version number found in `package.json` is listed at the top of all the JavaScript and CSS core assets and is also output in the footer of the documentation pages.


### 3.2 Git tags for versions

We follow the convention that for version `0.5.4` the git tag would be:

```
v0.5.4
```
But the folder that is deployed to on the CDN and for the docs would simply be

```
0.5.4
```
The reason for having the extra `v` in the git tag is that it means you can quickly find all the version tags since you may have non-version related tagsin your git repository. There's not really a strong argument for or against the `v`; consistency is the main thing.


## 4. Change log

I can't really emphasize this enough. Having a human-readable change log is essential to quickly bringing new developers up to speed with a project. Therefore, whenever you work on the pattern library you need to update `CHANGELOG.md` to reflect those changes.

It's best to document changes as you go; that way updates to `CHANGELOG.md` get committed alongside the changes to the code. 

At a minimum, each time you add a git tag and release a new version of the pattern library the change log should be updated to reflect that new version, the date it was released and the changes that have occured since the last version.