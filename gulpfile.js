
/*
安装：npm install -g cnpm --registry=https://registry.npm.taobao.org  安装淘宝镜像）用淘宝镜像快！

修改：npm config set registry http://registry.npm.taobao.org
*/

//1. 全局安装 gulp： $ npm install --global gulp
//2. 作为项目的开发依赖（devDependencies）安装：$ npm install --save-dev gulp
//3. 在项目根目录下创建一个名为 gulpfile.js 的文件：var gulp = require('gulp');
//4. gulp.task('default', function() {
// 将你的默认的任务代码放在这
//});
// 升级了node版本/ node版本太高会造成node-sass不兼容的问题，那么就再 install node-sass一下就行了。
// install  --save-dev  babel-preset-latest 最新的转码guize

var gulp = require('gulp');
var del = require("del");
var watch = require("gulp-watch");
var minCss = require('gulp-clean-css'); //gulp-minify-css:压缩css文件 npm install gulp-clean-css 
var connect = require('gulp-connect'); //gulp-connect 创建服务器  npm install --save-dev gulp-connect
var minJs = require('gulp-uglify'); //压缩javascript文件  npm install gulp-uglify
var img = require('gulp-imagemin'); //gulp-imagemin:压缩png、jpj、git、svg格式图片 npm install --save-dev gulp-imagemin
var rename = require("gulp-rename"); // npm install gulp-rename --save-dev  重命名文件，把一个文件储存不同版本时使用
var concat = require('gulp-concat'); //npm install gulp-concat --save-dev  整合文件
var minHtml = require('gulp-htmlmin'); //npm install gulp-htmlmin --save-dev 压缩html，可以压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作

var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var resolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var json = require("rollup-plugin-json");
var replace = require('rollup-plugin-replace');
var vue = require('rollup-plugin-vue');
var vembedCss = require('rollup-plugin-embed-css');

var postcss = require("gulp-postcss"); // 手机端自动补全css3前缀  cnpm install --save-dev gulp-postcss
var autoprefixer = require('autoprefixer'); // npm install --save-dev autoprefixer

/*
 *	cnpm install node-sass --save-dev
 * cnpm install gulp-sass --save-dev 
 * 使用：sass().on('error', sass.logError)
 */
var sass = require('gulp-sass');
var eslint = require("gulp-eslint"); // 检查es5 ees6 js gulp-eshint


// 清空目录gulp-del
gulp.task('del', function(cd) {
	// gulp.src('./dist',{read:false}).pipe(clean()); //gulp-clean

	del(["./dist"], cd); //gulp-del
});


// 文件路径
var paths = {

    // sass文件
    scssPath: ['./src/css-dev/scss/**/*.scss'],
    htmlPath: ['./src/**/*.html'],
    jsPath: ['./src/js-dev/**/*.js', './src/js-dev/**/*.vue' ,'./src/components/**/*.vue']

};

var jsName = "all";

gulp.task('release', ["scss-build", "js-build"], function() {

	//**是所以文件夹
	//*.*是所以文件
	//gulp.src是查找文件
	//pipe是进入流管道
	//gulp.dest() 是复制文件

	gulp.src(['./src/**/*.html']).pipe(gulp.dest('./dist')); //复制html
	gulp.src('./src/css/**/*.css').pipe(minCss()).pipe(gulp.dest('./dist/css')); //复制css
	gulp.src('./src/js/**/*.js').pipe(minJs()).pipe(gulp.dest('./dist/js/')); //复制js
	gulp.src('./src/imgs/**/*.*')
		//.pipe(img())                     // 压缩图片
		.pipe(gulp.dest('./dist/imgs/')); //复制img
		
	gulp.src('./src/fonts/**/*.*').pipe(gulp.dest('./dist/fonts')); //复制
	gulp.src('./src/css/fonts/**/*.*').pipe(gulp.dest('./dist/css/fonts')); //复制fonts
	gulp.src(['./src/json/**/*.json']).pipe(gulp.dest('./dist/json')); //json

});


//scss合并css文件
gulp.task("scss-build",async function() {

	await gulp.src(paths.scssPath)
		.pipe(sass().on('error', sass.logError))     // sass编译
		.pipe(postcss([autoprefixer]))          // 自动添加css3缀-webkit-  适合用于手机端 
		.pipe(gulp.dest('./src/css/'));
		
});

//scss合并css文件
gulp.task("scss-dev",async function() {

	await gulp.src(paths.scssPath)
		.pipe(sass().on('error', sass.logError))     // sass编译
		.pipe(postcss([autoprefixer]))          // 自动添加css3缀-webkit-  适合用于手机端 
		.pipe(gulp.dest('./src/css/')).pipe(connect.reload());;
	
});

gulp.task("html", function() {

	//重启服务器	
	gulp.src(paths.htmlPath).pipe(connect.reload());
});


//开启http服务器
function sev(src) {
    src = src || "src";
    connect.server({
        root: src,
        livereload: true,
        host:"localhost",
        port: 8888
    });
    console.log("服务器运行的目录："+src);
}

gulp.task('connect',
    function () {
        sev();
    });


gulp.task('svc-dist',
    function () {
        sev("dist");
	});
	
	
/*
 * watch监听
 * gulp.watch参数说明
 * 1. gulp.watch(path,task);
 * 2.gulp.watch(path,function(){});
 */
gulp.task("watch", ['connect', "scss-dev", "js-dev"], function() {

	//合拼压缩js文件
	watch(paths.jsPath, function() {
        gulp.start("js-dev");
	});

	//sass合并压缩css文件
	//gulp.watch(paths.scssPath, ['scss']);

	watch(paths.scssPath, function() {
		gulp.start("scss-dev");
		
	});

	//监听html
	watch(paths.htmlPath, function() {
		gulp.start("html");
	});

});

gulp.task('js-build', async function() {
	await buildJs(true);
});

gulp.task('js-dev', async function() {
	await buildJs();
});

async function buildJs(isBuild){
	isBuild=isBuild||false;
	const bundle = await rollup.rollup({
		input: './src/js-dev/all.js',

		/* 默认情况下，模块的上下文 - 即顶级的this的值为undefined。您可能需要将其更改为其他内容，如 'window'*/
		context: "window",
		plugins: [
			
			vue(),
			vembedCss(),
			/*commonjs 转换 es6*/
			resolve(),
			commonjs(),  
			replace({
				'process.env.NODE_ENV': isBuild ? JSON.stringify('production') : JSON.stringify('development'),
			}),
			babel({
				exclude: 'node_modules/**',
				presets: ["es2015-rollup"]
			}),
			
			//uglify(), // 使用uglify压缩js 不能output 输出 format: 'es' 格式 否会报错

		],
	});

	await bundle.write({
		file: './src/js/' + jsName + '.js',
		format: 'umd',
		name: 'umd',
		//sourcemap: true,
		strict: true, //在生成的包中省略`"use strict";`
	});
	
	 gulp.src(paths.jsPath).pipe(connect.reload());

}
