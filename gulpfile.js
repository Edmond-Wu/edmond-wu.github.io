var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

gulp.task('pack-js', function() {
  return gulp.src(['bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js', 'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js', 'bower_components/angular-animate/angular-animate.min.js',
    'js/vendor/jquery.min.js', 'bower_components/materialize/dist/js/materialize.min.js'])
    .pipe(concat('bundle.js'))
    .pipe(minify())
    .pipe(gulp.dest('js'));
});

gulp.task('pack-css', function() {
  return gulp.src(['bower_components/html5-boilerplate/dist/css/normalize.min.css', 'bower_components/html5-boilerplate/dist/css/main.min.css',
    'bower_components/materialize/dist/css/materialize.min.css', 'css/app.css'])
    .pipe(concat('bundle.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['pack-js', 'pack-css']);
