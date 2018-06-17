let gulp = require("gulp");
let connect = require("gulp-connect");
let sass = require("gulp-sass-china");

gulp.task("hello",()=>{
	console.log("hello this is my first gulp-task");
})

//gulp.task()	创建gulp指令
//gulp.src()	查找路径
//gulp.pipe()	用来做连缀
//gulp.dest()	转存
//gulp.watch()	监视


gulp.task("index",()=>{
	return gulp.src(["local/**/*"]).pipe(gulp.dest("project")).pipe(connect.reload());
})

gulp.task("watch",()=>{
	gulp.watch("local/list.html",["index"])
	gulp.watch("local/sass/*.scss",["sass"])
})

//connect插件用来搭建本地服务器
gulp.task("server",()=>{
	connect.server({
		root:"project",
		port:1314,
		livereload:true
	})
})

gulp.task("default",["server","watch"])

gulp.task("sass",()=>{
    return gulp.src("local/sass/*.scss")
               .pipe(sass().on("error",sass.logError))
               .pipe(gulp.dest("project/css"))
               .pipe(connect.reload());
})



