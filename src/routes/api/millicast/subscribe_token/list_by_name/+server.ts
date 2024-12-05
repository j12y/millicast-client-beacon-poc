import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';


export async function GET(event) {
    const sortBy = event.url.searchParams.get('sort') || 'Name';
    const itemsOnPage = event.url.searchParams.get('itemsOnPage') || 25; 
    const page = event.url.searchParams.get('page') || 1; 
    const isDescending = event.url.searchParams.get('isDescending') || false;
    const name = event.url.searchParams.get('name');
    const filterBy = event.url.searchParams.get('filterBy') || '';

    let url = `${MILLICAST_API_ENDPOINT}/api/subscribe_token/list_by_name?sortBy=${sortBy}&itemsOnPage=${itemsOnPage}&page=${page}&isDescending=${isDescending}&sortBy=${sortBy}&name=${name}`;
    url += filterBy ? `filterBy=${filterBy}` : '';
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}


/*

capital insensitive search: test, Test, tok, lkin 

GET http://localhost:5173/api/millicast/subscribe_token/list_by_name?name=test

[
    {
        "allowedCountries": [],
        "deniedCountries": [],
        "id": 890424360,
        "label": "TestToken",
        "token": "c055be32ce9b178384af33524e7f29da91fb66a2d24cf1254a7a0ecd8d5f3107",
        "addedOn": "2023-07-26T21:57:40Z",
        "isActive": true,
        "streams": [
            {
                "streamName": "lkin7jau",
                "isRegex": false
            }
        ],
        "allowedOrigins": [],
        "allowedIpAddresses": []
    }
]


*/