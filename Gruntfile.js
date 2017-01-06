// Gruntfile.js
//
// This file configures all of the Grunt tasks used. It contains the following
// sections:
//
// 1. Load task libraries
// 2. Config
//    * Assemble
//    * Clean
//    * Compass
//    * Concat
//    * Copy
//    * Git info
//    * JSHint
//    * Uglify
//    * Watch
// 3. Task aliases - the tasks section combines the tasks defined in config into
//    commands that are documented (see README.md)

'use strict';

module.exports = function(grunt) {

    // == 1. Load task libraries

    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-gitinfo');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // == 2. Config
    //    * Assemble
    //    * Clean
    //    * Compass
    //    * Concat
    //    * Copy
    //    * Git info
    //    * JSHint
    //    * Uglify
    //    * Watch

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        // Assemble - Generate documentation about DPL
        // See http://assemble.io/docs/ for more details
        assemble: {

            // General options
            options: {
                pkg:        '<%= pkg %>',
                now:        '<%= grunt.template.today("isoDateTime") %>',
                assets:     'docs/assets',
                layoutdir:  'src/_layouts',
                partials:   ['src/patterns/*/*.hbs', 'src/_partials/*.hbs'],
                ext:        '.html',
                data:       [
                                'src/_meta/*.json',
                                'src/patterns/*/*.json',
                                'src/examples/_data/*.json'
                            ],
                helpers:    [
                                'handlebars-helper-asset',
                                'handlebars-helper-rel'
                            ],
                site:       {
                                root: "docs",
                            },
            },

            // ASSEMBLE SECTIONS

            // Patterns - uses /src/_layouts/pattern.hbs
            patterns: {
                options: {
                    layout: 'pattern.hbs'
                },
                files: [{
                    expand: true,
                    cwd:    'src/patterns/',
                    src:    [
                                'index.hbs',
                                '*/*.doc.hbs'
                            ],
                    dest:   'docs/patterns',
                    ext:    '.html',
                    rename: function(src,dest){
                                var prefix = 'docs/patterns/',
                                    pattern = /\/[a-zA-Z0-9_-]+.html$/,
                                    suffix = '/index.html';
                                return prefix + dest.replace(pattern, suffix);
                    }
                }]
            },

            // Example pages - uses /src/_layouts/example.hbs
            examples: {
                options: {
                    layout: 'example.hbs'
                },
                files: [{
                    expand: true,
                    cwd:    'src/examples/',
                    src:    ['**/*.hbs'],
                    dest:   'docs/examples',
                    ext:    '.html'
                }]
            },

            // General guidance pages - uses /src/_layouts/doc.hbs
            docs: {
                options: {
                    layout: 'doc.hbs'
                },
                files: [{
                    expand: true,
                    cwd:    'src/docs',
                    src:    ['*.md','*.html','**/*.hbs'],
                    ext:    '.html',
                    dest:   'docs'
                }]
            },

            // Meta doc(s)
            core_meta: {
                options: {
                    git: {
                        branch: '<%= gitinfo.local.branch.current.name %>',
                        commit: '<%= gitinfo.local.branch.current.SHA %>'
                    },
                    ext: '.json',
                },
                files: [{
                    expand: true,
                    cwd: 'src/_meta',
                    src: ['build.tmpl'],
                    dest: 'core'
                }]
            }

        }, // END of assemble


        // clean - remove generated folders
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
            },
            docs_core: {
                src: ["docs/assets/core"]
            }
        }, // END of clean


        // compass - compile compass/sass code to CSS
        compass: {
            dist: {
                options: {
                    banner: '/*! <%= pkg.name %> v<%= pkg.version %> ' +
                        '- <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    specify: [
                        'src/styles/datatables.scss',
                        'src/styles/doc.scss',
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
        }, // END of compass


        // concat - combine JavaScript files scripts into single file.
        concat: {
            core: {
                src: [
                    // Update src/docs/using.md if any of these change
                    'src/scripts/vendor/hammer.js',
                    'src/scripts/vendor/jquery.min.js',
                    'src/scripts/vendor/jquery.bigtarget.js',
                    'src/scripts/vendor/jquery.fitvids.js',
                    'src/scripts/vendor/jquery.fittext.js',
                    'src/scripts/vendor/jquery.replacetext.js',
                    'src/scripts/vendor/jquery.theatre.min.js',
                    'src/scripts/vendor/respond.js',

                    // Bootstrap JavaScript
                    // Note these scripts should align with the CSS
                    'src/scripts/vendor/bootstrap/affix.js',
                    'src/scripts/vendor/bootstrap/alert.js',
                    'src/scripts/vendor/bootstrap/button.js',
                    'src/scripts/vendor/bootstrap/collapse.js',
                    'src/scripts/vendor/bootstrap/dropdown.js',
                    'src/scripts/vendor/bootstrap/tab.js',
                    'src/scripts/vendor/bootstrap/transition.js',
                    'src/scripts/vendor/bootstrap/scrollspy.js',
                    'src/scripts/vendor/bootstrap/modal.js',
                    'src/scripts/vendor/bootstrap/tooltip.js',
                    'src/scripts/vendor/bootstrap/popover.js',
                    'src/scripts/vendor/enquire.js',

                    // DPL-specific scripts
                    'src/scripts/base.js',
                    'src/scripts/unbreakableSpaces.js',
                    'src/patterns/*/*.js' // This includes all JS in patterns.
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
            nojquery: {
                src: [
                    // Update src/docs/using.md if any of these change
                    'src/scripts/vendor/hammer.js',
                    'src/scripts/vendor/jquery.bigtarget.js',
                    'src/scripts/vendor/jquery.fitvids.js',
                    'src/scripts/vendor/jquery.fittext.js',
                    'src/scripts/vendor/jquery.replacetext.js',
                    'src/scripts/vendor/jquery.theatre.min.js',
                    'src/scripts/vendor/respond.js',

                    // Bootstrap JavaScript
                    // Note these scripts should align with the CSS
                    'src/scripts/vendor/bootstrap/affix.js',
                    'src/scripts/vendor/bootstrap/alert.js',
                    'src/scripts/vendor/bootstrap/button.js',
                    'src/scripts/vendor/bootstrap/collapse.js',
                    'src/scripts/vendor/bootstrap/dropdown.js',
                    'src/scripts/vendor/bootstrap/tab.js',
                    'src/scripts/vendor/bootstrap/transition.js',
                    'src/scripts/vendor/bootstrap/scrollspy.js',
                    'src/scripts/vendor/bootstrap/modal.js',
                    'src/scripts/vendor/bootstrap/tooltip.js',
                    'src/scripts/vendor/bootstrap/popover.js',

                    'src/scripts/vendor/matchmedia.polyfill.js',
                    'src/scripts/vendor/matchMedia.addListener.js',
                    'src/scripts/vendor/enquire.js',

                    // DPL-specific scripts
                    'src/scripts/base.js',
                    'src/scripts/unbreakableSpaces.js',
                    'src/patterns/*/*.js' // This includes all JS in patterns.
                ],
                dest: 'core/scripts/core-nojquery.js'
            },
            doc: {
                src: [
                    /*
                    'src/scripts/vendor/jquery.min.js',
                    'src/scripts/vendor/jquery.bigtarget.js',
                    'src/scripts/vendor/respond.js',
                    */

                    // Bootstrap JavaScript
                    // Note these scripts should align with the CSS
                    /*
                    'src/scripts/vendor/bootstrap/affix.js',
                    'src/scripts/vendor/bootstrap/alert.js',
                    'src/scripts/vendor/bootstrap/button.js',
                    'src/scripts/vendor/bootstrap/collapse.js',
                    'src/scripts/vendor/bootstrap/dropdown.js',
                    'src/scripts/vendor/bootstrap/tab.js',
                    'src/scripts/vendor/bootstrap/transition.js',
                    'src/scripts/vendor/bootstrap/scrollspy.js',
                    'src/scripts/vendor/bootstrap/modal.js',
                    'src/scripts/vendor/bootstrap/tooltip.js',
                    'src/scripts/vendor/bootstrap/popover.js',
                    */
                    'src/scripts/doc.js',

                    // DPL-specific scripts
                    /*
                    'src/patterns/accordion/accordion.js',
                    'src/patterns/navbox/navbox.js'
                    */
                ],
                dest: 'core/scripts/doc.js'
            },
            datatables: {
                src: [
                    'src/scripts/datatables.js'
                ],
                dest: 'core/scripts/datatables.js'
            }
        }, // END of concat


        // copy - copy core assets
        copy: {
            core_images: {
                files: [{
                    expand: true,
                    cwd: 'src/images-core/',
                    src: ['**/*'],
                    dest: 'core/images'
                }]
            },
            core_fonts: {
                files: [{
                    expand: true,
                    cwd: 'src/fonts/',
                    src: ['**/*'],
                    dest: 'core/fonts'
                }]
            },
            docs_core: {
                files: [{
                    expand: true,
                    cwd: 'core',
                    src: ['**/*'],
                    dest: 'docs/assets/core'
                }]
            },
            docs_images: {
                files: [{
                    expand: true,
                    cwd: 'src/images-docs',
                    src: ['**/*'],
                    dest: 'docs/assets/docs/images'
                }]
            },
            docs_googlemaps: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts/',
                    src: ['location-data.js'],
                    dest: 'docs/patterns/google-maps/examples/'
                }]
            },
            docs_datatables: {
                files: [{
                    expand: true,
                    cwd: 'src/scripts/vendor/',
                    src: ['jquery.dataTables.min.js'],
                    dest: 'core/scripts/'
                }]
            }

        }, // END of copy


        // gitinfo – loads info from git into object for grunt to access.
        gitinfo: {},


        // jshint - check JS files for good style
        jshint: {
            defaults: ['src/scripts/base.js','src/patterns/*/*.js']
        }, // END of jshint


        // uglify - create compressed versions of JS files
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            core: {
                files: {
                    'core/scripts/core-base.min.js':
                        ['core/scripts/core-base.js'],
                    'core/scripts/core-nojquery.min.js':
                        ['core/scripts/core-nojquery.js'],
                    'core/scripts/core.min.js':
                        ['core/scripts/core.js'],
                    'core/scripts/datatables.min.js':
                        ['core/scripts/datatables.js'],
                    'core/scripts/doc.min.js':
                        ['core/scripts/doc.js'],
                    'core/scripts/header-only.min.js':
                        ['core/scripts/header-only.js']
                }
            }
        }, // END of uglify


        // watch - monitor files for changes and then run the approp task.
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
                tasks: ['clean:js','jshint','concat','uglify',
                    'clean:docs_assets','copy:docs_core','copy:docs_images'],
            },
            images: {
                files: ['src/images/**/*'],
                tasks: ['clean:images','copy:images','clean:docs_assets','copy:docs_core','copy:docs_images']
            },
            fonts: {
                files: ['src/fonts/**/*'],
                tasks: ['clean:fonts','copy:fonts','clean:docs_assets','copy:docs_core','copy:docs_images']
            },
            styles: {
                files: ['src/**/*.scss'],
                tasks: ['clean:styles','compass','clean:docs_core',
                    'copy:docs_core']
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
        }, // END of watch
    });


    // == 3. Task aliases

    // default – builds the core assets, compiles documentation
    grunt.registerTask('default', [
        'core',
        'docs'
    ]);

    // core – builds the core assets from source
    grunt.registerTask('core', [
        'clean:core',
        'compass',
        'jshint',
        'concat',
        'uglify',
        'gitinfo',
        'assemble:core_meta',
        'copy:core_images',
        'copy:core_fonts',
        'copy:docs_datatables'
    ]);

    // docs – builds the documentation, makes use of build too.
    grunt.registerTask('docs', [
        'clean:docs',
        'assemble:patterns',
        // 'assemble:pattern_examples',
        'assemble:examples',
        'assemble:docs',
        'copy:docs_core',
        'copy:docs_images',
        'copy:docs_googlemaps'
    ]);
};