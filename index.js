'use strict';

let express = require('express'),
  exphbs = require('express-handlebars');

let config = require('./config.json');

let app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(__dirname + '/public'));

require('./routes').initialize(app);

app.listen(config.listenPort, function () {
  console.log('PrizmDoc Viewer Node Example - listening on port ' + config.listenPort);
  console.log('\tNavigate to http://localhost:' + config.listenPort);
});
