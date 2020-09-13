/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 27/08/2020 *
 *************************************************/

import path from "path"

require('dotenv').config({path: path.resolve(__dirname, '../../.env')})
import axios from 'axios';

const calculateDistance = async (from: string, to: string) => {

    try{
        //Get distance result form matrix api
        const result = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json',{
            params:{
                origins: from,
                destinations: to,
                key: process.env.GOOGLE_MAPS_API_KEY
            }
        });
        return Promise.resolve(result.data.rows[0].elements[0]);
    }catch(error){
        return Promise.reject(error);
    }
}


export {calculateDistance};