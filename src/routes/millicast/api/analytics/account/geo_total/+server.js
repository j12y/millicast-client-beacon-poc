import { json } from '@sveltejs/kit';

import { get_analytics_account_geo_total } from "$lib/rest/millicast/analytics";

export async function GET(event) {
    let params = {
        startDate: event.url.searchParams.get('startDate'),
        stopDate: event.url.searchParams.get('stopDate'),
    };
    let totals = await get_analytics_account_geo_total(params);
    return json(totals);
}
