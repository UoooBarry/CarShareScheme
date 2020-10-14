/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 22/08/2020 *
 *************************************************/

import chai from 'chai';
//Assertion style
const assert = chai.assert;
import app from '../../app';
import Customer from '../../models/customer';
import License from '../../models/license'
import Location from '../../models/location';
import Car from '../../models/car';
import db from '../../config/db'
import chaiHttp from 'chai-http';
import { generateAccessToken } from '../../helpers/authorizationHelper';
import Rent from '../../models/rent';
import Comment from '../../models/comment'
import Bill from '../../models/bill';
import ItemNotFound from '../../exceptions/ItemNotFound';
chai.use(chaiHttp);

describe('/api/order', () => {
  let token: string;
  let car: Car;

  before(async () => {
    try {
      //Sync all database before start testing
      await db.authenticate();
      await Customer.sync();
      await License.sync();
      await Location.sync();
      await Car.sync();
      await Rent.sync();
      await Bill.sync();
      await Comment.sync();
      //Pre create a customer
      const customer = await Customer.create({
        first_name: "Dummy",
        family_name: "Test",
        contact_number: 400001001
      });

      await License.create({ //Create a valid license for the customer
        user_id: customer.id,
        uploadedImage: 2,
        isValidated: true
      })

      const location = await Location.create({
        name: 'Test location',
        address: '100 Road',
      });

      car = await Car.create({
        name: 'Test car',
        brand: 'Brand',
        model: 'Alpha',
        purchase_date: new Date(),
        location_id: location.id,
        seats: 4,
        luggages: 2,
        doors: 4,
        gear: 'automated',
        description: 'For test purpose',
        addons: 'No',
        price: '20'
      });



      //Set the token
      token = `Bearer ${generateAccessToken(customer)}`;
    } catch (err) {
      console.log(err);
    }
  })

  it('Create an order correctly', (done) => {
    chai.request(app).post('/api/orders/create')
      .set('Authorization', token)
      .send({
        car_id: car.id,
        start_from: new Date(),
        period: 1
      })
      .end((err, res) => {
        assert.equal(res.body.rent.car_id, car.id);
        const exceptedFee = (1 * car.price + car.price * 0.1).toFixed(2);
        assert.equal(res.body.feeToPay, exceptedFee);//correct amount of fee
        done();
      })
  })

  it('Create an order with invalid information return fail', (done) => {
    chai.request(app).post('/api/orders/create')
      .set('Authorization', token)
      .send({
        car_id: car.id,
        start_from: new Date(),
        period: -1 //invalid input
      })
      .end((err, res) => {
        assert.equal(res.body.message, 'fail');//Return fail
        done();
      })
  })

  it('Pay order correctly', async() => {
    const bills = await Bill.findAll({ limit: 1 }); //get the random bill
    if (!bills[0]) throw new ItemNotFound('Not found bill');
    chai.request(app).post('/api/orders/create')
      .set('Authorization', token)
      .send({
        bill_id: bills[0].id,
        total: bills[0].fee
      })
      .end((err, res) => {
        assert.equal(res.body.message, 'success');//Return fail
      })
  })

  it('Pay order with invalid amount returns fail', async() => {
    const bills = await Bill.findAll({ limit: 1 }); //get the random bill
    if (!bills[0]) throw new ItemNotFound('Not found bill');
    chai.request(app).post('/api/orders/create')
      .set('Authorization', token)
      .send({
        bill_id: bills[0].id,
        total: 1
      })
      .end((err, res) => {
        assert.equal(res.body.message, 'fail');//Return fail
      })
  })



  after(async () => {
    //Clean up table
    await Bill.destroy({ where: {} });
    await Rent.destroy({ where: {} });
    await Car.destroy({ where: {} });
    await Location.destroy({ where: {} });
    await License.destroy({ where: {} });
    await Customer.destroy({ where: {} });
  })
})