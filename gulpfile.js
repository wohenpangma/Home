/**
 * Created by ff on 2016/10/9.
 */
'use strict'

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');
/*
gulp.task('default',function(){
    console.log("11111111111111111");
    //��ȡ�ļ�src    ִ�в���pipe
    gulp.src('src/jj.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('timer',function(){
    //���ļ��䶯ִ��copy����
    gulp.watch('src/jj.html',['default']);
    gulp.watch('src/styles/*.less',['style']);
});

gulp.task('style',function(){
    gulp.src('src/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css/'));
});
gulp.task('browser-sync',function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});*/
// 1. less���� ѹ��  --�ϲ���Ԥ������
// 2. js�ϲ� ѹ�� ����
// 3. img����
// 4. htmlѹ��
var cssnano = require("gulp-cssnano");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");

gulp.task('style',function(){
    gulp.src('src/styles/*.less')
        .pipe(less())       //����
        .pipe(cssnano())    //ѹ��
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('script',function(){
    gulp.src('src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('image', function () {
    gulp.src('src/img/*.*')
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(htmlmin({
            collapseWhitespace:true,
            removeComments:true
        }))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function () {
    browserSync({
        notify: false,
        port:2016,
        server:{
            baseDir:['dist']
        }
    });
    gulp.watch('src/img/*.*',['image']);
    gulp.watch('src/styles/*.less',['style']);
    gulp.watch('src/js/*.js',['script']);
    gulp.watch('src/*.html',['html']);
});