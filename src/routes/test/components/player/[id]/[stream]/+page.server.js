import { get_streams } from "$lib/rest/streams.js";

export async function load({ params }) {
    return {
        id: params.id,
        stream: params.stream,
        streams: await get_streams()
    }
}