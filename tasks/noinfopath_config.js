/*
 * grunt-noinfopath-config
 *
 *
 * Copyright (c) 2017 NoInfoPath Group, LLC.
 * Licensed under the MIT license. (MIT)
 */

'use strict';

function _environment() {
	var argNo = process.platform.indexOf("darwin") > -1 ? 2 : 0,
		envi = process.argv[2] || "dev";

	return envi;
}

function configure_v1(grunt, task, file) {


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

function configure_v2(grunt, task, file) {

	file.src.forEach(function(srcFile){

		var win32 = process.platform.indexOf("win32") > -1,
			srcFile2 = win32 ? srcFile.replace("/", "\\") : srcFile,
			slash  =  srcFile2.lastIndexOf(win32 ? "\\" : "/") + 1,
			destFile = (win32 ? file.dest.replace("/", "\\") : file.dest) + srcFile2.substring(0, srcFile2.lastIndexOf(".tmpl")).substr(slash),
			configTmpl,
			values = task.options().values;

		grunt.log.write("Processing template:", srcFile2, "Output:", destFile, "... ");

		try {

			configTmpl = grunt.file.read(srcFile);

			for (var k in values) {
				var key = new RegExp("~" + k + "~", "g"),
				value = values[k];

				configTmpl = configTmpl.replace(key, value);
			}

			grunt.file.write(destFile, configTmpl);

			grunt.log.ok();

		} catch(err) {
			grunt.log.error(err);
		}

	});

}



module.exports = function (grunt) {
	var pkg = grunt.file.readJSON('package.json');

	grunt.log.writeln("Configuring " + pkg.name);
	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks
	grunt.file.defaultEncoding = 'utf8';

	grunt.registerMultiTask('noinfopath_config', 'Used for multi-target noinfopath deployments.', function () {
		if(this.data.src) {
			grunt.log.writeln("Using Version 1");
			this.filesSrc.forEach(function (f) {
				configure_v1(grunt, this, f);
			}.bind(this));
		} else {
			grunt.log.writeln("Using Version 2");
			this.files.forEach(function (file) {
				configure_v2(grunt, this, file);
			}.bind(this));
		}

	});

};
