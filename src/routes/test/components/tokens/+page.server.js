import { get_publish_token_list } from "$lib/rest/millicast/tokens.js";

export async function load({ params }) {
    let publish_tokens = await get_publish_token_list({itemsOnPage: 50});
    return {
        publish_tokens: publish_tokens.data,
    }
}