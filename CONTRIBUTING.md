# Contributing to the pattern library 

Hurray - you want to contribute to the pattern library! That's great news. 
Here's some helpful guidelines to get you started. 

If you haven't already set up your development environment, go see 
[SETUP.md](SETUP.md).


## Principles

* Nothing should be in the pattern library unless it's used.
* The pattern library should be opinionated. 


## Feature workflow

Workflow relates to how we branch source code, and then merge those changed 
back together again. We follow [Github flow](http://scottchacon.com/2011/08/31/github-flow.html) 
which is a fairly simple workflow that has just enough structure. Read Scott
Chacon's article for a good intro. The main points are: 

* All development must take place in feature branches. 
* Feature branches should be branched from `master`.
* Commit often in your feature branches.
* When features are near complete, submit a pull request for that feature 
  branch to be merged into `master`.
* Code reviews are a part of the pull request. Ideally, a person other than 
  yourself should review (at a minimum conduct a sanity check) on all features 
  before they are merged into `master`.
* When reviewed, a do a non-fast-forward merge of the feature branch into 
  `master` and resolve any conflicts. This preserves the history of how each 
  feature was made. 


## Versioning

The Digital pattern library follows [semantic versioning](http://semver.org/). 
This means that every version number has three parts: 

    MAJOR.MINOR.PATCH

If you're not familiar with semantic versioning, you should read the overview. 
The main points are that: 

* `PATCH`-level increments fix bugs
* `MINOR`-level increments indicate that new features have been added. 
* `MAJOR`-level increments indicate that the API may have changed. If 
  `MAJOR` is less than 1 (i.e. `0.5.4`) this indicates that the API is not yet 
  become stable.

We follow the convention that for version `0.5.4` the git tag would be:

    v0.5.4

But the folder that is deployed to on the CDN and for the docs would simply be

    0.5.4

The reason for having the extra `v` in the tag is that it means you can quickly 
find all the version tags, if you additionally have other tags in your git
repository.


## Change log

I can't really emphasize this enough. Having a human-readable change log is 
essential to quickly bringing new developers up to speed with a project. 
Therefore, whenever you work on the pattern library you need to update 
CHANGELOG.md to reflect those changes. I try to document changes I make as a I 
go. Changes to the CHANGELOG.md then get committed alongside the actual changes
to the code. 

At a minimum, each time you add a tag and release a new version of the 
pattern library the CHANGELOG should be updated to reflect that new version, 
the date it was released and the changes that have occured since the last 
version.