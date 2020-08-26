 /******************************************************************************
 *              @AUTHOR: YONGQIAN HUANG, CREATED AT: 26/07/2020               *
 * @UPDATED: YONGQIAN HUANG, 26/07/2020, INIT CREATION FOR MODEL UNIT TESTING *
 *              SHUYUAN ZHANG,28/07/2020, ADD A DELETE TEST CASE              *
 * @UPDATED: SHUYUAN ZHANG, 23/08/2020, Update THE DELETE TEST CASE           *
 ******************************************************************************/



const Location = require('../../models/location');
const Car = require('../../models/car');
const chai = require('chai');
//Assertion style
const assert = chai.assert;
 
describe('models/location', () => {
    before(() => {
        Location.sync();
    });
 
    it("creates a location", async () => {
        var rmit = await Location.create({
            name: "RMIT",
            address: "330 Swanston St, Melbourne, VIC"
        });
 
        assert.equal(rmit.name, "RMIT");
        assert.equal(rmit.address, "330 Swanston St, Melbourne, VIC");
    });
    it("delete a location", async () => {
        await Car.destroy({
            where: {
                location_id: 1,
            }
        });
        await Location.destroy({
            where: {
                name: "RMIT",
            }
        });
        var location = await Location.findAll({ where: { name: 'RMIT' } });
        assert.equal(location.length, 0);
    })
})
