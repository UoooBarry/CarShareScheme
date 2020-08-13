
let config = {
    authenticationURL : "http://localhost:4000/api",
    carshareURL : "http://localhost:3000/api"
}


if(process.env.NODE_ENV == 'production'){
    config = {
        authenticationURL : "http://localhost:4000/api",
        carshareURL : "http://localhost:3000/api"
    }
}


module.exports = config;