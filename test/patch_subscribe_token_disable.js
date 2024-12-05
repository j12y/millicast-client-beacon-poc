
let url = 'http://localhost:5173/api/millicast/publish_token/disable';
let options = {
    'method': 'PATCH',
    'headers': {
        'accept': 'application/json'
    },
    'body': JSON.stringify({
        "tokenIds": [3716138]
    })
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));
