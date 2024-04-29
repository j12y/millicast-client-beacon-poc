import { json } from '@sveltejs/kit';

import { get_record_files_list_by_stream } from "$lib/rest/millicast/media"

export async function GET(event) {
    let params = {
        page: event.url.searchParams.get('page'),
        itemsOnPage: event.url.searchParams.get('itemsOnPage'),
        isDescending: event.url.searchParams.get('isDescending'),
        sortBy: event.url.searchParams.get('sortBy'),
        status: event.url.searchParams.get('status'),
        itemType: event.url.searchParams.get('itemType'),
        streamname: event.url.searchParams.get('streamname'),
    }
    let recordings = await get_record_files_list_by_stream(params);
    return json(recordings);
}
