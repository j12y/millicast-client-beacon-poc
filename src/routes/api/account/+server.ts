import { MILLICAST_ACCOUNT_ID, MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    return json({
        "id": MILLICAST_ACCOUNT_ID,
        "secret": MILLICAST_API_SECRET
    });
}
