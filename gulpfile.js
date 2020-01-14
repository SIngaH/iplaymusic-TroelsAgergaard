const gulp = require("gulp")
const ejs = require("gulp-ejs")
const rename = require("gulp-rename")


function defaultTask(cb) {
    // place code for your default task here
    gulp.src("./src/html/templates/*.ejs")
        .pipe(ejs())
        .pipe(rename(function(path){
            path.extname = ".html"
        }))
        .pipe(gulp.dest("./dist"))
    cb();
    }

exports.default = defaultTask