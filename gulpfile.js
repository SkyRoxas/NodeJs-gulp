//require module
var gulp = require('gulp'),
    gulpSass = require('gulp-sass');


//gulp sass
gulp.task('sass', function() {
    gulp.src('sass/style.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('css'));
})

gulp.task('sass:watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
})
