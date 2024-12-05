import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const sortBy = event.url.searchParams.get('sort') || 'AddedOn';
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/list?sortBy=${sortBy}&page=1&itemsOnPage=25&isDescending=true`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body);
}

/*

{
    "status":"success",
    "data": [
        {
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
            "streams":[
                {
                    "streamName":"websdk",
                    "isRegex":false
                }],
            "allowedOrigins":[],
            "allowedIpAddresses":[],
            "originCluster":""
        },
        {"allowedCountries":[],"deniedCountries":[],"subscribeRequiresAuth":false,"record":false,"multisource":false,"enableThumbnails":true,"lowLatencyRtmp":true,"integrationId":"None","displaySrtPassphrase":false,"id":5839731,"label":"thumbnail-tests","token":"236372512b109525f2f7668d3ac6784212c21295eee57ac3b9c3704a12957918","addedOn":"2023-08-28T17:01:54Z","isActive":true,"streams":[{"streamName":"thumbnails","isRegex":false}],"allowedOrigins":[],"allowedIpAddresses":[]},
        ...
    ]
}


*/