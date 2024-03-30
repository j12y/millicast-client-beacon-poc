import { get_cluster } from "$lib/rest/millicast/cluster";

export async function load({ params }) {
    let clusters = await get_cluster();
    return {
        clusters: clusters.data.availableClusters,
    }
}