 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 06/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 06/08/2020, GET USER by auth token  
 * updated in 03/09/2020 migrate to typescript
 * updated in 19/09/2020 Add license validation                        *
 ***********************************************************************/

import Customer from '../models/customer';
import DataRepository from './dataRepository';
import License from '../models/license';

class customerRepository implements DataRepository{
    private static instance?: customerRepository;

    async create(object: any) {
        try {
            const customer = await Customer.create({object})
            return Promise.resolve(customer);
        }catch(error){
            return Promise.reject(error);
        }
    }
    
    async getAll() {
        try{
            const customers = await Customer.findAll({where: {}});
            return Promise.resolve(customers);
        }catch(error){
            return Promise.reject(error);
        }
    }

    async get(id: number) {
        try{
            const customer = await Customer.findOne({
                where: { id: id },
                include: [
                    {
                        model: License
                    }
                ]
            });
            return Promise.resolve(customer);
        }catch(error){
            return Promise.reject(error);
        }
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

    static getInstance(): customerRepository{
        if (!customerRepository.instance) 
            customerRepository.instance = new customerRepository()
        
        return customerRepository.instance;
    }

}

export default customerRepository.getInstance();