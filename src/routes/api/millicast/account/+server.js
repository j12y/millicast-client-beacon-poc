import { json } from '@sveltejs/kit';
import { get_account_id } from '$lib/rest/millicast/account.js';

export async function GET(event) {
    return json({
        "id": get_account_id()
    })
}