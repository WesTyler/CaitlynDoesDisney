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

  grunt.initConfig({
  sass: {                              // Task
    dist: {                            // Target
      options: {                       // Target options
        style: 'expanded'
      },
      files: {                         // Dictionary of files
        'client/styles/main.css': 'client/styles/main.scss'        // 'destination': 'source'
      }
    }
  }
});

  // Load the plugins.
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register task(s).
  grunt.registerTask('default', ['bower_concat', 'sass']);
};