const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from auth. container port - 3001, service port - 80.\n');
});

const port = 3001;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
