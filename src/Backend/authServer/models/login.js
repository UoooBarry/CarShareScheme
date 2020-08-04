 
/*****************************************************************
 *        @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020        *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF LOGIN MODEL *
 *****************************************************************/


const Sequelize = require('sequelize');
const db = require('../config/database');
const Customer = require('./customer');

//scheme
const login = db.define('logins', {
    Email: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    }
});

login.belongsTo(Customer, {
    foreignKey: 'user_id'
});

module.exports = login;