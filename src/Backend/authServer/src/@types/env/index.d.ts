/* 
    Author: Yongqian Huang, created at: 04/09/2020
*/
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test';
        ACCESS_TOKEN_SECRET: string;
        DEV_DBHOST: string;
        DEV_DBPORT: string;
        DEV_DBNAME: string;
        DEV_DBUSER: string;
        DEV_DBPASS: string;
        PROD_DBHOST: string;
        PROD_DBPORT: string;
        PROD_DBNAME: string;
        PROD_DBUSER: string;
        PROD_DBPASS: string;
        NEXMO_KEY: string;
        NEXMO_SECRET: string;
        NEXMO_ID: string;
        AWS_ACCESS_ID: string;
        AWS_ACCESS_SECRET: string;
        GOOGLE_MAPS_API_KEY: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}