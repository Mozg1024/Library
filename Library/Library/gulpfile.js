var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
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
gulp.task('default', ['html', 'watch']); //'connect', 

// configure the jshint task
gulp.task('jshint', function () {
    return gulp.src('source/Scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    //gulp.watch('source/Scripts/**/*.js', ['jshint']);

    gulp.watch('source/**/*.scss', ['styles']);
    gulp.watch('source/Content/images/**/*', ['images']);
    gulp.watch('source/Content/styles/fonts/**/*', ['fonts']);
    gulp.watch('source/**/*.html', ['templates']);
    gulp.watch('source/Scripts/**/*.js', ['js']);

});

gulp.task('js', function () {
    return gulp.src('source/Scripts/**/*.js')
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
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
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('styles', function () {
    var injectAppFiles = gulp.src(['source/**/*.scss', 'source/**/*.css']); //, { //'source/**/libs/*.scss',
    //    read: false
    //});

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
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());;
});

gulp.task('images', function () {
    return gulp.src('source/Content/images/**/*')
        .pipe(gulp.dest('dist/Content/images'))
        .pipe(browserSync.stream());
});

gulp.task('fonts', function () {
    return gulp.src('source/Content/styles/fonts/**/*')
        .pipe(gulp.dest('dist/Content/fonts'))
        .pipe(browserSync.stream());
});

gulp.task('templates', function () {
    return gulp.src('source/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});

//gulp.task('connect', function () {
//    connect.server({
//        root: 'dist/',
//        port: 8888
//    });
//});

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    //browserSync.reload("*.html");
});

gulp.task('html', ['libs', 'styles', 'images', 'js', 'fonts', 'templates', 'browser-sync'], function () {
    var injectFiles = gulp.src(['dist/Content/styles/main.css', 'dist/js/libs.js', 'dist/js/**/*.js']);

    var injectOptions = {
        addRootSlash: false,
        ignorePath: ['source', 'dist']
    };

    return gulp.src('source/index.html')
        .pipe(inject(injectFiles, injectOptions))
        .pipe(gulp.dest('dist'));
        //.pipe(open({ uri: 'http://localhost:8888' }));
});