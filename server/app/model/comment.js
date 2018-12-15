'use strict';

module.exports = app => {
  const { INTEGER, DATE, TEXT } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    content: TEXT,
    created_at: DATE,
    updated_at: DATE,
  });

  Comment.associate = () => {
    app.model.Comment.belongsTo(app.model.Blog);
    app.model.Comment.belongsTo(app.model.User);
  };

  return Comment;
};
