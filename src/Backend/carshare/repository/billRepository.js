/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 *
 *************************************************/


 const Bill = require('../models/bill');

 class billRepository{
    async create(bill){
        try {
            const result = await Bill.create(bill);
            return Promise.resolve(result);
          } catch (err) {
            return Promise.reject(err);
          }
     }
 }

 module.exports = new billRepository();