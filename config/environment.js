/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'blab-verification-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contractAbi: [{"constant":true,"inputs":[{"name":"reportId","type":"string"}],"name":"verifiersFor","outputs":[{"name":"addresses","type":"address[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"reportId","type":"string"}],"name":"verify","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"reportId","type":"string"}],"name":"isValid","outputs":[{"name":"isValid","type":"bool"}],"type":"function"}],
    contractAddress: '0x1f54af3ad2b1649887c675099e364d2f63556bd1'
  };

  ENV['ember-simple-auth'] = {
    authorizer: 'authorizer:token'
  };

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: '/auth',
    serverTokenRefreshEndpoint: '/auth',
    timeFactor: 1000,
    refreshLeeway: 300, // Refresh the token 5 minutes (300s) before it expires,
    headers: {
      'Content-Type': 'application/vnd.api+json'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
