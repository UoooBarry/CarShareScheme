 
/***********************************************************************
 *           @AUTHOR: YONGQIAN HUANG, CREATED AT: 04/07/2020           *
 * @UPDATED: YONGQIAN HUANG, 04/08/2020, APPLY DATA REPOSITORY PATTERN *
 ***********************************************************************/


const Login = require('../models/login');
const Customer = require('../models/customer');


class loginRepository {
    async getByEmail(email) {
        return await Login.findOne({
            where: {
                Email: email
            },
            include: [{
                model: Customer
            }]
        });
    }

    //Create an login with email exist check, return a Promise
    async create(email, password, user_id){
        const exist = Login.count({where: {Email: email}});
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
    async activate(user_id){
        //Get login by user_id
        let login = await Login.findOne({where: {user_id: user_id}});
        try{
            await login.update({
                activate: !login.activate
            })
            return Promise.resolve(true);
        }catch(error){
            return Promise.reject(error);
        }
    }
}

module.exports = new loginRepository();