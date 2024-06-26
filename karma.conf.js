module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-junit-reporter')  
      ],
      client: {
        clearContext: false 
      },
      coverageIstanbulReporter: {
        dir: require('path').join(__dirname, './coverage/my-app'),
        reports: ['html', 'lcovonly', 'text-summary'],
        fixWebpackSourcePaths: true
      },
      reporters: ['progress', 'kjhtml', 'junit'],  
      junitReporter: {
        outputDir: 'test-results', 
        outputFile: 'test-results.xml',  
        useBrowserName: false  
      },
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['ChromeHeadless'],
      singleRun: false,
      restartOnFileChange: true
    });
  };
  