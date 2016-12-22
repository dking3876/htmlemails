var gulp = require('gulp')
var mjml = require('gulp-mjml')

gulp.task('default', function () {
  return gulp.src('./test.mjml')
    .pipe(mjml())
    .pipe(gulp.dest('./html'))
})