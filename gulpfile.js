const gulp = require("gulp")
const ejs = require("gulp-ejs")
const rename = require("gulp-rename")
const sass = require('gulp-sass');
 
sass.compiler = require('node-sass');


function html(done){
    // place code for your default task here
    gulp.src("./src/html/templates/*.ejs")
        .pipe(ejs())
        .pipe(rename(function(path){
            path.extname = ".html"
        }))
        .pipe(gulp.dest("./dist"))
    done();
}

function watchHtml(){
    gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false}, html)
}

function scss(done){
    gulp.src("./src/sass/*.scss")
        .pipe(sass())
        .pipe(rename(function(path){
            path.extname = ".css"
        }))
        .pipe(gulp.dest("./dist/css"))
    done();
}

function watchScss(){
    gulp.watch("./src/sass/**/*.scss", { ignoreInitial: false }, scss)
}

gulp.task("dev", function(done){
    watchHtml();
    watchScss();
    done();
})
