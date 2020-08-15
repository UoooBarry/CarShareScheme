 
/********************************************************************
 *         @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020          *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF CUSTOMER MODEL *
 ********************************************************************/



const Sequelize = require('sequelize');
const db = require('../config/database');

const customer = db.define('customers', {
    first_name: {
        type: Sequelize.STRING
    },
    family_name: {
        type: Sequelize.STRING
    },
    date_of_birth: {
        type: 'DATE'
    },
    contact_number: {
        type: Sequelize.INTEGER,
        unique : true
    },
    gender: {
        type: Sequelize.STRING
    }
})


module.exports = customer;