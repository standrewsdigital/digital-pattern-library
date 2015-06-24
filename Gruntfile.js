'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),



    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'core/<%= pkg.name %>.min.js'
    //   }
    // },

     /* task: concat - combine scripts into single file.  */
    concat: {
      core: {
        src: [
          /* Note: update src/docs/dependencies.md if any of these change */
          'src/scripts/vendor/jquery.min.js',
          'src/scripts/vendor/jquery.bigtarget.js',
          'src/scripts/vendor/jquery.fitvids.js',
          'src/scripts/vendor/jquery.fittext.js',
          'src/scripts/vendor/jquery.replacetext.js',
          'src/scripts/vendor/respond.js',
          'src/scripts/vendor/bootstrap.js',
          'src/scripts/vendor/matchmedia.polyfill.js',
          'src/scripts/vendor/matchMedia.addListener.js',
          'src/scripts/vendor/enquire.js',
          'src/scripts/vendor/hammer.js',
          'src/scripts/base.js',
          'src/scripts/unbreakableSpaces.js',
          'src/patterns/*/*.js'
        ],
        dest: 'core/scripts/core.js'
      },
      corebase: {
        src: [
          'src/scripts/base.js',
          'src/patterns/*/*.js'
        ],
        dest: 'core/scripts/core-base.js'
      },
      doc: {
        src: [
          'src/scripts/vendor/jquery.min.js',
          'src/scripts/vendor/respond.js',
          'src/scripts/vendor/bootstrap.js',
          'src/scripts/doc.js'
        ],
        dest: 'core/scripts/doc.js'
      }
    },


    /* task: jshint - check Javascript for errors  */
    jshint: {
      defaults: ['src/scripts/base.js','src/patterns/*/*.js'],
    },


    /* task: compass - compile compass/sass code to CSS */
    compass: {
      dist: {
        options: {
          specify: [
            'src/styles/doc.scss',
            'src/styles/ie.scss',
            'src/styles/print.scss',
            'src/styles/screen-bootstrap-only.scss',
            'src/styles/screen.scss'
          ],
          sassDir: 'src/styles',
          importPath: 'src/patterns',
          cssDir: 'core/styles',
          environment: 'production',
          force: true,
          trace: true,
          relativeAssets: true
        }
      }
    },


    /* task: assemble - generate the pattern library*/
    assemble: {

      options: {
        pkg: '<%= pkg %>',
        assets: 'docs/assets',
        layoutdir: 'src/_layouts',
        partials: ['src/patterns/*/*.hbs'],
        ext: '.html',
        data: ['src/_meta/*.json','src/patterns/*/data/*.json','src/examples/_data/*.json'],
        helpers: ['handlebars-helper-asset','handlebars-helper-rel'],
        site: {
          root: "docs",
        },
      },

      // general: {
      //   options: {
      //     layout: '_base.hbs'
      //   },
      //   files: [
      //     {
      //       expand: true,
      //       cwd: 'src/_meta/',
      //       src: ['patchwork.hbs'],
      //       ext: '.html',
      //       dest: 'docs/patchwork/index.html'
      //     }
      //   ]
      // },

      patterns: {
        options: {
          layout: 'pattern.hbs'
        },
        files: [
          {
            expand: true,
            cwd: 'src/patterns/',
            src: ['index.hbs','*/*.doc.hbs'],
            ext: '.html',
            dest: 'docs/patterns',
            rename: function(src,dest){
              return 'docs/patterns/' + dest.replace(/\/[a-zA-Z0-9_-]+.html$/,'/index.html');
            }
          },

        ]
      },

      pattern_examples: {
        options: { 
          layout: 'pattern_example.hbs'
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/patterns/',      // Src matches are relative to this path.
            src: ['*/examples/*.hbs'], // Actual pattern(s) to match.
            dest: 'docs/patterns',
            ext: '.html',   // Dest filepaths will have this extension.
          }
        ]
      },


      examples: {
        options: {
          layout: 'example.hbs'
          // assets: 'prototypes/build',
        },
        files: [
          {
            expand: true,
            cwd: 'src/examples/',
            src: ['**/*.hbs'],
            ext: '.html',
            dest: 'docs/examples'
          }
        ],
      },

      docs: {
        options: {
          layout: 'doc.hbs'
        },
        files: [
          {
            expand: true,
            cwd: 'src/docs',
            src: ['*.md','*.html','**/*.hbs'],
            ext: '.html',
            dest: 'docs'
          },
        ]
      }

    },


    /* task: clean - remove generated content */
    clean: {
      images: {
        src: ["core/images"]
      },
      fonts: {
        src: ["core/fonts"]
      },
      js: {
        src: ["core/scripts"]
      },
      styles: {
        src: ["core/styles"]
      },
      core: {
        src: ["core"]
      },
      docs: {
        src: ["docs"]
      },
      docs_assets: {
        src: ["docs/assets"]
      }
    },

    /* task: copy - move files */
    copy: {
      images: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/images/',      // Src matches are relative to this path.
            src: ['**/*'], // Actual pattern(s) to match.
            dest: 'core/images'
          }
        ]
      },
      fonts: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/fonts/',      // Src matches are relative to this path.
            src: ['**/*'], // Actual pattern(s) to match.
            dest: 'core/fonts'
          }
        ]
      },
      docs_assets: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'core',      // Src matches are relative to this path.
            src: ['**/*'], // Actual pattern(s) to match.
            dest: 'docs/assets'
          }
        ]
      }
    },

    /* task: watch - run tasks when specified files change */
    watch: {
      options: {
        livereload: true,
        interrupt: true
      },
      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['default']
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['clean:js','jshint','concat','clean:docs_assets','copy:docs_assets'],
      },
      images: {
        files: ['src/images/**/*'],
        tasks: ['clean:images','copy:images','clean:docs_assets','copy:docs_assets']
      },
      fonts: {
        files: ['src/fonts/**/*'],
        tasks: ['clean:fonts','copy:fonts','clean:docs_assets','copy:docs_assets']
      },
      styles: {
        files: ['src/**/*.scss'],
        tasks: ['clean:styles','compass','clean:docs_assets','copy:docs_assets']
      },
      docs: {
        files: [
          'src/**/*.html',
          'src/**/*.hbs',
          'src/**/*.json',
          'src/**/*.md',
          'package.json',
        ],
        tasks: ['clean:docs','assemble','copy:docs_assets']
      }
    },


    /* task: deploy over ftp  */
    'ftp-deploy': {
      core: {
        auth: {
          host: 'www-users.st-andrews.ac.uk',
          port: 21,
          authKey: 'core'
        },
        src: 'core',
        dest: '/dpl/'+grunt.option('tag')+'/',
        exclusions: []
      },
      docs: {
        auth: {
          host: 'www-users.st-andrews.ac.uk',
          port: 21,
          authKey: 'docs'
        },
        src: 'docs',
        dest: '/dpl/'+grunt.option('tag')+'/',
        exclusions: []
      }
    }



  });


  // Load grunt plugins
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  // Define default tasks.
  grunt.registerTask('default', ['clean:core','clean:docs','compass','jshint','concat','copy','assemble']);


  // Deploy core files
  grunt.registerTask('deploy-core', 'Uploads core files as specified version.', function(n) {
    var deploy_tag = grunt.option('tag');
    if (!deploy_tag) {
      grunt.log.error("You must specify a tag to deploy as, i.e. '--tag=1.0.2'");
      grunt.fail.warn('Cannot deploy core files without a version tag.');
      return;
    }
    grunt.log.writeln("Deploying core files in 'build/' as version (" + deploy_tag+")");
    grunt.task.loadNpmTasks('grunt-ftp-deploy');
    grunt.task.run(['ftp-deploy:core']);
  });

  // Deploy docs
  grunt.registerTask('deploy-docs', 'Upload docs as specified version.', function(n) {
    var deploy_tag = grunt.option('tag');
    if(!deploy_tag) {
      grunt.log.error("You must specify a tag to deploy as, i.e. '--tag=1.0.2'");
      grunt.fail.warn('Cannot deploy docs without a version tag.');
      return;
    }
    grunt.log.writeln("Deploying 'docs/' as version (" + deploy_tag+")");
    grunt.task.loadNpmTasks('grunt-ftp-deploy');
    grunt.task.run(['ftp-deploy:docs']);
  });


};
