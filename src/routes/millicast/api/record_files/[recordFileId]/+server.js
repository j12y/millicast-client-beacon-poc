import { json } from '@sveltejs/kit';

import { get_record_files_record_file_id } from '$lib/rest/millicast/recordings';

export async function GET(event) {
    let media = await get_record_files_record_file_id({ recordFileId: event.params.recordFileId });
    return json(media);
}

