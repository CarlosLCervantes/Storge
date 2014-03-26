module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      css: {
        files: [
          '**/*.sass',
          '**/*.scss'
        ]
      },
      js: {
        files: [
          'app/*.js',
          'Gruntfile.js'
        ]
      }
    },

    browserSync: {
      files: {
        src : [
          'app/*',
          '**/*.html'
        ],
      },
      options: {
        watchTask: true
      }
    }
  });

  // Load the Grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Register the default tasks.
  grunt.registerTask('default', ['browserSync', 'watch']);
};