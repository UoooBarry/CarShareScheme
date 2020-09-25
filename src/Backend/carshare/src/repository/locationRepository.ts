/**************************
 * @AUTHOR YONGQIAN HUANG
 * Updated in 03/09/2020 migrate to typescript *
 * Updated in 03/09/2020 Bach Dao get location by ID*
 * Updated in 26/09/2020 Bach Dao return all locations base on user location*
 **************************/
import Location from '../models/location';
import Car from '../models/car';
import { calculateDistance } from '../helpers/distanceHelper';
import DataRepository from './dataRepository';

class locationRepository implements DataRepository {
    maximumRange: number;
    private static instance?: locationRepository;

    constructor() {
        this.maximumRange = 20000000000; //COUNT IN M
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
            if (!from) throw 'No from';
            let sortedLocation = []; //array to be sorted
            let allDistance = []; //distance array to keep track with location array
            const locations = await Location.findAll({});
            for await (const location of locations) {
                const result = await calculateDistance(from, location.address);
                const distance = result.distance.value;
                location.setDataValue('distance', distance);
                //initialize array with all return location
                allDistance.push(distance);
                sortedLocation.push(location); 
            }
            //sort location array base on its distance to user location applying bubble sort algorithm
            let n = allDistance.length;
            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (allDistance[j] > allDistance[j + 1]) {//track array by the distance value
                        // swap both arr[j+1] and arr[i] (2 adjacent elements)  
                        let temp: number = allDistance[j];
                        let newLocation: any = sortedLocation[j];
                        allDistance[j] = allDistance[j + 1];
                        sortedLocation[j] = sortedLocation[j + 1]
                        allDistance[j + 1] = temp;
                        sortedLocation[j + 1] = newLocation;
                    }
                }
            }
            return Promise.resolve(sortedLocation);
        } catch (err) {
            return Promise.reject(err);
        }
    }
    async getNearestLocation(from: string | undefined) {
        try {
            if (!from) throw 'No from';
            let validLocation = [];
            const locations = await Location.findAll({});
            //Record the last element to sort the array
            let lowest = this.maximumRange;
            for await (const location of locations) {
                const result = await calculateDistance(from, location.address);
                const distance = result.distance.value;
                location.setDataValue('distance', distance);

                //Default sort by distance
                if (distance <= this.maximumRange) {
                    if (distance < lowest) {
                        lowest = distance;
                        validLocation.unshift(location);
                    } else {
                        validLocation.push(location);
                    }
                }
            }
            return Promise.resolve(validLocation);
        } catch (err) {
            return Promise.reject(err);
        }
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
                include: [{
                    model: <any>Car,
                    where: { available: true }
                }],
                order: [
                    [Car, sort, order]
                ]
            });
            //Record the last element to sort the array
            let lowest = this.maximumRange;
            for await (const location of locations) {
                const result = await calculateDistance(from, location.address);
                const distance = result.distance.value;
                //Default sort by distance
                if (distance <= this.maximumRange) {
                    if (distance < lowest) {
                        lowest = distance;
                        validLocation.unshift(location);
                    } else {
                        validLocation.push(location);
                    }
                }
            }

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