'use strict';

module.exports.initialize = function (app) {
  require('./home').initialize(app);
  require('./viewFile').initialize(app);
  require('./pccProxy').initialize(app);
};
