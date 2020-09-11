/* 
    Author: Shuyuan Zhang, created at: 27/08/2020
    Update: Shuyuan Zhang, 28/08/2020, Updated seed data
*/
 
import Customer from '../models/customer';
import Login from '../models/login';
import passwordHash from 'password-hash';

export default {
  up: async () => {
    var admin = await Customer.findAll({
      where: {
        admin: true,
      },
    });
    var user = await Customer.findAll({ where: { admin: false } });
    //check if user is not available then create dummy user
    // if (user.length === 0) {
    //   var newUser = await Customer.create({
    //     first_name: "John",
    //     family_name: "Doe",
    //     date_of_birth: new Date(),
    //     contact_number: 99999999,
    //     gender: "male",
    //     admin: false,
    //   });
    //   await Login.create({
    //     Email: "John.Doe@email.com",
    //     password: passwordHash.generate("12345678"),
    //     user_id: newUser.id,
    //     activate: true,
    //   });
    // }
 
    //check if admin user is not available in database then seed
    if (admin.length === 0) {
      var newAdmin = await Customer.create({
        first_name: "John",
        family_name: "Doe",
        date_of_birth: new Date(),
        contact_number: 88888888,
        gender: "male",
        admin: true,
      });
      await Login.create({
        Email: "admin@email.com",
        password: passwordHash.generate("12345678"),
        user_id: newAdmin.id,
        activate: true,
      });
    }
  },
 
};