/*
 * grunt-blueprints
 * https://github.com/tombooth/grunt-blueprints
 *
 * Copyright (c) 2013 Tom Booth
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

   grunt.registerMultiTask('blueprints', 'Your task description goes here.', function() {

      var fs = require('fs'),
          blueprints = require('blueprints'),
          path = require('path'),
          options = this.options({ minify: true }), 
          done = this.async(),
          src = path.join(process.cwd(), this.data.src),
          dest = path.join(process.cwd(), this.data.dest),
          outStream;

      grunt.file.mkdir(path.dirname(dest));

      outStream = fs.createWriteStream(dest);

      new blueprints(src, options).out(outStream, function() {
         grunt.log.writeln('File "' + dest + '" created.');
         outStream.end();
         done();
      });

   });

};
