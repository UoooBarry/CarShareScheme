/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 20/09/2020 *
 *************************************************/
import DataRepository from './dataRepository';
import License from '../models/license';
import Customer from '../models/customer'
import { Op } from 'sequelize';


class licenseRepository implements DataRepository {
  private static instance?: licenseRepository;

  async create(object: any) {
    try {
      const license = await License.create(object);
      return Promise.resolve(license);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getAll() {
    try {
      const licenses = await License.findAll({
        where: {},
      });
      return Promise.resolve(licenses);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getByUserId(user_id: number) {
    try {
      const result = await License.findOne({
        where: {
          user_id: user_id
        },
      });
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async update(id: number, data: any) {
    try {
      let license: any = await License.findOne({ where: { id: id } });
      await license.update(data);
      return Promise.resolve(true);
    } catch (err) {
      return Promise.reject(err);
    }
  }

  async get(id: number) {
    try {
      const license = await License.findOne({
        where: { user_id: id },
      });
      return Promise.resolve(license);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async updateImage(id: number) {
    try {
      const license = await License.findOne({
        where: { user_id: id },
      });
      license?.update({
        uploadedImage: license.uploadedImage + 1 //After upload image, the uploaded count + 1
      })
      return Promise.resolve(license);
    } catch (error) {
      return Promise.reject(error);
    }

  }

  async getPending() {
    try {
      const licenses = await License.findAll({
        where: {
          uploadedImage: { [Op.gte]: 2 }, //Get validations that image upload >= 2
          isValidated: false //And not validated yet         
        },
        include: [ //When get pending requests, need to show admin the user information
          {
            model: Customer,
            attributes: ['id', 'first_name', 'family_name']
          }
        ]
      });
      return Promise.resolve(licenses);
    } catch (error) {
      return Promise.reject(error);
    }
  }



  static getInstance(): licenseRepository {
    if (!licenseRepository.instance)
      licenseRepository.instance = new licenseRepository()

    return licenseRepository.instance;
  }
}

export default licenseRepository.getInstance();