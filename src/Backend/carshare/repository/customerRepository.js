 
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
        return await Customer.findOne({where: {id: id}});
    }

    async update(id, data){
        const customer = await Customer.findOne({where:{id: id}});
        try{
            await customer.update(data);
            return Promise.resolve(true);
        }catch(error){
            return Promise.reject(error);
        }
    }

}

module.exports = new customerRepository();