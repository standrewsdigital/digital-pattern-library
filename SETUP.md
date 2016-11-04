# Setup

Version 0.3
Last updated: Friday 04 November 2016

<!-- MarkdownTOC -->

- 1. Prerequisites
- 2. Initialize developer tools
- 3. Upgrading an existing install
- Conclusion

<!-- /MarkdownTOC -->


---

This is a guide to get your environment set up to contribute to the digital 
pattern library. 




## 1. Prerequisites

### Git

The digital pattern library code is stored in a Git repository, so you will need a Git client to clone it to your local machine and commit changes back to the repo.

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

Recent versions of MacOS X already have Ruby installed, so no further installation is required.




## 2. Initialize developer tools


### Clone the repo

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



## 3. Upgrading an existing install

If you already have the DPL installed and need to update the underlying packages start here:


### 1. Make sure your Node.js version is up-to-date.
   
To find out which version you have run `node -v` using git bash or the command line. You can upgrade to version `6.9.1 LTS` if you don't already have this from [http://nodejs.org/](http://nodejs.org/).


### 2. Clone branch from GitHub.

Use your prefered git client to clone the branch containing the updated `package.json` files.


### 3. Delete the `node_modules` folder.

This can be found within the root of the DPL folder. This may take a long time due to the size of these files.


### 4. Reinstall npm to your DPL directory.

Run `npm install` using git bash or the command line. Note: Node.js have changed the file structure so all dependencies will be installed as normal folders instead of nesting the folders.


### 5. Verify it works.

Build out the updated files using `grunt` to verify that it all works.


## Conclusion

You should now be all configured to start work on the pattern library. You should now read [CONTRIBUTING.md](CONTRIBUTING.md) for some general guidelines and principles of development.