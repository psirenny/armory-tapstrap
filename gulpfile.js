var bourbon = require('node-bourbon')
  , dataUri = require('gulp-data-uri')
  , gulp = require('gulp')
  , sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('scss/index.scss')
    .pipe(sass({includePaths: bourbon.includePaths}))
    .pipe(dataUri())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function () {
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['sass']);
