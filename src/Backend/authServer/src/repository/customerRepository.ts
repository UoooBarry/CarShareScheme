 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 04/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN  *
 *           Yongqian Huang, 04/09/2020, Migrate to typescript         *
 ***********************************************************************/

import Login from '../models/login';
import Customer from '../models/customer';
 
class customerRepository{
 
    //Get all customers with activate state
    async getAll(){
        //Get all login include the customers, login is belong to customer
        //Only return attribute of activate, do not pass sensitive information
        const customersWithActivate = await Login.findAll({
            attributes: ['activate'],
            include: [
                {model: <any>Customer}
            ]
        });
        return customersWithActivate;
    }
 
    async getById(id: number){
        return await Customer.findAll({where: {id: id}});
    }
 
    async getByContact(contact:number){
        return await Customer.findAll({where: {contact_number: contact}});
    }
 
    async create(first_name: string, family_name: string , gender:string, date_of_birth:Date, contact_number:number ){
        //Create customer, return the promise of customer obj, if error, reject
        try{
            const customer = await Customer.create({
                first_name: first_name,
                family_name: family_name,
                gender: gender,
                date_of_birth: date_of_birth,
                contact_number: contact_number
            });
            return Promise.resolve(customer);
        }catch(error){
            return Promise.reject(error);
        }
        
    }
 
    //Remove customer by ID, return a promise
    async removeById(id: number){
        try{
            await Customer.destroy({
                where: {
                    id: id
                }
            });
            return Promise.resolve(true);
        }catch(error){
            return Promise.reject(error);
        }
    }
}
 
export default new customerRepository();