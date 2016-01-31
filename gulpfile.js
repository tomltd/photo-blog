var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
  var processors = [
      precss({}),
      autoprefixer

  ];

  return gulp.src('styles.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('./dest'));
});

gulp.task('watch:styles', function(){
  gulp.watch('**/*.css', ['styles']);
});
