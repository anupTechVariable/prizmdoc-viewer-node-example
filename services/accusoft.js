'use strict';

let Promise = require('bluebird'),
  request = Promise.promisify(require('request')),
  path = require('path'),
  fs = require('fs');
Promise.promisifyAll(request);

let config = require('../config.json');

function createViewingSession() {
  return request.postAsync({
    url: config.apiRootUrl + '/PCCIS/V1/ViewingSession',
    headers: {
      'acs-api-key': config.apiKey
    },
    json: {
      'render': {
        'html5': {
          'alwaysUseRaster': 'false'
        }
      }
    }
  })
    .then((response) => {
      return response.body.viewingSessionId;
    });
}

function putFile(viewingSessionId, fileName) {
  fs.createReadStream(path.join(__dirname, '../documents', fileName))
    .pipe(request.put({
      url: config.apiRootUrl + '/PCCIS/V1/ViewingSession/u' + viewingSessionId + '/SourceFile',
      headers: {
        'acs-api-key': config.apiKey
      }
    }));

  return Promise.resolve();
}

function createViewingSessionForFile(fileName) {
  return createViewingSession()
    .then((viewingSessionId) => {
      return putFile(viewingSessionId, fileName)
        .then(() => viewingSessionId);
    });
}

module.exports.createViewingSession = createViewingSessionForFile;
