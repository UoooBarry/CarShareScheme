 /******************************************************************************
 *              @AUTHOR: YONGQIAN HUANG, CREATED AT: 26/07/2020               *
 * @UPDATED: YONGQIAN HUANG, 26/07/2020, INIT CREATION FOR MODEL UNIT TESTING *
 *              SHUYUAN ZHANG,28/07/2020, ADD A DELETE TEST CASE              *
 * @UPDATED: SHUYUAN ZHANG, 23/08/2020, Update THE DELETE TEST CASE           *
 ******************************************************************************/


import db from '../../config/db'
import Car from '../../models/car'
import Location from '../../models/location'
import chai from 'chai';
//Assertion style
const assert = chai.assert;
 
describe('models/location', () => {
    before(async() => {
        await db.authenticate();
        await db.sync();
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
        await Location.destroy({
            where: {
                name: "RMIT",
            }
        });
        var location = await Location.findAll({ where: { name: 'RMIT' } });
        assert.equal(location.length, 0);
    })
})

export{}