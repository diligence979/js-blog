const Controller = require('egg').Controller;
const { toInt } = require('../util/util');

class BlogController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.Blog.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Blog.findById(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const blog = await ctx.model.Blog.create({ name, age });
    ctx.status = 201;
    ctx.body = blog;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const blog = await ctx.model.Blog.findById(id);
    if (!blog) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await blog.update({ name, age });
    ctx.body = blog;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const blog = await ctx.model.Blog.findById(id);
    if (!blog) {
      ctx.status = 404;
      return;
    }

    await blog.destroy();
    ctx.status = 200;
  }
}

module.exports = BlogController;