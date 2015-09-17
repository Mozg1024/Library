var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter'),
    bower = require('main-bower-files'),
    wiredep = require('wiredep').stream;

// define the default task and add the watch task to it
gulp.task('default', ['watch', 'html']);

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

gulp.task('styles', function(){
    var injectAppFiles = gulp.src('source/**/*.scss', {read: false});

    function transformFilepath(filepath) {
        return '@import "' + filepath + '";';
    }

    var injectAppOptions = {
        transform: transformFilepath,
        starttag: '// inject:app',
        endtag: '// endinject',
        addRootSlash: false
    };

    return gulp.src('source/**/main.scss')
        .pipe(wiredep())
        .pipe(inject(injectAppFiles, injectAppOptions))
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

gulp.task('html', ['styles'], function(){
    var injectFiles = gulp.src(['dist/**/main.css']);

    var injectOptions = {
        addRootSlash: false,
        ignorePath: ['source', 'dist']
    };

    return gulp.src('source/index.html')
        .pipe(inject(injectFiles, injectOptions))
        .pipe(gulp.dest('dist'));
});
