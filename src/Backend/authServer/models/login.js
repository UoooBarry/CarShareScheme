/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Creation of login model
*/

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