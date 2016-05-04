'use strict';
const koa = require('koa');
const koaRouter = require('koa-router');

const app = koa();
const router = koaRouter();

router.get('/', function *() {
  this.body = 'Hello World';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

let port = process.env.PORT || 8080;
let ip = process.env.IP || '0.0.0.0';
app.listen(port, ip, () => {
  console.log(`Server listening at ${ip}:${port}`);
});