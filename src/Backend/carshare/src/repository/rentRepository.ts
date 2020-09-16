/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 
 * Updated in 03/09/2020 migrate to typescript   *
 *************************************************/

import Rent, {RentStatus} from '../models/rent';
import Bill from '../models/bill';
import Car from '../models/car';
import Location from '../models/location';
import Customer from '../models/customer';
import DataRepository from './dataRepository';

class rentRepository implements DataRepository{
  private static instance?: rentRepository;

    async create(rent: any){
       try {
           const result = await Rent.create(rent);
           return Promise.resolve(result);
         } catch (err) {
           return Promise.reject(err);
         }
    }

    async get(rent_id?: number){
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
            attributes: ['id', 'name', 'location_id'],
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
          include: [
            {
              model: Bill
            },
            {
              model: Car,
              attributes: ['id', 'name', 'location_id'],
              include:[{
                model: Location
              }]
            },
          ],
          });
        return Promise.resolve(result);
      }catch (err) {
        return Promise.reject(err);
      }
    }

    async getAll(){
      try{
        const result = await Rent.findAll({
          order: [["id", "ASC"]],
          include: [
            {
              model: Bill
            },
            {
              model: Car,
              attributes: ['id', 'brand', 'model', 'location_id', 'available'],
              include:[{
                model: Location,
                attributes: ['id', 'name', 'address'],
              }]
            }
        ]
        });
      return Promise.resolve(result);
      }catch (err) {
        return Promise.reject(err);
      }
  }

  async pickUp(id: number) {
    try{
      const rent = await Rent.findOne({
        where: {id: id}
      });
      if(!rent) throw 'No rent error';
      await rent.update({status: RentStatus.InProgress});
      return Promise.resolve(true);
    }catch (err) {
      return Promise.reject(err);
    }
  }

    async return(id: number, location_id: number){
      try{
        const rent = await Rent.findOne({
          where: {id: id},
          include: [
            {
              model: Car
            }
          ]
        });
        if(!rent) throw 'No rent error';
        await rent.update({status: RentStatus.Completed});
        await rent.car.update({location_id: location_id, available: true});
        return Promise.resolve(true);
      }catch (err) {
        return Promise.reject(err);
      }
  }
  
  static getInstance(): rentRepository{
    if (!rentRepository.instance) 
      rentRepository.instance = new rentRepository()
    
    return rentRepository.instance;
  }

}

export default rentRepository.getInstance();