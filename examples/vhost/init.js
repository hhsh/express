var express = require('./index');

var express = require('../..');
var app = module.exports = express();

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}