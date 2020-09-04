 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 04/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN  *
 *           Yongqian Huang, 04/09/2020, Migrate to typescript         *
 ***********************************************************************/

import Login from '../models/login';
import Customer from '../models/customer';


class loginRepository {
    async getByEmail(email: string) {
        return await Login.findOne({
            where: {
                Email: email
            },
            include: [{
                model: <any>Customer
            }]
        });
    }

    //Create an login with email exist check, return a Promise
    async create(email: string, password:string, user_id:number){
        const exist = await Login.count({where: {Email: email}});
        if(exist >= 1)
            return Promise.reject("Email already existed");

        const login = await Login.create({
            Email: email,
            password: password,
            user_id: user_id
        });
        return Promise.resolve(login);
    }

    //Activate or deactivate by user_id
    async activate(user_id: number){
        //Get login by user_id
        let login = await Login.findOne({where: {user_id: user_id}});
        try{
            if(!login) throw new Error('Login is null');
            await login.update({
                activate: !login.activate
            })
            return Promise.resolve(true);
        }catch(error){
            return Promise.reject(error);
        }
    }
}

export default new loginRepository();