'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    user_name: STRING(255),
    user_psw: STRING(255),
    user_slogan: STRING(255),
    user_git: STRING(255),
    user_img_url: STRING(255),
    created_at: DATE,
    updated_at: DATE
  });

  User.associate = () => {
    app.model.User.hasMany(app.model.Blog, {
      as: 'blogs',
    });
  };

  return User;
};
