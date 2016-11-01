// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

var express = require('express');
var serveStatic = require('serve-static');
var argv = require('optimist')
  .boolean(['ssl', 'ngrok'])
  .argv;

var app = express();
app.use(serveStatic(__dirname + '/public'));

if (argv.ssl) {
  var https = require('https');
  var fs = require('fs');

  var port = 3443;
  var server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app);

  server.listen(port, function () {
    console.log('Listening on https://localhost:' + port);
  });
} else {
  var port = process.env.port || 3000;
  app.listen(port, function () {
    if (argv.ngrok) {
      var ngrok = require('ngrok');
      ngrok.connect(port, function (err, url) {
        console.log('Listening on ' + url);
      });
    } else {
      console.log('Listening on http://localhost:' + port);
    }
  });
}