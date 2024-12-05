import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

// Read File
export async function GET(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/record_files/${event.params.id}`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}


/*
GET http://localhost:5173/api/millicast/record_files/618002

{
    "download": {
        "downloadUrl": "https://milli-sfo2-4.sfo2.digitaloceanspaces.com/GCNQRh/f0c283979ed44371b89ba1d4af790896/feed4b93499c-4d73-48ba-a779-16d4d4d95413_1675053471297_full.webm?AWSAccessKeyId=PK7QIT645R5NIXXXAWPC&Expires=1700634737&response-content-disposition=attachment%3B%20filename%20%3D%20unity-rts_1675053471.webm&Signature=hpPusfr58wm%2BDtPckAjeJJUIMoo%3D",
        "downloadExpiresOn": "2023-11-22T06:32:16.89025Z"
    },
    "id": 618002,
    "tokenId": 4664885,
    "token": "34aa48683054a4fa19b7297df6186cd009d677cdd871ba2f68bdb5abd1e57b90",
    "streamName": "unity-rts",
    "recordedOn": "2023-01-30T04:37:51Z",
    "status": "Complete",
    "metadata": {
        "format": "WEBM",
        "sizes": {
            "concat": 53205984,
            "dash": 53219926,
            "thumbnails": 310076
        },
        "duration": 213,
        "tracks": [
            {
                "type": "video",
                "codec": "VP8",
                "bitrate": 2949430,
                "width": 1280,
                "height": 720,
                "framerate": 0
            },
            {
                "type": "audio",
                "codec": "Opus",
                "bitrate": 67498,
                "channels": 2,
                "samplerate": 48000
            }
        ],
        "thumbnails": [
            "https://milli-sfo2-4.cdn.millicast.net/GCNQRh/f0c283979ed44371b89ba1d4af790896/thumbs/feed4b93499c-4d73-48ba-a779-16d4d4d95413_1675053471297-002.jpg",
            "https://milli-sfo2-4.cdn.millicast.net/GCNQRh/f0c283979ed44371b89ba1d4af790896/thumbs/feed4b93499c-4d73-48ba-a779-16d4d4d95413_1675053471297-003.jpg",
            "https://milli-sfo2-4.cdn.millicast.net/GCNQRh/f0c283979ed44371b89ba1d4af790896/thumbs/feed4b93499c-4d73-48ba-a779-16d4d4d95413_1675053471297-004.jpg",
            "https://milli-sfo2-4.cdn.millicast.net/GCNQRh/f0c283979ed44371b89ba1d4af790896/thumbs/feed4b93499c-4d73-48ba-a779-16d4d4d95413_1675053471297-005.jpg",
            "https://milli-sfo2-4.cdn.millicast.net/GCNQRh/f0c283979ed44371b89ba1d4af790896/thumbs/feed4b93499c-4d73-48ba-a779-16d4d4d95413_1675053471297-006.jpg",
            "https://milli-sfo2-4.cdn.millicast.net/GCNQRh/f0c283979ed44371b89ba1d4af790896/thumbs/feed4b93499c-4d73-48ba-a779-16d4d4d95413_1675053471297-007.jpg"
        ]
    }
}


*/