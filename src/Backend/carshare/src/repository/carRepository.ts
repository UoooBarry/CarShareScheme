/******************************************************
 * @AUTHOR YONGQIAN HUANG, 19/08/2020, CAR SORT LOGIC *
 * updated in 27/09/2020 Bach Dao, get all cars/ car by id *
 *                                    
 * Yongqian Huang: updated in 03/09/2020 migrate to typescript       
 * Yongqian Huang: updated in 25/09/2020 filter helpers*
 * Yongqian Huang: updated in 25/09/2020 fixed most viewed*
 ******************************************************/

import Car from '../models/car';
import Sequelize from 'sequelize';
const Op = Sequelize.Op;
import Location from '../models/location';
import DataRepository from './dataRepository';
import ItemNotFound from '../exceptions/ItemNotFound';
import Comment from '../models/comment';
import Customer from '../models/customer';

class carRepository implements DataRepository {
  private static instance?: carRepository;

  async getAll() {
    try {
      const cars = await Car.findAll(
        {
          order: [["name", "ASC"]],
        },
      );
      return Promise.resolve(cars);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  /**Get by column and value */
  async getBy(word: string) {
    //Change the search word to lower case
    const search = word.toLowerCase();
    //Create a where clause for case insensitive search
    const whereClause = {
      [Op.or]: [
        Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("brand")), {
          [Op.like]: `%${search}%`,
        }),
        Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("model")), {
          [Op.like]: `%${search}%`,
        }),
        Sequelize.where(Sequelize.fn("LOWER", Sequelize.col("gear")), {
          [Op.like]: `%${search}%`,
        })
      ],
    };
    try {
      const cars = await Car.findAll({
        where: whereClause

      });
      return Promise.resolve(cars);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async get(id: number) {
    try {
      const car: any = await Car.findOne({
        where: { id: id },
        include: [
          {
            model: Comment,
            include: [
              {
                model: Customer,
                attributes: ['id', 'first_name', 'family_name']
              }
            ]
          },
          {
            model: Location,
            attributes: ['name', 'address']
          }
        ]
      });
      //Update the view number by 1
      if (car) {
        car.update({
          viewed: (car.viewed += 1),
        });
      } else {
        throw new ItemNotFound('Car not found');
      }
      return Promise.resolve(car);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getMostViewed() {
    try {
      const cars = await Car.findAll({
        where: {
          'viewed': {
            [Op.ne]: null
          }
        },
        attributes: ["id"],
        order: [["viewed", "DESC"]],
        limit: 3
      });

      //Map cars with id, return array of id that is popular
      const carsArr = cars.map((car: any) => {
        return car.id;
      })

      return Promise.resolve(carsArr);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async create(car: any) {
    try {
      await Car.create(car);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async getBrands() {
    try {
      const brands = await Car.findAll({
        attributes: <any>[Sequelize.fn("DISTINCT", Sequelize.col("brand")), "brand"],
        order: [["brand", "ASC"]],
      });
      return Promise.resolve(brands);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async update(id: number, data: any) {
    try {
      let car: any = await Car.findOne({ where: { id: id } });
      await car.update(data);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async remove(id: number) {
    try {
      await Car.destroy({ where: { id: id } });
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async deactivate(id: number) {
    try {
      const car = await Car.findOne({ where: { id: id } });
      await car?.update({
        available: false
      })
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  static getInstance(): carRepository {
    if (!carRepository.instance)
      carRepository.instance = new carRepository()

    return carRepository.instance;
  }
}

export default carRepository.getInstance();
