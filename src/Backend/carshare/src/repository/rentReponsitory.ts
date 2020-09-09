/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 
 * Updated in 03/09/2020 migrate to typescript   *
 *************************************************/

import Rent from '../models/rent'

class rentRepostiory{
    async create(rent: any){
       try {
           const result = await Rent.create(rent);
           return Promise.resolve(result);
         } catch (err) {
           return Promise.reject(err);
         }
    }
}

export default new rentRepostiory();