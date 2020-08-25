const JWT = require('jsonwebtoken');

module.exports={
    generateAccessToken: (customer) => {
        return JWT.sign({customer}, process.env.ACCESS_TOKEN_SECRET);
    },
    verifyToken: (req,res,next) => {
        const header = req.headers['authorization'];
        //Check exsit
        if(typeof header === 'undefined') res.sendStatus(403); //Forbidden
        
        var token = header.split(' ')[1];
        JWT.verify(token,process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if(err){
                console.log(err);
                return res.json({message: 'fail'})
            } 
            // Set the req user
            req.user = data.customer;
            // Next
            next();
        });

    }
}