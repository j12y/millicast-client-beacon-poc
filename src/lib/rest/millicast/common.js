import { MILLICAST_API_SECRET } from '$env/static/private';

export function get_headers(method='GET') {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MILLICAST_API_SECRET}`
    };

    return headers;
}

