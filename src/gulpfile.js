var browserify = require('gulp-browserify');
var derequire = require('gulp-derequire');
var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var compass = require("gulp-compass");
var minifyCSS = require('gulp-minify-css');
	  

var paths = {
  scripts: ['imports/**/**.js', 'imports/**/**/**.js'],
  main: ["catamaran.js"],
  polyfill:["polyfill.js"],
  pub:["../dist/catamaran.js"]
};

gulp.task("dependencies", function () {
	return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../dist/'));

});

gulp.task("polyfill", function () {
	return gulp.src(paths.polyfill)
    .pipe(sourcemaps.init())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('../dist/'));

});

gulp.task("main", function () {
	return gulp.src(paths.main)
    .pipe(sourcemaps.init())
     .pipe(babel({modules:'common'}))
    .pipe(sourcemaps.write())
    .pipe(derequire())
    .pipe(uglify())
    .pipe(gulp.dest('../dist/'));
});

gulp.task("pub", function () {
 gulp.src(paths.pub, { read: false })
 .pipe(derequire())
    .pipe(browserify({
      insertGlobals : false
    }))
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


gulp.task('build', function(callback) {
  runSequence('dependencies',
  			'main',
  			'polyfill',
  			'compass',
  			'pub'
  	);
});