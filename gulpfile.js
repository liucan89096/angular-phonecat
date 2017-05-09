var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('compilejs', function () {
   return gulp.src('./RaineAndHorne/App_Plugins/SurgaBlocks/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('auto', function () {
	browserSync.init({
		server: {
            baseDir: "./app"
        },
		port: "8000"
    });
	
	gulp.watch([
	'./**/*.cshtml',
	'./**/*.html',
	'./**/*.css',
	'./**/*.js'
	]).on('change', browserSync.reload);
})