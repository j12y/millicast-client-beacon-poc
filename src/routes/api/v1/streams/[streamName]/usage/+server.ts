import { MILLICAST_ACCOUNT_ID, MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT, MILLICAST_GRAPHQL_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const streamId = MILLICAST_ACCOUNT_ID + '/' + event.params.streamName;
    const url = `${MILLICAST_GRAPHQL_ENDPOINT}`;


    let query = `query StreamStatFindOne() {
                streamStatFindOne() {
                    accountId
                    streamId
                    from
                    to
                    active
                    numStarted
                    numEnded
                }
              }
    `;

    query = `query StreamStatPagination($page: Int) {
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



    let response = await fetch('https://api.millicast.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MILLICAST_API_SECRET}`
        },
        body: JSON.stringify({
          query: query,
          variables: {
            skip: 0,
          },
        }),
      });
      let body = await response.json();

      return json(body);

}



/*

    query = `query StreamStatFindMany($skip: Int) {
                streamStatFindMany(skip: $skip) {
                    accountId
                    streamId
                    from
                    to
                    active
                    numStarted
                    numEnded
                }
              }
    `;






*/
