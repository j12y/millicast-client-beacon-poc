import { json } from '@sveltejs/kit';

import { get_publish_token_by_id } from "$lib/rest/millicast/publish_token";

export async function GET(event) {
    // TODO: this is colliding with list_by_name and active, but not list
    console.log('/api/millicast/publish_token/{tokenId}');
    let tokens = await get_publish_token_by_id({tokenId: event.params.tokenId});
    return json(tokens);
}