'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Tag = app.model.define('tag', {
    tag_id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    tag_name: STRING(255),
    created_at: DATE,
    updated_at: DATE
  }); 

  Tag.associate = () => {
    app.model.Tag.belongsTo(app.model.User);
    app.model.Tag.hasMany(app.model.Blog);
  };

  return Tag;
};
