var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

//Minify Css
gulp.task('minify-css', function() {

  gulp.src('./assets/css/main.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./assets/css/main.min.css'))
});

//Uglify Js
gulp.task('compress-js', function() {
  gulp.src('./assets/js/main.js')
    .pipe(uglify({outSourceMap: true}))
    .pipe(gulp.dest('./assets/js/main.min.js'))
});

//JS Hint
gulp.task('lint', function() {
  gulp.src('./assets/js/script.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


//Default Gulp Task
gulp.task('default', ['minify-css', 'compress-js']);