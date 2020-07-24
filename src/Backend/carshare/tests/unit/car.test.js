const Car = require('../../models/car');
const Location = require('../../models/location');
const chai = require('chai');
//Assertion style
const assert = chai.assert;

describe('model/car', ()=> {
    const location;
    /* Clean up all data before test */
    before(async () => {
        Car.sequelize.sync();
        Location.sequelize.sync();
        location = await Location.create({
            name: "First",
            address: "1 Ad road"
        })
    });

    describe("Create a car", () => {
        it("creates a car", () => {
            Car.create({
                name: "Test Car",
                brand: "Test brand",
                model: "T1",
                location_id: location.id,
                purchase_date: new Date(),
                available: false
            })
                .then((car) => {
                    assert.equal(car.name, 'Test Car'); //Car name should be equal to Test Car after created
                })
                .catch( (err) => {
                    assert.lengthOf(err,0); //No errors should be found
                } )
        })
    });



    
})