const Sequelize = require('sequelize');
const db = require('../config/database');


//scheme
const login = db.define('logins',{
    Email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    user_id:{
        type: Sequelize.INTEGER
    }
});

module.exports = login;