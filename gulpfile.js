var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var minify = require('gulp-minify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var series = require('gulp-series');

/* packs vendor js files into a single file and minifies it */
gulp.task('pack-js', function() {
  return gulp.src(['node_modules/html5-boilerplate/dist/js/main.js', 'bower_components/angular/angular.min.js',
    'bower_components/angular-route/angular-route.min.js', 'bower_components/angular-animate/angular-animate.min.js', 'js/vendor/angular-sanitize-1.6.5.min.js',
    'bower_components/jquery/dist/jquery.min.js', 'bower_components/materialize/dist/js/materialize.min.js'])
    .pipe(concat('vendor.js'))
    .pipe(minify())
    .pipe(gulp.dest('js'));
});

/* adds on app.js separately */
gulp.task('add-app-js', function() {
  return gulp.src(['js/vendor-min.js', 'js/app.js'])
    .pipe(concat('build.js'))
    .pipe(gulp.dest('js'));
})

/* packs css files into a single file and then minifies it */
gulp.task('pack-css', function() {
  return gulp.src(['bower_components/html5-boilerplate/dist/css/normalize.min.css', 'bower_components/html5-boilerplate/dist/css/main.min.css',
    'bower_components/materialize/dist/css/materialize.min.css', 'bower_components/mdi/css/materialdesignicons.min.css', 'css/app.css'])
    .pipe(concat('build.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('css'));
});

/* js stuff needs to be done sequentially */
gulp.task(
  'default',
  gulp.parallel(
    gulp.series('pack-js', 'add-app-js'),
    'pack-css'
  )
);
