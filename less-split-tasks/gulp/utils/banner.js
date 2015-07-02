"use strict";

var pkg = require('../../package.json'),
    header  = require('gulp-header');

module.exports = {
  header: function(){
    var banner = ['/**',
      ' * <%= pkg.name %> v<%= pkg.version %>',
      ' * <%= pkg.description %>',
      ' * <%= pkg.author.name %> <<%= pkg.author.email %>>',
      ' */',
      ''].join('\n');

    return header(banner, {pkg: pkg})
  }
}