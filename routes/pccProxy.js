'use strict';

let httpProxy = require('http-proxy');

let config = require('../config.json');

let proxy = new httpProxy.createProxyServer({
  target: config.apiRootUrl,
  headers: {
    'acs-api-key': config.apiKey,
    host: 'api.accusoft.com'
  }
});

function pcc(request, response) {
  request.url = request.url.replace('pcc', 'PCCIS/V1');
  proxy.web(request, response);
}

module.exports.initialize = function (app) {
  app.get('/pcc*', pcc);
};
