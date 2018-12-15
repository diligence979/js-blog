'use strict';

module.exports = app => {
  const { router } = app;
  // router.get('/api/blog', 'blog.index');
  router.post('/api/blog', 'blog.create');
  router.get('/api/blog/:id', 'blog.find');
  // router.get('/api/blog/:id/edit', 'blog.edit');
  // router.get('/api/tags', 'blog.tags');
  // router.del('/api/users/:user_id/blog/:id', 'blog.destroy');
  // router.put('/api/users/:user_id/blog/:id', 'blog.update');
  // router.get('/api/archive', 'blog.archive');
};
