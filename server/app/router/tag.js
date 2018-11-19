'use strict';

module.exports = app => {
  app.post('/api/tag', 'tag.create');
  app.del('/api/tag/:id', 'tag.destroy');
//   app.get('/api/tag', 'tag.list');
//   app.get('/api/tag/:id', 'tag.find');
  app.put('/api/tag/:id', 'tag.update');
};