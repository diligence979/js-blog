'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TINYINT } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(255),
    password: STRING(255),
    authorities: TINYINT,
    created_at: DATE,
    updated_at: DATE,
  });

  User.associate = () => {
    app.model.User.hasMany(app.model.Blog, {
      as: 'blog',
    });
    app.model.User.hasMany(app.model.Tag, {
      as: 'tag',
    });
    app.model.User.hasMany(app.model.Comment, {
      as: 'comments',
    });
  };

  return User;
};
