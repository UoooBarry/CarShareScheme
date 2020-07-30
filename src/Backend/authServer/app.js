/* 
    Author: Yongqian Huang, created at: 23/07/2020
    updated: Yongqian Huang, 23/07/2020, Npm Init
             Yongqian Huang, 30/07/2020, register and login handler
*/


require('dotenv').config();
const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
const db = require('./config/database');
const Customer = require('./models/customer');
const { check, validationResult } = require('express-validator');
const cors = require('cors')
const passwordHash = require('password-hash');
const login = require('./models/login');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//catch database connection
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch( err => console.log(`DB err: ${err}`))

app.post('/api/register',
    [
        check('email').isEmail().withMessage("Email format unmatched"),
        check('password').isLength({min: 6}).withMessage('Password should at least 6 digits long'),
        check('first_name').not().isEmpty().withMessage('FirstName cannot be empty'),
        check('family_name').not().isEmpty().withMessage('FamilyName cannot be empty'),
        check('contact_number').not().isEmpty().withMessage('Contact cannot be empty')
    ]
    , async (req,res) => {
        
        const errs = validationResult(req);
         //check and return errors
        if(!errs.isEmpty()){
            let errors = [];
            errs.array().forEach(
                err => errors.push(err.msg)
            )
            res.json({
                message: "fail",
                errors});
            
            return;
        }

        //Create a new user if it is correct
        var customer = await Customer.create({
            first_name: req.body.first_name,
            family_name: req.body.family_name,
            gender: req.body.gender,
            date_of_birth: req.body.date_of_birth,
            contact_number: req.body.contact_number
        });
        
        //Create login for user
        await login.create({
            Email: req.body.email,
            password: passwordHash.generate(req.body.password),
            user_id: customer.id
        });

        res.json({
            message: 'success'
        });
});

app.post('/api/login',(req,res) => {
    const email = req.body.email;
    if(!email) res.sendStatus(403);

    login.findOne({
        where: {
            Email: email
        },
        include: [
            {model: Customer}
        ]
    })
        .then(async (login) => {
            const customer = await login.getCustomer();
            if(login != null && passwordHash.verify(req.body.password, login.password)){    
                JWT.sign({customer}, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                    if(err){
                        console.log(err);
                      }
                      res.json({
                        token,
                        message: 'success'
                      });
                })
            }else{
                res.json({message: 'Information unmatched'});
            }
        })
});

app.post('/api/validate', (req, res) => {
    const token = req.body.token;
    JWT.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, data)=> {
        res.json(data);
    })
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json(err);
  });

app.listen(4000, ()=> console.log("Auth sever is running on port 4000"))