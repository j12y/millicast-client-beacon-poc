import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const startDate = event.url.searchParams.get('startDate'); 
    const stopDate = event.url.searchParams.get('stopDate');
    const resolution = event.url.searchParams.get('resolution');

    const url = `${MILLICAST_API_ENDPOINT}/api/analytics/account/series?startDate=${startDate}&stopDate=${stopDate}&resolution=${resolution}`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

/*
GET http://localhost:5173/api/millicast/analytics/account/series?startDate=2023-11-14&stopDate=2023-11-21&resolution=day

{
    "bandwidth": {
        "2023-11-14T00:00:00Z": {
            "bytesOut": 21674742306,
            "bytesIn": 21158616066
        },
        "2023-11-15T00:00:00Z": {
            "bytesOut": 21801952790,
            "bytesIn": 21032579715
        },
        "2023-11-16T00:00:00Z": {
            "bytesOut": 22190878401,
            "bytesIn": 21018506244
        },
        "2023-11-17T00:00:00Z": {
            "bytesOut": 21653491894,
            "bytesIn": 21024995162
        },
        "2023-11-18T00:00:00Z": {
            "bytesOut": 21654879731,
            "bytesIn": 21026425088
        },
        "2023-11-19T00:00:00Z": {
            "bytesOut": 21657660395,
            "bytesIn": 21029134225
        },
        "2023-11-20T00:00:00Z": {
            "bytesOut": 21718298798,
            "bytesIn": 21027318795
        }
    }
}

*/
