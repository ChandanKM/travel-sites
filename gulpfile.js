var gulp = require("gulp"),
watch =require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars=require("postcss-simple-vars"),
nested=require("postcss-nested"),
cssImport =require("postcss-import"),
browseSync = require("browser-sync").create(),
mixins = require("postcss-mixins"),
svgSprite = require("gulp-svg-sprite"),
rename =require("gulp-rename"),
del = require("del"),
hexrgba = require('postcss-hexrgba')
webpack=require('webpack');






///config property is to config the template file to configure everything
//to add creat the css file for the svg icons we use this technique.
//this is for our own templates.
//This approach to reduce the size of the icons.
//
 
var config = {
    mode:{
        css:{
            sprite:'sprite.svg',
            render:{
                css:{
                    template:'./gulp/templates/template.css'
                }
            }

        }
    }
}
gulp.task('default',function(){
console.log("We created the gulp default task");
});


gulp.task('html',function(){
    console.log("HTML gulp task running the HTML");
});

gulp.task('style',function(){
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport,mixins,cssvars,nested,hexrgba,autoprefixer]))
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

    watch('./app/assets/scripts/**/*.js',function(){
        gulp.start('scriptReload');
    });
    
});

gulp.task('cssInject',['style'],function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browseSync.stream());
});

///this task is use to create the svgSprite file. 
//get the information form npm packages.
//pass the css file to create the css for the icons sprite.

gulp.task('createSprite',['beginClean'],function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'))
});

gulp.task('copySpriteCSS',['createSprite'],function(){
    return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('copySpriteGraphic',['createSprite'],function(){
     return gulp.src('./app/temp/sprite/css/**/*.svg')
     .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('beginClean',function(){

    return del(['./app/temp/sprite','./app/assets/images/sprites']);
});

gulp.task('endClean',['copySpriteGraphic','copySpriteCSS'],function(){
    return del(['./app/temp/sprite']);
});

gulp.task('icons',['beginClean','createSprite','copySpriteGraphic','copySpriteCSS','endClean']);



//generating the scripts

gulp.task('scripts',function(callback){
    webpack(require("./webpack.config.js"),function(err,stats){
        if(err){
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
} );


gulp.task('scriptReload',['scripts'],function(){
    browseSync.reload();    
});
