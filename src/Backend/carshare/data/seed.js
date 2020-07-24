/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated:  Yongqian Huang, 24/07/2020, Script for seeding items to database
*/

const Location = require('../models/location');
const Car = require('../models/car');

module.exports = {
    up: async() => {

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

