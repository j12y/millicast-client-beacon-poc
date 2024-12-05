import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const startDate = event.url.searchParams.get('startDate');
    const stopDate = event.url.searchParams.get('stopDate');

    const url = `${MILLICAST_API_ENDPOINT}/api/analytics/account/geo_total?startDate=${startDate}&stopDate=${stopDate}`
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

/*
GET http://localhost:5173/api/millicast/analytics/account/geo_total?startDate=2023-11-14&stopDate=2023-11-21

{
    "geo": {
        "US": {
            "publishDuration": 605890,
            "viewDuration": 607948,
            "bytesOut": 152351904315,
            "bytesIn": 147317575295
        }
    }
}

*/
