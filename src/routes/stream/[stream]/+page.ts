
async function getStreams(fetch) {
    const response = await fetch('/api/v1/streams');
    const streams = await response.json();
    return streams;
}

async function getAccountId(fetch) {
    const response = await fetch('/api/account');
    const account = await response.json();
    return account.id;
}



export async function load({ fetch, params }) {
    const streamName = decodeURI(params.stream);

    const streams = await getStreams(fetch);
    const accountId = await getAccountId(fetch);

    return {
        name: streamName,
        details: streams[streamName],
        accountId: accountId,
        public: true,
        sources: streams[streamName].tokens.length,
    }
}
