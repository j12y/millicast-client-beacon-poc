
let url = 'http://localhost:5173/api/millicast/subscribe_token';
let options = {
    'method': 'POST',
    'headers': {
        'accept': 'application/json'
    },
    'body': JSON.stringify({
        "label": 'api-generated-2',
        "streams": [{"streamName":"secure-viewer"}]
    })
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));
