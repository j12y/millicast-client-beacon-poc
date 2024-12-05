import { MILLICAST_API_ENDPOINT } from '$env/static/private';
import { get_headers } from '$lib/rest/millicast/common';


const MONITORING_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/monitoring/streams`;

export async function get_monitoring_streams(params) {
    let url = MONITORING_ENDPOINT;
    url += `?page=${params?.page || 1}`;

    /*
    url += `&itemsOnPage=${params?.itemsOnPage || 25}`;
    url += `&isDescending=${params?.isDescending || true}`;
    url += params?.sortBy ? `&sortBy=${params.sortBy}` : '';
    */

    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    console.log(url);
    console.log(options);
    let response = await fetch(url, options);
    return await response.json();
}


