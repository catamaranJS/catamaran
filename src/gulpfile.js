//var browserify = require('gulp-browserify');
var fs = require("fs");
var babelify = require("babelify");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var derequire = require('gulp-derequire');
var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var shell = require('gulp-shell');
var runSequence = require('run-sequence');
var compass = require("gulp-compass");
var minifyCSS = require('gulp-minify-css');



var _paths = {
  scripts: ['imports/**/**.js', 'imports/**/**/**.js'],
  main: ["catamaran.js"],
  polyfill:["polyfill.js"],
  alljs:['imports/**/**.js', 'imports/**/**/**.js',"catamaran.js"],
  pub:["../dist/catamaran.js"]
};

gulp.task('default', function (callback) {
    gulp.start('watch');

});

gulp.task("dependencies", function () {
	return gulp.src(_paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../dist/'));

});

gulp.task("polyfill", function () {
	return gulp.src(_paths.polyfill)
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../dist/'));

});

gulp.task("main", function () {
	return browserify('./index.js')
  .transform("babelify", {presets: ["es2015"]})
  .bundle()
  .pipe(fs.createWriteStream("../build/catamaran.js"));
  //.pipe(rename('catamaran.js'))
 //.pipe(gulp.dest('../build/'));
  
});

gulp.task("pub", function () {
 gulp.src(_paths.pub, { read: false })
 .pipe(derequire())
    /*.pipe(browserify({
      insertGlobals : false
    }))*/
    .pipe(uglify())
    .pipe(rename('catamaran.js'))
    .pipe(gulp.dest('../build/'));
});

gulp.task('compass', function() {
  gulp.src('./assets/sass/*.scss')
    .pipe(compass({
      css: './assets/css',
      sass: './assets/sass',
      image: './assets/images',
      fonts: './assets/fonts'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('../build/assets/css'));
});

gulp.task('watch', function (callback) {
    gulp.watch(_paths.alljs, ['build']);
});



gulp.task('build', function(callback) {
  runSequence('dependencies',
  			'main',
  			'polyfill',
  			'compass'
  	);
});