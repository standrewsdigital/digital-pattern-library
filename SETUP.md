# Setting up the dev environment

This is a guide to get your environment setup to contibute to the Digital 
pattern library. 


## 1. Prerequisites

We are using [Grunt](http://gruntjs.com/) to automate the build process and 
Grunt is based on [Node.js](http://nodejs.org/). If you're not familiar with 
either of these can see [Getting started with Grunt]
(http://gruntjs.com/getting-started) for the basics.

Let's begin by installing Node.js. 

1. Visit [http://nodejs.org/](http://nodejs.org/)
2. Click on "Install"
3. Run the installer after it has downloaded.

Next we need to install the command-line-interface for Grunt. Open the "Node.js 
command prompt" (Windows), Terminal (OS X), or shell (*nix) and run the 
following command.

    $ npm install -g grunt-cli

We also use a ruby package for compiling the compass/sass code, so you
need to install Ruby if you don't already have it. 

* **Installing ruby on Windows**  
  The easiest way to install Ruby is with an install wizard from 
  [RubyInstaller for Windows](http://rubyinstaller.org/downloads/).

  When prompted at the beginning of the wizard, make sure to check the box
  with the label "Add Ruby executables to your PATH". This will mean that you
  can run commands like `gem install ...` below. Once you're finished with the
  installation, you should close and reopen any command prompts that you have 
  since they will need to get the updated PATH with Ruby added.

* **Installing ruby on MacOS X**  
  Recent versions of MacOS X already have Ruby installed, so no installation
  is required.


## 2. Initialize developer tools

Again, open the appropriate command line – "Node.js command prompt" (Windows), 
Terminal (OS X), or shell (*nix) – and follow these steps.

1. Clone the git repository into a folder on your computer. You can do this 
   with a client like SourceTree or on the command line. 

2. At the command line, navigate to the folder containing your local clone of 
   the pattern library. 
    
        $ cd path/to/folder
    
    Where `path/to/folder` is the path to the folder you cloned the pattern 
    library locally.

3. Install the dependencies for building the pattern library using the Node 
   package manager (a.k.a. 'npm'). The `package.json` file configures what
   the dependencies are.

        $ npm install

4. Install the Ruby compass gem to compile sass code into CSS.

        $ gem install compass


## 3. Configuration for deployment

If you want to use either of the deploy commands (`deploy-docs` or 
`deploy-core`), you'll need to create a file called `.ftppass` in the root of
the pattern library folder and specify your FTP credentials to the 
secondary accounts. 

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

See the Grunt plugin [grunt-ftp-deploy](https://github.com/zonak/grunt-ftp-deploy) 
if you're curious about further details. 

**Note**: git is configured to ignore the `.ftppass` file in `.gitignore`. This
is so that everyone can use their own credentials to deploy rather than share 
credentials. It's generally a bad idea to commit passwords into a shared
repository.


## Conclusion

You should now be all configured to start work on the pattern library. You 
should now read [CONTRIBUTING.md](CONTRIBUTING.md) for some general guidelines
and principles of development. 

