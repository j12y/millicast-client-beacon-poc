

# Components

## Dropdown Selectors

- [x] Clusters - /test/components/clusters
- [x] Tokens - /test/components/tokens
- [x] Streams - /test/components/streams

## Player

- [ ] Player - /test/components/player
    - [x] StreamSelection
    - [x] VideoPlayer
    - [ ] live / not live
    - [ ] MediaStats
    - [ ] Diagnose
    - [ ] SecurePlayer
    - [ ] MultiViewPlayer
    - [ ] Audio control
    - [ ] Play/Pause Duration
- [ ] Recordings
    - [ ] Clipping
- [ ] Transcoders


# REST APIs

## Millicast

Proxy to millicast endpoint with same interface.

- [ ] Analytics
- [ ] Transcoder
- [ ] Account
- [x] Cluster
    - [x] Read Clusters -  /api/millicast/cluster
    - [x] Update Cluster
- [ ] Geo
- [ ] PublishToken
    - [x] Read Token - /api/millicast/publish_token/{tokenId}
    - [ ] Delete Token
    - [ ] Update Token
    - [x] List Tokens - /api/millicast/publish_token/list
    - [x] List Tokens By Name - /api/millicast/publish_token/list_by_name
    - [ ] Create Token
    - [ ] Get Active Publish Token ID
    - [x] Get All Active Publish Token IDs - /api/millicast/publish_token/active/all
    - [ ] Disable Publish Token
- [ ] RecordFiles
    - [ ] RecordFilesV2
- [ ] Stream
- [ ] SubscribeToken
- [ ] Webhooks

## Application

Streams created to provide convenient transformations or cleaner interface for application.

- [ ] Streams 
    - [x] Stream name list - /api/v1/streams
    - [x] Stream details by name - /api/v1/streams/{name}




