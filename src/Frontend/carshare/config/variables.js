
let config = {
    authenticationURL : "http://localhost:4000/api",
    carshareURL : "http://localhost:3000/api"
}


if(process.env.NODE_ENV == 'production'){
    config = {
        authenticationURL : "http://ec2-54-252-177-185.ap-southeast-2.compute.amazonaws.com:4000/api",
        carshareURL : "http://ec2-54-252-177-185.ap-southeast-2.compute.amazonaws.com:3000/api"
    }
}


module.exports = config;