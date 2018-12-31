const Koa = require('koa');
const app = new Koa();
// const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const PORT = 3000;

// app.use(serve(`${__dirname}/public`));

app.use(bodyParser());
app.use(router.routes());

app.listen(()=> console.log(`Now listening on port: ${PORT}`));
