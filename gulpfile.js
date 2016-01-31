var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');


gulp.task('styles', function() {
  var processors = [
      precss({}),
      autoprefixer

  ];

  return gulp.src('css/*.css')
      .pipe(postcss(processors))
      .pipe(cssnano())
      .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('css/*.css', ['styles']);
});
