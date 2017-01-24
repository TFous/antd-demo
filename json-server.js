
/**
 * 这个是json-server 留作备份用的，现在改用express 做mock
 *
 *
 *
 */

const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./src/data/db_arms.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, function () {
    console.log('--------db_arms-------- Server is running！！')
});



const server1 = jsonServer.create();
const router1 = jsonServer.router('./src/data/db_items.json');
const middlewares1 = jsonServer.defaults();

server1.use(middlewares1);
server1.use(router1);
server1.listen(3001, function () {
    console.log('--------db_items-------- Server is running')
});

