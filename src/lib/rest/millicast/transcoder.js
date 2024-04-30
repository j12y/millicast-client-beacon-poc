import { MILLICAST_API_ENDPOINT } from '$env/static/private';
import { get_headers } from '$lib/rest/millicast/common';

/*
  Functions for working with the REST /api/transcoders endpoint.

  Documentation: 
  https://docs.dolby.io/streaming-apis/reference/transcoder_gettranscoder

*/

const TRANSCODER_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/transcoders`;

// GET /millicast/api/transcoders
export async function get_transcoders(params) {
    let url = `${TRANSCODER_ENDPOINT}?`;

    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : '';

    if ('status' in params) {
        params.status.forEach(s => {
            url += `&status=${s}`
        });
    }

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_transcoders_by_id(params) {
    let url = `${TRANSCODER_ENDPOINT}/${params?.transcoderRecordId}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_transcoders_profiles(params) {
    let url = `${TRANSCODER_ENDPOINT}/profiles?`;

    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : '';

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_transcoders_instances(params) {
    let url = `${TRANSCODER_ENDPOINT}/instances?`;

    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : '';
    url += params?.transcoderId ? `&transcoderId=${params.transcoderId}` : '';
    url += params?.startDate ? `&startDate=${params.startDate}` : '';
    url += params?.endDate ? `&endDate=${params.endDate}` : '';

    if ('status' in params) {
        params.status.forEach(s => {
            url += `&status=${s}`
        });
    }

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_transcoders_instances_by_id(params) {
    let url = `${TRANSCODER_ENDPOINT}/${params?.transcoderInstanceId}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}
