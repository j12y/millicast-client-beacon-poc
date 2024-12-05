import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

const url = `${MILLICAST_API_ENDPOINT}/api/cluster`;

// GET /api/regions/default
// RESPONSE: {"code": "auto"}
export async function GET(event) {
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    let region = {
        'id': body.data.defaultCluster
    }

    return json(region);
}

// PUT /api/regions/default
// BODY: {'id': 'ams-1'}
export async function PUT(event) {
    const request = await event.request.json();

    const options = {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${MILLICAST_API_SECRET}`}, 
        body: JSON.stringify({
            'defaultCluster': request.id
        })
    };

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body);
}
