/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 22/08/2020 *
 *************************************************/

const chai = require('chai');
//Assertion style
const assert = chai.assert;
const app = require('../../app');
const Customer = require('../../models/customer');
const chaiHttp = require('chai-http');
const {generateAccessToken} = require('../../helpers/authorizationHelper');
chai.use(chaiHttp);

describe('/api/customers', () => {
    let token;
    before(async() => {
        try{
            //Sync all database before start testing
            await Customer.sync();
            //Pre create a customer
            const customer = await Customer.create({
                first_name: "Dummy",
                family_name: "Test",
                contact_number: 400000000
            });
            //Set the token
            token = `Bearer ${generateAccessToken(customer)}`;
        }catch(err){
            console.log(err);
        }
    })

    it('Get profile with detail correctly', (done)=>{
        chai.request(app).get('/api/customers')
                         .set('Authorization', token)
                         .end((err,res) => {
                            assert.equal(res.body.customer.first_name, 'Dummy');
                            assert.equal(res.body.customer.family_name, 'Test');
                            assert.equal(res.body.customer.contact_number, 400000000);
                            done();
                         })
    })

    it('Patch profile with validate detail',(done) => {
        chai.request(app).patch('/api/customers')
                         .set('Authorization', token)
                         .send({
                            first_name: "Dummy2",
                            family_name: "Test",
                            contact_number: 400000000
                         })
                         .end((err,res) => {
                            assert.equal(res.body.message, 'success');
                            done();
                         })
    })


    it('Patch profile with invalidate detail',(done) => {
        chai.request(app).patch('/api/customers')
                         .set('Authorization', token)
                         .send({
                            first_name: "Dummy2",
                            family_name: "Test",
                            contact_number: 300000000
                         })
                         .end((err,res) => {
                            assert.equal(res.body.message, 'fail');
                            done();
                         })
    });

    after(() => {
        //Clean up table
        Customer.destroy({ where: {} });
    })
})