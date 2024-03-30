import { MILLICAST_API_ENDPOINT } from '$env/static/private';
import { get_headers } from '$lib/rest/millicast/common';

/*
  Functions for working with the REST /api/cluster endpoint.

  Documentation: 
  https://docs.dolby.io/streaming-apis/reference/cluster_getclustersinfo

*/

const CLUSTER_ENDPOINT = `${MILLICAST_API_ENDPOINT}/api/cluster`;

// GET /api/cluster
export async function get_cluster() {
    const options = {
      method: 'GET',
      headers: get_headers(),
    };
    let response = await fetch(CLUSTER_ENDPOINT, options);
    return await response.json();
}

// PUT /api/cluster
export async function update_cluster(defaultCluster) {
  const options = {
    method: 'PUT',
    headers: get_headers(),
    body: JSON.stringify({defaultCluster: defaultCluster})
  };

  let response = await fetch(CLUSTER_ENDPOINT, options);
  let body = await response.json();

  return json(body);
}


