module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      "node_modules/vue/dist/vue.js",
      "src/*.js",
      "test/*.js"
    ],
    exclude: [],
    preprocessors: {
      'src/*.js': ['coverage']
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  })
}
