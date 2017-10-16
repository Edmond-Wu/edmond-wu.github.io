var gulp = require('gulp');
var sync = require('gulp-concat');

gulp.task('pack-js', function() {
  return gulp.src(['js/vendor/*.js', 'js/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('pack-css', function() {
  return gulp.src(['bower_components/html5-boilerplate/dist/css/*.min.css',
  'bower_components/materialize/dist/css/materialize.min.css', 'bower_components/mdi/css/materialdesignicons.min.css','css/app.css'])
    .pipe(concat('stylesheet.css'))
    .pipe(gulp.dest('build/css'));
});

gulp.task('default', ['pack-js', 'pack-css']);

/*
<link rel="stylesheet" href="bower_components/html5-boilerplate/dist/css/normalize.min.css">
<link rel="stylesheet" href="bower_components/html5-boilerplate/dist/css/main.min.css">
<link rel="stylesheet" href="bower_components/materialize/dist/css/materialize.min.css">
<link rel="stylesheet" href="bower_components/mdi/css/materialdesignicons.min.css">
<link rel="stylesheet" href="css/app.min.css" />
 */
