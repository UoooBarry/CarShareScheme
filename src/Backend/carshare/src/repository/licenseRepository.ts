
import DataRepository from './dataRepository';
import License from '../models/license';

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
  


  static getInstance(): licenseRepository{
    if (!licenseRepository.instance) 
      licenseRepository.instance = new licenseRepository()
    
    return licenseRepository.instance;
  }
}

export default licenseRepository.getInstance();