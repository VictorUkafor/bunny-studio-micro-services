const dotenv = require('dotenv');

dotenv.config();

const {
  DATABASE_USERNAME, DATABASE_PASSWORD,
  DEV_DATABASE, PRO_DATABASE, DATABASE_HOST,
  DATABASE_PORT, DATABASE_DIALECT,
} = process.env;


module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DEV_DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
  },
  test: {
    username: null,
    password: null,
    database: null,
    host: null,
    port: null,
    dialect: null,
  },
  production: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: PRO_DATABASE,
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    dialect: DATABASE_DIALECT,
  }
};
