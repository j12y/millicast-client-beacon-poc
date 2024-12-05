import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const sortBy = event.url.searchParams.get('sort') || 'RecordedOn';
    const itemsOnPage = event.url.searchParams.get('itemsOnPage') || 25; 
    const page = event.url.searchParams.get('page') || 1; 
    const isDescending = event.url.searchParams.get('isDescending') || false;
    const status = event.url.searchParams.get('status');
    const token = event.url.searchParams.get('token');
    const tokenId = event.url.searchParams.get('tokenId');

    let url = `${MILLICAST_API_ENDPOINT}/api/record_files/list_by_token?sortBy=${sortBy}&page=${page}&itemsOnPage=${itemsOnPage}&isDescending=${isDescending}`;
    url += status ? `&status=${status}` : '';
    url += token ? `&token=${token}` : '';
    url += tokenId ? `&tokenId=${tokenId}` : '';

    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

/*
GET http://localhost:5173/api/millicast/publish_token/list
[
    {
        "allowedCountries": [
            "US"
        ],
        "deniedCountries": [
            "CA"
        ],
        "subscribeRequiresAuth": false,
        "record": false,
        "multisource": true,
        "enableThumbnails": false,
        "lowLatencyRtmp": true,
        "integrationId": "None",
        "displaySrtPassphrase": false,
        "id": 6315224,
        "label": "[WHIP] browser",
        "token": "d9a6bbc2c804a2cfeea33594ff2f4f60e1e9a138cc39dc3c730909224a24a2df",
        "addedOn": "2023-11-15T16:51:26Z",
        "isActive": true,
        "streams": [
            {
                "streamName": "token-security",
                "isRegex": false
            }
        ],
        "allowedOrigins": [
            "*.dolby.io"
        ],
        "allowedIpAddresses": [
            "50.222.42.250/32"
        ],
        "originCluster": ""
    },
    ...
]

*/