/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Init creation
*/

require('dotenv').config()

module.exports = {
  development: {
    DBHOST: process.env.DEV_DBHOST,
    DBPORT: process.env.DEV_DBPORT,
    DBNAME: process.env.DEV_DBNAME,
    DBUSER: process.env.DEV_DBUSER,
    DBPASS: process.env.DEV_DBPASS,
    dialect: 'postgres',
  },
  test: {
    DBHOST: process.env.TEST_DBHOST,
    DBPORT: process.env.TEST_DBPORT,
    DBNAME: process.env.TEST_DBNAME,
    DBUSER: process.env.TEST_DBUSER,
    DBPASS: process.env.TEST_DBPASS,
    dialect: 'postgres',
  },
  production: {
    DBHOST: process.env.PROD_DBHOST,
    DBPORT: process.env.PROD_DBPORT,
    DBNAME: process.env.PROD_DBNAME,
    DBUSER: process.env.PROD_DBUSER,
    DBPASS: process.env.PROD_DBPASS,
    dialect: 'postgres',
  },
}