import { json } from '@sveltejs/kit';

import { get_transcoders_instances_by_id } from '$lib/rest/millicast/transcoder.js';

export async function GET(event) {
    let params = {
        transcoderInstanceId: event.params.transcoderInstanceId,
    }
    let transcoders = await get_transcoders_instances_by_id(params);
    return json(transcoders);
}
