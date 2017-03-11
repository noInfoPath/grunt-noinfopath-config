/*
 * grunt-noinfopath-config
 *
 *
 * Copyright (c) 2017 Jeffrey A. Gochin
 * Licensed under the MIT license.
 */

'use strict';

function _environment() {
	var argNo = process.platform.indexOf("darwin") > -1 ? 2 : 0,
		envi = process.argv[2] || "dev";

	return envi;
}

function configure(grunt, task, file) {


	var configPath = file.substring(0, file.lastIndexOf(".tmpl")),
		configTmplPath = file,
		configTmpl,
		values = task.options().values;



	grunt.log.write("Processing template", configTmplPath, "... ");

	try {

		configTmpl = grunt.file.read(configTmplPath);

		for (var k in values) {
			var key = new RegExp("~" + k + "~", "g"),
				value = values[k];

			configTmpl = configTmpl.replace(key, value);
		}

		grunt.file.write(configPath, configTmpl);

		grunt.log.ok();

	} catch(err) {
		grunt.log.error(err);
	}
}


module.exports = function (grunt) {
	var pkg = grunt.file.readJSON('package.json');

	grunt.log.writeln("Configuring " + pkg.name);
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks
	grunt.file.defaultEncoding = 'utf8';

	grunt.registerMultiTask('noinfopath_config', 'Used for multi-target noinfopath deployments.', function () {

		var task = this;
		this.filesSrc.forEach(function (f) {
			configure(grunt, task, f);
		});
	});

};
