/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Init creation
*/

import {Sequelize} from 'sequelize-typescript';

import envConfigs from '../config/config';
import path from 'path';

import Location from '../models/location';
import Car from '../models/car';
import Bill from '../models/bill';
import Rent from '../models/rent';

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

//Build the relationship here
Location.hasMany(Car, {
    sourceKey: 'id',
    foreignKey: 'location_id'
})

Bill.hasOne(Rent,{
    sourceKey: 'id',
    foreignKey: 'bill_id'
})

export default db;