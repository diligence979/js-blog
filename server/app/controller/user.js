const Controller = require('egg').Controller;
const toInt = require('../util/util');


class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    console.log(query)
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findById(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    ctx.status = 201;
    ctx.body = await ctx.service.user.create(ctx.request.body);
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }

  async login() {
    const ctx = this.ctx;
    const {
      username,
      password,
    } = ctx.request.body;
    ctx.body = await ctx.service.user.login({
      username,
      password,
    });
  }
}

module.exports = UserController;