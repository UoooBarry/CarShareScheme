/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 * Updated in 03/09/2020 migrate to typescript    *
 *************************************************/


import Bill from '../models/bill';
import {RentStatus} from '../models/rent'

class billRepository{
   async create(bill: any){
       try {
           const result = await Bill.create(bill);
           return Promise.resolve(result);
         } catch (err) {
           return Promise.reject(err);
         }
    }

    async get(id:number){
      try {
        const bill:any = await Bill.findOne({ where: { id: id } });
        return Promise.resolve(bill);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    async pay(bill: Bill | undefined){
      try {
        if(!bill) throw 'No bill found';
        await bill.update({
          isPaid: true
        });
        return Promise.resolve(true);
      } catch (err) {
        return Promise.reject(err);
      }
    }
}

export default new billRepository();