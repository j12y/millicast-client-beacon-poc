<script lang="ts">
    /**
     *  VideoPlayer
     * 
     *  This component provides a basic video player. It requires an account id and stream name.
     * 
     *      <Player accountId={ id } streamName={ stream } />
     * 
     */

    import { Director, View } from '@millicast/sdk';
    import StatusBadge from './StatusBadge.svelte';

    export let accountId;
    export let streamName;

    export let controls;
    export let live = false;

    let videoPlayer;

    const sources = new Set();
    const sourceTranceiverMap = new Map();

    main();

    async function main() {
        const subscriber = () => Director.getSubscriber({
            streamName: streamName,
            streamAccountId: accountId
        });

        const view = new View(streamName, subscriber);
        view.on('track', handleTrackEvent);
        view.on("broadcastEvent", handleBroadcastEvent);


        try {

            await view.connect({
                events: ['active', 'inactive', 'stopped', 'layers', 'viewercount']
            });
        } catch (e) {
            view.reconnect();
        }
    }

    /**
     * Track events indicate 
     * 
     * @param event
     * 
     * 
     */
    async function handleTrackEvent(event) {
        console.log('Track Event');
        console.log(event);
        console.log(event.streams);
        console.log(`kind=${event.track.kind}`);
        console.log(`id=${event.track.id}`);
        console.log(`mid=${event.track.mid}`);
        let tracks = event.streams[0].getTracks();
        tracks.forEach(element => {
            console.log(element);
        });

        videoPlayer.srcObject = event.streams[0];
        videoPlayer.hidden = false;
        videoPlayer.autoplay = true;
    }

    /**
     *  Broadcast events indicate when a stream state has changed for a broadcast source.
     *  It may be: Active, Inactive, Stopped, Vad, Layers, Migrate, or Viewercount
     * 
     *  @param event 
     * 
     *  https://docs.dolby.io/streaming-apis/docs/viewer-events
     *  https://millicast.github.io/millicast-sdk/Signaling.html#event:broadcastEvent
    */
    async function handleBroadcastEvent(event) {
        const { name, data } = event;
        console.log(`Event: ${name}`);
        switch (name) {
            case 'viewercount':
                handleViewerCountBroadcastEvent(data);
                break;
            case 'active':
                handleActiveBroadcastEvent(data);
                break;
            case 'inactive':
                handleInActiveBroadcastEvent(data);
                break;
            case 'stopped':
                handleStoppedBroadcastEvent(data);
                break;
            case 'layers':
                handleLayersBroadcastEvent(data);
                break;
            default:
                console.log("Unhandled Broadcast Event: ", event);
        }
    }

    /**
     * When a viewercount event fires, somebody has started or stopped
     * receiving the stream. The data includes the total count of 
     * viewers. You might use this to update a graphic overlay.
     * 
     * @param data
     */
    function handleViewerCountBroadcastEvent(data) {
        console.log(data);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleLayersBroadcastEvent(data) {
        console.log(data);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleActiveBroadcastEvent(data) {
        console.log(data);

        live = true;
        sources.add(data.sourceID);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleInActiveBroadcastEvent(data) {
        console.log(data);
    }

    /**
     * TODO
     * 
     * @param data
     */
    function handleStoppedBroadcastEvent(data) {
        console.log(data);
        live = false;
    }


</script>


<div>
    <video width="640" height="360" bind:this={ videoPlayer } autoplay playsinline { controls } muted>
        This browser does not support video elements.
    </video>
</div>

<StatusBadge label={ live ? "LIVE" : "OFFLINE" } />