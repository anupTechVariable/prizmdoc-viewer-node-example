'use strict';

var files = require('../services/files');

function home(request, response, next) {
  files.getFiles()
    .then((files) => {
      response.render('home', { files: files });
    }, next);
}

module.exports.initialize = function (app) {
  app.get('/', home);
};
