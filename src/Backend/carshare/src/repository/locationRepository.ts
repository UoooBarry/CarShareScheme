/**************************
 * @AUTHOR YONGQIAN HUANG
 * Updated in 03/09/2020 migrate to typescript *
 * Updated in 03/09/2020 Bach Dao add get location by ID*
 * Updated in 26/09/2020 Bach Dao return all locations base on user location*
 * Updated in 26/09/2020 Yongqian Huang return all locations optimized sorting*
 **************************/
import Location from '../models/location';
import Car from '../models/car';
import { calculateDistance } from '../helpers/distanceHelper';
import DataRepository from './dataRepository';
import ItemNotFound from '../exceptions/ItemNotFound';

class locationRepository implements DataRepository {
    maximumRange: number;
    private static instance?: locationRepository;

    constructor() {
        this.maximumRange = 20000; //COUNT IN M
    }

    async create(object: any) {
        try {
            const location = await Location.create({ object })
            return Promise.resolve(location);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getAll() {
        try {
            const locations = await Location.findAll({});
            return Promise.resolve(locations);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async update(id: number, data: any) {
        try {
          let location: any = await Location.findOne({ where: { id: id } });
          await location.update(data);
          return Promise.resolve(true);
        } catch (err) {
          return Promise.reject(err);
        }
      }

    async get(id: number) {
        try {
            const location: any = await Location.findOne({ where: { id: id } });
            return Promise.resolve(location);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    async getNearestAllLocations(from: string | undefined) {
        try {
            if (!from) throw new ItemNotFound('No from');
            let locations = await Location.findAll({});
            for await (const location of locations) { //Set distance to locations
                const result = await calculateDistance(from, location.address);
                const distance = result.distance.value;
                location.setDataValue('distance', distance);
            }
            
            locations = this.sortByDistance(locations); //Sort the return locations
            return Promise.resolve(locations);
        } catch (err) {
            return Promise.reject(err);
        }
    }

    private sortByDistance(locations: Location[]){
            //selection sort
        const length = locations.length;
        let min;
        for (let i = 0; i < length; i++) {
            min = i;
            //Check the rest of the array, any smaller?
            for (let j = i + 1; j < length; j++) {
                if (locations[j].getDataValue('distance') < locations[min].getDataValue('distance')) {
                    min = j;
                }
            }

            //Swap if not in position
            if (i !== min) {
                this.swap(locations, i, min);
            }
        }
        return locations;
    }

    private swap(items: Location[], i:number, j:number) {
        const temp = items[i]; //create temp var store i
        items[i] = items[j];    //replace with i with j
        items[j] = temp;    //replace j with i
    }

    async getAllValidateCars(from: string, sort: string | undefined, order: string | undefined) {
        try {
            let validLocation = [];
            if (!sort || !order) {
                sort = 'name';
                order = 'asc';
            }
            const locations = await Location.findAll({
                attributes: ['address'],
                include: [{ //get all available
                    model: Car,
                    where: { available: true }
                }],
                order: [
                    [Car, sort, order]
                ]
            });
            for await (const location of locations) {
                const result = await calculateDistance(from, location.address);
                const distance = result.distance.value;
                if (distance <= this.maximumRange) { //only push validate location base on input location
                    location.setDataValue('distance', distance);
                    validLocation.push(location);
                }
            }

            //Default sort by distance
            validLocation = this.sortByDistance(validLocation);
            return Promise.resolve(validLocation);

        } catch (error) {
            return Promise.reject(error);
        }
    }

    static getInstance(): locationRepository {
        if (!locationRepository.instance)
            locationRepository.instance = new locationRepository()

        return locationRepository.instance;
    }
}

export default locationRepository.getInstance();