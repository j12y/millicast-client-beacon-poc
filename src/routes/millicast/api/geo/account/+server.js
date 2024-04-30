import { json } from '@sveltejs/kit';

import { get_geo_account } from "$lib/rest/millicast/account";

export async function GET(event) {
    let geos = await get_geo_account();
    return json(geos);
}
