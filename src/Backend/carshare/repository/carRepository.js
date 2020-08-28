/******************************************************
 * @AUTHOR YONGQIAN HUANG, 19/08/2020, CAR SORT LOGIC *
 ******************************************************/


const Car = require('../models/car');
const Sequelize = require('sequelize');
const Location = require('../models/location');
const Op = Sequelize.Op;

class carRepository{
    async getAll(sort, order){
        try{
            var cars;
            /**If sortItem and sort is set, return a sorted result */
            if(!sort || !order){
               sort = 'name';
               order = 'asc'
            }
            cars = await Car.findAll({
                where:{
                    available: true
                },
                order: [
                    [sort, order], //sort by query item, query order
                ],
                include: [{
                    model: Location
                }]
            });

            
            return Promise.resolve(cars);
        }catch(err){
            return Promise.reject(err);
        }
    }

    /**Get by column and value */
    async getBy(value){
        try{
            const cars = await Car.findAll({
                where: {
                    [Op.or]:{
                        brand: {[Op.like]: '%' + value + '%'},
                        model: {[Op.like]: '%' + value + '%'}
                    },
                    available: true
                }
            })
            return Promise.resolve(cars);
        }catch(err){
            return Promise.reject(err);
        }
    }

    async get(id){
        try{
            const car = await Car.findOne({where: {id: id}});
            //Update the view number by 1
            car.update({
                viewed: car.viewed += 1
            })
            return Promise.resolve(car);
        }catch(err){
            return Promise.reject(err);
        }
    }

    async create(car){
        try{
            await Car.create(car);
            return Promise.resolve(true);
        }catch(err){
            return Promise.reject(err);
        }
    }

    async getBrands(){
        try{
            const brands = await Car.findAll({
                attributes: [Sequelize.fn('DISTINCT',Sequelize.col('brand')),'brand'],
                order: [
                    ['brand', 'ASC']
                ]
            })
            return Promise.resolve(brands);
        }catch(err){
            return Promise.reject(err);
        }
    }

}


module.exports = new carRepository();