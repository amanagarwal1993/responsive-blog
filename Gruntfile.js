'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 600
          }, {
            width: 480
          }]
        },
        files: [{
          expand: true,
          src: ['*.{jpeg,jpg,png}'],
          cwd: 'img/',
          dest: 'img/'
        }],
      },
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', ['responsive_images']);
}