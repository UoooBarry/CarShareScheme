/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Init creation
     * YONGQIAN HUANG   Updated in 03/09/2020 migrate to typescript *
*/

import {Sequelize} from 'sequelize-typescript';

import envConfigs from '../config/config';
import path from 'path';

import Location from '../models/location';
import Customer from '../models/customer';
import License from '../models/license';
import Comment from '../models/comment';
import Car from '../models/car';
import Bill from '../models/bill';
import Rent from '../models/rent';

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];

class database{
    static instance: Sequelize;
    private constructor(){
    }

    private static createDatabaseInstance() {
         /*Create Sequelize obj connect to db with current environment variables */
         if(!(config.DBHOST && config.DBNAME && config.DBUSER && config.DBPASS && config.DBPORT && config.dialect)) throw 'Database config missing';

         this.instance = new Sequelize({
             database: config.DBNAME,
             username: config.DBUSER,
             password: config.DBPASS,
             host: config.DBHOST,
             port: <number>parseInt(config.DBPORT) || 5432,
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
        
        Customer.hasOne(License, {
            sourceKey: 'id',
            foreignKey: 'user_id'
        })

        Car.hasMany(Comment, {
            sourceKey: 'id',
            foreignKey: 'car_id'
        })

        Customer.hasMany(Comment, {
            sourceKey: 'id',
            foreignKey: 'user_id'
        })
    }

    static getInstance() {
        if (!database.instance)
            database.createDatabaseInstance()
        return database.instance;
    }
}




export default database.getInstance();