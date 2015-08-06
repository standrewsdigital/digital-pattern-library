# Setting up the dev environment

This is a guide to get your environment setup to contibute to the Digital 
pattern library. 


## 1. Prerequisites

We are using [Grunt](http://gruntjs.com/) to automate the build process and 
Grunt is based on [Node.js](http://nodejs.org/). If you're not familiar with 
either of these can see [Getting started with Grunt](http://gruntjs.com/getting-started)
for the basics.

Let's begin by installing Node.js. 

1. Visit [http://nodejs.org/](http://nodejs.org/)
2. Click on "Install"
3. Run the installer after it has downloaded.

Next we need to install the command-line-interface for Grunt. Open the "Node.js 
command prompt" (Windows), Terminal (OS X), or shell (*nix) and run the 
following command.

    $ npm install -g grunt-cli


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

If you want to use either of the deploy commands (`deploy-docs` and 
`deploy-core`), you'll need to create a file called `.ftppass` in the root of
the pattern library folder and specify your FTP credentials to the appropriate 
secondary account. 

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

See the Grunt plugin [grunt-ftp-deploy](https://github.com/zonak/grunt-ftp-deploy) 
for further details. 

**Note**: git is configured to ignore this file in `.gitignore`. This is so 
that everyone can use their own credentials to deploy rather than share 
credentials. It's generally a bad idea to commit passwords into a shared
repository.


## Conclusion

You should now be all configured to start work on the pattern library. You 
should now read [CONTRIBUTING.md](CONTRIBUTING.md) for some general guidelines
and principles of development. 

