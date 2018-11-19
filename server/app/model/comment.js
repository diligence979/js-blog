'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const Comment = app.model.define('comment', {
    comment_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    comment_content: TEXT,
    comment_ip: STRING(255),
    created_at: DATE,
    updated_at: DATE
  });

  Comment.associate = () => {
    app.model.Comment.belongsTo(app.model.Blog);
  };

  
  return Comment;
};
