const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const runSequence = require('run-sequence');
const del = require('del');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const gutil = require('gulp-util');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(concat('style.css'))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.stream());
});

gulp.task('css', function() {
	return gulp.src('src/css/**/*.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/**/*.js')
	.pipe(terser())
	.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
	.pipe(gulp.dest('dist/js/'));
});

gulp.task('images', function() {
	return gulp.src('src/assets/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/'));
})

gulp.task('serve', function() {
	browserSync.init({
		server: 'dist/'
	});
});

gulp.task('watch', function() {
	gulp.watch('src/sass/**/*.scss', ['sass']);
	gulp.watch('src/css/**/*.css', ['css']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch(['src/*.html', 'src/assets/**/*'], ['copy']);
	gulp.watch(['dist/**/*']).on('change', browserSync.reload);
});

gulp.task('clean', function() {
	return del('dist/');
});

//copy remaining files
gulp.task('copy', function() {
	return gulp.src([ 'src/*.html', 'src/assets/**/', 'src/*.png', 'src/*.ico', 'src/*.json'], {
		base: 'src'
	})
	.pipe(gulp.dest('dist/'));
});

gulp.task('build',
	gulp.series('clean', 'images', 'css', 'js', 'copy', function (callback) {
		callback()
	}));

gulp.task('default', gulp.series('sass', 'css', 'js', 'copy', 'serve', 'watch'));