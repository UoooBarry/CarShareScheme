/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated:  Yongqian Huang, 24/07/2020, Script for seeding items to database
*/

const Location = require('../models/location');
const Car = require('../models/car');
const Bill = require('../models/bill');
const Rent = require('../models/rent');
const Customer =require('../models/customer');

module.exports = {
    sync: async() => {
        await Customer.sync();
        await Location.sync();
        await Car.sync();
        await Bill.sync();
        await Rent.sync();
    },
    up: async() => {
        const cars = await Car.findAll({where:{}});
        if(cars.length === 0){
            const rmit = await Location.create({
                name: "RMIT",
                address: "330 Swanston St"
            });
    
            await Car.create({
                name: "Test Car",
                brand: "Test brand",
                model: "T1",
                location_id: rmit.id,
                purchase_date: new Date(),
                available: false
            });
        }
    },

    down: async() => {
        await Car.destroy({
            where: {
                name: "Test Car"
            }
        });
        await Location.create({
            where: {
                name: "RMIT"
            }
        })
    }
}

