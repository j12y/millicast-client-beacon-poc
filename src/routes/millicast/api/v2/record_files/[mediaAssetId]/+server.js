import { json } from '@sveltejs/kit';

import { get_record_files_media_asset_id } from '$lib/rest/millicast/media';

export async function GET(event) {
    let media = await get_record_files_media_asset_id({ mediaAssetId: event.params.mediaAssetId });
    return json(media);
}

