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
        name: "Cairnlea Shopping Center",
        address: "100 Furlong Rd, Cairnlea VIC 3023",
      });
      await Location.create({
        name: "Melbourne Central",
        address: "Cnr La Trobe St &, Swanston St, Melbourne VIC 3000",
      });
      await Location.create({
        name: "Flinders Street Railway Station",
        address: "Flinders St, Melbourne VIC 3000",
      });
    }
    //Seed car records
    if (cars.length === 0) {
      location = await Location.findAll({ where: {} });
      
        await Car.create({
          name: "Holden RS Barina",
          brand: "Holden",
          model: "Barina",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 11, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The RS Barina is definitely a cool little car. The 1.4-litre turbo engine has a lot of balls to it, especially with the six-speed manual gearbox. The handling and suspension are very good as well – it's not your average Barina.",
          price: 29.10 ,
        });
 
        await Car.create({
          name: "Nissan Tiida",
          brand: "Nissan",
          model: "Tiida",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 08, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "Overall a comfortable car to drive around town or on open road. But the competition has passed it in safety features and overall comfort. With a 1.8-litre four-cylinder, the car feels just as powerful as the 2.4-litre four-cylinder automatic 2008 Toyota Camry, but it's even better going uphills thanks to its six-speed manual gearbox.",
          price: 29.8,
        });

        await Car.create({
          name: "Suzuki Swift",
          brand: "Suzuki",
          model: "Swift",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 12, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "A GOOD FAMILY CAR WITH A GOOD TURN OF SPEED,VERY RELIABLE AND CHEAP TO RUN,LOOKS A BIT DIFFERENT TO THE AVERAGE HATCHBACK. IT'S A BIT OF A HARD RIDE DUE TO IT'S SPORTY NATURE. NOT MUCH ROOM IN THE BOOT BUT WITH THE REAR SEATS FOLDED YOU CAN CARRY PRETTY MUCH ANYTHING.",
          price: 26.8,
        });
        await Car.create({
          name: "Toyota Corolla",
          brand: "Toyota",
          model: "Corolla",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 09, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "If you are looking for a small car to drive around the city - the Corolla is it. SUPER reliable, economical on fuel and low running costs. It's quite zippy too with the 1.8L entire and CVT auto transmission.",
          price: 29.6,
        });
        await Car.create({
          name: "Hyundai Accent",
          brand: "Hyundai",
          model: "Accent",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 10, 30),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "the Hyundai Accent is a good subcompact car. ... The Accent delivers a palatable ride if the pavement isn't rough, and it gets good fuel economy with the available automatic transmission. On the downside, the Accent doesn't handle as well as some rivals, and its engine delivers underwhelming acceleration.",
          price: 27.8,
        });
        await Car.create({
          name: "Lamborghini Aventador",
          brand: "Lamborghini",
          model: "Aventador",
          seats: 2,
          doors: 2,
          luggages: 1,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 10, 28),
          addons: "GPS, Air Conditioning, MP4, Convertible, 0-100km/h within 2.8s",
          available: true,
          description: "Get Behind the wheels of one of the most famous supercars in the world. The Lamborghini Aventador LP700 is one of the world most famous supercars in the world. The price tag of a Lamborghini Aventador is one of the worlds most famous Supercars.With a price tag of a million dollars the Lamborghini Aventador is one of the worlds most sophisticated supercars ever build. Get a chance and drive one of the worlds most exquisite cars ever built today.",
          price: 2400,
        });
        await Car.create({
          name: "Porsche Cayenne",
          brand: "Porsche",
          model: "Cayenne",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 10, 09),
          addons: "GPS, Air Conditioning, MP4, Sky Window",
          available: true,
          description: "This significant reduction of fuel consumption throughout the entire range of Porsche Cayenne models results, among other things, from the introduction of Porsche’s new eight-speed Tiptronic S automatic transmission complete with Auto Start-Stop and an even wider range of gear increments, thermal management on the engine and transmission cooling circuit, recuperation of the onboard network, variable overrun cut-off and, not least, consistent reduction of weight and intelligent lightweight construction. ",
          price: 300,
        });
        await Car.create({
          name: "Porsche Boxter S 981",
          brand: "Porsche",
          model: "Boxter S 981",
          seats: 2,
          doors: 2,
          luggages: 1,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 06, 28),
          addons: "GPS, Air Conditioning, MP4, Convertible",
          available: true,
          description: "The new Porsche Boxster S – code named 981 – is without a doubt the best Boxster yet. Lighter, more muscular, more distinctive, and of course incredibly good looking, it’s pure Porsche at its best. One spin in this baby will take you straight to supercar heaven.",
          price: 630,
        });
        await Car.create({
          name: "Ferrari California T",
          brand: "Ferrari",
          model: "California T",
          seats: 2,
          doors: 2,
          luggages: 1,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 03, 09),
          addons: "GPS, Air Conditioning, MP4, Convertible",
          available: true,
          description: "The Ferrari California T Epitomises the Sublime Elegance, sportiness, versatility and exclusivity that have distinguished every California model since the 1950s. It is a car that's brimming with innovation that the expectations of discerning clients for whom fun behind the wheel is a priority. Driving this amazing Ferrari is a dream and only few people get to live out there dream.",
          price: 1300,
        }); 
        await Car.create({
          name: "Toyota Camry",
          brand: "Toyota",
          model: "Camry",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2019, 09, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "With a reputation for reliability, the Camry has been the favourite of government fleets, taxi drivers and the sensible for more than three decades. Over the past few generations, Toyota has risen to the challenge from rivals like the Mazda6 and the Volkswagen Passat with sharper styling and handling.",
          price: 36.6,
        }); 
        await Car.create({
          name: "Nissan X-Trail",
          brand: "Nissan",
          model: "X-Trail",
          seats: 5,
          doors: 4,
          luggages: 3,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2018, 09, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The  Nissan X-Trail is a comfortable car and a credible option for buyers wanting a spacious and practical family SUV. ... The Nissan X-Trail is a great SUV that offers plenty of space for all the family, a wide range of engine and gearbox choices and a relaxed, easy-driving experience.",
          price: 30.6,
        }); 
              
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