import { json } from '@sveltejs/kit';

import { get_record_files_usage } from "$lib/rest/millicast/recordings"

export async function GET(event) {
    let params = { }
    let usage = await get_record_files_usage(params);
    return json(usage);
}
