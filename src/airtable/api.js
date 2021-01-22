const axios = require('axios');

axios.post(`${process.env.API_BASE_URL}.${process.env.AIRTABLE_ID}`, {
    "name": "John Doe",
    "email": "johndoe@mail.com",
    "phone": "9012090666",
    "message": "Hello World",
    "links": "Boom"
}, {
    headers: {
        'Authorization': `BASIC ${process.env.AIRTABLE_API_KAY}`
    }
});