import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/active/all`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}


/*
GET http://localhost:5173/api/millicast/publish_token/active/all
{"tokenIds":[5895314,5895312,6248020]}
*/