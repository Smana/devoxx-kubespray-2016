const fs = require('fs');

var config;

config = {
  production: {
    url: 'http://ghost.example.com',
    forceAdminSSL: true,
    database: {
      client: 'mysql',
      connection: {
        host: '{{ REPLACE WITH THE MYSQL SERVICE IP }}',
        user: 'ghost',
        password: 'myp4ss',
        database: 'ghost',
        charset: 'utf8',
        ssl: {
          ca: fs.readFileSync('/etc/ghost/ssl/database-ca.crt'),
        }
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
