require('dotenv').config()

const AWS = require('aws-sdk');
const { readFile, readFileSync } = require('fs');

// Enter copied or downloaded access ID and secret key here
const ID = process.env.AWS_ACCESS_ID;
const SECRET = process.env.AWS_ACCESS_SECRET;

// The name of the bucket that you have created
const BUCKET_NAME = 'carshare-image-pbd';


const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET
});

const uploadFile = async(id,fileName) => {
    // Read content from the file
    const fileContent = await readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: BUCKET_NAME,
        Key: `${id}`, // File name you want to save as in S3
        Body: fileContent
    };

     // Uploading files to the bucket
     s3.upload(params, function(err, data) {
        if (err) {
            return Promise.reject(err);
        }
        return Promise.resolve(true);
    });
}


module.exports = uploadFile;