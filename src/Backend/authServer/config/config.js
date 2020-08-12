/*******************************************************
 *                                                      *
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020   *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, INIT CREATION *
 *                                                      *
 *******************************************************/

require('dotenv').config()

module.exports = {
  development: {
    DBHOST: process.env.DEV_DBHOST,
    DBPORT: process.env.DEV_DBPORT,
    DBNAME: process.env.DEV_DBNAME,
    DBUSER: process.env.DEV_DBUSER,
    DBPASS: process.env.DEV_DBPASS,
    NEXMO_KEY: process.env.NEXMO_KEY,
    NEXMO_SECRET: process.env.NEXMO_SECRET,
    NEXMO_ID: process.env.NEXMO_ID,
    dialect: 'postgres',
  },
  test: {
    DBHOST: process.env.TEST_DBHOST,
    DBPORT: process.env.TEST_DBPORT,
    DBNAME: process.env.TEST_DBNAME,
    DBUSER: process.env.TEST_DBUSER,
    DBPASS: process.env.TEST_DBPASS,
    NEXMO_KEY: process.env.NEXMO_KEY,
    NEXMO_SECRET: process.env.NEXMO_SECRET,
    NEXMO_ID: process.env.NEXMO_ID,
    dialect: 'postgres',
  },
  production: {
    DBHOST: process.env.PROD_DBHOST,
    DBPORT: process.env.PROD_DBPORT,
    DBNAME: process.env.PROD_DBNAME,
    DBUSER: process.env.PROD_DBUSER,
    DBPASS: process.env.PROD_DBPASS,
    NEXMO_KEY: process.env.NEXMO_KEY,
    NEXMO_SECRET: process.env.NEXMO_SECRET,
    NEXMO_ID: process.env.NEXMO_ID,
    dialect: 'postgres',
  },
}