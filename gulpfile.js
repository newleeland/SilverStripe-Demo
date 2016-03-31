    var gulp = require('gulp'),
        sass = require('gulp-sass'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer');

// Uglifies JS
gulp.task('scripts', function(){
  gulp.src('JS/*.js')
  .pipe(concat('build.js'))
  .pipe(gulp.dest('JS'))
  .pipe(rename('build.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('JS/'));
});

// Compile SASS Task
gulp.task('sass', function(){
  gulp.src('SCSS/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass().on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(autoprefixer({browsers: ['last 2 versions', '> 5%', 'Firefox ESR']}))
  .pipe(gulp.dest('CSS/'));
});

// Watches JS and SASS
gulp.task('watch', function(){
    gulp.watch('JS/*.js', ['scripts']);
    gulp.watch('SCSS/*.scss', ['sass']);
});

// Default Gulp action
gulp.task('default', ['scripts', 'sass', 'watch']);
