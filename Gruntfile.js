module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
		clean: {
			build: {
				src: ['build/*', 'tmp/']
			}
		},
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
				report: 'min',
				mangle: false
      },
      build: {
        src: [
					'js/app.js', 
					'js/game-service.js',
					'js/highscores-service.js',
					'js/colors.js',
					'js/i18n/i18n.js',
					'js/i18n/en.js',
					'js/i18n/es.js',
					'js/i18n/de.js',
					'js/i18n/fr.js',
					'js/i18n/pt.js',
					'js/welcome-screen.js',
					'js/about-screen.js',
					'js/game-screen-canvas.js',
					'js/game-end-screen.js',
					'js/highscores-screen.js'
				],
        dest: 'build/color-guess/app.js'
      }
    },
		cssmin: {
			options: {
				report: 'min'
			},
			build: {
				src: ['css/style.css', 'css/font-awesome.css'],
				dest: 'build/color-guess/css/style.css'
			}
		},
		processhtml: {
			build: {
				files: {
					'build/color-guess/index.html': ['index.html']
				}
			}
		},
		imagemin: {
			build: {
				files: {
					'build/color-guess/icons/circle-32.png': 'res/img/circle-32.png',
					'build/color-guess/icons/circle-48.png': 'res/img/circle-48.png',
					'build/color-guess/icons/circle-60.png': 'res/img/circle-60.png',
					'build/color-guess/icons/circle-64.png': 'res/img/circle-64.png',
					'build/color-guess/icons/circle-90.png': 'res/img/circle-90.png',
					'build/color-guess/icons/circle-120.png': 'res/img/circle-120.png',
					'build/color-guess/icons/circle-128.png': 'res/img/circle-128.png',
					'build/color-guess/icons/circle-256.png': 'res/img/circle-256.png',
					'build/color-guess/icons/circle-512.png': 'res/img/circle-512.png',
				}
			}
		},
		copy: {
			partials: {
				expand: true,
				cwd: 'partials',
				src: '*.html',
				dest: 'build/color-guess/partials/',
				filter: 'isFile'
			},
			fonts: {
				expand: true,
				cwd: 'fonts',
				src: '*',
				dest: 'build/color-guess/fonts/'
			},
			manifest: {
				expand: true,
				src: 'manifest.webapp',
				dest: 'build/'
			},
			jslibs: {
				expand: true,
				cwd: 'lib',
				src: ['angular.min.js', 'angular-route.min.js', 'angular-sanitize.min.js'],
				dest: 'build/color-guess/lib/'
			},
		},
		compress: {
			build: {
				options: {
					archive: 'color-guess.zip',
					mode: 'zip'
				},
				expand: true,
				cwd: 'build',
				src: ['**/*'],
				dest: ''
			}
		}
  });

	grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-processhtml');
  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'processhtml', 'imagemin', 'copy', 'compress']);

};
