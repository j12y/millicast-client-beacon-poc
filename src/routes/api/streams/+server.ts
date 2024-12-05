import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    return json({});
}




/*


/streams/ --> return all streams
/streams/{name} --> return data about a single stream (using by_name endpoint)
/streams/{name}/sources
/streams/{name}/sources/{id}
/streams/{name}/recordings
/streams/{name}/recordings/{id}
/tokens/{id}



online/offline
    restricted yes/no
    temporary yes/no
public/private
    restricted yes/no



TODO
StreamStat
- streamId
- 



async function getLiveTokens() {
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/active/all`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return body.data.tokenIds;
}



export async function GET(event) {
    const url = `${MILLICAST_API_ENDPOINT}/api/publish_token/list?sortBy=AddedOn&page=1&itemsOnPage=25&isDescending=true`;
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    const liveTokens = await getLiveTokens();

    let streams = {};
    body.data.forEach((token) => {
        token.streams.forEach((stream) => {
            let name = stream.streamName;
            if (!streams.hasOwnProperty(name)) {
                streams[name] = {"tokens":[], "live": false, "public": true, "restricted": false, "expires": false};
            }
            
            let protocol = 'WHIP';
            ['WHIP','RTMP', 'SRT'].forEach((p) => {
                if (token.label.startsWith(`[${p}]`)) {
                    protocol = p;
                    token.label = token.label.replace(`[${p}]`, '').trim();
                }
            });

            let mbr = false;
            if (token.label.startsWith('[MBR]')) {
                mbr = true;
                token.label = token.label.replace('[MBR]', '').trim();
            }

            streams[name]["tokens"].push({
                id: token.id,
                label: token.label,
                protocol: protocol,
                multibitrate: mbr,
                created: token.addedOn,
                expires: token.expiresOn || undefined,
                token: token.token,
                settings: token,
            });

            if (liveTokens.includes(token.id)) {
                streams[name]["live"] = true;
            }

            streams[name]["expires"] = token.expiresOn ? true : false;

            // TODO: handle better when more than one stream
            streams[name]["public"] = !token.subscribeRequiresAuth;
            streams[name]["restricted"] = token.allowedCountries.length > 0 || token.allowedIpAddresses.length > 0 || token.allowedOrigins.length > 0 || token.deniedCountries.length > 0;
        });
    });

    return json(streams);
}





{
    "status":"success",
    "data": [
        {
            "allowedCountries":[],
            "deniedCountries":[],
            "subscribeRequiresAuth":false,
            "record":false,
            "multisource":true,
            "enableThumbnails":false,
            "lowLatencyRtmp":true,
            "integrationId":"None",
            "displaySrtPassphrase":false,
            "id":6263060,
            "label":"codepen",
            "token":"10ae9c8928d0cadcc0635c8662292979f611de52a09d02a8024cb9f01a652a43",
            "addedOn":"2023-11-07T02:32:54Z",
            "isActive":true,
            "streams":[
                {
                    "streamName":"websdk",
                    "isRegex":false
                }],
            "allowedOrigins":[],
            "allowedIpAddresses":[],
            "originCluster":""
        },
        {"allowedCountries":[],"deniedCountries":[],"subscribeRequiresAuth":false,"record":false,"multisource":true,"enableThumbnails":false,"lowLatencyRtmp":true,"integrationId":"None","displaySrtPassphrase":false,"id":6111032,"label":"multi-source-builder","token":"f97cdcccc5d878dcc45dfb7e03b4504e0d2eb64c287b24fa05e03163f2d0f0f0","addedOn":"2023-10-11T22:06:27Z","isActive":true, "streams":[{"streamName":"myStreamName","isRegex":false} ], "allowedOrigins":[],"allowedIpAddresses":[]},
        ...
    ]
}


*/