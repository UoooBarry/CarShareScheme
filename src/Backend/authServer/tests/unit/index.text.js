/***************************************************
 * @AUTHOR: YONGQIAN HUANG, CREATED AT: 01/08/2020 *
 ***************************************************/


const chai = require('chai');
const chaiHttp = require('chai-http');  

const app = require('../../app');
chai.should();
//http request
chai.use(chaiHttp);


describe('Index router', () => {
    it('should get 200 from POST request', (done) => {
        chai.request(app).post('/api/register')
                        .end((err, res) => {
                            if (err) throw err;
                            res.should.have.status(200);
                            done();
                        })
    });

    
})