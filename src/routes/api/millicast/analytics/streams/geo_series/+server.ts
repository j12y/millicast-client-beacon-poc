import { MILLICAST_API_SECRET, MILLICAST_API_ENDPOINT } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function GET(event) {
    const startDate = event.url.searchParams.get('startDate');
    const stopDate = event.url.searchParams.get('stopDate');
    const resolution = event.url.searchParams.get('resolution');
    const streamNames = event.url.searchParams.getAll('streamNames') || [];

    let url = `${MILLICAST_API_ENDPOINT}/api/analytics/streams/geo_series?startDate=${startDate}&stopDate=${stopDate}&resolution=${resolution}`
    streamNames.forEach(streamName => {
        url += `&streamNames=${streamName}`
    });
    const options = {method: 'GET', headers: {accept: 'application/json', authorization: `Bearer ${MILLICAST_API_SECRET}`}};

    let response = await fetch(url, options);
    let body = await response.json();

    return json(body.data);
}

/*
GET http://localhost:5173/api/millicast/analytics/streams/geo_series?startDate=2023-11-01&stopDate=2023-11-30&resolution=day&streamNames=millidash&streamNames=360

{
    "geo": {
        "360": {
            "2023-11-01T00:00:00Z": {},
            "2023-11-02T00:00:00Z": {},
            "2023-11-03T00:00:00Z": {},
            "2023-11-04T00:00:00Z": {},
            "2023-11-05T00:00:00Z": {},
            "2023-11-06T00:00:00Z": {},
            "2023-11-07T00:00:00Z": {},
            "2023-11-08T00:00:00Z": {},
            "2023-11-09T00:00:00Z": {
                "US": {
                    "publishes": 6,
                    "views": 8,
                    "publishDuration": 18600,
                    "viewDuration": 18590,
                    "bytesOut": 3011778976,
                    "bytesIn": 2912409182
                }
            },
            "2023-11-10T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 24,
                    "publishDuration": 86400,
                    "viewDuration": 86400,
                    "bytesOut": 21635481301,
                    "bytesIn": 21007180419
                }
            },
            "2023-11-11T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 239,
                    "publishDuration": 86400,
                    "viewDuration": 105672,
                    "bytesOut": 26423639337,
                    "bytesIn": 20999447391
                }
            },
            "2023-11-12T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 24,
                    "publishDuration": 86400,
                    "viewDuration": 86400,
                    "bytesOut": 21646831987,
                    "bytesIn": 21018555854
                }
            },
            "2023-11-13T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 25,
                    "publishDuration": 86400,
                    "viewDuration": 86413,
                    "bytesOut": 21652988220,
                    "bytesIn": 21021572848
                }
            },
            "2023-11-14T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 25,
                    "publishDuration": 86400,
                    "viewDuration": 86469,
                    "bytesOut": 21671230714,
                    "bytesIn": 21025336647
                }
            },
            "2023-11-15T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 32,
                    "publishDuration": 86400,
                    "viewDuration": 86996,
                    "bytesOut": 21801952790,
                    "bytesIn": 21025957156
                }
            },
            "2023-11-16T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 98,
                    "publishDuration": 86400,
                    "viewDuration": 88607,
                    "bytesOut": 22190878401,
                    "bytesIn": 21018506244
                }
            },
            "2023-11-17T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 24,
                    "publishDuration": 86400,
                    "viewDuration": 86400,
                    "bytesOut": 21653491894,
                    "bytesIn": 21024995162
                }
            },
            "2023-11-18T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 24,
                    "publishDuration": 86400,
                    "viewDuration": 86400,
                    "bytesOut": 21654879731,
                    "bytesIn": 21026425088
                }
            },
            "2023-11-19T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 23,
                    "publishDuration": 86400,
                    "viewDuration": 86400,
                    "bytesOut": 21657660395,
                    "bytesIn": 21029134225
                }
            },
            "2023-11-20T00:00:00Z": {
                "US": {
                    "publishes": 24,
                    "views": 41,
                    "publishDuration": 86400,
                    "viewDuration": 86659,
                    "bytesOut": 21718298798,
                    "bytesIn": 21027318795
                }
            },
            "2023-11-21T00:00:00Z": {
                "US": {
                    "publishes": 18,
                    "views": 18,
                    "publishDuration": 64800,
                    "viewDuration": 64800,
                    "bytesOut": 16231424201,
                    "bytesIn": 15759996390
                }
            },
            "2023-11-22T00:00:00Z": {},
            "2023-11-23T00:00:00Z": {},
            "2023-11-24T00:00:00Z": {},
            "2023-11-25T00:00:00Z": {},
            "2023-11-26T00:00:00Z": {},
            "2023-11-27T00:00:00Z": {},
            "2023-11-28T00:00:00Z": {},
            "2023-11-29T00:00:00Z": {}
        },
        "millidash": {
            "2023-11-01T00:00:00Z": {},
            "2023-11-02T00:00:00Z": {},
            "2023-11-03T00:00:00Z": {},
            "2023-11-04T00:00:00Z": {},
            "2023-11-05T00:00:00Z": {},
            "2023-11-06T00:00:00Z": {},
            "2023-11-07T00:00:00Z": {},
            "2023-11-08T00:00:00Z": {},
            "2023-11-09T00:00:00Z": {},
            "2023-11-10T00:00:00Z": {},
            "2023-11-11T00:00:00Z": {},
            "2023-11-12T00:00:00Z": {
                "US": {
                    "publishes": 7,
                    "views": 35,
                    "publishDuration": 2529,
                    "viewDuration": 5434,
                    "bytesOut": 290165886,
                    "bytesIn": 409420607
                }
            },
            "2023-11-13T00:00:00Z": {
                "US": {
                    "publishes": 2,
                    "views": 3,
                    "publishDuration": 222,
                    "viewDuration": 147,
                    "bytesOut": 9650574,
                    "bytesIn": 19801361
                }
            },
            "2023-11-14T00:00:00Z": {
                "US": {
                    "publishes": 7,
                    "views": 1,
                    "publishDuration": 649,
                    "viewDuration": 17,
                    "bytesOut": 3511592,
                    "bytesIn": 133279419
                }
            },
            "2023-11-15T00:00:00Z": {
                "US": {
                    "publishes": 1,
                    "views": 0,
                    "publishDuration": 441,
                    "viewDuration": 0,
                    "bytesOut": 0,
                    "bytesIn": 6622559
                }
            },
            "2023-11-16T00:00:00Z": {},
            "2023-11-17T00:00:00Z": {},
            "2023-11-18T00:00:00Z": {},
            "2023-11-19T00:00:00Z": {},
            "2023-11-20T00:00:00Z": {},
            "2023-11-21T00:00:00Z": {},
            "2023-11-22T00:00:00Z": {},
            "2023-11-23T00:00:00Z": {},
            "2023-11-24T00:00:00Z": {},
            "2023-11-25T00:00:00Z": {},
            "2023-11-26T00:00:00Z": {},
            "2023-11-27T00:00:00Z": {},
            "2023-11-28T00:00:00Z": {},
            "2023-11-29T00:00:00Z": {}
        }
    }
}



*/
