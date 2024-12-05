
export async function load({ fetch }) {
    const response = await fetch('/api/v1/streams');
    const streams = await response.json();
    return streams;
}
