 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 06/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 06/08/2020, GET USER by auth token        *
 ***********************************************************************/


const Customer = require('../models/customer');
var JWT = require('jsonwebtoken');


class customerRepository{

    async getAll(){
        return await Customer.findAll({where: {}});
    }

    async getById(id){
        return await Customer.findAll({where: {id: id}});
    }

    async create(first_name, family_name, gender, date_of_birth, contact_number){
        const customer = await Customer.create({
            first_name: first_name,
            family_name: family_name,
            gender: gender,
            date_of_birth: date_of_birth,
            contact_number: contact_number
        });

        return customer;
    }
}

module.exports = new customerRepository();