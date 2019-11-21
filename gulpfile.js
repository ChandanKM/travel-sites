var gulp = require("gulp"),
watch =require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars=require("postcss-simple-vars");
nested=require("postcss-nested")

gulp.task('default',function(){
console.log("We created the gulp default task");
});

gulp.task('html',function(){
    console.log("HTML gulp task running the HTML");
});

gulp.task('style',function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
});

gulp.task('watch',function(){
    console.log("started");
    watch('./app/index.html',function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css',function(){
        gulp.start('style');
    });
});


