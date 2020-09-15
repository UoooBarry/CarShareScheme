/**************************
 * @AUTHOR YONGQIAN HUANG
 * Updated in 03/09/2020 migrate to typescript *
 * Updated in 03/09/2020 Bach Dao get location by ID*
 **************************/
import Location from '../models/location';
import Car from '../models/car';
import { calculateDistance } from '../helpers/distanceHelper';
import DataRepository from './dataRepository';

class locationRepository implements DataRepository{
    maximumRange: number;
    private static instance?: locationRepository;
    
    constructor(){
        this.maximumRange = 20000; //COUNT IN M
    }

    async create(object: any) {
        try {
            const location = await Location.create({object})
            return Promise.resolve(location);
        }catch(error){
            return Promise.reject(error);
        }
    }

    async getAll(){
        try{
            const locations = await Location.findAll({});
            return Promise.resolve(locations);
        }catch(error){
            return Promise.reject(error);
        }
    }

    async get(id: number) {
        try {
          const location:any = await Location.findOne({ where: { id: id } });
          return Promise.resolve(location);
        } catch (err) {
          return Promise.reject(err);
        }
      }

    async getNearestLocation(from: string | undefined){
        try{
            if(!from) throw 'No from';
            let validLocation = [];
            const locations = await Location.findAll({});
            //Record the last element to sort the array
            let lowest = this.maximumRange;
            for await (const location of locations){
                const result = await calculateDistance(from, location.address);
                const distance = result.distance.value;
                location.setDataValue('distance', distance);
                //Default sort by distance
                if(distance <= this.maximumRange){
                    if(distance < lowest){
                        lowest = distance;
                        validLocation.unshift(location);
                    }else{
                        validLocation.push(location);
                    }
                }
            }
            return Promise.resolve(validLocation);
        }catch (err) {
          return Promise.reject(err);
        }
    }

    async getAllValidateCars(from: string, sort: string | undefined, order: string | undefined){
        try{
            let validLocation = [];
            if(!sort || !order){
                sort = 'name';
                order = 'asc';
             }
            const locations = await Location.findAll({
                attributes: ['address'],
                include:[{
                    model: <any>Car,
                    where: {available: true}
                }],
                order: [
                    [Car, sort, order]
                ]
            });
            //Record the last element to sort the array
            let lowest = this.maximumRange;
            for await (const location of locations){
                const result = await calculateDistance(from, location.address);
                const distance = result.distance.value;
                //Default sort by distance
                if(distance <= this.maximumRange){
                    if(distance < lowest){
                        lowest = distance;
                        validLocation.unshift(location);
                    }else{
                        validLocation.push(location);
                    }
                }
            }

            return Promise.resolve(validLocation);

        }catch(error){
            return Promise.reject(error);
        }
    }

    static getInstance(): locationRepository{
        if (!locationRepository.instance) 
            locationRepository.instance = new locationRepository()
        
        return locationRepository.instance;
    }
}

export default locationRepository.getInstance();