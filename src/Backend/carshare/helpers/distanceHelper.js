/*************************************************
 * @AUTHOR YONGQIAN HUANG, CREATED AT 27/08/2020 *
 *************************************************/

require('dotenv').config();
const axios = require('axios');

const calculateDistance = async (from, to) => {

    try{
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


module.exports = {calculateDistance};