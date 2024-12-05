import { MILLICAST_ACCOUNT_ID } from '$env/static/private';


// Return a token that has additional derived properties
export function getTokenSummary(token) {
    // TODO: set protocol on each token, multibitrate, and truncate label
    // TODO: truncate label on each token
    // TODO: multibitrate for RTMP

    token.summary = {};
    token.summary.name = token.label;
    token.summary.protocol = 'WHIP';
    token.summary.multibitrate = false;
    token.summary.isLive = false;

    ['WHIP', 'RTMP', 'SRT'].forEach((protocol) => {
        if (token.summary.name.includes(`[${protocol}]`)) {
            token.summary.protocol = protocol;
        }
        token.summary.name = token.summary.name.replace(`[${protocol}]`, '').trim();
    });

    if (token.summary.name.includes('[MBR]')) {
        token.summary.name = token.summary.name.replace('[MBR]', '').trim();
        token.summary.isMultibitrate = true;
    }

    return token;
}

// Return a stream that has been derived from the set of tokens attributed for it
export function getStreamSummary(name, tokens, live, recordings) {
    let stream = {
        name: name,
        id: `${MILLICAST_ACCOUNT_ID}/${name}`,
        tokens: [],
        summary: {
            isPublic: false,
            isMultisource: false,
            isLive: false,
            isActive: false,
            canRecord: false,
            hasRestrictions: false,
            hasExpiration: false,
            hasThumbnails: false,
        },
        recordings: recordings
    }

    // When there is more than one token, then we consider it having multiple sources
    if (tokens.length > 1) {
        stream.summary.isMultisource = true;
    } 

    tokens.forEach(originalToken => {
        // Include tokens enriched with additional summarized data
        let token = getTokenSummary(originalToken);
        stream.tokens.push(token);

        // As long as one token is generating thumbnails, then the stream has thumbnails
        if (token.enableThumbnails) {
            stream.summary.hasThumbnails = true;
        }

        if (live.includes(token.id)) {
            token.summary.isLive = true;
            stream.summary.isLive = true;
        }

        // As any token does not require auth, then the stream has public content
        if (!token.subscribeRequiresAuth) {
            stream.summary.isPublic = true;
        }

        // As long as one token is active, then the stream can be active overall
        if (token.isActive) {
            stream.summary.isActive = true;
        }

        // As long as one token can be recorded, then the stream can be recorded
        if (token.record) {
            stream.summary.canRecord = true;
        }

        // Any types of token restrictions (domain, ip address, geo)
        if (token.allowedCountries.length > 0 || token.allowedIpAddresses.length > 0 || token.allowedOrigins.length > 0 || token.deniedCountries.length > 0) { 
            stream.summary.hasRestrictions = true;
        }

        // Any token that will expires indicates the stream will stop working
        if (token.expiresOn) {
            stream.summary.hasExpiration = true;
        }

    });
        
    return stream;
}


/*

{
    "name": "millidash",
    "id": "GCNQRh/millidash",
    "tokens": [
        {
            "allowedCountries": [],
            "deniedCountries": [],
            "subscribeRequiresAuth": false,
            "record": false,
            "multisource": true,
            "enableThumbnails": false,
            "lowLatencyRtmp": true,
            "integrationId": "None",
            "displaySrtPassphrase": false,
            "id": 6293767,
            "label": "[RTMP][MBR] ffmpeg",
            "token": "88e0a5a29159baca6926381dc80d38e792cd0e78d08ca151763ab0835998f421",
            "addedOn": "2023-11-12T16:00:36Z",
            "isActive": true,
            "streams": [
                {
                    "streamName": "millidash",
                    "isRegex": false
                }
            ],
            "allowedOrigins": [],
            "allowedIpAddresses": [],
            "originCluster": "",
            "summary": {
                "protocol": "WHIP",
                "multibitrate": false,
                "isLive": false
            }
        },
        {
            "allowedCountries": [],
            "deniedCountries": [],
            "subscribeRequiresAuth": false,
            "record": false,
            "multisource": true,
            "enableThumbnails": false,
            "lowLatencyRtmp": true,
            "integrationId": "None",
            "displaySrtPassphrase": false,
            "id": 6293757,
            "label": "[WHIP] browser",
            "token": "c5d16b726b5d73065dba7edc6f8fe017c5c38d987ff515c5121f93b30c384b2f",
            "addedOn": "2023-11-12T15:59:40Z",
            "isActive": true,
            "streams": [
                {
                    "streamName": "millidash",
                    "isRegex": false
                }
            ],
            "allowedOrigins": [],
            "allowedIpAddresses": [],
            "originCluster": "",
            "summary": {
                "protocol": "WHIP",
                "multibitrate": false,
                "isLive": false
            }
        },
        {
            "allowedCountries": [],
            "deniedCountries": [],
            "subscribeRequiresAuth": false,
            "record": true,
            "multisource": true,
            "enableThumbnails": true,
            "lowLatencyRtmp": true,
            "integrationId": "None",
            "displaySrtPassphrase": false,
            "id": 6293759,
            "label": "[WHIP] obs",
            "token": "824d3caa26630b88b215c71159f404a54cc72b48d95203624d8988344f485f9d",
            "addedOn": "2023-11-12T15:59:59Z",
            "isActive": true,
            "streams": [
                {
                    "streamName": "millidash",
                    "isRegex": false
                }
            ],
            "allowedOrigins": [],
            "allowedIpAddresses": [],
            "originCluster": "",
            "summary": {
                "protocol": "WHIP",
                "multibitrate": false,
                "isLive": false
            }
        }
    ],
    "summary": {
        "isPublic": true,
        "isMultisource": true,
        "isLive": false,
        "isActive": true,
        "canRecord": true,
        "hasRestrictions": false,
        "hasExpiration": false,
        "hasThumbnails": true
    },
    "recordings": []
}

*/