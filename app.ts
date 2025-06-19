import { addAliases } from 'module-alias';
addAliases({
  '@interfaces': `${__dirname}/interface`,
  '@config': `${__dirname}/config`,
  '@middlewares': `${__dirname}/middlewares`,
});
import Koa from 'koa'
import config from '@config/index';
import serve from 'koa-static'
import { createContainer, Lifetime } from 'awilix'
import { loadControllers, scopePerRequest } from 'awilix-koa';
import historyApiFallback from 'koa2-connect-history-api-fallback';
import co from 'co'
import render from 'koa-swig'
const app = new Koa();
const { port, viewDir, memory, staticDir } = config;
const container = createContainer()

container.loadModules([`${__dirname}/services/.ts`], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
})

app.context.render = co.wrap(
  render({
    root: viewDir,
    autoescape: true,
    cache: <'memory' | false>memory,
    ext: 'html',
    writeBody: false,
  })
)

app.use(scopePerRequest(container))

app.use(serve(staticDir))

app.use(historyApiFallback({ index: '/', whiteList: ['/api'] }))

app.use(loadControllers(`${__dirname}/routers/*.ts`))

app.listen(port, () => {
  console.log(`🚀 server is running at ${port}`);
})