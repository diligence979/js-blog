const { Controller } = require('egg');
const { toInt } = require('../util/util');

class CommentController extends Controller {
  async index() {
    const { ctx } = this;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    console.log(query)
    ctx.body = await ctx.model.Comment.findAll(query);
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.model.Comment.findById(toInt(ctx.params.id));
  }

  async create() {
    const { ctx } = this;
    const { name, age } = ctx.request.body;
    const comment = await ctx.model.Comment.create({ name, age });
    ctx.status = 201;
    ctx.body = comment;
  }

  async update() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const comment = await ctx.model.Comment.findById(id);
    if (!comment) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await comment.update({ name, age });
    ctx.body = comment;
  }

  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const comment = await ctx.model.Comment.findById(id);
    if (!comment) {
      ctx.status = 404;
      return;
    }

    await comment.destroy();
    ctx.status = 200;
  }
}

module.exports = CommentController;