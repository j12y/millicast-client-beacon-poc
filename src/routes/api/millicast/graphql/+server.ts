import { MILLICAST_ACCOUNT_ID, MILLICAST_API_SECRET, MILLICAST_GRAPHQL_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST(event) {
    const request = await event.request.json();

    const url = `${MILLICAST_GRAPHQL_ENDPOINT}`;
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MILLICAST_API_SECRET}`
        },
        body: JSON.stringify(request)
      };

    let response = await fetch(url, options);
    let body = await response.json();
    return json(body);
}

/*

GET http://localhost:5173/api/millicast/graphql

let query = `query StreamStatPagination($page: Int) {
    streamStatPagination(page: $page, perPage: 10) {
        count,
        items {
            accountId
            from
            to
            active
            numStarted
            numEnded
            streamId

        }
        pageInfo {
            currentPage
            perPage
            pageCount
            itemCount
            hasNextPage
            hasPreviousPage
        }
  }
}
`;

options.body = JSON.stringify({
        "query": query,
        "variables": {skip: 0}
    }); 

*/

