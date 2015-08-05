'use strict';
var timestamp = new Date();
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    gitinfo: {},



     /* task: concat - combine scripts into single file.  */
    concat: {
      core: {
        src: [
          /* Note: update src/docs/dependencies.md if any of these change */
          'src/scripts/vendor/hammer.js',
          'src/scripts/vendor/jquery.min.js',
          'src/scripts/vendor/jquery.bigtarget.js',
          'src/scripts/vendor/jquery.fitvids.js',
          'src/scripts/vendor/jquery.fittext.js',
          'src/scripts/vendor/jquery.replacetext.js',
          'src/scripts/vendor/jquery.theatre.min.js',
          'src/scripts/vendor/respond.js',
          'src/scripts/vendor/bootstrap.js',
          'src/scripts/vendor/matchmedia.polyfill.js',
          'src/scripts/vendor/matchMedia.addListener.js',
          'src/scripts/vendor/enquire.js',
          'src/scripts/base.js',

          'src/scripts/unbreakableSpaces.js',
          'src/patterns/*/*.js'
        ],
        dest: 'core/scripts/core.js'
      },
      headerOnly: {
        src: [
          'src/patterns/header/header.js'
        ],
        dest: 'core/scripts/header-only.js'
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
      },
      datatables: {
        src: [
          'src/scripts/datatables.js'
        ],
        dest: 'core/scripts/datatables.js'
      }
    },


    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      core: {
        files: {
          'core/scripts/core-base.min.js': ['core/scripts/core-base.js'],
          'core/scripts/core.min.js': ['core/scripts/core.js'],
          'core/scripts/datatables.min.js': ['core/scripts/datatables.js'],
          'core/scripts/doc.min.js': ['core/scripts/doc.js'],
          'core/scripts/header-only.min.js': ['core/scripts/header-only.js']
        }
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
            'src/styles/datatables.scss',
            'src/styles/doc.scss',
            'src/styles/ie.scss',
            'src/styles/print.scss',
            'src/styles/screen-bootstrap-only.scss',
            'src/styles/screen.scss',
            'src/styles/header-only.scss'
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
        git: {
          branch: '<%= gitinfo.local.branch.current.name %>',
          commit: '<%= gitinfo.local.branch.current.SHA %>'
        },
        now: timestamp.toString(),
        assets: 'docs/assets',
        layoutdir: 'src/_layouts',
        partials: ['src/patterns/*/*.hbs', 'src/_partials/*.hbs'],
        ext: '.html',
        data: ['src/_meta/*.json','src/patterns/*/data/*.json','src/examples/_data/*.json'],
        helpers: ['handlebars-helper-asset','handlebars-helper-rel'],
        site: {
          root: "docs",
        },
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
        ]
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
          }
        ]
      },

      core_meta: {
        options: {
          ext: '.json',
        },
        files: [
          {
            expand: true,
            cwd: 'src/_meta',
            src: ['build.tmpl'],
            dest: 'core'
          }
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
      core_images: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: 'src/images/',      // Src matches are relative to this path.
            src: ['**/*'], // Actual pattern(s) to match.
            dest: 'core/images'
          }
        ]
      },
      core_fonts: {
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
        tasks: ['clean:js','jshint','concat','uglify','clean:docs_assets','copy:docs_assets'],
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
        tasks: ['docs']
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
    },



    filesize: {
      core_stats: {
        files: [
          {expand: true, cwd: 'core', src: ['**/*.css', '**/*.js']}
        ],
        options: {
          output: [
            {
              path: ".core-stats.txt",
              format: "{filename} - {kb:'0.0'} kb"
            }
          ]
        }
      }
    },



  });


  // Load grunt plugins
  grunt.loadNpmTasks('grunt-gitinfo');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-filesize');
  

  //== TASK ALIASES

  // default – builds the core assets, compiles documentation
  grunt.registerTask('default', ['build','docs']);
  
  // build – builds the core assets from source
  grunt.registerTask('build', ['clean:core','compass','jshint','concat','uglify','gitinfo','assemble:core_meta','copy:core_images','copy:core_fonts','filesize:core_stats']);

  // docs – builds the documentation, makes use of build too.
  grunt.registerTask('docs', ['clean:docs','assemble:patterns','assemble:pattern_examples','assemble:examples','assemble:docs','copy:docs_assets']);


  // deploy-core – Deploy core assets via FTP to CDN
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

  // deploy-docs – Deploys documentation via FTP
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
