import { MILLICAST_API_ENDPOINT } from '$env/static/private';
import { get_headers } from '$lib/rest/millicast/common';

/*
  Functions for working with the REST /api/analytics endpoints.

  Documentation:
  https://docs.dolby.io/streaming-apis/reference/analytics_accounttotal  


  // Could default to previous 7 days but this would diverge from endpoint behavior
  // const stop = new Date();
  // const start = new Date(new Date().setDate(stop.getDate() - 7));
  // url += `startDate=${params?.startDate || start.toISOString().split('T')[0] }`;
  // url += `&stopDate=${params?.stopDate || stop.toISOString().split('T')[0] }`;
*/

const ANALYTICS_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/analytics`;

async function get_analytics(url, params) {
    // All analytics endpoints take start and stop dates
    url += `startDate=${params?.startDate || ''}`;
    url += `&stopDate=${params?.stopDate || ''}`;

    // Series analytics endpoints also use a resolution
    url += `&resolution=${params?.resolution || ''}`;

    // For streams analytics endpoints, they accept a list of stream names
    if ('streamNames' in params) {
        params.streamNames.forEach(streamName => {
            url += `&streamNames=${streamName}`
        });
    }

    // For tracking analytics endpoints, they accept a list of tracking ids
    if ('trackingIds' in params) {
        params.trackingIds.forEach(trackingId => {
            url += `&trackingIds=${trackingId}`
        });
    }

    // Fetch the results with auth headers
    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(url, options);
    return await response.json();
}


// GET /api/analytics/account/total
export async function get_analytics_account_total(params) {
    let url = `${ANALYTICS_ENDPOINT}/account/total?`; 
    return await get_analytics(url, params);
}

// GET /api/analytics/account/geo_total
export async function get_analytics_account_geo_total(params) {
    let url = `${ANALYTICS_ENDPOINT}/account/geo_total?`; 
    return await get_analytics(url, params);
}

// GET /api/analytics/account/series
export async function get_analytics_account_series(params) {
    let url = `${ANALYTICS_ENDPOINT}/account/series?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/account/geo_series
export async function get_analytics_account_geo_series(params) {
    let url = `${ANALYTICS_ENDPOINT}/account/geo_series?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/streams/total
export async function get_analytics_streams_total(params) {
    let url = `${ANALYTICS_ENDPOINT}/streams/total?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/streams/series
export async function get_analytics_streams_series(params) {
    let url = `${ANALYTICS_ENDPOINT}/streams/series?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/streams/geo_total
export async function get_analytics_streams_geo_total(params) {
    let url = `${ANALYTICS_ENDPOINT}/streams/geo_total?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/streams/geo_series
export async function get_analytics_streams_geo_series(params) {
    let url = `${ANALYTICS_ENDPOINT}/streams/geo_series?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/tracking/total
export async function get_analytics_tracking_total(params) {
    let url = `${ANALYTICS_ENDPOINT}/tracking/total?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/tracking/series
export async function get_analytics_tracking_series(params) {
    let url = `${ANALYTICS_ENDPOINT}/tracking/series?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/tracking/streams/total
export async function get_analytics_tracking_streams_total(params) {
    let url = `${ANALYTICS_ENDPOINT}/tracking/streams/total?`;
    return await get_analytics(url, params); 
}

// GET /api/analytics/tracking/streams/series
export async function get_analytics_tracking_streams_series(params) {
    let url = `${ANALYTICS_ENDPOINT}/tracking/streams/series?`;
    return await get_analytics(url, params); 
}

