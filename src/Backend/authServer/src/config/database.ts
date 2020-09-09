
/****************************************************************************
 *             @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020              *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION TO CONNECT LOCAL DATABASE *
 ****************************************************************************/



import {Sequelize} from 'sequelize-typescript';

import envConfigs from '../config/config';
import path from 'path';


const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

/*Create Sequelize obj connect to db with current environment variables */
if(!(config.DBHOST && config.DBNAME && config.DBUSER && config.DBPASS && config.DBPORT && config.dialect)) throw 'No config file found';

const db = new Sequelize({
    database: config.DBNAME,
    username: config.DBUSER,
    password: config.DBPASS,
    host: config.DBHOST,
    port: <any>config.DBPORT,
    dialect: <any>config.dialect,
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    models: [path.resolve(__dirname, '../models')],
});


export default db;