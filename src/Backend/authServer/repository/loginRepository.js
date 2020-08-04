 
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

    async create(email, password, user_id){
        return await Login.create({
            Email: email,
            password: password,
            user_id: user_id
        });
    }
}

module.exports = new loginRepository();