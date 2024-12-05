
let url = 'http://localhost:5173/api/millicast/cluster';
let options = {
    'method': 'GET',
    'headers': {
        'accept': 'application/json'
    }
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));

