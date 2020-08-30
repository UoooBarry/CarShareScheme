/**************************
 * @AUTHOR YONGQIAN HUANG *
 **************************/
const Location = require('../models/location');
const Car = require('../models/car');
const {calculateDistance} = require('../helpers/distanceHelper');

class locationRepository{
    constructor(){
        this.maximumRange = 8000; //COUNT IN M
    }

    async getAll(){
        try{
            const locations = await Location.findAll({});
            return Promise.resolve(locations);
        }catch(error){
            return Promise.reject(error);
        }
    }

    async getAllValidateCars(from, sort, order){
        try{
            let validLocation = [];
            if(!sort || !order){
                sort = 'name';
                order = 'asc';
             }
            const locations = await Location.findAll({
                attributes: ['address'],
                include:[{
                    model: Car,
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
}

module.exports = new locationRepository();