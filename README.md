# grunt-blueprints

> Grunt plugin for the blueprints templating library

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-blueprints --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-blueprints');
```

## The "blueprints" task

### Options

#### options.minify
Type: `Boolean`
Default value: `true`

Whether the outputted file will be minified

### Usage Examples

Pass the template directory or file in as the src param and the location to output the js to as the dest param.

```js
grunt.initConfig({
  blueprints: {
    options: {},
    src: 'test/templates',
    dest: 'tmp/template.min.js'
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
