# grunt-noinfopath-config @version 1.0.4

> Used for multi-target noinfopath deployments.

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-noinfopath-config --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-noinfopath-config');
```

## The "noinfopath_config" task

### Overview

In your project's Gruntfile, add a section named `noinfopath_config` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
  noinfopath_config: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.values

|Key|Description|
|---|-----------|
|NIP_MONGO_HOST|"mongodb://localhost:27017"|
|NIP_AUTH_HOST|"auth.noinfopath.net"|
|NIP_AUTH_PORT|80|
|NIP_RESTAPI_HOST|"localhost"|
|NIP_RESTAPI_PORT|4000|
|NIP_MS_WEBAPI_HOST|"auth.noinfopath.net"|
|NIP_MS_WEBAPI_PORT|80|
|NIP_DTC_COLLECTION|"efr2_dtc"|
|NIP_DTCS_HOST|"localhost"|
|NIP_DTCS_PORT|3100|
|NIP_BEDS_PORT|3200|
|NIP_LOG_ROOT|"./logs/"|
|JWT_SECRET|"NTE1Njg2NDFGQTg5MzY1RDhDMjQ5REREQjU1RTE3QUE"|
|JWT_AUDIENCE|"vO6mYRIAldyw7GP6FUW0WgvU32pFYD6x"|
|CORS_WHITELIST|"[\"http://macbook:3000\", \"http://macbook:3001\", \"http://macbook:8080\"]"|


### Usage Examples


```javascript
grunt.initConfig({
	noinfopath_config: {
		dev: {
			src: ["no-schema/*.json.tmpl"],
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
});
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
