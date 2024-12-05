
let url = 'http://localhost:5173/api/millicast/geo/account';
let options = {
    'method': 'POST',
    'headers': {
        'accept': 'application/json'
    },
    'body': JSON.stringify({
        "updateAllowedCountries": [],
        "updateDeniedCountries": ["Iran"]
    })
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));
