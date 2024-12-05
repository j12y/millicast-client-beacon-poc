import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const startDate = event.url.searchParams.get('startDate');
    const stopDate = event.url.searchParams.get('stopDate');
    const streamNames = event.url.searchParams.getAll('streamNames') || [];

    let url = `${MILLICAST_API_ENDPOINT}/api/analytics/streams/geo_total?startDate=${startDate}&stopDate=${stopDate}&resolution=${resolution}`
    streamNames.forEach(streamName => {
        url += `&streamNames=${streamName}`
    });
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

/*
GET http://localhost:5173/api/millicast/analytics/account/geo_total?startDate=2023-11-01&stopDate=2023-11-30

{
    "geo": {
        "US": {
            "publishDuration": 1780066,
            "viewDuration": 1474046,
            "bytesOut": 428569562403,
            "bytesIn": 544056336031
        }
    }
}


*/
