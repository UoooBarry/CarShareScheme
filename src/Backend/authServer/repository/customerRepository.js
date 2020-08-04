/* 
    Author: Yongqian Huang, created at: 04/07/2020
    updated: Yongqian Huang, 04/08/2020, Apply data repository pattern
*/

const Customer = require('../models/customer');

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