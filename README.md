# Digital pattern library

The pattern library has three main audiences:

1. **General users** who will load pages using the core CSS and JS from the pattern library. Pages they access should all have the same look and feel.
2. **Developers outside our team** who build applications or websites using our core CSS and JS. These developers needs to know what the official patterns are and how to use them. 
3. The **core team** develops and designs the pattern library and uses it to build digital assets. Our team needs a central place to work on, test and document our design patterns.

There are three main deliverables corresponding to the audiences:

1. **Core CSS and JS.** These are found in the `build` folder of the repository. They are also published to a central location.
2. **Documentation.** The `patterns` folder includes documentation about each pattern available in the pattern library, examples of each one, and a browsable patchwork of all the patterns. In addition, you will also find CSS and JS coding style guides, and other information.
3. **Pattern tests.** The core team can use the examples and patchwork in the `patterns` folder as a way to implement pattern-driven-development, which is a translation of test-driven-development to design patterns.

## Principles

* Nothing should be in the pattern library unless it's used.
* The pattern library should be opinionated. 


## Contributing

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


4. Install the Ruby compass gem. Currently we are using compass to process the Sass files. In the future, we may choose to update 

    gem install compass

### Step 4. Run Grunt to generate `core` and `docs` folders

To get the pattern library kicked off run:

    grunt

After you've run this you should have a freshly made `core` folder and `docs` folder built using code in `src`.

The tasks that are defined in `Gruntfile.js`.


### Step 5. Start Grunt to monitor changes

Finally, to begin an active development session, you can run Grunt in watch mode which will monitor changes to files and run the appropriate tasks when they change.

    grunt watch

The Gruntfile sets which files Grunt should watch.

## Deploying

To deploy your code you can use the two grunt commands

```
grunt deploy-core --tag=<version-num>
```

```
grunt deploy-docs --tag=<version-num>
```

Replacing `<version-num>` with the appopriate version. For example:

```
grunt deploy-core --tag=0.1.2
```

```
grunt deploy-docs --tag=0.1.2
```

In order for the commands to work you will need to create a file called `.ftppass` and include your FTP credentials in it. It should have the following form:

```
{
  "core": {
    "username": "your-username",
    "password": "password"
  },
  "docs": {
    "username": "your-username",
    "password": "password"
  }
}
```

