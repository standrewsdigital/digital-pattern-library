---
title: Getting started contributing
---

This is intended to help you get setup developing the pattern library. We are using [Grunt](http://gruntjs.com/) to automate the building process and Grunt is based on [Node.js](http://nodejs.org/) so you'll need to install them both.

### Step 1: Install Node.js

The first step is to install Node.js on your computer.

1. Visit [http://nodejs.org/](http://nodejs.org/)
2. Click on "Install"
3. Run the installer after it has downloaded.

### Step 2. Clone the pattern library

You'll need to clone the git repository for the pattern library somewhere on your computer. Anywhere you want is fine as long as you know the location.

### Step 3. Initialize developer tools

Now you need to open "Node.js command prompt" (Windows), Terminal (OS X), or shell (*nix).

1. Install the Grunt CLI (command-line-interface) by entering the following command (see Grunt's [Getting started](http://gruntjs.com/getting-started) page for more details):

        npm install -g grunt-cli

2. Navigate to the folder containing your local clone of the pattern library. (Usually you'll type somthing like `cd path/to/folder` to do this)

3. Enter the following command to install the dependencies for the pattern library (it will automatically look in the contents of the `package.json` file to find the dependencies).

        npm install


### Step 4. Run Grunt to generate `build` folder

To get the pattern library kicked off run:

    grunt

After you've run this you should have a freshly made `build` folder and `patterns` folder constructed from the code in src.

The tasks are defined in the Gruntfile (`Gruntfile.js`).


### Step 5. Start Grunt to monitor changes

Finally, to begin an active development session, you can run Grunt in watch mode which will monitor changes to files and run the appropriate tasks when they change.

    grunt watch

The Gruntfile sets which files Grunt should watch.
