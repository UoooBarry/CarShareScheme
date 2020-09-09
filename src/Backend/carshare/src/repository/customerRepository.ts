 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 06/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 06/08/2020, GET USER by auth token  
 * updated in 03/09/2020 migrate to typescript                           *
 ***********************************************************************/

import Customer from '../models/customer';

class customerRepository{
    
    async getAll(){
        return await Customer.findAll({where: {}});
    }

    async getById(id: number){
        return await Customer.findOne({where: {id: id}});
    }

    /*Update customer with json array */
    async update(id: number, data: any){
        const customer = await Customer.findOne({where:{id: id}});
        try{
            if(!customer) throw 'Customer not found';
            await customer.update(data);
            return Promise.resolve(true);
        }catch(error){
            return Promise.reject(error);
        }
    }

}

export default new customerRepository();