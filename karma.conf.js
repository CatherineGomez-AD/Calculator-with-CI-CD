module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-junit-reporter')
      ],
      client: {
        clearContext: false // leave Jasmine Spec Runner output visible in browser
      },
      preprocessors: {
        'src/**/*.js': ['coverage'] // Ajusta esto según la ubicación de tu código fuente
      },
      coverageReporter: {
        type: 'cobertura', // Tipo XML para Jenkins
        dir: 'coverage/',
        file: 'coverage.xml'
      },
      reporters: ['progress', 'kjhtml', 'coverage', 'junit'],
      junitReporter: {
        outputDir: 'test-results', // Directorio donde se generará el archivo
        outputFile: 'test-results.xml',
        useBrowserName: false
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['ChromeHeadless'],
      singleRun: true,
      restartOnFileChange: false
    });
  };
  