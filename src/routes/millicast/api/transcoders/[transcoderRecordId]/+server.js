import { json } from '@sveltejs/kit';

import { get_transcoders_by_id } from '$lib/rest/millicast/transcoder.js';

export async function GET(event) {
    let params = {
        transcoderRecordId: event.params.transcoderRecordId,
    }
    let transcoders = await get_transcoders_by_id(params);
    return json(transcoders);
}
