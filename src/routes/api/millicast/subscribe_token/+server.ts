import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

const url = `${MILLICAST_API_ENDPOINT}/api/subscribe_token`;

export async function POST(event) {
    const request = await event.request.json();

    const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${MILLICAST_API_SECRET}`}, 
        body: JSON.stringify(request)
    };

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body);
}