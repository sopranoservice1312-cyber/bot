const http = require('http');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');

const serve = serveStatic('.', { index: ['panel.html'] });

const server = http.createServer((req, res) => {
  serve(req, res, finalhandler(req, res));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
