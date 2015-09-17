var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

// define the default task and add the watch task to it
gulp.task('default', ['watch', 'build-css']);

// configure the jshint task
gulp.task('jshint', function () {
    return gulp.src('source/Scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    gulp.watch('source/Scripts/**/*.js', ['jshint']);
});

//build scss
gulp.task('build-css', function () {
    return gulp.src('source/Content/styles/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('public/'));
});
