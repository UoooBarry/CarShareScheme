
/********************************************************
 *   @AUTHOR: YONGQIAN HUANG, CREATED AT: 02/08/2020    *
 * @UPDATED: YONGQIAN HUANG, 02/08/2020, ADD BILL MODEL *
 ********************************************************/
    


import Sequelize from 'sequelize';
import db from '../config/db';

const bill = db.define('bills', {
    fee: {
        type: Sequelize.DOUBLE
    }
});


export default bill;