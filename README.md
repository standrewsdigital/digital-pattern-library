# St Andrews Digital Pattern Library

The pattern library has three main audiences:

1. **General users** who will load pages using the core CSS and JS from the pattern library. Pages they access should all have the same look and feel.
2. **Developers outside our team** who build applications or websites using our core CSS and JS. These developers needs to know what the official patterns are and how to use them. 
3. The **core team** develops and designs the pattern library and uses it to build digital assets. Our team needs a central place to work on, test and document our design patterns.

There are three main deliverables corresponding to the audiences:

1. **Core CSS and JS.** These are found in the `build` folder of the repository. They are also published to a central location.
2. **Documentation.** The `patterns` folder includes documentation about each pattern available in the pattern library, examples of each one, and a browsable patchwork of all the patterns. In addition, you will also find CSS and JS coding style guides, and other information.
3. **Pattern tests.** The core team can use the examples and patchwork in the `patterns` folder as a way to implement pattern-driven-development, which is a translation of test-driven-development to design patterns.

## Getting Started

This is intended to help you get setup developing the pattern library. We are using [Grunt](http://gruntjs.com/) to automate the building process and Grunt is based on [Node.JS](http://nodejs.org/) so you'll need to install them both.

### Step 1: Install Node.JS

The first step is to install Node.JS on your computer. 

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

### Step 4. Start Grunt to monitor changes

Finally, to begin an active development session, you'll need to run Grunt in watch mode which will monitor changes to files and run the appropriate tasks when they change. 

    grunt watch

Files to watch and the tasks to run are configured by the `Gruntfile.js` if you're curious.

