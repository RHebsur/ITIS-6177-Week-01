const http = require('http');
const port = 2000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello world application!');
});

server.listen(port, hostname, function(error) {
    if(error){
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port '+ port);
    }
});