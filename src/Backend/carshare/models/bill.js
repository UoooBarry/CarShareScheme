
/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 * @UPDATED: YONGQIAN HUANG, 02/08/2020, ADD BILL MODEL *
 ********************************************************/
    



const Sequelize = require('sequelize');
const db = require('../config/db');

const bill = db.define('bills', {
    completed:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    fee: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});



module.exports = bill;