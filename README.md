[release-badge]: http://img.shields.io/github/release/UoooBarry/CarShareScheme/all.svg?style=flat
# CarShareScheme
Capstone project

## Endpoints
### Customer information: 
`http://localhost:3000/api/customers/:id` `${this.$carshare}/customers/:id`
<br>

### Patch customer:
PATCH: `http://localhost:3000/api/customers/:id`<br>
        Please patch with authorization token in header, format: 'pbdAuth token' (Bearer + space + token)<br>
        The token is store in local storage, use `localStorage.getItem('authToken');` to fetch it.


## Deployment
### How to deploy
We have setup an auto deployment for  `release` branch workflow via circleCi. Authentication server and car share system server will be deployed to our aws ec2 instance automatically. <h3>Need to click approve in circleCi workflow.</h3><br>
The next thing to do is to just host the static frontend to S3 bucket. Run `npm run build` in dir 'src/Frontend/carshare'. Upload all the contents in the generated dist folder, to a public S3 bucket.
#### Release
Release 1: 20/08/2020
