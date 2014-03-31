var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var rename = require("gulp-rename");

//Minify Css
gulp.task('minify-css', function() {

  gulp.src('./assets/css/main.css')
    .pipe(minifyCSS())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./assets/css/'))
});

//Uglify Js
gulp.task('compress-js', function() {
  gulp.src('./assets/js/main.js')
     .pipe(uglify({mangle: false}))
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./assets/js/'))
});

//JS Hint
gulp.task('lint', function() {
  gulp.src('./assets/js/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


//Default Gulp Task
gulp.task('default', ['minify-css', 'compress-js']);