import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

const url = `${MILLICAST_API_ENDPOINT}/api/cluster`;

export async function GET(event) {
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

export async function PUT(event) {
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

/*
GET http://localhost:5173/api/millicast/cluster

{
    "defaultCluster": "auto",
    "availableClusters": [
        {
            "id": "ams-1",
            "name": "Amsterdam",
            "rtmp": "rtmp-ams-1.millicast.com",
            "srt": "srt-ams-1.millicast.com"
        },
        {
            "id": "auto",
            "name": "Auto",
            "rtmp": "rtmp-auto.millicast.com",
            "srt": "srt-auto.millicast.com"
        },
        {
            "id": "blr-1",
            "name": "Bangalore",
            "rtmp": "rtmp-blr-1.millicast.com",
            "srt": "srt-blr-1.millicast.com"
        },
        {
            "id": "fra-1",
            "name": "Frankfurt",
            "rtmp": "rtmp-fra-1.millicast.com",
            "srt": "srt-fra-1.millicast.com"
        },
        {
            "id": "iad-1",
            "name": "Ashburn",
            "rtmp": "rtmp-iad-1.millicast.com",
            "srt": "srt-iad-1.millicast.com"
        },
        {
            "id": "lon-1",
            "name": "London",
            "rtmp": "rtmp-lon-1.millicast.com",
            "srt": "srt-lon-1.millicast.com"
        },
        {
            "id": "phx-1",
            "name": "Phoenix",
            "rtmp": "rtmp-phx-1.millicast.com",
            "srt": "srt-phx-1.millicast.com"
        },
        {
            "id": "sgp-1",
            "name": "Singapore",
            "rtmp": "rtmp-sgp-1.millicast.com",
            "srt": "srt-sgp-1.millicast.com"
        }
    ]
}

*/