import { MILLICAST_ACCOUNT_ID, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { get_headers } from '$lib/rest/millicast/common';

/*
  Functions for working with the REST endpoints for global account settings.

  Documentation:
  https://docs.dolby.io/streaming-apis/reference/analytics_accounttotal  

*/
export function get_account_id() {
  return MILLICAST_ACCOUNT_ID;
}




export async function get_geo_account() {
    let url = `${MILLICAST_API_ENDPOINT}/api/geo/account`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}

export async function get_account_geo_cascade() {
    let url = `${MILLICAST_API_ENDPOINT}/api/account/geo_cascade`;

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}
