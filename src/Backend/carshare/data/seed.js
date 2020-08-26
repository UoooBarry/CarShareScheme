/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated:  Yongqian Huang, 24/07/2020, Script for seeding items to database
    updated:  Shuyuan Zhang,26/08/2020,updated seed dummy value

*/
 
const Location = require("../models/location");
const Car = require("../models/car");
const Bill = require("../models/bill");
const Rent = require("../models/rent");
 
module.exports = {
  sync: async () => {
    await Location.sync();
    await Car.sync();
    await Bill.sync();
    await Rent.sync();
  },
  up: async () => {
    var cars = await Car.findAll({ where: {} });
 
    var location = await Location.findAll({ where: {} });
 
    //add dummy location
    if (location.length === 0) {
      await Location.create({
        name: "RMIT",
        address: "330 Swanston St",
      });
      await Location.create({
        name: "Dummy location 1",
        address: "Dummy address 1",
      });
      await Location.create({
        name: "Dummy location 2",
        address: "Dummy address 2",
      });
    }
    //check if car record is less than 20 then add dummy data
    if (cars.length < 20) {
      location = await Location.findAll({ where: {} });
      for (var i = 0; i < 20; i++) {
        await Car.create({
          name: "Dummy Car" + i,
          brand: "Dummy brand" + i,
          model: "Dummy model" + i,
          seats: 4,
          location_id: location[Math.floor(Math.random() * 3)].id,
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