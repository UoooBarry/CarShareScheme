
/****************************************************************************
 *             @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020              *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION TO CONNECT LOCAL DATABASE *
 ****************************************************************************/


const { Sequelize } = require('sequelize');

const envConfigs =  require('../config/config');
const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];


const db = new Sequelize(config.DBNAME, config.DBUSER, config.DBPASS, {
    host: config.DBHOST,
    port: config.DBPORT,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports = db;