var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    inject = require('gulp-inject'),
    concat = require('gulp-concat'),
    filter = require('gulp-filter'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    bower = require('main-bower-files'),
    wiredep = require('wiredep').stream,
    del = require('del');

// define the default task and add the watch task to it
gulp.task('default', ['connect', 'html', 'watch']);

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

gulp.task('js', function () {
    return gulp.src('source/Scripts/**/*.js')
        //.pipe(concat('main.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
});

gulp.task('libs', function () {
    return gulp.src(bower({
            includeDev: true
        }))
        .pipe(filter('**/*.js'))
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('styles', function () {
    var injectAppFiles = gulp.src(['source/**/libs/*scss', 'source/**/*.scss'], {
        read: false
    });

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
        .pipe(csso())
        .pipe(gulp.dest('dist'));
});

gulp.task('images', function () {
    return gulp.src('source/Content/images/**/*')
        .pipe(gulp.dest('dist/Content/images'));
});

gulp.task('fonts', function () {
    return gulp.src('source/Content/styles/fonts/**/*')
        .pipe(gulp.dest('dist/Content/fonts'));
});

gulp.task('templates', function () {
    return gulp.src('source/**/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('connect', function () {
    connect.server({
        root: 'dist/',
        port: 8888
    });
});

gulp.task('html', ['libs', 'styles', 'images', 'js', 'fonts', 'templates'], function () {
    var injectFiles = gulp.src(['dist/**/main.css', 'dist/js/libs.js', 'dist/js/**/*.js']);

    var injectOptions = {
        addRootSlash: false,
        ignorePath: ['source', 'dist']
    };

    return gulp.src('source/index.html')
        .pipe(inject(injectFiles, injectOptions))
        .pipe(gulp.dest('dist'))
        .pipe(open({ uri: 'http://localhost:8888' }));
});