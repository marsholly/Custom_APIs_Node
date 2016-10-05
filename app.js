'use strict'
const PORT = 8000;
const http = require('http');
const qs = require('queryString');

const MathPart = require('./tools/MathPart');
const Gravatar = require('./tools/Gravatar');
const Sentence = require('./tools/Sentence');
const Age = require('./tools/age');

const server = http.createServer((req, res) => {
  let { url, method } = req;
  let [ path, queryString ] = url.split('?');
  let query = qs.parse(queryString);
  let result;

  switch (method) {
    case 'GET':
      switch (path) {
        // GET to /math?add=40/16
        case '/math':
          //query: { add: '40/16' }
          result = MathPart(query);
          break;

         // GET to /gravatar?email=c@codinghouse.co
        case '/gravatar':
          //query: {email: 'c@codinghouse.co'}
          result = Gravatar(query);
          break;

        // GET to /sentence?analyzer=How are you
        case '/sentence':
          //query: { analyzer: 'How are you' }
          result = Sentence(query);
          break;

        // GET to /age?birthdate=1/2/2001
        case '/age':
          //query: {birthdate: '1/2/2001'}
          result = Age(query);
          break;

      }
      res.write(`${result}`);
      res.end('\n');
      break;
    default:
      res.statusCode = 404;
      res.end('Not Found');
  }
});

server.listen(PORT, err => {
  console.log(err || `Server listening on port ${PORT}`);
})
