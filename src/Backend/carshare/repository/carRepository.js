const Car = require('../models/car');

class loginRepository{
    async getAll(){
        try{
            const cars = await Car.findAll({where: {}});
            return Promise.resolve(cars);
        }catch(err){
            return Promise.reject(err);
        }
        
    }

    async get(id){
        try{
            const car = await Car.findOne({where: {id: id}});
            return Promise.resolve(car)
        }catch(err){
            return Promise.reject(err);
        }
    }
}


module.exports = new loginRepository();