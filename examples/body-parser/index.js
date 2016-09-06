//test:
//curl -d "a=1&b=2" http://localhost:3000/

var express = require('../../');
var bodyParser = require('body-parser');
var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res,next) {
  //res.setHeader('Content-Type', 'text/plain');  
  //res.write('you posted:\n');
  //res.end(JSON.stringify(req.body, null, 2));
  
  next();
});

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');  
  res.write('me posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
});

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
