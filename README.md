# CarShareScheme
Capstone project

## Endpoints
### Customer information: 
`http://localhost:3000/api/customers/:id` `${this.$carshare}/customers/:id`
<br>

### Patch customer:
PATCH: `http://localhost:3000/api/customers/:id`<br>
        Please patch with authorization token in header, format: 'pbdAuth token' (pdbdAuth + space + token)<br>
        The token is store in local storage, use `localStorage.getItem('authToken');` to fetch it.


### Deployment
Release 1: 20/08/2020