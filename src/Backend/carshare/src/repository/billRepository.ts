/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 * Updated in 03/09/2020 migrate to typescript    *
 *************************************************/


import Bill from '../models/bill';

class billRepository{
   async create(bill: any){
       try {
           const result = await Bill.create(bill);
           return Promise.resolve(result);
         } catch (err) {
           return Promise.reject(err);
         }
    }
}

export default new billRepository();