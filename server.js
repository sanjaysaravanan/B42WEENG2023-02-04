var http = require('node:http');

http.createServer({}, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);