module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bower_concat: {
      all: {
        dest: 'client/scripts/_bower.js',
        exclude: [
          'jquery',
          'bootstrap-sass'
        ]
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-bower-concat');

  // Register task(s).
  grunt.registerTask('default', ['bower_concat']);

};