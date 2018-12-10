if(process.env.NODE_ENV !== 'production')
  require('dotenv').load({path: './local.env'});

module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "transactions-app",
        host: "localhost"
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
    },
  production: {
      client: 'pg',
      connection: {
        database: process.env.RDS_DB,
        host: process.env.RDS_HOST,
        user: process.env.RDS_USER,
        password: process.env.RDS_PASSWORD,
        port: process.env.RDS_PORT
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
