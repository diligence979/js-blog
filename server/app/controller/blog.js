'use strict';

const { Controller } = require('egg');
const { toInt } = require('../util/util');

class BlogController extends Controller {
  // async index() {
  //   const {
  //     ctx,
  //   } = this;
  //   const res = await ctx.service.blog.index(ctx.query);
  //   ctx.body = res;
  // }

  async create() {
    const { ctx } = this;
    const body = ctx.request.body;
    const created = await ctx.service.blog.create(body);
    ctx.status = 201;
    ctx.body = created;
  }

  async find() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.blog.find(id);
  }

  // async show() {
  //   const { ctx } = this;
  //   ctx.body = await ctx.model.Blog.findById(toInt(ctx.params.id));
  // }

  // async update() {
  //   const { ctx } = this;
  //   const id = toInt(ctx.params.id);
  //   const blog = await ctx.model.Blog.findById(id);
  //   if (!blog) {
  //     ctx.status = 404;
  //     return;
  //   }

  //   const { name, age } = ctx.request.body;
  //   await blog.update({ name, age });
  //   ctx.body = blog;
  // }

  // async destroy() {
  //   const { ctx } = this;
  //   const id = toInt(ctx.params.id);
  //   const blog = await ctx.model.Blog.findById(id);
  //   if (!blog) {
  //     ctx.status = 404;
  //     return;
  //   }

  //   await blog.destroy();
  //   ctx.status = 200;
  // }
}

module.exports = BlogController;
