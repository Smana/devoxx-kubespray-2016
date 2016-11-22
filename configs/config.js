const fs = require('fs');

var config;

config = {
  production: {
    url: 'http://ghost.example.com',
    database: {
      client: 'mysql',
      connection: {
        host: 'MYSQL_CLUSTER_IP',
        user: 'ghost',
        password: 'myp4ss',
        database: 'ghost',
        charset: 'utf8',
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: '/var/lib/ghost'
    },
  }
}

module.exports = config;
