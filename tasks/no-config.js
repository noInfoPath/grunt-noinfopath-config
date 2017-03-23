/*
 * grunt-noinfopath-config @version 1.0.3
 *
 *	noConfig Task
 *
 * Copyright (c) 2017 NoInfoPath Group, LLC.
 * Licensed under the MIT license. (MIT)
 */

'use strict';

module.exports = function (grunt) {
	var pkg = grunt.file.readJSON('package.json'),
		merge = require('merge');

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks
	grunt.file.defaultEncoding = 'utf8';

	grunt.registerMultiTask('noConfig', 'Adds noDbSchema, and excel import nodes in the config.json configuration file from schema.json files.', function () {
		var config = grunt.file.readJSON(this.options().temp);

		grunt.log.writeln("Generating config.json.tmpl file...");

		for (var i = 0; i < this.files.length; i++) {
			var src = this.files[i].src;


			for (var j = 0; j < src.length; j++) {
				var path = src[j],
					json = grunt.file.readJSON(path);

				grunt.log.write("Processing " + path + "... ");

				if (path.indexOf("excel") > -1) {
					config = merge.recursive(config, json);
				}
				if (path.indexOf("dbschema") > -1) {
					config.noDbSchema.push(json);

				}

				grunt.log.ok();

			}

		}

		grunt.file.write(this.options().dest, JSON.stringify(config));

		grunt.log.ok("file written to " + this.options().dest);
	});

};
