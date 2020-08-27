/* 
    Author: Shuyuan Zhang, created at: 27/08/2020
*/
 
const Customer = require("../models/customer");
const Login = require("../models/login");
const passwordHash = require('password-hash');
module.exports = {
  sync: async () => {
    await Customer.sync();
    await Login.sync();
  },
  up: async () => {
    var admin = await Customer.findAll({
      where: {
        admin: true,
      },
    });
    var user = await Customer.findAll({ where: { admin: false } });
    //check if user is not available then create dummy user
    if (user.length === 0) {
      var newUser = await Customer.create({
        first_name: "dummy",
        family_name: "user",
        date_of_birth: new Date(),
        contact_number: 99999999,
        gender: "male",
        admin: false,
      });
      await Login.create({
        Email: "user@email.com",
        password: passwordHash.generate("12345678"),
        user_id: newUser.id,
        activate: true,
      });
    }
 
    //check if admin user is not available in database then seed
    if (admin.length === 0) {
      var newAdmin = await Customer.create({
        first_name: "app",
        family_name: "admin",
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