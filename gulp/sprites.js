var gulp = require("gulp"),
svgSprite = require("gulp-svg-sprite");


gulp.task('createSprite',function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
    
    .pipe(gulp.dest('app/temp/sprite/'))
});


