import { json } from '@sveltejs/kit';

import { get_record_files_usage_billing } from "$lib/rest/millicast/recordings"

export async function GET(event) {
    let params = {
        startDate: event.url.searchParams.get('startDate'),
        stopDate: event.url.searchParams.get('stopDate'),
    };
    let usage = await get_record_files_usage_billing(params);
    return json(usage);
}
