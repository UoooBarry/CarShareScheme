
import DataRepository from './dataRepository';
import License from '../models/license';
import {Op} from 'sequelize';

class licenseRepository implements DataRepository {
  private static instance?: licenseRepository;

  async create(object: any) {
    try {
      const license = await License.create(object);
      return Promise.resolve(license);
    }catch(error){
        return Promise.reject(error);
    }
  }

  async getAll() {
        try{
            const licenses = await License.findAll({where: {}});
            return Promise.resolve(licenses);
        }catch(error){
            return Promise.reject(error);
        }
  }


  async get(id: number) {
    try{
        const license = await License.findOne({
            where: { user_id: id },
        });
        return Promise.resolve(license);
    }catch(error){
        return Promise.reject(error);
    }
  } 

  async updateImage(id: number) {
    try{
        const license = await License.findOne({
            where: { user_id: id },
        });
        license?.update({
          uploadedImage: license.uploadedImage + 1
        })
        return Promise.resolve(license);
    }catch(error){
        return Promise.reject(error);
    }

  } 

  async getPending() {
    try{
      const license = await License.findOne({
        where: { 
          uploadedImage: { [Op.gte]: 2 }, //Get validations that image upload >= 2
          isValidated: false //And not validated yet
        },
      });
      license?.update({
        uploadedImage: license.uploadedImage + 1
      })
      return Promise.resolve(license);
  }catch(error){
      return Promise.reject(error);
  }
  }
  


  static getInstance(): licenseRepository{
    if (!licenseRepository.instance) 
      licenseRepository.instance = new licenseRepository()
    
    return licenseRepository.instance;
  }
}

export default licenseRepository.getInstance();