/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 * Updated in 03/09/2020 migrate to typescript    *
 *************************************************/

import DataRepository from './dataRepository';
import Bill, { BillType } from '../models/bill';
import Rent, { RentStatus } from '../models/rent'
import Car from '../models/car';
import { Op } from 'sequelize';
import ItemNotFound from '../exceptions/ItemNotFound';

class billRepository implements DataRepository {
  instance?: DataRepository | undefined;
  private static instance?: billRepository;

  async create(bill: any) {
    try {
      const result = await Bill.create(bill);
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async get(id: number) {
    try {
      const bill: Bill | null = await Bill.findOne({
        where: { id: id },
        include: [{
          model: Rent,
          include: [{
            model: Car
          }]
        }]
      });
      return Promise.resolve(bill);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async pay(bill: Bill | null) {
    try {
      if (!bill) throw new ItemNotFound('No bill found');
      await bill.update({
        isPaid: true
      });
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getAll() {
    try {
      const bill = Bill.findAll({
        include: [{
          model: Rent,
          include: [{
            model: Car
          }]
        }]
      })
      return Promise.resolve(bill);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async update(id: number, data: any) {
    try {
      let bill: any = await Bill.findOne({ where: { id: id } });
      await bill.update(data);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getBy(caluse: any) {
    try {
      const bill = Bill.findAll(caluse);
      return Promise.resolve(bill);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getUnPaidBills() {
    try {
      const bill = Bill.findAll({
        where: {
          isPaid: false,
          type: BillType.RentFee, //get all unpaid rent bills
          createdAt: { [Op.lt]: new Date() } //which is overdue < today, detect every 24 hours
        },
        include: [{
          model: Rent,
          include: [{
            model: Car
          }]
        }]
      })
      return Promise.resolve(bill);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static getInstance(): billRepository {
    if (!billRepository.instance)
      billRepository.instance = new billRepository()

    return billRepository.instance;
  }

}

export default billRepository.getInstance();