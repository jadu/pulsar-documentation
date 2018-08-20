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
                    dest:   'css/',
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
                    'js/bundle.js': ['js/index.js']
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
                src:    'css/*.css'
            }
        },

    });

    grunt.registerTask('default', [
        'sass',
        'autoprefixer',
        'browserify',
    ]);

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

};
