import { json } from '@sveltejs/kit';

import { get_cluster } from "$lib/rest/millicast/cluster";

export async function GET(event) {
    let clusters = await get_cluster();
    return json(clusters);
}
