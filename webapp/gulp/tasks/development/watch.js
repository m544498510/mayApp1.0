'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('./../../config.js');

//watch
gulp.task('watch',function(){
  gulp.watch(config.paths.scriptSrc,['buildJs']);

  gulp.watch(config.paths.styleSrc,['buildStyle']);

  gulp.watch(config.paths.imageSrc,['moveImg']);

});
