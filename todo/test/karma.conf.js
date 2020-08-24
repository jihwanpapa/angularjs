module.exports = function(config) {
    config.set({
      //basePath: '../..',
      basePath: '..',
      frameworks: ['jasmine'],
      files: [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'bower_components/angular-cookies/angular-cookies.js',
        'bower_components/angular-resource/angular-resource.js',
        'bower_components/angular-route/angular-route.js',
        'bower_components/angular-sanitize/angular-sanitize.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/jquery-ui/jquery-ui.js',
        'bower_components/angular-ui-sortable/sortable.js',
        // endbower
        'app/scripts/**/*.js',
        'test/mock/**/*.js',
        'test/spec/**/*.js'
    ]
      //...
    });
  };
  
