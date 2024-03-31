import { get_account_id } from "$lib/rest/millicast/account";
import { get_streams } from "$lib/rest/streams.js";

export async function load({ params }) {
    let streams = await get_streams();
    return {
        accountId: get_account_id(),
        streams: streams,
        stream: params.stream
    }
}

