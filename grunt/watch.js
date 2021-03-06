module.exports = {
  docs: {
    files: ['docs/src/**/*.js*', 'src/**/*.js*'],
    tasks: ['docs-build'],
    options: {
      livereload: true
    }
  },
  less: {
    files: ['src/**/*.less'],
    tasks: ['less', 'copy:css'],
    options: {
      livereload: true
    }
  }
};
