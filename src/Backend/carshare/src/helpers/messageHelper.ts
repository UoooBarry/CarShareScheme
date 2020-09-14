/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 02/09/2020
 *  
 *************************************************/


import Nexmo from 'nexmo';
import path from 'path';
require('dotenv').config({path: path.resolve(__dirname, '../../.env')});

class messageHelper{
    nexmo: any;

    constructor(){
        //New nexmo object
        this.nexmo = new Nexmo({
            apiKey: process.env.NEXMO_KEY,
            apiSecret: process.env.NEXMO_SECRET,
            applicationId: process.env.NEXMO_ID
        });
    }

    sendMessage(mobile: number, message: string){
        /**Send the sms to user */
        const from = 'Car share';
        const to = `61${mobile}`;
        this.nexmo.message.sendSms(from, to, message, (err: any,res: any) => {
            if(err)
                console.log(err);
        });
    }

}

export default new messageHelper();