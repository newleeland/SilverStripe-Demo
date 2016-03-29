var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass');

// Uglifies JS
gulp.task('scripts', function(){
  gulp.src('JS/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('JS'));
});

// Compile SASS Task
gulp.task('styles', function(){
  gulp.src('SCSS/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('CSS/'));
});

// Watches JS and SASS
gulp.task('watch', function(){
    gulp.watch('JS/*.js', ['scripts']);
    gulp.watch('SCSS/*.scss', ['styles']);
});

// Default Gulp action
gulp.task('default', ['scripts', 'styles', 'watch']);
