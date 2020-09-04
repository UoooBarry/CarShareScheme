/**************
 * Unit tested by QINGKAI YI
 * Updated at 04/09/2020 migrate to ts  *
 **************/
import Customer from '../../models/customer';
import chai from 'chai';
import db from '../../config/database';
//Assertion style
const assert = chai.assert;

describe('model/customer', () => {
    before(async () => {
        await db.authenticate();
        await db.sync();
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
                assert.equal(customer.contact_number, 123456789);
            })
    })
})
