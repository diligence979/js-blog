'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS, unique} = require('../util/util');

class BlogService extends Service {
    async index({
        offset = 0,
        limit = 5,
        order_by = 'created_at',
        order = 'DESC',
        tags = '',
        tag_id = '',
      }) {
        const { Op } = this.app.Sequelize;
        const options = {
          offset: parseInt(offset),
          limit: parseInt(limit),
          order: [
            [ order_by, order.toUpperCase() ],
          ],
        };
        if (tags) {
          options.where = {
            tags: {
              [Op.like]: `%${tags}%`,
            },
          };
        }
        // if (catalog_id) {
        //   options.where = {
        //     catalog_id: parseInt(tag_id, 10),
        //   };
        // }
        const res = await this.ctx.model.Blog.findAndCountAll(Object.assign(options, {
          include: [{
            model: this.ctx.model.User,
            as: 'user',
            attributes: [ 'id', 'username' ],
            include: [{
              model: this.ctx.model.Authority,
              attributes: [ 'id', 'name' ],
            }],
          }, {
            model: this.ctx.model.Catalog,
            as: 'catalog',
          }],
        }));
        return Object.assign(SUCCESS, {
          data: res,
        });
    }
}

module.exports = BlogService;
