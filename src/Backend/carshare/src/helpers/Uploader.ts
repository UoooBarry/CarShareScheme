/********************************
 * @AUTHOR YONGQIAN, 20/08/2020 *
 ********************************/

require('dotenv').config()

import AWS from 'aws-sdk';
import {readFileSync,unlinkSync} from 'fs';

// Enter copied or downloaded access ID and secret key here
const ID = process.env.AWS_ACCESS_ID;
const SECRET = process.env.AWS_ACCESS_SECRET;

// The name of the bucket that you have created
const BUCKET_NAME = 'carshare-image-pbd';


const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = async(id: number, path: string, fileName: string) => {
    // Read content from the file
    const fileContent = await readFileSync(fileName);
    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: `${path}/${id}`, // Save save file as id, so it can be retrieve by user id
        Body: fileContent
    };

     // Uploading files to the bucket
     s3.upload(params, (err: any, data: any) => {
        if (err) {
            return Promise.reject(err);
        }
        //Remove the file after uploaded;
        unlinkSync(fileName);
        return Promise.resolve(true);
    });
}


export default uploadFile;