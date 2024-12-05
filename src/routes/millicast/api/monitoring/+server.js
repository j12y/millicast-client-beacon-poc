import { json } from '@sveltejs/kit';

import { get_monitoring_streams } from '$lib/rest/millicast/monitoring.js';

export async function GET(event) {
    let streams = await get_monitoring_streams();
    return json(streams);
}
