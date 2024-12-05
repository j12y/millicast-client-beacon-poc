
let url = 'http://localhost:5173/api/millicast/subscribe_token/906502417';
let options = {
    'method': 'PUT',
    'headers': {
        'accept': 'application/json'
    },
    'body': JSON.stringify({
        'updateDeniedCountries': ['IR'],
        'updateAllowedOrigins': ['*.dolby.io']
    })
}

fetch(url, options)
    .then(response => response.json())
    .then(body => console.log(body))
    .catch(err => console.error(err));
