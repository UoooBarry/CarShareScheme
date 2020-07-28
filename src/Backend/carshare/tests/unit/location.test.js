/* 
    Author: Yongqian Huang, created at: 26/07/2020
    updated: Yongqian Huang, 26/07/2020, Init creation for model unit testing
    updated:Shuyuan Zhang,28/07/2020, add a delete test case
*/

const Location = require('../../models/location');

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
        await Location.destroy({
            where: {
                name: "RMIT",
            }
        });
        var location = await Location.findAll({ where: { name: 'RMIT' } });
        assert.equal(location.length, 0);
    })
})
