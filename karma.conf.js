module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', 'angular-cli'], // Ajusta los frameworks según sea necesario
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        // No incluyas require('@angular-devkit/build-angular/plugins/karma')
        require('karma-junit-reporter')
      ],
      // Ajusta el resto de la configuración según tu proyecto
      reporters: ['progress', 'kjhtml', 'coverage', 'junit'],
      junitReporter: {
        outputDir: 'test-results/',
        outputFile: 'test-results.xml',
        useBrowserName: false,
        suite: '',
        xmlVersion: '1'
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
  