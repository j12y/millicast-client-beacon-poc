import { json } from '@sveltejs/kit';

import { get_transcoders_instances } from '$lib/rest/millicast/transcoder.js';

export async function GET(event) {
    let params = {
        page: event.url.searchParams.get('page'),
        itemsOnPage: event.url.searchParams.get('itemsOnPage'),
        isDescending: event.url.searchParams.get('isDescending'),
        sortBy: event.url.searchParams.get('sortBy'),
        startDate: event.url.searchParams.get('startDate'),
        endDate: event.url.searchParams.get('endDate'),
        transcoderId: event.url.searchParams.get('transcoderId'),
        status: event.url.searchParams.getAll('status'),
    }
    let transcoders = await get_transcoders_instances(params);
    return json(transcoders);
}
