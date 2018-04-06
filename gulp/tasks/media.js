'use strict';

var config       = require('../config');
var gulp         = require('gulp');


gulp.task('media', function() {
  return gulp.src(config.media.src)
  .pipe(gulp.dest(config.media.dest))
})