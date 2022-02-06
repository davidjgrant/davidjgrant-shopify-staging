const gulp = require('gulp');
const themekit = require('@shopify/themekit');
const sass = require('gulp-sass')(require('node-sass'));
const clean = require('gulp-clean-css')

gulp.task('sass', function() {
  return gulp.src('styles/styles.scss')
    .pipe(sass())
    .pipe(clean({ compatibility: 'ie11' }))
    .pipe(gulp.dest('assets'))
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.scss', gulp.series('sass'))
  themekit.command('watch', {
    env: 'development'
  })
});