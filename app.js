'use strict'
const PORT = 8000;
const http = require('http');
const qs = require('queryString');

const MathPart = require('./MathPart');

const server = http.createServer((req, res) => {
  let { url, method } = req;
  let [ path, queryString ] = url.split('?');
  let query = qs.parse(queryString);
  let result;

  switch (method) {
    case 'GET':
      switch (path) {
        //  GET to /math?add=40/16
        case '/math':
          //query: { add: '40/16' }
          result = MathPart(query);
          res.write(`${result}`);
          res.end('\n');
          break;
      }
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
  }
});

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
