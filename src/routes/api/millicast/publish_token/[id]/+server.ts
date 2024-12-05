import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

// Read Token
export async function GET(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/${event.params.id}`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

// Update Token
export async function PUT(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/${event.params.id}`;
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
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/${event.params.id}`;
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
GET http://localhost:5173/api/millicast/publish_token/6315224
{
    "allowedCountries": [
        "US"
    ],
    "deniedCountries": [
        "CA"
    ],
    "subscribeRequiresAuth": false,
    "record": false,
    "multisource": true,
    "enableThumbnails": false,
    "lowLatencyRtmp": true,
    "integrationId": "None",
    "displaySrtPassphrase": false,
    "id": 6315224,
    "label": "[WHIP] browser",
    "token": "d9a6bbc2c804a2cfeea33594ff2f4f60e1e9a138cc39dc3c730909224a24a2df",
    "addedOn": "2023-11-15T16:51:26Z",
    "isActive": true,
    "streams": [
        {
            "streamName": "token-security",
            "isRegex": false
        }
    ],
    "allowedOrigins": [
        "*.dolby.io"
    ],
    "allowedIpAddresses": [
        "50.222.42.250/32"
    ],
    "originCluster": ""
}

*/