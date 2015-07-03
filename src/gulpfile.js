var browserify = require('gulp-browserify');
var derequire = require('gulp-derequire');
var gulp = require("gulp");
var babel = require("gulp-babel");
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

var paths = {
  scripts: ['events/Events.js', 'extend/Extend.js', 'ui/Animation.js', 'ui/Carousel.js', 'ui/Phaser.js'],
  main: ["catamaranV2.js"],
  pub:["../dist/catamaranV2.js"]
};

gulp.task("dependencies", function () {
	return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
      .pipe(babel())
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
 gulp.src('../dist/catamaranV2.js', { read: false })
    .pipe(browserify({
      insertGlobals : false
    }))
    .pipe(derequire())
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('../build/'));
});

gulp.task('build', function(callback) {
  runSequence('dependencies',
  			'main',
  			'pub'
  	);
});