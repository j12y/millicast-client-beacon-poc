import { json } from '@sveltejs/kit';

import { get_streams } from "$lib/rest/streams";

export async function GET(event) {
    let streams = await get_streams();
    return json(streams);
}
