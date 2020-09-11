# Kit Registration Page
Gatsby app for registering a kit with Molecular Testing Labs

1. Build and host a registration page on GitHub Pages
2. Update build directory to `/docs`
      Here's a bit of code that I wrote to accomplish this recently, with the onPostBuild strategy, inside gatsby-node.js:

      const path = require('path');
      const fs = require('fs');

      exports.onPostBuild = function() {
        fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'public-blog'));

        fs.mkdirSync(path.join(__dirname, 'public'));

        fs.renameSync(path.join(__dirname, 'public-blog'), path.join(__dirname, 'public', 'blog'));
      };```
3. Point subdomain register.kalamos.care at Github Pages

---

# Register Kit

**URL** : `/RegisterKit`

**Method** : `POST`

**Auth required** : YES

**Example Body**
```
[
	{
	"lob": "SC",
	"kit_id": "F000000001",
	"patient_info":{
		"first_name": "John",
		"last_name": "Doe",
		"address_1": "14401 SE 1st ST",
		"address_2": "",
		"city": "Vancouver",
		"state": "WA",
		"postcode": "98684",
		"gender": "male",
		"date_of_birth": "1962-06-03",
		"email": "zano@test.com",
		"phone": "123-842-9999"
	},
	"pwn_req_number": "5142800"
	}
]
```

- *All fields are required, except email & phone, but either of email & phone needs to provide.*
- *pwn_req_number is optional and is for SC only*

### Responses

**Example Success Response**
```
[
	{
		"kit_id": "F000000001",
		"success": true,
		"error_msg": " null "
	}
]
```

**Example Failure Response**
```
[
	{
		"kit_id": "F000000001",
		"success": false,
		"error_msg": "gender is missing"
	}
]
```
