const http = require('http');

http.createServer((req, res) => {
  res.write("Hello Hari DevOps 🚀");
  res.end();
}).listen(3000);
