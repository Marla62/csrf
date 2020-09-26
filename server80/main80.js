const Koa = require('koa');
const fs = require('fs');
const route = require('koa-route');
const app = new Koa();
// 静态资源目录对于相对入口文件index.js的路径
/**
 * 设置cookie信息
 * @param ctx
 */
const main = ctx => {
  ctx.response.type = 'html';
  ctx.cookies.set('name', 'jcx');
  ctx.cookies.set('password', '123456');
  ctx.response.body = fs.createReadStream(__dirname + '/template.html');
};

/**
 * 获取用户信息
 * @param ctx
 */
const getUserInfo = ctx => {
  let Referer = ctx.request.header.Referer;
  let name = ctx.cookies.get('name');
  let password = ctx.cookies.get('password');
  ctx.response.type = 'json';
  console.log(name, password, Referer);
  if(password === 'password'){
    ctx.response.body = { name: name,  password: password};
  } else {
    ctx.response.body = { name: 'cookie不对',  password: ''};
  }
}

app.use(route.get('/getUserInfo', getUserInfo));
app.use(route.get('/', main));

app.listen(80);
