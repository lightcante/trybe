/*
* @Author: justinwebb
* @Date:   2015-05-04 11:30:21
* @Last Modified by:   justinwebb
* @Last Modified time: 2015-05-04 12:09:10
*/

'use strict';
module.exports = function (grunt) {
  var taskConfig;
  var userConfig;
  var _ = grunt.util._;

  // ----------------------------------------------------
  // Task configuration
  // ----------------------------------------------------
  // serverConfig = require('./server/server-config.js');
  userConfig = require('./build-config.js');
  taskConfig = {

    pkg: grunt.file.readJSON('package.json')

  };
  // Combine into external build configration file and task
  // configuration into Grunt's initConfig
  grunt.initConfig(_.extend(taskConfig, userConfig));


  // ----------------------------------------------------
  // Import Grunt module dependencies
  // ----------------------------------------------------
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-shell');


  // ----------------------------------------------------
  // Register multi-tasks and helper methods
  // ----------------------------------------------------

};
