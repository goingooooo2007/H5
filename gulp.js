var gulp = require('gulp'),
minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');


//压缩css
gulp.task('minify_css',["clean"], function () {
    var cssSrc = ['./css/*.css'];

    return gulp.src(cssSrc)      //压缩的文件
        .pipe(concat('index.css'))    //合并所有css到all.css
        .pipe(gulp.dest('./css'))   //输出文件夹
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('./css')); //执行压缩
});

//压缩js
gulp.task('minify_js',["clean"], function() {
    var jsSrc = ['./src/*.js','!./lib/*.src.js'];

    return gulp.src(jsSrc)
        .pipe(concat('xx1.js'))    //合并所有js到all.js
        .pipe(gulp.dest('./src'))    //输出all.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./src'));  //输出
});


//执行压缩前，先删除以前压缩的文件
gulp.task('clean', function() {
    return del(['./css/index.css', './css/all.min.css', './src/xx1.js', './src/all.xx2.js'])
});

// 默认任务
gulp.task('default', function(){
    gulp.run('minify_css', 'minify_js');
});
