'use strict';

let Promise = require('bluebird'),
  path = require('path'),
  fs = Promise.promisifyAll(require('fs'));

function getFiles() {
  return fs.readdirAsync(path.join(__dirname, '../documents'));
}

module.exports.getFiles = getFiles;
