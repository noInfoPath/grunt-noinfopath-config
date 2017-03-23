'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.noinfopath_config = {
	setUp: function (done) {
		// setup here if necessary
		done();
	},
	custom_options: function (test) {
		test.expect(4);

		var expected1 = grunt.file.readJSON('test/expected/test-schema.json');
		var expected2 = grunt.file.readJSON('test/expected/no-forms.json');
		var expected3 = grunt.file.readJSON('test/expected/routes.json');
		var expected4 = grunt.file.readJSON('test/expected/config.json.tmpl');
		var actual1 = grunt.file.readJSON('test/build/test1-schema.json');
		var actual2 = grunt.file.readJSON('test/build/test2-schema.json');
		var actual3 = grunt.file.readJSON('test/build/routes.json');
		var actual4 = grunt.file.readJSON('test/build/config.json.tmpl');


		test.deepEqual(actual1, expected1, 'Configuration test1 successful');
		test.deepEqual(actual2, expected1, 'Configuration test2 successful');
		test.deepEqual(actual3, expected3, 'Configuration test3 successful');
		test.deepEqual(actual4, expected4, 'Configuration test4 successful');



		test.done();
	}
};
