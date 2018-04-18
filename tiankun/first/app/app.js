import Koa from 'koa';
import logger from './logger';

const app = new Koa();

app.use(logger());
app.use(logger(':method :url'));

app.use((ctx, next) => {
  const start = new Date;
  console.log('app 1');
  return next().then(() => {
    const ms = new Date - start;
    console.log('app 1 callback');
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  });
});

app.use(async(ctx, next) => {
  const start = new Date();
  console.log('app 2');
  await  next();
  const ms = new Date() - start;
  console.log('app 2 callback');
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

app.use(ctx => {
  console.log('app 3');
  ctx.body = '你好，Koa2';
});

app.listen(3000);

export default app;
