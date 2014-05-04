/*
	Notes :

	1. Indiquer le nom du projet dans la variable 'name' de package.json
	2. Lancer wampp
	3. Aller sur le site
	4. En console, lancer grunt test
	5. Connecter livereload dans Firefox
 */

'use strict';

module.exports = function (grunt) {
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		config: {
			app: '../app/design/frontend/eplatform/<%= pkg.name %>',
			skin: '../skin/frontend/eplatform/<%= pkg.name %>',
			media: '../media'
		},

		watch: {
			styles: {
				files: ['<%= config.skin %>/sass/{,*/}*.{scss,sass}'],
				tasks: ['compass:test', 'autoprefixer']
			},

			scripts: {
				options: {
					livereload: true
				},
				files: ['<%= config.skin %>/js/{,*/}*.js'],
				tasks: ['newer:jshint']
			},

			images: {
				files: ['<%= config.skin %>/images/{,*/}*.{gif,jpeg,jpg,png}'],
				tasks: ['newer:imagemin:skin']
			},

			media: {
				files: [
					'<%= config.media %>/{,*/}*.{gif,jpeg,jpg,png}',
					'!<%= config.media %>/catalog/*'
				],
				tasks: ['newer:imagemin:media']
			},

			livereload: {
				options: {
					livereload: true
				},
				files: [
					'<%= config.app %>/templates/{,*/}*.php',
					'<%= config.skin %>/css/{,*/}*.css'
				]
			}
		},

		compass: {
			options: {
				config: '<%= config.skin %>/config.rb',
				sassDir: '<%= config.skin %>/sass',
				cssDir: '<%= config.skin %>/css'
			},
			test: {
				options: {
					environment: 'development'
				}
			},
			prod: {
				options: {
					environment: 'production'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			all: {
				files: [{
					expand: true,
					cwd: '<%= config.skin %>/css',
					src: '{,*/}*.css',
					dest: '<%= config.skin %>/css'
				}]
			}
		},

		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= config.skin %>/js/{,*/}*.js',
				'!<%= config.skin %>/js/vendors/*'
			]
		},

		imagemin: {
			skin: {
				files: [{
					expand: true,
					cwd: '<%= config.skin %>/images',
					src: ['{,*/}*.{gif,jpeg,jpg,png}'],
					dest: '<%= config.skin %>/images'
				}]
			},
			media: {
				files: [{
					expand: true,
					cwd: '<%= config.media %>',
					src: [
						'{,*/}*.{gif,jpeg,jpg,png}',
						'!catalog/*'
					],
					dest: '<%= config.media %>'
				}]
			}
		}
	});

	grunt.registerTask('test', [
		'watch'
	]);

	grunt.registerTask('prod', [
		'compass:prod',
		'autoprefixer',
		'newer:jshint',
		'newer:imagemin'
	]);

	grunt.registerTask('default', ['prod', 'test']);
};
