var koa = require('koa');
var router = require('koa-router')();
var serve = require('koa-static');
var axios = require('axios');
var cors = require('koa-cors')

var app = new koa();

router
  .get('/api/latest', async ctx => {
      ctx.body = await axios.get('https://www.v2ex.com/api/topics/latest.json').then(res => res.data)
  })

  .get('/api/hot', async ctx => {
      ctx.body = await axios.get('https://www.v2ex.com/api/topics/hot.json').then(res => res.data)
  })
app
  .use(cors({"origin":"http://localhost:8080"}))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve('.'));

app.listen(3000)
