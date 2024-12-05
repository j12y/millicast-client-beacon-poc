
import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

// This endpoint is more precise, but not particularly helpful given you need
// the token id and you get that from /list and all the same data is returned there

export async function GET(event) {

    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/${event.params.tokenId}`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let output = await response.json();

    return json(output);
}


/*

{
"status":"success",
"data": {
    "allowedCountries":[],
    "deniedCountries":[],
    "subscribeRequiresAuth":false,
    "record":false,
    "multisource":true,
    "enableThumbnails":false,
    "lowLatencyRtmp":true,
    "integrationId":"None",
    "displaySrtPassphrase":false,
    "id":6263060,
    "label":"codepen",
    "token":"10ae9c8928d0cadcc0635c8662292979f611de52a09d02a8024cb9f01a652a43",
    "addedOn":"2023-11-07T02:32:54Z",
    "isActive":true,
    "streams":[{"streamName":"websdk", "isRegex":false}],
    "allowedOrigins":[],
    "allowedIpAddresses":[],
    "originCluster":""
    }
}




*/