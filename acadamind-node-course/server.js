const http = require('http');
const routes = require('./routes');

//const server = http.createServer(routes.handler);
//console.log(routes.text)
const server = http.createServer(routes);

server.listen(3000);