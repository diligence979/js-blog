'use strict';

module.exports = app => {
  // app.router.post('/api/users', 'user.create');
  // app.router.del('/api/users/:id', 'user.destroy');
  // app.router.put('/api/users/:id', 'user.update');
  // app.router.post('/api/users/login', 'user.login');
  app.router.get('/api/users/:id', app.controller.user.find);
  // app.router.get('/api/users/:id/edit', 'user.find');
};