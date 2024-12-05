import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

// This location data may come from the service in the future
const locations = {
    'ams-1': {country: 'Netherlands', label: 'Amsterdam, Netherlands', region: 'emea'},
    'blr-1': {country: 'India', label: 'Bangalore, India', region: 'apac'},
    'fra-1': {country: 'Germany', label: 'Frankfurt, Germany', region: 'emea'},
    'iad-1': {country: 'United States', label: 'Ashburn, VA, USA', region: 'amer'},
    'lon-1': {country: 'United Kingdom', label: 'London, UK', region: 'emea'},
    'phx-1': {country: 'United States', label: 'Phoenix, AZ, USA', region: 'amer'},
    'sgp-1': {country: 'Singapore', label: 'Singapore', region: 'apac'},
}

// GET /api/regions
const url = `${MILLICAST_API_ENDPOINT}/api/cluster`;
export async function GET(event) {
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    let regions = {};
    body.data.availableClusters.forEach((cluster) => {
        regions[cluster.id] = {};
        regions[cluster.id] = {
            'id': cluster.id,
            'name': locations[cluster.id]?.label || cluster.name,
            'rtmp': cluster.rtmp,
            'srt': cluster.srt,
            'location': locations[cluster.id]
        }
    });

    return json(regions);
}

/*
Response:
{
    "ams-1": {
        "id": "ams-1",
        "name": "Amsterdam, Netherlands",
        "rtmp": "rtmp-ams-1.millicast.com",
        "srt": "srt-ams-1.millicast.com",
        "location": {
            "country": "Netherlands",
            "label": "Amsterdam, Netherlands",
            "region": "emea"
        }
    }
}
*/