var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var minify = require('gulp-minify');
var rename = require('gulp-rename');

gulp.task('clean-css', function() {
  return gulp.src(['css/app.css'])
    .pipe(cleanCss())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('minify-js', function() {
  return gulp.src(['js/app.js'])
    .pipe(minify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('js'));
});

gulp.task('default', ['clean-css', 'minify-js']);
