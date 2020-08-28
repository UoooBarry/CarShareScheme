/**************
 * Unit tested by QINGKAI YI  *
 **************/
const Customer = require('../../models/customer');
const chai = require('chai');
//Assertion style
const assert = chai.assert;

describe('model/customer', () => {
    before(() => {
        Customer.sync();
    });

    it('Create a customer', ()=> {
        /**Create a customer */
        Customer.create({
            first_name: "Dummy",
            family_name: "Dummy",
            date_of_birth: new Date(),
            contact_number: "123456789",
            gender: "Male",
            admin: false  
        })
            .then((customer) => {
                assert.equal(customer.first_name, 'Dummy'); /**Check if customer name is correct */
                assert.equal(customer.family_name, 'Dummy');
                assert.equal(customer.contact_number, '123456789');
            })
    })
})
