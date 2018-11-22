module.exports = app => {
    app.beforeStart(async () => {
      // 应用会等待这个函数执行完成才启动
    
    });
    app.once('server', server => {
      // websocket
    });
    app.on('error', (err, ctx) => {
      // report error
    });
    app.on('request', ctx => {
      // log receive request
    });
    app.on('response', ctx => {
      // ctx.starttime is set by framework
      const used = Date.now() - ctx.starttime;
      // log total cost
    });
  };