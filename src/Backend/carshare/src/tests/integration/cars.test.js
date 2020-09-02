/*************************************
 * @AUTHOR YONGQIAN HUANG 31/08/2020 *
 *************************************/

const chai = require('chai');
//Assertion style
const assert = chai.assert;
const app = require('../../app');
const db = require('../../config/db');
const Car = require('../../models/car');
const Location = require('../../models/location');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('/api/cars', () => {
    before(async() => {
        try{
            await db.authenticate();
            await Location.sync();
            await Car.sync();
        }catch(error){
            console.log(error);
        }
    })

    it('Get all cars return 200 status', (done)=>{
        chai.request(app).get('/api/cars?all=true')
                        .end((err,res) => {
                            assert.equal(200, res.status);
                            done();
                        })
    })
})