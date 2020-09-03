/*************************************
 * @AUTHOR YONGQIAN HUANG 31/08/2020 *
 *************************************/

import chai from 'chai';
//Assertion style
const assert = chai.assert;
import app from '../../app';
import db from '../../config/db'
import Car from '../../models/car';
import Location from '../../models/location';
import chaiHttp from 'chai-http';
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