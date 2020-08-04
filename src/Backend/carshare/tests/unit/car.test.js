 

/******************************************************************************
 *              @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020               *
 * @UPDATED: YONGQIAN HUANG, 24/07/2020, INIT CREATION FOR MODEL UNIT TESTING *
 ******************************************************************************/




const Car = require('../../models/car');
const Location = require('../../models/location');
const chai = require('chai');
//Assertion style
const assert = chai.assert;

describe('model/car', ()=> {
    /* Clean up all data before test */
    before(async () => {
        await Location.sync();
        await Car.sync();
    });

    it("creates a car", async () => {
        var location = await Location.create({
            name: "First",
            address: "1 Ad road"
        });
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
                });
        });
});