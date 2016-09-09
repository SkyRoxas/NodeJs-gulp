//require module
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');


//gulp sass
gulp.task('sass', function() {
    gulp.src('sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'));
})

gulp.task('sass:watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
})
