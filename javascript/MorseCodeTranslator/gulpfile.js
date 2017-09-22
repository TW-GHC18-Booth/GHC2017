var gulp = require('gulp');
var jest = require('gulp-jest').default;

gulp.task('jest', function () {
  return gulp.src('__tests__').pipe(jest({}));
});
