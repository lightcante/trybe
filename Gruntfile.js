/*
* @Author: justinwebb
* @Date:   2015-05-04 11:30:21
* @Last Modified by:   vincetam
* @Last Modified time: 2015-05-06 13:19:21
*/

'use strict';
module.exports = function (grunt) {
  var userConfig;
  var taskConfig;
  var _ = grunt.util._;

  // ----------------------------------------------------
  // Task configuration
  // ----------------------------------------------------
  // serverConfig = require('./server/server-config.js');
  userConfig = require('./build-config.js');
  taskConfig = {

    pkg: grunt.file.readJSON('package.json'),

    shell: {
      devserver: {
        command: 'node server/server.js'
      },
      cleanserver: {
        command: 'ps -ax | grep node',
        options: {
         callback: shutDownNodeServerProcesses
        }
      },
      killprocess: {
        command: function (processNum) {
          return 'kill -9 ' + processNum;
       }
      },
      killlr: {
        command: 'lrkill'
      }
    },

    nodemon : {
      dev : {
        script : 'server.js',
        options : {

          ignore : ['node_modules/**'],

          cwd : __dirname +'/<%= server %>',

          watch : ['<%= server %>/**/*.js'],

          callback : function (nodemon) {
            // pretty logging
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            // open browser tab on initial startup
            nodemon.on('config:update', function () {
              setTimeout(function () {
                // TODO: user external server config file
                require('open')('http://localhost:3113');
                console.log('Trybe browser tab is open');
              }, 500);
            });

            // reload only changed files
            nodemon.on('restart', function () {
              setTimeout(function () {
                require('fs').writeFileSync('.rebooted', 'rebooted');
              }, 1000);
            });
          }
        }
      }
    },

    karma: {
      options: {
        configFile: 'karma.conf.js',
        reporters: ['progress', 'coverage']
      },
      // Watch configuration
      watch: {
        background: true,
        reporters: ['progress']
      },
      // Single-run configuration for development
      single: {
        singleRun: true,
      },
      // Single-run configuration for CI
      ci: {
        singleRun: true,
        coverageReporter: {
          type: 'lcov',
          dir: 'results/coverage/'
        }
      }
    },

    concurrent : {
      serverdev : {
        tasks : ['nodemon', 'watch:server'],
        options : {
          logConcurrentOutput: true
        }
      },
      serverdebug : {
        tasks : ['nodemon', 'node-inspector', 'watch:server'],
        options : {
          logConcurrentOutput: true
        }
      },
      clientdev : {
        tasks : ['shell:devserver', 'watch'],
        options : {
          logConcurrentOutput: true
        }
      }
    },

    watch : {
      server : {
        files : ['.rebooted'],
        options : {
          livereload : true
        }
      },
      livereload: {
        files: [
          '<%= build %>/<%= styles %>/**/*.css',
          '<%= build %>/<%= images %>/**/*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= build %>/**/*.html',
          '<%= build %>/**/*.js'
        ],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['<%= app_files.scss %>', '<%= styles %>/**/*.scss'],
        tasks: ['wire-styles']
      },
      jssrc: {
        files: [
          '<%= app_files.js %>',
          '<%= data %>/**/*.json'
        ],
        tasks: ['copy:appjs', 'index']
      },
      html: {
        files: ['src/index.html'],
        tasks: ['index']
      },
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: [],
        options: {
            livereload: false
        }
      },
    },

    sass: {
      options: {
        sourceMap: true,
        includePaths: ['<%= sass_bootstrap_dir %>'],
        imagePath: '<%= images %>',
        outputStyle: 'nested', //'nested' or 'compressed'
        precision: 10
      },
      gen: {
        files: {
            '<%= styles %>/main.css': '<%= styles %/main.scss'
        }
      }
    },

    clean: ['dist'],

    copy: {
      appjs: {
        files: [
          {
            src: [
              '<%= vendor_files.js %>',
              '<%= app_files.js %>',
              '<%= data %>/**/*.json'
            ],
            dest: '<%= build %>',
            cwd: '.',
            expand: true
          }
        ]
      },
      css: {
        files: [
          {
            src: [
              '<%= vendor_files.css %>',
              '<%= styles %>/**/*.css',
              '<%= styles %>/**/*.css.map'
            ],
            dest: '<%= build %>',
            cwd: '.',
            expand: true
          }
        ]
      },
      media: {
        files: [
          {
            src: [
              '!<%= styles %>',
              '<%= images %>/*',
              '<%= fonts %>/*',
              '<%= data %>/*'
            ],
            dest: '<%= build %>',
            cwd: '.',
            expand: true
          }
        ]
      }
    },

    manifest: {
      build: {
        dir: '<%= styles %>/skins',
        src: [ '<%= app_files.scss %>' ],
        base: '<%= app %>',
        baseRewrite: '../../../app'
      }
    },
    html2js: {
      app: {
        options: {
          base: '<%= app %>'
        },
        src: [ '<%= app_files.atpl %>' ],
        dest: '<%= build %>/templates-app.js'
      }
    },
    index: {
      build: {
        dir: '<%= build %>',
        src: [
          '<%= vendor_files.js %>',
          '<%= app_files.js %>',
          '<%= html2js.app.dest %>',
          '<%= vendor_files.css %>',
          '<%= styles %>/main.css'
        ]
      }
    }
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
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-karma');

  // ----------------------------------------------------
  // Register tasks
  // ----------------------------------------------------
  grunt.registerTask('serverdev', ['concurrent:serverdev']);

  grunt.registerTask('serverdebug', ['concurrent:serverdebug']);

  grunt.registerTask('clientdev', ['concurrent:clientdev']);

  grunt.registerTask('build', [
    'clean',
    'copy:media',
    'wire-styles',
    'wire-behaviors'
  ]);

  grunt.registerTask('default', ['build']);

  grunt.registerTask('wire-styles', ['manifest', 'sass', 'copy:css']);

  grunt.registerTask('wire-behaviors', ['copy:appjs', 'html2js', 'index']);

  grunt.registerTask('testClient', ['karma:single']);

  // ----------------------------------------------------
  // Register multi-tasks and helper methods
  // ----------------------------------------------------
  function shutDownNodeServerProcesses(err, stdout, stderr, cb) {
      var processes = String(stdout).split('\n');
      var processNums = _.filter(processes, function (val, key) {
          return val.match(/server\/server\.js/);
      }).map(function (processStr) {
          return processStr.match(/[0-9]*\w+?/);
      });

      _.forEach(processNums, function (pn) {
          grunt.task.run('shell:killprocess:'+ pn[0]);
      });

      cb();
  }

  function filterForFileExtension(extension, files, relDir) {

      var configDir = (relDir) ? relDir : grunt.config('build'),
          regex = new RegExp('\\.' + extension + '$'),
          dirRE = new RegExp('^(' + configDir + ')\/', 'g');

      return files
          .filter(function (file) {
              return file.match(regex);
          })
          .map(function (file) {
              return file.replace(dirRE, '');
          });
  }

  grunt.registerMultiTask('index', 'Process index.html template', function () {

      // Strip build directory off of copied JS source and vendor files, then
      // store relative paths to files in jsFiles array
      var jsFiles = filterForFileExtension('js', this.filesSrc);
      var cssFiles = filterForFileExtension('css', this.filesSrc);

      // Output indexed JS files to console
      grunt.log.writeln(this.filesSrc.join().replace(/,/g, '\n'));

      // Add indexed files to index.html as it moves from client to build
      grunt.file.copy('client/index.html', this.data.dir + '/index.html', {
          process: function (contents, path) {
              return grunt.template.process(contents, {
                  data: {
                      scripts: jsFiles,
                      styles: cssFiles,
                      version: grunt.config('pkg.version')
                  }
              });
          }
      });
  });

  grunt.registerMultiTask('manifest', 'Style imports for app modules', function () {
      var content;
      var mName = '_manifest.gen.scss';
      var cb = '// ----------------------------------------------------\n';
      var comment = '// ' + mName + ' is auto-generated.  DO NOT MODIFY\n';
      var rewrite = this.data.baseRewrite;
      var scssFiles = filterForFileExtension('scss', this.filesSrc, this.data.base);
      var fileCount = 0;

      // Create opening comment
      content = cb + comment + cb;

      // Add a Sass import statement for each file
      _.each(scssFiles, function (file) {
          var at = file.lastIndexOf('_');
          if (at > -1) {
              var fileRef = rewrite + '/' +file.slice(0, at);
              fileRef = fileRef.concat(file.slice(at + 1, String('.scss').length * -1));
              content = content.concat('@import "' + fileRef + '";\n');
              fileCount++;
          }
          else {
              grunt.log.writeln("ERROR: All manifest files must be preceded with '_' for import as Sass partials.");
          }
      });

      // Write new content into manifest file
      grunt.log.writeln('Writing ' + fileCount + ' file references to ' + mName);
      grunt.file.write(this.data.dir + '/' + mName, content);
  });
};
