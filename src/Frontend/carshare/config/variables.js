
let config = {
    authenticationURL : "http://localhost:4000/api",
    carshareURL : "http://localhost:3000/api",
    adminURL : "http://localhost:4000/api/admin"
}


if(process.env.NODE_ENV == 'production'){
    config = {
        authenticationURL : "http://ec2-54-252-177-185.ap-southeast-2.compute.amazonaws.com:4000/api",
        carshareURL : "http://ec2-54-252-177-185.ap-southeast-2.compute.amazonaws.com:3000/api",
        adminURL : "http://ec2-54-252-177-185.ap-southeast-2.compute.amazonaws.com:4000/api/admin"
    }
}


module.exports = config;