/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020 
 * Updated in 03/09/2020 migrate to typescript   *
 *         Bach Dao 10/09/2020, get all rent history*
 *************************************************/

import Rent from '../models/rent'
import Bill from '../models/bill';
class rentRepostiory {
  async create(rent: any) {
    try {
      const result = await Rent.create(rent);
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getAllByUserID(id: number) {
    try {
      const result: any = await Rent.findAll({
        where: { user_id: id },
        include: [{
          model: <any>Bill
        }], order: [["createdAt", "DESC"]],
      });
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

export default new rentRepostiory();