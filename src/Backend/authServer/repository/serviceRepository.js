/**********************************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 07/08/2020 MANAGE MICROSERVICES *
 *         Yongqian Huang, Added 2FA validation                       *
 **********************************************************************/
require('dotenv').config();
const axios = require('axios').default;
const cache = require('memory-cache');
const Nexmo = require('nexmo');

 class serviceRepository {
    constructor(){
        //Expire time set to 1 min
        this.expired = 60 * 1000;
        //New nexmo object
        this.nexmo = new Nexmo({
            apiKey: process.env.NEXMO_KEY,
            apiSecret: process.env.NEXMO_SECRET,
            applicationId: process.env.NEXMO_ID
        });
    }

    
    //Get recaptcha response from google
    async getRecaptchaRes(user_response){
        const params = new URLSearchParams();
        params.append('secret', '6LcTY7sZAAAAAGZNzQgsa1Q9uZWpP8EThE5-tYaQ');
        params.append('response', user_response);

        const response = await axios.post("https://www.google.com/recaptcha/api/siteverify", params, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
        return response;
    }

    /*Generate a 4 digits code */
    getOneCode(){
        //generate a number between 1000 - 9999: 4 digits
        return Math.floor(Math.random() * 8999) + 1000;
    }

    /**Store the generated code to server cache memory, expired in 1 min, then send sms**/
    async putOneCode(phone){
        //Generate a one code
        const code = await this.getOneCode();
        /**Store the code */
        cache.put(phone, code, this.expired);

        /**Send the sms to user */
        const from = 'Car share';
        const to = `61${phone}`;
        const text = `Your one time register code is ${code}`;
        this.nexmo.message.sendSms(from, to, text, (err,res) => {
            if(err)
                console.log(err);
        });

    }

    /**Verify if the code input is matched the phone */
    verifyOneCode(phone, code){
        //Take the expected code by phone number
        const expected = cache.get(phone);
        if(code == expected){
            return true;
        }else{
            return false;
        }
    }
 }

 module.exports = new serviceRepository();