/* eslint-disable indent */
'use strict';
const sqlConfig = require('../config');
module.exports = appInfo => {
  const config = exports = {};
  // // config/config.${env}.js
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: '127.0.0.1',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: sqlConfig.localSql.username,
  //     // 密码
  //     password: sqlConfig.localSql.password,
  //     // 数据库名
  //     database: 'sophia_blog',
  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541849677852_5476';

  // add your config here
  config.middleware = [];

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'sophia_blog',
    username: sqlConfig.localSql.username,
    password: sqlConfig.localSql.password,
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://127.0.0.1' ],
  };

  config.cors = {
    credentials: true,
  }

  return config;
};