'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      files: [ '**/*.js', '!node_modules/**/*.js', '!public/**/*.js' ],
      options: {
        jshintrc: 'jshint.json'
      }
    },

    mochaTest: {
      test: {
        options: {
          bail: true,
          reporter: 'spec',
          ui: 'tdd'
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      scripts: {
        files: [ '**/*.js', '!node_modules/**/*.js' ],
        tasks: [ 'default' ],
        options: {
          interrupt: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', [ 'jshint', 'mochaTest' ]);
};
