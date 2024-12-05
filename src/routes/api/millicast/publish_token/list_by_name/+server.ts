import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';


// TODO: filterBy=StreamName doesn't seem to work or unclear what its supposed to do

export async function GET(event) {
    const sortBy = event.url.searchParams.get('sort') || 'Name';
    const itemsOnPage = event.url.searchParams.get('itemsOnPage') || 25; 
    const page = event.url.searchParams.get('page') || 1; 
    const isDescending = event.url.searchParams.get('isDescending') || false;
    const name = event.url.searchParams.get('name');
    const filterBy = event.url.searchParams.get('filterBy') || '';

    let url = `${MILLICAST_API_ENDPOINT}/api/publish_token/list_by_name?sortBy=${sortBy}&itemsOnPage=${itemsOnPage}&page=${page}&isDescending=${isDescending}&sortBy=${sortBy}&name=${name}`;
    url += filterBy ? `filterBy=${filterBy}` : '';
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

