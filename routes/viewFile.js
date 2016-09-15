'use strict';

let fs = require('fs'),
  path = require('path'),
  accusoft = require('../services/accusoft');

function downloadFile(request, response) {
  if (!request.params.fileName) {
    response.status(404).send('Not Found');
    return;
  }

  fs.createReadStream(path.join(__dirname, '../documents', request.params.fileName))
    .on('error', (error) => {
      if (error.code === 'ENOENT') {
        response.status(404).send('Not Found');
        return;
      }

      response.status(500).send('Internal Server Error');
    })
    .pipe(response);
}

function viewFile(request, response) {
  if (!request.params.fileName) {
    response.status(404).send('Not Found');
    return;
  }

  accusoft.createViewingSession(request.params.fileName)
    .then((viewingSessionId) => {
      response.render('viewFile', { viewingSessionId: viewingSessionId });
    }, () => {
      response.status(500).send('Internal Server Error');
    });
}

module.exports.initialize = function (app) {
  app.get('/download/:fileName', downloadFile);
  app.get('/view/:fileName', viewFile);
};
