/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 
 * Updated in 03/09/2020 migrate to typescript   *
 *************************************************/

import Rent from '../models/rent';
import Bill from '../models/bill';
import Car from '../models/car';
import Location from '../models/location';
import Customer from '../models/customer';

class rentRepository{
    async create(rent: any){
       try {
           const result = await Rent.create(rent);
           return Promise.resolve(result);
         } catch (err) {
           return Promise.reject(err);
         }
    }

    async getById(rent_id?: string){
      try{
        if(!rent_id) throw 'No id'; 
        const result = await Rent.findOne({
          where:{id: rent_id},
          include: [{
            model: Bill
          },
          {
            model: Customer
          },
          {
            model: Car,
            include:[{
              model: Location
            }]
          }
        ]
        });
        return Promise.resolve(result);
      }catch (err) {
        return Promise.reject(err);
      }
    }

    async getByUserId(user_id: number){
      try{
        const result = await Rent.findAll({
            where: {
              user_id: user_id
            },
            include: [{
              model: Bill
            }]
          });
        return Promise.resolve(result);
      }catch (err) {
        return Promise.reject(err);
      }
    }
}

export default new rentRepository();