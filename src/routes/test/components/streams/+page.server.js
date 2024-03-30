import { get_streams } from "$lib/rest/streams.js";

export async function load({ params }) {
    let streams = await get_streams();
    return {
        streams: streams
    }
}