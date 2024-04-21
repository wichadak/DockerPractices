var server = require('./server/server);
server.start({port: 8080, repo: repository}).then((svr) => {
  // we've got a running http server :)
});