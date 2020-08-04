 
/**********************************************************************
 *           AUTHOR: YONGQIAN HUANG, CREATED AT: 01/08/2020           *
 * UPDATED: YONGQIAN HUANG, 24/07/2020, INIT CREATION FOR API TESTING *
 **********************************************************************/



const chai = require('chai');
//Assertion style
chai.should();
const app = require('../../app');
const db = require('../../config/database');
const Customer =require('../../models/customer');
const Login =require('../../models/login');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('POST /register', () => {
    before(async() => {
        await db.authenticate();
        await Customer.sync();
        await Login.sync();
    })

    after(async () => {
        await Login.destroy({where:{}});
        await Customer.destroy({where: {}});
        db.close();
    })

    it('Register an account with valid information', (done) => {
        chai.request(app).post('/api/register')
                    .send({
                        email: "dummy@gmail.com",
                        password: "123456",
                        first_name: "Dummy",
                        family_name: "Dummy",
                        contact_number: "0433838111"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('success');
                        done();
                    })
    });

    it('Register an account with invalid information', (done) => {
        chai.request(app).post('/api/register')
                    .send({
                        email: "Not an email"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('fail');
                        done();
                    })
    })
})
