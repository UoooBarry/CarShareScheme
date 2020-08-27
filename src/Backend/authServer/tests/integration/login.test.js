/**************************************************
 * AUTHOR: YONGQIAN HUANG, CREATED AT: 12/08/2020 *
 **************************************************/

const chai = require('chai');
//Assertion style
chai.should();
const expect = chai.expect;
const app = require('../../app');
const db = require('../../config/database');
const Customer = require('../../models/customer');
const Login = require('../../models/login');

const chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('POST /login', () => {
    before(async () => {
        await db.authenticate();
        await Customer.sync();
        await Login.sync();

        await chai.request(app).post('/api/register')
            .send({
                email: "dummy2@gmail.com",
                password: "123456",
                first_name: "DummyTwo",
                family_name: "Dummy",
                contact_number: "433838111",
                code: "123"
            })
        
    })

    it('Login with validate information', (done) => {
        chai.request(app).post('/api/authorize')
            .send({
                email: "dummy2@gmail.com",
                password: "123456"
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('message').eql('success');
                done();
            });
    })

    it('Login with invalidate information', (done) => {
        chai.request(app).post('/api/authorize')
            .send({
                email: "dummy2@gmail.com",
                password: "123455"
            })
            .end((err, res) => {
                res.body.should.have.property('message').eql('fail');
                res.body.should.have.property('reason').eql('Information unmatched');
                done();
            })
    })

    it('Login with an deactivate account', async () => {
        //deactivate the customer account
        const login = await Login.findOne({ where: { Email: 'dummy2@gmail.com' } });
        await login.update({
            activate: false
        });

        //send request of login
        const res = await chai.request(app).post('/api/authorize')
            .send({
                email: "dummy2@gmail.com",
                password: "123456"
            })
        expect(res.body.message).to.equal('fail');
    })

    after(async () => {
        await Login.destroy({ where: { Email: "dummy2@gmail.com" } });
        await Customer.destroy({ where: { first_name: "DummyTwo" } });
    })
});
