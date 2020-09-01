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
    if (location.length === 0 && process.env.NODE_ENV !== 'test') {
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
    if (cars.length === 0 && process.env.NODE_ENV !== 'test') {
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
          description: "The Holden Barina is a subcompact automobile sold between 1985 and 2018 by Holden in Australasia. Each of the six generations have been badge-engineered versions of various General Motors vehicles, namely Suzuki Cultus, Opel Corsa, and Daewoo Kalos. Barina is an Australian aboriginal word meaning 'summit'.<br><br>The RS Barina is definitely a cool little car. The 1.4-litre turbo engine has a lot of balls to it, especially with the six-speed manual gearbox. The handling and suspension are very good as well – it's not your average Barina.",
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
          purchase_date: new Date(2013, 08, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The Nissan Tiida is a compact car produced by the Japanese manufacturer Nissan since 2004, spanning two generations. For the first generation of Tiida manufactured between 2004 and 2012, the series is designated C11 and was sold as a five-door hatchback and four-door sedan.<br><br>Overall a comfortable car to drive around town or on open road. But the competition has passed it in safety features and overall comfort. With a 1.8-litre four-cylinder, the car feels just as powerful as the 2.4-litre four-cylinder automatic 2008 Toyota Camry, but it's even better going uphills thanks to its six-speed manual gearbox.",
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
          description: "The Suzuki Swift (Japanese: スズキ・スイフト, Suzuki Suifuto) is a subcompact car produced by Suzuki. The Suzuki Swift is classified as a B-segment marque in the European single market, a segment referred to as a Supermini in British isles. Prior to this, the 'Swift' nameplate had been applied to the Suzuki Cultus in numerous export markets. <br><br>A GOOD FAMILY CAR WITH A GOOD TURN OF SPEED,VERY RELIABLE AND CHEAP TO RUN,LOOKS A BIT DIFFERENT TO THE AVERAGE HATCHBACK. IT'S A BIT OF A HARD RIDE DUE TO IT'S SPORTY NATURE. NOT MUCH ROOM IN THE BOOT BUT WITH THE REAR SEATS FOLDED YOU CAN CARRY PRETTY MUCH ANYTHING.",
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
          description: "The Toyota Corolla (Japanese: トヨタ・カローラ, Toyota Karōra) is a line of subcompact and compact cars manufactured by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then.<br><br>If you are looking for a small car to drive around the city - the Corolla is it. SUPER reliable, economical on fuel and low running costs. It's quite zippy too with the 1.8L entire and CVT auto transmission.",
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
          description: "The 2020 Hyundai Accent is a perfectly serviceably subcompact car. It has ample passenger space, offers some intuitive tech features, and can get impressive fuel economy. However, it lacks the athleticism and cargo space of some rivals<br><br>The Hyundai Accent is a good subcompact car. The Accent delivers a palatable ride if the pavement isn't rough, and it gets good fuel economy with the available automatic transmission. On the downside, the Accent doesn't handle as well as some rivals, and its engine delivers underwhelming acceleration.",
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
          description: "Get Behind the wheels of one of the most famous supercars in the world. The Lamborghini Aventador LP700 is one of the world most famous supercars in the world. The price tag of a Lamborghini Aventador is one of the worlds most famous Supercars.With a price tag of a million dollars the Lamborghini Aventador is one of the worlds most sophisticated supercars ever build.<br><br> Get a chance and drive one of the worlds most exquisite cars ever built today.",
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
          description: "The Porsche Cayenne is a mid-size luxury crossover sport utility vehicle produced by the German manufacturer Porsche since 2002, with North American sales beginning in 2003. It is the first V8-engined vehicle built by Porsche since 1995, when the Porsche 928 was discontinued.<br><br>This significant reduction of fuel consumption throughout the entire range of Porsche Cayenne models results, among other things, from the introduction of Porsche’s new eight-speed Tiptronic S automatic transmission complete with Auto Start-Stop and an even wider range of gear increments, thermal management on the engine and transmission cooling circuit, recuperation of the onboard network, variable overrun cut-off and, not least, consistent reduction of weight and intelligent lightweight construction.",
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
          description: "The 981 was the first Boxster/Cayman to use electronically assisted steering, and the parking brake in the car uses an electronic linkage. The instrument cluster features a 4.6' TFT color screen in conjunction with various sensors that can display accurate engine temperature, oil temperature and oil pressure.<br><br>The new Porsche Boxster S – code named 981 – is without a doubt the best Boxster yet. Lighter, more muscular, more distinctive, and of course incredibly good looking, it’s pure Porsche at its best. One spin in this baby will take you straight to supercar heaven.",
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
          description: "The Ferrari California T is the Italian carmaker's entry level model and it's more of an 'everyday driving car' than something like the hardcore 488 GTB or F12 Berlinetta... 9.5/10.<br><br>The Ferrari California T Epitomises the Sublime Elegance, sportiness, versatility and exclusivity that have distinguished every California model since the 1950s. It is a car that's brimming with innovation that the expectations of discerning clients for whom fun behind the wheel is a priority. <br><br>Driving this amazing Ferrari is a dream and only few people get to live out there dream.",
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
          purchase_date: new Date(2020, 03, 01),
          addons: "GPS, Air Conditioning, MP4",
          available: true,
          description: "The 2020 Toyota Camry is a midsize sedan available in six different trim levels: L, LE, SE, XSE, XLE and TRD. Most trims come standard with a 2.5-liter four-cylinder engine that generates 203 horsepower and 184 lb-ft of torque (add 3 hp and 2 lb-ft for XSE models).<br><br>With a reputation for reliability, the Camry has been the favourite of government fleets, taxi drivers and the sensible for more than three decades. Over the past few generations, Toyota has risen to the challenge from rivals like the Mazda6 and the Volkswagen Passat with sharper styling and handling.",
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
          description: "The world's most popular SUV, the mid-sized Nissan X-Trail is spacious and good to drive, with all but the least costly variant offering part-leather trim and satellite navigation. Seven-seat versions are available, as is all-wheel-drive, and a gutsy diesel engine. Autonomous emergency braking is standard.<br><br>The  Nissan X-Trail is a comfortable car and a credible option for buyers wanting a spacious and practical family SUV. The Nissan X-Trail is a great SUV that offers plenty of space for all the family, a wide range of engine and gearbox choices and a relaxed, easy-driving experience.",
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
          description: "The Kia Rio is a subcompact car produced by the South Korean manufacturer Kia Motors since November 1999 and now in its fourth generation. Body styles have included a three and five-door hatchback and four-door sedan, equipped with inline-four gasoline and diesel engines, and front-wheel drive.<br>br>The Kia Rio is a good subcompact car. For 2020, it gains a new standard infotainment system equipped with Android Auto and Apple CarPlay. The Rio boasts good fuel economy and nimble handling, but some shoppers may find the ride too firm.",
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
          description: "The '25i' refers to the 2.0-litre turbocharged petrol engine that makes 170kW at 6000rpm and 350Nm at 1450–4500rpm. That early delivery of torque, aided by the twin-scroll (what BMW calls 'TwinPower') turbocharger, helps the X1 feel grunty when moving.<br><br>The BMW X1 is a lovely car to drive, and easily fits a small family of four - more so than other small SUVs I've driven. There's a good amount of interior space and boot space, it looks solid and feels good to drive.",
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
          description: "The Forester truly feels fit for the family, big or small, town or country. Comfort, technology and safety in a boxy SUV style feels like a winning combination. And when functionality and a lengthy equipment list trumps style, this is your car.<br><br>The Forester is a well-rounded compact SUV. Its cabin is spacious enough to easily carry a family of four or five, and there's lots of room for cargo. With its great combination of quality and value, we named the Forester a finalist for our 2020 Best Compact SUV for the Money award.",
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
          description: "On or off-road, the 7-seat MU-X performs with perfection. Thanks to its exclusive 3.0L Isuzu turbo diesel engine power, effortless 430Nm of torque and intuitive 6 speed transmission, the MU-X has what it takes to get you across town or around Australia.<br><br>The motor a bit noisy around town but not noticeable on long trips, the ride is quite firm. Handles well, with good pickup and ample power on the open road. Good aircon venting throughout the car. Mechanically very reliable no issues.",
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
          description: "The Sportage is a good used compact SUV. It comes with straightforward technology in its adult-friendly cabin and boasts solid safety scores. While competitors like the Mazda CX-5 are more engaging to drive, the Sportage offers a balanced ride.<br><br>J.D. Power gives the Sportage a ranking of 87/100 for quality and reliability, which exceeds the expectations of most. Resale value is also well above average, coming in at a ranking of 79/100, making the Sportage an excellent choice for those looking for a vehicle that they can depend on for years to come.",
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
          addons: "GPS, Air Conditioning, MP4, Convertible",
          available: true,
          description: "Here are some adjectives for mustang: wild-eyed graceful, ther original, toughest, best, fleetest and most intelligent, real spirited, red classic, two-door yellow, proud tan, foal or wild, red, vintage, sorriest old, unmanageable little, incredibly gaunt, souped-up red, swiftest little, large, coal-black, brand-new.<br><br>The Ford Mustang is a good sports car. The Mustang's stable of engines starts with a turbocharged four-cylinder that puts out 310 horsepower and includes 460- and 480-horsepower V8 variants. Two Shelby high-performance models up the power ante.",
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
          description: "The Audi R8 is a mid-engine, 2-seater sports car, which uses Audi's trademark quattro permanent all-wheel drive system. It was introduced by the German car manufacturer Audi AG in 2006.<br><br>The Audi R8 is a mid-engined supercar that competes with similarly exclusive models like the Porsche 911 Turbo and the Mercedes-AMG GT. However, if you're in the market for a supercar, the R8 is undoubtedly an appealing package thanks to its striking looks, excellent build quality and impressive performance.",
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
          description: "With sportier design cues and a powerful, muscular stance, Range Rover Sport is designed for impact. Cleaner, more dynamic, there's a contemporary feel everywhere you look—from the Range Rover Sport grille, redesigned bonnet vents to the refined, yet sporty wheel options.<br><br>You can have it with seven seats, for starters, even though it's slightly smaller overall. This makes it a solid rival for the Audi Q7, BMW X5 and Mercedes GLE. Despite its name, it doesn't exactly shrink around you like a sports car, but the Range Rover Sport is enjoyable to drive nevertheless.",
          price: 650,
        });
        await Car.create({
          name: " ",
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
          description: "Powered by a 2.0-litre turbocharged inline four-cylinder petrol engine, the Commodore RS makes 191kW of power (at 5500rpm) and 350Nm of torque (between 3000-4000rpm). ... The nine-speed auto transmission also proved a likeable unit, rarely if ever, finding itself out of whack with the needs of the ZB Commodore.<br><br>The Commodore RS has a fuel consumption of 7.6 litres for every 100km. The liftback is a very swish shape, somewhere between a hatchback and a sedan. The steering was slightly stiff but nothing major, and the handling was good. It certainly looks better than an SUV.",
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