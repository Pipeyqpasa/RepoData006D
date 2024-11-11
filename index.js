const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("almacen.json");
const midlewares = jsonServer.defaults();
const port = process.env.PORT || 10000;

server.use(midlewares);
server.use(router);
server.listen(port);