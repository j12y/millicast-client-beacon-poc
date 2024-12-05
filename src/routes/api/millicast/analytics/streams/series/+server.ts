import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const startDate = event.url.searchParams.get('startDate');
    const stopDate = event.url.searchParams.get('stopDate');
    const resolution = event.url.searchParams.get('resolution');
    const streamNames = event.url.searchParams.getAll('streamNames') || [];

    let url = `${MILLICAST_API_ENDPOINT}/api/analytics/streams/series?startDate=${startDate}&stopDate=${stopDate}&resolution=${resolution}`
    streamNames.forEach(streamName => {
        url += `&streamNames=${streamName}`
    });
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

/*
GET http://localhost:5173/api/millicast/analytics/streams/series?startDate=2023-11-01&stopDate=2023-11-30&resolution=day&streamNames=millidash

{
    "millidash": {
        "bandwidth": {
            "2023-11-01T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-02T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-03T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-04T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-05T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-06T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-07T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-08T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-09T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-10T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-11T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-12T00:00:00Z": {
                "bytesOut": 290165886,
                "bytesIn": 409420607
            },
            "2023-11-13T00:00:00Z": {
                "bytesOut": 9650574,
                "bytesIn": 19801361
            },
            "2023-11-14T00:00:00Z": {
                "bytesOut": 3511592,
                "bytesIn": 133279419
            },
            "2023-11-15T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 6622559
            },
            "2023-11-16T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-17T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-18T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-19T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-20T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-21T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-22T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-23T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-24T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-25T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-26T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-27T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-28T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            },
            "2023-11-29T00:00:00Z": {
                "bytesOut": 0,
                "bytesIn": 0
            }
        }
    }
}


*/
