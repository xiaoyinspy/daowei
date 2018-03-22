var gulp = require('gulp')

var connect = require('gulp-connect')
var open = require("open");
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var less = require('gulp-less')
var cleanCSS = require('gulp-clean-css')
var htmlmin = require('gulp-htmlmin')
var liverload = require('gulp-livereload')
var del = require('del')
var imagemin = require('gulp-imagemin')

var Proxy = require('gulp-connect-proxy');


//删除文件
gulp.task('clean',function () {
    return del(['public/css/*','public/js/*','public/*.html'])
})

// 压缩img
// gulp.task('img', function() {
//     return gulp.src('src/img1/**/*')        //引入所有需处理的Img
//         .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))      //压缩图片
//         .pipe(gulp.dest('public/img/'))
//         .pipe(connect.reload())
//     // .pipe(notify({ message: '图片处理完成' }));
// });

gulp.task('js',function () {
    return gulp.src('src/js/*.js') //操作的源文件
        // .pipe(concat('built.js')) //合并到临时文件
        .pipe(gulp.dest('public/js')) //生成目标文件夹
        // .pipe(uglify())  //压缩
        // .pipe(rename({suffix:'.min'}))   //重命名
        .pipe(gulp.dest('public/js')) //输出
        .pipe(connect.reload())
})

//less处理任务
gulp.task('less', function () {
    return gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(connect.reload())
})

//css处理任务，指定依赖的任务
gulp.task('css',['less'], function () {
    return gulp.src('src/css/*.css')
        // .pipe(concat('built.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('public/css'))
        .pipe(connect.reload())
})

gulp.task('html',function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'))
        .pipe(connect.reload())
})

//注册热加载
//1.配置加载选项
gulp.task('server',['default'],function () {
    //配置服务器选项
    connect.server({
        root:'public/',
        livereload:true,
        port:5000,
        middleware: function (connect, opt) {
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    });
    //自动开启端口
    open('http://localhost:5000/index.html')
    //监视目标文件
    gulp.watch('src/js/*.js',['js']);
    gulp.watch('src/*.html',['html']);
    gulp.watch(['src/css/*.css','src/less/*.less'],['css'])
})

gulp.task('default',['clean','js','css','html'])

