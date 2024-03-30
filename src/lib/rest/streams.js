import { get_publish_token_list } from "./millicast/publish_token";

export async function get_streams() {
    const streams = await get_streams_index();

    return Object.keys(streams);
}

export async function get_stream_by_name(name) {
    const streams = await get_streams_index();

    return streams[name];
}

// Get publish tokens and re-index by stream name
export async function get_streams_index() {
    const tokens = await get_publish_token_list();

    let streams = {};
    tokens.data.forEach((token) => {
        token.streams.forEach(stream => {
            let name = stream.streamName;
            if (!streams.hasOwnProperty(name)) {
                streams[name] = {
                    "publish_tokens": [],
                }
            }

            streams[name]["publish_tokens"].push(token);
        });
    });

    return streams;
}

