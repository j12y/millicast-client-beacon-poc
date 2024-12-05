
let url = 'http://localhost:5173/api/millicast/cluster';
let options = {
    'method': 'PUT',
    'headers': {
        'accept': 'application/json'
    },
    'body': JSON.stringify({
        "defaultCluster": "auto"
    })
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));
