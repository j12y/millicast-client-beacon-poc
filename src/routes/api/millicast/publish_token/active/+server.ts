import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const streamId = event.url.searchParams.get('streamId') || 1; 

    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/active?streamId=${streamId}`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}


/*
GET http://localhost:5173/api/millicast/publish_token/active?streamId=GCNQRh/360
{"tokenIds":[6248020]}

*/