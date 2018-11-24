'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Comment = app.model.define('comment', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    content: TEXT,
    ip: STRING(255),
    created_at: DATE,
    updated_at: DATE
  });

  Comment.associate = () => {
    app.model.Comment.belongsTo(app.model.Blog);
  };

  
  return Comment;
};
