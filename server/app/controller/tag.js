const Controller = require('egg').Controller;
const { toInt } = require('../util/util');

class TagController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    console.log(query)
    ctx.body = await ctx.model.Tag.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Tag.findById(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, age } = ctx.request.body;
    const tag = await ctx.model.Tag.create({ name, age });
    ctx.status = 201;
    ctx.body = tag;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tag = await ctx.model.Tag.findById(id);
    if (!tag) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await tag.update({ name, age });
    ctx.body = tag;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tag = await ctx.model.Tag.findById(id);
    if (!tag) {
      ctx.status = 404;
      return;
    }

    await tag.destroy();
    ctx.status = 200;
  }
}

module.exports = TagController;