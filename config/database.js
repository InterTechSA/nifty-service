require('dotenv').config();
const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  connectionLimit: process.env.CONNECTION_LIMIT
};

module.exports = config;
