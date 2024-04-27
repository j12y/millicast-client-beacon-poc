import { MILLICAST_API_ENDPOINT } from '$env/static/private';
import { get_headers } from '$lib/rest/millicast/common';

/*
  Functions for working with the REST /api/record_files endpoints.

  Documentation:
  https://docs.dolby.io/streaming-apis/reference/recordfilesv2_listrecordmediaassets
  https://docs.dolby.io/streaming-apis/reference/recordfiles_getrecordfile

*/

const RECORDING_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/record_files`;
const RECORDING_ENDPOINT_V2 = `${MILLICAST_API_ENDPOINT}/api/v2/record_files`;

export async function get_record_files_list_v2(params) {
    let url = `${RECORDING_ENDPOINT_V2}/list?`;
    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : ''; // AddedOn
    url += params?.status ? `&status=${params.status}` : ''; // Complete

    // TODO: does not work as a query parameter
    url += `&itemType=${params?.itemType}`;
    console.log(url);

    // TODO: must be able to specify body parameters, but does not work with fetch
    let body = {}
    body.tokenId = params?.tokenId || '';
    body.streamName = params?.streamName || '';
    body.clipRequestId = params?.clipRequestId || '';
    body.itemType = params?.itemType || '';
    //  body: body,

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_record_files_media_asset_id(params) {
    let url = `${RECORDING_ENDPOINT_V2}`;
    url += `/${params?.mediaAssetId}`;

    console.log(url);

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}


export async function get_record_files_list(params) {
    let url = `${RECORDING_ENDPOINT}/list?`;
    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : ''; // AddedOn
    url += params?.status ? `&status=${params.status}` : ''; // Complete

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_record_files_list_by_token(params) {
    let url = `${RECORDING_ENDPOINT}/list_by_token?`;
    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : ''; // AddedOn
    url += params?.status ? `&status=${params.status}` : ''; // Complete
    url += `&token=${params.token}`;

    console.log(url);

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_record_files_list_by_stream(params) {
    let url = `${RECORDING_ENDPOINT}/list_by_stream?`;
    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : ''; // AddedOn
    url += params?.status ? `&status=${params.status}` : ''; // Complete
    url += `&streamname=${params.streamname}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_record_files_usage(params) {
    let url = `${RECORDING_ENDPOINT}/usage?`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_record_files_usage_billing(params) {
    let url = `${RECORDING_ENDPOINT}/usage_billing?`;
    url += `startDate=${params?.startDate || ''}`;
    url += `&stopDate=${params?.stopDate || ''}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_record_files_record_file_id(params) {
    let url = `${RECORDING_ENDPOINT}`;
    url += `/${params?.recordFileId}`;

    console.log(url);

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

