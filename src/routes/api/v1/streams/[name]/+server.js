import { json } from '@sveltejs/kit';

import { get_stream_by_name } from "$lib/rest/streams";

export async function GET(event) {
    let stream = await get_stream_by_name(event.params.name);
    return json(stream);
}

