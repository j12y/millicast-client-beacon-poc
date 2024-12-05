import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';


// Read Token
export async function GET(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/subscribe_token/${event.params.id}`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

// Update Token
export async function PUT(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/subscribe_token/${event.params.id}`;
    const request = await event.request.json();

    const options = {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${MILLICAST_API_SECRET}`}, 
        body: JSON.stringify(request)
    };

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body);
}

// Delete Token
export async function DELETE(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/subscribe_token/${event.params.id}`;
    const request = await event.request.json();

    const options = {
        method: 'DELETE', 
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${MILLICAST_API_SECRET}`}, 
        body: JSON.stringify(request)
    };

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body);
}


/*
GET http://localhost:5173/api/millicast/subscribe_token/890424360

{
    "allowedCountries": [],
    "deniedCountries": [],
    "id": 890424360,
    "label": "TestToken",
    "token": "c055be32ce9b178384af33524e7f29da91fb66a2d24cf1254a7a0ecd8d5f3107",
    "addedOn": "2023-07-26T21:57:40Z",
    "isActive": true,
    "streams": [
        {
            "streamName": "lkin7jau",
            "isRegex": false
        }
    ],
    "allowedOrigins": [],
    "allowedIpAddresses": []
}

*/