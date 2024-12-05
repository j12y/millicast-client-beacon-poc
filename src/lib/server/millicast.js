import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';

const PUBLISH_TOKEN_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/publish_token`;


// GET /api/publish_token/list_by_name
export async function get_publish_token_list_by_name(name, itemsOnPage, page, isDescending, filterBy) {
    let url = `${PUBLISH_TOKEN_ENDPOINT}/list_by_name`;
    url += `?name=${name}`;

    url += itemsOnPage ? `&itemsOnPage=${itemsOnPage}` : '';
    url += page ? `&page=${page}` : '';
    url += isDescending ? `&isDescending=${isDescending}` : '';
    url += filterBy ? `&filterBy=${filterBy}` : '';

    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    return await response.json();
}

// GET /api/publish_token/active
export async function get_publish_token_active(streamId) {
    let url = `${PUBLISH_TOKEN_ENDPOINT}/active`;

    url += `?streamid=${streamId}`;

    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    return await response.json();
}

export async function get_record_files_list_by_stream(name, sortBy, itemsOnPage, page, isDescending, status) {
    let url = `${MILLICAST_API_ENDPOINT}/api/record_files/list_by_stream`;
    url += `?streamname=${name}`;

    url += sortBy ? `&sortBy=${sortBy}` : '';
    url += itemsOnPage ? `&itemsOnPage=${itemsOnPage}` : '';
    url += page ? `&page=${page}` : '';
    url += isDescending ? `&isDescending=${isDescending}` : '';
    url += status ? `&status=${status}` : '';

    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    return await response.json();
}
