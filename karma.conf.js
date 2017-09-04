module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],

    files: [
      'src/**/*.ts',
      'test/**/*.ts'
    ],

    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
      'test/**/*.ts': ['karma-typescript']
    },

    reporters: ['progress', 'karma-typescript'],

    logLevel: config.LOG_INFO,

    browsers: ['PhantomJS'],

    singleRun: true
  })
};
