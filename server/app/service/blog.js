'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS, unique } = require('../util/util');

class BlogService extends Service {
  async create(blog) {
    const { ctx } = this;
    try {
      const res = await this.ctx.model.Blog.create(blog);
      return Object.assign({
        data: res,
      }, SUCCESS);
    } catch (error) {
      ctx.status = 500;
      throw (error);
    }
  }

  async find(id) {
    const blog = await this.ctx.model.Blog.findById(id, {
      include: [{
        model: this.ctx.model.User,
        as: 'user',
        attributes: [ 'id', 'username' ],
      }, {
        model: this.ctx.model.Comment,
        as: 'comment',
        attributes: [ 'id', 'content', 'created_at', 'updated_at' ],
        include: [{
          model: this.ctx.model.User,
          attributes: [ 'username' ],
        }],
      }, {
        model: this.ctx.model.Tag,
        as: 'tag',
        attributes: [ 'id', 'name', 'created_at', 'updated_at' ],
        include: [{
          model: this.ctx.model.User,
          attributes: [ 'username' ],
        }],
      }],
    });
    blog.set('readSize', blog.get('readSize') + 1);
    blog.increment('readSize').then().catch(err => {
      console.log(err);
    });
    if (!blog) {
      return Object.assign(ERROR, {
        msg: 'blog not found',
      });
    }
    return Object.assign(SUCCESS, {
      data: blog,
    });
  }
}

module.exports = BlogService;
