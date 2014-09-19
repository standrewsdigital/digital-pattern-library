'use strict';
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      src: 'src',
      dest: 'build',
    },

    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'src/<%= pkg.name %>.js',
    //     dest: 'build/<%= pkg.name %>.min.js'
    //   }
    // },

    concat: {
      dist: {
        src: ['<%= dirs.src %>/vendor/*.js','<%= dirs.src %>/base/*.js','<%= dirs.src %>/patterns/**/*.js'],
        dest: '<%= dirs.dest %>/scripts/core.js'
      }
    },

    jshint: {
      defaults: ['<%= dirs.src %>/base/base.js','<%= dirs.src %>/patterns/**/*.js'],
    },

    compass: {
      dist: {
        options: {              // Target options
          specify: ['<%= dirs.src %>/screen.scss','<%= dirs.src %>/print.scss','<%= dirs.src %>/ie.scss'],
          sassDir: '<%= dirs.src %>',
          cssDir: '<%= dirs.dest %>/styles',
          environment: 'production',
          force: true,
          trace: true,
          relativeAssets: true
        }
      }
    },

    watch: {
      js: {
        files: ['<%= dirs.src %>/**/*.js'],
        tasks: ['jshint','concat'],
        options: {
          interrupt: true
        },
      },
      styles: {
        files: ['<%= dirs.src %>/**/*.scss'],
        tasks: ['compass'],
        options: {
          interrupt: true
        },
      },
    },


    /* Used for generating the pattern library*/
    assemble: {
      options: {
        assets: 'build',
        layoutdir: '<%= dirs.src %>/_documentation_layouts',
        partials: ['<%= dirs.src %>/patterns/*/*.hbs'],
        ext: '.html',
        data: '<%= dirs.src %>/patterns/*/*.json',

        // registerFunctions: function (engine)  { 
        //   var  helperFunctions = {};
        //   helperFunctions['foo' ] = function ()  {  return  'bar'; };
        //   engine.engine.registerFunctions(helperFunctions);
        // }
      },


      index: {
        options: { layout: 'index.hbs' },
        files: {
          'patterns/index.html':'<%= dirs.src %>/patterns/index.hbs'
        }
      },
      patterns: {
        options: { layout: 'pattern.hbs' },
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: '<%= dirs.src %>/patterns/',      // Src matches are relative to this path.
            src: ['*/*.hbs'], // Actual pattern(s) to match.
            ext: '.html',   // Dest filepaths will have this extension.
            rename: function(src,dest){
              return 'patterns/' + dest.replace(/\/[a-zA-Z0-9_-]+.html$/,'/index.html');
            }
          }
        ]

      },
      samples: {
        options: { layout: 'pattern_sample.hbs' },
        // src: ['<%= dirs.src %>/patterns/*/samples/*.hbs'],
        // dest: 'patterns'
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: '<%= dirs.src %>/patterns/',      // Src matches are relative to this path.
            src: ['*/samples/*.hbs'], // Actual pattern(s) to match.
            dest: 'patterns',
            ext: '.html',   // Dest filepaths will have this extension.
            // rename: function(src,dest){
            //   return 'patterns/' + dest.replace(/\/[a-zA-Z0-9_-]+.html$/,'/index.html');
            // }
          }
        ]
      }
    },


  });

  // Load grunt plugins
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('assemble');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['compass','jshint','concat']);

};