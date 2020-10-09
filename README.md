<p align="center">
    <a> <img src='https://github.com/UoooBarry/CarShareScheme/blob/master/src/Frontend/carshare/public/img/brand.png' />  </a>
    <br>
    <b style="font-size:56px; font-weight:bold;">Car Share Scheme Team PBD</b>
</p>
<p align="center">
    <a> <img src='https://circleci.com/gh/UoooBarry/CarShareScheme.svg?style=svg&circle-token=00e3ee925caf65e6a13475f4adf60e2c6d2585eb' />  </a>
    <br>
    <a href='https://github.com/UoooBarry'> <img src='https://img.shields.io/badge/Contributor-UoooBarry-brightgreen' /> </a>
    <a href='https://github.com/noobfromvn99'> <img src='https://img.shields.io/badge/Contributor-noobfromvn99-brightgreen' /> </a>
    <a href='https://github.com/Simon12038057639'> <img src='https://img.shields.io/badge/Contributor-Simon-brightgreen' /> </a>
    <br>
     <a> <img src='https://img.shields.io/badge/Language-TypeScript-blue' /> </a>
    <a> <img src='https://img.shields.io/badge/Language-Javascript-yellow' /> </a>
     <a> <img src='https://img.shields.io/badge/Database-Postgresql-lightblue' /> </a>
     <a> <img src='https://img.shields.io/badge/Runtime-Node.Js-green' /> </a>
     <a> <img src='https://img.shields.io/badge/Framework-Express.Js-lightgrey' /> </a>
     <a> <img src='https://img.shields.io/badge/Framework-Vue.Js-brightgreen' /> </a>
</p>

## Technical stack
<img src='https://www.vippng.com/png/full/346-3469803_pevn-vue-js-node-js.png' />  
Postgres + Express.js + Vue.js + Node.js<br>
Backend and authroization servers are wirttern in typescript. Using sequelize library to interact with postgres. Frontend is written in Vue.js. using axios libary to interact with frontend.

## Run the servers in development mode
System requirement: Node Package Manager available
Under windows environment, you can just run `make up` to start up 2 backend servers locally.<br>
Before running the servers, ensure postgres is running, all package downloaded and config the .env files in the project, 
```
ACCESS_TOKEN_SECRET=4a94eb56ccb91df97f2ca632437947032d11b34c5d54c2fe54cb5b4f768c34690a54a92f7c4907eab1b132d0dd4e1158ac06b33b371daa352cefe3c503639650
REFRESH_TOKEN_SECRET=13d1ab6a3439cdd952b30e4bb0c2b0b00ffa68765e3d409adb47c83918d6229d1e90274f1d76735f41900c00ae33535018c6ad4c22739ea21cbb92555952460c
DEV_DBHOST=
DEV_DBPORT=
DEV_DBNAME=
DEV_DBUSER=
DEV_DBPASS=
NEXMO_KEY=
NEXMO_SECRET=
NEXMO_ID=
AWS_ACCESS_ID=
AWS_ACCESS_SECRET=
GOOGLE_MAPS_API_KEY=
``` 

### Manually start servers

In `src/Backend/authServer` and `src/Backend/carshare`, run `npm run start:dev` to start backend servers in development mode.

Same as backend, before run Frontend Server, make sure config .env file
```
VUE_APP_AUTH=http://localhost:4000/api
VUE_APP_CARSHARE=http://localhost:3000/api
VUE_APP_ADMIN=http://localhost:4000/api/admin
VUE_APP_GOOGLE_API=
```
In `src/Frontend/carshare` to start client side app in development mode.

## Deployment
### How to deploy
Workflow path: `.circleCi\config.yml`<br>
We have setup an auto deployment for  `release` branch workflow via circleCi. Authentication server and car share system server will be deployed to our aws ec2 instance automatically. <h3>Need to click approve in circleCi workflow.</h3>
The next thing to do is to just host the static frontend to S3 bucket. Run `npm run build` in dir 'src/Frontend/carshare'. Upload all the contents in the generated dist folder, to a public S3 bucket.

For more information, please check technical solution document - implementation instruction part

#### Release
* Release 1: 20/08/2020
* Release 2: 31/08/2020
* Release 3: 14/09/2020
* Release 4: 28/09/2020
* First Major Release: 7/10/2020
