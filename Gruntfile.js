module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
        development: {
            options: {
                compress: false,
            },
            files: {
                "dev/styles/main.css" : "src/styles/main.less"
            }
        }
    },
    uglify: {
        development: {
            files: {
                'dev/scripts/main.js': ['src/scripts/main.js']
            }
        }
    },
    watch: {
        styles: {
            files: ['src/styles/**/*.less'],
            tasks: ['less:development'],
        },
        scripts: {
            files: ['src/scripts/**/*.js'],
            tasks: ['uglify:development'],
        }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['watch'])
  grunt.registerTask('build', ['less:build'])

}