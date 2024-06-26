import { json } from '@sveltejs/kit';

import { get_publish_token_list } from "$lib/rest/millicast/publish_token";

export async function GET(event) {
    let params = {
        page: event.url.searchParams.get('page'),
        itemsOnPage: event.url.searchParams.get('itemsOnPage'),
        isDescending: event.url.searchParams.get('isDescending'),
        sortBy: event.url.searchParams.get('sortBy')
    };

    let tokens = await get_publish_token_list(params);
    return json(tokens);
}

