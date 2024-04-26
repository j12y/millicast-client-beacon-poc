import { json } from '@sveltejs/kit';

import { get_analytics_account_geo_series } from "$lib/rest/millicast/analytics";

export async function GET(event) {
    let params = {
        startDate: event.url.searchParams.get('startDate'),
        stopDate: event.url.searchParams.get('stopDate'),
        resolution: event.url.searchParams.get('resolution'),
    };
    let totals = await get_analytics_account_geo_series(params);
    return json(totals);
}
