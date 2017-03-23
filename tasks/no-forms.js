/*
 * grunt-noinfopath-config @version 1.0.3
 *
 *	noForms Task
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

	grunt.registerMultiTask('noForms', 'Creates no-forms.json and routes.json configuration files from area.json files.', function () {
		var noForms = {},
			routes = {},
			dest = this.options().dest;

		grunt.log.writeln("Merging `area.json` files ...");

		for (var i = 0; i < this.files.length; i++) {
			var src = this.files[i].src;

			for (var j = 0; j < src.length; j++) {
				var path = src[j],
					json = grunt.file.readJSON(path);

				grunt.log.write("Processing " + path + "... ");

				noForms = merge.recursive(noForms, json);


				grunt.log.ok();


			}

			grunt.file.write(dest.forms, JSON.stringify(noForms));
		}

		grunt.log.ok("file written to " + dest.forms);

		grunt.log.write("Generating `routes.json` file... ");
		for (var f in noForms) {
			var form = noForms[f];
			if (form.route) {
				routes[f] = form.route;
			}

			if (form.areas) {
				for (var a in form.areas) {
					var rk = f + "." + a,
						area = form.areas[a];

					routes[rk] = area.route;
				}
			}

		}

		grunt.file.write(dest.routes, JSON.stringify(routes));
		grunt.log.ok("routes.json written to " + dest.routes);
	});

};
