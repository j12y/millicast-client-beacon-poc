

# Components

## Dropdown Selectors

- [x] Clusters - /test/components/clusters
- [x] Tokens - /test/components/tokens
- [x] Streams - /test/components/streams

## Player

- [ ] Player - /test/components/player
    - [x] StreamSelection
    - [x] VideoPlayer
    - [ ] live / not live - https://github.com/search?q=repo%3Amillicast%2Fvue-viewer-plugin%20isLive&type=code
    - [ ] MediaStats
    - [ ] Diagnose
    - [ ] SecurePlayer
    - [ ] MultiViewPlayer - https://dolby.io/blog/building-a-webrtc-live-stream-multiviewer-app/
    - [ ] Audio control
    - [ ] Play/Pause Duration
- [ ] Recordings
    - [ ] Clipping
- [ ] Transcoders


# REST APIs

## Millicast

Proxy to millicast endpoint with same interface.

- [ ] Account
    - [x] Read cascade settings - /api/account/geo_cascade
    - [ ] Update cascade settings
- [x] Analytics
    - [x] /api/analytics/account/total
    - [x] /api/analytics/account/series
    - [x] /api/analytics/account/geo_total
    - [x] /api/analytics/account/geo_series
    - [x] /api/analytics/streams/total
    - [x] /api/analytics/streams/series
    - [x] /api/analytics/streams/geo_total
    - [x] /api/analytics/streams/geo_series
    - [x] /api/analytics/tracking/streams/total
    - [x] /api/analytics/tracking/streams/series
    - [x] /api/analytics/tracking/total
    - [x] /api/analytics/tracking/series
- [x] Cluster
    - [x] Read Clusters -  /api/cluster
    - [x] Update Cluster
- [ ] Geo
    - [x] Read settings - /api/geo/account
    - [ ] Update settings
- [ ] PublishToken
    - [x] Read Token - /api/publish_token/{tokenId}
    - [ ] Delete Token
    - [ ] Update Token
    - [x] List Tokens - /api/publish_token/list
    - [x] List Tokens By Name - /api/publish_token/list_by_name
    - [ ] Create Token
    - [x] Get Active Publish Token ID - /api/publish_token/active
    - [x] Get All Active Publish Token IDs - /api/publish_token/active/all
    - [ ] Disable Publish Token
- [ ] RecordFiles
    - [ ] RecordFilesV2
        - [ ] list media assets
            - [x] query params
            - [ ] body params
        - [x] read media assets
        - [ ] delete media assets
    - [x] read file
    - [ ] delete files
    - [ ] delete all files
    - [x] list files
    - [x] list files by token
    - [x] list files by stream
    - [x] usage
    - [x] usage billable
    - [ ] create clip
    - [ ] get clip request
    - [ ] list clip requests
    - [ ] list available clip sources
- [ ] Stream
- [ ] SubscribeToken
    - [x] Get token
    - [ ] delete token
    - [ ] update token
    - [x] list tokens
    - [x] list tokens by name
    - [ ] create token
- [ ] Transcoder
- [ ] Webhooks

### GraphQL

- [ ] GraphQL

### Director API

- [ ] ClusterSettings
- [ ] Director
- [ ] RtcBackup
- [ ] Whep
- [ ] Whip

## Application

Streams created to provide convenient transformations or cleaner interface for application.

- [ ] Streams 
    - [x] Stream name list - /api/v1/streams
    - [x] Stream details by name - /api/v1/streams/{name}




