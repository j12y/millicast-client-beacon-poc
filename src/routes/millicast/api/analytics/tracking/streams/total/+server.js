import { json } from '@sveltejs/kit';

import { get_analytics_tracking_streams_total } from "$lib/rest/millicast/analytics";

export async function GET(event) {
    let params = {
        startDate: event.url.searchParams.get('startDate'),
        stopDate: event.url.searchParams.get('stopDate'),
        streamNames: event.url.searchParams.getAll('streamNames'),
    };
    let totals = await get_analytics_tracking_streams_total(params);
    return json(totals);
}
