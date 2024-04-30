import { json } from '@sveltejs/kit';

import { get_transcoders_profiles } from '$lib/rest/millicast/transcoder.js';

export async function GET(event) {
    let params = {
        page: event.url.searchParams.get('page'),
        itemsOnPage: event.url.searchParams.get('itemsOnPage'),
        isDescending: event.url.searchParams.get('isDescending'),
        sortBy: event.url.searchParams.get('sortBy'),
    }
    let transcoders = await get_transcoders_profiles(params);
    return json(transcoders);
}
