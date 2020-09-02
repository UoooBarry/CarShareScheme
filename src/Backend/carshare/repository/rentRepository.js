/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 *
 *************************************************/

 const Rent = require('../models/rent');

 class rentRepostiory{
     async create(rent){
        try {
            const result = await Rent.create(rent);
            return Promise.resolve(result);
          } catch (err) {
            return Promise.reject(err);
          }
     }
 }

 module.exports = new rentRepostiory();