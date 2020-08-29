/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated:  Yongqian Huang, 24/07/2020, Script for seeding items to database
    updated:  Shuyuan Zhang,26/08/2020,updated seed dummy value
    updated:  Shuyuan Zhang,28/08/2020,updated the format and seed dummy value
    updated:  Shuyuan Zhang,29/08/2020,updated seed dummy value
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
          description: "the Hyundai Accent is a good subcompact car. The Accent delivers a palatable ride if the pavement isn't rough, and it gets good fuel economy with the available automatic transmission. On the downside, the Accent doesn't handle as well as some rivals, and its engine delivers underwhelming acceleration.",
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
          description: "The  Nissan X-Trail is a comfortable car and a credible option for buyers wanting a spacious and practical family SUV. The Nissan X-Trail is a great SUV that offers plenty of space for all the family, a wide range of engine and gearbox choices and a relaxed, easy-driving experience.",
          price: 30.6,
        }); 
        await Car.create({
          name: "KIA Rio",
          brand: "KIA",
          model: "Rio",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 02, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The Kia Rio is a good subcompact car. For 2020, it gains a new standard infotainment system equipped with Android Auto and Apple CarPlay. The Rio boasts good fuel economy and nimble handling, but some shoppers may find the ride too firm.",
          price: 39.6,
        });
        await Car.create({
          name: "BMW X1 XDRIVE 25I",
          brand: "BMW",
          model: "X1 XDRIVE 25I",
          seats: 5,
          doors: 4,
          luggages: 3,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 02, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The BMW X1 is a lovely car to drive, and easily fits a small family of four - more so than other small SUVs I've driven. There's a good amount of interior space and boot space, it looks solid and feels good to drive.",
          price: 120.6,
        });
        await Car.create({
          name: "SUBARU FORESTER",
          brand: "SUBARU",
          model: "FORESTER",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 01, 09),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The Forester is a well-rounded compact SUV. Its cabin is spacious enough to easily carry a family of four or five, and there's lots of room for cargo. With its great combination of quality and value, we named the Forester a finalist for our 2020 Best Compact SUV for the Money award.",
          price: 36.6,
        });
        await Car.create({
          name: "ISUZU MUX",
          brand: "ISUZU",
          model: "MUX",
          seats: 5,
          doors: 5,
          luggages: 4,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 02, 13),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The motor a bit noisy around town but not noticeable on long trips, the ride is quite firm. Handles well, with good pickup and ample power on the open road. Good aircon venting throughout the car. Mechanically very reliable no issues.",
          price: 38.9,
        });
        await Car.create({
          name: "KIA SPORTAGE SI 2WD",
          brand: "KIA",
          model: "SPORTAGE",
          seats: 5,
          doors: 4,
          luggages: 3,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 03, 14),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "J.D. Power gives the Sportage a ranking of 87/100 for quality and reliability, which exceeds the expectations of most. Resale value is also well above average, coming in at a ranking of 79/100, making the Sportage an excellent choice for those looking for a vehicle that they can depend on for years to come.",
          price: 43.9,
        });
        await Car.create({
          name: "KIA SPORTAGE SI 2WD",
          brand: "KIA",
          model: "SPORTAGE",
          seats: 5,
          doors: 4,
          luggages: 3,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 03, 14),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "J.D. Power gives the Sportage a ranking of 87/100 for quality and reliability, which exceeds the expectations of most. Resale value is also well above average, coming in at a ranking of 79/100, making the Sportage an excellent choice for those looking for a vehicle that they can depend on for years to come.",
          price: 43.9,
        });
        await Car.create({
          name: "FORD MUSTANG GT",
          brand: "FORD",
          model: "MUSTANG GT",
          seats: 4,
          doors: 2,
          luggages: 1,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 03, 19),
          addons: "GPS, Air Conditioning, MP4，Convertible",
          available: true,
          description: "The Ford Mustang is a good sports car. The Mustang's stable of engines starts with a turbocharged four-cylinder that puts out 310 horsepower and includes 460- and 480-horsepower V8 variants. Two Shelby high-performance models up the power ante.",
          price: 400,
        });
        await Car.create({
          name: "AUDI R8",
          brand: "DUDI",
          model: "R8",
          seats: 4,
          doors: 2,
          luggages: 1,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 07, 18),
          addons: "GPS, Air Conditioning, MP4,Sky Window",
          available: true,
          description: "The Audi R8 is a mid-engined supercar that competes with similarly exclusive models like the Porsche 911 Turbo and the Mercedes-AMG GT. However, if you're in the market for a supercar, the R8 is undoubtedly an appealing package thanks to its striking looks, excellent build quality and impressive performance.",
          price: 800,
        });
        await Car.create({
          name: "RANGE ROVER SPORT",
          brand: "RANGE ROVER",
          model: "SPORT",
          seats: 7,
          doors: 4,
          luggages: 3,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 05, 19),
          addons: "GPS, Air Conditioning, MP4,Sky Window",
          available: true,
          description: "You can have it with seven seats, for starters, even though it's slightly smaller overall. This makes it a solid rival for the Audi Q7, BMW X5 and Mercedes GLE. Despite its name, it doesn't exactly shrink around you like a sports car, but the Range Rover Sport is enjoyable to drive nevertheless.",
          price: 650,
        });
        await Car.create({
          name: "HOLDEN COMMODORE RS",
          brand: "HOLDEN",
          model: "COMMODORE RS",
          seats: 5,
          doors: 4,
          luggages: 2,
          gear: "automatic",
          location_id: location[Math.floor(Math.random() * 3)].id,
          purchase_date: new Date(2020, 05, 19),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The Commodore RS has a fuel consumption of 7.6 litres for every 100km. The liftback is a very swish shape, somewhere between a hatchback and a sedan. The steering was slightly stiff but nothing major, and the handling was good. It certainly looks better than an SUV.",
          price: 34.9,
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