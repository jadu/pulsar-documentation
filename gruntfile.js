module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({

        pkg:     grunt.file.readJSON('package.json'),

        sass: {
            dev: {
                options: {
                    implementation: 'sass',
                    outputStyle: 'nested',
                    sourceMap: true,
                    includePaths: [
                        'scss',
                        'vendor/jadu/pulsar/stylesheets'
                    ]
                },
                files: [{
                    cwd:    'scss/',
                    dest:   'dist/css/',
                    expand: true,
                    ext:    '.css',
                    extDot: 'first',
                    src:    '*.scss'
                }]
            }
        },

        browserify: {
            dev: {
                files: {
                    'dist/js/bundle.js': ['js/index.js']
                },
                options: {
                    browserifyOptions: {
                        standalone: 'pulsar',
                        debug: true
                    },
                    transform: [
                        ['babelify', { presets: ['es2015'] } ],
                        ['aliasify', { global: true }]
                    ]
                }
            }
        },

        autoprefixer: {
            dev: {
                options: {
                    browsers: ['last 2 version', 'ie 7', 'ie 8', 'ie 9']
                },
                expand: true,
                src:    'dist/css/*.css'
            }
        },

        watch: {
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass:dev']
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['browserify:dev']
            }
        },

        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/font-awesome/fonts/',
                        src: ['**'],
                        dest: 'dist/fonts/font-awesome/'
                    },
                ]
            }

        }

    });

    grunt.registerTask('build', [
        'sass',
        'autoprefixer',
        'browserify',
        'copy',
    ])

    grunt.registerTask('default', [
        'build',
        'watch',
    ]);

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};
