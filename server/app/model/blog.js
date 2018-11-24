'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Blog = app.model.define('blog', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    title: STRING(255),
    content: TEXT,
    description: STRING(255),
    created_at: DATE,
    updated_at: DATE
  });

  Blog.associate = () => {
    app.model.Blog.belongsTo(app.model.User);
    app.model.Blog.belongsTo(app.model.Tag);
    app.model.Blog.hasMany(app.model.Comment, {
      as: 'comments',
    });
  };

  return Blog;
};
