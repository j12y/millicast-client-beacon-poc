import { json } from '@sveltejs/kit';
import { get_countries } from '$lib/rest/regions.js';

export async function GET(event) {
    return json(get_countries());
}
