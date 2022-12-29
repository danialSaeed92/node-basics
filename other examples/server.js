const http = require('http');
const fs = require('fs');
const path = require('path');
const _ = require('lodash')

const server = http.createServer((req, res) => {
  //lodash

  const num = _.random(250,300);
  console.log(num);

  //set header
  res.setHeader('Content-Type', 'text/html');
  // send html file.
  let webPath = '';
  switch (req.url) {
    case '/':
      webPath = path.join(__dirname, '..', 'views', 'index.html');
      res.statusCode = 200;
      break;
    case '/about':
      webPath = path.join(__dirname, '..', 'views', 'about.html');
      res.statusCode = 200;
      break;
    case '/about-me':
      webPath = path.join(__dirname, '..', 'views', 'about.html');
      res.statusCode = 301;
      res.setHeader('Location', 'about')
      break;
    default:
      webPath = path.join(__dirname, '..', 'views', '404.html');
      res.statusCode = 404;
      break;
  }
  fs.readFile(webPath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    res.end(data);
  })



});

server.listen(9000, 'localhost', () => {
  console.log('listening for request on port 9000')
})
