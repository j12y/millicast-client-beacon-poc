import { json } from '@sveltejs/kit';

import { get_publish_token_by_id } from "$lib/rest/millicast/tokens";

export async function GET(event) {
    let tokens = await get_publish_token_by_id({tokenId: event.params.tokenId});
    return json(tokens);
}