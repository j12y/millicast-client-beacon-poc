import { json } from '@sveltejs/kit';

import { get_publish_token_active } from "$lib/rest/millicast/publish_token";

export async function GET(event) {
    let params = {
        streamId: event.url.searchParams.get('streamId'),
    }
    let tokens = await get_publish_token_active(params);
    return json(tokens);
}


