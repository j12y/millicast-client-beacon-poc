import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function PATCH(event) {
    const request = await event.request.json();

    const options = {
        method: 'PATCH', 
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${MILLICAST_API_SECRET}`}, 
        body: JSON.stringify(request)
    };

    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/disable`;

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}


/*
GET http://localhost:5173/api/millicast/publish_token/active?streamId=GCNQRh/360
{"tokenIds":[6248020]}

*/