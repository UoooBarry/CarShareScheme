 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 04/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN *
 ***********************************************************************/


const Customer = require('../models/customer');

class customerRepository{

    async getAll(){
        const login = await Login.findAll({
            include: [{
                model: Customer
            }]
        });
        const customers = await login.getCustomer();

        const result = {
            customers,
            activate: login.activate
        }
        return result;
    }

    async getById(id){
        return await Customer.findAll({where: {id: id}});
    }

    async getByContact(contact){
        return await Customer.findAll({where: {contact_number: contact}});
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

    async removeById(){
        await Customer.destroy({
            where: {
                id: id
            }
        });
    }
}

module.exports = new customerRepository();