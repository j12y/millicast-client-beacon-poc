import { json } from '@sveltejs/kit';

import { get_publish_token_active_all } from "$lib/rest/millicast/publish_token";

export async function GET(event) {
    let tokens = await get_publish_token_active_all();
    return json(tokens);
}