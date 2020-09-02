 
/********************************************************************
 *         @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020          *
 * @UPDATED: YONGQIAN HUANG, 23/07/2020, CREATION OF LOCATION MODEL *
 ********************************************************************/


const Sequelize = require('sequelize');
const db = require('../config/db');
const Car = require('./car');

const location = db.define('locations', {
    name: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    }
})

module.exports = location;