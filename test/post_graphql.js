
let url = 'http://localhost:5173/api/millicast/graphql';

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

let options = {
    'method': 'POST',
    'headers': {
        'Accept': 'application/json'
    },
    'body': JSON.stringify({
        "query": query,
        "variables": {}
    }),
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));
