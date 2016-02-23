'use strict'

var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var runSequence = require('run-sequence');
var del = require('del');

var config = {
    staticTargets : ["src/*.*"],
    tsSrc: 'src/ts/**/*.ts',
    buildDest: 'build/',
    ts: {
        noImplicitAny: true,
        out: 'js/main.js'
    }
};

gulp.task('clean', function(cb) {
    return del([config.buildDest + "*"]);
})

gulp.task('build:static', function() {
    return gulp.src(config.staticTargets, {base: 'src'})
        .pipe(gulp.dest(config.buildDest));
});
gulp.task('build:ts', function() {
    return gulp.src('src/**/*.ts')
        .pipe(ts(config.ts))
        .pipe(gulp.dest(config.buildDest));
});
gulp.task('build', function(cb) {
    runSequence('clean', ['build:static', 'build:ts'], cb);
});

gulp.task('default', ['build']);