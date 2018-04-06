'use strict';

module.exports = {

  'serverport': 4000,

  'styles': {
    'src' : 'assets/sass/**/*.scss',
    'dest': 'public/css'
  },

  'fonts': {
    'src' : 'assets/fonts/**/*',
    'dest': 'public/fonts'
  },

  'media': {
    'src' : 'assets/media/**/*',
    'dest': 'public/media'
  },

  'json': {
    'src' : 'assets/data/*',
    'dest': 'public/data'
  },

  'scripts': {
    'src' : 'assets/js/**/*.js',
    'dest': 'public/js'
  },

  'images': {
    'src' : 'assets/images/**/*',
    'dest': 'public/images'
  },

  'views': {
    'watch': 'views/**/*.jade',
    'src': 'views/*.jade'
  },

  'copy': {
    'bower': [
      'bower_components/jquery/dist/jquery.js'
    ]
  },

  'dist': {
    'root'  : 'public'
  }

};