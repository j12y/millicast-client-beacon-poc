import { MILLICAST_ACCOUNT_ID, MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';


export async function GET(event) {
    // TODO: url encode and decode stream name
    const streamId = MILLICAST_ACCOUNT_ID + '/' + event.params.streamName;
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/active?streamid=${streamId}`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();
    console.log(body);

    let result = {}
    if (body.status != 'success') {
        result.live = false;
    } else {
        result.live = body.data.tokenIds.length > 0;
    }

    return json(result);
}
