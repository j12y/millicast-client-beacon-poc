
import { get_cluster } from "$lib/rest/millicast/cluster";
import { get_publish_token_list } from "$lib/rest/millicast/publish_token.js";

export async function load({ params }) {
    let clusters = await get_cluster();
    let publish_tokens = await get_publish_token_list({itemsOnPage: 50});

    return {
        clusters: clusters.data.availableClusters,
        publish_tokens: publish_tokens.data
    }
}