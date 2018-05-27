const gulp = require('gulp'); 
const browserSync = require('browser-sync').create(); 
const sass = require('gulp-sass'); 

// compile Sass 
gulp.task('sass', () => {
	return gulp.src(['src/scss/*.scss'])
		.pipe(sass()) 
		.pipe(gulp.dest('src/css')) 
		.pipe(browserSync.stream()); 
}); 

// Watch and serve
gulp.task('serve', ['sass'], () => {
	browserSync.init({
		server: './src'
	});
	gulp.watch(['src/scss/*.scss'], ['sass']);
	gulp.watch(['src/scss/*.html']).on('change', browswerSync.reload);
}); 

// Default
gulp.task('default', ['serve']); 
