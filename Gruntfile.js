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
      js: {
        src: [
          'src/vendor/jquery-1.11.0.min.js', 
          'src/vendor/jquery.bigtarget.js',
          'src/vendor/jquery.fitvids.js',
          'src/vendor/respond.js',
          'src/vendor/bootstrap.min.js',
          'src/base/*.js',
          'src/patterns/*/*.js'
        ],
        dest: 'build/scripts/core.js'
      }
    },


    /* task: jshint - check Javascript for errors  */
    jshint: {
      defaults: ['src/base/base.js','src/patterns/**/*.js'],
    },


    /* task: compass - compile compass/sass code to CSS */
    compass: {
      dist: {
        options: {
          specify: [
            'src/screen.scss',
            'src/print.scss',
            'src/ie.scss'
          ],
          sassDir: 'src',
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
        layoutdir: 'src/_doc/layouts',
        partials: ['src/patterns/*/*.hbs'],
        ext: '.html',
        data: 'src/patterns/*/data/*.json',
        helpers: ['handlebars-helper-asset'],
      },

      patterns: {
        options: { 
          layout: 'pattern.hbs'
        },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/patterns/',      // Src matches are relative to this path.
            src: ['index.hbs','*/*.doc.hbs'], // Actual pattern(s) to match.
            ext: '.html',   // Dest filepaths will have this extension.
            dest: 'build',
            rename: function(src,dest){
              return 'patterns/' + dest.replace(/\/[a-zA-Z0-9_-]+.html$/,'/index.html');
            }
          }
        ]
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
      }
    },

    /* task: watch - run tasks when specified files change */
    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },
      js: {
        files: ['src/**/*.js'],
        tasks: ['jshint','concat'],
        options: {
          interrupt: true
        },
      },
      styles: {
        files: ['src/**/*.scss'],
        tasks: ['compass'],
        options: {
          interrupt: true
        },
      },
      docs: {
        files: [
          'src/**/*.hbs',
          'src/**/*.json',
          'src/**/*.md'],
        tasks: ['assemble'],
        options: {
          interrupt: true
        },
      },
    },


  });



  // Load grunt plugins
  grunt.loadNpmTasks('assemble');  

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  


  // Define default tasks.
  grunt.registerTask('default', ['compass','jshint','concat','assemble']);

};


