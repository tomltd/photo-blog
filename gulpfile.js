var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');
var sass = require('gulp-sass');

gulp.task('default', function() {
	return gulp.src('css/*.css')
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest('dist'));
});

gulp.task('sass', function() {
	gulp.src('./sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
	gulp.watch('./sass/*.scss', ['sass']);
});
