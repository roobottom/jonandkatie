'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const render = require('gulp-nunjucks-render');

gulp.task('server',() => {
  return connect.server({
    root: './docs',
    port: 8001,
    name: 'Jon and Katie'
  })
});

gulp.task('render',() => {
  return gulp.src('templates/*.html')
  .pipe(render({
      path: [''] // String or Array
    }))
    .pipe(gulp.dest('docs'));
});

gulp.task('static',() => {
  return gulp.src('static/**/*')
  .pipe(gulp.dest('docs'))
})

gulp.task('build',['render','static']);

gulp.task('watch',() => {
  gulp.watch(['templates/**/*','layouts/default.html','static/**/*','partials/**/*'],['build']);
});

gulp.task('default',['server','build','watch']);
