#!/usr/bin/env node
var debug = require('debug')('express-test');
var http = require('http');
var app = require('../server');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
  console.log('Express server listening on port ' + server.address().port);
});
