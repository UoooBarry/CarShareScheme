/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated:  Yongqian Huang, 24/07/2020, Script for seeding items to database
*/

const Location = require("../models/location");
const Car = require("../models/car");
const Bill = require("../models/bill");
const Rent = require("../models/rent");
const Customer = require("../models/customer");

module.exports = {
  sync: async () => {
    await Customer.sync();
    await Location.sync();
    await Car.sync();
    await Bill.sync();
    await Rent.sync();
  },
  up: async () => {
    const cars = await Car.findAll({ where: {} });
    if (cars.length === 0) {
      const rmit = await Location.create({
        name: "RMIT",
        address: "330 Swanston St",
      });
      for (var i = 1; i < 100; i++) {
        await Car.create({
          id: i,
          name: "Test Car" + i,
          brand: "Test brand" + i,
          model: "T" + i,
          seats: 4,
          location_id: rmit.id,
          purchase_date: new Date(),
          addons: "GPS, Air conditional, mp4",
          available: false,
          price: i + 20.5,
        });
      }
    }
  },

  down: async () => {
    await Car.destroy({
      where: {
        name: "Test Car",
      },
    });
    await Location.create({
      where: {
        name: "RMIT",
      },
    });
  },
};
