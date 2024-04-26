import { json } from '@sveltejs/kit';

import { get_account_geo_cascade } from "$lib/rest/millicast/account";

export async function GET(event) {
    let geos = await get_account_geo_cascade();
    return json(geos);
}
