'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.resources('user', '/user', controller.user);
  router.resources('blog', '/blog', controller.blog);
  router.resources('comment', '/comment', controller.comment);
  router.resources('tag', '/tag', controller.tag);
  require('./router/blog')(app);
  require('./router/user')(app);
  require('./router/comment')(app);
  require('./router/tag')(app);
};
