/*
 * grunt-noinfopath-config
 *
 *
 * Copyright (c) 2017 Jeffrey A. Gochin
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		noinfopath_config: {
			dev1: {
				src: ["test/fixtures/test-schema.json.tmpl"],
				options: {
					values: {
						"NIP_MONGO_HOST": "mongodb://localhost:27017",
						"NIP_AUTH_HOST": "auth.noinfopath.net",
						"NIP_AUTH_PORT": 80,
						"NIP_RESTAPI_HOST": "localhost",
						"NIP_RESTAPI_PORT": 4000,
						"NIP_MS_WEBAPI_HOST": "auth.noinfopath.net",
						"NIP_MS_WEBAPI_PORT": 80,
						"NIP_DTC_COLLECTION": "efr2_dtc",
						"NIP_DTCS_HOST": "localhost",
						"NIP_DTCS_PORT": 3100,
						"NIP_BEDS_PORT": 3200,
						"NIP_LOG_ROOT": "./logs/",
						"JWT_SECRET": "NTE1Njg2NDFGQTg5MzY1RDhDMjQ5REREQjU1RTE3QUE",
						"JWT_AUDIENCE": "vO6mYRIAldyw7GP6FUW0WgvU32pFYD6x",
						"CORS_WHITELIST": "[\"http://macbook:3000\", \"http://macbook:3001\", \"http://macbook:8080\"]"
					}
				}
			},
			dev2: {
				files: {
					"test/build/": ["test/fixtures/*.json.tmpl", "!test/fixtures/test-schema.json.tmpl"]
				},
				options: {
					values: {
						"NIP_MONGO_HOST": "mongodb://localhost:27017",
						"NIP_AUTH_HOST": "auth.noinfopath.net",
						"NIP_AUTH_PORT": 80,
						"NIP_RESTAPI_HOST": "localhost",
						"NIP_RESTAPI_PORT": 4000,
						"NIP_MS_WEBAPI_HOST": "auth.noinfopath.net",
						"NIP_MS_WEBAPI_PORT": 80,
						"NIP_DTC_COLLECTION": "efr2_dtc",
						"NIP_DTCS_HOST": "localhost",
						"NIP_DTCS_PORT": 3100,
						"NIP_BEDS_PORT": 3200,
						"NIP_LOG_ROOT": "./logs/",
						"JWT_SECRET": "NTE1Njg2NDFGQTg5MzY1RDhDMjQ5REREQjU1RTE3QUE",
						"JWT_AUDIENCE": "vO6mYRIAldyw7GP6FUW0WgvU32pFYD6x",
						"CORS_WHITELIST": "[\"http://macbook:3000\", \"http://macbook:3001\", \"http://macbook:8080\"]"
					}
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		},

		watch: {
			document: {
				files: ["Gruntfile.js", "tasks/*.js", "test/**/*.*"],
				tasks: ['test'],
				options: {
					spawn: false
						// livereload: true
				}
			}
		},

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'noinfopath_config', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
