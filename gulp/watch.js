var gulp = require("gulp"),
watch =require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars=require("postcss-simple-vars"),
nested=require("postcss-nested"),
cssImport =require("postcss-import"),
browseSync = require("browser-sync").create(),
mixins = require("postcss-mixins");


gulp.task('default',function(){
console.log("We created the gulp default task");
});


gulp.task('html',function(){
    console.log("HTML gulp task running the HTML");
});

gulp.task('style',function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,mixins,cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'))
});

gulp.task('watch',function()
{
    browseSync.init({
        server:{
            baseDir : "app"    
        }
    });
    watch('./app/index.html',function(){
        browseSync.reload();
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css',function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject',['style'],function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browseSync.stream());
})