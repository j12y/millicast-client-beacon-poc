import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const startDate = event.url.searchParams.get('startDate');
    const stopDate = event.url.searchParams.get('stopDate');
    const streamNames = event.url.searchParams.getAll('streamNames') || [];

    let url = `${MILLICAST_API_ENDPOINT}/api/analytics/streams/total?startDate=${startDate}&stopDate=${stopDate}`
    streamNames.forEach(streamName => {
        url += `&streamNames=${streamName}`
    });
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

/*
GET http://localhost:5173/api/millicast/analytics/streams/total?startDate=2023-11-01&stopDate=2023-11-30&streamNames=millidash

{
    "millidash": {
        "bytesOut": 303328052,
        "bytesIn": 569123946
    }
}

*/
