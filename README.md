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



## Run the servers in development mode
Under windows environment, you can just run `make up` to start up 2 backend servers locally.<br>
Before running the servers, ensure postgres is running. And config the .env files in the project, <a href='https://rmiteduau-my.sharepoint.com/:u:/r/personal/s3719368_student_rmit_edu_au/Documents/Capstone%20Project/secertkeys/Backend%20varibles/.env?csf=1&web=1&e=OhtbVB'>sample file</a> is in our team's onedrive.
### Manually start servers
In `src/Backend/authServer` and `src/Backend/carshare`, run `npm run start:dev` to start backend servers in development mode.
In `src/Frontend/carshare` to start client side app in development mode.

## Endpoints
### Customer information: 
`http://localhost:3000/api/customers/:id` `${this.$carshare}/customers/:id`
<br>

### Patch customer:
PATCH: `http://localhost:3000/api/customers/:id`<br>
        Please patch with authorization token in header, format: 'pbdAuth token' (Bearer + space + token)<br>
        The token is store in local storage, use `localStorage.getItem('authToken');` to fetch it.


## Deployment
### How to deploy
We have setup an auto deployment for  `release` branch workflow via circleCi. Authentication server and car share system server will be deployed to our aws ec2 instance automatically. <h3>Need to click approve in circleCi workflow.</h3><br>
The next thing to do is to just host the static frontend to S3 bucket. Run `npm run build` in dir 'src/Frontend/carshare'. Upload all the contents in the generated dist folder, to a public S3 bucket.
#### Release
Release 1: 20/08/2020
