
let url = 'http://localhost:5173/api/millicast/subscribe_token/906503101';
let options = {
    'method': 'DELETE',
    'headers': {
        'accept': 'application/json'
    },
    'body': JSON.stringify({
    })
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));
