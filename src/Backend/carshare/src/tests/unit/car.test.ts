 

/******************************************************************************
 *              @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020               *
 * @UPDATED: YONGQIAN HUANG, 24/07/2020, INIT CREATION FOR MODEL UNIT TESTING *
 * @UPDATED: SHUYUAN ZHANG, 23/08/2020, Update CREATION FOR MODEL UNIT TESTING  *
 ******************************************************************************/


import db from '../../config/db'
import Car from '../../models/car'
import Location from '../../models/location'
import * as chai from 'chai';
//Assertion style
const assert = chai.assert;
 
describe('model/car', ()=> {
    /* Clean up all data before test */
    before(async () => {
        await db.authenticate();
        await db.sync();
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
                seats: 4,
                addons: "GPS, air conditional",
                purchase_date: new Date(),
                available: false,
                price: 20.2
            })
                .then((car) => {
                    assert.equal(car.name, 'Test Car'); //Car name should be equal to Test Car after created
                    assert.equal(car.brand, "Test brand");  //Car brand should be equal to Test Car after created
                    assert.equal(car.model, "T1"); //Car model should be equal to Test Car after created
                })
                .catch( (err) => {
                    assert.lengthOf(err,0); //No errors should be found
                });
        
        });
        
});

export {};