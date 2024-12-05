import { get_cluster } from "$lib/rest/millicast/cluster.js";
import { get_transcoders, get_transcoders_profiles } from "$lib/rest/millicast/transcoder.js";

export async function load({ params }) {
    let profiles = await get_transcoders_profiles({});
    let clusters = await get_cluster();

    let transcoderIndex = {};
    let transcoders = await get_transcoders({});
    transcoders.data.forEach(transcoder => { 
        transcoderIndex[transcoder.transcoderId] = transcoder;
    });

    return {
        transcoders: transcoderIndex,
        profiles: profiles.data,
        clusters: clusters.data.availableClusters,
    }
}