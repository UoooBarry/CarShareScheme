 
/**********************************************************************
 *           AUTHOR: YONGQIAN HUANG, CREATED AT: 01/08/2020           *
 * UPDATED: YONGQIAN HUANG, 24/07/2020, INIT CREATION FOR API TESTING 
 *  * Updated at 04/09/2020 migrate to ts  *                          *
 **********************************************************************/



import chai from 'chai';
//Assertion style
chai.should();
import app from '../../app';
import db from '../../config/database';
import Customer from '../../models/customer'
import Login from '../../models/login'


import chaiHttp from 'chai-http';
chai.use(chaiHttp);


describe('POST /register', () => {
    before(async() => {
        await db.authenticate();
        await Customer.sync();
        await Login.sync();
    })

    it('Register an account with valid information', (done) => {
        chai.request(app).post('/api/register')
                    .send({
                        email: "dummy@gmail.com",
                        password: "123456",
                        first_name: "Dummy",
                        family_name: "Dummy",
                        contact_number: "433838112",
                        code: "123"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('success');
                        done();
                    })
    });

    it('Register an account with invalid email', (done) => {
        chai.request(app).post('/api/register')
                    .send({
                        email: "Not an email",
                        password: "123456"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('fail');
                        done();
                    })
    });

    it('Register an account with invalid password', (done) => {
        chai.request(app).post('/api/register')
                    .send({
                        email: "dummy3@gmail.com",
                        password: "12345"
                    })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.have.property('message').eql('fail');
                        done();
                    })
    });

    after(async() => {
        await Login.destroy({where:{Email: "dummy@gmail.com"}});
        await Customer.destroy({where: {first_name: "Dummy"}});
    })
});
