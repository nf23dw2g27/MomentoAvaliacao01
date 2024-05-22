/* eslint-disable no-undef */
const dotenv = require("dotenv");
const path = require("path");

console.log("Environment:", process.env.NODE_ENV);

dotenv.config({
    path: path.resolve(__dirname, '../environment/', `${process.env.NODE_ENV}.env`),
});

console.log("PORT:",process.env.PORT);

module.exports = {
    PORT: process.env.PORT || 3000,
    APP_PORT: process.env.APP_PORT || 3000,
    MODE: process.env.MODE || 'default',
    HOSTNAME: process.env.HOST || 'localhost',
    DB: {
        host: process.env.DBHOST || 'localhost',
        username: process.env.DBUSER || 'root',
        password: process.env.DBPASS || 'MA2024',
        database: process.env.DBDATABASE || 'auth',
        port: process.env.DBPORT || '3307',
        dialect: 'mysql'
    }
};
