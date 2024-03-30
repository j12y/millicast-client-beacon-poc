import { json } from '@sveltejs/kit';

import { get_publish_token_by_name } from "$lib/rest/millicast/publish_token";

export async function GET(event) {
    let params = {
        name: event.url.searchParams.get('name'),
        page: event.url.searchParams.get('page'),
        itemsOnPage: event.url.searchParams.get('itemsOnPage'),
        isDescending: event.url.searchParams.get('isDescending'),
        sortBy: event.url.searchParams.get('sortBy'),
        filterBy: event.url.searchParams.get('filterBy')
    };

    let tokens = await get_publish_token_by_name(params);
    return json(tokens);
}

