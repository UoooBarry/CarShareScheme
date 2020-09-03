/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 *
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