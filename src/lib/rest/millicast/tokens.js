import { MILLICAST_API_ENDPOINT } from '$env/static/private';
import { get_headers } from '$lib/rest/millicast/common';

/*
  Functions for working with the REST /api/publish_token and /api/subscribe_token endpoints.

  Documentation: 
  https://docs.dolby.io/streaming-apis/reference/publishtokenv1_readtoken
  https://docs.dolby.io/streaming-apis/reference/subscribetokenv1_readtoken

*/

const PUBLISH_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/publish_token`;
const SUBSCRIBE_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/subscribe_token`;

export async function get_publish_token_list(params) {
    let url = `${PUBLISH_ENDPOINT}/list?`;
    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += `&sortBy=${params?.sortBy || 'AddedOn'}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_publish_token_by_id(params) {
    let id = params.tokenId;
    let url = `${PUBLISH_ENDPOINT}/${id}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_publish_token_by_name(params) {
    let url = `${PUBLISH_ENDPOINT}/list_by_name?`;
    url += `name=${params?.name || 'myStreamName'}`;
    url += `&page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += `&sortBy=${params?.sortBy || 'AddedOn'}`;
    url += `&filterBy=${params?.filterBy || 'TokenOrStreamName'}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_publish_token_active(params) {
    let url = `${PUBLISH_ENDPOINT}/active?`;
    url += `streamId=${params?.streamId || '' }`;

    console.log(url);
    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_publish_token_active_all() {
    let url = `${PUBLISH_ENDPOINT}/active/all`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}



export async function get_subscribe_token_by_id(params) {
    let id = params.tokenId;
    let url = `${SUBSCRIBE_ENDPOINT}/${id}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_subscribe_token_list(params) {
    let url = `${SUBSCRIBE_ENDPOINT}/list?`;
    url += `page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += `&sortBy=${params?.sortBy || 'AddedOn'}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_subscribe_token_by_name(params) {
    let url = `${SUBSCRIBE_ENDPOINT}/list_by_name?`;
    url += `name=${params?.name || 'myStreamName'}`;
    url += `&page=${params?.page || 1}`;
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += `&sortBy=${params?.sortBy || 'AddedOn'}`;
    url += `&filterBy=${params?.filterBy || 'TokenOrStreamName'}`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

