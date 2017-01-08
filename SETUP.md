# Set up the digital pattern library

Version 0.4
Last updated: Monday 6 December 2016

<!-- MarkdownTOC -->

- [1. Prerequisites](#1-prerequisites)
    - [Git](#git)
    - [Node.js](#nodejs)
    - [Grunt CLI](#grunt-cli)
    - [Ruby](#ruby)
        - [Install Ruby on Windows](#install-ruby-on-windows)
        - [Install Ruby on MacOS X](#install-ruby-on-macos-x)
- [2. Initialize developer tools](#2-initialize-developer-tools)
    - [Clone the repository](#clone-the-repository)
    - [Install Grunt dependencies](#install-grunt-dependencies)
        - [Error: Unable to connect to github.com](#error-unable-to-connect-to-githubcom)
    - [Install Compass Ruby gem](#install-compass-ruby-gem)
    - [Conclusion](#conclusion)
- [3. Update an existing install](#3-update-an-existing-install)
    - [1. Make sure your Node.js version is up-to-date.](#1-make-sure-your-nodejs-version-is-up-to-date)
    - [2. Checkout the branch from GitHub.](#2-checkout-the-branch-from-github)
    - [3. Delete the `node_modules` folder.](#3-delete-the-node_modules-folder)
    - [4. Reinstall npm to your DPL directory.](#4-reinstall-npm-to-your-dpl-directory)
    - [5. Verify it works.](#5-verify-it-works)
- [4. Troubleshooting](#4-troubleshooting)
    - [Error: handlebars does not support render](#error-handlebars-does-not-support-render)

<!-- /MarkdownTOC -->


---

This is a guide to get your environment set up to contribute to the digital pattern library. 




## 1. Prerequisites

### Git

The digital pattern library code is stored in a Git repository, so you will need a Git client to clone it to your local machine and commit changes back to the repository.

If you are a Windows user, we recommend that you always install the Git command line client, as this will allow you to right-click within a folder and select "Git Bash Here" to open a command-line prompt. You can use this to run Git, Node, Grunt, and Ruby commands.

* [Command line](https://git-scm.com/)

There are also a number of GUI clients available; our favourites, in order, are:

* [GitKraken](http://www.gitkraken.com/)
* [GitHub Desktop](https://desktop.github.com/)
* [SourceTree](https://www.sourcetreeapp.com/)


### Node.js

The digital pattern library uses [Grunt](http://gruntjs.com/), the JavaScript task runner, to automate the build process. Grunt is built on [Node.js](http://nodejs.org/) which is a JavaScript runtime that uses [Google Chrome's V8 JavaScript engine](https://developers.google.com/v8/). If you're not familiar with either of these see [Getting started with Grunt](http://gruntjs.com/getting-started) for the basics.

To install Node.js:

1. Visit [http://nodejs.org/](http://nodejs.org/)
2. Download the latest stable release.
3. Run the installer.


### Grunt CLI

Next install the [Grunt command line interface (CLI)](http://gruntjs.com/using-the-cli). Open a "Node.js command prompt" (Windows), Terminal (OS X), or shell (*nix) and run the following command:

```
$ npm install -g grunt-cli
```


### Ruby

We also use [Compass](http://compass-style.org/) to compile [Sass](http://sass-lang.com/) code to CSS. This requires [Ruby](https://www.ruby-lang.org/).


#### Install Ruby on Windows

The easiest way to install Ruby is with [RubyInstaller for Windows](http://rubyinstaller.org/downloads/). 

When prompted at the beginning of the installation make sure to check the box with the label "Add Ruby executables to your PATH". This will mean that you can run commands like `gem install ...`.

Once you're finished with the installation, you should close and reopen any command prompts that you have since they will need to get the updated PATH with Ruby added.


#### Install Ruby on MacOS X

Recent versions of MacOS X already have Ruby installed, no further installation is required.




## 2. Initialize developer tools


### Clone the repository

Clone the Git repository into a folder on your computer using your Git client, or at the command line:

```
git clone https://github.com/standrewsdigital/digital-pattern-library.git
```


### Install Grunt dependencies

1. At the command line, navigate to the folder containing your local clone of 
   the pattern library. 
    ```
        $ cd path/to/folder
    ```
    Where `path/to/folder` is the path to the folder you cloned the pattern 
    library locally. (Or in Windows right-click within the folder containing your local clone of the pattern library and select 'Git Bash'.)

2. Install the dependencies for building the pattern library using the [Node 
   package manager, npm](https://www.npmjs.com/). The `package.json` file defines what dependencies are installed.

        $ npm install


#### Error: Unable to connect to github.com

If you get an error such as

```
npm ERR! Error: Command failed: fatal: unable to connect to github.com:
```

it may be that you are behind a firewall and need to use https instead of git and git+ssh. Append the following to your `.gitconfig` file:

```
# Use https instead of git and git+ssh
[url "https://github.com/"]
        insteadOf = git://github.com/
[url "https://github.com/"]
        insteadOf = git@github.com:
```

You can always find the location of your `.gitconfig` file by typing the following command into a command prompt: `git config --global --edit`.

(On Windows, to exit this editor press `Ctrl+C`, then type `:quit` and press Enter.)


### Install Compass Ruby gem

Install the Compass Ruby gem to compile Sass code into CSS.

```
$ gem install compass
```


### Conclusion

You should now be configured to start work on the pattern library. You should now read [CONTRIBUTING.md](CONTRIBUTING.md) for some guidelines and principles of development.

---




## 3. Update an existing install

If you already have the DPL installed and need to update the underlying packages start here:


### 1. Make sure your Node.js version is up-to-date.
   
To find out which version you have, run `node -v` using Git Bash or the command line. 

Update to version `6.9.1 LTS` if you don't already have it from [http://nodejs.org/](http://nodejs.org/). All the default installation options work so there is no need to change them.


### 2. Checkout the branch from GitHub.

Use your prefered Git client to checkout the branch containing the updated `package.json` files.


### 3. Delete the `node_modules` folder.

This can be found within the root of the DPL folder. This may take a long time due to the size of these files.


### 4. Reinstall npm to your DPL directory.

Run `npm install` using Git Bash or the command line. 


### 5. Verify it works.

Run `grunt` and if it works then you're successfully updated.

---




## 4. Troubleshooting

### Error: handlebars does not support render

If you get the following error when running Grunt:

```
Running "assemble:core_meta" (assemble) task
handlebars does not support render.
Assembling core/build.json ERROR
Warning: handlebars does not support render. Use --force to continue.

Aborted due to warnings.
```

it may be that `npm install` did not complete. It has been reported on [Stack Overflow](http://stackoverflow.com/questions/33568306/handlebars-not-supporting-render-when-adding-assemble-to-a-yeoman-webapp-project) that sometimes node doesn't recursively install the modules for assemble-handlebars; this is a known issue in grunt-assemble, [issue #31](https://github.com/assemble/grunt-assemble/issues/31).

You can easily test for this by adding a [pre-release identifier](http://semver.org/#spec-item-9) to the version number in `package.json`, e.g.

```
"version": "0.9.0-alpha",
```

If `grunt` breaks after adding this, do the following:

1. At the command line (e.g. using Git Bash) navigate to `node_modules/assemble-handlebars`.
2. Run `npm install`.
3. The remaining modules will install.
4. Run `grunt` – it should complete successfully now.