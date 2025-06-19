

import { GET, route } from 'awilix-koa'
import { Context } from 'interfaces/IKoa';

@route('/')
class PageController {
  @GET()
  async actionList (ctx: Context) {
    const data = await ctx.render('index')

    ctx.body =  data
  }
}

export default PageController