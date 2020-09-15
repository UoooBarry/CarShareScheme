
/****************************************************************************
 *             @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020              *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION TO CONNECT LOCAL DATABASE *
 ****************************************************************************/



import {Sequelize} from 'sequelize-typescript';

import envConfigs from '../config/config';
import path from 'path';


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
    }

    static getInstance() {
        if (!database.instance)
            database.createDatabaseInstance()
        return database.instance;
    }
}




export default database.getInstance();