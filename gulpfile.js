'use strict';

let browserify = require('browserify'),
  stringify = require('stringify'),
  gulp = require('gulp'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify');

gulp.task('js', () => {
  return browserify({
    entries: ['./scripts.js'],
    debug: true
  })
    .transform(stringify, {
      appliesTo: { includeExtensions: ['.html'] }
    })
    .bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error', gutil.log.bind(gutil, 'Transformation Error'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public'));
});
