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
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },

     /* task: concat - combine scripts into single file.  */
    concat: {
      core: {
        src: [
          'src/scripts/vendor/jquery.min.js', 
          'src/scripts/vendor/jquery.bigtarget.js',
          'src/scripts/vendor/jquery.fitvids.js',
          'src/scripts/vendor/respond.js',
          'src/scripts/vendor/bootstrap.min.js',
          'src/scripts/base.js',
          'src/patterns/*/*.js'
        ],
        dest: 'build/scripts/core.js'
      },
      doc: {
        src: [
          'src/scripts/vendor/jquery.min.js',
          'src/scripts/vendor/respond.js',
          'src/scripts/vendor/bootstrap.min.js',
          'src/scripts/doc.js'
        ],
        dest: 'build/scripts/doc.js'
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
            'src/styles/screen.scss',
            'src/styles/print.scss',
            'src/styles/ie.scss'
          ],
          sassDir: 'src/styles',
          importPath: 'src/patterns',
          cssDir: 'build/styles',
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
        assets: 'build',
        layoutdir: 'src/_layouts',
        partials: ['src/patterns/*/*.hbs'],
        ext: '.html',
        data: ['src/patterns/*/data/*.json','src/prototypes/_data/*.json'],
        helpers: ['handlebars-helper-asset'],
      },

      general: {
        options: { 
          layout: '_base.hbs'
        },
        files: [
          {
            expand: true,     
            cwd: 'src/patterns/',
            src: ['patchwork.hbs'],
            ext: '.html',
            dest: 'patterns'
          }
        ]
      },

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
            dest: 'patterns',
            rename: function(src,dest){
              return 'patterns/' + dest.replace(/\/[a-zA-Z0-9_-]+.html$/,'/index.html');
            }
          },
          
        ]
      },

      prototypes: {
        options: { 
          layout: 'prototype.hbs',
          assets: 'prototypes/build',
        },
        files: [
          {
            expand: true,     
            cwd: 'src/prototypes/',
            src: ['**/*.hbs'],
            ext: '.html',
            dest: 'prototypes'
          }
        ],
      },

      examples: {
        options: { layout: 'pattern_example.hbs' },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/patterns/',      // Src matches are relative to this path.
            src: ['*/examples/*.hbs'], // Actual pattern(s) to match.
            dest: 'patterns',
            ext: '.html',   // Dest filepaths will have this extension.
          }
        ]
      },

      docs: {
        options: { 
          layout: 'doc.hbs'
        },
        files: [
          {
            expand: true,     
            cwd: '',
            src: ['*.md'],
            ext: '.html',
            dest: 'patterns'
          },
          {
            expand: true,     
            cwd: 'src/docs',
            src: ['*.md'],
            ext: '.html',
            dest: 'patterns'
          },
        ]
      },

      meta: {
        options: { 
          layout: 'meta.hbs',
          partials: ['src/docs/*.md'],
          ext: '.md',
        },
        files: [
          {
            expand: true,     
            cwd: 'src/meta',
            src: ['*.hbs'],
            dest: ''
          }
        ]
      },

    },


    /* task: clean - remove generated content */
    clean: {
      patterns: {
        src: ["patterns","*.md"]
      },
      prototypes: {
        src: ["prototypes"]
      },
      prototype_assets: {
        src: ["prototypes/build"]
      },
      images: {
        src: ["build/images"]
      },
      js: {
        src: ["build/scripts"]
      },
      styles: {
        src: ["build/styles"]
      },
      build: {
        src: ["build"] 
      }
    },

    /* task: copy - move files (mostly images) from src to build */
    copy: {
      images: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/images/',      // Src matches are relative to this path.
            src: ['**/*'], // Actual pattern(s) to match.
            dest: 'build/images'
          }
        ]
      },
      prototype_assets: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'build',      // Src matches are relative to this path.
            src: ['**/*'], // Actual pattern(s) to match.
            dest: 'prototypes/build'
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
        tasks: ['clean:js','jshint','concat','clean:prototype_assets','copy:prototype_assets'],
      },
      images: {
        files: ['src/images/**/*'],
        tasks: ['clean:images','copy','clean:prototype_assets','copy:prototype_assets']
      },
      styles: {
        files: ['src/**/*.scss'],
        tasks: ['clean:styles','compass','clean:prototype_assets','copy:prototype_assets']
      },
      docs: {
        files: [
          'src/**/*.hbs',
          'src/**/*.json',
          'src/**/*.md',
          'package.json',
        ],
        tasks: ['clean:patterns','clean:prototypes','assemble','copy:prototype_assets']
      }
    },


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
  grunt.registerTask('default', ['clean:build','clean:patterns','clean:prototypes','compass','jshint','concat','copy:images','copy:prototype_assets','assemble']);

};


