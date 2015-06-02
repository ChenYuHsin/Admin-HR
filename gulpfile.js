var gulp = require('gulp'),
  connect = require('gulp-connect');
  compass   = require('gulp-compass');

gulp.task('compass',function(){
      return gulp.src('./style/scss/*.scss')
          .pipe(compass({
              // config_file: './style/scss/config.rb',
              sourcemap: true,
              time: true,
        css: './style/css/',
        sass: './style/scss/',
        style: 'compact' //nested, expanded, compact, compressed
          }))
          .pipe(gulp.dest('./style/css/'));
});


gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['*.*'], ['html']);
  gulp.watch(['./dist/css/*.*'], ['html']);
  gulp.watch(['./mailbox/*.*'], ['html']);
  gulp.watch(['./dist/js/*.*'], ['html']);
});


gulp.task('default', ['connect','watch']);
